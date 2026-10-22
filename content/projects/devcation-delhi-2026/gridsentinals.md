---
id: "prj_722e51"
team: "GridSentinals"
title: "Resilience.AI"
round: null
repo_url: "https://github.com/sundaramkasera/Resilience.AI"
demo_url: "https://www.loom.com/share/3206ea5ca5f5417eb984c0b71958ab9c"
placement: "Winner"
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph as the core reasoning engine of our Smart City Command Center, moving beyond traditional relational databases to natively map the complex, interconnected dependencies of metropolitan infrastructure.

Rather than relying on pre-written, static queries, we implemented a dynamic Agentic Graph Retrieval system.

Here is how the integration works under the hood:

The Bridge (pyTigerGraph + LangChain): We utilized the pyTigerGraph SDK wrapped inside a secure, custom LangChain tool (execute_dynamic_python). This allows our Multi-Agent LLM architecture (powered by Groq) to maintain an active connection to the TigerGraph cloud instance.

Autonomous Querying: When an operator submits a natural language emergency scenario (e.g., a blackout or flood), our specialized sub-agents (the Power Grid Agent and Logistics Agent) autonomously write and execute raw Python scripts to traverse the graph schema in real-time.

Deep-Link Traversal: We heavily utilized TigerGraph’s edge traversal capabilities to simulate real-world physics and logistics. The AI queries POWERS and PROVIDES_SIGNAL edges to calculate the true cascading "blast radius" of a substation failure, and queries INTERSECTS edges to map physical road routes to affected hospitals.

Real-Time Analytics: We leveraged the graph database for instant vulnerability scanning. By counting outbound dependencies across all nodes simultaneously, TigerGraph allows our system to identify the city's Single Point of Failure (SPOF) in milliseconds.

Why TigerGraph? Standard SQL databases struggle with deep, multi-hop queries (e.g., finding a road, connected to a hospital, relying on a telecom tower, powered by a specific substation). TigerGraph allowed us to perform these complex dependency calculations instantly, enabling a true, real-time emergency simulation that dynamically updates our frontend PyDeck map.

## Links

- Slides: https://1drv.ms/p/c/4c176851a8207764/IQBYASu0NSfbQJdaKSyqMRc4AZ-Nva2thC9dFCpxhn1s31Y?e=VeZrLV
