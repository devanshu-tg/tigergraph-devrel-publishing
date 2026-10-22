---
id: "prj_25e0ca"
team: "HopLogic"
title: "Biomedical GraphRAG Inference System: Benchmarking LLM-Only, Basic RAG, and GraphRAG Pipelines"
round: "Round 1"
repo_url: "https://github.com/SIDHANTH-S/graphrag-inference-system"
demo_url: "https://drive.google.com/file/d/1CKCUYpRbdjh9qdTHKyu5V2V8J5c0lgRr/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

## Dataset

https://huggingface.co/datasets/MedRAG/pubmed/blob/main/chunk/pubmed23n0001.jsonl

## Benchmark results

Token Reduction: -52.3% (GraphRAG vs Basic RAG)

Cost per query:
LLM-Only: $0.000035
Basic RAG: $0.000295
GraphRAG: $0.000118

Latency (avg):
LLM-Only: 8.2s
Basic RAG: 14.9s
GraphRAG: 17.8s

Accuracy - LLM-as-Judge (pass rate >=3.5/5):
LLM-Only: 2.23 (30% pass)
Basic RAG: 3.97 (80% pass)
GraphRAG: 4.27 (100% pass)

Accuracy - BERTScore F1:
LLM-Only: 0.83
Basic RAG: 0.84
GraphRAG: 0.86

## Links

- Live app: http://52.172.150.0:3000/
- Blog post: https://dev.to/kavyanjali_lingam/building-a-biomedical-graphrag-inference-system-with-tigergraph-and-llm-benchmarking-410n
