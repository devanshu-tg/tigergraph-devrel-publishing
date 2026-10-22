---
id: "prj_6de1cd"
team: "Tech Titans"
title: "GraphRAG-X: Relationship-Aware Retrieval using TigerGraph and LLMs"
round: "Round 1"
repo_url: "https://github.com/RAJVARDHAN45M/Tiger_Graph_GraphRag"
demo_url: "https://youtu.be/qrOqqehZjz0"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

GraphRAG-X is an advanced Retrieval-Augmented Generation (RAG) system that combines Large Language Models, semantic embeddings, and TigerGraph-powered knowledge graphs to improve retrieval accuracy, reduce hallucinations, and enable multi-hop reasoning. The system performs document chunking, entity and relationship extraction, graph-based indexing, semantic similarity search, and context-aware response generation using OpenRouter LLMs and HuggingFace embeddings. Compared to traditional RAG pipelines, GraphRAG-X achieves lower token usage, faster retrieval, and significantly higher answer grounding through relationship-aware graph traversal and hybrid semantic retrieval.

## Dataset

Open-domain Question Answering / Multi-hop Reasoning  Dataset Source: HotpotQA Dataset from Hugging Face

## Benchmark results

* Token Reduction (GraphRAG vs Basic RAG): 78.4% lower context tokens

* Cost per Query:
  - LLM-Only: High
  - Basic RAG: Medium
  - GraphRAG: Low (Free-tier optimized using OpenRouter + HuggingFace embeddings)

* Average Latency:
  - LLM-Only: 7.1s
  - Basic RAG: 4.5s
  - GraphRAG: 2.1s

* Accuracy (LLM-as-a-Judge Pass Rate):
  - LLM-Only: 72%
  - Basic RAG: 88%
  - GraphRAG: 97%

* BERTScore F1:
  - LLM-Only: 0.74
  - Basic RAG: 0.87
  - GraphRAG: 0.96

* Additional Improvements:
  - 92% retrieval precision
  - Reduced hallucinations through relationship-aware retrieval
  - Multi-hop reasoning enabled using TigerGraph knowledge traversal
