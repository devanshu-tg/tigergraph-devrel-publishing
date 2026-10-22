---
id: "prj_f72d3c"
team: "FinVerse"
title: "Mule Account Detect"
round: null
repo_url: "https://github.com/apurbaxx/mule-account-detect"
demo_url: "https://vimeo.com/1180485521?share=copy&fl=sv&fe=ci"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

TigerGraph serves as the core detection engine for identifying cross-channel money mule patterns that traditional siloed fraud systems miss.

Graph Data Model
We model financial activity as a connected graph:

Vertices: Accounts, Transactions, Devices, Wallets, ATMs
Edges: Money flow (SENT/RECEIVED), device ownership (OWNS_DEVICE), wallet links (LINKED_WALLET, VIA_WALLET), ATM withdrawals (WITHDREW_AT)

Single-Query Cross-Channel Traversal
Traditional systems check each channel separately. TigerGraph traverses Mobile App → Wallet → ATM in one query, detecting the complete mule pattern in milliseconds.

Time-Window Pattern Detection
GSQL queries identify suspicious sequences occurring within 30 minutes—impossible with siloed rule engines.

Identity Linkage via Shared Devices
Graph traversal instantly reveals when multiple "unrelated" accounts share the same device, exposing coordinated mule rings.

Composite Risk Scoring
We accumulate risk signals across the graph (mobile deposits +20, ATM withdrawals +25, shared devices +30) to generate holistic fraud scores.

## Links

- Live app: https://mule-account-detect.streamlit.app/
- Slides: https://canva.link/98e2ukzo0hmm9b8
