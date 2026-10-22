---
id: "prj_99b406"
team: "Deepak R"
title: "Agentic GraphRAG with Epistemic Entropy Reduction & Agentic Value Index (AVI)"
round: "Round 1"
repo_url: "https://github.com/Arkz-Deepak/agentic-graphrag-tigergraph"
demo_url: "https://drive.google.com/file/d/1azQF5oxH5lElt8yySNvrHtyyLkYxT_bi/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

A high-performance Agentic GraphRAG framework engineered to solve the multi-hop, temporal, and aggregation limits
  of traditional RAG. The system benchmarks Vanilla RAG, GraphRAG, and Agentic GraphRAG side-by-side across 100
  Olympic Knowledge Graph questions and 50 hidden evaluation queries.

Key Innovations:
    1. Novel Indicator — Agentic Value Index (AVI): Mathematically measures marginal information gain per token and
  per second (dI/dC) to establish an Optimal Stopping Frontier, eliminating redundant retrieval and over-thinking.
    2. Epistemic Entropy Tracker: Dynamically quantifies uncertainty reduction (H: 1.0 -> 0.0) across multi-hop
  reasoning paths.
    3. Specialized Agentic Toolset: Coordinates 6 modular tools—Entity Linking, Multi-Hop Traversal, Temporal Horizon
  Ordering, Relational Aggregation, Superlative Filters, and Vector Fallback.
    4. Deterministic Zero-Token Fast Path: Graph queries resolved with zero ambiguity bypass expensive LLM generation
  calls, delivering 11.4x token reduction (190 tokens vs 2,176 tokens) and 83% accuracy vs 6% Vanilla RAG.

## Details

- **LLM:** Google Gemini 2.5 Flash (gemini-2.5-flash)
- **Vector database:** Scikit-Learn TF-IDF Cosine Similarity Vector Index
- **Graph backend:** TigerGraph Savanna & TigerGraph Graph Engine (GSQL schema & NetworkX property graph mirror)
- **Average agent steps per question:** 2
- **Retrieval methods:** Entity linking, multi-hop graph traversal, temporal sequence navigation (PRECEDED_BY / SUCCEEDED_BY), relational aggregation, superlative ranking,| dense similarity search fallback, and epistemic entropy-gated stopping.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 6 | 29 | 83 |
| Tokens per query | 2176 | 844 | 190 |
| Latency | 1.55 | 1.54 | 0.05 |

## Links

- Live app: https://agentic-graphrag-tigergraph.streamlit.app/
- Blog post: https://lab.deepak-arkz.me/agentic-graphrag-tigergraph/
