---
id: "prj_e6a3d5"
team: "Lost the Plot"
title: "MedGraphRAG"
round: "Round 1"
repo_url: "https://github.com/ArnavNimbark/medical-graphrag"
demo_url: "https://youtu.be/jehRRnXVf-0"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

An explainable conversational GraphRAG system for intelligent clinical prescription analysis and multi-hop drug interaction reasoning.

## Dataset

Custom Biomedical Drug Interaction Dataset

## Benchmark results

LLM-Only Pipeline
Token Usage: ~8.2k tokens/query
Cost per Query: ~$0.012
Average Latency: 5.1s
Accuracy (LLM-as-a-Judge): 74%
BERTScore F1: 0.79

Basic RAG Pipeline
Token Usage: ~5.6k tokens/query
Cost per Query: ~$0.008
Average Latency: 4.3s
Accuracy (LLM-as-a-Judge): 83%
BERTScore F1: 0.86

GraphRAG Pipeline (MedGraphRAG)
Token Usage: ~3.4k tokens/query
Token Reduction vs Basic RAG: ~39%
Cost per Query: ~$0.005
Average Latency: 3.1s
Accuracy (LLM-as-a-Judge): 96%
BERTScore F1: 0.94

Key Improvements:
Multi-hop biomedical reasoning through graph traversal
Stronger explainability via relationship-aware inference
Lower token usage due to targeted graph context retrieval
Improved clinical interaction detection accuracy
Better contextual coherence in complex prescription analysis

## Links

- Live app: https://medical-graphrag-ju9urvxguqdxrsr6uihjsh.streamlit.app
