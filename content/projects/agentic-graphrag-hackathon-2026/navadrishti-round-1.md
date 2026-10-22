---
id: "prj_ee743f"
team: "NavaDrishti"
title: "Agentic GraphRAG on TigerGraph - Multi-Pipeline Benchmark"
round: "Round 1"
repo_url: "https://github.com/yash-7575/TigerGraph-Hackathon"
demo_url: "https://drive.google.com/drive/folders/1rDE3dskMiNdRJWzxrCzvPru0zHqeojwZ?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

## Details

- **LLM:** openai/gpt-oss-20b
- **Vector database:** Custom local NumPy cosine index (pipelines/vector_index.py) over 15,345 chunks × 2048-dim embeddings from nvidia/nemotron-3-embed-1b
- **Graph backend:** TigerGraph Savanna (v4.2.5, cloud instance)
- **Average agent steps per question:** 4
- **Retrieval methods:** entity linking, similarity search (vector), document retrieval, aggregation (deterministic count/sum/min/max), LLM answer composition

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 69 | 68 | 70 |
| Tokens per query | 4498 | 8465 | 20000 |
| Latency | 16 | 8 | 60 |

## Links

- Blog post: https://drive.google.com/drive/folders/1rDE3dskMiNdRJWzxrCzvPru0zHqeojwZ?usp=sharing
