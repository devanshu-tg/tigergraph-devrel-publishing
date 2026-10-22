---
id: "prj_0c5f4b"
team: "Team Tiger"
title: "PaperWeave - Graph-grounded benchmarking for scientific paper reasoning"
round: "Round 1"
repo_url: "https://github.com/shoaib2000857/paperweave"
demo_url: "https://drive.google.com/drive/folders/1TVMidoxTuUPBR58k0bz1m70Q7wXIrC3e?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

## Dataset

Scientific Reseach Papers on NLP and LLM's sourced from Arxiv, (2.05 million tokens)

## Benchmark results

On our curated 100-question evaluation set over ingested arXiv content, GraphRAG achieved the best semantic accuracy with a BERTScore F1 of 0.586, while matching the best LLM-as-a-Judge pass rate at 80% and average judge correctness at 72%. Compared with Basic RAG, GraphRAG reduced average token usage from 1159.3 to 113.2 tokens per query, a 90.24% reduction. LLM-only was faster (5.85s avg latency) but substantially less reliable, scoring 0% judge pass rate and 0.507 BERTScore F1.

## Links

- Blog post: https://medium.com/@a.redlahansika/we-built-three-rag-pipelines-side-by-side-heres-what-actually-happened-ad8f989101ba
