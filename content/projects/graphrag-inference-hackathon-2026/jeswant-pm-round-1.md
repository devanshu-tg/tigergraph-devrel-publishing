---
id: "prj_80ac12"
team: "Jeswant PM"
title: "GraphRAG Inference Benchmark: Proving Token Cost Reduction on Ancient Trade Routes"
round: "Round 1"
repo_url: "https://github.com/i-J37/graphrag-hack"
demo_url: "https://drive.google.com/file/d/1DtIbRK-GDfrzM8TuzxJzbmGznRBmlNNj/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

A 3-pipeline benchmark comparing LLM-Only (baseline), Basic RAG (FAISS + sentence-transformers), and GraphRAG (TigerGraph CE + semantic entity seeding + 3-hop multi-hop traversal) on a 2.56M-token ancient trade routes knowledge base. GraphRAG delivers 20.5% fewer tokens than Basic RAG, 11.3% fewer than LLM-Only, up to 64.4% reduction on individual queries, and achieves a perfect LLM Judge score of 5.0/5 vs Basic RAG's FAIL (2.3/5). Built with TigerGraph Community Edition, Groq LLaMA, FAISS, sentence-transformers, BERTScore, and Gradio.

## Dataset

2.56M tokens — Wikipedia (~1,400 articles on ancient trade routes) + Project Gutenberg classics (Marco Polo, Herodotus, Ibn Battuta, Pliny, Strabo). Processed into 4,778 chunks and 1,542 graph triples stored in TigerGraph (1,409 nodes, 1,491 edges).

## Benchmark results

15 benchmark queries across 3 hop-depth tiers (1-hop, 2-hop, 3-hop)
All pipelines use Groq llama-3.1-8b-instant

PIPELINE RESULTS:
│ Pipeline    │ Avg Tokens │ Avg Latency  │ Est Cost/Q   │ vs Basic RAG     │

│ LLM-Only    │ 520        │ 2,163ms      │ $0.00035     │ +16.2% (worse)   │
│ Basic RAG   │ 604        │ 94,599ms     │ $0.00041     │ baseline         │
│ GraphRAG    │ 464        │ 3,446ms      │ $0.00032     │ -20.5% WINNER    │


TOKEN REDUCTION:
- GraphRAG vs Basic RAG: -20.5% (avg across 15 queries)
- GraphRAG vs LLM-Only: -11.3%
- Best single query reduction: -64.4% (Trans-Saharan trade query)
- 3-hop complex queries avg reduction: ~26% vs RAG

ACCURACY (LLM-as-a-Judge, 1-5 scale, PASS threshold = 3.5):
- LLM-Only: PASS (4.3/5)
- Basic RAG: FAIL (2.3/5) — retrieved wrong context
- GraphRAG: PASS (5.0/5) — perfect score, grounded in graph knowledge

LATENCY:
- GraphRAG (3,446ms) is 97% faster than Basic RAG (94,599ms first-run)
- GraphRAG (3,446ms) vs LLM-Only (2,163ms): small overhead for graph traversal

GRAPH STATS:
- Up to 94 graph paths traversed per query (3-hop)
- 1,542 triples, 1,409 entities, 1,491 edges in TigerGraph
- Semantic seed finder: top-8 entities via cosine similarity

## Links

- Live app: https://github.com/i-J37/graphrag-hack
- Blog post: https://medium.com/@jeswantpm07/how-i-proved-graphrag-actually-cuts-llm-token-costs-a-3-pipeline-benchmark-on-ancient-trade-65ec20776c3b
