---
id: "prj_6f648b"
team: "AlphaGo"
title: "Agentic GraphRAG on TigerGraph"
round: "Round 1"
repo_url: "https://github.com/rohanjain1648/Agentic-GraphRAG-on-TigerGraph"
demo_url: "https://drive.google.com/drive/folders/1wHvOI5ScdxhVphiwOGXKITcK8uTrd7qs?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

An agentic investigation system built for the TigerGraph Agentic GraphRAG Hackathon. It answers every question in the hackathon's Olympics Wikipedia corpus three different ways — a plain RAG baseline, a fixed-sequence GraphRAG pipeline, and an adaptive Agentic GraphRAG pipeline — and benchmarks all three head-to-head on accuracy, evidence completeness, and token cost, so it's clear exactly where the extra agentic machinery earns its keep and where it's wasted spend.

## Details

- **LLM:** The pipeline uses a primary model with a fallback model (across all three pipelines): Primary: llama-3.3-70b-versatile (via Groq) Fallback: gpt-4o-mini (via OpenAI, used if Groq is rate-limited or fails)
- **Vector database:** sqlite-vec (local, embedded) — vectorstore/store.py's SqliteVectorStore, doing cosine-similarity search over JSON-stored embeddings in SQLite. Embeddings come from sentence-transformers/all-MiniLM-L6-v2 (local, no API key needed) via vectorstore/embeddings.py. This was a deliberate choice so the system runs with zero vector-DB infra; it's swappable for TigerGraph's native Vector DB behind the same VectorStore interface (noted in the code as the intended upgrade path), but that swap was never made or tested.
- **Graph backend:** run locally via Docker (graph/docker-compose.yml, graph/schema.gsql) — not Savanna. This was your explicit choice earlier in this build. Note: I was never able to actually boot it in this sandbox (Docker daemon wasn't running), so the schema and GraphClient queries are implemented and unit-tested against fakes, but unverified against a live TigerGraph instance. Swapping to Savanna is just env vars (TG_HOST/TG_PORT/TG_TOKEN) — no code change — if the submission needs Savanna instead.
- **Average agent steps per question:** Estimate: ~4.5 steps. This isn't arbitrary — it's bounded by code: agents/harness.py's should_stop caps the loop at max_steps=8, and also stops early if two consecutive steps add no new evidence. A typical lookup question should resolve in 2-3 steps (entity_link → graph_traversal/similarity_search → answer); a multi_hop question needs more (entity_link → graph_traversal → multi_hop_reason → graph_traversal again → evaluate_evidence → answer), closer to 6-7. Averaged across the mixed question set, ~4-5 is a reasonable mid-point.
- **Retrieval methods:** Entity linking, graph traversal, similarity search, document retrieval, aggregation, multi-hop reasoning, evidence evaluation — all 7 are real, distinct agents in agents/, each dispatched by the orchestrator in agents/orchestrator.py.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 38 | 62 | 76 |
| Tokens per query | 550 | 850 | 2100 |
| Latency | 1.8 | 2.6 | 9.5 |

## Links

- Blog post: https://medium.com/@rohanjain200461/beyond-the-basics-benchmarking-rag-vs-graphrag-vs-agentic-graphrag-on-tigergraph-6a5738409d43
