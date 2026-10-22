---
id: "prj_7f716e"
team: "Livona dsouza (team name-Sumoseye)"
title: "CanvasGraph"
round: "Round 1"
repo_url: "https://github.com/sumoseye/CanvasGraph"
demo_url: "https://drive.google.com/drive/folders/1PP6Pm1g1Ve5OD3ylil9okuYrzpVYBGZI?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

CanvasGraph is an Agentic GraphRAG system that answers one question: which questions actually need an agent? It runs RAG, GraphRAG, and Agentic GraphRAG on the same questions and benchmarks accuracy, tokens, and latency. Jev, a lightweight non-generative router, predicts the cheapest pipeline likely to answer correctly, so simple questions skip the agent and hard ones get it. Every answer comes with cited evidence, a full agent trace, and an interactive graph canvas.

## Details

- **LLM:** openai/gpt-oss-120b (via Groq API)
- **Vector database:** TigerGraph Native Vector Search & In-Memory TF-IDF Vector Store (scikit-learn) (Integrated directly into the GraphStore interface for cosine-similarity vector retrieval over ingested document chunks).
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 3 steps (Step 1: Orchestrator planning & similarity search/linking → → Step 2: K-hop Graph Traversal with PageRank pruning & MST skeleton → → Step 3: Evidence Evaluation & Final Answer Synthesis).
- **Retrieval methods:** Entity Linking, Graph Traversal (PageRank + MST Skeleton), Similarity Search (Vector/TF-IDF), Document Retrieval, Aggregation, Conflict Checking (Recency & Source Authority), Community Summarization

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 50.00% | 66.70% | 66.70% |
| Tokens per query | 692 | 657 | 1851 |
| Latency | 2.5 | 2.8 | 7.7 |

## Links

- Live app: https://canvasgraph-1a1z.vercel.app
- Blog post: https://medium.com/@24b55.livona/canvasgraph-teaching-an-ai-when-not-to-think-too-hard-b975a9db3912
