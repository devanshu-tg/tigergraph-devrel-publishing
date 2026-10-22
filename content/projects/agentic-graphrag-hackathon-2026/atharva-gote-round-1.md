---
id: "prj_6fb7d3"
team: "Atharva Gote"
title: "RAGX -Adaptive Multi-Path Retrieval"
round: "Round 1"
repo_url: "https://github.com/avg03/Agentic-GraphRAG"
demo_url: "https://drive.google.com/file/d/1wEjUKs8a6B0vcgYpsaZQ8ha6OJSKqJEW/view?usp=drive_link"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

An experimental Retrieval-Augmented Generation system that compares Vector RAG, GraphRAG, and Agentic GraphRAG on the same knowledge corpus. The system combines dense/BM25 retrieval, TigerGraph-based relationship and hierarchical context traversal, and an agentic reasoning loop that dynamically chooses retrieval strategies, evaluates evidence coverage, expands sibling contexts, and falls back to vector search when graph evidence is insufficient.

## Details

- **LLM:** GPT-5-mini
- **Vector database:** ChromaDB ,1.00.20
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 2.23
- **Retrieval methods:** Entity linking,Scope/context resolution -deterministic context index mapping scope keys,Graph traversal ,Similarity search,Lexical retrieval,Reranking & scoringQuery-aware aggregation & coverage gating,Document (chunk) retrieval

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 63 | 54 | 66 |
| Tokens per query | 3328 | 6098 | 20394 |
| Latency | 26 | 67 | 170 |

## Links

- Blog post: https://avgdev.hashnode.dev/experience-building-in-tigergraph-agentic-graphrag-hackathon
