// content/.lock.json remembers every published id, its slug, and a fingerprint of its file.
// It lets us (1) bump updated_at automatically when a file changes and
// (2) fail the build if a slug changes or an edit forgot to bump updated_at.
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { CONTENT_DIR, ROOT, type Kind, type SourceFile } from "./content";
import { contentWithoutUpdatedAt, setUpdatedAt } from "./frontmatter";
import { dateTime } from "./schemas";

const LOCK_FILE = path.join(CONTENT_DIR, ".lock.json");

type LockEntry = { kind: Kind; file: string; slug?: string; hash: string; updated_at: string };
type Lock = Record<string, LockEntry>;

function readLock(): Lock {
  return fs.existsSync(LOCK_FILE) ? JSON.parse(fs.readFileSync(LOCK_FILE, "utf8")) : {};
}

function writeLock(lock: Lock) {
  const sorted = Object.fromEntries(Object.entries(lock).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(LOCK_FILE, `${JSON.stringify(sorted, null, 2)}\n`);
}

function hashOf(raw: string): string {
  return crypto.createHash("sha256").update(contentWithoutUpdatedAt(raw)).digest("hex").slice(0, 16);
}

function updatedAtOf(raw: string): string | undefined {
  return raw.match(/^updated_at:\s*["']?([^"'\n]+?)["']?\s*$/m)?.[1];
}

// Current time as ISO 8601 with this computer's timezone offset, e.g. "2026-10-08T20:00:00+05:30".
export function nowIso(date: Date = new Date()): string {
  const offsetMinutes = -date.getTimezoneOffset();
  const local = new Date(date.getTime() + offsetMinutes * 60_000).toISOString().slice(0, 19);
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const abs = Math.abs(offsetMinutes);
  const hh = String(Math.floor(abs / 60)).padStart(2, "0");
  const mm = String(abs % 60).padStart(2, "0");
  return `${local}${sign}${hh}:${mm}`;
}

function idChangedMessage(file: string, from: string, to: string) {
  return `${file}: id changed from "${from}" to "${to}". A published id can never change. Change it back.`;
}

// If a file's id is new, and the same file used to have an id that no longer exists anywhere,
// the id was edited.
function previousIdOf(lock: Lock, file: string, currentIds: Set<string>): string | undefined {
  return Object.entries(lock).find(([otherId, e]) => e.file === file && !currentIds.has(otherId))?.[0];
}

function idsOf(files: SourceFile[]): Set<string> {
  return new Set(files.flatMap((f) => (f.id ? [f.id] : [])));
}

function slugChangedMessage(file: string, from: string, to: string) {
  return `${file}: slug changed from "${from}" to "${to}". A published slug can never change (DevHub would see a duplicate). Change it back.`;
}

// Used by validation: reports files whose fingerprint does not match the lock.
export function checkLock(files: SourceFile[]): string[] {
  const lock = readLock();
  const currentIds = idsOf(files);
  const counts = new Map<string, number>();
  for (const f of files) if (f.id) counts.set(f.id, (counts.get(f.id) ?? 0) + 1);
  const errors: string[] = [];
  for (const f of files) {
    // Files sharing an id are reported as duplicates by validation; skip them here.
    if (!f.id || counts.get(f.id)! > 1) continue;
    const entry = lock[f.id];
    const previousId = entry ? undefined : previousIdOf(lock, f.file, currentIds);
    if (previousId) {
      errors.push(idChangedMessage(f.file, previousId, f.id));
    } else if (!entry) {
      errors.push(`${f.file}: new file has not been registered. Run "npm run stamp".`);
    } else if (entry.slug && f.slug && entry.slug !== f.slug) {
      errors.push(slugChangedMessage(f.file, entry.slug, f.slug));
    } else if (entry.hash !== hashOf(f.raw) || entry.updated_at !== updatedAtOf(f.raw)) {
      errors.push(`${f.file}: was edited but updated_at was not bumped. Run "npm run stamp".`);
    }
  }
  return errors;
}

export type StampResult = { added: string[]; updated: string[]; removed: string[]; errors: string[] };

// Bumps updated_at in every changed file and brings the lock up to date.
export function stamp(files: SourceFile[]): StampResult {
  const lock = readLock();
  const result: StampResult = { added: [], updated: [], removed: [], errors: [] };
  const currentIds = idsOf(files);
  const now = nowIso();
  const seen = new Set<string>();

  for (const f of files) {
    if (!f.id) continue;
    if (seen.has(f.id)) continue; // duplicate ids are reported by validation
    seen.add(f.id);
    const entry = lock[f.id];
    const absPath = path.join(ROOT, f.file);
    let raw = f.raw;

    if (entry?.slug && f.slug && entry.slug !== f.slug) {
      result.errors.push(slugChangedMessage(f.file, entry.slug, f.slug));
      continue;
    }
    const previousId = entry ? undefined : previousIdOf(lock, f.file, currentIds);
    if (previousId) {
      result.errors.push(idChangedMessage(f.file, previousId, f.id));
      seen.add(previousId);
      continue;
    }

    const changed = !entry || entry.hash !== hashOf(raw);
    const current = updatedAtOf(raw);
    const hasValidDate = current !== undefined && dateTime.safeParse(current).success;
    // New files keep the updated_at they were created with; edited files get "now".
    if ((entry && changed) || !hasValidDate) {
      raw = setUpdatedAt(raw, now);
      fs.writeFileSync(absPath, raw);
    }

    if (!entry) result.added.push(f.file);
    else if (changed) result.updated.push(f.file);

    lock[f.id] = {
      kind: f.kind,
      file: f.file,
      ...(f.slug ? { slug: f.slug } : {}),
      hash: hashOf(raw),
      updated_at: updatedAtOf(raw)!,
    };
  }

  for (const [id, entry] of Object.entries(lock)) {
    if (!seen.has(id)) {
      result.removed.push(`${entry.file} (id ${id})`);
      delete lock[id];
    }
  }

  writeLock(lock);
  return result;
}
