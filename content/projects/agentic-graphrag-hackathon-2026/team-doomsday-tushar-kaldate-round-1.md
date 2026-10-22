---
id: "prj_8ded19"
team: "Team Doomsday / Tushar Kaldate"
title: "TigerGraph × Gemini: Olympic Agentic GraphRAG & Pareto-Optimal Architecture Benchmark"
round: "Round 1"
repo_url: "https://github.com/tusharkkp/TigerGraph_GraphRAG-Hackathon"
demo_url: "https://www.youtube.com/playlist?list=PLU9D7TVbh7zg"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

A production-grade, empirical benchmark comparing three question-answering paradigms on a 2,951-document Olympic corpus hosted natively in TigerGraph Savanna Cloud:

P1: Vector RAG — Dense semantic search over 768-d chunk embeddings via TigerGraph native HNSW vector index.
P2: GraphRAG — Deterministic entity resolution with 1-hop graph neighborhood expansion across Events, Athletes, Venues, Countries, Sports, and Games.
P3: Quota-Aware Agentic GraphRAG — Autonomous multi-agent orchestrator with dynamic evidence ledgers, budget caps (strictly $\le 3$ LLM calls/Q), pre-compiled parameterized GSQL tools, and grounded chunk citations.
Core Headline Finding: An evidence-backed architectural map proving exactly when agentic reasoning is essential (multi-condition aggregations, sequential edition temporal hops, argmax superlatives) and when it is token/latency overkill (direct infobox lookups). We also contribute an Adaptive Query Router establishing the Pareto-optimal frontier, achieving Agentic-level accuracy while slashing average token consumption by over 30%.

## Details

- **LLM:** Model: gemini-3.5-flash-lite (Google GenAI SDK), temperature 0.0. Note: The exact same model, answer-generation prompt, and temperature (0.0) are maintained identically across all 3 pipelines (RAG, GraphRAG, and Agentic GraphRAG) to ensure an unbiased, scientifically fair evaluation.
- **Vector database:** Vector DB: TigerGraph Savanna Cloud Native Vector Index (HNSW cosine similarity, 768 dimensions), utilizing local BAAI/bge-base-en-v1.5 embeddings via the fastembed runtime.
- **Graph backend:** Backend: TigerGraph Savanna Cloud (tgcloud.io), Graph: GraphRAG. Schema topology: 2,951 Documents, 13,873 Chunks with vectors, 2,187 Events, 6,220 Athletes, 314 Venues, 133 Countries, 42 Sports, 21 Games, 8,415 MEDALIST edges, 1,383 PREVIOUS_EDITION / NEXT_EDITION directed edges.
- **Average agent steps per question:** 1.8 to 2.4 steps (Autonomous orchestrator dynamically terminates via early stopping as soon as evidence is sufficient, with a hard ceiling of 4 iterations).
- **Retrieval methods:** Dense Vector Similarity Search — TigerGraph Savanna native HNSW vector index over 13,873 chunk embeddings (Vector_Chunk_Search). Deterministic Entity Linking & Alias Resolution — Mapping query surface mentions to canonical IDs (Resolve_Entity). Structured Graph Traversal — Pre-compiled GSQL queries for event metadata and competitor filters (Find_Events, Event_Details, Get_Event_Context). Graph Aggregation Engine — Database-level counting and threshold filtering in GSQL (Aggregate_Events, Medal_Table). Sequential Edition Traversal — Directed hops following PREVIOUS_EDITION / NEXT_EDITION edges (Navigate_Edition). Primary Document & Infobox Retrieval — Resolving grounded text chunks for extracted entities (Get_Chunks_For_Docs). Dynamic Semantic Vector Fallback — Fallback to dense similarity if graph queries return empty sets.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 60.0% (60/100 correct) Direct Lookup: 100.0% (19/19) Temporal: 100.0% (22/22) Multi-hop: 46.4% (13/28) Superlative: 60.0% (6/10) Aggregation: 0.0% (0/21) — Vector RAG fails completely on cross-event set aggregations. | 60.0% (60/100 correct) Direct 1-hop graph neighborhood expansion provides structured grounding for athlete medals and venue hosting, but like pure vector search, cannot aggregate across multi-event sets without multi-step query iteration. | 65.0% - 70.0% overall (Demonstrates decisive lift on complex categories): Direct Lookup: 100.0% Aggregation: 50.0%+ (Unlocks previously unsolvable multi-event counting questions using GSQL Aggregate_Events) Temporal Chaining: 75.0%+ (Traverses sequential PREVIOUS_EDITION edges using GSQL Navigate_Edition) Multi-Hop: 50.0%+ Superlatives: 65.0%+ |
| Tokens per query | 2,941 tokens (Average across 100 questions; total: 294,123 tokens) | 3,244 tokens (Average across 100 questions; includes 1-hop neighborhood subgraph context) | 8,964 tokens (Average per question; covers multi-turn orchestrator planning, tool arguments, evidence ledger, and grounded answer synthesis) |
| Latency | 7.00s - 9.89s (Average response time) | 4.80s - 9.31s (Average response time) | 16.63s (Average response time across full multi-agent deliberation and GSQL query execution) |

## Links

- Live app: https://tigergraphgraphrag-hackathon.streamlit.app/
- Blog post: https://medium.com/@tusharkaldate110/when-does-your-rag-actually-need-an-ai-agent-9e83dca0cd07
