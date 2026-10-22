---
id: "prj_d9d8b9"
team: "Hotty_Fi5e"
title: "Interlock-TG"
round: "Round 1"
repo_url: "https://github.com/Tetra4ge/Interlock-TG"
demo_url: "https://youtu.be/6HGVBAgjBfM?si=fT_H9LRyNX6vbvzT"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

Interlock is an end-to-end AI platform that uncovers hidden corporate governance risks, board entanglements, and related-party transaction trails by extracting structured data from dense Indian regulatory filings and modeling it within a TigerGraph knowledge graph. Built to solve the limitations of standard vector search, the system runs three distinct question-answering architectures—Standard RAG, GraphRAG, and Agentic GraphRAG—side-by-side against the exact same corpus. Through a full-stack Next.js dashboard, users can ask complex multi-hop questions, visualize the underlying graph traversals, and objectively compare accuracy, cost, and latency, ensuring every claim is strictly grounded to a verbatim quote in a source PDF.

## Details

- **LLM:** Groq API (openai/gpt-oss-20b default) (Note: If you were passing a specific Llama 3 model into your .env for Groq during your live runs, you should specify that instead (e.g., llama-3.1-70b-versatile), but the hardcoded default in server/pipelines/common/answer.py is openai/gpt-oss-20b).
- **Vector database:** Custom local NumPy (.npz) vector index (Note: The codebase builds a completely custom, dependency-free local vector index using NumPy (np.dot for cosine similarity) stored in .npz files, rather than relying on an external vector DB like Milvus or Pinecone.)
- **Graph backend:** TigerGraph Community Edition (via local Docker) (Note: The docker-compose.yml spins up the local TigerGraph container profile which corresponds to the Community/Developer Edition, not Savanna).
- **Average agent steps per question:** 6
- **Retrieval methods:** entity linking, graph traversal, similarity search, document retrieval, aggregation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 60 | 60 | 40 |
| Tokens per query | 10 | 10 | 20 |
| Latency | 9 | 28.9 | 57 |

## Links

- Live app: https://interlock-tg.vercel.app/
- Blog post: https://youtu.be/6HGVBAgjBfM?si=fT_H9LRyNX6vbvzT
