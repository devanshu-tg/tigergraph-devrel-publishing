---
id: "prj_ad832d"
team: "anant kumar"
title: "graphrag"
round: "Round 1"
repo_url: "https://github.com/antcybersec/graph_rag"
demo_url: "https://drive.google.com/file/d/1DkQj3Vb1Hhd6xL8OORu6UzQ6X8H_7wM2/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

## Details

- **LLM:** Google Gemini — gemini-3.1-flash-lite (via the Gemini API)
- **Vector database:** TigerGraph's native vector index — no external vector DB
- **Graph backend:** TigerGraph Savanna (cloud), version 4.2.5 — graph name: test
- **Average agent steps per question:** 2.04
- **Retrieval methods:** Structured graph query (GSQL aggregation, argmax, field lookup), time-scoped fact query, entity linking, 1-hop graph traversal, document similarity search (vector + cross-encoder rerank)

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 67 | 67 | 99 |
| Tokens per query | 3586 | 3952 | 3412 |
| Latency | 6.8 | 10.2 | 13.2 |

## Links

- Live app: https://graphrag-c.streamlit.app/
- Blog post: https://dev.to/anant_kumar_bf65d0d3994d3/-when-does-an-ai-agent-actually-earn-its-cost-i-measured-it-on-100-questions-4j5l
