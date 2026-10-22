---
id: "prj_bac68e"
team: "Double Trouble"
title: "Agentic GraphRAG ON TigerGraph: finding which question actually need an agent"
round: "Round 1"
repo_url: "https://github.com/harshvardhan0303/agentic-graphrag-tigergraph"
demo_url: "https://drive.google.com/file/d/1czdMUl6Odbuoxx6-6ZB681DE1oKvWfhD/view?usp=sharing"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

## Details

- **LLM:** gemini-2.5-flash-lite
- **Vector database:** sentence-transformers all-MiniLM-L6-v2 (384-d) in a local FAISS index
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 3
- **Retrieval methods:** entity linking, graph traversal, multi-hop reasoning, in-graph aggregation, temporal edge traversal, vector similarity search, document retrieval, evidence sufficiency evaluation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 43 | 97 | 93 |
| Tokens per query | 2020 | 2106 | 6442 |
| Latency | 2.52 | 10.98 | 18.28 |

## Links

- Live app: https://github.com/harshvardhan0303/agentic-graphrag-tigergraph
- Blog post: https://medium.com/@harshvardhansingh0171/i-built-an-ai-agent-to-beat-graphrag-it-lost-and-that-was-the-point-31f91db06c6f
