---
id: "prj_5bbd0c"
team: "Codex"
title: "GraphRAG vs Basic RAG: Benchmarking Token Efficiency with TigerGraph"
round: "Round 1"
repo_url: "https://github.com/mayank0030/graphrag_benchmark"
demo_url: "https://drive.google.com/file/d/1fB2fNS6eARP4GozsMiTR5gzcH-H1ql_l/view?usp=drivesdk"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

A benchmarking framework comparing LLM-only, Basic RAG, and TigerGraph GraphRAG pipelines using biomedical datasets, live query evaluation, token analysis, latency benchmarking, and BERTScore semantic similarity metrics.

## Dataset

dataset domain - synthetic biomedical research abstracts inspired by PubMed-style scientific literature  ,   visit - https://github.com/mayank0030/graphrag_benchmark

## Benchmark results

result - GraphRAG vs Basic RAG Results (35 benchmark queries):

LLM-Only:
- Avg Tokens: 252
- Avg Latency: 3.84s
- LLM-as-a-Judge Pass Rate: 100%
- BERTScore F1: 0.5566

Basic RAG:
- Avg Tokens: 774
- Avg Latency: 3.35s
- LLM-as-a-Judge Pass Rate: 100%
- BERTScore F1: 0.5978

GraphRAG:
- Avg Tokens: 594
- Avg Latency: 15.01s
- LLM-as-a-Judge Pass Rate: 100%
- BERTScore F1: 0.6004

Key Finding:
GraphRAG reduced token usage by 23.3% compared to Basic RAG while maintaining equivalent semantic answer quality.

Cost per query:
Near-zero cost using fully local Ollama inference + TigerGraph Cloud free tier

## Links

- Blog post: https://medium.com/@rsourabh069/graphrag-vs-basic-rag-vs-llm-benchmarking-token-efficiency-with-tigergraph-90aae4564fb6
