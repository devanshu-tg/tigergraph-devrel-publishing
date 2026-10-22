---
id: "prj_d19a31"
team: "TechX"
title: "Agentic GraphRAG Hackathon"
round: "Round 1"
repo_url: "https://github.com/utgarg07-spec/TigerGraphHackathon"
demo_url: "https://drive.google.com/file/d/1_6hm9Nlpyr2n9Bvvzym_RNq4fO2Fr9cz/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Agentic GraphRAG Hackathon: Some questions can be answered with a single retrieval step. But the hard ones require a system that can break the question apart, determine what to retrieve, evaluate the returned evidence, identify gaps, and continue investigating until it has sufficient evidence for an answer.

This project builds an Agentic GraphRAG system on TigerGraph that investigates complex questions using graph, vector, and document evidence. It compares three approaches: RAG, GraphRAG, and Agentic GraphRAG, to determine where simple retrieval is sufficient and where agentic investigation provides additional value.

## Details

- **LLM:** openai/gpt-oss-20b
- **Vector database:** TigerGraph (HNSW vector index; qwen_embedding, 1024-dimensional)
- **Graph backend:** TigerGraph Cloud — Savanna
- **Average agent steps per question:** 3.04
- **Retrieval methods:** Deterministic GSQL tools, hybrid vector search, graph traversal, similarity search, entity/relationship retrieval, evidence evaluation, replanning

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 19 | 20 | 95 |
| Tokens per query | 8617.17 | 1103.3 | 7718.01 |
| Latency | 11.29 | 35.04 | 39.43 |

## Links

- Blog post: https://medium.com/@utgarg23/agentic-graphrag-on-tigergraph-from-19-rag-to-95-accuracy-c6e1638b2b9f
