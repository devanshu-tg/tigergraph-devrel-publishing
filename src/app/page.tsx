import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { ComingSoonCard, comingSoon } from "@/components/ComingSoonCard";
import { EventCard, toEventSummary } from "@/components/EventCard";
import { ArrowRightIcon } from "@/components/icons";
import { getContent } from "@/lib/content";

export default function HomePage() {
  const { events, projects, blogs } = getContent();
  const count = (slug: string) => projects.filter((p) => p.event_slug === slug).length;
  // Every project submitted, including ones not listed (e.g. no public repo, outside a shortlist).
  const submitted = events.reduce((sum, e) => sum + Math.max(e.submissions ?? 0, count(e.slug)), 0);
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 6);
  const allHackathons = events.filter((e) => e.type === "hackathon");
  const hackathons = allHackathons
    .filter((e) => !upcoming.includes(e))
    .sort((a, b) => Date.parse(b.starts_at) - Date.parse(a.starts_at));
  const posts = [...blogs].sort((a, b) => Number(b.featured) - Number(a.featured)).slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">TigerGraph Developer Relations</span>
            <h1 className="display">
              Build smarter AI with <em>graphs</em>.
            </h1>
            <p className="lead">
              Hackathons, webinars, meetups and workshops from the TigerGraph DevRel team, and the projects our community builds with
              GraphRAG, agents and TigerGraph.
            </p>
            <div className="hero-actions">
              <Link href="/events" className="btn btn-primary">
                Browse events <ArrowRightIcon size={16} />
              </Link>
              <Link href="/events?type=hackathon" className="btn btn-secondary">
                Hackathon projects
              </Link>
            </div>
          </div>
          <div className="stats" aria-label="At a glance">
            <div className="stat">
              <strong>{submitted}</strong>
              <span>projects submitted</span>
            </div>
            <div className="stat">
              <strong>{allHackathons.length}</strong>
              <span>hackathons</span>
            </div>
            <div className="stat">
              <strong>{events.length}</strong>
              <span>events</span>
            </div>
            <div className="stat">
              <strong>{upcoming.length}</strong>
              <span>coming up</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="section-head">
            <div>
              <h2>Coming up</h2>
              <p>Register for what&apos;s next.</p>
            </div>
            <Link href="/events" className="link-arrow">
              All events <ArrowRightIcon size={15} />
            </Link>
          </div>
          {upcoming.length + comingSoon.length ? (
            <div className="grid">
              {upcoming.map((e) => (
                <EventCard key={e.slug} event={toEventSummary(e, count(e.slug))} />
              ))}
              {comingSoon.map((item) => (
                <ComingSoonCard key={item.title} item={item} />
              ))}
            </div>
          ) : (
            <p className="empty">No upcoming events right now. Check back soon.</p>
          )}
        </section>

        {hackathons.length > 0 && (
          <section className="section">
            <div className="section-head">
              <div>
                <h2>Past hackathons</h2>
                <p>Winners, finalists and every project our community submitted.</p>
              </div>
              <Link href="/events?type=hackathon" className="link-arrow">
                All hackathons <ArrowRightIcon size={15} />
              </Link>
            </div>
            <div className="grid">
              {hackathons.slice(0, 6).map((e) => (
                <EventCard key={e.slug} event={toEventSummary(e, count(e.slug))} />
              ))}
            </div>
          </section>
        )}

        {posts.length > 0 && (
          <section className="section">
            <div className="section-head">
              <div>
                <h2>From the blog</h2>
                <p>Tutorials and stories from the DevRel team.</p>
              </div>
              <Link href="/blogs" className="link-arrow">
                All posts <ArrowRightIcon size={15} />
              </Link>
            </div>
            <div className="grid">
              {posts.map((b) => (
                <BlogCard key={b.slug} blog={b} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
