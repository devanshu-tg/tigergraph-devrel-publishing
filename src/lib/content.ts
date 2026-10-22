// Loads every content file, checks it against the rules, and returns typed records.
import fs from "node:fs";
import path from "node:path";
import type { z } from "zod";
import { parseFrontmatter } from "./frontmatter";
import {
  blogSchema,
  eventSchema,
  projectSchema,
  type BlogFields,
  type EventFields,
  type ProjectFields,
} from "./schemas";

export const ROOT = process.cwd();
export const CONTENT_DIR = path.join(ROOT, "content");
export const EVENTS_DIR = path.join(CONTENT_DIR, "events");
export const PROJECTS_DIR = path.join(CONTENT_DIR, "projects");
export const BLOGS_DIR = path.join(CONTENT_DIR, "blogs");
const PUBLIC_DIR = path.join(ROOT, "public");

export type Kind = "event" | "project" | "blog";
export type EventStatus = "upcoming" | "past";

export type Event = EventFields & { description: string; status: EventStatus; file: string };
export type Project = ProjectFields & { event_slug: string; description: string; file: string };
export type Blog = BlogFields & { body: string; file: string };

export type SourceFile = { kind: Kind; file: string; raw: string; id?: string; slug?: string };

export type Content = {
  events: Event[];
  projects: Project[];
  blogs: Blog[];
  files: SourceFile[];
  errors: string[];
};

// Files starting with "_" (like templates) and README files are ignored.
function markdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md") && !name.startsWith("_") && name !== "README.md")
    .sort()
    .map((name) => path.join(dir, name));
}

function relative(file: string): string {
  return path.relative(ROOT, file).split(path.sep).join("/");
}

function readFile(kind: Kind, file: string, errors: string[]) {
  const raw = fs.readFileSync(file, "utf8");
  const source: SourceFile = { kind, file: relative(file), raw };
  try {
    return { source, ...parseFrontmatter(raw, source.file) };
  } catch (err) {
    errors.push((err as Error).message);
    return { source, data: null, body: "" };
  }
}

function check<T>(
  schema: z.ZodType<T>,
  data: Record<string, unknown>,
  file: string,
  errors: string[],
): T | null {
  const result = schema.safeParse(data);
  if (result.success) return result.data;
  for (const issue of result.error.issues) {
    const field = issue.path.join(".");
    let message = issue.message;
    if (issue.path.length === 1 && data[String(issue.path[0])] === undefined) {
      message = "is missing (it is required)";
    }
    if (issue.code === "unrecognized_keys" && issue.keys.includes("status")) {
      message += ' ("status" is worked out automatically from ends_at, so remove it)';
    }
    errors.push(`${file}: ${field ? `${field} ` : ""}${message}`);
  }
  return null;
}

// "+05:30" for "2026-10-28T10:00:00+05:30", "+00:00" for "...Z".
function writtenOffset(iso: string): string {
  return iso.endsWith("Z") ? "+00:00" : iso.slice(-6);
}

function timezoneOffsetAt(timeZone: string, date: Date): string {
  const name = new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "longOffset" })
    .formatToParts(date)
    .find((p) => p.type === "timeZoneName")?.value;
  return !name || name === "GMT" ? "+00:00" : name.replace("GMT", "");
}

function checkLocalImage(value: string | null, field: string, file: string, errors: string[]) {
  if (value?.startsWith("/images/") && !fs.existsSync(path.join(PUBLIC_DIR, value))) {
    errors.push(`${file}: ${field} points to public${value}, but that file does not exist`);
  }
}

function findDuplicates(items: { key: string; file: string }[], label: string, errors: string[]) {
  const seen = new Map<string, string>();
  for (const { key, file } of items) {
    const first = seen.get(key);
    if (first) errors.push(`${file}: ${label} "${key}" is already used by ${first}`);
    else seen.set(key, file);
  }
}

