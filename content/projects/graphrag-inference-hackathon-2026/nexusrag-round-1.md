---
id: "prj_6de08c"
team: "NexusRag"
title: "NexusRAG"
round: "Round 1"
repo_url: "https://github.com/Sathiya2-coder/NexusRAG.git"
demo_url: "https://drive.google.com/drive/folders/1P74c9Vx0e9rizN7vpQsP-PGwABllUGoC?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

NexusRAG - NexusRAG is a benchmarking dashboard built for the TigerGraph GraphRAG competition to compare three AI retrieval approaches side by side: plain LLM responses, vector-based RAG, and GraphRAG.

The project uses Groq-hosted Llama 3 models, ChromaDB for vector retrieval, and a NetworkX-based knowledge graph for relationship-aware retrieval. Queries are passed through all three pipelines and evaluated using latency, token usage, retrieval context, and AI-judge analysis.

The goal of the project was not just building another RAG application, but understanding how different retrieval architectures behave across factual, reasoning, and multi-hop queries.

## Dataset

Gaming and Historical Archives , WikiText-2 (Wikipedia-derived text dataset)

## Benchmark results

Benchmark Results Summary
1. Basic RAG
Latency: 597 ms
Cost per Query: $0.00020
Tokens:
Prompt: 147
Completion: 145
Total: 292
Accuracy:
LLM-as-a-Judge: FAIL
BERTScore F1: 0.68
2. TigerGraph / GraphRAG
Latency: 1522 ms
Cost per Query: $0.00029
Tokens:
Prompt: 193
Completion: 227
Total: 420
Accuracy:
LLM-as-a-Judge: PASS
BERTScore F1: 0.97
3. Basic LLM
Latency: 1710 ms
Cost per Query: $0.00034
Tokens:
Prompt: 73
Completion: 372
Total: 445
Accuracy:
LLM-as-a-Judge: FAIL
BERTScore F1: 0.44
Key Observation
TigerGraph / GraphRAG achieved the highest accuracy with a BERTScore of 0.97 and was the only pipeline to pass LLM-as-a-Judge evaluation.
Compared to the Basic LLM pipeline, GraphRAG reduced total token usage by ~5.6% (445 → 420 tokens).
Basic RAG achieved the lowest latency and cost, but GraphRAG produced significantly more reliable answers for relationship-heavy queries.

## Links

- Live app: https://sathiya2-coder-nexusrag-app-lnfivi.streamlit.app/
- Blog post: https://medium.com/@darikasivakumar2006/nexusrag-comparing-llms-basic-rag-and-graphrag-in-one-dashboard-bba2920a7424
