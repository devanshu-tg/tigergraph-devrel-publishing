---
id: "prj_b56128"
team: "NextIn / Dhruv Pandey"
title: "TokenNinja"
round: "Round 3"
repo_url: "https://github.com/Dhruvpandey1476/TokenNinja-"
demo_url: "https://www.loom.com/share/fbff28248e3348fc9652fb9d74d61b88"
placement: "Finalist – Round 3"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Three pipelines (LLM-Only, Traditional RAG, Optimized GraphRAG) compared on TigerGraph's SP100 SEC-filings dataset. TigerGraph Savanna serves as both graph and vector DB. A deterministic context optimizer (semantic dedup + MMR + graph-aware scoring + sentence compression, 0 extra tokens) cuts total inference tokens 51% vs RAG while improving accuracy — valid ordering LLM < RAG < GraphRAG, GraphRAG best on every metric and hop tier, proven by ablation. 3 runs, git-traceable.

## Details

- **LLM:** Gemini 2.5 Flash — same model for LLM-Only, RAG, and GraphRAG
- **Vector database for RAG:** TigerGraph Savanna — native vector index (HNSW, cosine), via pyTigerGraph 2.0.4 │
- **Token reduction, GraphRAG vs RAG (%):** 51

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 125 | 4137 | 2030 |
| Cost per query | 0.000047 | 0.000654 | 0.000354 |
| Latency | 1.3 | 1.7 | 2.4 |
| LLM-as-judge pass % | 10 | 25 | 34 |
| BERTScore F1 | 0 | 0.0024 | 0.0403 |

## Links

- Live app: https://tokenninja-production-3ac3.up.railway.app/
- Slides: https://drive.google.com/file/d/1iLICEzITv--EqT2jqkdKn_U2o0iMdkcu/view?usp=sharing
