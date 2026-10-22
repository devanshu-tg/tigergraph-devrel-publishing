---
id: "prj_915dde"
team: "Utkarsh"
title: "GraphRAG Benchmark: Multi-Hop Reasoning on TigerGraph Cloud"
round: "Round 1"
repo_url: "https://github.com/UtkarshArjariya/TigerGraph-RAG"
demo_url: "https://youtu.be/Gij6nJmSqEI"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

A live 3-pipeline benchmark — LLM-Only, Basic RAG, and TigerGraph GraphRAG — measuring accuracy, latency, and cost on 4 multi-hop QA datasets, with all data and entity graph hosted on TigerGraph Cloud.

## Dataset

https://github.com/yixuantt/MultiHop-RAG

## Benchmark results

────────────────────────────────────--───┐
  │        Metric                    │ LLM-Only │ Basic RAG │ GraphRAG │
  ├────────────────────────────────────-----┤
  │ Accuracy (Pass Rate) │ 42%          │ 48%            │ 70%            │
  ├───────────────────────────────-----------------┤
  │ BERTScore F1              │ 0.852       │ 0.826          │ 0.830         │
  ├───────────────────────────────-----------------┤
  │ Avg Latency                 │ 12.1s       │ 21.0s           │   22.6s       │
  ├──────────────────────---───────-------------------┤
  │ Cost / 1K queries        │ $0.10       │ $0.35           │   $0.68      │
  ├─────────────────────────────--─------------------┤
  │ Tokens / query            │ 506           │ 3,219           │ 7,450        │
  └──────────────────────-────────-------------------┘


- Temporal queries: 76.9% vs 23.1% (+53.8pp — the biggest gap)
- Inference queries: 69.2% vs 53.8% (+15.4pp) 
- Null queries: 100% vs 100% (both correct)
- Comparison queries: 38.5% vs 23.1% (+15.4pp)

Key insight - 
GraphRAG uses 2.3× more tokens than Basic RAG (richer context from graph traversal) at 1.92× the cost, but delivers 1.46× better accuracy — a favorable tradeoff for high-stakes retrieval.

## Links

- Live app: https://github.com/UtkarshArjariya/TigerGraph-RAG
- Blog post: https://utkarsharjariya.medium.com/i-benchmarked-3-rag-pipelines-on-4-datasets-graphrag-won-but-not-how-i-expected-01b199e9d84d
