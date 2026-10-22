---
id: "prj_7582d0"
team: "Zackers"
title: "Ai Agent Risk Platform"
round: null
repo_url: "https://github.com/mj-does/ai-agent-risk-platform"
demo_url: "https://canva.link/rp27w903qkp75ej"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:52+05:30"
---

## How the team used TigerGraph

TigerGraph is the map of the company.
Every time a prompt enters our system, we draw it on the map — who received it, which AI employee (agent) picked it up, which tool they used, what action they tried to take, and which system they were about to touch.
Our GSQL query then looks at this map and asks — "if this prompt is malicious, how far can the damage spread?" It traces the full path and calculates the total risk across every connected component.
Our /should_execute endpoint is the security guard at the door — no agent can take a real action without asking us first. We check the map, calculate the propagated risk, and respond with allow, warn, or block.
So TigerGraph in our project is not just a database — it's the memory of every attack attempt and the brain behind every block decision.

## Links

- Slides: https://docs.google.com/presentation/d/1NN6Djd7nN_OVcFbX4ihyssqpES89klFQ/edit?usp=sharing&ouid=112846220416543211888&rtpof=true&sd=true
