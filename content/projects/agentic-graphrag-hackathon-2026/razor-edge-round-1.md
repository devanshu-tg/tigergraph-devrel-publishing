---
id: "prj_189477"
team: "Razor Edge"
title: "OCCAM: Cost-Aware Agentic GraphRAG on TigerGraph"
round: "Round 1"
repo_url: "https://github.com/TusharTechs/occam-graphrag"
demo_url: "https://youtu.be/GZv81QXV2gw"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Everyone is adding agents to retrieval, but nobody measures what they cost. OCCAM runs RAG, GraphRAG and Agentic GraphRAG on the same 100 questions, then adds a router that sends each question to the cheapest tier that can truly answer it. The router escalates only when a tier can name what it was missing. On the public set, it matches the agent's 100% accuracy at 64 tokens per question instead of 890, about 14× cheaper. 98 of 100 questions need no LLM call at all. Every agent tool is an installed GSQL query on TigerGraph Savanna, with embeddings stored beside the graph as a vector attribute. We report evidence recall next to accuracy, and we document where it breaks.

## Details

- **LLM:** Google Gemini, model alias gemini-flash-latest (Gemini Flash), temperature 0. The same model is used for all three pipelines (RAG, GraphRAG, Agentic GraphRAG), and for OCCAM's routed tiers.
- **Vector database:** No external vector DB. The RAG baseline uses an in-process index: sentence-transformers/all-MiniLM-L6-v2 embeddings (384-dim, sentence-transformers 6.1.0) searched with NumPy 2.5.3 cosine similarity, fused with BM25 (rank-bm25 0.2.2) via reciprocal-rank fusion, top-10 chunks, over 18,762 chunks. The same chunks and embeddings are also loaded into TigerGraph as a Chunk vertex with a 384-dim TigerVector attribute (TigerGraph Savanna 4.2.5).
- **Graph backend:** TigerGraph Savanna (cloud), version 4.2.5, graph OlympicKG.
- **Average agent steps per question:** 2.1
- **Retrieval methods:** LLM query planning (structured plan generation), graph aggregation (in-database count/argmax over events), graph traversal (event → venue/date lookup and PREV_EDITION edge hops), graph vertex lookup, LLM disambiguation of graph shortlists, re-planning on executor feedback, and hybrid similarity search (dense MiniLM + BM25) as a document fallback.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 63 | 97 | 100 |
| Tokens per query | 3259 | 838 | 890 |
| Latency | 2.5 | 2.1 | 2.4 |

## Links

- Live app: https://tushartechs.github.io/occam-graphrag/
- Blog post: https://dev.to/techtush/is-your-ai-agent-worth-its-tokens-we-measured-it-with-tigergraph-54jd
