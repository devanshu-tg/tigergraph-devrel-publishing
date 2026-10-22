---
id: "prj_dfd0cb"
team: "aidlc"
title: "Investigation Certificates: Provable Evidence Retrieval for Agentic GraphRAG"
round: "Round 1"
repo_url: "https://github.com/HarshdipSaha/tigergraph-agentic-graphrag"
demo_url: "https://www.loom.com/share/6c4edb59ed714f1694d1bc65cca2d934"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Standard similarity search finds chunks that look relevant, but counting and aggregation queries require every record that matches the predicate. When evaluating 2004 Olympic events, plain RAG and GraphRAG both scored 0% on aggregation and superlative queries because top-k sampling missed up to 90% of the matching events. We resolved this on TigerGraph Savanna by generating an Investigation Certificate for every answer. The system validates the agent’s retrieved evidence set against TigerGraph’s GSQL structural count, delivering 99% accuracy at just 18 tokens and 0.41 seconds per query.

## Details

- **LLM:** openai/gpt-oss-20b
- **Vector database:** TigerGraph's native vector search (GSQL chunk_search installed query), over all-MiniLM-L6-v2 embeddings of about 20k chunks. Version: TigerGraph Savanna (Native Vector Search) v4.2.5
- **Graph backend:** TigerGraph Savanna (cloud, tgcloud.io)
- **Average agent steps per question:** 1.01
- **Retrieval methods:** Entity linking and multi-hop resolution (venue + date), graph traversal (PREV/NEXT temporal chain), GSQL structural aggregation scan (COUNT plus every matching event), superlative scan, nation lookup, Jev System One intent routing and candidate disambiguation, LLM fallback for field extraction. Every answer ends in an Investigation Certificate that compares the graph's structural bound to the evidence actually inspected.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 25 | 43 | 99 |
| Tokens per query | 1389 | 2203 | 18 |
| Latency | 9.32 | 15.51 | 0.41 |

## Links

- Live app: https://investigation-certificates.streamlit.app/
- Blog post: https://dev.to/harshdipsaha/my-rag-pipeline-answered-1-the-real-answer-was-20-2bbo
