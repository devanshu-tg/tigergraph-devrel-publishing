---
id: "prj_e59a38"
team: "Bolt Heads"
title: "LangGraph-Agentic-Graph RAG"
round: "Round 1"
repo_url: "https://github.com/hnextits/LangGraph-Agentic-GraphRAG"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

## Details

- **LLM:** SGLang (running underlying models such as Llama-3-8B-Instruct or Mistral-7B-Instruct uniformly across pipelines)
- **Vector database:** Weaviate (TextDocument / Late-chunked vector store)
- **Graph backend:** TigerGraph Savanna (or Neo4j / Community Edition)
- **Average agent steps per question:** 3 - 5 steps
- **Retrieval methods:** Entity linking, graph traversal, similarity search, document retrieval, aggregation, BM25 seed search, and Cypher-based deep graph exploration.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 65% - 70% | 78% - 82% | 88% - 93% |
| Tokens per query | 800 - 1,200 tokens | 2,500 - 3,500 tokens | 4,000 - 6,500 tokens |
| Latency | 1.2 - 2.5 seconds | 4.5 - 7.0 seconds | 8.0 - 14.5 seconds |
