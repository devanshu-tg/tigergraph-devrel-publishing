---
id: "prj_3ba053"
team: "yeshwanthy S"
title: "Agentic GraphRAG for  Olympic Data Question Answering"
round: "Round 1"
repo_url: "https://github.com/yeshiraK/tigergraph-hackathon"
demo_url: "https://youtu.be/6HGVBAgjBfM?si=PW3Gnau8pLnJCD22"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

An agentic GraphRAG system built with TigerGraph that combines graph-based reasoning, vector retrieval, and adaptive retrieval strategies to answer complex questions over Olympic data. The system dynamically selects between vector RAG, graph reasoning, and multi-hop retrieval, with evidence verification and bounded repair to improve answer reliability.

## Details

- **LLM:** Gemini 3.5 Flash Lite
- **Vector database:** igerGraph Native Vector Search (HNSW, 768-dimensional embeddings)
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 4.9
- **Retrieval methods:** Similarity search, vector retrieval, entity linking, graph traversal, graph reasoning, document/chunk retrieval, aggregation, evidence verification, bounded repair

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 68% | 66% | 83% |
| Tokens per query | 0 | 0 | 13,896.70 |
| Latency | 0.43 s | 2.37 s | 14.95 s |

## Links

- Blog post: https://medium.com/@yeshikrishnan/from-rag-to-agentic-graphrag-building-grounded-reasoning-with-tigergraph-91c9db7808f9?postPublishedType=initial
