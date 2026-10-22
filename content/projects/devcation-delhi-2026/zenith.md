---
id: "prj_4ad13a"
team: "Zenith"
title: "CyberSenitnel"
round: null
repo_url: "https://github.com/SumitPanigrahiGit/CyberSenitnel.git"
demo_url: "https://youtu.be/j-ZTedb18Bg"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

The entire enterprise network is modeled as a property graph in TigerGraph — devices, servers, and threat actors as vertices; network connections and attack paths as directed edges.
Five GSQL queries run continuously: DFS for attack path discovery, Dijkstra for shortest/easiest attacker path, BFS for blast radius analysis, centrality-based node risk scoring, and critical CVE node filtering.
Graph-derived features (degree centrality, CVE count, patch lag) are pulled live from TigerGraph via GSQL and fed into the ML models. A Python GraphManager class handles all REST API communication between TigerGraph and the Flask backend.
The key advantage: a 5-hop attack path traversal is a single GSQL statement executing in milliseconds — the same query in SQL would require 5+ nested JOINs, making real-time threat prediction impossible at scale.

## Links

- Slides: https://docs.google.com/presentation/d/1J3WzrbRVvr6TeqXSmduDsJQxKMG8GHZS/edit?usp=sharing&ouid=114060469180745656591&rtpof=true&sd=true
