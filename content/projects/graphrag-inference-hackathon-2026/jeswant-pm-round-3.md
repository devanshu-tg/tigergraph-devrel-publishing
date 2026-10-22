---
id: "prj_a08de1"
team: "Jeswant PM"
title: "GraphRAG for SEC Filings: Answering Multi-Hop Financial Questions with TigerGraph"
round: "Round 3"
repo_url: "https://github.com/i-J37/TigerGraphHack.git"
demo_url: "https://github.com/i-J37/TigerGraphHack.git"
placement: "Finalist – Round 3"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

I built a GraphRAG pipeline over 400 SEC filings (10-K, 8-K, DEF14A) from 100 companies, using TigerGraph to model relationships between companies, people, auditors, and corporate events. Instead of just retrieving text chunks, the system traverses the graph to answer questions that need multiple hops like who audits a company, who's on its board, or who's replacing its CEO and cites the exact filing behind every answer. We compared it head to head against a plain LLM and a traditional RAG baseline to show where graph-native reasoning actually wins.

## Details

- **LLM:** Generation (LLM-Only and GraphRAG): gemini-3.1-pro-preview Retrieval embeddings (Traditional RAG, and GraphRAG's retrieval step): gemini-embedding-001 Traditional RAG's own answer generation: gemini-3.1-pro-preview (same generation model, different context) Evaluation judge (independent from generation, per contract requirement): gemini-3.5-flash
- **Vector database for RAG:** No vector database — brute-force cosine similarity search in pure Python over gemini-embedding-001 vectors (3072-dim), cached in a flat Parquet file (chunks_embedded.parquet, ~19k chunks) and loaded into memory. pandas + pyarrow (Parquet), no ANN index
- **Token reduction, GraphRAG vs RAG (%):** 91.4

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 108 | 6244 | 539 |
| Cost per query | $0.00 | $0.01 | $0.00 |
| Latency | 4.070 s | 25.266 s | 10.754 s |
| LLM-as-judge pass % | 20% | 20% | 100% |
| BERTScore F1 | 0.214 | 0.083 | 0.462 |

## Links

- Live app: https://github.com/i-J37/TigerGraphHack.git
- Slides: https://docs.google.com/presentation/d/1kzqWJlXb24A202BqtpVJPPIjaBIVAvHf/edit?usp=sharing&ouid=118225768916642604232&rtpof=true&sd=true
