---
id: "prj_2a5895"
team: "Sriz Debnath"
title: "GRIP"
round: "Round 1"
repo_url: "https://github.com/Srizdebnath/graphrag-protocol"
demo_url: "https://x.com/Srizdebnath/status/2101937655575691331?s=20"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:19:48+05:30"
---

GRIP is the open RFC standard, high-performance MCP server, and universal execution layer connecting any AI agent to any Graph database with strict type safety, cryptographic provenance, and sub-second multi-hop traversal.

## Details

- **LLM:** Gemini-3.8-flash
- **Vector database:** Faiss
- **Graph backend:** Tigergraph Savanna
- **Average agent steps per question:** 4
- **Retrieval methods:** entity linking, graph traversal (path_search/ neighborhood), keyword local search, global/community search (these are the harness's retrieval_methods ops)

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 55.3 | 39.6 | 62.3 |
| Tokens per query | 3914 | 2323 | 2318 |
| Latency | 4.7s | 2.8s | 2.8s |

## Links

- Live app: https://graphrag-protocol.vercel.app/
- Blog post: https://x.com/Srizdebnath/status/2101937655575691331?s=20
