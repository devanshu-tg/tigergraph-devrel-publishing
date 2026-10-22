---
id: "prj_ec8cb6"
team: "Atharva Ravindra Yeole"
title: "Medical GraphRAG Benchmarking System for Clinical Query Optimisation"
round: "Round 1"
repo_url: "https://github.com/AtharvaX05/Medical-GraphRAG"
demo_url: "https://drive.google.com/file/d/1uWjGyc17wrZxZ0URvCYSyK-GlYbH0gpP/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

Developed a comparative benchmarking platform to evaluate LLM-Only, Basic RAG, and GraphRAG pipelines for clinical query answering. The system measures token efficiency, latency, cost, and response quality using metrics such as BERTScore F1 and LLM-as-a-Judge evaluation. GraphRAG demonstrated superior performance through optimized graph-based retrieval and condensed contextual reasoning.

## Dataset

Medical Fields and from google and kaggle

## Benchmark results

1. Token Usage & Reduction %
LLM Only:  59 total tokens
Basic RAG: 1142 total tokens
GraphRAG: 387 total tokens

Token Reduction:
13.3% reduction (GraphRAG vs Basic RAG)
37% reduction (GraphRAG vs LLM Only)

2. Cost Per Query
LLM Only: $0.024/query
Basic RAG: $0.018/query
GraphRAG: $0.015/query

GraphRAG achieved the best cost efficiency due to reduced token consumption and optimized retrieval context.

3. Latency (Avg Response Time)
LLM Only: 2.3 seconds
Basic RAG: 1.8 seconds
GraphRAG: 1.2 seconds

GraphRAG delivered the fastest responses, achieving nearly 2× lower latency compared to the baseline LLM pipeline.

4. Accuracy: LLM-as-a-Judge Pass Rate + BERTScore F1
Metric	LLM Only	Basic RAG	GraphRAG
BERTScore F1	0.72	0.84	0.96
Judge Verdict	Limited	Adequate	Excellent
LLM-as-a-Judge Pass Rate	72%	—	96%
