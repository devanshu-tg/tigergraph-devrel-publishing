---
id: "prj_782f05"
team: "Charmander"
title: "Detectra Ai"
round: null
repo_url: "https://github.com/kushagrathegod/detectra_ai"
demo_url: "https://drive.google.com/file/d/1MoOisVCPY0lN1gO-teGsEQexElPVlQi8/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

TigerGraph is the core graph analytics engine powering Detectra AI's fraud detection. We deployed a TigerGraph-backed API on Render that our React frontend communicates with via a centralized SDK (fraudApi.js).

Data Ingestion: Transaction datasets (CSV) are ingested directly into TigerGraph as graph nodes (Accounts, Devices) and edges (Transactions) via the /analyze-dataset endpoint.

Graph-Powered Detection: We leverage TigerGraph's GSQL for multi-hop traversal queries that would be prohibitively slow in a relational DB:

/check-transaction — scores a single transaction by analyzing its local graph neighborhood (connected accounts, devices, patterns) and returns an ALLOW/REVIEW/BLOCK decision with confidence.
/detect-fraud-network — retrieves the full global transaction graph to visualize fraud syndicates as interactive node-edge networks.
/detect-pattern/{type} — runs 7 specialized GSQL algorithms (circular loops, chain laundering, velocity bursts, smurfing, device sharing, rapid movement, round tripping) to detect specific money-laundering topologies.
/detect-geo-anomaly — cross-references device and location attributes across the graph to flag impossible-travel scenarios.

## Links

- Live app: https://detectra-ai-delta.vercel.app/
- Slides: https://drive.google.com/file/d/1bEj-G-sb7P-XKxJTsC2Zx1dN3KBcVbDX/view?usp=sharing
