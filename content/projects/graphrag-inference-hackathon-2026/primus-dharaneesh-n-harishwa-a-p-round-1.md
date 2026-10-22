---
id: "prj_148a21"
team: "Primus/Dharaneesh N,Harishwa A P"
title: "MedGraphRAG"
round: "Round 1"
repo_url: "https://github.com/dharaneeshexe-web/MEDGRAPH-TIGERGRAPH.git"
demo_url: "https://drive.google.com/drive/folders/1USiLUmx9v9a_HLuaNZmgOriEGdT8LDQL?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

Project Title: MedGraph RAG — GraphRAG-Powered Biomedical Question Answering over PubMed
Team: Dharaneesh
Overview:
MedGraph RAG is a GraphRAG pipeline that combines TigerGraph knowledge graph traversal with FAISS vector search to answer biomedical questions over 13,327 PubMed abstracts (~5.9M tokens). It extracts medical entities (Disease, Drug, Symptom, Treatment) from abstracts, stores relationships in TigerGraph, and uses 2-hop graph traversal to retrieve contextually connected evidence before generating answers via Groq's LLaMA 3.3 70B.
Three Pipelines Evaluated:

LLM Only (no retrieval): BERTScore 0.8645, Entity Recall 0.6333, 184 tokens/query
Baseline RAG (FAISS only): BERTScore 0.8451, Entity Recall 0.4533, 648 tokens/query
GraphRAG (TigerGraph + FAISS): BERTScore 0.8367, Entity Recall 0.5600, 232 tokens/query

Key Results:

64.2% token reduction vs baseline RAG while maintaining answer quality
GraphRAG improves entity recall by 23.5% over baseline
Judge score: 100% across all three pipelines (PS bonus achieved)
Cost efficiency: $0.15/1K queries (GraphRAG) vs $0.42/1K (baseline)

Tech Stack:
TigerGraph Savanna, Python, FAISS, sentence-transformers, Groq API (LLaMA 3.3 70B), BERTScore, spaCy/regex entity extraction
Graph Schema:
Vertices: Disease, Drug, Symptom, Treatment, Abstract
Edges: 2-hop traversal — Entity → Abstract → Co-occurring Entity
Dataset:
13,327 PubMed abstracts, ~5.9M tokens processed

## Dataset

domain: healthcare)(source:13,327 PubMed abstracts via NCBI E-utilities API (~5.9M tokens). Entities: Disease, Drug, Symptom, Treatment across 9,268 vertices and 4,499 edges in TigerGraph.)

## Benchmark results

Hint: Share your headline numbers across all 3 pipelines (LLM-Only, Basic RAG, GraphRAG):



Token reduction % (GraphRAG vs Basic RAG)

Cost per query for each pipeline

Latency (avg response time)

Accuracy: LLM-as-a-Judge pass rate + BERTScore F1 *
Token Reduction: GraphRAG uses 64.2% fewer tokens than Basic RAG (232 vs 648 avg tokens/query)
Cost per query:

LLM-Only: $0.00012
Basic RAG: $0.00042
GraphRAG: $0.00015

Latency (avg response time):

LLM-Only: 0.81s
Basic RAG: 0.84s
GraphRAG: 0.77s

LLM-as-a-Judge Pass Rate:

LLM-Only: 100%
Basic RAG: 100%
GraphRAG: 100%

BERTScore F1:

LLM-Only: 0.8645
Basic RAG: 0.8451
GraphRAG: 0.8367

## Links

- Live app: https://dharaneeshexe-web.github.io/MEDGRAPH-TIGERGRAPH/dashboard.html
- Blog post: https://hackathon-tigergraph.hashnode.dev/
