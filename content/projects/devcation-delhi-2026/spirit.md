---
id: "prj_011496"
team: "Spirit"
title: "Fraudgraph"
round: null
repo_url: "https://github.com/nimish-g29/Fraudgraph"
demo_url: "https://drive.google.com/file/d/10c_ubOg84xWFileYtI9UznkO5nQgIJiN/view?usp=drive_link"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:52+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core database to model financial data as a graph, where accounts are represented as nodes and transactions as edges.
We designed the schema and wrote GSQL queries to perform multi-hop traversal, enabling detection of suspicious patterns such as circular transactions and indirect relationships.
The backend, built using FastAPI, communicates with TigerGraph by executing these queries through API calls and fetching the results. These results are then sent to the frontend, where they are visualized as an interactive graph for analysis.

## Links

- Slides: https://docs.google.com/presentation/d/1dVbhbcrLhhyqqbM9rARmw5mUlaNSeu4L/edit?usp=drive_link&ouid=103069823738886097417&rtpof=true&sd=true
