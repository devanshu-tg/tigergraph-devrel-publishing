// Orders hackathon projects so winners come first, then other prizes, then finalists/shortlists.
export function placementRank(placement: string | null): number {
  if (!placement) return 99;
  const p = placement.toLowerCase();
  if (/winner|1st|first|grand|selected/.test(p)) return 0;
  if (/2nd|second|runner/.test(p)) return 1;
  if (/3rd|third/.test(p)) return 2;
  if (/finalist|top \d+|shortlist/.test(p)) return 20;
  if (/honou?rable|mention/.test(p)) return 30;
  return 10; // special prizes, e.g. "Best Use of GSQL"
}

export type Tier = "gold" | "silver" | "bronze" | "special" | "shortlist";

// How a placement is styled: gold/silver/bronze medals, a special prize, or a shortlist.
export function placementTier(placement: string | null): Tier | null {
  const rank = placementRank(placement);
  if (rank === 99) return null;
  if (rank === 0) return "gold";
  if (rank === 1) return "silver";
  if (rank === 2) return "bronze";
  if (rank === 10) return "special";
  return "shortlist";
}
