---
id: "prj_9f7268"
team: "ForgeFox"
title: "AI Adaptive Onboarding Engine"
round: null
repo_url: "https://github.com/sashwatpuri/AI-Adaptive-Onboarding-engine.git"
demo_url: "https://drive.google.com/drive/folders/1C-jBawRMe63wbNA-qElVHgQEMbbxojO2"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

TigerGraph has been integrated as a relational graph layer that complements the existing vector search (FAISS). While the vector engine handles semantic similarity, TigerGraph allows the system to trace complex dependencies and "bridge" skills.

How it is integrated:
Relational Modeling: I have modeled Skills and Jobs as vertices. The REQUIRES edge between them allows the engine to perform multi-hop queries (e.g., "What other jobs share 80% of the skills required for this role?").
Automated Schema Management: A dedicated TigerGraphService handles the GSQL schema definition, so the graph is automatically structured with the correct attributes (id, name, weight) upon initialization.
Intelligent Data Ingestion: The transition from flat data to a graph is handled by an ingestion pipeline that maps the 2,277 jobs in job_title_des.csv into the graph, linking them to a standardized skill taxonomy.
Graph-Based Matching Scores: Instead of relying solely on text embeddings, the integration enables calculates "skill-overlap" scores that are far more accurate for career-pathing than traditional keyword or vector search alone.

## Links

- Slides: https://app.presentations.ai/view/juMSggYl0o
