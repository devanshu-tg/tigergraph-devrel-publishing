---
id: "prj_47a1f4"
team: "Repulsors / Rakshita Verma"
title: "Agentic GraphRAG on TigerGraph"
round: "Round 1"
repo_url: "https://github.com/repulsortechnologies-alt/agentic-graphrag"
demo_url: "https://drive.google.com/file/d/1JqfAFDQ-Pusl1L2D-XGdNr3u1FXmCeLn/view?usp=drive_link"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

An agentic investigation system that answers complex questions three ways — RAG, GraphRAG, and Agentic GraphRAG — and benchmarks exactly where each wins. The dataset is ~2,900 Olympic event documents; the graph runs live on TigerGraph Savanna (Event schema + GSQL query endpoints, loaded over REST).

Core principle: the LLM plans, the graph computes. A question is parsed into a structured plan, then answered by a GSQL query on TigerGraph rather than guessed by the model. The agentic layer adds an orchestrator loop — plan → execute → judge → self-correct → verify → stop — with cross-source verification and venue/date disambiguation.

Results over 100 evaluation questions: RAG 18%, GraphRAG 92%, Agentic 100%, with GraphRAG at ~⅕ the token cost. Predictions generated for all 50 hidden questions. Repo includes full source, the three pipelines, a metrics dashboard, architecture diagram, and a complete Savanna runbook.

GitHub: https://github.com/repulsortechnologies-alt/agentic-graphrag

## Details

- **LLM:** TigerGraph Savanna
- **Vector database:** TF-IDF retriever (scikit-learn 1.8, in-memory) — no external vector DB; stands in for TigerGraph Vector Search
- **Graph backend:** Gemini 2.5 Flash (google-genai) configured for all 3 pipelines; reported benchmark run in deterministic mode (heuristic planner + infobox reader, same across all 3 pipelines, no LLM calls)
- **Average agent steps per question:** 3.97
- **Retrieval methods:** Entity/constraint extraction (question → structured plan), graph filtering via GSQL on TigerGraph (sport/year/season/venue/date), aggregation (server-side count), superlative (argmax/argmin), temporal reasoning (prior-Games resolution), multi-hop venue+date join with disambiguation, TF-IDF similarity search, document retrieval, cross-source evidence verification

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 18 | 92 | 100 |
| Tokens per query | 1573 | 247 | 1295 |
| Latency | 0.006 | 0.023 | 0.031 |

## Links

- Blog post: https://dev.to/utkarsh_varshney_0c1e8ad0/when-do-ai-agents-actually-matter-benchmarking-rag-vs-graphrag-vs-agentic-graphrag-on-tigergraph-1oke
