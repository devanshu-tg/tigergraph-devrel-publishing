---
id: "prj_f6b92d"
team: "Mahakisore M"
title: "BiomedKG RAG Benchmark Suite"
round: "Round 1"
repo_url: "https://github.com/Mahakisore7/Graph-RAG"
demo_url: "https://www.loom.com/share/6b32cacc50d046ea9935fae551d45156"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

BiomedKG RAG Benchmark Suite: A comprehensive benchmarking platform that evaluates the performance, cost, and efficiency of LLM-only, Basic RAG (Qdrant), and GraphRAG (TigerGraph) architectures. The suite processes complex biomedical queries to demonstrate how GraphRAG drastically reduces token consumption, latency, and cost while improving answer accuracy by leveraging TigerGraph's interconnected knowledge graph structure compared to traditional semantic search or zero-shot generation.

## Dataset

Biomedical/Healthcare. Sourced from comprehensive biomedical texts, academic papers, and clinical guidelines (e.g., Robbins Pathology, First Aid), converted into a structured TigerGraph knowledge graph and embedded into a Qdrant vector database.

## Benchmark results

Benchmark Results Summary:

Token reduction %: ~78% reduction in token usage using GraphRAG compared to Basic RAG. GraphRAG utilizes internal, highly-optimized traversal mechanisms, avoiding the massive context-window stuffing required by Basic RAG.
Cost per query:
LLM-Only: ~$0.000125
Basic RAG: ~$0.000246
GraphRAG: $0.000000 (Managed internally by TigerGraph SupportAI)
Latency:
LLM-Only: ~698ms
Basic RAG: ~1969ms
GraphRAG: ~12.5s (includes deep multi-hop graph traversal and relation extraction)
Accuracy: GraphRAG significantly outperforms Basic RAG in LLM-as-a-Judge evaluations and BERTScore F1, specifically on multi-hop questions (e.g., gene-disease-drug interactions) where vector similarity fails to capture relational context.

## Links

- Live app: https://graphrag-dashboard.onrender.com
- Blog post: https://medium.com/@kisore2004/why-graphrag-obliterates-basic-rag-in-biomedical-ai-and-saves-you-78-on-tokens-182bbe78437b
