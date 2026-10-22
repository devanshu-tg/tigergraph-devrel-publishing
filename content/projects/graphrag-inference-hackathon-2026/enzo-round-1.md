---
id: "prj_9d9570"
team: "enzo"
title: "PharmGraph Intelligence"
round: "Round 1"
repo_url: "https://github.com/sidakvasu8521-arch/GraphRAG-Inference-Hackathon-by-TigerGraph"
demo_url: "https://drive.google.com/file/d/16qB-ikXmZXw1hqBOR4c6IfL9N0R7FpGi/view?usp=drivesdk"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

PharmGraph Intelligence — A biomedical GraphRAG system for drug interaction reasoning using TigerGraph, vector retrieval, and GPT-4o-mini.

PharmGraph Intelligence is a production-grade GraphRAG platform designed to answer complex biomedical and drug-interaction queries through multi-hop graph traversal. Unlike traditional vector-only RAG systems, it models relationships between drugs, enzymes, diseases, and adverse effects as a knowledge graph, enabling precise reasoning with significantly fewer tokens and lower hallucination rates. The system combines TigerGraph traversal, Qdrant vector retrieval, biomedical NER, Redis caching, and GPT-4o-mini into a full-stack FastAPI + React application with streaming, monitoring, CI/CD, and evaluation pipelines.

## Dataset

ataset Domain  The dataset domain is Biomedical and Pharmaceutical Intelligence, specifically focused on:  Drug-drug interactions Enzyme inhibition and metabolism pathways Disease and comorbidity relationships Pharmacokinetics and adverse effects Clinical reasoning and multi-hop medical inference  The system models relationships between drugs, enzymes, diseases, and outcomes as a biomedical knowledge graph for GraphRAG-based reasoning.  Dataset Source  The project uses biomedical knowledge extracted and structured from pharmaceutical and clinical data sources for graph construction and retrieval pipelines. The implementation references:  Biomedical NER using spaCy BC5CDR Drug interaction relationships Enzyme-pathway mappings Clinical pharmacology knowledge  The architecture is built around TigerGraph + Qdrant + GPT-4o-mini for biomedical retrieval and reasoning workflows.

## Benchmark results

The project benchmarked three retrieval pipelines: LLM-Only, Basic RAG, and GraphRAG, while keeping the same underlying model (GPT-4o-mini) for fair comparison.

The LLM-Only pipeline used around 520 prompt tokens and 910 total tokens per query, with an average cost of $0.0046 and a latency of 3.2 seconds. It achieved an LLM-as-a-Judge score of 5.8/10 and a BERTScore F1 of 0.67, while suffering from a 38% hallucination rate and only 42% multi-hop reasoning accuracy.

The Basic RAG pipeline required significantly larger context windows, averaging around 2,350 prompt tokens and 2,750 total tokens per query. This increased the cost per query to $0.0138 with an average latency of 4.9 seconds. Its LLM-Judge score improved to 7.2/10 with a BERTScore F1 of 0.78, but multi-hop reasoning accuracy remained limited at 61%, with a 22% hallucination rate.

The GraphRAG pipeline achieved the best overall performance. It reduced token usage by 74% compared to Basic RAG, averaging only ~630 prompt tokens and ~900 total tokens per query. It also delivered the lowest cost per query at $0.0033 and the fastest average latency at 2.1 seconds. In terms of quality, GraphRAG achieved a 9.1/10 LLM-as-a-Judge score and a BERTScore F1 of 0.94. Multi-hop reasoning accuracy increased to 91%, while hallucination rate dropped to just 6%.

## Links

- Live app: https://drive.google.com/file/d/1y1ed6BEe8or83e3FXA_0nSYuZDT-nS1k/view?usp=drivesdk
- Blog post: https://drive.google.com/file/d/16qB-ikXmZXw1hqBOR4c6IfL9N0R7FpGi/view?usp=drivesdk
