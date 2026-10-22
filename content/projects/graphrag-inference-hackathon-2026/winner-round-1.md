---
id: "prj_9daf42"
team: "Neeti Malu"
title: "FraudGraph (GraphRAG-powered Financial Fraud Detection System)"
round: "Round 1, Round 2"
repo_url: "https://github.com/neeti26/GraphRag/tree/round2"
demo_url: "https://graphrag-lime.vercel.app/"
placement: "Finalist – Round 2"
prize: null
image_url: null
updated_at: "2026-10-14T19:38:11+05:30"
---

FraudGraph is an intelligent graph-based Retrieval-Augmented Generation (GraphRAG) application designed to expose hidden networks of financial fraud. Unlike traditional vector databases that search for isolated text fragments, FraudGraph maps complex relational networks—connecting identities, transaction footprints, shared device tokens, and bank accounts into a structured knowledge graph. By grouping closely linked entities into structured "communities," the system uses a hybrid search strategy to instantly evaluate both specific local transactions and broad global fraud ring patterns. It then passes this enriched, deeply interconnected context to an LLM, generating highly accurate, hallucination-free, and natural-language risk intelligence reports for fraud investigators.

## Dataset

Dataset Domain: Financial Services / Banking & Anti-Money Laundering (AML)

Dataset Source: Synthetic financial transaction networks and fraud logs, specifically designed to capture complex relational patterns such as shell company structures, mule account networks, and recursive money laundering loops.

## Details

- **LLM:** LLM Model & Version: gemini-2.5-flash LLM Judge Model: llama-3.1-8b-instant
- **Vector database for RAG:** Pinecone (v5.4.0)
- **Token reduction, GraphRAG vs RAG (%):** 86.4

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 0 | 10867 | 1483 |
| Cost per query | 0 | 0.00163 | 0.00022 |
| Latency | 1.5 | 9.09 | 7.5 |
| LLM-as-judge pass % | 3.3 | 71.1 | 96.7 |
| BERTScore F1 | 0.0381 | 0.4109 | 0.6874 |

## Links

- Live app: https://graphrag-lime.vercel.app/
- Blog post: https://github.com/neeti26/GraphRag/blob/main/TECHNICAL_WRITEUP.md
