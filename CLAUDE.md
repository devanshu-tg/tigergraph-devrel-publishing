# Notes for Claude

This repo is the source of truth for TigerGraph DevRel events, hackathon projects and blogs. DevHub (built by Báchoo Studio) pulls `/api/events.json`, `/api/projects.json` and `/api/blogs.json` nightly. README.md has the full content format.

## When adding or editing content

- Create new items with `npm run new -- event|blog "Title"` or `npm run new -- project <hackathon-slug> "Team"`, so ids are generated. Never invent ids by hand.
- **After any change under `content/`, always run `npm run stamp`** and fix every problem it reports before finishing. Never edit `updated_at` or `content/.lock.json` by hand.
- Never change an existing `id` or `slug`, even to fix a typo in a slug. If the user asks for it, explain that DevHub would treat it as a new item, and suggest changing the `title` instead.
- Descriptions and bodies must be the full text in Markdown, never a summary.
- Dates need a timezone offset that matches the event's IANA `timezone` on that date (DST included).
- Don't add a `status` field. It's computed from `ends_at` at build time.
- Images go in `public/images/<events|projects|blogs>/` and are referenced as `"/images/..."`.
- For hackathon CSVs, use `npm run import:projects` / `npm run import:results` rather than writing files one by one. If columns aren't found, add the column names to `scripts/import-mappings.json`.

## JSON contract

Field names in `src/lib/api.ts` are agreed with the DevHub team (events and projects are final, blogs are provisional). Don't rename or remove fields without the user confirming that DevHub agreed.

## Before finishing

Run `npm run build` when code (not just content) changed.
