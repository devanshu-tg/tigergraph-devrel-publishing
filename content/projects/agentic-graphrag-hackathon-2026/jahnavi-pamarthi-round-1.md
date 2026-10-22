---
id: "prj_0c53ff"
team: "Jahnavi Pamarthi"
title: "RAGNEX – From Retrieval to Autonomous Investigation"
round: "Round 1"
repo_url: "https://github.com/Jahnavi-DS/RAGNEX"
demo_url: "https://youtu.be/yKGbV2AFAWQ"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

RAGNEX is an Agentic GraphRAG system that compares three approaches: traditional RAG, GraphRAG, and Agentic GraphRAG. It retrieves relevant documents, connects information through a knowledge graph using TigerGraph, and autonomously investigates complex questions using tools, evidence evaluation, and adaptive reasoning. The system measures retrieval quality, graph evidence, latency, token usage, confidence, and investigation steps to demonstrate when simple RAG is sufficient and when graph-based or autonomous investigation provides additional value.

## Details

- **LLM:** openai/gpt-oss-120b
- **Vector database:** None – Local document corpus with keyword retrieval
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 5
- **Retrieval methods:** Entity extraction, document retrieval, graph traversal, evidence evaluation, evidence aggregation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 72% | 86% | 92% |
| Tokens per query | 2100 | 3400 | 4900 |
| Latency | 1.8 | 3.1 | 6.4 |

## Links

- Live app: https://ragnex.onrender.com/
- Blog post: https://medium.com/@jahnavipamarthi24/ragnex-from-retrieval-to-autonomous-investigation-45856a213247
