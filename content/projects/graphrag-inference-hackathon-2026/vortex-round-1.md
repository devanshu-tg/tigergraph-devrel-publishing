---
id: "prj_b44167"
team: "VORTEX"
title: "MedGraph-RAG"
round: "Round 1"
repo_url: "https://github.com/RaktimChandra/medgraph-rag"
demo_url: "https://drive.google.com/file/d/1sWidXc4cek4XYSaoqT1bVlm_JqIorQZC/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

MedGraph-RAG: 67.8% Token Reduction with 93% Accuracy Using TigerGraph Knowledge Graphs on Biomedical Literature

We built MedGraph-RAG, a three-pipeline GraphRAG benchmark system on 2.1 million tokens of PubMed cancer research literature. Pipeline 1 (LLM-Only) is the raw baseline. Pipeline 2 (Basic RAG) uses ChromaDB vector embeddings. Pipeline 3 (GraphRAG) uses TigerGraph knowledge graph with 3-hop GSQL traversal and Hybrid retriever. Medical questions require multi-hop reasoning — "What drugs target the BRCA1 pathway?" demands traversing Gene→Protein→Pathway→Drug relationships that vector search cannot do. GraphRAG extracts entities, traverses 47K nodes and 183K edges, and hands the LLM only the precise relational facts it needs. Result: 67.8% token reduction, 93% accuracy, both bonus thresholds hit simultaneously.

NOTE - Dashboard runs locally: python src/dashboard/app.py → http://localhost:5000
Full source in GitHub repo. Demo video shows it live.

## Dataset

Biomedical / Cancer Research. Source: PubMed Open Access Subset (https://pubmed.ncbi.nlm.nih.gov/). 7,170 chunks, 2.1 million tokens, cancer research papers covering genes, proteins, drugs, diseases, and molecular pathways. Public domain.

## Benchmark results

Pipeline 1 - LLM-Only:
- Avg tokens: 3,847/query
- Cost: $0.00231/query
- Latency: 4.2s avg
- LLM-Judge pass rate: 61%
- BERTScore F1 (rescaled): 0.41

Pipeline 2 - Basic RAG (ChromaDB):
- Avg tokens: 1,442/query
- Cost: $0.00128/query
- Latency: 3.8s avg
- LLM-Judge pass rate: 74%
- BERTScore F1 (rescaled): 0.49

Pipeline 3 - GraphRAG (TigerGraph):
- Avg tokens: 687/query
- Cost: $0.00041/query
- Latency: 1.9s avg
- LLM-Judge pass rate: 93% ✅ (bonus threshold hit)
- BERTScore F1 (rescaled): 0.61 ✅ (bonus threshold hit)

GraphRAG vs Basic RAG:
- Token reduction: 67.8%
- Cost reduction: 67.9%
- Latency reduction: 50%
- Accuracy gain: +19 percentage points
- Both bonus thresholds hit simultaneously ✅

## Links

- Live app: https://github.com/RaktimChandra/medgraph-rag
- Blog post: https://medium.com/@raktimchandra26/how-we-cut-llm-token-costs-by-67-8-using-a-knowledge-graph-without-losing-accuracy-bfb5b10d2423
