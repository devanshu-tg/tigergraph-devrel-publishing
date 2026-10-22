---
id: "prj_c69f1a"
team: "Expelliarmus"
title: "PharmaIntel: GraphRAG‑Powered Inference Benchmark on Indian Pharmaceutical Data"
round: "Round 1"
repo_url: "https://github.com/sachithags/graphrag-inference-hackathon/"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

We built a three‑pipeline benchmark (LLM‑Only, Basic RAG with ChromaDB + MiniLM, and GraphRAG using TigerGraph Savanna) over a 2M+ token corpus of Wikipedia medical articles and CDSCO‑style Indian pharma triples. An interactive Streamlit dashboard compares token consumption, latency, cost, and accuracy metrics side‑by‑side. The project includes(main features):  an ROI cost projector, a hallucination resistance score, and a visual graph‑traversal explainability panel showing exactly how GraphRAG reasoned to each answer. Our results prove that GraphRAG delivers 60‑75% token reduction while maintaining higher factual accuracy than Basic RAG on multi‑hop medical questions.

## Dataset

Domain: Indian Pharmaceutical Regulatory & Global Medical Literature Sources: Wikipedia (medical articles via public API), Indian CDSCO‑style synthetic triples generated using LLM extraction, validated against real drug‑approval patterns.

## Benchmark results

Headline numbers :

Pipeline         | Avg Tokens | Avg Latency | Cost/Query | LLM‑Judge Pass | BERTScore F1
---------------------|--------------------|---------------------|-------------------|-----------------------------|-------------
LLM‑Only         | 3,847      | 1.42 s      | $0.00227   | 72%            | 0.48
Basic RAG        | 2,138      | 1.68 s      | $0.00126   | 84%            | 0.61
GraphRAG (Tiger) | 812        | 1.29 s      | $0.00048   | 91%            | 0.72

Token Reduction (GraphRAG vs Basic RAG): 62%
Token Reduction (GraphRAG vs LLM‑Only): 79%

Cost per query: GraphRAG is 79% cheaper than LLM‑Only, 62% cheaper than Basic RAG.
Accuracy: GraphRAG achieved 91% LLM‑Judge pass rate and 0.72 BERTScore F1 (rescaled).

## Links

- Live app: https://replica-enviable-outdated.ngrok-free.dev
- Blog post: https://dev.to/sachitha_srin_d4fba6/how-graphrag-cut-our-llm-token-costs-by-62-on-indian-pharma-data-43f9
