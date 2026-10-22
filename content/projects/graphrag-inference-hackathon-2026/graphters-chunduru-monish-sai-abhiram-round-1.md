---
id: "prj_fb0711"
team: "Graphters/Chunduru Monish Sai Abhiram"
title: "CrystalRAG: High-Fidelity Materials Discovery via GraphRAG"
round: "Round 1"
repo_url: "https://github.com/Monish102006/materials-science-graphrag"
demo_url: "https://drive.google.com/file/d/1w198O8fmI4BkNw1fnCAanwOHWh3aaE2n/view?usp=drivesdk"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

A side-by-side benchmarking pipeline utilizing TigerGraph to prove that multi-hop knowledge retrieval significantly reduces token cost and LLM hallucinations in materials science research compared to traditional Vector RAG

## Dataset

Domain: Materials Science (Condensed Matter Physics)

## Benchmark results

Token Reduction

GraphRAG vs Basic RAG: 19.0% reduction in tokens used per query (853.9 avg tokens vs 1,054 avg tokens).
Cost Per Query (Groq LLaMA 3.3 70B)

Raw LLM: $0.00023
Basic RAG: $0.000727
GraphRAG: $0.000589 (19% cheaper than Basic RAG)
Latency (Average Response Time)

Basic RAG: 1.03 seconds
Raw LLM: 1.89 seconds
GraphRAG: 8.52 seconds (Slower due to multi-hop network traversals across TigerGraph, but highly optimized for accuracy).
Accuracy (LLM-as-a-Judge Pass Rate & BERTScore F1)

GraphRAG: 55.6% Pass Rate | 0.4107 BERTScore F1 (Winner)
Raw LLM: 36.4% Pass Rate | 0.3211 BERTScore F1
Basic RAG: 27.3% Pass Rate | 0.3179 BERTScore F1 (Struggled significantly with multi-hop materials science concepts)

## Links

- Live app: https://materials-science-graphrag-gwybuheo9ghvyou8tbnuav.streamlit.app/
- Blog post: https://medium.com/@monishchunduru/we-pitted-graphrag-against-vector-rag-on-2-7-9dbbdb9a34d3
