---
id: "prj_0f3a21"
team: "Code Crafter"
title: "InfernoGraph: Adaptive Multi-Hop GraphRAG Engine for Ultra-Low-Token AI Inference"
round: "Round 1"
repo_url: "https://github.com/prajwal-mhase/InfernoGraph"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

InfernoGraph is an advanced GraphRAG benchmarking and inference optimization platform built for the TigerGraph GraphRAG Inference Hackathon. The system compares LLM-Only, Basic RAG, and Adaptive GraphRAG pipelines side-by-side to demonstrate how graph-powered reasoning dramatically reduces token consumption, latency, and inference cost while maintaining high answer accuracy.

Unlike traditional RAG systems that retrieve large semantic chunks, InfernoGraph uses adaptive query routing, multi-hop graph traversal, relationship-aware retrieval, and graph-aware context compression to provide compact reasoning structures instead of massive context windows.

The platform includes:
- Multi-hop graph reasoning
- Adaptive retrieval routing
- Graph-aware context compression
- Real-time benchmarking dashboard
- Token, latency, and cost analytics
- Automated evaluation using BERTScore and LLM-as-a-Judge
- Interactive graph visualization

InfernoGraph demonstrates how graph-native inference architectures can make enterprise LLM systems faster, cheaper, and smarter than vector-only retrieval systems.

## Dataset

Domain: Biomedical Research & Clinical Intelligence  Primary Sources: 1. PubMed Central Open Access Dataset 2. PubTator Central 3. BioASQ Biomedical QA Dataset  The biomedical domain was selected because it contains dense entity relationships involving diseases, proteins, drugs, pathways, genes, and pharmaceutical research. These relationship-heavy queries strongly benefit from graph traversal and multi-hop reasoning, making it an ideal benchmark for GraphRAG systems.

## Benchmark results

LLM-Only:
- Avg Tokens/Query: 12,400
- Avg Latency: 8.2s
- Avg Cost/Query: $0.18
- LLM-as-a-Judge Pass Rate: 71%
- BERTScore F1: 0.74

Basic RAG:
- Avg Tokens/Query: 6,300
- Avg Latency: 5.1s
- Avg Cost/Query: $0.09
- LLM-as-a-Judge Pass Rate: 88%
- BERTScore F1: 0.87

InfernoGraph (GraphRAG):
- Avg Tokens/Query: 1,450
- Avg Latency: 2.4s
- Avg Cost/Query: $0.02
- LLM-as-a-Judge Pass Rate: 96%
- BERTScore F1: 0.93

Headline Results:
- Token Reduction vs Basic RAG: 77%
- Cost Reduction vs Basic RAG: 78%
- Latency Reduction vs Basic RAG: 52%
- Accuracy Retention: 96%+

## Links

- Live app: https://infernograph.vercel.app
