---
id: "prj_ef833c"
team: "Naveena D"
title: "GraphRAG inference benchmark system"
round: "Round 1"
repo_url: "https://github.com/naveena-zen/graph-rag-benchmark"
demo_url: "https://youtu.be/ivRysus49vY"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

## Dataset

Wikipedia+ FAISS

## Benchmark results

| Metric | 🔵 P1 LLM Only | 🟠 P2 Basic RAG | 🟢 P3 GraphRAG | 🏆 Winner |
|--------|---------------|----------------|----------------|-----------|
| Tokens Used | 460 | 424 | 225 | 🟢 P3 |
| Latency | 2.36s | 0.70s | 0.59s | 🟢 P3 |
| Cost/Query | $0.000000 | $0.000000 | $0.000000 | 🟢 P3 |
| Context Quality | None | 3×256 tok chunks | Graph entities | 🟢 P3 |
| LLM Judge | FAIL | PASS | PASS | 🟢 P3 |
| BERTScore F1 | 0.003 | 0.126 | 0.202 | 🟢 P3 |
| Token Reduction vs P2 | — | Baseline | 46.9% less | 🟢 P3 |

P3 GraphRAG wins on every single metric for this query! 🏆

## Links

- Live app: https://graph-rag-benchmark-ikwvchzqvpefhw3bh68ahe.streamlit.app/
- Blog post: https://token-optimization.hashnode.dev/graphrag-inference-benchmark
