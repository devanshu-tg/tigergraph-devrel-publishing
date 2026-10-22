---
id: "prj_e451c1"
team: "S.Y.S.D"
title: "Weave"
round: null
repo_url: "https://github.com/shreyaakalra/Weave"
demo_url: "https://youtu.be/HXJYaqkuWcQ"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:52+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core matching engine by mapping user identities as living subgraphs. A central User vertex connects to Interest, Vibe, and Personality nodes via edges that carry specific weights, like passion scores.

To find a match, our custom GSQL query runs a 2-hop traversal to instantly shortlist candidates who share these core nodes. The graph then calculates a multi-dimensional compatibility score in parallel, completely bypassing the slow performance of traditional database JOINs. We save this detailed mathematical breakdown in a CompatScore vertex to provide users with transparent, explainable match results.

## Links

- Live app: https://weave-amber.vercel.app
- Slides: https://canva.link/amez1o0u4er1r3v
