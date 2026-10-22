---
id: "prj_81da16"
team: "Bella Ciao"
title: "FakeInfluencerRADAR"
round: null
repo_url: "https://github.com/FadelAhmad/FakeInfluencerRADAR"
demo_url: "https://youtu.be/CHcEyTXWwVc"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

TigerGraph integration is built on a graph schema centered around core entities like User and Post, alongside auxiliary nodes like Hashtag, Device, IPBucket, and Campaign for richer signal detection. These are connected through engagement edges such as POSTED, LIKED, COMMENTED, SHARED, and CO_ENGAGED, enabling efficient multi-hop traversal of interaction patterns.

We implemented a suite of distributed GSQL queries that operate directly on this graph to detect fraud signals. For example, queries traverse patterns like:

User → POSTED → Post → LIKED/COMMENTED/SHARED → User

to identify repeat engagers, and further explore CO_ENGAGED relationships to uncover tightly connected engagement pods indicative of coordinated behavior. All heavy computation and graph traversal are executed inside TigerGraph, leveraging its parallel query engine for scalability.

On top of this, a FastAPI backend acts as a thin service layer invoking these pre installed queries via TigerGraph's RESTPP API using a helper function (call_tg_query()), then parsing and enriching the results with lightweight application logic such as risk classification and response formatting before returning structured JSON to clients.

## Links

- Live app: https://fake-influencer-radar.vercel.app/
- Slides: https://canva.link/wpexfgr860f9zoe
