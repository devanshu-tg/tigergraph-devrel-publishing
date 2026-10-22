---
id: "prj_ac0964"
team: "Kill Bill"
title: "Ledgershield Digital Cctv"
round: null
repo_url: "https://github.com/Manjari-2005/Ledgershield-Digital-cctv"
demo_url: "https://canva.link/md8if1r3ndaadp2"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

We integrated **Tiger Graph** as our primary graph database to move from "Point-to-Point" security to "Network-Wide" intelligence.

**1. Native Parallel Graph (NPG) Architecture**
Unlike traditional SQL databases that struggle with "Table Joins," Tiger Graph’s architecture allows Ledger Shield to perform **Deep Link Traversal**. We can analyze 6+ degrees of separation (User → Device → IP → Transaction → Merchant) in milliseconds to uncover hidden fraud paths that are invisible to relational systems.

**2. GDS Library (Graph Data Science) for Pattern Recognition**
We leveraged the **Tiger Graph GDS Library** to run advanced algorithms directly on the data:
* **Louvain Community Detection:** Used to automatically cluster seemingly unrelated accounts into "Fraud Rings" based on shared digital fingerprints (e.g., hardware IDs or IP addresses).
* **PageRank for Risk Scoring:** We treat every entity as a node. High-risk "flow" is calculated using PageRank logic; if a clean account is heavily connected to a known fraudulent device, its risk score is automatically elevated.

**3. Real-Time GSQL Logic**
We wrote custom **GSQL queries** to act as our "Digital CCTV." These queries monitor for specific fraudulent patterns, such as:
* **Synthetic Identity Detection:** Identifying clusters of accounts that share a single physical address or phone number.
* **Internal Ledger Surveillance:** Detecting "backdated" or "manual reversal" edges that deviate from standard employee behavioral patterns.

**4. Seamless API Integration**
The Tiger Graph database is connected to our **Node.js backend** via REST APIs. This allows the **D3.js-powered frontend** to fetch real-time graph updates, providing managers with an interactive, force-directed map of detected threats.

## Links

- Live app: https://ledgershield-digital-cctv.onrender.com
- Slides: https://1drv.ms/p/c/b9a50fb7c9936413/IQCVsaJVZ5jMR6DO-ZjVuI_GAaEWyFmlbUsDSM6P1pNihPs?e=j5qqNh
