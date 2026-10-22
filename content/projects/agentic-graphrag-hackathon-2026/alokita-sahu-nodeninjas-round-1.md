---
id: "prj_32ce7c"
team: "Alokita Sahu(NodeNinjas)"
title: "NodeNinjas – Intelligent GraphRAG & Agentic AI Knowledge Engine"
round: "Round 1"
repo_url: "https://github.com/Alokita004/Ninja-Nodes"
demo_url: "https://www.linkedin.com/feed/update/urn:li:activity:7513620452288942081/"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

NodeNinjas is an intelligent question-answering and knowledge discovery platform that combines Vector RAG, Hybrid GraphRAG, and Agentic GraphRAG to deliver accurate, explainable, and evidence-grounded answers. The system ingests and chunks documents, generates embeddings, and builds a connected knowledge graph using TigerGraph Savanna.

A Query Classifier dynamically identifies question types such as lookup, multi-hop, aggregation, temporal, and comparison queries, enabling the appropriate retrieval strategy. The Agentic GraphRAG pipeline uses LangGraph orchestration and 8 specialized AI agents for goal decomposition, graph traversal, evidence evaluation, reasoning, decision-making, and notification.

NodeNinjas provides citation-level evidence verification, confidence scoring, retrieval evaluation, real-time agent tracing, and 3-way RAG benchmarking through a FastAPI backend and React + Vite interactive dashboard. This creates a transparent and scalable AI system capable of moving beyond simple semantic search toward multi-hop reasoning and trustworthy decision support.

## Details

- **LLM:** Gemini 2.5 Flash
- **Vector database:** Vector DB Used for RAG Pipeline: In-memory vector similarity; no external vector database or version is configured in the benchmark pipeline.
- **Graph backend:** TigerGraph Savanna (TigerGraph Cloud).
- **Average agent steps per question:** 5
- **Retrieval methods:** Entity linking, similarity search, graph traversal, document retrieval, multi-hop reasoning, evidence aggregation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 100 | 100 | 100 |
| Tokens per query | 75 | 75 | 75 |
| Latency | 60.5 | 60.5 | 60.5 |

## Links

- Blog post: https://medium.com/@alokitasahu004/ninja-nodes-building-an-agentic-graphrag-system-for-intelligent-investigation-b12d20c9268f
