---
id: "prj_4523bc"
team: "Vertex"
title: "IPL GraphRAG Benchmark — Comparing LLM-Only, Basic RAG and GraphRAG on Cricket Data"
round: "Round 1"
repo_url: "https://github.com/simrannsv/RAG"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

Built a 3-pipeline RAG benchmark system on 1 million tokens of IPL cricket data scraped from Wikipedia, as part of the TigerGraph GraphRAG Inference Hackathon.
What I built:

Pipeline 1 (LLM-Only): Groq llama-3.3-70b answering 20 IPL questions purely from training memory with no retrieval
Pipeline 2 (Basic RAG): FAISS vector search retrieving top-5 chunks and passing them as context to Groq llama-3.3-70b
Pipeline 3 (GraphRAG): TigerGraph hybrid search combining vector retrieval and knowledge graph traversal, powered by Groq llama-3.3-70b and Google GenAI embeddings

## Dataset

1 million tokens of IPL cricket data covering players, teams, seasons, auctions, venues, records and franchise owners — scraped from Wikipedia using the Wikipedia API.
