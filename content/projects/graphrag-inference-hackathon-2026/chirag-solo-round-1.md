---
id: "prj_522760"
team: "Chirag (Solo)"
title: "MediGraph — GraphRAG Inference Benchmark on CORD-19 Biomedical Corpus"
round: "Round 1"
repo_url: "https://github.com/debug-create/tigergraphRAG"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

A complete 3-pipeline inference benchmark proving GraphRAG reduces LLM token 
consumption while maintaining answer accuracy. Built on 6,000 CORD-19 biomedical 
research papers (2,085,519 tokens).

Pipeline 1 (LLM-Only): Direct Gemini 2.5 Flash inference, no retrieval.
Pipeline 2 (Basic RAG): ChromaDB vector store + sentence-transformers embeddings + Gemini.
Pipeline 3 (GraphRAG): TigerGraph knowledge graph with multi-hop entity traversal + Gemini.

Includes an interactive Next.js dashboard (FastAPI backend) showing all 3 pipelines 
side-by-side with real-time token, latency, cost, and accuracy metrics.

## Dataset

Domain: Biomedical research (COVID-19 / SARS-CoV-2) Source: CORD-19 (COVID-19 Open Research Dataset) by Allen Institute for AI

## Benchmark results

Token reduction (GraphRAG vs Basic RAG): 78.7%

Pipeline     | Tokens | Cost/Query  | Latency | Pass Rate | BERTScore F1
LLM-Only     |  282   | $0.000021   |  4.09s  |   90.0%   |    0.727
Basic RAG    |  963   | $0.000072   |  5.60s  |   90.0%   |    0.710
GraphRAG     |  205   | $0.000015   |  2.32s  |  100.0%   |    0.714

## Links

- Live app: https://tigergraph-rag-final.vercel.app/
- Blog post: https://dev.to/debug_001_21d3b4584bea041/my-hackathon-submission-5f2d
