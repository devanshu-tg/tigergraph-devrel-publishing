---
id: "prj_25d830"
team: "Horizon"
title: "Predictive Criminal Graph Intelligence"
round: null
repo_url: "https://github.com/TechnicalVishalJi/Predictive-Criminal-Graph-Intelligence"
demo_url: "https://drive.google.com/file/d/1iYuOsyktshRxs21MsKNbo8icIrLYD6zY/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

We use TigerGraph as the core intelligence engine, integrated via pyTigerGraph and a FastAPI backend:

1.Native Advanced Algorithms: We utilize built-in GSQL algorithms like PageRank for dynamic risk scoring and Betweenness Centrality to identify critical "bridge nodes" within criminal networks, powering our Network Disruption Simulator.
2.Temporal Multi-Hop Traversal: Our schema design uses time-stamped edges, allowing complex, time-constrained GSQL queries to track financial layering and communication anomalies across multiple hops.
3.GraphRAG Pipeline: The backend bridges our React dashboard to TigerGraph, where an LLM translates natural language queries directly into executable GSQL, democratizing complex graph analysis.

## Links

- Slides: https://drive.google.com/file/d/15ySMraqNt37ApkgmC1MKNIPBfJJdi5N7/view?usp=drive_link
