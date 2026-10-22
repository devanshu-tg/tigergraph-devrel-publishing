---
id: "prj_5cb492"
team: "Team Silver"
title: "RAG vs GraphRAG vs Agentic GraphRAG"
round: "Round 1"
repo_url: "https://github.com/abhinay-codes/agentic-graphrag-benchmark"
demo_url: "https://drive.google.com/file/d/1jlUROCwL40iXUwtEV9FAIeWwKCCtHxyn/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

A benchmark-driven comparison of Vector RAG, GraphRAG, and Agentic GraphRAG, evaluating answer quality, evidence grounding, retrieval efficiency, and agentic reasoning across 100 public questions + 50 hidden questions.

## Details

- **LLM:** Qwen3:8b (served locally via Ollama)
- **Vector database:** FAISS 1.15.1
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 4.77
- **Retrieval methods:** Similarity search, graph traversal, evidence selection, evidence evaluation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | pub-005 - 0% | pub-005 - 0% | pub-005 - 100% |
| Tokens per query | 2584 | 2567 | 12680 |
| Latency | 49.41 | 53.39 | 402.33 |

## Links

- Live app: https://github.com/abhinay-codes/agentic-graphrag-benchmark
- Blog post: https://medium.com/@abhinaypratapsingh47/rag-vs-graphrag-vs-agentic-graphrag-building-and-benchmarking-three-retrieval-architectures-9cc5d2f6dcbd
