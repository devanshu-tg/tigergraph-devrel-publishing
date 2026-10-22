// Merges a judging sheet (team name, placement, prize) into a hackathon's project files.
//   npm run import:results -- --event graph-for-good-2026 --csv ~/Downloads/judging.csv
//   add --reset to clear placement/prize on teams that are not in the sheet
// If the sheet has a repo column, rows are matched by repo (useful when a team has several
// projects, e.g. one per round); otherwise by team name.
import fs from "node:fs";
import path from "node:path";
import { PROJECTS_DIR } from "../src/lib/content";
import { parseFrontmatter, writeFrontmatter } from "../src/lib/frontmatter";
import mappings from "./import-mappings.json";
import {
  cleanUrl,
  emptyToNull,
  fail,
  findColumn,
  normalizeName,
  parseArgs,
  readCsv,
  repoId,
  runStamp,
  validateAll,
} from "./_shared";

const { flags } = parseArgs();
const eventSlug = typeof flags.event === "string" ? flags.event : fail("Missing --event <hackathon-slug>");
const csvPath = typeof flags.csv === "string" ? flags.csv : fail("Missing --csv <path-to-file.csv>");
const reset = flags.reset === true;

const folder = path.join(PROJECTS_DIR, eventSlug);
if (!fs.existsSync(folder)) fail(`No projects in content/projects/${eventSlug}/. Import the submissions first.`);

const { headers, rows } = readCsv(csvPath);
const teamCol = findColumn(headers, mappings.results.team);
const placementCol = findColumn(headers, mappings.results.placement);
const prizeCol = findColumn(headers, mappings.results.prize);
const repoCol = findColumn(headers, mappings.results.repo);
if (!teamCol || !placementCol) {
  fail(
    `The judging sheet needs a team column and a placement column.\n` +
      `  Columns in this CSV: ${headers.join(" | ")}\n` +
      `  Add the right names to "results" in scripts/import-mappings.json.`,
  );
}

const projects = fs
  .readdirSync(folder)
  .filter((n) => n.endsWith(".md"))
  .map((name) => {
    const file = path.join(folder, name);
    const raw = fs.readFileSync(file, "utf8");
    return { file, name, raw, ...parseFrontmatter(raw, name) };
  });
type Project = (typeof projects)[number];
const results = new Map<Project, { placement: string | null; prize: string | null }>();
const unmatched: string[] = [];
for (const row of rows) {
  const team = (row[teamCol] ?? "").trim();
  const repo = repoCol ? repoId(cleanUrl(row[repoCol], true)) : null;
  if (!team && !repo) continue;
  const matches = repo
    ? projects.filter((p) => repoId(String(p.data.repo_url ?? "")) === repo)
    : projects.filter((p) => normalizeName(String(p.data.team ?? "")) === normalizeName(team));
  if (matches.length !== 1) {
    unmatched.push(`${team || repo}${matches.length > 1 ? " (matches several projects: add a repo column)" : ""}`);
    continue;
  }
  results.set(matches[0], {
    placement: emptyToNull(row[placementCol]),
    prize: prizeCol ? emptyToNull(row[prizeCol]) : null,
  });
}

let changed = 0;
for (const p of projects) {
  const result = results.get(p) ?? (reset ? { placement: null, prize: null } : undefined);
  if (!result) continue;
  const output = writeFrontmatter({ ...p.data, ...result }, p.body);
  if (output !== p.raw) {
    fs.writeFileSync(p.file, output);
    changed++;
    console.log(`  ${String(p.data.team)}: ${result.placement ?? "(no placement)"}${result.prize ? `, ${result.prize}` : ""}`);
  }
}

console.log(`\nUpdated ${changed} project(s) in content/projects/${eventSlug}/.`);
if (unmatched.length) {
  console.log(`\n! ${unmatched.length} team(s) in the judging sheet did not match any project:`);
  for (const t of unmatched) console.log(`    "${t}"`);
  console.log("  Fix the spelling in the sheet (or the project file's team name) and run again.");
}

console.log("\nStamping changed files:");
const stamped = runStamp();
console.log("");
if (!validateAll() || !stamped || unmatched.length) process.exit(1);
