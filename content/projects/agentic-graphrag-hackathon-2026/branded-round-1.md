---
id: "prj_d58780"
team: "Branded"
title: "TigerGraph_hackathon"
round: "Round 1"
repo_url: "https://github.com/satymishra/TigerGraph_hackathon"
demo_url: "https://screenrec.com/share/rjMJqkLAdc"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

A system that answers questions about Olympic events using three different retrieval architectures RAG, GraphRAG, and Agentic GraphRAG benchmarked head-to-head on 100 evaluation questions, with a full web interface that lets you run live queries and watch each pipeline reason through the answer in real time.

## Details

- **LLM:** qwen3:4b (via Ollama, running locally)
- **Vector database:** In-memory NumPy vector index (nomic-embed-text embeddings, 768-dim, cosine similarity). No external vector DB — embeddings stored as a local .npy file and searched at query time.
- **Graph backend:** TigerGraph Savanna (cloud-hosted, free tier)
- **Average agent steps per question:** 3 (min 2, max 4 — the agent runs between 2–4 tool calls depending on question complexity)
- **Retrieval methods:** Entity linking, graph traversal, aggregation, multi-hop reasoning, similarity search, document retrieval, evidence evaluation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 29% | 90% | 84% |
| Tokens per query | 1856 | 0 | 0 |
| Latency | 143.6 seconds | 0.87 seconds | 45.6 seconds |

## Links

- Blog post: https://x.com/Satyam_Mishra_C/status/2105901121260982782
