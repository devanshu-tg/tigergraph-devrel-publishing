---
id: "prj_601deb"
team: "Syntax_Sages"
title: "SentinelGraph"
round: null
repo_url: "https://github.com/mohammadaves2025-dotcom/SentinelGraph"
demo_url: "https://drive.google.com/file/d/1uiMn8_158nCr9ZGRY2XwcfPk-0WwtmLE/view?usp=drive_link"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

In SentinelGraph, TigerGraph serves as the core intelligence engine for real-time financial threat detection. We integrated a TigerGraph Cloud instance with our Node.js backend using the native REST++ API. Raw transactional data (transfers) and entities (accounts) are ingested as edges and vertices, mapping the entire financial network into a high-performance graph structure.

Instead of relying on slow relational database table joins, we utilize TigerGraph's Graph Data Science (GDS) library. Specifically, our backend triggers the Weighted Community Detection algorithm (tg_wcc_account_with_weights) to execute deep, multi-hop traversals in milliseconds. This allows the system to autonomously identify high-density money laundering clusters and synthetic identity rings.

Furthermore, the integration is bi-directional and supports real-time database mutations. Features like our "War Games" simulation and "Enterprise Kill Switch" send direct API commands to TigerGraph to instantly insert threat vectors or quarantine compromised nodes, ensuring the active graph schema remains perfectly synced with our React frontend command center.

## Links

- Live app: https://sentinel-graph-szgt.vercel.app/
- Slides: https://canva.link/pbbw807yfm1ljbr
