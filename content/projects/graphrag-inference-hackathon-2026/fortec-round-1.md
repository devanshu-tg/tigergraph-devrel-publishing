---
id: "prj_af9c2e"
team: "Fortec"
title: "SavannaFlow"
round: "Round 1"
repo_url: "https://github.com/eres45/SavannaFlow"
demo_url: "https://youtu.be/sCmWGvLQu60"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

## Dataset

Dataset Domain: Aerospace (NASA Apollo & Artemis Missions)

## Benchmark results

TOKEN REDUCTION ━━━
GraphRAG vs Basic RAG: 71% reduction (3.5x fewer tokens)
  - Basic RAG avg:  ~1,087 tokens per query
  - GraphRAG avg:   ~367 tokens per query
Reason: TigerGraph GSQL traversal returns only specific graph 
nodes instead of full text chunks, eliminating "context bloat."
━━━ COST PER QUERY ━━━
  - LLM Only:  $0.000238  (baseline, no retrieval)
  - Basic RAG: $0.000840  (expensive — pays for irrelevant context)
  - GraphRAG:  $0.000245  (near-LLM-Only cost, with graph precision)
Model: Groq Llama 3.3 70B @ $0.70 per million tokens
━━━ LATENCY (Avg Response Time) ━━━
  - LLM Only:  1.3s
  - Basic RAG: 2.5s  (slower due to embedding + vector search)
  - GraphRAG:  1.7s  (GSQL traversal adds minimal overhead)
━━━ ACCURACY ━━━
LLM-as-a-Judge (Calibrated Aerospace Expert Prompt, 0–100 scale):
  - LLM Only:  95%  (strong base knowledge, no hallucination check)
  - Basic RAG: 40%  (fails on multi-hop relationship queries)
  - GraphRAG:  95%  (consistent across simple + complex queries)
BERTScore F1: N/A in cloud deployment (compute-heavy; 
evaluated locally using distilbert-base-uncased, F1 ≈ 0.91 
for GraphRAG vs reference answers)

## Links

- Live app: https://savannaflow.vercel.app/
- Blog post: https://dev.to/eres45/how-i-beat-standard-rag-by-35x-using-tigergraph-building-savannaflow-3k2m
