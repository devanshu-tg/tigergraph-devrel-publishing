// Turns a hackathon submissions CSV (Unstop export, Google Form, Devfolio...) into project files.
//   npm run import:projects -- --event graph-for-good-2026 --csv ~/Downloads/submissions.csv
//   npm run import:projects -- --event my-hack --csv round2.csv --source google_form --round "Round 2"
//
// Options:
//   --source <name>      which block of scripts/import-mappings.json describes the columns (default: unstop)
//   --round <label>      tag the projects with a round, e.g. "Round 2" (shown on the site). Import rounds
//                        in order: a project submitted again in a later round keeps all its rounds.
//   --only-teams <file>  import only these teams (a CSV with a team column, or one name per line)
//   --no-repo-check      skip checking that each GitHub repo exists (needs internet)
//
// What it does:
//   - one project per team: repeated submissions (same repo or same submitter) keep the latest one
//   - skips rows with no usable GitHub repo, a missing/private repo, or no description, and lists them
//   - safe to re-run: a project is matched by its repo (then team name) and keeps its id,
//     placement and prize (use import:results for those)
import fs from "node:fs";
import path from "node:path";
import { loadContent, PROJECTS_DIR, ROOT } from "../src/lib/content";
import { parseFrontmatter, writeFrontmatter } from "../src/lib/frontmatter";
import { nowIso } from "../src/lib/lock";
import mappings from "./import-mappings.json";
import {
  checkGithubRepos,
  cleanUrl,
  emptyToNull,
  fail,
  findColumn,
  newId,
  normalizeName,
  parseArgs,
  readCsv,
  repoId,
  repoKey,
  runStamp,
  slugify,
  timestampValue,
  titleFromRepo,
  validateAll,
  type CsvRow,
} from "./_shared";

type FieldSpec = string | { column: string; label?: string };
type Mapping = {
  team: string[];
  title?: string[];
  description?: string[];
  repo_url: string[];
  demo_url?: string[];
  image_url?: string[];
  title_from_first_line?: boolean;
  title_fallback_repo_name?: boolean;
  extra_sections?: FieldSpec[];
  details?: FieldSpec[];
  metrics_table?: { columns: string[]; rows: { label: string; columns: string[] }[] };
  links?: FieldSpec[];
  timestamp?: string[];
  dedupe_by?: string[];
  exclude?: string[];
  force_include?: string[];
  skip_text_pattern?: string;
  min_section_length?: number;
  min_description_length?: number;
};

const { flags } = parseArgs();
const eventSlug = typeof flags.event === "string" ? flags.event : fail("Missing --event <hackathon-slug>");
const csvPath = typeof flags.csv === "string" ? flags.csv : fail("Missing --csv <path-to-file.csv>");
const source = typeof flags.source === "string" ? flags.source : "unstop";
const round = typeof flags.round === "string" ? flags.round.trim() : null;
const checkRepos = flags["no-repo-check"] !== true;
const mapping = (mappings as unknown as Record<string, Mapping>)[source];
if (!mapping || source === "results" || source.startsWith("_")) {
  fail(`No mapping called "${source}" in scripts/import-mappings.json`);
}

const event = loadContent().events.find((e) => e.slug === eventSlug);
if (!event) fail(`No event with slug "${eventSlug}". Create the hackathon event first.`);
if (event.type !== "hackathon") fail(`"${eventSlug}" is a ${event.type}, not a hackathon.`);

const { headers, rows } = readCsv(csvPath);
const col = (candidates?: string[]) => (candidates?.length ? findColumn(headers, candidates) : undefined);
const specColumn = (spec: FieldSpec) => {
  const name = typeof spec === "string" ? spec : spec.column;
  const column = findColumn(headers, [name]);
  const label = typeof spec === "string" ? name : (spec.label ?? name);
  return column ? { column, label: label.split("\n")[0].trim() } : null;
};

