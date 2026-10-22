---
id: "prj_1f9e80"
team: "BizGenius"
title: "MENTAT: Adaptive Evidence-Grounded Intelligence with RAG, GraphRAG & Agentic Reasoning"
round: "Round 1"
repo_url: "https://github.com/Sandeep-Sarkar-13/BizGenius_TigerGraph"
demo_url: null
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:19:48+05:30"
---

Description

MENTAT (Multi-agent Evidence & Neural Thinking for Analysis & Truth) is an adaptive Agentic GraphRAG framework for complex knowledge-question answering. It combines three progressively capable reasoning approaches—RAG-v2, GraphRAG, and Agentic GraphRAG (TRACE)—over a shared Olympic knowledge corpus. RAG-v2 performs hybrid FAISS + BM25 retrieval with RRF fusion, cross-encoder reranking, and context expansion; GraphRAG adds TigerGraph-based structural reasoning and source-document grounding; and TRACE introduces Gemini 3.6 Flash-powered planning, specialized investigation tools, evidence evaluation, and adaptive multi-step reasoning. The framework follows an evidence-driven escalation philosophy: use retrieval when sufficient, introduce graph reasoning when relationships matter, and invoke agentic investigation when additional evidence is required.

## Details

- **LLM:** Google Gemini 3.6 Flash
- **Vector database:** FAISS (Facebook AI Similarity Search) — IndexFlatIP
- **Graph backend:** TigerGraph Savanna (TigerGraph Cloud)
- **Average agent steps per question:** 2.09
- **Retrieval methods:** Graph traversal, entity linking, document retrieval, source inspection, similarity search, temporal resolution, aggregation, extreme-value retrieval

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 82.40% | 86.70% | 97.80% |
| Tokens per query | 20,000 | 1000 | 1000 |
| Latency | 11.3227 seconds | 3.9920 seconds | 0.231 seconds |

## Links

- Live app: https://www.cybertechsmart.com
- Blog post: https://medium.com/@sandeeps0774/mentat-teaching-rag-systems-when-to-retrieve-connect-and-investigate-94f3458e0613
