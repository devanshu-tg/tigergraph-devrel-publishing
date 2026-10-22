---
id: "prj_7472e2"
team: "Btech baddiess"
title: "Flood Response"
round: null
repo_url: "https://github.com/chhavic4004/flood-response"
demo_url: "https://drive.google.com/file/d/1Atu71flEWLJn8iV2Fi2hozDtXJJ_7ofR/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

We defined the graph schema in schema.sql.
FastAPI connects to TigerGraph via pyTigerGraph in main.py.
Real Assam data is transformed in prepare_assam_data.py and loaded through load_data.py.
Routing/simulation APIs use this graph structure for shortest paths, blocked-route handling, and impact analysis.

## Links

- Live app: https://flood-response-omega.vercel.app
- Slides: https://www.canva.com/design/DAHGExuQ9Ew/fTKWdXgDwpnFbtjWcGujpw/edit
