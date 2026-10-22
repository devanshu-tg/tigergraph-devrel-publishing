---
id: "prj_dab247"
team: "HaramBallers"
title: "GraphRAG IPL: Proving Graph-Based Retrieval Beats Basic RAG on Every Metric"
round: "Round 1"
repo_url: "https://github.com/AbdullahMustafa7/GraphRAG-IPL"
demo_url: "https://www.loom.com/share/738e8fb43e984019a1363cf42dbcb8f8"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

## Dataset

Domain: Sports (Indian Premier League cricket) Source: Wikipedia API — 665 articles covering IPL teams, players,  seasons, venues, awards, coaches, and cricket rules Size: 2M+ tokens, 665 articles Entities extracted: 8,373 unique entities Relationships mapped: 5,349 Communities detected: 7 (via Louvain algorithm)

## Benchmark results

Pipeline 1 — LLM Only (Baseline)
- Avg tokens: 174
- Cost per query: $0.000116
- Avg latency: 1,305 ms
- LLM Judge pass rate: 62%
- BERTScore F1: 0.8724 | Rescaled: 0.6178

Pipeline 2 — Basic RAG (FAISS + Groq)
- Avg tokens: 2,541
- Cost per query: $0.000194
- Avg latency: 6,680 ms
- LLM Judge pass rate: 50%
- BERTScore F1: 0.7974 | Rescaled: 0.3930

Pipeline 3 — GraphRAG (TigerGraph + Groq)
- Avg tokens: 137
- Cost per query: $0.000087
- Avg latency: ~1,200 ms
- LLM Judge pass rate: 64%
- BERTScore F1: 0.8826 ✅ | Rescaled: 0.6484 ✅

GraphRAG vs Basic RAG:
- Token reduction: 94.6%
- Accuracy improvement: +14 percentage points
- Both BERTScore bonus thresholds hit (F1 >= 0.88, Rescaled >= 0.55)
- GraphRAG is the best pipeline on every single metric

## Links

- Live app: https://graphrag-ipl.streamlit.app/
- Blog post: https://dev.to/abdullahmustafa7/basic-rag-is-costing-you-more-than-you-think-heres-the-fix-2e6b
