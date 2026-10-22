---
id: "prj_a16ba8"
team: "team blue"
title: "GraphRAG Benchmark: Token-Efficient Inference with TigerGraph"
round: "Round 1"
repo_url: "https://github.com/kartik2006-f/TIGERRAG/tree/main"
demo_url: "https://drive.google.com/file/d/1-_n_nSkC_1u21qUB4vsOB1eZiESjRz_7/view?usp=drivesdk"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

A high-performance benchmarking suite and interactive dashboard comparing Graph-based Retrieval-Augmented Generation (GraphRAG) against traditional RAG. Built with TigerGraph savanna and Gemini, this project demonstrates how GraphRAG significantly reduces LLM token consumption while achieving superior accuracy on complex, multi-hop reasoning tasks using the SEC EDGAR dataset.

## Dataset

* **Domain:** Corporate Finance & Regulatory Disclosures        * **Source:** [SEC EDGAR Database](https://www.sec.gov/edgar.shtml)

## Benchmark results

## 🏆 Benchmark Results Summary
We evaluated our pipeline across 3 methodologies using the **Gemini 1.5 Flash** model. Our results demonstrate that TigerGraph GraphRAG fundamentally outperforms traditional vector-based RAG:
* 📉 **Token Reduction:** **86.9% less context tokens** required (850 tokens for GraphRAG vs 6,500 tokens for Basic RAG).
* 💰 **Cost per Query:** **$0.00008** for GraphRAG compared to $0.00065 for Basic RAG.
* ⚡ **Latency:** **2.1s avg response time** for GraphRAG (56.2% faster than Basic RAG's 4.8s).
* 🎯 **Accuracy:** GraphRAG achieved a **94% LLM-as-a-Judge Pass Rate** and a **0.62 BERTScore F1**, blowing past the Basic RAG baseline (72% Pass / 0.41 F1) and significantly exceeding the hackathon targets.

## Links

- Live app: https://teamblue01.netlify.app/
- Blog post: https://medium.com/@kartiksaini9582936309/beyond-the-vector-dump-how-we-slashed-llm-tokens-by-86-using-tigergraph-graphrag-45156d3bb704
