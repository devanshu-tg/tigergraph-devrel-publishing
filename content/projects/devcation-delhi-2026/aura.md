---
id: "prj_80d4dc"
team: "Aura"
title: "Aura"
round: null
repo_url: "https://github.com/kirtishukla9955/Aura"
demo_url: "https://youtu.be/D81CnMd5-6k"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

TigerGraph Integration in ProofFund:
Every time a user commits an idea to the Vault, we call tigergraphService.addIPAsset() which creates a vertex in the ProofFundGraph - storing the idea ID, title, type, and description as node properties.
The graph models relationships between ideas, creators, and funding activity - so when proposals get funded or voted on, edges are created connecting wallet addresses to IP assets. This powers the Network page, which visualizes the entire trust graph - showing which creators are connected, which ideas have backing, and how funding flows across the ecosystem.
Why TigerGraph specifically? Because unlike a regular SQL database, it lets us run graph traversal queries - answering questions like "show me all ideas connected to this wallet's trust network" or "which proposals share overlapping creator histories" - which is exactly the kind of relationship intelligence a DAO funding platform needs to detect reputation and catch fraud.
In short: IPFS stores the proof, blockchain stores the hash, TigerGraph stores the relationships.

## Links

- Live app: https://aura-five-ashy.vercel.app/
- Slides: https://canva.link/t2caij6ed1j8tha