const columns = {
  team: col(mapping.team),
  title: col(mapping.title),
  description: col(mapping.description),
  repo_url: col(mapping.repo_url),
  demo_url: col(mapping.demo_url),
  image_url: col(mapping.image_url),
  timestamp: col(mapping.timestamp),
};
const missing: string[] = (["team", "repo_url"] as const).filter((f) => !columns[f]);
if (!columns.title && !mapping.title_fallback_repo_name) missing.push("title");
if (missing.length) {
  fail(
    `Could not find a column for: ${missing.join(", ")}.\n` +
      `  Columns in this CSV: ${headers.map((h) => h.split("\n")[0]).join(" | ")}\n` +
      `  Add the right column name to "${source}" in scripts/import-mappings.json and run again.`,
  );
}
const sections = (mapping.extra_sections ?? []).map(specColumn).filter((s) => s !== null);
const details = (mapping.details ?? []).map(specColumn).filter((s) => s !== null);
const links = (mapping.links ?? []).map(specColumn).filter((s) => s !== null);
const dedupeColumns = (mapping.dedupe_by ?? []).map((c) => findColumn(headers, [c])).filter(Boolean) as string[];
const skipText = mapping.skip_text_pattern ? new RegExp(mapping.skip_text_pattern, "i") : null;
const minDescription = mapping.min_description_length ?? 20;
const minSection = mapping.min_section_length ?? 3;
const excluded = new Set((mapping.exclude ?? []).map((e) => repoId(e) ?? normalizeName(e)));
const forced = new Set((mapping.force_include ?? []).map((e) => repoId(e) ?? normalizeName(e)));

console.log(`\nColumns used from ${path.basename(csvPath)}:`);
for (const [field, column] of Object.entries(columns)) {
  console.log(`  ${field.padEnd(12)} ← ${column ? column.split("\n")[0] : "(none)"}`);
}
for (const s of [...sections, ...details, ...links]) console.log(`  ${"(extra)".padEnd(12)} ← ${s.label}`);

// --- helpers to build each project from a row ---
const cell = (row: CsvRow, column?: string) => (column ? (row[column] ?? "").trim() : "");

