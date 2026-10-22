---
id: "prj_ffbc2d"
team: "RAGnarok"
title: "GraphRAG Benchmark: Proving Graph-Based Retrieval at Scale"
round: "Round 1"
repo_url: "https://github.com/VedantDhavan/graphrag-benchmark"
demo_url: "https://drive.google.com/file/d/18w-vi6ImKiVGs3gb7oMOCJH86Ink114p/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

A production-grade benchmarking platform that compares LLM-only, Basic RAG, and NetworkX-based GraphRAG on a 2 million token corpus of scientific papers. The system measures token usage, latency, cost, and answer accuracy using LLM-as-a-Judge and BERTScore, and presents results in an interactive dashboard. Built with Next.js, FastAPI, ChromaDB, and NetworkX, the project demonstrates that graph-structured retrieval and multi-hop reasoning can outperform traditional retrieval approaches while remaining lightweight, reproducible, and easy to deploy.

## Dataset

Dataset Domain: Scientific Research Papers (Artificial Intelligence, Machine Learning, and Computer Science)  Dataset Source: Hugging Face dataset: armanc/scientific_papers (arXiv configuration)  Dataset Description: A curated corpus of long-form scientific papers containing structured technical content such as abstracts, sections, methods, datasets, and experimental results. Approximately 2,000,000 tokens were sampled from the arXiv split to create a benchmark corpus rich in entities and relationships, making it ideal for evaluating multi-hop reasoning and graph-based retrieval.  Dataset Link: Hugging Face - armanc/scientific_papers

## Benchmark results

**Benchmark Results Summary (2M Token Scientific Papers Corpus)**

| Metric                   | LLM-Only | Basic RAG | GraphRAG (NetworkX) |
| ------------------------ | -------: | --------: | ------------------: |
| Average Tokens per Query |   ~3,200 |      ~640 |                ~316 |
| Average Cost per Query   | ~$0.0096 |  ~$0.0019 |           ~$0.00095 |
| Average Latency          |  ~6.23 s |   ~2.85 s |             ~1.22 s |
| LLM-as-a-Judge Pass Rate |      82% |       89% |                 94% |
| BERTScore F1 (Rescaled)  |     0.57 |      0.64 |                0.71 |

**Headline Improvements**

* **Token Reduction (GraphRAG vs Basic RAG): ~50.6%**
* **Token Reduction (GraphRAG vs LLM-Only): ~90.1%**
* **Cost Reduction (GraphRAG vs Basic RAG): ~50%**
* **Cost Reduction (GraphRAG vs LLM-Only): ~90%**
* **Latency Reduction (GraphRAG vs Basic RAG): ~57.2%**
* **Latency Reduction (GraphRAG vs LLM-Only): ~80.4%**
* **Accuracy Gain (GraphRAG vs Basic RAG):**

  * +5 percentage points in LLM-as-a-Judge pass rate
  * +0.07 BERTScore F1

**Key Conclusion**
GraphRAG achieved the best overall performance by cutting token usage, cost, and latency significantly while also delivering the highest answer accuracy. This demonstrates that graph-structured retrieval and multi-hop reasoning outperform both direct LLM prompting and standard vector-based RAG on large scientific corpora.

## Links

- Live app: https://graphrag-benchmark.vercel.app/
- Blog post: https://dev.to/vedantdhavan/graphrag-benchmark-a-2-million-token-comparison-of-llm-only-basic-rag-and-graphrag-16ph
