---
id: "prj_d3573e"
team: "Debuggerz"
title: "TigerRAG and TigerRAG"
round: "Round 1"
repo_url: "https://github.com/arpitnegi1479/TigerRag-.git"
demo_url: "https://github.com/arpitnegi1479/TigerRag-.git"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:19:48+05:30"
---

TigerRAG and TigerRAG is an intelligent retrieval system designed to compare Traditional RAG, GraphRAG, and Agentic GraphRAG approaches. It follows a layered backend architecture that enables multi-mode retrieval, knowledge-graph reasoning, and agentic workflows within a unified system, making it easier to evaluate and understand the strengths of each approach.

## Details

- **LLM:** gemini-2.5-flash
- **Vector database:** Qdrant is the vector database
- **Graph backend:** neo4j
- **Average agent steps per question:** RAG — 1.0: Single vector retrieval → generation * GraphRAG — 2.4: Vector retrieval + graph traversal/reasoning * Agentic GraphRAG — 4.1: Multiple adaptive retrieval, tool, and reasoning steps
- **Retrieval methods:** Similarity search, document retrieval, entity linking, graph traversal, relationship retrieval, context aggregation, multi-hop retrieval

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 78 | 87 | 93 |
| Tokens per query | 1850 | 2650 | 3450 |
| Latency | 1.4 | 2.1 | 3.2 |

## Links

- Blog post: https://github.com/arpitnegi1479/TigerRag-.git
