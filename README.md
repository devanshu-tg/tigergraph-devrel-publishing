# TigerGraph DevRel publishing site

The source of truth for DevRel **events**, **hackathon projects** and **blogs**.
DevHub reads the JSON feeds every night:

| Feed | URL |
| --- | --- |
| Events | `/api/events.json` |
| Hackathon projects | `/api/projects.json` |
| Blogs | `/api/blogs.json` |

There is no database or admin panel. **Every item is one Markdown file in `content/`.**
To publish something: add or edit a file, run `npm run stamp`, commit and push. Vercel rebuilds the site.

---

## The golden rules (from the DevHub team)

1. **Never change an `id` or `slug`** once something is published. DevHub would see a duplicate. The build blocks this.
2. **Always run `npm run stamp` after editing.** It sets `updated_at` on everything you changed. DevHub only re-reads items whose `updated_at` changed. The build fails if you forget.
3. **Write the full text**, never a summary. DevHub's AI assistant can only answer from the text it receives.
4. **Dates always include a timezone**, e.g. `"2026-10-28T10:00:00+05:30"`.
5. **Images** are either a full URL (`https://...`) or a file you put in `public/images/`, written as `"/images/events/my-file.jpg"`. The JSON always gets the full URL.

You never set `status` ("upcoming"/"past"). It's worked out from `ends_at` when the site builds, and the site rebuilds every day.

---

## Add an event

```bash
npm run new -- event "Graph Meetup Bangalore November 2026"
```

This creates `content/events/graph-meetup-bangalore-november-2026.md` with a fresh `id`. Open it and replace every `TODO`:

```markdown
---
id: "evt_k7m2q9"                       # created for you, never change it
slug: "graphrag-webinar-oct-2026"      # becomes the URL /events/<slug>; never change it after publishing
title: "Building GraphRAG Apps with TigerGraph"
type: "webinar"                        # webinar | meetup | workshop | hackathon | conference
starts_at: "2026-10-28T10:00:00+05:30"
ends_at: "2026-10-28T11:00:00+05:30"
timezone: "Asia/Kolkata"               # IANA name; must match the +05:30 above
location: "Online"                     # or "Bengaluru, WeWork Galaxy"
is_online: true
cover_image_url: "/images/events/graphrag-webinar.svg"
registration_url: "https://www.tigergraph.com/events/graphrag-webinar"
featured: true                         # shows it on the home page
submissions: 91                        # optional, hackathons: total projects submitted (incl. unlisted ones)
updated_at: "2026-10-08T20:00:00+05:30" # set by npm run stamp
---

The full event description goes here, in Markdown.
```

Then:

```bash
npm run stamp     # sets updated_at and checks everything
git add -A && git commit -m "Add Bangalore meetup" && git push
```

## Add a hackathon and its projects

1. Create the hackathon like any event, with `type: "hackathon"`.
2. Its projects live in `content/projects/<hackathon-slug>/`, one file per team.

**From an Unstop (or partner) export.** Save the export as CSV, then:

```bash
npm run import:projects -- --event graph-for-good-2026 --csv ~/Downloads/submissions.csv
```

- The script prints which CSV column it used for each field, and lists rows that need checking (e.g. missing repo link).
- If it can't find a column, it shows the CSV's column names. Add the right name to `scripts/import-mappings.json` and run it again.
- For a partner's export with different columns, add a new block (e.g. `"partnerx": {...}`) to that file and pass `--source partnerx`.
- To add more description columns (e.g. "Tech Stack"), list them under `extra_sections`. Each one is added to the description under its own heading.
- **Safe to re-run** with an updated export: existing teams keep their `id`, placement and prize.

**Placements and prizes from the judging sheet** (a CSV with team name, placement and prize columns):

```bash
npm run import:results -- --event graph-for-good-2026 --csv ~/Downloads/judging.csv
```

Team names are matched ignoring case, spaces, accents and punctuation. Any team that doesn't match is listed so you can fix the spelling. Add `--reset` to clear placement/prize on teams that aren't in the sheet.

Placed teams appear at the top of the hackathon page, in this order: Winner/1st, 2nd/Runner-up, 3rd, special prizes (e.g. "Best Use of GSQL"), Finalist, then Honorable Mention.

**By hand:**

```bash
npm run new -- project graph-for-good-2026 "Team Name"
```

