---
id: "prj_a04825"
team: "Team NYN"
title: "GraphRAG Investigation Platform — TigerGraph-Powered Financial Intelligence Benchmark"
round: "Round 1"
repo_url: "https://github.com/Yash-kurosaki/Memory-Web"
demo_url: "https://drive.google.com/file/d/1otZtrHA0dI2_XtsXkx1AWSIrRWH1UIkF/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

A TigerGraph-powered GraphRAG platform built to benchmark GraphRAG against traditional Vector-RAG and LLM-only pipelines for financial investigation tasks such as sanctions exposure, hidden ownership discovery, laundering-chain reconstruction, and shell-company analysis.

The platform demonstrates that graph traversal can reconstruct hidden multi-hop relationships more accurately and with significantly fewer tokens than traditional vector similarity retrieval.

Key features include:

1. Real TigerGraph multi-hop traversal
2.  Graph-native evaluation system
3.  Token efficiency benchmarking
4.  Live graph reasoning visualization
5.  Batch benchmark sweeps
6.  Side-by-side pipeline comparison
7.  Financial investigation scenarios intentionally designed to break Vector-RAG reasoning

## Dataset

Domain: Financial Crime Intelligence / AML / Sanctions & Ownership Investigation  Dataset Source: Synthetic financial investigation dataset generated specifically for benchmarking GraphRAG vs Vector-RAG reasoning.  The dataset includes:  * shell companies * offshore ownership structures * laundering chains * sanctions exposure networks * transaction relationships * shared infrastructure entities  Evidence is intentionally fragmented across multiple records so that no single document contains the full relationship chain.

## Benchmark results

Average Results Across Benchmark Scenarios:

LLM-Only:
1. Avg Tokens: 278
2. Avg Latency: 808ms
3. Avg Judge Score: 9/50


Vector-RAG:
1. Avg Tokens: 345
2.  Avg Latency: 505ms
3.  Avg Judge Score: 0–5/50


GraphRAG:
1. Avg Tokens: 45
2. Avg Latency: 3ms
3. Avg Judge Score: 45–50/50


Headline Metriincs:
1. Token Reduction (GraphRAG vs Vector-RAG): ~84%
2. Latency Reduction: ~99%
3. Cost Reduction: ~100%
4. Judge Score Improvement: ~455%


Evaluation includes:
1.Graph-native LLM-as-a-Judge scoring
2. Path correctness
3. Traversal completeness
4. Relationship accuracy
5. Entity correctness
6. Hallucination penalties
7. BERTScore semantic similarity validation

## Links

- Live app: https://memory-web-sigma.vercel.app/
- Blog post: https://medium.com/@nishanntt/how-i-built-a-graphrag-benchmark-lab-that-proves-why-graph-retrieval-beats-plain-rag-24052a3f8830
