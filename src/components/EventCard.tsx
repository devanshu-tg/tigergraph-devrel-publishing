import Link from "next/link";
import type { Event } from "@/lib/content";
import { dateTile, eventPhase, formatEventDate, type Phase } from "@/lib/format";
import { CalendarIcon, GlobeIcon, LayersIcon, PinIcon } from "./icons";

export type EventSummary = Pick<
  Event,
  | "slug"
  | "title"
  | "type"
  | "status"
  | "starts_at"
  | "ends_at"
  | "timezone"
  | "location"
  | "is_online"
  | "cover_image_url"
  | "featured"
  | "submissions"
> & { projectCount: number; phase: Phase };

export function toEventSummary(e: Event, projectCount = 0): EventSummary {
  const { slug, title, type, status, starts_at, ends_at, timezone, location, is_online, cover_image_url, featured, submissions } = e;
  return {
    slug, title, type, status, starts_at, ends_at, timezone, location, is_online, cover_image_url, featured, submissions,
    projectCount, phase: eventPhase(e),
  };
}

export function PhaseChip({ phase }: { phase: Phase }) {
  if (phase === "live") return <span className="chip chip-live">Happening now</span>;
  if (phase === "upcoming") return <span className="chip chip-soon">Upcoming</span>;
  return <span className="chip">Past</span>;
}

export function EventCard({ event }: { event: EventSummary }) {
  const tile = dateTile(event);
  return (
    <Link href={`/events/${event.slug}`} className="card">
      <div className="card-media">
        <img src={event.cover_image_url} alt="" loading="lazy" />
        <div className="chips">
          <span className="chip chip-type">{event.type}</span>
          <PhaseChip phase={event.phase} />
        </div>
      </div>
      <div className="card-body">
        <div className="date-tile" aria-hidden="true">
          <small>{tile.month}</small>
          <b>{tile.day}</b>
        </div>
        <div className="card-text">
          <h3 className="card-title">{event.title}</h3>
          <span className="meta">
            <CalendarIcon size={15} />
            {formatEventDate(event)}
          </span>
          <span className="meta">
            {event.is_online ? <GlobeIcon size={15} /> : <PinIcon size={15} />}
            {event.location}
          </span>
          {(event.submissions ?? event.projectCount) > 0 && (
            <span className="card-foot">
              <LayersIcon size={15} />
              {event.submissions ? `${event.submissions} projects submitted` : `${event.projectCount} projects`}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
