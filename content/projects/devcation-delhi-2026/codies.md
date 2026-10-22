---
id: "prj_dbe95f"
team: "Codies"
title: "CargoGuardian"
round: null
repo_url: "https://github.com/sam120904/CargoGuardian"
demo_url: "https://drive.google.com/file/d/1H85YiDtu9bHCLSOXkxkkDqHNgoCzrWXI/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core graph database to model and analyze the railway cargo network. Stations are represented as nodes and routes between them as edges with attributes such as distance, travel time, congestion level, and track condition.

Custom graph queries are executed via TigerGraph’s REST API, which is connected to our FastAPI middleware. These queries power key functionalities such as shortest route computation, bottleneck detection, overload risk analysis, and identification of suspicious rerouting patterns.

## Links

- Slides: https://docs.google.com/presentation/d/1mpt2NnXbFJ-KhIDtyS7PnVJNvO0vA-O5/edit?usp=sharing&ouid=110375682916989052835&rtpof=true&sd=true
