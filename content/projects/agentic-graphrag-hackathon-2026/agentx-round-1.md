---
id: "prj_81999a"
team: "AgentX"
title: "Project Description"
round: "Round 1"
repo_url: "https://github.com/Abhishekgl08/agentic-graphrag-tigergraph.git"
demo_url: "https://drive.google.com/file/d/1zQ-EL6LUYwUDFZxUkaB3sEIPZcYuqQCV/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

An enterprise-grade Autonomous Agentic GraphRAG system designed for complex multi-document investigation over Olympic domain knowledge graphs. Deploys a 4-Agent Autonomous Control Loop (QueryRouterAgent -> GraphTraversalAgent -> HybridFusionAgent -> AnswerGenerationAgent) integrated with TigerGraph Savanna GSQL DB and decorated with Langfuse Cloud Observability Tracing. 

Key Achievements & Benchmark Results:
- 96.0% Overall Accuracy across 100 public evaluation questions (beating Traditional RAG 80.0% and Standard GraphRAG 69.0%).
- 100% Accuracy (10/10) on Superlative global maximum queries (+90% gain over baseline).
- 90.5% Accuracy (19/21) on Aggregation threshold queries with a 0.02s (20ms) Deterministic DB Counter (620x faster than standard LLMs).
- 100% Completed Predictions on all 50 Hidden Test Questions

## Details

- **LLM:** openai gpt-oss-120b (free Groq API 11-Key Rotation Pool)
- **Vector database:** TigerGraph Vector DB (TigerVector HNSW index)
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 2.4
- **Retrieval methods:** entity linking, graph traversal, similarity search, document retrieval, aggregation, reciprocal rank fusion

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 80 | 69 | 96 |
| Tokens per query | 1850 | 2400 | 375 |
| Latency | 5.6 | 17.5 | 4.6 |

## Links

- Blog post: https://github.com/Abhishekgl08/agentic-graphrag-tigergraph/blob/main/docs/BENCHMARK_REPORT.md
