import announcements from "../../content/announcements.json";
import { ArrowRightIcon } from "./icons";

export type ComingSoon = { emoji: string; label: string; title: string; description: string };

export const comingSoon: ComingSoon[] = announcements.coming_soon;

// A "coming soon" teaser shown alongside upcoming events (website only).
export function ComingSoonCard({ item }: { item: ComingSoon }) {
  return (
    <article className="card soon-card">
      <div className="soon-art" aria-hidden="true">
        <span className="soon-badge">
          SOON <ArrowRightIcon size={30} />
        </span>
      </div>
      <div className="card-body">
        <div className="card-text">
          <span className="chip chip-soon-badge">
            {item.label} {item.emoji}
          </span>
          <h3 className="card-title">{item.title}</h3>
          <p className="soon-text">{item.description}</p>
        </div>
      </div>
    </article>
  );
}
