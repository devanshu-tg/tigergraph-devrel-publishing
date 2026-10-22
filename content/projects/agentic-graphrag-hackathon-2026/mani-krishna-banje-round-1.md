---
id: "prj_0d93c2"
team: "Mani Krishna Banje"
title: "Local Hybrid GraphRAG using TigerGraph"
round: "Round 1"
repo_url: "https://github.com/manikrishna2004/RAG-TigerGraph"
demo_url: "https://drive.google.com/drive/folders/1T3Nigp5Ow9EWWjSAjFaV8HiRE2R5WXgw?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

Built a fully local GraphRAG system that combines TigerGraph knowledge-graph traversal, hybrid vector search, BM25, and BGE reranking, with Qwen2.5-7B-Instruct via Ollama for graph construction and grounded answer generation.

## Details

- **LLM:** Qwen 2.5:7b instruct
- **Vector database:** TigerGraph DB
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 1.4
- **Retrieval methods:** Entity linking, Graph traversal, Hybrid similarity search, Cross encoder reranking, Reciprocal Rank Fusion, Document/chunk Retrieval, Aggregation, Relative Reference resolution, agentic loop

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 50 | 13.8 | 51.7 |
| Tokens per query | 2832 | 1839 | 4725 |
| Latency | 54.6 | 36.7 | 99 |

## Links

- Blog post: https://github.com/manikrishna2004/RAG-TigerGraph
