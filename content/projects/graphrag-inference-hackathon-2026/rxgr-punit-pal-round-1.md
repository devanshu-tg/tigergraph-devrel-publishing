---
id: "prj_39f838"
team: "RxGR - Punit Pal"
title: "RxGR RAG — Biomedical GraphRAG Inference System"
round: "Round 1"
repo_url: "https://github.com/ShahiTechnovation/RxGR"
demo_url: "https://drive.google.com/file/d/1p8GdacA90IzSyUMJ1gUvc5pZxNOfeoZ_/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

RxGR RAG proves that graph-powered retrieval dramatically reduces 
LLM token consumption on complex biomedical queries. We built three 
parallel pipelines on a biomedical knowledge graph combining DRKG 
(97,238 entities, 5.8M triplets across 107 edge types) enriched with 
10,000 PubMed pharmacology abstracts (~3M tokens):

Pipeline 1 — LLM-Only: Direct Groq LLM call, no retrieval
Pipeline 2 — Basic RAG: ChromaDB vector store (all-MiniLM-L6-v2 
embeddings) + top-8 chunk retrieval + LLM
Pipeline 3 — GraphRAG: HuggingFace biomedical NER (d4data/biomedical-ner-all) 
extracts entities from query → maps to DRKG canonical IDs → 
TigerGraph multi-hop traversal (up to 3 hops across Drug→Disease→Gene→
SideEffect relationships) → structured ~300-token graph context → LLM

The system targets clinically critical multi-hop queries like "Which 
drugs treating Hypertension are contraindicated for patients with Type 
2 Diabetes via shared ACE pathway?" — queries that are impossible for 
vector RAG to answer without massive context dumps. An interactive 
React dashboard shows all 3 pipelines answer side-by-side with live 
token counters, latency, cost, and accuracy metrics. Graph path 
visualization shows the exact traversal path used by GraphRAG.

## Dataset

Domain: Biomedical — Drug-Disease-Gene Interactions  Source 1: DRKG (Drug Repurposing Knowledge Graph)   - 97,238 entities across 13 types (Compound, Disease, Gene,      SideEffect, Symptom, BiologicalProcess, etc.)   - 5,874,261 triplets across 107 edge types   - Sources: DrugBank, Hetionet, GNBR, String, IntAct, DGIdb   - License: MIT, freely available   - URL: https://github.com/gnn4dr/DRKG  Source 2: PubMed Open Access Abstracts (ncbi/pubmed via HuggingFace)   - 10,000 pharmacology/drug-interaction abstracts filtered by MeSH      headings and chemical lists   - ~3M tokens total (well above 1M minimum requirement)   - License: Open access, public domain   - URL: https://huggingface.co/datasets/ncbi/pubmed

## Benchmark results

Token Reduction % (GraphRAG vs Basic RAG)->
Overall Average: GraphRAG achieves an average context token reduction of 55% to 64% overall.
By Difficulty: The token savings scale drastically with the complexity of the query. GraphRAG achieves a ~22% reduction for Tier 1 (1-hop) queries, ~58% for Tier 2 (2-hop) queries, and ~84% for Tier 3 (3-hop+) queries.
Peak Reduction: On the canonical clinical safety demo query (a Tier 3 multi-hop query), GraphRAG achieves a massive 93.2% token reduction, taking the context from 4,096 tokens down to just 280 tokens.


Cost->
Cost Reduction: Across all 50 queries, GraphRAG costs 54.5% less than Basic RAG.
Cost per Query: While exact averages per pipeline depend on the tier, a sample Tier 3 GraphRAG query costs approximately $0.000063. Because GraphRAG drastically cuts the input tokens needed for multi-hop contexts, its total cost remains a fraction of Basic RAG's expense.


Latency (Avg Response Time)->
GraphRAG is generally ~2 seconds slower than Basic RAG.
This is an intentional and transparent trade-off; the added time comes from the multi-hop TigerGraph traversal (recording a latency of around 7.3 seconds for a sample complex Tier 3 query), but the cost and token savings more than compensate for the slight delay.


Accuracy: LLM-as-a-Judge Pass Rate + BERTScore F1->
Judge Win Rate: In pairwise evaluations (judged on accuracy, faithfulness, completeness, clinical safety, and conciseness), GraphRAG won in 82% (41 out of 50) of the queries. Its performance peaks on the most complex questions, winning 90% of the time on Tier 3 queries.
BERTScore F1: GraphRAG achieved an overall BioBERT F1 score of 0.87 (or 0.871) when measured against Basic RAG's more verbose answers. This easily exceeds the 0.82 threshold required to prove that GraphRAG preserves semantic accuracy and clinical quality despite using significantly fewer tokens.

## Links

- Live app: https://rxgr.vercel.app/demo
- Blog post: https://medium.com/@punit05022005/stop-burning-tokens-how-we-slashed-biomedical-rag-costs-by-93-with-graphrag-ca51f7bdfe40
