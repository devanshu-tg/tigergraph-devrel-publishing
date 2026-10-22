---
id: "prj_600891"
team: "TechFIRE"
title: "SAR NARRATIVE"
round: null
repo_url: "https://github.com/Ashutosh-cm/SAR_NARRATIVE"
demo_url: "https://drive.google.com/file/d/1zZKsoO2ChFLutec_1f0HluSsuy0yuodA/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

We implemented TigerGraph Cloud as our primary Graph Intelligence Engine to replace legacy relational databases for transaction monitoring.

We mapped the banking data as vertices and edges and engineered a custom GSQL algorithm (Detect_4Hop_Cycle_Final) utilizing memory accumulators.

This architecture allows our system to physically traverse relationships and detect complex 4-hop circular money laundering loops in milliseconds without crashing.

Once a hidden network is found, TigerGraph instantly extracts that localized subgraph and routes the JSON payload to our Generative AI layer for reporting.

## Links

- Slides: https://drive.google.com/file/d/1U_zvVb2bSpd3N3diqfD-by7NuFqhCusy/view?usp=sharing
