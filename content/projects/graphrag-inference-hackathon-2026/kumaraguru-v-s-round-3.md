---
id: "prj_515249"
team: "Kumaraguru V S"
title: "GraphRAG_V2"
round: "Round 3"
repo_url: "https://github.com/KUMARAGURU-V-S/GARG-Round-3"
demo_url: "https://drive.google.com/file/d/1dZ8fXUNoVbvTFjTjIdgHGkZzRR8XwuYR/view?usp=sharing"
placement: "3rd place – Round 3"
prize: null
image_url: null
updated_at: "2026-10-14T19:30:07+05:30"
---

GraphRAG_V2 — TigerGraph GraphRAG Hackathon, Round 3 (Generalizable Context Optimization Challenge)

Description:
A benchmarked GraphRAG pipeline built on TigerGraph Savanna that answers questions over 400 SEC filings from 100 S&P-100 companies. It compares three retrieval pipelines — LLM-Only, Traditional (vector) RAG, and an Optimized GraphRAG using a 3-layer (Lexical/Domain/Semantic) graph schema with entity-hop expansion and a structured GSQL query router — evaluated on 50 official questions via blind LLM judging (Groq Llama 3.3 70B) and BERTScore. Across 3 frozen-config runs, the optimized GraphRAG pipeline achieves 64.7% strict-pass accuracy (vs. 19.3% for traditional RAG) while using 44.1% fewer inference tokens, with a controlled fairness ablation confirming the gains are 100% attributable to native graph structures rather than auxiliary heuristics.

## Details

- **LLM:** Generation LLM (same for all 3 pipelines): Gemini 2.5 Flash (gemini-2.5-flash, temp=0, thinkingBudget=0) Judge LLM (independent, blind): Llama 3.3 70B (llama-3.3-70b-versatile) via Groq Embeddings (retrieval only, not generation): all-MiniLM-L6-v2 (sentence-transformers)
- **Vector database for RAG:** Tigergraph
- **Token reduction, GraphRAG vs RAG (%):** 44.3

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 304 | 2193 | 1221 |
| Cost per query | $0.00 | $0.00 | $0.00 |
| Latency | 3.95 | 2.98 | 2.95 |
| LLM-as-judge pass % | 8 | 18 | 64.00% |
| BERTScore F1 | 0.108 | 0.06 | 0.316 |

## Links

- Live app: https://garg-round-3.vercel.app/
- Slides: https://www.canva.com/design/DAHQeqs0pOI/6cre5DCAOVOf4iFM17kB7g/edit?utm_content=DAHQeqs0pOI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
