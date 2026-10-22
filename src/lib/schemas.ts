// The rules every content file must follow. If a file breaks one, the build fails.
import { z } from "zod";
import { EVENT_TYPES } from "./event-types";

const ISO_WITH_TIMEZONE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/;

const id = z
  .string()
  .regex(/^[a-z0-9][a-z0-9_-]*$/, "use only lowercase letters, numbers, - and _");

const slug = z
  .string()
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "use only lowercase letters, numbers and single dashes");

const text = z.string().trim().min(1, "cannot be empty");

export const dateTime = z
  .string()
  .regex(ISO_WITH_TIMEZONE, {
    message: 'must be ISO 8601 with a timezone, e.g. "2026-10-28T10:00:00+05:30"',
    abort: true,
  })
  .refine((v) => !Number.isNaN(Date.parse(v)), "is not a real date");

const timezone = z.string().refine((tz) => {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: tz });
    return tz.includes("/") || tz === "UTC";
  } catch {
    return false;
  }
}, 'must be an IANA timezone name, e.g. "Asia/Kolkata"');

const absoluteUrl = z.string().refine((v) => {
  try {
    const url = new URL(v);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}, "must be a full URL starting with https://");

// Either a full URL, or a file you put in public/images (written as "/images/...").
const image = z
  .string()
  .refine(
    (v) => v.startsWith("/images/") || absoluteUrl.safeParse(v).success,
    'must be a full URL (https://...) or a file in public/images written as "/images/..."',
  );

export const eventSchema = z
  .object({
    id,
    slug,
    title: text,
    type: z.enum(EVENT_TYPES),
    starts_at: dateTime,
    ends_at: dateTime,
    timezone,
    location: text,
    is_online: z.boolean(),
    cover_image_url: image,
    registration_url: absoluteUrl,
    featured: z.boolean().default(false),
    // Site-only: how many projects were submitted in total (some may not be listed). Not sent to DevHub.
    submissions: z.number().int().positive().nullable().default(null),
    updated_at: dateTime,
  })
  .strict();

export const projectSchema = z
  .object({
    id,
    team: text,
    title: text,
    round: text.nullable().default(null), // site-only, e.g. "Round 2"; not sent to DevHub
    repo_url: absoluteUrl,
    demo_url: absoluteUrl.nullable().default(null),
    placement: text.nullable().default(null),
    prize: text.nullable().default(null),
    image_url: image.nullable().default(null),
    updated_at: dateTime,
  })
  .strict();

export const blogSchema = z
  .object({
    id,
    slug,
    title: text,
    author: text,
    published_at: dateTime,
    updated_at: dateTime,
    tags: z.array(text).default([]),
    cover_image_url: image.nullable().default(null),
    canonical_url: absoluteUrl.nullable().default(null),
    featured: z.boolean().default(false),
  })
  .strict();

export type EventFields = z.infer<typeof eventSchema>;
export type ProjectFields = z.infer<typeof projectSchema>;
export type BlogFields = z.infer<typeof blogSchema>;
