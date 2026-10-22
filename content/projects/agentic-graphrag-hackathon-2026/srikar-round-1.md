---
id: "prj_474815"
team: "Srikar"
title: "Agentic GraphRAG — Autonomous Investigation & Benchmarking"
round: "Round 1"
repo_url: "https://github.com/vikasreddy11/hackathon.git"
demo_url: "https://drive.google.com/file/d/1Y--FxJ5eZmpgELPXD64C1kPOWpgxHVdp/view?usp=drive_link"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

This project builds and benchmarks three approaches for complex factual and multi-hop question answering:
1. Standard RAG
   - FAISS-based dense vector search
   - Single-pass LLM generation
   - Best for fast, simple factual queries
2. GraphRAG
   - Extracts entities using spaCy/LLMs
   - Traverses a TigerGraph/NetworkX knowledge graph
   - Combines graph relationships with document context
   - Best for multi-hop relational queries
3. Agentic GraphRAG
   - Uses a ReAct-based autonomous orchestrator
   - Dynamically combines:
     - FAISS vector search
     - Entity linking
     - Graph traversal
     - Document chunk retrieval
   - An evidence evaluator checks whether enough information has been gathered and decides whether to continue or stop
   - Best for complex, ambiguous, and cross-document investigations
Goal: Compare these approaches across answer accuracy, retrieval quality, latency, token usage, and reasoning effectiveness.

## Details

- **LLM:** gemini-2.5-flash
- **Vector database:** FAISS
- **Graph backend:** TigerGraph (Production / Cloud Graph Backend) NetworkX (In-Memory / Local Graph Backend)
- **Average agent steps per question:** 4.5
- **Retrieval methods:** Similarity Search,Entity Linking & Search,Graph Traversal,Document / Chunk Retrieval,Evidence Sufficiency Evaluation & Aggregation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 50.00% | 40.00% | 50.0% – 85.0% |
| Tokens per query | 418 tokens | 1,956 tokens | 7,428 tokens |
| Latency | 1.94s – 10.11s | 6.55s – 16.88s | 71.3s – 103.56s |

## Links

- Blog post: https://www.linkedin.com/posts/ramyasri-duggineni-b509a7369_tigergraph-agenticgraphrag-graphrag-ugcPost-7510760748210573312-njE_/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFtzG6wBsiTHZNlA4bszgSHxI6xCiSkpJWE
