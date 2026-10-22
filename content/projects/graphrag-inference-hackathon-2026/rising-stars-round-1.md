---
id: "prj_ef375a"
team: "Rising Stars"
title: "GraphRAG Comparison Dashboard"
round: "Round 1"
repo_url: "https://github.com/Subi121/GraphRag-hackathon.git"
demo_url: "https://github.com/Subi121/GraphRag-hackathon.git"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

This project compares three AI pipelines: LLM-Only, Basic RAG, and GraphRAG using a Streamlit dashboard. The system measures latency, token usage, estimated cost, and response quality side-by-side. GraphRAG uses graph-based reasoning and multi-hop contextual understanding to improve retrieval quality and reduce unnecessary token consumption.

## Dataset

Domain: AI Research and Knowledge Graphs  Source:  * Public AI/ML articles * Research paper text samples * GraphRAG documentation * Publicly available technical content

## Benchmark results

LLM-Only:

* Tokens: ~137
* Latency: 2.56s
* Estimated Cost: $0.000274

Basic RAG:

* Tokens: ~155
* Latency: 2.80s
* Estimated Cost: $0.000310

GraphRAG:

* Tokens: ~127
* Latency: 2.15s
* Estimated Cost: $0.000254

Token Reduction (GraphRAG vs Basic RAG):
~18%

Accuracy:

* LLM-as-a-Judge: PASS
* BERTScore F1: ~0.88

## Links

- Live app: https://github.com/Subi121/GraphRag-hackathon.git
