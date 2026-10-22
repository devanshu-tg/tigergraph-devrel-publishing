---
id: "prj_2b0ee4"
team: "Aayush and anushka/ aayush goyal , anushka"
title: "GraphRAG Finance Benchmark — Knowledge-Graph Retrieval on Real SEC Filings"
round: "Round 1, Round 2"
repo_url: "https://github.com/AayushG10/graprag-evaluation-piplines/tree/main"
demo_url: "https://drive.google.com/file/d/1wfW6f-VMLo-xHnAYV4dAZFde7gIcIafD/view?usp=sharing"
placement: "Finalist – Round 2"
prize: null
image_url: null
updated_at: "2026-10-14T19:38:11+05:30"
---

A live, reproducible benchmark that measures exactly how much a TigerGraph knowledge graph reduces LLM cost versus traditional retrieval — on real financial data. The same question is run through three pipelines in parallel (same model, only retrieval differs): LLM-only, Basic RAG (FAISS vector search), and GraphRAG (TigerGraph multi-hop traversal). Each answer is scored against hand-written reference answers using BERTScore (roberta-large) and an LLM judge.

Across 20 financial questions on 245 real SEC 10-K filings, GraphRAG uses ~79% fewer tokens than Basic RAG (~4× cheaper per query) and earns the highest BERTScore — but on a strict completeness judge it passes 3/20 vs 20/20 (LLM-only) and 13/20 (Basic RAG). We report this honestly: it's a real efficiency-vs-completeness tradeoff, not a manufactured clean sweep. Every number is read from a committed results file — nothing is hardcoded — and the interactive dashboard shows GraphRAG's live multi-hop graph traversal in D3.

Stack: TigerGraph Savanna · FAISS + sentence-transformers · Gemini 2.5 Flash · spaCy NER · FastAPI · Next.js. Repo: github.com/AayushG10/graprag-evaluation-piplines

## Dataset

Domain: Financial / corporate disclosure — U.S. public-company annual reports (SEC Form 10-K), covering risk factors, financials, executives, and business segments.

Source: U.S. SEC EDGAR (public domain), downloaded directly via sec-edgar-downloader.

Scope: 245 10-K filings · 49 S&P 500 companies across 7 sectors (Technology, Finance, Healthcare, Energy, Retail, Industrial, Telecom) · fiscal years 2019–2023 · ~205M tokens → 298,221 embedded text chunks → a TigerGraph knowledge graph (6 vertex types: Company, Document, Risk, Executive, Sector, MacroEvent; 6 edge types incl. multi-hop FILED_BY / MENTIONS_RISK / HAS_EXECUTIVE / SUCCEEDED_BY). No synthetic data — every answer traces to a real filing.

## Details

- **LLM:** Gemini 2.5 Flash (gemini-2.5-flash) — same model across all three (LLM-only, RAG, GraphRAG). Judge: also Gemini 2.5 Flash · BERTScore: roberta-large
- **Vector database for RAG:** FAISS (faiss-cpu 1.8+) — IndexFlatIP, cosine similarity · embeddings: sentence-transformers all-MiniLM-L6-v2 (384-dim)
- **Token reduction, GraphRAG vs RAG (%):** 79.3

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 2383 | 8291 | 1690 |
| Cost per query | $0.00 | $0.00 | $0.00 |
| Latency | 14.3 | 9.9 | 18.5 |
| LLM-as-judge pass % | 100% (20/20) | 65% (13/20) | 25% (5/20) |
| BERTScore F1 | 0.8304 | 0.8305 | 0.8473 |

## Links

- Live app: https://github.com/AayushG10/graprag-evaluation-piplines/tree/main
- Blog post: https://medium.com/@anushkaggarwal2005/i-benchmarked-graphrag-against-traditional-rag-on-real-financial-filings-heres-what-happened-5d08124faafc
