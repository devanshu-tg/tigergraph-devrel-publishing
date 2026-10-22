---
id: "prj_8e1bde"
team: "GraphXAI"
title: "TigerGraph Agentic GraphRAG"
round: "Round 1"
repo_url: "https://github.com/Sudeshnakalluri/TigerGraph-Agentic-GraphRAG/"
demo_url: "https://drive.google.com/file/d/1BEzTX26lQCT3s0f4THamXF6Ivtg45zOh/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

TigerGraph Agentic GraphRAG - TigerGraph Agentic GraphRAG is an autonomous question-answering system built on an Olympic Knowledge Graph that determines whether a query requires an AI agent or a simple lookup. It compares Standard RAG, fixed GraphRAG, and an autonomous multi-tool agent, using an intelligent router to answer direct lookups with low-latency search while deploying multi-hop graph traversals, temporal reasoning, and aggregations for complex analytical questions. The project includes full TigerGraph integration, an empirical benchmark harness, and an interactive metrics dashboard.

## Details

- **LLM:** Google Gemini 1.5 Flash
- **Vector database:** FAISS (Facebook AI Similarity Search)
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 4 steps or 2.2 tool calls
- **Retrieval methods:** Entity Linking: Resolves entity mentions in natural language questions to knowledge graph vertex IDs. Graph Traversal: Executes 1-hop and 2-hop edge traversals across TigerGraph vertices (PART_OF_GAMES, HELD_AT_VENUE, WON_GOLD). Dense Vector Similarity Search: FAISS index cosine similarity search using sentence-transformers (all-MiniLM-L6-v2). Document Passage Retrieval: Maps graph entities to associated text chunks from the 2,951 corpus documents for grounding. Graph Aggregation & Filtering: Evaluates arithmetic counts, category filters, and numeric thresholds directly on graph vertices. Superlative & Ranked Selection: Sorts and selects maximum/minimum entities based on numerical graph attributes (such as competitor counts). Temporal Edge Navigation: Traverses chronological edition-to-edition links (PREVIOUS_EDITION and NEXT_EDITION) to avoid hallucinated timelines. Multi-Hop Relational Pathfinding: Traverses cross-entity paths connecting Venue, Date, Event, and Athlete nodes.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 5.0% Exact Match (11.2% F1) | 2.0% Exact Match (8.7% F1) | 23.0% Exact Match (26.1% F1) |
| Tokens per query | 309.1 tokens | 78.2 tokens | 253.8 tokens |
| Latency | 109.8 ms | 1181.8 ms | 109.3 ms |

## Links

- Blog post: https://github.com/Sudeshnakalluri/TigerGraph-Agentic-GraphRAG/blob/main/README.md
