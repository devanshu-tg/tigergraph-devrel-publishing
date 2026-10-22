---
id: "prj_7b781f"
team: "H@CTIVATOR$"
title: "Agentic GraphRag"
round: "Round 1"
repo_url: "https://github.com/rsvr76/Agentic-GraphRag"
demo_url: "https://youtu.be/9D6XtZI8e64?si=9VRBJkFA0FUu9Cbw"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Agentic GraphRag - An autonomous multi-agent investigation system built on TigerGraph Savanna Cloud and orchestrated via LangGraph to resolve complex multi-hop, aggregation, superlative, and temporal inquiries over unstructured and graph corpora. The system employs in-database GSQL accumulators (SumAccum, HeapAccum) for exact in-engine counting and ranking, directed PRECEDES temporal graph traversals, and Self-RAG reflection loops featuring Two-Tier Entity Routing, progressive gap memory, and deduplicating context reducers.

## Details

- **LLM:** Google Gemini (gemini-3.5-flash-lite)
- **Vector database:** FastEmbed ONNX Runtime Vector Store (v0.8.1)
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 1.74 iterations (approx. 4 to 5 LangGraph execution steps)
- **Retrieval methods:** Entity linking, directed graph traversal (PRECEDES/SUCCEEDS, PART_OF, HELD_AT, COMPETED_IN, WON_MEDAL), in-database GSQL SumAccum aggregation, in-database GSQL HeapAccum superlative ranking, dense vector similarity search (FastEmbed ONNX 384-dim), bigram character-overlap date ranking, document passage retrieval, and in-memory graph cache fallback.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 47 | 62 | 99 |
| Tokens per query | 6344.9 | 5319.9 | 5250.2 |
| Latency | 16.83 | 15.18 | 11.38 |

## Links

- Live app: https://agentic-graphrag-rsvr.streamlit.app/
- Blog post: https://agentic-graphrag-rsvr.hashnode.dev/building-an-agentic-graphrag-system-with-tigergraph-and-langgraph
