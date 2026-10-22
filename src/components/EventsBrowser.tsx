"use client";

import { useEffect, useState } from "react";
import { EVENT_TYPES } from "@/lib/event-types";
import { ComingSoonCard, comingSoon } from "./ComingSoonCard";
import { EventCard, type EventSummary } from "./EventCard";

// The /events list with type filters. Upcoming soonest first, past most recent first.
// The filter is kept in the URL (?type=hackathon) so it can be linked to.
export function EventsBrowser({ events }: { events: EventSummary[] }) {
  const [type, setType] = useState<string>("all");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("type");
    if (fromUrl && EVENT_TYPES.includes(fromUrl as (typeof EVENT_TYPES)[number])) setType(fromUrl);
  }, []);

  function choose(t: string) {
    setType(t);
    const url = new URL(window.location.href);
    if (t === "all") url.searchParams.delete("type");
    else url.searchParams.set("type", t);
    window.history.replaceState(null, "", url);
  }

  const types = EVENT_TYPES.filter((t) => events.some((e) => e.type === t));
  const shown = events.filter((e) => type === "all" || e.type === type);
  const upcoming = shown.filter((e) => e.status === "upcoming");
  const past = shown.filter((e) => e.status === "past").reverse();
  const label = type === "all" ? "events" : `${type}s`;

  return (
    <>
      <div className="toolbar">
        <div className="pills" role="group" aria-label="Filter by event type">
          {["all", ...types].map((t) => (
            <button key={t} className="pill" aria-pressed={type === t} onClick={() => choose(t)}>
              {t === "all" ? "All events" : `${t}s`}
              <span className="count">{t === "all" ? events.length : events.filter((e) => e.type === t).length}</span>
            </button>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="section-head">
          <h2>Upcoming</h2>
        </div>
        {upcoming.length || (type === "all" && comingSoon.length) ? (
          <div className="grid">
            {upcoming.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
            {type === "all" && comingSoon.map((item) => <ComingSoonCard key={item.title} item={item} />)}
          </div>
        ) : (
          <p className="empty">No upcoming {label} right now. Check back soon.</p>
        )}
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Past</h2>
        </div>
        {past.length ? (
          <div className="grid">
            {past.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
        ) : (
          <p className="empty">No past {label} yet.</p>
        )}
      </section>
    </>
  );
}
