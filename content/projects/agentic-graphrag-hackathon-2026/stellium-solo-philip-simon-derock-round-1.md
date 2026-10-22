---
id: "prj_e083f3"
team: "STELLIUM (solo, Philip Simon Derock)"
title: "STELLIUM"
round: "Round 1"
repo_url: "https://github.com/simon-derock/stellium"
demo_url: "https://drive.google.com/file/d/1QtLyBDoRVdOwyd2Qg9iSP7BkmalV5B1L/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

## Details

- **LLM:** Cohere command-a-03-2025 (Command A), temperature 0: the same model for every LLM call in all three pipelines, including the agent's planner
- **Vector database:** TigerGraph native vector search (HNSW) in TigerGraph Savanna 4.2.5, the same workspace as the graph, with no external vector database. Embeddings: Cohere embed-v4.0 (1024 dimensions). Reranking: Cohere rerank-v3.5.
- **Graph backend:** TigerGraph Savanna (cloud), version 4.2.5
- **Average agent steps per question:** 2.31 tool steps per question (median 2, max 4), with 1.16 LLM calls per question; 84 of 100 public questions answered with a single LLM call
- **Retrieval methods:** Entity linking (free text to graph events, sports, venues and dates, over all 2,210 graph events); graph traversal (venue + date to event to winner; PRECEDES/SUCCEEDS edges for previous editions); aggregation (installed GSQL count and rank queries with tie detection); event attribute lookup (graph vertex reads); similarity search (TigerGraph native HNSW vector search, Cohere embed-v4.0); keyword search (BM25); reciprocal rank fusion; reranking (Cohere rerank-v3.5); document retrieval (passages with source citations); evidence evaluation (every graph value checked against the cited article); guarded read-only GSQL generation for questions no tool covers

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 71 | 99 | 99 |
| Tokens per query | 2543 | 1056 | 908 |
| Latency | 1.8 (median; mean 1.94) | 6.5 (median; mean 6.85) | 1.9 (median; mean 2.19) |

## Links

- Live app: https://stellium.philipsimonderock.com/
- Blog post: https://stellium.philipsimonderock.com/blog
