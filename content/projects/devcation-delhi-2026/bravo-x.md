---
id: "prj_c2d521"
team: "Bravo X"
title: "Code Dependency Impact Analyzer For Large Codebases"
round: null
repo_url: "https://github.com/Ujjansh05/Code-Dependency-Impact-Analyzer-For-Large-Codebases-"
demo_url: "https://drive.google.com/drive/folders/1OasZxS48ZddsXhKknd1T_wntP3vxm2jg?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph by first parsing the Python codebase with AST and converting the extracted structure into graph-ready CSV files containing vertices and edges. Using `pyTigerGraph`, the system connects to the `CodeGraph` database and upserts `CodeFile` and `CodeFunction` nodes along with `CONTAINS`, `CALLS`, and `IMPORTS` relationships. During startup, the project also bootstraps the TigerGraph schema and installs required GSQL queries (`impact_analysis` and `hop_detection`) so query execution is ready automatically. When a user asks an impact question, the app resolves the target node, runs the installed TigerGraph query, and returns affected components to the CLI, API, and frontend for visualization and explanation.

## Links

- Slides: https://canva.link/2riudwqi4yhzvqg
