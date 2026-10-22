// /api/projects.json — read by DevHub every night. Generated once at build time.
import { projectJson } from "@/lib/api";
import { getContent } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getContent().projects.map(projectJson));
}
