---
id: "prj_16b885"
team: "CyberSentinels"
title: "DARKGRAPH AI"
round: null
repo_url: "https://github.com/pk859/DARKGRAPH-AI.git"
demo_url: "https://drive.google.com/file/d/1XavJQw1vo9KI3IVPcxLGWKUvMc29vozZ/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

Tiger Graph has been integrated into our solution as the core engine for modeling and analyzing relationships within cyber attack data. Instead of treating the dataset as isolated records, we transform it into a graph structure where key entities such as attack types, campaigns, domains, networks, and regions are represented as vertices, and their relationships are defined as edges. This allows us to capture the multi-stage nature of cyber attacks in a connected format. Using Tiger Graph's GSQL, we implement multi-hop traversal queries that start from a selected attack type and explore its associated campaigns, domains, infrastructure (such as TOR or VPN), and targeted regions. This enables us to uncover hidden connections and reconstruct the complete attack chain. The insights generated through Tiger Graph are then integrated into our application, where they are further processed by an AI module to derive risk levels, patterns, and recommendations, and visualized through an interactive dashboard. In this way, Tiger Graph plays a crucial role not just as a storage system, but as an analytical backbone that allows us to move from simple data observation to meaningful investigation and understanding of attacker behavior

## Links

- Slides: https://drive.google.com/file/d/15eJEzeE_XookIGVhxM3DziW09k2er9jH/view?usp=sharing