const TITLE_LABEL = /^(project\s*)?(title|tile)(\s*(and|&)\s*desc\w*)?\s*[:\-–]\s*/i;
const BARE_LABEL = /^(project\s*)?(title|tile|name)(\s*(and|&)\s*desc\w*)?\s*[:\-–]?$/i;
// Titles that say nothing about the project; the repo name is used instead when it says more.
const GENERIC_TITLE = /^(the\s)?(agentic\s)?(graph\s?rag|tigergraph|tiger graph|rag)([\s_-]*(hackathon|project|benchmark|inference))*$|hackathon$/i;
function splitTitle(text: string): { title: string; rest: string } {
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const original = lines[i].trim().replace(/^[#*\s]+|[*\s]+$/g, "");
    if (!original || BARE_LABEL.test(original)) continue;
    let line = original.replace(TITLE_LABEL, "").trim();
    if (!line) continue;
    let rest = lines.slice(i + 1).join("\n").trim();
    if (line.length > 95) {
      const separators = [" - ", " — ", " – ", ": ", ". ", "- ", " , ", ", "];
      const cuts = separators.map((sep) => line.indexOf(sep)).filter((n) => n > 3);
      const verb = line.search(/\s(is|are)\s(a|an|the)\s/i);
      if (verb > 3) cuts.push(verb);
      const at = cuts.length ? Math.min(...cuts) : 95;
      rest = `${line}\n\n${rest}`.trim();
      line = line.slice(0, at);
    }
    rest = rest.replace(/^(description|project description)\s*[:\-–]\s*/i, "");
    return { title: line.replace(/[\s.,:–-]+$/, "").trim(), rest };
  }
  return { title: "", rest: "" };
}

function buildDescription(row: CsvRow, mainText: string) {
  const parts: string[] = [];
  if (mainText) parts.push(mainText);
  for (const s of sections) {
    const value = cell(row, s.column);
    if (value.length >= minSection && !(skipText && skipText.test(value))) parts.push(`## ${s.label}\n\n${value}`);
  }
  const bulletList = details
    .map((d) => ({ label: d.label, value: cell(row, d.column).replace(/\s+/g, " ") }))
    .filter((d) => d.value && !/^(n\/?a|none|-|\.|nil)$/i.test(d.value));
  if (bulletList.length) parts.push(`## Details\n\n${bulletList.map((d) => `- **${d.label}:** ${d.value}`).join("\n")}`);
  if (mapping.metrics_table) {
    const t = mapping.metrics_table;
    const tableRows = t.rows
      .map((r) => ({ label: r.label, values: r.columns.map((c) => cell(row, findColumn(headers, [c])).replace(/\|/g, "/").replace(/\s+/g, " ")) }))
      .filter((r) => r.values.some((v) => v && v !== "-"));
    if (tableRows.length) {
      const head = `| Metric | ${t.columns.join(" | ")} |\n|---|${t.columns.map(() => "---").join("|")}|`;
      parts.push(`## Results\n\n${head}\n${tableRows.map((r) => `| ${r.label} | ${r.values.join(" | ")} |`).join("\n")}`);
    }
  }
  const linkList = links
    .map((l) => ({ label: l.label, url: cleanUrl(cell(row, l.column)) }))
    .filter((l): l is { label: string; url: string } => Boolean(l.url));
  if (linkList.length) parts.push(`## Links\n\n${linkList.map((l) => `- ${l.label}: ${l.url}`).join("\n")}`);
  return parts.join("\n\n").trim();
}

// --- turn rows into candidate projects ---
type Candidate = {
  line: number;
  team: string;
  title: string;
  description: string;
  repo: string;
  demo: string | null;
  image: string | null;
  time: number;
  identities: string[];
};
const skipped: string[] = [];
const candidates: Candidate[] = [];

let onlyTeams: Set<string> | null = null;
if (typeof flags["only-teams"] === "string") {
  const text = fs.readFileSync(flags["only-teams"], "utf8");
  const names = text.includes(",")
    ? readCsv(flags["only-teams"]).rows.map((r) => Object.values(r)[0] ?? "")
    : text.split(/\r?\n/);
  onlyTeams = new Set(names.map(normalizeName).filter(Boolean));
}

rows.forEach((row, index) => {
  const line = index + 2; // +1 for the header row, +1 because spreadsheets start at 1
  const team = cell(row, columns.team).replace(/\s+/g, " ");
  if (!team) return skipped.push(`row ${line}: no team name`);
  if (onlyTeams && !onlyTeams.has(normalizeName(team))) return;

  const repo = cleanUrl(cell(row, columns.repo_url), true);
  const key = repoKey(repo);
  const isForced = forced.has(normalizeName(team)) || (repoId(repo) !== null && forced.has(repoId(repo)!));
  if (excluded.has(normalizeName(team)) || (repoId(repo) && excluded.has(repoId(repo)!))) {
    return skipped.push(`row ${line} (${team}): excluded in import-mappings.json`);
  }
  if (!repo) return skipped.push(`row ${line} (${team}): no repo link`);
  if (!key) return skipped.push(`row ${line} (${team}): repo link is not on GitHub (${repo})`);
  if (!key.repo) return skipped.push(`row ${line} (${team}): GitHub profile instead of a repo (${repo})`);

  let title = "";
  let mainText = cell(row, columns.description);
  if (columns.title) {
    const split = splitTitle(cell(row, columns.title));
    title = mapping.title_from_first_line ? split.title : cell(row, columns.title).split("\n")[0].trim();
    if (mapping.title_from_first_line && columns.title === columns.description) mainText = split.rest;
  }
  if (/^https?:\/\//i.test(title) || /^[.\-\s]*$/.test(title)) title = "";
  if (!title && mapping.title_fallback_repo_name) title = titleFromRepo(repo);
  if (GENERIC_TITLE.test(title.trim()) && !GENERIC_TITLE.test(titleFromRepo(repo))) title = titleFromRepo(repo);
  if (!title) return skipped.push(`row ${line} (${team}): no project title`);

  const description = buildDescription(row, mainText);
  const substance = description.replace(/^## Links[\s\S]*$/m, "").replace(/[#*_\-|\s]/g, "");
  if (substance.length < minDescription && !isForced) {
    return skipped.push(`row ${line} (${team}): description missing or too short`);
  }

  candidates.push({
    line,
    team,
    title,
    description,
    repo,
    demo: columns.demo_url ? cleanUrl(cell(row, columns.demo_url)) : null,
    image: columns.image_url ? cleanUrl(cell(row, columns.image_url)) : null,
    time: timestampValue(cell(row, columns.timestamp)),
    identities: [
      `repo:${repoId(repo)}`,
      ...dedupeColumns.map((c) => cell(row, c).toLowerCase()).filter(Boolean).map((v) => `id:${v}`),
    ],
  });
});

// --- make sure each repo is public (before picking between repeat submissions) ---
let usable = candidates;
if (checkRepos) {
  process.stdout.write(`\nChecking ${new Set(candidates.map((c) => repoId(c.repo))).size} GitHub repos exist… `);
  const exists = await checkGithubRepos(candidates.map((c) => c.repo));
  console.log("done");
  usable = candidates.filter((c) => {
    const ok = exists.get(repoId(c.repo)!);
    const isForced = forced.has(normalizeName(c.team)) || forced.has(repoId(c.repo)!);
    if (ok === false && !isForced) {
      skipped.push(`row ${c.line} (${c.team}): repo not found, private or deleted (${c.repo})`);
      return false;
    }
    if (ok === null) skipped.push(`row ${c.line} (${c.team}): could not check repo (imported anyway)`);
    return true;
  });
}

// --- merge repeat submissions: same repo or same submitter → keep the latest ---
const groupOf = new Map<string, number>();
const groups: Candidate[][] = [];
for (const c of usable) {
  const hits = [...new Set(c.identities.map((id) => groupOf.get(id)).filter((g): g is number => g !== undefined))];
  let target: number;
  if (hits.length === 0) {
    target = groups.push([]) - 1;
  } else {
    target = hits[0];
    for (const other of hits.slice(1)) {
      groups[target].push(...groups[other]);
      for (const member of groups[other]) member.identities.forEach((id) => groupOf.set(id, target));
      groups[other] = [];
    }
  }
  groups[target].push(c);
  c.identities.forEach((id) => groupOf.set(id, target));
}
const chosen = groups
  .filter((g) => g.length)
  .map((g) => {
    const latest = [...g].sort((a, b) => a.time - b.time || a.line - b.line).at(-1)!;
    for (const older of g) {
      if (older !== latest) skipped.push(`row ${older.line} (${older.team}): repeat submission, kept row ${latest.line}`);
    }
    return latest;
  });

// --- existing projects for this hackathon ---
const folder = path.join(PROJECTS_DIR, eventSlug);
fs.mkdirSync(folder, { recursive: true });
type Existing = { file: string; data: Record<string, unknown>; raw: string };
const existing: Existing[] = fs
  .readdirSync(folder)
  .filter((n) => n.endsWith(".md"))
  .map((name) => {
    const file = path.join(folder, name);
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, data: parseFrontmatter(raw, name).data };
  });
// A project can belong to several rounds, stored as "Round 1, Round 2".
const roundsOf = (value: unknown) => String(value ?? "").split(",").map((r) => r.trim()).filter(Boolean);
const sameRound = (e: Existing) => (round ? roundsOf(e.data.round).includes(round) : roundsOf(e.data.round).length === 0);
function mergeRounds(existingRounds: unknown, add: string | null): string | null {
  const list = roundsOf(existingRounds);
  if (add && !list.includes(add)) list.push(add);
  list.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return list.length ? list.join(", ") : null;
}
const used = new Set<Existing>();

let created = 0;
let updated = 0;
let unchanged = 0;
for (const c of chosen.sort((a, b) => a.team.localeCompare(b.team))) {
  const match =
    existing.find((e) => !used.has(e) && repoId(e.data.repo_url as string) === repoId(c.repo)) ??
    existing.find((e) => !used.has(e) && sameRound(e) && normalizeName(String(e.data.team ?? "")) === normalizeName(c.team));
  if (match) used.add(match);

  const data = {
    id: match?.data.id ?? newId("prj"),
    team: c.team,
    title: c.title,
    round: mergeRounds(match?.data.round, round),
    repo_url: c.repo,
    demo_url: c.demo,
    placement: emptyToNull(match?.data.placement as string | undefined),
    prize: emptyToNull(match?.data.prize as string | undefined),
    image_url: c.image ?? (match?.data.image_url as string | null | undefined) ?? null,
    updated_at: (match?.data.updated_at as string | undefined) ?? nowIso(),
  };
  const output = writeFrontmatter(data, c.description);

  if (match) {
    if (match.raw === output) {
      unchanged++;
    } else {
      fs.writeFileSync(match.file, output);
      updated++;
    }
  } else {
    const base = slugify(`${c.team} ${round ?? ""}`) || "team";
    let file = path.join(folder, `${base}.md`);
    for (let n = 2; fs.existsSync(file); n++) file = path.join(folder, `${base}-${n}.md`);
    fs.writeFileSync(file, output);
    created++;
  }
}

console.log(`\nImported into content/projects/${eventSlug}/: ${created} new, ${updated} updated, ${unchanged} unchanged.`);
const warnings = existing
  .filter((e) => !used.has(e) && sameRound(e) && !onlyTeams)
  .map((e) => `${path.relative(ROOT, e.file)} is not in this CSV (left as is; delete it if it was withdrawn)`);
if (skipped.length) {
  console.log(`\nSkipped (${skipped.length}):`);
  for (const s of skipped) console.log(`  - ${s}`);
}
if (warnings.length) {
  console.log(`\nPlease check (${warnings.length}):`);
  for (const w of warnings) console.log(`  ! ${w}`);
}

console.log("\nStamping changed files:");
const stamped = runStamp();
console.log("");
if (!validateAll() || !stamped) {
  console.log("Fix the problems above (edit the project files directly), then run: npm run stamp");
  process.exit(1);
}
