// /api/blogs.json — read by DevHub every night. Generated once at build time.
import { blogJson } from "@/lib/api";
import { getContent } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getContent().blogs.map(blogJson));
}
