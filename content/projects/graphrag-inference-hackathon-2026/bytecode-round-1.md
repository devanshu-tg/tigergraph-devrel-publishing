---
id: "prj_9cb6b2"
team: "ByteCode"
title: "GraphRAG Inference System: Reducing LLM Token Usage Using Knowledge Graph Traversal"
round: "Round 1"
repo_url: "https://github.com/Dnyandip26/graphrag-inference-hackathon"
demo_url: "https://drive.google.com/file/d/1YsMrSNNMhGaDU-yj10-ymlqP_cRa9qHk/view?usp=drive_link"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:19:42+05:30"
---

Our project is a GraphRAG-based inference system developed for the TigerGraph GraphRAG Inference Hackathon. It compares three pipelines: LLM Only, Basic RAG, and GraphRAG using knowledge graph traversal. The system uses FAISS vector search, entity extraction, and multi-hop reasoning to retrieve highly relevant context efficiently. We built an interactive Streamlit dashboard to compare token usage, latency, and response quality side-by-side. Using a Wikipedia-based dataset with 2.1M tokens and a knowledge graph of 180 nodes and 22K+ relationships, GraphRAG achieved 40–60% token reduction compared to Basic RAG. The project demonstrates how graph-powered retrieval can make LLM inference faster, smarter, and more cost-efficient.

## Dataset

Domain: Wikipedia Articles / General Knowledge Source: Public Wikipedia dataset used for Retrieval-Augmented Generation and Knowledge Graph construction. The dataset contains approximately 2.1 million tokens covering interconnected topics such as climate change, machine learning, environment, and technology.

## Benchmark results

Benchmark Results Summary
GraphRAG Token Reduction: Achieved approximately 40–60% fewer tokens compared to Basic RAG across multiple benchmark queries.
Cost per Query:
LLM-Only: Medium cost due to direct long-form generation
Basic RAG: Highest cost because of large retrieved context
GraphRAG: Lowest cost due to compact graph-aware retrieval
Average Latency:
LLM-Only: ~1.8s
Basic RAG: ~3.2s
GraphRAG: ~2.1s
Accuracy Evaluation:
LLM-as-a-Judge Pass Rate: ~90%+
BERTScore F1: ~0.88
Key Outcome: GraphRAG maintained comparable answer quality while significantly reducing token usage and improving retrieval efficiency.

## Links

- Live app: https://graphrag-inference-hackathon-fhzu8rjhappmv5he2zpkmcm.streamlit.app/
- Blog post: https://medium.com/@dnyandip00/how-we-built-a-graphrag-inference-system-that-reduced-tokens-by-40-60-2c9f6103f2cc
