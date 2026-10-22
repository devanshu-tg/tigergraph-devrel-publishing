---
id: "prj_da9f04"
team: "Shreyas Biware"
title: "Medical GraphRAG Benchmark — Proving Graph Beats Tokens on PubMed"
round: "Round 1"
repo_url: "https://github.com/Shreyas-biware/Medical-GraphRAG-Benchmark-Proving-Graph-Beats-Tokens-on-PubMed-"
demo_url: "https://www.loom.com/share/aeb67419a7864f0aae6d4516a1e24f8f?t=33"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

DataDescription:A side-by-side benchmark of three LLM inference pipelines on 2.1 million tokens of PubMed medical abstracts, built to prove that GraphRAG reduces token consumption while maintaining — and improving — answer accuracy. Pipeline 1 (LLM-Only) sends questions directly to Gemini 1.5 Flash with no retrieval. Pipeline 2 (Basic RAG) uses FAISS vector search with Gemini embeddings to retrieve the top-5 chunks. Pipeline 3 (GraphRAG) uses TigerGraph Savanna as a medical knowledge graph, traversing 2-hop entity relationships (diseases → drugs → mechanisms → pathways) to return focused, structured context to Gemini. An interactive Streamlit dashboard runs all three pipelines on any query and displays answers, token counts, latency, and cost side-by-side. Accuracy is evaluated using LLM-as-a-Judge (Gemini) and BERTScore (DeBERTa) across 20 benchmark questions with ground-truth reference answers.

## Dataset

Domain: Medical / Healthcare Source: PubMed abstracts via NCBI Entrez API (Biopython)

## Benchmark results

GraphRAG achieved 71.7% token reduction vs Basic RAG and 88.6% reduction vs LLM-Only, while improving answer accuracy above both baselines. LLM-as-a-Judge pass rate of 93% exceeds the bonus threshold (≥90%). BERTScore F1 raw of 0.912 exceeds the bonus threshold (≥0.88).
