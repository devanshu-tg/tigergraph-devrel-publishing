---
id: "prj_ca38d2"
team: "sejlyn2006"
title: "Fraud Detection"
round: null
repo_url: "https://github.com/personal-opposite987/Fraud_Detection"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:52+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core graph database to model and analyze supply chain relationships.

First, we transformed our preprocessed dataset into a graph structure with two main vertex types—Supplier and Customer—and a Transaction edge connecting them. Each edge carries attributes like risk_score and other fraud indicators generated using our Isolation Forest model.

We then used TigerGraph to:

store and manage these relationships efficiently
perform graph traversal to explore connections between entities
identify suspicious patterns such as clusters of high-risk transactions

On top of this, we integrated an LLM layer that dynamically generates GSQL queries based on user input, which are executed on TigerGraph. The results are then visualized in the frontend for investigation.

## Links

- Slides: https://docs.google.com/presentation/d/1zg9k4LH1Dgtgntqz3LUnd8Ss7TxACYrX/edit?usp=sharing&ouid=107696501991847193609&rtpof=true&sd=true
