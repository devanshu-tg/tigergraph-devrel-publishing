---
id: "prj_f8ebe0"
team: "Kommavarapu kameswari Sreevalli"
title: "GraphProbe AI"
round: "Round 1"
repo_url: "https://github.com/Sreevalli20/agentic-tiger"
demo_url: "https://drive.google.com/file/d/1obUHMtR-ktSHVjJRqXMEte4sfuNkzgT_/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

GraphProbe AI is an agentic GraphRAG investigation platform that answers complex questions by combining document retrieval, entity linking, graph traversal, evidence evaluation, and multi-step reasoning. Its agentic orchestrator dynamically determines the next investigation step based on the question, discovered entities, relationships, and evidence sufficiency, while providing an explainable investigation trace showing how the final finding was reached and why the investigation stopped.

## Details

- **LLM:** Google Gemini 2.5 Flash
- **Vector database:** ChromaDB
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 5
- **Retrieval methods:** entity linking, graph traversal, vector search, evidence evaluation, verification

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 26.1 | 16.1 | 70 |
| Tokens per query | 150 | 150 | 150 |
| Latency | 0.002 | 1.542 | 1.388 |

## Links

- Live app: https://frontend-gamma-ecru-m8dndislo7.vercel.app/
- Blog post: https://dev.to/sreevalli_335df1977399966/graphprobe-ai-building-an-agentic-graphrag-system-with-tigergraph-an2
