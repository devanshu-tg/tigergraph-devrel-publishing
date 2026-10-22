---
id: "prj_19d859"
team: "404 Not Found"
title: "DisasterGraph"
round: null
repo_url: "https://github.com/Vishad-byte/DisasterGraph"
demo_url: "https://www.loom.com/share/b82e99dbe75740ef9fcf139830a0c89b"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core real-time decision engine behind the dashboard.

- We model the disaster system as a graph with vertices like: `Zone`, `DisasterEvent`, `Resource` etc , connected with edges like `affects`, `connects`, `serves`, and `assigned_to`.
- Ingestion services (FIRMS, Sentinel, OSM) continuously upsert vertices/edges into TigerGraph, so the graph always reflects latest hazard, pollution, and road-passability state.
- The backend queries TigerGraph to power our api routes, and assignments, including blocked vs passable routes.
- The agent runs installed graph queries (affected zones, available resources, shortest passable route), then writes assignment updates back to TigerGraph.
- The React UI reads these API outputs, so every map color, blocked-road highlight, and dispatch record is graph-backed and near real-time.

## Links

- Live app: https://disastergraph-dashboard.onrender.com/ui
- Slides: https://canva.link/6ql5j3iowqei7ne
