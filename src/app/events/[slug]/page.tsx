import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  ExternalIcon,
  GlobeIcon,
  LayersIcon,
  PinIcon,
  TrophyIcon,
  UsersIcon,
} from "@/components/icons";
import { PhaseChip } from "@/components/EventCard";
import { ProjectsBrowser, type ProjectView } from "@/components/ProjectsBrowser";
import { getContent } from "@/lib/content";
import { eventPhase, formatDateRange, formatTimeRange } from "@/lib/format";
import { toHtml } from "@/lib/markdown";
import { placementRank, placementTier } from "@/lib/placement";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent().events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getContent().events.find((e) => e.slug === slug);
  return { title: event?.title };
}

const splitRounds = (value: string | null) => (value ?? "").split(",").map((r) => r.trim()).filter(Boolean);

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const { events, projects } = getContent();
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const isHackathon = event.type === "hackathon";
  const views: ProjectView[] = projects
    .filter((p) => p.event_slug === event.slug)
    .sort((a, b) => placementRank(a.placement) - placementRank(b.placement) || a.title.localeCompare(b.title))
    .map((p) => ({
      id: p.id,
      team: p.team,
      title: p.title,
      rounds: splitRounds(p.round),
      html: toHtml(p.description),
      repo_url: p.repo_url,
      demo_url: p.demo_url,
      placement: p.placement,
      tier: placementTier(p.placement),
    }));
  const rounds = new Set(views.flatMap((p) => p.rounds));
  const winners = views.filter((p) => p.tier && p.tier !== "shortlist").length;
  const upcoming = event.status === "upcoming";
  const submitted = Math.max(event.submissions ?? 0, views.length);
  const allPlaced = views.length > 0 && views.every((p) => p.tier);
  const listingNote =
    views.length < submitted
      ? allPlaced
        ? `Showing the ${views.length} shortlisted projects out of ${submitted} submitted.`
        : `Showing ${views.length} of ${submitted} submitted projects. Projects without a public GitHub repository aren't listed.`
      : null;

  return (
    <div className="container">
      <Link href="/events" className="back">
        <ArrowLeftIcon size={15} /> All events
      </Link>

      <section className="event-hero">
        <img src={event.cover_image_url} alt="" />
        <div className="event-hero-content">
          <div className="chips">
            <span className="chip" style={{ textTransform: "capitalize" }}>
              {event.type}
            </span>
            <PhaseChip phase={eventPhase(event)} />
          </div>
          <h1>{event.title}</h1>
          <div className="event-hero-meta">
            <span>
              <CalendarIcon size={16} /> {formatDateRange(event)}
            </span>
            <span>
              {event.is_online ? <GlobeIcon size={16} /> : <PinIcon size={16} />} {event.location}
            </span>
            {submitted > 0 && (
              <span>
                <LayersIcon size={16} /> {submitted} projects submitted
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="event-layout">
        <aside className="event-aside">
          <div className="facts">
            <div className="fact">
              <CalendarIcon size={17} />
              <div>
                <small>When</small>
                {formatDateRange(event)}
              </div>
            </div>
            <div className="fact">
              <ClockIcon size={17} />
              <div>
                <small>Time</small>
                {formatTimeRange(event)}
              </div>
            </div>
            <div className="fact">
              {event.is_online ? <GlobeIcon size={17} /> : <PinIcon size={17} />}
              <div>
                <small>Where</small>
                {event.location}
              </div>
            </div>
            {isHackathon && views.length > 0 && (
              <div className="fact">
                <LayersIcon size={17} />
                <div>
                  <small>Projects</small>
                  {submitted} submitted{rounds.size > 1 ? ` across ${rounds.size} rounds` : ""}
                  {views.length < submitted ? ` · ${views.length} listed` : ""}
                </div>
              </div>
            )}
            <a
              className={`btn btn-block ${upcoming ? "btn-primary" : "btn-secondary"}`}
              href={event.registration_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {upcoming ? "Register" : "Event page"} <ExternalIcon size={15} />
            </a>
            {isHackathon && views.length > 0 && (
              <a className="btn btn-block btn-secondary" href="#projects">
                Browse {views.length} projects <ArrowRightIcon size={15} />
              </a>
            )}
          </div>
        </aside>

        <article className="prose" dangerouslySetInnerHTML={{ __html: toHtml(event.description) }} />
      </div>

      {isHackathon && (
        <section id="projects" className="projects">
          <div className="projects-head">
            <div>
              <span className="eyebrow">Hackathon</span>
              <h2>Projects</h2>
            </div>
            {views.length > 0 && (
              <div className="mini-stats">
                <span className="mini-stat">
                  <LayersIcon size={15} /> <b>{submitted}</b> submitted
                </span>
                {views.length < submitted && (
                  <span className="mini-stat">
                    <b>{views.length}</b> listed
                  </span>
                )}
                {winners > 0 && (
                  <span className="mini-stat">
                    <TrophyIcon size={15} /> <b>{winners}</b> {winners === 1 ? "winner" : "winners"}
                  </span>
                )}
                {rounds.size > 1 && (
                  <span className="mini-stat">
                    <UsersIcon size={15} /> <b>{rounds.size}</b> rounds
                  </span>
                )}
              </div>
            )}
          </div>
          {listingNote && <p className="listing-note">{listingNote}</p>}
          {views.length ? (
            <ProjectsBrowser projects={views} />
          ) : (
            <p className="empty">Projects will appear here after submissions close.</p>
          )}
        </section>
      )}
    </div>
  );
}
