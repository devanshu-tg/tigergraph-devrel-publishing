---
id: "prj_a76fab"
team: "Ruchita Nimkar"
title: "Beyond the First Answer: Comparing RAG, GraphRAG and Agentic GraphRAG"
round: "Round 1"
repo_url: "https://github.com/ruchita17697/graphrag"
demo_url: "https://drive.google.com/file/d/11kn1NNcl2XxEFxlLn4P49qydZufVvVxe/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Compared and evaluated RAG, GraphRAG, and Agentic GraphRAG on the same benchmark questions to understand when simple retrieval is sufficient and when a question requires multi-step investigation.
The project explores three approaches: RAG for text retrieval, GraphRAG for entity and relationship-based retrieval using TigerGraph, and Agentic GraphRAG for dynamic planning and multi-step investigation.
Implemented question routing, agentic planning, plan validation, tool-based retrieval, graph/structural retrieval, deterministic aggregation, and Planned → Reactive fallback.

## Details

- **LLM:** gemini-3.5-flash-lite
- **Vector database:** TigerGraph
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 3
- **Retrieval methods:** graphrag__hybrid_search , graphrag__deterministic_aggregate

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 41% | 55% | 72% |
| Tokens per query | 13496.44 (for hidden 50q) | 12187.67 (for hidden 50q) | 60737.54 (for hidden 50q) |
| Latency | 22.9573 (for hidden 50q) | 8.3809 (for hidden 50q) | 100.5318 (for hidden 50q) |

## Links

- Blog post: https://dev.to/ruchita_nimkar_fb6fcaab1f/beyond-the-first-answer-when-retrieval-becomes-investigation-1hn4
