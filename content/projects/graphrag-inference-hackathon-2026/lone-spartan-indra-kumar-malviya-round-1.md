---
id: "prj_75bc91"
team: "Lone Spartan/ Indra Kumar Malviya"
title: "Lone Spartan -GraphRAG: Token‑Efficient Threat Intelligence with TigerGraph"
round: "Round 1"
repo_url: "https://github.com/Mohamedzuhair17/graphrag-insight"
demo_url: "https://drive.google.com/file/d/1HP2rSuZNBIYsKb5RY0Xrx5Gw9UoP8U1y/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

"In the rapidly evolving world of cybersecurity, analyzing dense threat intelligence reports with massive LLMs is causing token consumption and inference costs to explode. Spartans-GraphRAG is a highly optimized, multi-pipeline benchmarking engine that proves the superiority of Graph-based Retrieval Augmented Generation. By leveraging TigerGraph's multi-hop reasoning capabilities alongside Llama 3.3 70B, our system maps complex cybersecurity entities (CVEs, Threat Actors, Mitigations) into a cohesive knowledge graph.

Our interactive Streamlit dashboard runs three distinct pipelines side-by-side: an LLM-Only baseline, a LanceDB-powered Basic RAG, and TigerGraph's GraphRAG. The results demonstrate that Spartans-GraphRAG drastically reduces token consumption and API costs by filtering out irrelevant context, all while maintaining a >90% accuracy pass rate and superior BERTScore compared to industry-standard vector search."

## Dataset

https://arxiv.org/

## Benchmark results

Benchmark Results Summary:
Token Reduction % (GraphRAG vs Basic RAG):

44.0% reduction in total tokens per query (GraphRAG used 598 tokens vs Basic RAG's 1,068 tokens).
Cost per query for each pipeline:

LLM-Only: $0.00017
Basic RAG: $0.00026
GraphRAG: $0.00016 (37.9% cheaper than Basic RAG and the cheapest overall)
Latency (Average Response Time):

LLM-Only: 1.37 seconds
Basic RAG: 1.90 seconds
GraphRAG: 1.49 seconds (0.41 seconds faster than Basic RAG)
Accuracy (LLM-as-a-Judge Pass Rate + BERTScore F1):

LLM-Only: 62.5% Pass Rate | 67.5% BERTScore F1
Basic RAG: 74.7% Pass Rate | 79.3% BERTScore F1
GraphRAG: 78.9% Pass Rate | 84.6% BERTScore F1 (GraphRAG outperformed Basic RAG by +4.2pp in Pass Rate and +5.3pp in BERTScore F1)

## Links

- Live app: https://graphrag-insight.vercel.app/
- Blog post: https://dev.to/indra_20/spartans-graphrag-token-efficient-threat-intelligence-with-tigergraph-4pfk