export function loadContent(now: Date = new Date()): Content {
  const errors: string[] = [];
  const files: SourceFile[] = [];
  const events: Event[] = [];
  const projects: Project[] = [];
  const blogs: Blog[] = [];

  for (const file of markdownFiles(EVENTS_DIR)) {
    const { source, data, body } = readFile("event", file, errors);
    files.push(source);
    if (!data) continue;
    source.id = typeof data.id === "string" ? data.id : undefined;
    source.slug = typeof data.slug === "string" ? data.slug : undefined;
    const fields = check(eventSchema, data, source.file, errors);
    if (!body) errors.push(`${source.file}: the description (text below the header) is empty`);
    if (!fields) continue;

    const expectedName = `${fields.slug}.md`;
    if (path.basename(file) !== expectedName) {
      errors.push(`${source.file}: file name must match the slug, i.e. ${expectedName}`);
    }
    if (Date.parse(fields.ends_at) <= Date.parse(fields.starts_at)) {
      errors.push(`${source.file}: ends_at must be after starts_at`);
    }
    for (const field of ["starts_at", "ends_at"] as const) {
      const expected = timezoneOffsetAt(fields.timezone, new Date(fields[field]));
      if (writtenOffset(fields[field]) !== expected) {
        errors.push(
          `${source.file}: ${field} has offset ${writtenOffset(fields[field])}, but ${fields.timezone} is ${expected} on that date`,
        );
      }
    }
    checkLocalImage(fields.cover_image_url, "cover_image_url", source.file, errors);

    const status: EventStatus = Date.parse(fields.ends_at) <= now.getTime() ? "past" : "upcoming";
    events.push({ ...fields, description: body, status, file: source.file });
  }

  const hackathonSlugs = new Set(events.filter((e) => e.type === "hackathon").map((e) => e.slug));
  const projectFolders = fs.existsSync(PROJECTS_DIR)
    ? fs.readdirSync(PROJECTS_DIR, { withFileTypes: true }).filter((d) => d.isDirectory())
    : [];

  for (const folder of projectFolders) {
    const eventSlug = folder.name;
    const folderFiles = markdownFiles(path.join(PROJECTS_DIR, eventSlug));
    if (folderFiles.length && !hackathonSlugs.has(eventSlug)) {
      errors.push(
        `content/projects/${eventSlug}/: there is no hackathon event with slug "${eventSlug}" (folder name must be the hackathon's slug)`,
      );
    }
    for (const file of folderFiles) {
      const { source, data, body } = readFile("project", file, errors);
      files.push(source);
      if (!data) continue;
      source.id = typeof data.id === "string" ? data.id : undefined;
      const fields = check(projectSchema, data, source.file, errors);
      if (!body) errors.push(`${source.file}: the description (text below the header) is empty`);
      if (!fields) continue;
      checkLocalImage(fields.image_url, "image_url", source.file, errors);
      projects.push({ ...fields, event_slug: eventSlug, description: body, file: source.file });
    }
  }

  for (const file of markdownFiles(BLOGS_DIR)) {
    const { source, data, body } = readFile("blog", file, errors);
    files.push(source);
    if (!data) continue;
    source.id = typeof data.id === "string" ? data.id : undefined;
    source.slug = typeof data.slug === "string" ? data.slug : undefined;
    const fields = check(blogSchema, data, source.file, errors);
    if (!body) errors.push(`${source.file}: the post body (text below the header) is empty`);
    if (!fields) continue;
    const expectedName = `${fields.slug}.md`;
    if (path.basename(file) !== expectedName) {
      errors.push(`${source.file}: file name must match the slug, i.e. ${expectedName}`);
    }
    checkLocalImage(fields.cover_image_url, "cover_image_url", source.file, errors);
    blogs.push({ ...fields, body, file: source.file });
  }

  // ids are unique across everything; slugs are unique within events and within blogs.
  findDuplicates(
    files.filter((f) => f.id).map((f) => ({ key: f.id!, file: f.file })),
    "id",
    errors,
  );
  findDuplicates(events.map((e) => ({ key: e.slug, file: e.file })), "event slug", errors);
  findDuplicates(blogs.map((b) => ({ key: b.slug, file: b.file })), "blog slug", errors);

  events.sort((a, b) => Date.parse(a.starts_at) - Date.parse(b.starts_at));
  blogs.sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at));

  return { events, projects, blogs, files, errors };
}

let cached: Content | null = null;

// Used by the website. Stops the build with a clear list of problems if any file is invalid.
export function getContent(): Content {
  // In "npm run dev", re-read files every time so edits show up immediately.
  if (cached && process.env.NODE_ENV === "production") return cached;
  const content = loadContent();
  if (content.errors.length) {
    throw new Error(`Content has problems:\n- ${content.errors.join("\n- ")}`);
  }
  cached = content;
  return content;
}
