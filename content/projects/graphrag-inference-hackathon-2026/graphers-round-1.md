---
id: "prj_d1ed0f"
team: "Graphers"
title: "GraphRAG vs Basic RAG: Token Efficiency Benchmark on 29 Classic Novels"
round: "Round 1"
repo_url: "https://github.com/MrEinsteinE/graphrag-inference-hackathon"
demo_url: "https://drive.google.com/file/d/1jK851LTLJK5aT8xTtXY5Ny80RaE1H_kM/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

A side-by-side benchmark of three LLM inference pipelines — LLM-only, Basic RAG (Chroma + MiniLM), and TigerGraph GraphRAG — on 29 Project Gutenberg novels (~4.1M tokens).
Built a Streamlit dashboard where one query runs through all three pipelines simultaneously, comparing token usage, cost, latency, and accuracy (LLM-as-judge + BERTScore) side-by-side. GraphRAG uses TigerGraph's hybrid search (vector + multi-hop graph traversal) with Gemini embeddings and entity extraction, delivering precise, relationship-aware answers.

## Dataset

Classic Literature — 29 public-domain novels from Project Gutenberg (~4.1M tokens). Includes Alice in Wonderland, Dracula, Frankenstein, The Great Gatsby, Moby Dick, Pride and Prejudice, Sherlock Holmes Adventures, Jane Eyre, Great Expectations, Ulysses, Wuthering Heights, and more. Chosen because classic novels have dense entity relationships (characters, places, themes) that showcase GraphRAG's multi-hop reasoning advantage over pure vector search.

## Benchmark results

Latency (ms)

1081.5

Tokens (prompt + completion)

42 + 89

Est. cost (USD)

0.000060

90% pass rate BERTScore 0.93

## Links

- Live app: http://localhost:8501
- Blog post: https://github.com/MrEinsteinE/graphrag-inference-hackathon/blob/master/docs/blog_post.md
