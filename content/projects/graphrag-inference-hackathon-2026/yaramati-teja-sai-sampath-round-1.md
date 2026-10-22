---
id: "prj_ec70e4"
team: "YARAMATI TEJA SAI SAMPATH"
title: "GRAPHRAG INTELLIGENCE DASHBOARD"
round: "Round 1"
repo_url: "https://github.com/YaramatiTeja/graphrag-inference-dashboard"
demo_url: "https://drive.google.com/file/d/1_7feF69wGxmJ_Ce0ncsYaWVLzb7Osj-y/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

## Dataset

Domain: Generative AI, Knowledge Graphs, and Retrieval-Augmented Generation  Source: The project uses research papers and technical PDF documents on Transformers, RAG, and GraphRAG as the dataset source. These documents are processed into chunks, embeddings, and graph relationships for comparative retrieval benchmarking.

## Benchmark results

Benchmark Results Summary

LLM-Only:

* Average Latency: ~12.2s
* Total Tokens: ~1199
* Cost per Query: ~$0.000359
* LLM-as-a-Judge Relevance Score: 0.61
* BERTScore F1: 0.78

Basic RAG:

* Average Latency: ~13.3s
* Total Tokens: ~1322
* Cost per Query: ~$0.000396
* LLM-as-a-Judge Relevance Score: 0.58
* BERTScore F1: 0.81

GraphRAG:

* Average Latency: ~4.1s
* Total Tokens: ~646
* Cost per Query: ~$0.000154
* LLM-as-a-Judge Relevance Score: 0.60
* BERTScore F1: 0.85

Key Improvements:

* GraphRAG reduced token usage by approximately 51% compared to Basic RAG.
* GraphRAG achieved the lowest inference cost and fastest response time.
* GraphRAG produced stronger contextual retrieval and higher semantic alignment during evaluation.

## Links

- Live app: https://graphrag-inference-dashboard-usxasvjjzrnwx9vj7ukb2i.streamlit.app/
- Blog post: https://medium.com/@yaramatiteja/building-a-graphrag-intelligence-dashboard-comparing-llm-only-rag-and-graphrag-pipelines-0bfe5f22f73e