```markdown
---
id: "prj_a81xz3"
team: "Node Ninjas"
title: "FraudLens: Real-time Fraud Ring Detection"
repo_url: "https://github.com/node-ninjas/fraudlens"
demo_url: "https://fraudlens-demo.vercel.app"   # or null
placement: "Winner"                              # or null
prize: "$3,000 + TigerGraph Cloud credits"       # or null
image_url: "/images/projects/fraudlens.svg"      # or null
updated_at: "2026-09-20T12:00:00-07:00"
---

The full project description, in Markdown.
```

Projects have no `event_slug` field in the file. It comes from the folder name.

## Add a blog post

```bash
npm run new -- blog "Modeling Fraud Rings with GSQL"
```

```markdown
---
id: "blg_m3p8tr"
slug: "modeling-fraud-rings"
title: "Modeling Fraud Rings with GSQL Pattern Matching"
author: "TigerGraph DevRel"
published_at: "2026-10-01T09:00:00+05:30"
updated_at: "2026-10-01T09:00:00+05:30"
tags: ["gsql", "fraud", "tutorial"]
cover_image_url: "/images/blogs/fraud-rings.svg"  # or null
canonical_url: null      # set it if the post first appeared elsewhere; defaults to this site
featured: true           # home page only, not sent to DevHub
---

The full post, in Markdown.
```

## Removing something

Deleting a file removes the item from the feeds. Run `npm run stamp` afterwards. Check with the DevHub team that they handle removed items before relying on this.

---

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | First-time setup (needs Node.js 20+ from nodejs.org) |
| `npm run dev` | Preview the site at http://localhost:3000 while editing |
| `npm run new -- event\|blog "Title"` | Create a new event or blog file |
| `npm run new -- project <hackathon-slug> "Team"` | Create a project file |
| `npm run stamp` | **After every change.** Bumps `updated_at` and validates |
| `npm run validate` | Check content without changing anything |
| `npm run import:projects -- --event <slug> --csv <file>` | Import hackathon submissions |
| `npm run import:results -- --event <slug> --csv <file>` | Merge placements and prizes |
| `npm run build` | Full production build (validation runs first) |

## What the build checks

The build (and `npm run stamp` / `npm run validate`) fails with a clear message if:

- a required field is missing or misspelled, or `type` isn't one of the five allowed values
- the description or post body is empty
- an image URL isn't a full URL, or a `/images/...` file doesn't exist
- a date has no timezone, or its offset doesn't match the `timezone` (daylight saving included)
- `ends_at` is before `starts_at`
- two items share an `id`, or two events or two blogs share a `slug`
- a published `id` or `slug` was changed
- a file was edited but `updated_at` wasn't bumped
- a projects folder doesn't match a hackathon's slug

`content/.lock.json` is how the last three checks work. It's managed by `npm run stamp`. Don't edit it, but do commit it.

---

## Deployment (Vercel)

1. Push this repo to GitHub (private is fine) and import it in Vercel. No settings needed.
2. Image URLs in the JSON use Vercel's production address automatically. When you add a custom domain, set the environment variable `SITE_URL` (e.g. `https://devrel.tigergraph.com`) in Vercel → Settings → Environment Variables, then redeploy.
3. **Daily rebuild** (keeps "upcoming"/"past" correct): in Vercel → Settings → Git → Deploy Hooks, create a hook for `main`. In GitHub → Settings → Secrets and variables → Actions, add it as `VERCEL_DEPLOY_HOOK_URL`. The workflow in `.github/workflows/daily-rebuild.yml` then rebuilds every day at 00:30 UTC (06:00 IST). You can also run it by hand from the Actions tab.

### How past events reach DevHub

When an event ends, its `status` becomes `"past"` on the next daily rebuild. So that DevHub notices without anyone editing the file, the event's `updated_at` in the JSON becomes its `ends_at` (if that's later than the file's own `updated_at`).

---

## Where things are

```
content/events/            one .md per event (file name = slug)
content/projects/<slug>/   one .md per hackathon project
content/blogs/             one .md per blog post (file name = slug)
content/.lock.json         managed by npm run stamp, don't edit
public/images/             images referenced as "/images/..."
scripts/                   stamp, validate, new, import scripts, import-mappings.json
src/lib/api.ts             the exact JSON fields sent to DevHub (edit blog fields here)
src/lib/schemas.ts         the rules each content file must follow
src/app/                   the website pages and the /api/*.json feeds
```

**Changing the blog JSON fields** once DevHub confirms them: edit `blogJson` in `src/lib/api.ts`. If you're adding a new field to the files, also add it to `blogSchema` in `src/lib/schemas.ts`.
