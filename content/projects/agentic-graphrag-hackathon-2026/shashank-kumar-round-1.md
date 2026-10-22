---
id: "prj_b19466"
team: "Shashank Kumar"
title: "GraphProbe-X"
round: "Round 1"
repo_url: "https://github.com/shashankkumar8/GraphProbe-X"
demo_url: "https://github.com/shashankkumar8/GraphProbe-X"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

GraphProbe-X is an evidence-driven Adaptive Agentic GraphRAG system built on TigerGraph that autonomously investigates complex questions using retrieval, graph traversal, document retrieval, aggregation, multi-hop reasoning, and evidence verification. It uses an Evidence Contract, Quote-Verified Evidence Ledger, Target-Aware Verification, and a hard stopping Governor to decide when further investigation is justified.

Core idea: “We don't add agents. We justify them.”

## Details

- **LLM:** OpenAI GPT-4o-mini (model ID: openai/gpt-4o-mini)
- **Vector database:** Custom NumPy-based dense vector index (dense.npy) + BM25 (rank-bm25) with RRF hybrid retrieval; no standalone vector database.
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 2.1
- **Retrieval methods:** BM25, dense RRF, hybrid retrieval, entity linking, graph traversal, document retrieval

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 80 | 90 | 52.5 |
| Tokens per query | 254.2 | 312.4 | 850 |
| Latency | 0.835 | 1.107 | 2.3 |

## Links

- Blog post: https://github.com/shashankkumar8/GraphProbe-X
