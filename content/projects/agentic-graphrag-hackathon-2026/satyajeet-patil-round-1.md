---
id: "prj_1dbfa6"
team: "Satyajeet Patil"
title: "Agentic GraphRAG: Intelligent Multi-Hop Question Answering with TigerGraph"
round: "Round 1"
repo_url: "https://github.com/Satya123221/agentic-graphrag"
demo_url: "https://youtu.be/cl5CfZ1YYwU"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Agentic GraphRAG is an AI-powered question-answering system that combines RAG, GraphRAG, and agentic reasoning to answer complex, multi-hop questions using document evidence and a TigerGraph knowledge graph. The agent dynamically selects tools, explores entities and relationships, retrieves supporting evidence, and determines when it has enough information to answer. The system also benchmarks RAG, GraphRAG, and Agentic GraphRAG on 100 public questions, achieving 10% accuracy for RAG, 60% for GraphRAG, and 92% for Agentic GraphRAG.

## Details

- **LLM:** Qwen3:8B (Ollama)
- **Vector database:** No vector database; TF-IDF retrieval using scikit-learn
- **Graph backend:** TigerGraph Community Edition 4.2.2
- **Average agent steps per question:** 7.93
- **Retrieval methods:** Entity linking, graph traversal, similarity search, document retrieval, evidence lookup, aggregation, multi-hop reasoning, temporal reasoning, evidence evaluation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 10 | 60 | 92 |
| Tokens per query | 1973 | 2782 | 522 |
| Latency | 250 | 389.8 | 18.4 |

## Links

- Blog post: https://github.com/Satya123221/agentic-graphrag/blob/main/README.md
