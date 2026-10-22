---
id: "prj_28be8f"
team: "velocity"
title: ". ArXiv Trend Analyzer"
round: "Round 1"
repo_url: "https://github.com/tej949/TigerGraph.git"
demo_url: "https://github.com/tej949/TigerGraph.git"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

A machine learning platform that tracks trending AI research topics from ArXiv and provides insights, summaries, and technology evolution analysis.

LLM Research Assistant

Description:
An intelligent assistant that helps users understand AI/ML papers through summarization, question answering, and visual explanations powered by Large Language Models.

## Benchmark results

# Benchmark Results Summary

## Pipelines Evaluated

1. LLM-Only Pipeline
2. Basic RAG Pipeline
3. GraphRAG Pipeline

---

## 1. Token Usage Comparison

| Pipeline  | Avg Tokens / Query | Reduction vs Basic RAG |
| --------- | ------------------ | ---------------------- |
| LLM-Only  | 5,420              | —                      |
| Basic RAG | 4,180              | —                      |
| GraphRAG  | 2,730              | **34.7% Reduction**    |

### Insight

GraphRAG significantly reduced token consumption by retrieving more contextually relevant and connected information through graph-based retrieval.

---

## 2. Cost Per Query

| Pipeline  | Avg Cost / Query |
| --------- | ---------------- |
| LLM-Only  | $0.028           |
| Basic RAG | $0.021           |
| GraphRAG  | $0.013           |

### Insight

Due to lower token utilization and efficient retrieval, GraphRAG achieved the lowest operational cost per query.

---

## 3. Latency (Average Response Time)

| Pipeline  | Avg Latency |
| --------- | ----------- |
| LLM-Only  | 5.8 sec     |
| Basic RAG | 4.3 sec     |
| GraphRAG  | 3.6 sec     |

### Insight

GraphRAG improved response efficiency by reducing irrelevant retrieval chunks and minimizing unnecessary context processing.

---

## 4. Accuracy Evaluation

### LLM-as-a-Judge Pass Rate

| Pipeline  | Pass Rate |
| --------- | --------- |
| LLM-Only  | 71%       |
| Basic RAG | 84%       |
| GraphRAG  | 92%       |

---

### BERTScore F1

| Pipeline  | BERTScore F1 |
| --------- | ------------ |
| LLM-Only  | 0.81         |
| Basic RAG | 0.88         |
| GraphRAG  | 0.94         |

### Insight

GraphRAG achieved the highest semantic accuracy and reasoning quality due to improved entity relationships and multi-hop retrieval.

---

# Overall Conclusion

GraphRAG outperformed both LLM-Only and Basic RAG pipelines across all benchmark metrics:

* Lower token consumption
* Reduced query cost
* Faster response latency
* Higher semantic accuracy
* Better reasoning performance

The graph-based retrieval mechanism enabled more precise context selection, making GraphRAG highly suitable for enterprise-scale AI retrieval systems and knowledge-intensive applications.

## Links

- Live app: https://github.com/tej949/TigerGraph.git
- Blog post: https://github.com/tej949/TigerGraph.git
