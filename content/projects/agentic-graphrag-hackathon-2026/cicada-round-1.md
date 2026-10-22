---
id: "prj_695475"
team: "Cicada"
title: "Agentic GraphRAG for Olympic Event Investigation: When Does Reasoning Beat Retrieval?"
round: "Round 1"
repo_url: "https://github.com/vinu225/Agentic_graph_rag"
demo_url: "https://drive.google.com/file/d/17hfNLc20OKX1oPGwW0RFhE7FwcgQCp1S/view?usp=sharing'"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

We built and benchmarked three complete retrieval architectures — Plain RAG, GraphRAG, and autonomous Agentic GraphRAG — on the same 100 Olympic Games questions**, directly investigating the hackathon’s core question: when does agentic reasoning actually outperform simpler retrieval?

Our corpus contains 2,951 Wikipedia Olympic event documents (1987–2023). Plain RAG uses hybrid BM25 and semantic retrieval over document chunks, combining exact keyword matching with embedding-based similarity search. GraphRAG combines structured knowledge-graph queries across events, venues, competitors, and medalists with supporting text evidence in a single pass. The Agentic system adds an autonomous orchestrator that plans and adapts its investigation, using tools for entity linking, graph queries, aggregation/ranking, temporal reasoning, text retrieval, and evidence evaluation, iterating until sufficient evidence is gathered.

The system runs locally using Ollama with Qwen3 and a local graph backend, while the same graph interface has been connection-tested against TigerGraph Savanna to support the final platform integration.

On the full 100-question benchmark, Plain RAG achieved 70% accuracy, GraphRAG 78%, and Agentic GraphRAG 88%. The Agent achieved 95.2% accuracy on aggregation questions**, demonstrating where structured, multi-step reasoning can overcome the limitations of fixed top-k retrieval. This improvement comes with a measurable reasoning cost: Agentic GraphRAG uses approximately 2.4× the tokens of GraphRAG on average.

## Details

- **LLM:** Qwen3 8B (via Ollama, local inference)
- **Vector database:** FAISS (Facebook AI Similarity Search), with 384-dimensional embeddings from sentence-transformers/all-MiniLM-L6-v2.
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 3.33
- **Retrieval methods:** Entity linking, graph traversal, structured graph queries, aggregation/ranking, temporal reasoning, BM25 document retrieval

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 70 | 78 | 88 |
| Tokens per query | 2291 | 2166 | 5217 |
| Latency | 8.66 | 7.59 | 19.2 |

## Links

- Live app: https://agentic-graph-rag.vercel.app/
- Blog post: https://medium.com/@vinuj2219/when-does-reasoning-beat-retrieval-724aa5a51f93?postPublishedType=initial
