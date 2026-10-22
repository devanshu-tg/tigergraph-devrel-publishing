---
id: "prj_9f8ef3"
team: "Aayush"
title: "The Token Ledger — GraphRAG that pays 78% less"
round: "Round 3"
repo_url: "https://github.com/AayushG10/The-Token-Ledger-GraphRAG-that-pays-78-less"
demo_url: "https://drive.google.com/file/d/1TTh1OcAYvQ5qhZiMJ_fYkfy5PSnLrYHn/view?usp=sharing"
placement: "2nd place – Round 3"
prize: null
image_url: null
updated_at: "2026-10-14T19:30:07+05:30"
---

The Token Ledger is a TigerGraph-powered GraphRAG system that answers questions over
400 S&P-100 SEC filings (10-Ks, proxies, 8-Ks) using 78% fewer inference tokens than
Traditional RAG — while tripling accuracy.

Instead of storing disconnected chunks, we extract a typed fact graph into TigerGraph
Savanna (10 vertex types, 11 relationships: companies, auditors, directors, competitors,
foundry partners, financial metrics, and 8-K events), with chunk embeddings living in the
same instance as an HNSW vector index. A deterministic router (zero LLM tokens) turns each
question into a graph operation — set intersections, 2-hop bridges, metric comparisons, and
multi-hop aggregations computed directly in the graph. On the intersection questions weighted
highest, flat RAG must scan ~300 documents and still misses items; the graph returns a
complete, exact answer in a few dozen tokens.

Across all 50 official questions (3 runs, blind-judged): 78% fewer tokens, 71% strict pass
vs RAG's 22% (3.2×), and the highest BERTScore. An ablation proves the graph does the work —
turn it off and accuracy collapses to RAG's level (72%→22%) while tokens balloon 3.6×.
Verified across two independent judges (89% agreement, 67% pass-both).

Stack: TigerGraph Savanna 4.2 (graph + vector) · Gemini 2.5 Flash/Pro · gpt-4o-mini ·
all-MiniLM-L6-v2 · FastAPI · Next.js. Team: Aayush & Anushka.

## Details

- **LLM:** Generator (all 3 pipelines): gemini-2.5-flash, temperature 0. Judge: gemini-2.5-pro (blind) + gpt-4o-mini (2nd judge). Embeddings: all-MiniLM-L6-v2 (384-d), shared by RAG & GraphRAG.
- **Vector database for RAG:** TigerGraph Savanna 4.2 (native HNSW vector index, cosine)
- **Token reduction, GraphRAG vs RAG (%):** 78.3

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 198 | 3333 | 724 |
| Cost per query | $0.00 | $0.00 | $0.00 |
| Latency | 2.00 s | 2.84 s | 3.19 s |
| LLM-as-judge pass % | 8 | 20 | 71 |
| BERTScore F1 | 0.8137 | 0.829 | 0.8576 |

## Links

- Live app: https://github.com/AayushG10/The-Token-Ledger-GraphRAG-that-pays-78-less
- Slides: https://github.com/AayushG10/The-Token-Ledger-GraphRAG-that-pays-78-less/blob/main/docs/architecture.png
