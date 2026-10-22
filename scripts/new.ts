// Creates a new content file with a fresh id. Fill in every "TODO" afterwards.
//   npm run new -- event "GraphRAG Webinar October 2026"
//   npm run new -- blog "Modeling Fraud Rings with GSQL"
//   npm run new -- project graph-for-good-2026 "Team Name"
import fs from "node:fs";
import path from "node:path";
import { BLOGS_DIR, EVENTS_DIR, PROJECTS_DIR } from "../src/lib/content";
import { writeFrontmatter } from "../src/lib/frontmatter";
import { nowIso } from "../src/lib/lock";
import { fail, newId, parseArgs, slugify } from "./_shared";

const { positional } = parseArgs();
const [kind, ...rest] = positional;
const now = nowIso();

function create(file: string, data: Record<string, unknown>, body: string) {
  if (fs.existsSync(file)) fail(`${path.relative(process.cwd(), file)} already exists`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, writeFrontmatter(data, body));
  console.log(`\nCreated ${path.relative(process.cwd(), file)}`);
  console.log('Replace every "TODO", then run: npm run stamp\n');
}

if (kind === "event") {
  const title = rest.join(" ").trim() || fail('Give a title: npm run new -- event "My Event Title"');
  const slug = slugify(title);
  create(
    path.join(EVENTS_DIR, `${slug}.md`),
    {
      id: newId("evt"),
      slug,
      title,
      type: "TODO: webinar | meetup | workshop | hackathon | conference",
      starts_at: "TODO e.g. 2026-10-28T10:00:00+05:30",
      ends_at: "TODO e.g. 2026-10-28T11:00:00+05:30",
      timezone: "TODO e.g. Asia/Kolkata",
      location: "Online",
      is_online: true,
      cover_image_url: "TODO: https://... or /images/events/your-file.jpg",
      registration_url: "TODO: https://...",
      featured: false,
      updated_at: now,
    },
    "TODO: Write the full event description here, in Markdown.",
  );
} else if (kind === "blog") {
  const title = rest.join(" ").trim() || fail('Give a title: npm run new -- blog "My Post Title"');
  const slug = slugify(title);
  create(
    path.join(BLOGS_DIR, `${slug}.md`),
    {
      id: newId("blg"),
      slug,
      title,
      author: "TODO",
      published_at: now,
      updated_at: now,
      tags: [],
      cover_image_url: null,
      canonical_url: null,
      featured: false,
    },
    "TODO: Write the full post here, in Markdown.",
  );
} else if (kind === "project") {
  const [eventSlug, ...teamWords] = rest;
  const team = teamWords.join(" ").trim();
  if (!eventSlug || !team) fail('Usage: npm run new -- project <hackathon-slug> "Team Name"');
  create(
    path.join(PROJECTS_DIR, eventSlug, `${slugify(team)}.md`),
    {
      id: newId("prj"),
      team,
      title: "TODO",
      repo_url: "TODO: https://github.com/...",
      demo_url: null,
      placement: null,
      prize: null,
      image_url: null,
      updated_at: now,
    },
    "TODO: Full project description, in Markdown.",
  );
} else {
  fail('Usage: npm run new -- event "Title"  |  blog "Title"  |  project <hackathon-slug> "Team Name"');
}
