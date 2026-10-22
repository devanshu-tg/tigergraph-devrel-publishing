---
id: "prj_9c9f97"
team: "Graphites"
title: "NetraVote"
round: null
repo_url: "https://github.com/AnushreeJ13/NetraVote"
demo_url: "https://drive.google.com/drive/folders/1iq1a9TwMoFPZ1puq6qFCp6YWvu3pSkjr?usp=sharing"
placement: "Winner"
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

Graph Database Core:
TigerGraph Savanna (cloud-hosted) serves as the intelligence backbone. The data is modeled as a property graph with 7 vertex types (Voter, Address, Booth, Constituency, PinCode, Device, Phone) and 10 edge types capturing real-world relationships like REGISTERED_AT, FAMILY_OF, DUPLICATE_OF, etc.
GSQL Detection Queries:
8 custom GSQL queries power all fraud detection : detect_overcrowded_addresses, detect_duplicate_voters, detect_impossible_families, detect_temporal_fraud, detect_multi_booth, full_constituency_scan, detect_cross_constituency_network, and get_timeline_data. The full_constituency_scan is the master query that runs all signals in sequence and writes risk_score back onto Voter vertices.
Built-in Graph Algorithms:
Rather than implementing algorithms from scratch, the solution leverages TigerGraph's Graph Data Science library : PageRank on Address nodes to find hub addresses, Louvain community detection for ghost factory clusters, WCC to isolate disconnected fraud rings, and Betweenness Centrality to find human agents bridging multiple clusters.
REST++ Integration:
The FastAPI backend communicates with TigerGraph via REST++ API using Bearer token auth, with a 12-second timeout. Voters are upserted in batches of 1,000 using idempotent upsert semantics.

## Links

- Slides: https://drive.google.com/drive/folders/1iq1a9TwMoFPZ1puq6qFCp6YWvu3pSkjr?usp=sharing
