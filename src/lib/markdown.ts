import { marked } from "marked";

// Content is written by our own team, so the HTML is trusted.
export function toHtml(markdown: string): string {
  return marked.parse(markdown, { async: false, gfm: true });
}
