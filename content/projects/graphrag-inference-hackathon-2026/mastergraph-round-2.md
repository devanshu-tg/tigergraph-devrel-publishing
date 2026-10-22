---
id: "prj_a018d1"
team: "MasterGraph"
title: "GraphRAG vs Basic RAG — Token-Efficient LLM Inference on TigerGraph"
round: "Round 2"
repo_url: "https://github.com/knightwalker96/graphrag-inference-hackathon"
demo_url: "https://www.loom.com/share/d8ddc83198b949cba89f6fbee424cfb4"
placement: "2nd place – Round 2"
prize: null
image_url: null
updated_at: "2026-10-14T19:30:07+05:30"
---

## Dataset

BioASQ dataset (biomedical multi-hop Question Answering dataset)

## Details

- **LLM:** gpt-4o-mini
- **Vector database for RAG:** Chroma
- **Token reduction, GraphRAG vs RAG (%):** 32

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 182 | 3375 | 2288 |
| Cost per query | 0.000061 | 0.000547 | 0.000378 |
| Latency | 2.23 | 2.77 | 3.17 |
| LLM-as-judge pass % | 88 | 92 | 96 |
| BERTScore F1 | 0.388 | 0.358 | 0.402 |

## Links

- Live app: https://knightwalker96-graphrag-inference-hackathon-app-k9q1vq.streamlit.app
- Blog post: https://lnkd.in/gcKxiY9Y
