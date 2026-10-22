---
id: "prj_08c01a"
team: "B Sanjeev Reddy, Team RAGnaRock"
title: "LegalGraphRAG compares three inference pipelines over a large legal corpus"
round: "Round 1"
repo_url: "https://github.com/Mr-Daker/legal-graphrag-bench"
demo_url: "https://drive.google.com/file/d/127PhKF6Agn4azUu3XgK5uJdUqxDlLjEd/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

LegalGraphRAG compares three inference pipelines over a large legal corpus: LLM-only, Basic RAG, and GraphRAG built on the official TigerGraph GraphRAG repository. The system adds a legal graph schema, EA-style query routing, CommunityReport retrieval, PathRAG-light pruning, Gemini answer generation, and a React/Node benchmark dashboard. Final results show GraphRAG achieving 100% LLM-as-a-Judge pass rate, 0.9003 BERTScore raw, 0.7013 BERTScore rescaled, and 36.61% token reduction versus Basic RAG.

## Dataset

Domain: Legal / court opinions / case-law question answering  Source: Harvard LIL Cold Cases dataset from Hugging Face, harvard-lil/cold-cases  The benchmark uses 478 legal opinions, totaling about 2.2M tokens, split into 7,008 retrieval chunks with 384-token chunk size and 64-token overlap.

## Benchmark results

Benchmark Results Summary:

LLM-Only baseline:
Judge pass rate: 35%
BERTScore F1 raw: 0.8166
BERTScore F1 rescaled: 0.4507
Average tokens/query: 143.30
Average latency: 1,326.32 ms
Estimated cost/query: $0.000041

Basic RAG:
Judge pass rate: 55%
BERTScore F1 raw: 0.8337
BERTScore F1 rescaled: 0.5018
Average tokens/query: 3,746.85
Average latency: 1,318.00 ms
Estimated cost/query: $0.000401

GraphRAG / LegalGraphRAG:
Judge pass rate: 100%
BERTScore F1 raw: 0.9003
BERTScore F1 rescaled: 0.7013
Average tokens/query: 2,375.10
Average latency: 1,312.45 ms
Estimated cost/query: $0.000253

GraphRAG vs Basic RAG:
Token reduction: 36.61%
Latency reduction: 0.42%
GraphRAG improved judge accuracy by 45 percentage points over Basic RAG while using 36.61% fewer tokens.

## Links

- Live app: https://legal-graph-rag-91884.web.app/
- Blog post: https://medium.com/@sanjeevteja143/legalgraphrag-building-a-graph-based-legal-rag-system-on-tigergraph-c9ba42752df2
