"use client";

import { useMemo, useState } from "react";
import type { Tier } from "@/lib/placement";
import { ChevronIcon, CodeIcon, PlayIcon, SearchIcon, TrophyIcon, UsersIcon } from "./icons";

export type ProjectView = {
  id: string;
  team: string;
  title: string;
  rounds: string[];
  html: string;
  repo_url: string;
  demo_url: string | null;
  placement: string | null;
  tier: Tier | null;
};

const WINNER_TIERS: Tier[] = ["gold", "silver", "bronze", "special"];

function initials(name: string) {
  const words = name.replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
  return ((words[0]?.[0] ?? "?") + (words[1]?.[0] ?? words[0]?.[1] ?? "")).toUpperCase();
}

function Avatar({ name }: { name: string }) {
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  const hue = hash % 360;
  return (
    <span
      className="avatar"
      aria-hidden="true"
      style={{ background: `linear-gradient(140deg, hsl(${hue} 62% 52%), hsl(${(hue + 40) % 360} 58% 38%))` }}
    >
      {initials(name)}
    </span>
  );
}

function Medal({ p }: { p: ProjectView }) {
  const text = p.placement?.toLowerCase() ?? "";
  const number = p.tier === "silver" ? "2" : p.tier === "bronze" ? "3" : /1st|first/.test(text) ? "1" : null;
  return <span className="medal">{number ?? <TrophyIcon size={19} />}</span>;
}

function Placement({ p }: { p: ProjectView }) {
  if (!p.placement || !p.tier) return null;
  return <span className={`place place-${p.tier}`}>{p.placement}</span>;
}

function Links({ p }: { p: ProjectView }) {
  return (
    <>
      <a className="btn btn-secondary btn-sm" href={p.repo_url} target="_blank" rel="noopener noreferrer">
        <CodeIcon size={15} /> Code
      </a>
      {p.demo_url && (
        <a className="btn btn-secondary btn-sm" href={p.demo_url} target="_blank" rel="noopener noreferrer">
          <PlayIcon size={15} /> Demo
        </a>
      )}
    </>
  );
}

// Winners as medal cards, shortlisted teams as compact cards, then every submission
// in a searchable list with round tabs.
export function ProjectsBrowser({ projects }: { projects: ProjectView[] }) {
  const [query, setQuery] = useState("");
  const [round, setRound] = useState("all");
  const [open, setOpen] = useState<Set<string>>(new Set());

  const rounds = useMemo(
    () => [...new Set(projects.flatMap((p) => p.rounds))].sort((a, b) => a.localeCompare(b, undefined, { numeric: true })),
    [projects],
  );
  const showRounds = rounds.length > 1;
  const winners = projects.filter((p) => p.tier && WINNER_TIERS.includes(p.tier));
  const shortlist = projects.filter((p) => p.tier === "shortlist");
  const winnersTitle = winners.every((p) => /selected/i.test(p.placement ?? "")) ? "Selected teams" : "Winners";
  const shortlistTitle = shortlist.every((p) => /finalist/i.test(p.placement ?? "")) ? "Finalists" : "Shortlisted teams";

  const q = query.trim().toLowerCase();
  const shown = projects.filter(
    (p) => (round === "all" || p.rounds.includes(round)) && (!q || `${p.team} ${p.title}`.toLowerCase().includes(q)),
  );

  function reveal(id: string) {
    setRound("all");
    setQuery("");
    setOpen((prev) => new Set(prev).add(id));
    requestAnimationFrame(() => document.getElementById(`p-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }

  function toggle(id: string, isOpen: boolean) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (isOpen) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  return (
    <>
      {winners.length > 0 && (
        <>
          <h3 className="subhead">
            <TrophyIcon size={20} /> {winnersTitle}
          </h3>
          <div className="podium">
            {winners.map((p) => (
              <article key={p.id} className={`winner tier-${p.tier}`}>
                <div className="winner-top">
                  <Placement p={p} />
                  <Medal p={p} />
                </div>
                <h3>{p.title}</h3>
                <span className="team">
                  <UsersIcon size={15} /> {p.team}
                </span>
                <div className="actions">
                  <Links p={p} />
                  <button className="btn btn-secondary btn-sm" onClick={() => reveal(p.id)}>
                    Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {shortlist.length > 0 && (
        <>
          <h3 className="subhead">
            <UsersIcon size={20} /> {shortlistTitle}
            <span className="chip">{shortlist.length}</span>
          </h3>
          <div className="shortlist">
            {shortlist.map((p) => (
              <a
                key={p.id}
                className="short"
                href={`#p-${p.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  reveal(p.id);
                }}
              >
                <Avatar name={p.team} />
                <span className="short-text">
                  <strong>{p.team}</strong>
                  <span>{p.title}</span>
                </span>
              </a>
            ))}
          </div>
        </>
      )}

      <div className="all-head">
        <h3>All submissions</h3>
        <label className="search">
          <SearchIcon size={16} />
          <input
            type="search"
            placeholder="Search teams or projects"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search teams or projects"
          />
        </label>
      </div>

      {showRounds && (
        <div className="pills" role="group" aria-label="Filter by round">
          {["all", ...rounds].map((r) => (
            <button key={r} className="pill" aria-pressed={round === r} onClick={() => setRound(r)}>
              {r === "all" ? "All rounds" : r}
              <span className="count">{r === "all" ? projects.length : projects.filter((p) => p.rounds.includes(r)).length}</span>
            </button>
          ))}
        </div>
      )}

      <p className="result-count">
        {shown.length === projects.length ? `${projects.length} projects listed` : `${shown.length} of ${projects.length} listed projects`}
      </p>

      {shown.length ? (
        <ul className="project-list">
          {shown.map((p) => (
            <li key={p.id} id={`p-${p.id}`}>
              <details className="project" open={open.has(p.id)} onToggle={(e) => toggle(p.id, e.currentTarget.open)}>
                <summary>
                  <Avatar name={p.team} />
                  <span className="project-main">
                    <strong>{p.title}</strong>
                    <span>{p.team}</span>
                  </span>
                  <span className="project-tags">
                    <Placement p={p} />
                    {showRounds &&
                      p.rounds
                        .filter((r) => !p.placement?.includes(r))
                        .map((r) => (
                        <span key={r} className="chip chip-round">
                          {r}
                        </span>
                      ))}
                  </span>
                  <ChevronIcon size={18} className="chev" />
                </summary>
                <div className="project-body">
                  <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />
                  <div className="project-actions">
                    <Links p={p} />
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">No projects match &ldquo;{query}&rdquo;.</p>
      )}
    </>
  );
}
