import type { Metadata } from "next";
import { toEventSummary } from "@/components/EventCard";
import { EventsBrowser } from "@/components/EventsBrowser";
import { getContent } from "@/lib/content";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  const { events, projects } = getContent();
  const summaries = events.map((e) => toEventSummary(e, projects.filter((p) => p.event_slug === e.slug).length));
  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Events</span>
        <h1>Learn, build and ship with graphs</h1>
        <p>Webinars, meetups, workshops, hackathons and conferences run by the TigerGraph DevRel team and our partners.</p>
      </header>
      <EventsBrowser events={summaries} />
    </div>
  );
}
