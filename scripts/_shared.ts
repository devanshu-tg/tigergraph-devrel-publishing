// Helpers shared by the scripts in this folder.
import { execFile } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import { parse } from "csv-parse/sync";
import { blogJson, eventJson, projectJson, siteUrl } from "../src/lib/api";
import { loadContent } from "../src/lib/content";
import { checkLock, stamp } from "../src/lib/lock";

// Reads "--name value" pairs and plain arguments from the command line.
export function parseArgs(argv = process.argv.slice(2)) {
  const flags: Record<string, string | true> = {};
  const positional: string[] = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("--")) {
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("--")) {
        flags[arg.slice(2)] = next;
        i++;
      } else {
        flags[arg.slice(2)] = true;
      }
    } else {
      positional.push(arg);
    }
  }
  return { flags, positional };
}

export function fail(message: string): never {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

export function slugify(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
}

// A short random id like "evt_k7m2q9". Never derived from the title, so it never needs to change.
export function newId(prefix: string): string {
  const taken = new Set(loadContent().files.flatMap((f) => (f.id ? [f.id] : [])));
  for (;;) {
    const id = `${prefix}_${crypto.randomBytes(4).toString("hex").slice(0, 6)}`;
    if (!taken.has(id)) return id;
  }
}

// Team names are matched loosely: case, spaces and punctuation are ignored.
export function normalizeName(name: string): string {
  return name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

export type CsvRow = Record<string, string>;

export function readCsv(file: string): { headers: string[]; rows: CsvRow[] } {
  if (!fs.existsSync(file)) fail(`CSV file not found: ${file}`);
  const rows: CsvRow[] = parse(fs.readFileSync(file), {
    columns: true,
    bom: true,
    skip_empty_lines: true,
    relax_column_count: true,
    trim: true,
  });
  const headers = rows.length ? Object.keys(rows[0]) : [];
  return { headers, rows };
}

// Finds the first CSV column whose name matches one of the candidates (ignoring case/punctuation).
// Falls back to columns that start with a candidate, for form headers that carry hint text.
export function findColumn(headers: string[], candidates: string[]): string | undefined {
  const wanted = candidates.map(normalizeName).filter(Boolean);
  for (const want of wanted) {
    const found = headers.find((h) => normalizeName(h) === want);
    if (found) return found;
  }
  for (const want of wanted) {
    const found = headers.find((h) => normalizeName(h).startsWith(want));
    if (found) return found;
  }
  return undefined;
}

const URL_IN_TEXT =
  /(?:https?:\/\/|www\.)[^\s,]+|(?<![\w.@/])(?:github\.com|[\w-]+\.(?:vercel\.app|streamlit\.app|onrender\.com|netlify\.app|hf\.space))(?:\/[^\s,]*)?/gi;

// The first link in a cell, e.g. "BE: github.com/x/y, FE: ..." → "https://github.com/x/y".
// Placeholders like ".", "NA", "Not deployed" → null. Prefers a GitHub link when asked.
export function cleanUrl(value: string | undefined, preferGithub = false): string | null {
  const found = [...(value ?? "").matchAll(URL_IN_TEXT)].map((m) => m[0].replace(/[.,;)\]\\]+$/, ""));
  const url = (preferGithub && found.find((u) => /github\.com/i.test(u))) || found[0];
  if (!url) return null;
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

// "https://github.com/Owner/Repo.git/tree/main" → { owner: "owner", repo: "repo" }.
export function repoKey(url: string | null | undefined): { owner: string; repo: string | null } | null {
  const m = (url ?? "").match(/^https?:\/\/(?:www\.)?github\.com\/([^/\s?#]+)(?:\/([^/\s?#]+))?/i);
  if (!m) return null;
  return { owner: m[1].toLowerCase(), repo: m[2] ? m[2].replace(/\.git$/i, "").toLowerCase() : null };
}

export function repoId(url: string | null | undefined): string | null {
  const key = repoKey(url);
  return key?.repo ? `${key.owner}/${key.repo}` : null;
}

// "github.com/x/cloudforce-fraud-ring" → "Cloudforce Fraud Ring" ("NetraVote" keeps its capitals).
export function titleFromRepo(url: string): string {
  const m = url.match(/^https?:\/\/(?:www\.)?github\.com\/[^/\s?#]+\/([^/\s?#]+)/i);
  const name = (m ? m[1] : (url.replace(/\/+$/, "").split("/").pop() ?? "")).replace(/\.git$/i, "");
  return name
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// "4/1/2026 22:09:41" (Google Forms) → sortable number. Unknown formats sort first.
export function timestampValue(value: string | undefined): number {
  const m = (value ?? "").match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2}):?(\d{2})?/);
  if (m) return Date.UTC(+m[3], +m[1] - 1, +m[2], +m[4], +m[5], +(m[6] ?? 0));
  const parsed = Date.parse(value ?? "");
  return Number.isNaN(parsed) ? 0 : parsed;
}

// Checks which public GitHub repos exist (git ls-remote, no API token needed).
export async function checkGithubRepos(urls: string[]): Promise<Map<string, boolean | null>> {
  const ids = [...new Set(urls.map(repoId).filter((id): id is string => Boolean(id)))];
  const results = new Map<string, boolean | null>();
  let next = 0;
  async function worker() {
    while (next < ids.length) {
      const id = ids[next++];
      results.set(id, await gitRepoExists(id));
    }
  }
  await Promise.all(Array.from({ length: 12 }, worker));
  return results;
}

function gitRepoExists(id: string): Promise<boolean | null> {
  return new Promise((resolve) => {
    execFile(
      "git",
      ["ls-remote", "--heads", `https://github.com/${id}.git`],
      { timeout: 25_000, env: { ...process.env, GIT_TERMINAL_PROMPT: "0" } },
      (err) => resolve(err ? ((err as NodeJS.ErrnoException & { killed?: boolean }).killed ? null : false) : true),
    );
  });
}

export function emptyToNull(value: string | undefined): string | null {
  const v = (value ?? "").trim();
  return v ? v : null;
}

// Bumps updated_at on changed files, then prints a summary.
export function runStamp(): boolean {
  const result = stamp(loadContent().files);
  for (const f of result.added) console.log(`  + registered  ${f}`);
  for (const f of result.updated) console.log(`  ~ updated_at  ${f}`);
  for (const f of result.removed) console.log(`  - removed     ${f}`);
  for (const e of result.errors) console.error(`  ✖ ${e}`);
  if (!result.added.length && !result.updated.length && !result.removed.length) {
    console.log("  No changed files.");
  }
  return result.errors.length === 0;
}

const DATE_FIELDS = ["starts_at", "ends_at", "updated_at", "published_at"];
const TZ_SUFFIX = /(Z|[+-]\d{2}:\d{2})$/;

// Every rule from the DevHub team, checked on the content files and on the final JSON.
export function validateAll(): boolean {
  const content = loadContent();
  const errors = [...content.errors, ...checkLock(content.files)];

  // Final check on the JSON exactly as DevHub will receive it.
  const output = [
    ...content.events.map((e) => ({ file: e.file, json: eventJson(e) as Record<string, unknown> })),
    ...content.projects.map((p) => ({ file: p.file, json: projectJson(p) as Record<string, unknown> })),
    ...content.blogs.map((b) => ({ file: b.file, json: blogJson(b) as Record<string, unknown> })),
  ];
  for (const { file, json } of output) {
    for (const [key, value] of Object.entries(json)) {
      if (key.endsWith("_url") && value !== null && !/^https?:\/\//.test(String(value))) {
        errors.push(`${file}: ${key} is not an absolute URL in the JSON output`);
      }
      if (DATE_FIELDS.includes(key) && !TZ_SUFFIX.test(String(value))) {
        errors.push(`${file}: ${key} has no timezone in the JSON output`);
      }
    }
  }

  if (process.env.VERCEL_ENV === "production" && siteUrl().includes("localhost")) {
    errors.push("SITE_URL is not set, so image URLs would point at localhost. Set SITE_URL in Vercel.");
  }

  if (errors.length) {
    console.error(`\n✖ Found ${errors.length} problem(s):\n`);
    for (const e of [...new Set(errors)]) console.error(`  - ${e}`);
    console.error("");
    return false;
  }
  console.log(
    `✔ Content is valid: ${content.events.length} events, ${content.projects.length} projects, ${content.blogs.length} blogs.`,
  );
  return true;
}
