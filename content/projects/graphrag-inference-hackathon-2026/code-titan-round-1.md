---
id: "prj_3a9e2f"
team: "Code Titan"
title: "CampusMind AI — GraphRAG Powered College Knowledge Assistant"
round: "Round 1"
repo_url: "https://github.com/pranish2208/CampusMind-GraphRAG.git"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

CampusMind AI is an intelligent assistant that compares LLM-only, Basic RAG, and GraphRAG pipelines for answering college-related queries. The system uses knowledge graphs to improve multi-hop reasoning, reduce token usage, lower hallucinations, and provide more accurate responses.

The platform analyzes relationships between students, subjects, faculty, internships, clubs, and placements using GraphRAG. It also benchmarks response quality, latency, token consumption, and cost across all three pipelines.

## Dataset

Domain: Education / College Knowledge System  Sources: - College syllabus PDFs - Placement records - Faculty details - Student skill datasets - Club and event information - Public educational datasets  Data processed using PDF parsing, embeddings, vector retrieval, and graph relationships.

## Benchmark results

LLM-Only:
- Avg Token Usage: 4200
- Avg Cost per Query: $0.012
- Avg Latency: 5.8 sec
- Accuracy: 71%

Basic RAG:
- Avg Token Usage: 2400
- Avg Cost per Query: $0.007
- Avg Latency: 4.1 sec
- Accuracy: 84%

GraphRAG:
- Avg Token Usage: 980
- Avg Cost per Query: $0.003
- Avg Latency: 2.3 sec
- Accuracy: 93%

GraphRAG achieved:
- 59% token reduction vs Basic RAG
- Faster response time
- Better multi-hop reasoning
- Lower hallucination rate

## Links

- Live app: https://campusmind-graphrag.streamlit.app/
