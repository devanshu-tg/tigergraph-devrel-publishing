// /api/events.json — read by DevHub every night. Generated once at build time.
import { eventJson } from "@/lib/api";
import { getContent } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getContent().events.map(eventJson));
}
