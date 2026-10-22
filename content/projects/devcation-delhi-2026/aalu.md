---
id: "prj_4eeaa6"
team: "aalu"
title: "Chintu"
round: null
repo_url: "https://github.com/shvn22k/chintu"
demo_url: "https://youtu.be/qM3iMzK2wcE"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core engine powering CHINTU’s knowledge graph and reasoning capabilities. All real-world data—events, entities, and topics—are modeled as vertices, while relationships such as involvement and causality are represented through edges, with INFLUENCES being the most critical for capturing event-to-event impact.

We built a data pipeline that processes GDELT event data and transforms it into a structured graph format, generating over 100K event nodes and tens of thousands of relationship edges. Custom logic was implemented to derive causal links between events based on shared entities, temporal proximity, and thematic similarity.

On top of this graph, we developed optimized GSQL queries for key operations like narrative tracing, causal propagation, and entity impact analysis. These queries are exposed through a Flask API, which acts as a controlled interface between the frontend and TigerGraph.

Overall, TigerGraph is not just used for storage—it is central to enabling fast multi-hop traversal, real-time reasoning, and scalable analysis of complex geopolitical event relationships.

## Links

- Slides: https://canva.link/rfj7d8oou1ulfub
