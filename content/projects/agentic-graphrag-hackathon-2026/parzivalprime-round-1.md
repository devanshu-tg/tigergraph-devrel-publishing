---
id: "prj_999236"
team: "PARZIVALPRIME"
title: "Agentic-Ping"
round: "Round 1"
repo_url: "https://github.com/PARZIVALPRIME/agentic-ping/tree/submission2"
demo_url: "https://drive.google.com/file/d/1a7sFdrQ6DB5AjON2joVIOQsDIl8z0zqV/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

A system that compares RAG, GraphRAG, and LLM-driven Agentic GraphRAG using adaptive retrieval, TigerGraph/local graph evidence, citations, traces, and accuracy-cost evaluation.

## Details

- **LLM:** Gemini 3.8 Flash and Qwen3.5:4B via Ollama
- **Vector database:** In-memory sparse TF-IDF index with lexical/BM25 hybrid search
- **Graph backend:** TigerGraph Savanna/Cloud — OlympicsKG graph
- **Average agent steps per question:** 5.01
- **Retrieval methods:** Entity linking, event search, vector/passage search, graph traversal, event-value lookup, temporal reasoning, aggregation/counting, comparison/superlative reasoning, evidence evaluation, and adaptive recovery/replanning.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 42 | 62 | 100 |
| Tokens per query | 1085 | 1849 | 17472 |
| Latency | 2.34 | 1.93 | 12.9 |

## Links

- Blog post: https://dev.to/riyazali_md_397f5ab0b5085/built-agentic-graphrag-for-adaptive-multi-hop-reasoning-combining-knowledge-graphs-vector-dge/manage
