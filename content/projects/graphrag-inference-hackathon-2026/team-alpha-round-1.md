---
id: "prj_5a1fcd"
team: "Team_Alpha"
title: "Does Graph Beat Tokens? Engineering a GraphRAG Benchmark on TigerGraph"
round: "Round 1"
repo_url: "https://github.com/kamisettysba2027-source/graphrag-inference-hackathon"
demo_url: "https://drive.google.com/file/d/1yL5RCSt0i4JRJlkG7enpf8vH-7huqutd/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

## Dataset

Type-2 Diabetes Drug Prediciton, PubMed

## Benchmark results

95 PubMed papers (~1M tokens), T2D drug interactions. All 3 pipelines use the
SAME LLM (gpt-4o-mini) — every difference is the retrieval architecture.

TOKEN REDUCTION (GraphRAG vs Basic RAG): ~95% overall (~58 vs ~1,273 tok/q);
69% on 3-hop (438 vs 1,424).

COST/QUERY: LLM-Only ~$0.00007 | Basic RAG ~$0.00021 | GraphRAG ~$0.00001 (lowest).

LATENCY: LLM-Only ~5.0s | Basic RAG ~3.7s | GraphRAG ~13.6s.

ACCURACY (Judge PASS % | BERTScore F1, 30 Qs):
LLM-Only 76.7% | 0.856   ·   Basic RAG 66.7% | 0.879   ·   GraphRAG 60.0% | 0.858

KEY FINDING: Complementary architectures. On 3-hop reasoning GraphRAG ties the
best accuracy (90%) at the lowest token cost and beats Basic RAG 90% vs 60%; Path B: tuned chunking, hop depth, retrieval
method + prompt via single-variable ablations.

## Links

- Live app: https://graphrag-inference-hackathon-pdtqvncbcctvdlqsacqlkr.streamlit.app/
- Blog post: https://dev.to/kamisettysba2027source/does-graph-beat-tokens-engineering-a-graphrag-benchmark-on-tigergraph-1omg
