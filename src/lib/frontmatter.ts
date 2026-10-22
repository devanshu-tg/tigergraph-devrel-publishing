// Reads and writes Markdown files that start with a YAML header between "---" lines.
import { parse, stringify } from "yaml";

export type ParsedFile = { data: Record<string, unknown>; body: string };

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

export function parseFrontmatter(raw: string, file: string): ParsedFile {
  const match = raw.match(FRONTMATTER);
  if (!match) {
    throw new Error(`${file}: file must start with a "---" header block`);
  }
  // "core" schema keeps dates as plain strings, so timezones are never lost.
  const data = parse(match[1], { schema: "core" }) ?? {};
  if (typeof data !== "object" || Array.isArray(data)) {
    throw new Error(`${file}: header block is not a list of "key: value" lines`);
  }
  return { data: data as Record<string, unknown>, body: match[2].trim() };
}

// Writes values as quoted strings so YAML never reinterprets them.
export function writeFrontmatter(data: Record<string, unknown>, body: string): string {
  const header = stringify(data, {
    schema: "core",
    defaultStringType: "QUOTE_DOUBLE",
    defaultKeyType: "PLAIN",
    lineWidth: 0,
    flowCollectionPadding: false,
  }).trimEnd();
  return `---\n${header}\n---\n\n${body.trim()}\n`;
}

// Replaces just the updated_at line, leaving the rest of the file untouched.
export function setUpdatedAt(raw: string, value: string): string {
  const match = raw.match(FRONTMATTER);
  if (!match) return raw;
  const line = `updated_at: "${value}"`;
  const header = /^updated_at:.*$/m.test(match[1])
    ? match[1].replace(/^updated_at:.*$/m, () => line)
    : `${match[1]}\n${line}`;
  return raw.replace(match[1], () => header);
}

// The file contents with the updated_at line removed, used to detect real edits.
export function contentWithoutUpdatedAt(raw: string): string {
  return raw.replace(/\r\n/g, "\n").replace(/^updated_at:.*\n?/m, "").trim();
}
