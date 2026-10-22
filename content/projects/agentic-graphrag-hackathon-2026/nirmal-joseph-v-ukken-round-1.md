---
id: "prj_41c66d"
team: "Nirmal Joseph V Ukken"
title: "OlympicRAG: When Does a Question Need an Agent?"
round: "Round 1"
repo_url: "https://github.com/nirmaljosephukken/olympicrag-agentic-graphrag"
demo_url: "https://youtu.be/2mNsKZmQYvc"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

OlympicRAG compares RAG, GraphRAG and Agentic GraphRAG on one TigerGraph Savanna graph built from the hackathon corpus, with the same LLM (Gemini 3.1 Flash-Lite) and the same questions, to find which questions need an agent and which do not.

The agentic pipeline has an agent harness (state, evidence ledger, step budget, stop rule) and an orchestrator that picks one of 13 specialised agents per step: entity linking, graph traversal, multi-hop reasoning, GSQL aggregation, similarity search, document retrieval and fact history. An evidence evaluator in code releases an answer only if one cited source supports all of it, so answers never merge events or state unsupported facts. Every graph query runs through the TigerGraph MCP server.

Results on the 100 public questions: RAG 47%, GraphRAG 65%, Agentic GraphRAG 99%, with every agent answer grounded in its cited evidence. The agent is needed for counting (GraphRAG 29%, agent 100%) and for hops through time (GraphRAG 9%, agent 100%). GraphRAG is enough for single lookups, and on questions about films outside the graph plain RAG matches the agent at under 40% of its tokens. Stretch goal: conflicting and superseded facts are stored as Claim vertices; the agent reports both versions in every conflict. A second full run gave the agent identical answers on all 216 questions.

Repo: https://github.com/nirmaljosephukken/olympicrag-agentic-graphrag
Dashboard: https://nirmaljosephukken.github.io/olympicrag-agentic-graphrag/dashboard/

## Details

- **LLM:** Google Gemini 3.1 Flash-Lite
- **Vector database:** TigerGraph Vector DB: native vector search (HNSW index, cosine, 512 dimensions) inside TigerGraph Savanna 4.2.5, queried with GSQL vectorSearch. Embeddings: minishlab/potion-retrieval-32M (model2vec), computed locally
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 5.1
- **Retrieval methods:** Entity linking, graph traversal, multi-hop reasoning (edition-chain hops), aggregation (GSQL accumulators), similarity search (TigerGraph vector search), document retrieval, fact history (conflicting and superseded facts), evidence evaluation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 47 | 65 | 99 |
| Tokens per query | 3116 | 2364 | 3095 |
| Latency | 3.6 | 3.8 | 7.2 |

## Links

- Live app: https://nirmaljosephukken.github.io/olympicrag-agentic-graphrag/dashboard/
- Blog post: https://dev.to/nekku/-when-does-a-question-need-an-agent-rag-vs-graphrag-vs-agentic-graphrag-on-tigergraph-2fgb
