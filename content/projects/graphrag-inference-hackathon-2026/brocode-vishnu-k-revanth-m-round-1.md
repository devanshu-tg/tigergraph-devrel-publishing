---
id: "prj_e7629b"
team: "BroCode (Vishnu K & Revanth M)"
title: "CRM Nexus — TigerGraph GraphRAG Inference"
round: "Round 1, Round 2"
repo_url: "https://github.com/vishnu-k-dev/crm-nexus"
demo_url: "https://youtu.be/o2JM-AQ1qbA?si=roFrj_0b7yQgeuvz"
placement: "Finalist – Round 2"
prize: null
image_url: null
updated_at: "2026-10-14T19:38:11+05:30"
---

Multi-hop graph retrieval on a 158.5M-token synthetic CRM knowledge graph. After Round 1 feedback, this submission fixes 4 core issues: (1) replaced hardcoded ARTICLE_MAP answer-key with generic entity-ID parser + real HNSW vector search, (2) wired in the true graphRAGSearch GSQL query for honest retrieval, (3) implemented fair candidate budgets across all pipelines, (4) reported single canonical BERTScore and consistent corpus size. Phase 2 adds real entity graph ingestion (478K edges) + multi-hop GSQL traversal for genuine graph-based answers to aggregation questions. Results: ≥95% accuracy, ≥85% token reduction, raw BERTScore F1 ≥0.9.

## Dataset

Synthetic CRM (158.5M tokens, 100,820 documents, 577,175 embedded chunks). Generated via scripts/generate-graph-crm.ts (deterministic, reproducible). Published on [HuggingFace / shared drive] with SHA-256 checksums.

## Details

- **LLM:** Google Gemini 2.5 Flash (all pipelines); Groq Llama 3.1 8B Instant (Judge)
- **Vector database for RAG:** Jina jina-embeddings-v2-base-en (768-dim)
- **Token reduction, GraphRAG vs RAG (%):** 86.4

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 800 | 10867 | 1483 |
| Cost per query | 0.0002 | 0.0015 | 0.0002 |
| Latency | 2.50 seconds | 9.09 seconds | 7.50 seconds |
| LLM-as-judge pass % | 3.30% | 71.10% | 96.70% |
| BERTScore F1 | 0.846 | 0.908 | 0.932 |

## Links

- Live app: https://crm-nexus-team-brocode.vercel.app/
- Blog post: https://dev.to/vishnukdev/why-your-rag-pipeline-cant-answer-relationship-questions-and-how-we-fixed-it-nf0
