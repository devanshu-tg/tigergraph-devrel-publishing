---
id: "prj_ab935a"
team: "MasterMind Kumaraguru V S"
title: "GraphRAG Inference Engine"
round: "Round 2"
repo_url: "https://github.com/MUTHUKUMARAN-K-1/graphrag-inference-hackathon"
demo_url: "https://drive.google.com/file/d/1L0KhsKgBo8d9rrgrTWH_CBkGWtoYGcoE/view?usp=sharing"
placement: "3rd place – Round 2"
prize: null
image_url: null
updated_at: "2026-10-14T19:30:07+05:30"
---

GraphRAG Inference Engine — Multi-Pipeline Question Answering System with Novel Graph Retrieval Techniques

Description A production-style, three-pipeline question answering system that benchmarks LLM-Only, Basic RAG, and GraphRAG side-by-side on the same queries and the same generation model, enabling a truly fair apples-to-apples comparison. Built on TigerGraph Cloud as the underlying knowledge graph store, the system goes beyond standard retrieval by incorporating multiple novel graph-based techniques inspired by the latest 2024–2025 research literature. These enhancements improve how relevant context is selected, ranked, and packed into the LLM prompt — resulting in more accurate, information-dense answers while consuming significantly fewer tokens than traditional vector RAG. The evaluation framework uses token-level F1, BERTScore (semantic similarity), and an independent LLM-as-a-Judge for unbiased grading across all three pipelines simultaneously, demonstrating measurable and reproducible improvements in answer quality and retrieval efficiency.

## Dataset

General Knowledge - Wikipedia. An open-domain encyclopedia corpus spanning science, history, philosophy, arts, geography, and mathematics was ingested into TigerGraph Cloud, forming a structured knowledge graph with entities, typed relationships, and linked document chunks used for retrieval.

## Details

- **LLM:** Pipeline Model LLM-Only gemini-2.5-flash (Google Gemini API) Basic RAG gemini-2.5-flash (Google Gemini API) GraphRAG gemini-2.5-flash (Google Gemini API) LLM-as-a-Judge llama-3.3-70b-versatile (Groq API — independent model for unbiased grading) All three pipelines use the same generation model (gemini-2.5-flash) for a fair comparison
- **Vector database for RAG:** TigerGraph Cloud — using TigerGraph's built-in vector similarity search (vectorSearchChunks GSQL query, cosine similarity, 384-dimensional embeddings). Version: TigerGraph Cloud (GraphRAG graph schema). Embedding model: sentence-transformers/all-MiniLM-L6-v2 (local).
- **Token reduction, GraphRAG vs RAG (%):** 57.8

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 167 | 785 | 331 |
| Cost per query | $0.00 | $0.00 | $0.00 |
| Latency | 2.52 | 3.5 | 2.61 |
| LLM-as-judge pass % | 62.50% | 52.50% | 92.50% |
| BERTScore F1 | 0.5103 | 0.3944 | 0.8694 |

## Links

- Live app: https://tigergraph-dashboard.vercel.app/
- Blog post: https://medium.com/@kesavamurthy1008/graphrag-inference-tigergraph-knowledge-graph-retrieval-system-9d0b37531939
