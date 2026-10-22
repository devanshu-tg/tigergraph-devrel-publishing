---
id: "prj_127941"
team: "Billauta Gang"
title: "GRAPHGUARD"
round: null
repo_url: "https://github.com/luno141/GRAPHGUARD.git"
demo_url: "https://drive.google.com/file/d/1HRIUXxjtzZUTSCVJzM7m7J1e6IWwysyl/view"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core intelligence layer of our solution. We modeled users, phone numbers, devices, bank accounts, and transactions as a graph, which allows us to detect hidden fraud relationships that are difficult to find in a traditional relational database. Using GSQL queries, we identify patterns such as shared devices, reused phone numbers, multi-hop suspicious connections, and circular money-transfer loops. Our FastAPI backend connects to TigerGraph through pyTigerGraph to fetch these graph signals in real time, and the frontend visualizes them as risk scores, fraud clusters, and interactive network graphs.

## Links

- Slides: https://drive.google.com/file/d/1r7_CEesO6iEhULMqwNOK_yrwVQXFMLKf/view?usp=drive_link
