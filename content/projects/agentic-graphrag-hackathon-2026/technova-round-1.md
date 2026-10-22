---
id: "prj_0aec16"
team: "TechNova"
title: "TechNova"
round: "Round 1"
repo_url: "https://github.com/asfiyashareef336-hash/TechNova"
demo_url: "https://drive.google.com/file/d/1xx-ZKdY-Ru70oF0JTQbeEVsXy-c0sf4V/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:44+05:30"
---

Agentic GraphRAG – Intelligent Question Answering with RAG, GraphRAG and Agentic Reasoning - Agentic GraphRAG is an intelligent question-answering system that compares RAG, GraphRAG, and Agentic GraphRAG approaches. It combines semantic vector search, TigerGraph knowledge-graph traversal, evidence evaluation, and LLM-based reasoning to retrieve relevant information, evaluate evidence, and generate reliable answers. The system also provides agentic investigation traces, retrieval metrics, token usage, and stopping reasons to make the reasoning process transparent.

## Details

- **LLM:** OpenAI GPT-OSS 120B (openai/gpt-oss-120b)
- **Vector database:** NumPy (in-memory vector similarity search) + Sentence Transformers
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 8
- **Retrieval methods:** Similarity search (vector search), graph traversal, document retrieval, evidence evaluation, LLM reasoning

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 74% | 76% | 76% |
| Tokens per query | 2943 | 2818 | 2630 |
| Latency | 0.0466 | 2.0567 | 6.2658 |
