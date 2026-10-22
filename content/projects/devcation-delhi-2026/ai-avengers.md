---
id: "prj_7526af"
team: "AI Avengers"
title: "Fraud Detection"
round: null
repo_url: "https://github.com/utgarg07-spec/Fraud-Detection.git"
demo_url: "https://drive.google.com/file/d/1foNg4vDqb6FxrNsI8ovxGAkAMBjxh6L-/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core relationship engine of our solution to move beyond traditional tabular data and uncover complex, multi-hop patterns that relational databases often miss.

1. Graph Modeling & Schema Design
Instead of flat tables, we mapped our data into a highly connected schema. Entities such as Users, Accounts, Transactions, and Devices were defined as vertices, while their interactions—like fund transfers or shared IP addresses—were modeled as edges. This graph-first approach allowed us to maintain the context of every transaction in real-time.

2. Advanced Pattern Detection via GSQL
We utilized GSQL (TigerGraph’s query language) to execute "detective-style" queries across the network. This enabled the detection of sophisticated fraud signatures, including:

Circular Transfers: Identifying money laundering loops (A → B → C → A).

Fraud Rings: Mapping clusters of accounts that only interact within a closed group.

Synthetic Identities: Detecting multiple user accounts linked to a single hardware ID or fingerprint.

3. Seamless API Integration
Our backend communicates with the TigerGraph cloud instance via secure RESTful APIs. This ensures that as new data enters the system, we can trigger immediate graph traversals and receive risk insights without adding significant latency to the user experience.

4. Hybrid Intelligence Framework
TigerGraph serves as a critical feature engineering layer for our machine learning pipeline. By extracting "graph features"—such as PageRank scores or community detection metrics—and feeding them into our Isolation Forest model, we created a hybrid scoring system. This combination of relationship data and anomaly detection significantly reduces false positives and provides a more accurate overall risk profile.

## Links

- Live app: https://fraud-detection-gules.vercel.app/
- Slides: https://docs.google.com/presentation/d/1LIiwpQoaan-e8liuakB5VUjj8FAMOf70/edit?usp=drivesdk&ouid=102376344559999889476&rtpof=true&sd=true
