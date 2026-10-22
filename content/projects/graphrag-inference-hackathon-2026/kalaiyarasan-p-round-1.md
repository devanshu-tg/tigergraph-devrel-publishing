---
id: "prj_d1dac8"
team: "Kalaiyarasan P"
title: "GraphRAG Benchmark: Smarter, Faster, Cheaper LLM Inference"
round: "Round 1"
repo_url: "https://github.com/KalaiScript/GraphRAG-Inference-Hackathon.git"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

Our project demonstrates how GraphRAG a graph-augmented retrieval system, significantly improves large language model (LLM) inference compared to traditional approaches. We built three side-by-side pipelines to answer the same questions on the same dataset

1. LLM-Only — Baseline with no retrieval, illustrating worst-case token usage.
2. Basic RAG — Standard vector-based retrieval augmented generation pipeline.
3. GraphRAG — TigerGraph-powered graph retrieval, leveraging entities, relationships and multi-hop reasoning for precise, context-efficient answers.

The project includes an interactive dashboard that allows users to submit queries and instantly compare all three pipelines on tokens used, latency, cost and accuracy (evaluated with LLM-as-a-Judge + BERTScore).

Key Highlights:

Token Reduction: GraphRAG significantly lowers token consumption without sacrificing answer quality.
Multi-Hop Reasoning: Enables reasoning over complex relationships that traditional RAG misses.
Cost Efficiency: Fewer tokens and smaller prompts reduce LLM API costs.
Beginner-Friendly & Scalable: Built with Python, TigerGraph, Streamlit and FAISS, designed to scale to any domain dataset.

This project proves that graph-augmented retrieval is the next evolution of efficient, accurate LLM inference, making AI smarter, faster and cheaper.
