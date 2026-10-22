---
id: "prj_8c2cad"
team: "NextIn/Dhruv Pandey"
title: "TokenNinja — GraphRAG Inference Optimizer"
round: "Round 1, Round 2"
repo_url: "https://github.com/Dhruvpandey1476/GraphRAG-Inference-Optimizer/"
demo_url: "https://www.loom.com/share/44a10cc738c241f88463718c2f5a6b5b"
placement: "Finalist – Round 2"
prize: null
image_url: null
updated_at: "2026-10-14T19:38:11+05:30"
---

A three-pipeline benchmark (LLM-Only vs. Basic RAG vs. GraphRAG) that proves knowledge graphs make LLM inference dramatically cheaper without losing quality. GraphRAG extracts entities from each query, performs a real 2-hop traversal over a TigerGraph knowledge graph built from the same arXiv corpus as the vector index, and feeds the LLM a dense entity-relationship subgraph instead of raw text chunks. Powered by Gemini 2.5 Flash, evaluated with LLM-as-a-Judge + BERTScore on 50 queries. Result: 91.5% fewer tokens and 84.9% lower cost than Basic RAG, with answer quality maintained (judge ≈8.2/10 across all three, GraphRAG highest on BERTScore) — and 100% of GraphRAG answers provably sourced from live TigerGraph traversals (0 fallbacks). Includes a live comparison dashboard, per-query TigerGraph provenance logging, and a fully reproducible benchmark.

## Dataset

Domain: Machine Learning / AI / NLP research papers.
 Source: arXiv (open-access scholarly papers) — 7,684 papers, chunked into 300,161 passages backing both the FAISS vector index (Basic RAG) and the TigerGraph knowledge graph (GraphRAG), so both pipelines run on identical data.
 Size: 137.1M tokens, measured with the Gemini count_tokens API (gemini-2.0-flash), 100-file sample extrapolated by tokens/char ratio.

## Details

- **LLM:** Gemini 2.5 Flash (gemini-2.5-flash) — same model across all three pipelines (LLM-Only, RAG, GraphRAG) and the LLM-as-a-Judge, for a fair comparison.
- **Vector database for RAG:** FAISS (faiss-cpu 1.12.0) — IndexFlatIP (cosine similarity), embeddings from sentence-transformers all-MiniLM-L6-v2 (384-dim); 300,161 chunks.
- **Token reduction, GraphRAG vs RAG (%):** 91.5

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 134 | 2843 | 242 |
| Cost per query | $0.00 | $0.00 | $0.00 |
| Latency | 1.28 | 1.88 | 3.47 |
| LLM-as-judge pass % | 98% | 94% | 96% |
| BERTScore F1 | 0.3023 | 0.2634 | 0.3074 |

## Links

- Live app: https://graph-rag-inference-optimizer.vercel.app/
- Blog post: https://tokenninja-graphrag-inference-optimizer.hashnode.dev/how-we-cut-llm-token-costs-by-91-5-without-losing-answer-quality-a-graphrag-deep-dive
