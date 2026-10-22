---
id: "prj_93f10d"
team: "Markdown"
title: "Evidence-State Agentic GraphRAG: Bounded Investigation with TigerGraph"
round: "Round 1"
repo_url: "https://github.com/Rachit168/tigergraph-hackathon"
demo_url: "https://drive.google.com/file/d/1RNzrcQnZH0XUfFPijkoSMGWkcyxkCEgW/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Evidence-State Agentic GraphRAG is a three-pipeline retrieval system that directly compares Basic RAG, Fixed GraphRAG, and bounded Agentic GraphRAG on the same dataset and shared answer-generation setup.
Basic RAG uses BM25 text retrieval, Fixed GraphRAG uses deterministic typed TigerGraph queries, and the Agentic pipeline evaluates its current evidence state and performs targeted follow-up retrieval only when additional evidence is needed. The system exposes answers, citations, evidence lineage, graph context, investigation traces, stop/continue decisions, latency, token usage, and reliability through an interactive dashboard.
On our published 100-question evaluation, Basic RAG achieved 65%, Fixed GraphRAG 98%, and Agentic GraphRAG 99%, while Agentic also used fewer total tokens and lower average latency than Basic RAG. The project additionally includes an optional bounded TigerGraph Vector fallback for production use, although vector retrieval was not used in the canonical 100-question benchmark.

## Details

- **LLM:** openai/gpt-oss-120b (OpenRouter), routed through Cloudflare AI Gateway
- **Vector database:** N/A for Basic RAG — BM25 sparse text retrieval. TigerGraph Vector Search (TigerGraph 4.2.5, 384-dim BAAI/bge-small-en-v1.5, COSINE/HNSW) is used only as an optional bounded Agentic GraphRAG fallback.
- **Graph backend:** TigerGraph Savanna — OlympicGraph, TigerGraph 4.2.5
- **Average agent steps per question:** 1.28
- **Retrieval methods:** Typed graph retrieval (GSQL), entity/relationship traversal, document/chunk retrieval, aggregation, temporal lookup, neighborhood expansion, and optional TigerGraph vector similarity search.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 65% | 98 | 99 |
| Tokens per query | 2953.44 | 1461.8 | 1230.16 |
| Latency | 10.665 | 7.588 | 7.108 |

## Links

- Blog post: https://www.linkedin.com/pulse/when-should-ai-system-look-again-rachit-dhiman-evkpc/
