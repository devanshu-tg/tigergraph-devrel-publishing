---
id: "prj_8d2303"
team: "TeamOxygen"
title: "Web Accessibility Auditor"
round: null
repo_url: "https://github.com/Srijato-05/Web_Accessibility_Auditor"
demo_url: "https://drive.google.com/drive/folders/1JxGJSnVo_vbxzYpOQMyhoMEfKPk35lnW?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:52+05:30"
---

## How the team used TigerGraph

The Goal: It stops duplicate bug reporting. If a broken Navigation Bar is on 100 pages, TigerGraph flags it as 1 root issue that affects 100 pages, rather than 100 separate bugs.
The Connection (tigergraph_repository.py): We use the Python pyTigerGraph SDK to connect securely to your TigerGraph Cloud instance using background, non-blocking threads so it never slows down the scanner.

The Data Pipeline: When the accessibility scanner finds an error, it hashes the broken HTML snippet and pushes it to TigerGraph. TigerGraph automatically maps it: Page -> Contains -> Component -> Triggers -> Violation.

The UI Display (api.py): The React frontend pulls data strictly from TigerGraph. It uses this graph data to render the visual Node/Edge topology in the Dashboard and calculates the exact "Blast Radius" metrics shown in the Graph Insights page.

## Links

- Slides: https://docs.google.com/presentation/d/12WHnol09YIyT9s7RP5cCohae1Y4TeDef/edit?usp=sharing&ouid=104097112078819198021&rtpof=true&sd=true
