---
id: "prj_dd4356"
team: "R.KAYALVIZHI"
title: "Agentic GraphRAG for Olympics Question Answering"
round: "Round 1"
repo_url: "https://github.com/kayalramesh/AgenticGraphRag.git"
demo_url: "https://drive.google.com/file/d/1nKb0xHGaTwBjAKf-q8dKi5PwsigxQzdu/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Standard RAG answers questions by retrieving text that looks similar to the query, which works for simple lookups but fails on questions that need counting, ranking or several steps, such as "How many biathlon events at the 2018 Winter Olympics had more than 73 competitors?"

This project builds and compares three pipelines on an Olympics corpus:

RAG: vector search over BGE embeddings in ChromaDB, followed by answer generation.
GraphRAG: adds entity relationships stored in TigerGraph, so related chunks can be found through shared entities. Results are re-ranked and compressed before generation.
Agentic GraphRAG: parses each question, answers counting, ranking and venue-plus-date questions directly from a structured fact table, and breaks other questions into sub-questions that are retrieved and combined step by step.

## Details

- **LLM:** Qwen 2.5 (qwen2.5:7b, via Ollama), used for answer generation in all three pipelines (RAG, GraphRAG, Agentic GraphRAG)
- **Vector database:** Name: chromadb Version: 1.5.9
- **Graph backend:** TigerGraph Savanna (managed cloud workspace, hosted on tgcloud.io).
- **Average agent steps per question:** 1.33
- **Retrieval methods:** Retrieval methods used across the pipelines: RAG: dense vector search (BGE embeddings in ChromaDB, cosine similarity). GraphRAG: vector search plus graph retrieval (entity links from TigerGraph, Chunk–MENTIONS–Entity), with re-ranking and context compression. Agentic GraphRAG: Structured fact-table lookup (count, rank and venue+date questions parsed from infobox facts). TigerGraph hybrid query (vector plus graph). Page/vector search (ChromaDB). Multi-hop retrieval: one retrieval per sub-question, with a reflect-and-widen retry when the first search isn't enough. Re-ranking and context compression before answering

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 10 | 33.3 | 83.3 |
| Tokens per query | 1534 | 846 | 641 |
| Latency | 13.4 | 2.07 | 1.96 |

## Links

- Blog post: https://www.linkedin.com/feed/update/urn:li:activity:7513244688460701697/
