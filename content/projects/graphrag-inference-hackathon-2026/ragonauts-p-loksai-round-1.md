---
id: "prj_eaa77f"
team: "RAGonauts - P Loksai"
title: "RippleGuard: Next-Generation Supply Chain Intelligence"
round: "Round 1"
repo_url: "https://github.com/loksai-dev/RippleGuard-Next-Generation-Supply-Chain-Intelligence"
demo_url: "https://drive.google.com/file/d/1riHPI_vKsAWzl0NZaKO0p-rzMX7jgGb-/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

## Dataset

Supply chain - Synthetic data

## Benchmark results

| Metric                              | LLM-Only | Basic RAG | GraphRAG             | Cognee Memory     |
| ----------------------------------- | -------- | --------- | -------------------- | ----------------- |
| Accuracy (LLM-as-a-Judge Pass Rate) | 58%      | 81%       | 97%                  | 89%               |
| BERTScore F1                        | 0.71     | 0.84      | 0.96                 | 0.90              |
| Avg. Context Tokens                 | ~0       | ~1400     | ~180                 | ~320              |
| Token Reduction vs Basic RAG        | —        | —         | **87% ↓**            | **77% ↓**         |
| Cost per Query                      | $0.05    | $0.16     | $0.07                | $0.09             |
| Avg. Latency                        | ~420ms   | ~950ms    | ~520ms               | ~640ms            |
| Multi-Hop Reasoning Score           | 1/10     | 4/10      | 10/10                | 8/10              |
| Hallucination Rate                  | High     | Medium    | Very Low             | Low               |
| Knowledge Traversal Depth           | None     | Shallow   | Deep Graph Traversal | Persistent Memory |
| Scalability for Enterprise Data     | Low      | Medium    | High                 | Medium-High       |

## Links

- Live app: https://github.com/loksai-dev/RippleGuard-Next-Generation-Supply-Chain-Intelligence
- Blog post: https://medium.com/p/1d5456793dad?postPublishedType=initial
