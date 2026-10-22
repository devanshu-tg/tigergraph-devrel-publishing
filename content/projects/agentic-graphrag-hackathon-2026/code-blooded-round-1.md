---
id: "prj_a9e7b2"
team: "Code Blooded"
title: "Tigergraph Agentic Graphrag"
round: "Round 1"
repo_url: "https://github.com/Tiwari-Harshvardhan/tigergraph_agentic_graphrag"
demo_url: "https://youtu.be/joU8DJo1UKU?si=Vc_mvH_ieocnuths"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:19:48+05:30"
---

## Details

- **LLM:** Open AI's gpt-oss-20b
- **Vector database:** Vector DB: Tigergraph's built-in vector search using HNSW index
- **Graph backend:** Tigergraph Savanna
- **Average agent steps per question:** 1.72 tool calls per question: 258 calls ÷ 150 questions. The split was 1.63 on the public set and 1.90 on the hidden set.
- **Retrieval methods:** Semantic similarity search — vector_search finds relevant text chunks using embedding similarity. Structured event lookup — event_lookup fetches an event by ID and its edition. Attribute-based retrieval/filtering — event_filter finds events by fields such as sport, edition, year, season, discipline, or competitor count. Aggregation — event_aggregate calculates counts and competitor min/max/average/sum; it can also filter the events being aggregated. Temporal search — temporal_search finds events before/after a reference event, within a year range, or at the earliest/latest end. Graph-context retrieval — graph_context fetches connected event/chunk context, including related editions, documents, chunks, and preceding events.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 18% | 32.50% | 40.40% |
| Tokens per query | 2195 | 4397 | 5569 |
| Latency | 20.28 | 66.66 | 33.77 |

## Links

- Blog post: https://dev.to/harshvardhan_tiwari_b9ea8/from-keyword-search-to-agentic-graphrag-what-i-learned-building-a-question-answering-system-for-2a5p
