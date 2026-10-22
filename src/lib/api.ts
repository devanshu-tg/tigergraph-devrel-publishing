// The exact JSON shapes DevHub reads. Field names here are a contract with the DevHub team:
// do not rename or remove them without telling them first.
import type { Blog, Event, Project } from "./content";

// The site's public address. Set SITE_URL in Vercel once there is a custom domain;
// until then Vercel's own production address is used automatically.
export function siteUrl(): string {
  const url =
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
  return url.replace(/\/+$/, "");
}

// Turns "/images/x.jpg" into "https://<site>/images/x.jpg". Full URLs are left alone.
export function absolute(url: string): string;
export function absolute(url: string | null): string | null;
export function absolute(url: string | null): string | null {
  if (url === null) return null;
  return url.startsWith("/") ? `${siteUrl()}${url}` : url;
}

function later(a: string, b: string): string {
  return Date.parse(b) > Date.parse(a) ? b : a;
}

export function eventJson(e: Event) {
  return {
    id: e.id,
    slug: e.slug,
    title: e.title,
    type: e.type,
    status: e.status,
    starts_at: e.starts_at,
    ends_at: e.ends_at,
    timezone: e.timezone,
    location: e.location,
    is_online: e.is_online,
    description: e.description,
    cover_image_url: absolute(e.cover_image_url),
    registration_url: e.registration_url,
    featured: e.featured,
    // When an event ends its status flips to "past" without anyone editing the file,
    // so updated_at moves forward to ends_at to make DevHub pick up the change.
    updated_at: e.status === "past" ? later(e.updated_at, e.ends_at) : e.updated_at,
  };
}

export function projectJson(p: Project) {
  return {
    id: p.id,
    event_slug: p.event_slug,
    team: p.team,
    title: p.title,
    description: p.description,
    repo_url: p.repo_url,
    demo_url: p.demo_url,
    placement: p.placement,
    prize: p.prize,
    image_url: absolute(p.image_url),
    updated_at: p.updated_at,
  };
}

// Not yet confirmed by DevHub. Add, remove or rename fields here when they confirm.
export function blogJson(b: Blog) {
  return {
    id: b.id,
    slug: b.slug,
    title: b.title,
    author: b.author,
    published_at: b.published_at,
    updated_at: b.updated_at,
    tags: b.tags,
    cover_image_url: absolute(b.cover_image_url),
    body: b.body,
    canonical_url: b.canonical_url ?? `${siteUrl()}/blogs/${b.slug}`,
  };
}
