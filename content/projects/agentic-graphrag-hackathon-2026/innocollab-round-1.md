---
id: "prj_028246"
team: "InnoCollab"
title: "Olympic Investigator — Agentic GraphRAG on TigerGraph"
round: "Round 1"
repo_url: "https://github.com/kaviyarasan2865/graphRAG"
demo_url: "https://drive.google.com/file/d/1kgm8t9iDXLg1QfzW1f63Aoi2v5ith-oL/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Olympics Investigator answers natural-language questions over a 2,951-document Olympic-events corpus three different ways — RAG, GraphRAG, and Agentic GraphRAG — all against the same TigerGraph Savanna graph + vector store, so the comparison is fair. The corpus is parsed into a knowledge graph (Events, Games, Venues, Sports, Athletes, Countries, with medal, venue, sport, and temporal prev/next edges) and every document is embedded into TigerGraph's native HNSW vector index. The agentic pipeline uses a LangGraph state machine that plans one tool at a time — vector search, graph traversal, aggregation, superlative, multi-hop venue/date lookup, temporal navigation — evaluates the evidence it gathers, and decides when it has enough to answer. The result quantifies the hackathon's core question: simple retrieval is enough for lookups, GraphRAG handles temporal reasoning, but counting, ranking, and multi-hop questions genuinely need an agent that can scan the whole graph.

The problem it solves Top-k vector retrieval can't answer questions like "how many events had more than 73 competitors" or "who won gold at this venue on this date" — it only sees a handful of chunks, not the full set of matching facts. By grounding retrieval in a graph and letting an agent orchestrate structured queries, the system answers those correctly while remaining honest about when the extra agentic steps aren't worth the token cost.

How it works

Ingestion: parses each Wikipedia infobox into graph vertices/edges and embeds the text (sentence-transformers BAAI/bge-m3, 1024-dim, in-process); loads both into TigerGraph Savanna.
Retrieval: TigerGraph only — installed GSQL queries for vector search and graph traversal (REST++).
Three pipelines:
RAG — embed query → vector top-k → synthesize.
GraphRAG — vector top-k, enriched with structured graph facts (medalists, venue, competitors) and adjacent-Games editions.
Agentic — a LangGraph StateGraph (plan → act → synthesize) with specialized tools, a loop guard, decisive stop conditions, and a full investigation trace; an alternative prebuilt create_react_agent backend is also available.
LLM: Google Gemini gemini-3.7-flash with automatic runtime fallback to local Ollama qwen3:14b on rate-limit/outage, so it never hard-fails.
Benchmark + dashboard: scores every question on accuracy, retrieval completeness, and token efficiency; results surface in a FastAPI-served HTML dashboard where you pick which pipelines to run and inspect the agent's trace side by side.
Key results On the question-type breakdown, aggregation and superlative questions go from near-zero on RAG to correct on the agentic pipeline, while lookups and temporal questions are already well served by RAG/GraphRAG — demonstrating precisely where agentic reasoning adds value and where it's overkill.

Tech stack TigerGraph Savanna (GSQL + native vector index) · pyTigerGraph · sentence-transformers bge-m3 · Google Gemini + Ollama (fallback) · LangGraph · FastAPI · vanilla HTML/JS dashboard · pytest.

## Details

- **LLM:** Google Gemini gemini-3.7-flash (with automatic runtime fallback to Ollama qwen3:14b on rate-limit/outage).
- **Vector database:** TigerGraph Savanna's native Vector DB (v4.2.5) — the embedding is stored as a Document.emb vector attribute with an HNSW index, 1024-dim, COSINE metric, queried via the GSQL vectorSearch() function. There is no separate vector database; vector + graph live in the same TigerGraph store. (Embeddings are produced by sentence-transformers BAAI/bge-m3, 1024-dim — that's the embedding model, while the vector store/index is TigerGraph.)
- **Graph backend:** TigerGraph Savanna (cloud, v4.2.5) — authenticated with a database secret, graph OlympicsKG.
- **Average agent steps per question:** 2.3 (ranges 1 for direct lookups/aggregations to 3–4 for multi-hop/temporal chains)
- **Retrieval methods:** Similarity search (vector search), graph traversal, document/event lookup, temporal traversal (prev/next edition), aggregation (count over threshold), superlative (max/min ranking), and multi-hop venue→event→medalist traversal. By tool name: vector_search, event_lookup, events_by_games_sport, count_over_threshold, superlative, medalists_at_venue_date, temporal_neighbor, events_by_athlete.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 30 | 55 | 85 |
| Tokens per query | 2624 | 3540 | 3325 |
| Latency | 6.24 | 8.35 | 13.64 |

## Links

- Blog post: https://drive.google.com/file/d/1kgm8t9iDXLg1QfzW1f63Aoi2v5ith-oL/view?usp=sharing
