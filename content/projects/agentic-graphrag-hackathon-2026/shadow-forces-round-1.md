---
id: "prj_8284ff"
team: "Shadow Forces"
title: "EVIDENCE GRAPH – Agentic GraphRAG for Olympic History Question Answering"
round: "Round 1"
repo_url: "https://github.com/rakshithamit25-cloud/Agentic-Graphrag-Bbenchmark"
demo_url: "https://youtu.be/5XK0KovG8tU"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

EVIDENCE GRAPH is an Agentic GraphRAG-based question-answering system for complex Olympic history queries. It combines semantic document retrieval (RAG), TigerGraph knowledge-graph traversal (GraphRAG), and adaptive AI-agent reasoning (Agentic GraphRAG) to retrieve, connect, verify, and reason over evidence from Olympic historical documents. The system supports multi-hop, temporal, aggregation, lookup, and superlative questions, while providing evidence-backed answers and investigation traces. It is evaluated using a three-way benchmark comparing RAG, GraphRAG, and Agentic GraphRAG performance.

## Details

- **LLM:** OpenAI GPT-OSS 120B (openai/gpt-oss-120b)
- **Vector database:** Local Vector Index — FastEmbed BAAI/bge-small-en-v1.5 (384-dimensional embeddings)
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 4.01
- **Retrieval methods:** Entity linking, graph traversal, multi-hop graph retrieval, vector similarity search, document retrieval, evidence aggregation, temporal filtering, and structured query retrieval

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 66% | 99% | 99% |
| Tokens per query | 607.74 | 0 | 0 |
| Latency | 0.69493 s | 0 | 0 |

## Links

- Live app: https://agentic-graphrag-bbenchmark-mfmyxjyiqyrx6essbkiffo.streamlit.app/
- Blog post: https://dev.to/techsmart/agentic-graphrag-from-rag-to-graph-based-agentic-reasoning-2og3
