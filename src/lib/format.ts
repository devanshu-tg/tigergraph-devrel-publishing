// Date formatting for the human-readable pages. Event times are shown in the event's own timezone.
import type { Event } from "./content";

type Timed = Pick<Event, "starts_at" | "ends_at" | "timezone">;

function fmt(iso: string, timeZone: string, options: Intl.DateTimeFormatOptions, locale = "en-GB") {
  return new Intl.DateTimeFormat(locale, { timeZone, ...options }).format(new Date(iso));
}

// "IST" / "PDT" rather than "GMT+5:30" where a short name exists.
function zoneName(iso: string, timeZone: string): string {
  for (const locale of ["en-US", "en-IN", "en-GB"]) {
    const name = new Intl.DateTimeFormat(locale, { timeZone, timeZoneName: "short" })
      .formatToParts(new Date(iso))
      .find((p) => p.type === "timeZoneName")?.value;
    if (name && !/^GMT[+-]/.test(name)) return name;
  }
  return fmt(iso, timeZone, { timeZoneName: "short" }).split(" ").pop() ?? "";
}

const sameDay = (e: Timed) =>
  fmt(e.starts_at, e.timezone, { dateStyle: "short" }) === fmt(e.ends_at, e.timezone, { dateStyle: "short" });

// "28 Oct 2026", "28–31 Oct 2026", "25 Mar – 7 Apr 2026"
export function formatDateRange(e: Timed): string {
  const s = { day: fmt(e.starts_at, e.timezone, { day: "numeric" }), month: fmt(e.starts_at, e.timezone, { month: "short" }, "en-US"), year: fmt(e.starts_at, e.timezone, { year: "numeric" }) };
  const n = { day: fmt(e.ends_at, e.timezone, { day: "numeric" }), month: fmt(e.ends_at, e.timezone, { month: "short" }, "en-US"), year: fmt(e.ends_at, e.timezone, { year: "numeric" }) };
  if (sameDay(e)) return `${s.day} ${s.month} ${s.year}`;
  if (s.year !== n.year) return `${s.day} ${s.month} ${s.year} – ${n.day} ${n.month} ${n.year}`;
  if (s.month !== n.month) return `${s.day} ${s.month} – ${n.day} ${n.month} ${n.year}`;
  return `${s.day}–${n.day} ${n.month} ${n.year}`;
}

// "10:00 – 11:00 IST" for one-day events, "Starts 10:00 IST" for longer ones.
export function formatTimeRange(e: Timed): string {
  const t = (iso: string) => fmt(iso, e.timezone, { hour: "numeric", minute: "2-digit" }, "en-US");
  if (sameDay(e)) return `${t(e.starts_at)} – ${t(e.ends_at)} ${zoneName(e.starts_at, e.timezone)}`;
  return `Starts ${t(e.starts_at)} ${zoneName(e.starts_at, e.timezone)}`;
}

// One line for cards: "Wed 28 Oct 2026 · 10:00 AM – 11:00 AM IST" or "28–31 Oct 2026".
export function formatEventDate(e: Timed): string {
  if (!sameDay(e)) return formatDateRange(e);
  return `${fmt(e.starts_at, e.timezone, { weekday: "short" })} ${formatDateRange(e)} · ${formatTimeRange(e)}`;
}

// The little calendar tile: { month: "OCT", day: "28" }
export function dateTile(e: Timed): { month: string; day: string } {
  return {
    month: fmt(e.starts_at, e.timezone, { month: "short" }, "en-US").toUpperCase(),
    day: fmt(e.starts_at, e.timezone, { day: "numeric" }),
  };
}

// "upcoming" before it starts, "live" while it runs, "past" after (site-only; DevHub gets status).
export type Phase = "upcoming" | "live" | "past";
export function eventPhase(e: Timed, now: Date = new Date()): Phase {
  if (now.getTime() < Date.parse(e.starts_at)) return "upcoming";
  if (now.getTime() < Date.parse(e.ends_at)) return "live";
  return "past";
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(iso));
}
