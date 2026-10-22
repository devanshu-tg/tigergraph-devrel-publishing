---
id: "prj_765404"
team: "Medi Minds"
title: "ChainTrust"
round: null
repo_url: "https://github.com/GauravKarakoti/ChainTrust"
demo_url: "https://youtu.be/ion56Wb7fZ4?si=K92KMnA6vIyLZPs5"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

The application dynamically builds the graph by fetching transaction history and risk levels from different apis... determining the risk level, then upserting this data into TigerGraph.

This is done via POST requests to the /restpp/graph/ChainTrustGraph endpoint, structuring the payload with Wallet vertices and TRANSACTION edges.

The app relies on custom installed GSQL queries accessed via the /restpp/query/ REST API endpoints.

## Links

- Live app: https://chain-trust-psi.vercel.app
- Slides: https://canva.link/04oj5lhvtnsqkbt
