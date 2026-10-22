---
id: "prj_9eba95"
team: "Team Neighbors: Pankaja and Sanjam"
title: "GraphRAG Inference Benchmark Dashboard"
round: "Round 1"
repo_url: "https://github.com/SD1920/GraphRAG"
demo_url: "https://drive.google.com/file/d/1Ry0Kkl5iGcdIf25eO-bEgWjvw37qxqLD/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

An interactive benchmarking dashboard that compares LLM-Only, Basic RAG, and GraphRAG pipelines on large-scale financial datasets using token usage, latency, cost, and accuracy metrics. The system evaluates how graph-based retrieval improves token efficiency while maintaining answer quality through relationship-aware context generation.

## Dataset

Domain: Financial AI / SEC Filing Analysis Primary Sources: FinanceBench dataset + Finance Alpaca dataset

## Benchmark results

Average Token Reduction (GraphRAG vs Basic RAG): 31.9%
Peak Token Reduction Observed: 51%
BERTScore F1: 0.822 (GraphRAG) vs 0.821 (Basic RAG)
LLM-as-Judge Pass Rate: 70%
Key Observation: GraphRAG maintained comparable answer quality while reducing prompt size through relationship-aware retrieval.

## Links

- Live app: https://huggingface.co/spaces/Sanjam19/GraphRAG
- Blog post: https://dev.to/pankaja_tunuguntla_e2ea5a/building-a-graphrag-benchmark-platform-during-the-tigergraph-hackathon-39c9
