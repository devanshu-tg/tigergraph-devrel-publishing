---
id: "prj_d61f36"
team: "Coding Ninjas"
title: "Agentic GraphRAG on TigerGraph: Measuring When Agentic Reasoning Is Worth Its Token Cost"
round: "Round 1"
repo_url: "https://github.com/chittoralovesh/agentic-graphrag-tigergraph"
demo_url: "https://github.com/chittoralovesh/agentic-graphrag-tigergraph"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Three pipelines — RAG, GraphRAG, and Agentic GraphRAG — answer the same 100 questions
over the same corpus on TigerGraph, so the only variable is how evidence is gathered.
We don't just report which wins: we measured, before involving any LLM, exactly which
questions top-k retrieval can physically answer, and that measurement predicted RAG's
accuracy per question type. The result identifies the class of question that needs an
agent, the class that doesn't, and the token price of each.

## Details

- **LLM:** Opus 5.5 , gemini-3.1-flash-lite
- **Vector database:** TigerGraph TigerVector (TigerGraph 4.2.5) — HNSW index, cosine metric, 384 dimensions, on the Chunk vertex. Embeddings from BAAI/bge-small-en-v1.5 via fastembed (local ONNX). A BM25 lexical index and an RRF hybrid are implemented behind the same interface; the reported benchmark numbers use the BM25 lane.
- **Graph backend:** TigerGraph Savanna (cloud), version 4.2.5
- **Average agent steps per question:** 5.07
- **Retrieval methods:** Entity linking (link_event_by_title) — fuzzy title match onto a graph vertex Attribute read (read_attribute) — exact field read from a resolved event vertex Graph traversal / venue-date resolution (find_event_by_venue_date) — scored candidate resolution over the AT_VENUE edge, disambiguated by date, flags ambiguity Temporal edge traversal (edition_before_year) — walks the PREV_EDITION / NEXT_EDITION spine to the preceding Games Aggregation (count_events) — filtered COUNT over an entire sport-at-Games group Superlative / arg-max (argmax_event) — ranks a whole group on a numeric attribute Similarity search (vector_search) — BM25 lexical retrieval over 16,528 chunks, with dense TigerVector (HNSW, cosine) and RRF hybrid implemented behind the same interface Document retrieval — chunk and source-document fetch via SOURCED_FROM / HAS_CHUNK Evidence evaluation (evidence_critic) — judges sufficiency and names what is missing, which drives re-planning

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 58 | 100 | 100 |
| Tokens per query | 2002 | 832 | 1878 |
| Latency | 2.3 | 4 | 15.7 |

## Links

- Blog post: https://github.com/chittoralovesh/agentic-graphrag-tigergraph
