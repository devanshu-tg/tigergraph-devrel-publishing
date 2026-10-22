---
id: "prj_be72b0"
team: "WeHaveToWin"
title: "Tigergraph Fraud Detection"
round: null
repo_url: "https://github.com/Kajal-kaushik/tigergraph_fraud_detection"
demo_url: "https://drive.google.com/file/d/1V8qgNNkD1lQG5jyub0rO5Ves5D5i71xM/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:52+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core graph database to model and analyze fraud as a connected network. All entities such as users, bank accounts, phones, devices, IP addresses, and transactions are stored as vertices, while their relationships (like USES_DEVICE, OWNS_ACCOUNT, SENDS, RECEIVES) are stored as edges.

Using TigerGraph’s GSQL queries and graph traversal, we fetch a user’s complete connected network to detect hidden fraud links. We also apply graph-based analysis like connected components to identify fraud rings (clusters) and compute a risk score by measuring how many suspicious connections a user shares.

Finally, the backend communicates with TigerGraph using its REST API, allowing the frontend dashboard to display fraud rings, shortest fraud paths, and real-time risk insights through interactive graph visualizations.

## Links

- Live app: https://tigergraph-fraud-detection.vercel.app/
- Slides: https://canva.link/71x9hyhre5u01jh
