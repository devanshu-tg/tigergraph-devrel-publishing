---
id: "prj_b5206f"
team: "TRACर्कस"
title: "ShadowFlow Intelligence"
round: null
repo_url: "https://github.com/sahilrajpq-create/ShadowFlow-Intelligence"
demo_url: "https://drive.google.com/file/d/1Nz-HVvABzsoKi09dpzLRtdXbSptt8yq5/view?usp=drive_link"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

I have integrated TigerGraph as the core analytical "brain" of the ShadowFlow solution, specifically designed to bridge the "Visibility Gap" in financial crime.

1. Schema Architecture 
Instead of a standard relational model, I implemented a high-performance graph schema:

Vertices: Account (financial endpoints) and Identity (resolved personas).
Edges: SENT_TO (directional transaction flows) and RESOLVED_AS (identity linkages). This allows for sub-second traversal across millions of transaction hops, which is impossible with traditional SQL JOINs.
2. GSQL Intelligence Engine 
I wrote custom GSQL algorithms to detect patterns characteristic of money laundering:

Circular Loop Detection: A multi-hop traversal query (depth 5+) that flags funds returning to the source via complex intermediary paths—a classic "layering" indicator.
Temporal Velocity Analysis: GSQL aggregations that monitor the speed of fund dispersion. If an account moves funds across multiple continents in a short "high-velocity window," it is automatically flagged for an audit.
3. Next.js Dashboard Integration
The frontend communicates with TigerGraph via REST APIs. When a forensic operator clicks on a node in the Transaction Canvas, the dashboard triggers these GSQL queries in real-time, pulling deep-link insights directly into the Subject Dossier for immediate analysis.

## Links

- Slides: https://docs.google.com/presentation/d/1Yix70cDq2K4X4SwV4_eGEb-BMqG9SxUo/edit?usp=sharing&ouid=114598214257271647067&rtpof=true&sd=true
