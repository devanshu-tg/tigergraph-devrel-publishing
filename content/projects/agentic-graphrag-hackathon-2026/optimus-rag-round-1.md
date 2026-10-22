---
id: "prj_efb590"
team: "Optimus RAG"
title: "TigerGraph Agentic GraphRAG"
round: "Round 1"
repo_url: "https://github.com/AI-Club-World/tigergraph-agentic-graph-rag"
demo_url: "https://drive.google.com/file/d/1Bqzcd1yDChUBnEyyp0J-oloY-u07GRl7/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

TigerGraph Agentic GraphRAG is a full-stack benchmarking and evaluation platform that runs standard RAG, GraphRAG, and Agentic GraphRAG side by side over the same TigerGraph knowledge graph and LLM. Using an Olympic Games corpus, it answers complex multi-hop, temporal, and aggregation questions to systematically demonstrate where multi-step agentic investigation with necessity routing achieves superior accuracy (up to 98% EM vs 59% RAG) and where it is overkill once token cost, latency, and complexity are measured.

## Details

- **LLM:** Model Name & Version: nvidia/nemotron-3-super-120b-a12b (NVIDIA Nemotron-3 Super 120B / A12B) Interface / Provider: openai_compatible via NVIDIA NIM endpoint (https://integrate.api.nvidia.com/v1) Parity Across Pipelines: As defined in TECHNICAL-SPEC.md §14.3 and submission/README.md , the exact same model instance, temperature (0.0), and answer contract prompt are shared across all 3 pipelines (RAG, GraphRAG, and Agentic GraphRAG) to ensure fair, unbiased benchmarking.
- **Vector database:** Vector DB Name: TigerGraph (Built-in HNSW Vector Search Engine) Version: TigerGraph 4.2+ / Savanna
- **Graph backend:** Graph Backend: TigerGraph Savanna (Cloud) Configuration: Connected via TG_CLOUD=true on TigerGraph Cloud (*.i.tgcloud.io) using graph name OlympicGraphRAG (Community Edition 4.2+ is also fully compatible and supported).
- **Average agent steps per question:** 5 (Median: 5 trace steps | Range: 3–6 steps; Direct routes average ~3–4 steps, Multi-step loops average ~5–6 steps)
- **Retrieval methods:** Retrieval methods used Entity linking, Graph traversal, Multi-hop reasoning, Aggregation, Similarity search (Vector search), Document retrieval Entity Linking: Gazetteer dictionary longest-match over closed vocabularies (Games, sports, venues, editions, and dates). Graph Traversal: Direct TigerGraph GSQL queries (Q1 single event lookup, Q4 relationship traversal for PREV_EDITION, NEXT_EDITION, and HELD_AT). Multi-Hop Reasoning: Multi-step traversal chains (Q1 → Q4 → Q1 temporal chains, Venue → HELD_AT → Q1 date/event filtering). Aggregation: Graph-native analytical aggregations (Q2 filtered counts with confidence thresholds, Q3 min/max superlative queries). Similarity Search (Vector Search): Vector retrieval (Q5) using model embeddings over chunk vertices in TigerGraph. Document Retrieval: Prose chunk retrieval (HAS_CHUNK edges) with cross-encoder reranking.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 59% | 63% | 98% |
| Tokens per query | 6,453 (Median tokens / Mean: 6,795 total [6,010 in / 785 out]) | 2,522 (Median tokens / Mean: 4,041 total [1,527 in / 2,514 out]) | 2,550 (Median tokens / Mean: 4,777 total [2,505 in / 2,272 out] |
| Latency | 22.9 (seconds) | 49.8 (seconds) | 53.7 (seconds) |

## Links

- Blog post: https://medium.com/@sajitharavinkl123/when-does-an-agent-actually-beat-vector-search-ab235019c585
