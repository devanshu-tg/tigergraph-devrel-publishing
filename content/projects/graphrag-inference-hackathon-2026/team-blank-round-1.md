---
id: "prj_ab0150"
team: "Team Blank"
title: "GraphRAG Inference"
round: "Round 1"
repo_url: "https://github.com/tgnanditha/graphrag.git"
demo_url: "https://www.loom.com/share/0d032aa0e11842388c5b46fd30c421ec"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

## Dataset

Biomedical Research Data, PubMed QA dataset (from Hugging Face — pubmed_qa, pqa_labeled split

## Benchmark results

Pipeline and	Description
Pipeline 1 — LLM Only	Sends the question directly to the LLM with no external context
Pipeline 2 — Basic RAG	Retrieves top-5 text chunks from ChromaDB using vector similarity
Pipeline 3 — GraphRAG	Traverses a TigerGraph knowledge graph to retrieve structured, entity-linked context
Pipeline	Avg    Tokens Avg Latency	Relative Cost
🔴 LLM-Only	204	~18s	Baseline
🟡 Basic RAG	589	~17s	2.9× baseline
🟢 GraphRAG	165	~20s	0.8× baseline

## Links

- Live app: https://graphrag-myxazdbf5fvofz3wgu8zud.streamlit.app/
- Blog post: https://graphrag123.hashnode.dev/tigergraph-graphrag-inference-hackathon
