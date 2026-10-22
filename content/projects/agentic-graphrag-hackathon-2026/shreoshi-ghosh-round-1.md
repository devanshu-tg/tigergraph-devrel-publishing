---
id: "prj_30a937"
team: "Shreoshi Ghosh"
title: "AgentOrNot: RAG vs GraphRAG vs Agentic GraphRAG on TigerGraph"
round: "Round 1"
repo_url: "https://github.com/ShreoshiIQ/EvidenceLab/tree/main"
demo_url: "https://youtu.be/qiboHQKgEUQ?si=48lXTTRPZtGQG8jq"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

EvidenceLab runs RAG, GraphRAG and an agentic GraphRAG pipeline on the same TigerGraph graph and the same Gemini model, then shows which question types need an agent. Agentic reaches 98% on 100 public questions, against 53% for RAG and 62% for GraphRAG.

## Details

- **LLM:** gemini-3.1-flash-lite.
- **Vector database:** Embedding model (local, for vectors): BAAI/bge-small-en-v1.5, 384 dimensions, normalized, run on CPU. Vector database for the RAG pipeline: TigerGraph's own vector search, TigerVector, with vectorSearch() over the chunk vectors stored in the EvidenceLab graph. Top 10 chunks per query.
- **Graph backend:** TigerGraph Savanna (TigerGraph Cloud), workspace graphrag-dev, graph EvidenceLab, reached through the TigerGraph MCP server (TG_BACKEND=mcp). It is not Community Edition.
- **Average agent steps per question:** Agentic GraphRAG: 2.33 retrieval / 2.83 reasoning (RAG: 1.0 / 1.0, GraphRAG: 4.0 / 1.0)
- **Retrieval methods:** Agentic GraphRAG: entity linking (82% of questions), graph traversal (entity_events on 100%, adjacent-games resolution on 22%), and aggregation computed in code (47% of questions: count, max). The LLM orchestrator chooses which tool to use at each step. RAG: vector search (TigerVector). GraphRAG: vector search, entity linking, graph traversal and chunk expansion.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 53 | 62 | 98 |
| Tokens per query | 3,403 | 4,931 | 3,132 |
| Latency | 8.74 | 10.86 | 12.1 |

## Links

- Live app: https://evidencelab-o6kquyvr5g5geea6ddxnpe.streamlit.app/
- Blog post: https://medium.com/@gshreoshi17/rag-vs-graphrag-vs-agentic-graphrag-on-tigergraph-what-i-built-and-what-broke-83ba617000a1
