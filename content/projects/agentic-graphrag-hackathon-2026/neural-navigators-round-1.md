---
id: "prj_967f26"
team: "Neural Navigators"
title: "Agentic GraphRAG with Value-of-Information (VoI) Routing"
round: "Round 1"
repo_url: "https://github.com/manidweep1306/TigerGraph"
demo_url: "https://drive.google.com/file/d/1E-Ypng0s5K4rLGHtLrVBBWL26y61DJpr/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

An end-to-end question answering system built using TigerGraph, LangGraph, and Google Gemini to tackle complex and multi-step questions over Olympic history.

Instead of relying solely on regular document search, the system compares three methods side-by-side: Standard RAG, Graph-based search using TigerGraph, and an Agentic pipeline that breaks questions down step-by-step. It uses a smart Value-of-Information routing method to pick the most efficient search tool, ensuring high answer accuracy while keeping processing speed and token costs low. The project includes a Next.js interactive web dashboard to test live questions and view benchmark comparisons across all 150 evaluation questions.

## Details

- **LLM:** openai/gpt-oss-20b (via Groq Cloud)
- **Vector database:** In-memory Vector Cache (Cosine Similarity) with BM25 Hybrid Fallback
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 3 to 4 steps
- **Retrieval methods:** entity linking, graph traversal, similarity search, document retrieval, aggregation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 34 | 56 | 32 |
| Tokens per query | 1981 | 2962 | 4349 |
| Latency | 95.9 | 95.4 | 115.5 |

## Links

- Blog post: https://medium.com/@manidweep2005/beyond-vector-search-building-an-agentic-graphrag-system-with-value-of-information-routing-7d13993f23b2?sharedUserId=manidweep2005
