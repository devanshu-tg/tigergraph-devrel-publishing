---
id: "prj_bb58a6"
team: "Bhuvaneshwari D"
title: "CyberGraph RAG"
round: "Round 1"
repo_url: "https://github.com/bhuvi-d/CyberGraph"
demo_url: "https://drive.google.com/file/d/1JU0CljWylGltKmSKbguGVRhIQ8GYVKgT/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

CyberGraph RAG :  Cybersecurity Threat Intelligence Benchmarking Platform( With TigerGraph and Gemini )

CyberGraph is a cybersecurity-focused GraphRAG benchmarking platform comparing LLM-only, Basic RAG, and TigerGraph GraphRAG on real threat intelligence data.

Built using TigerGraph and Gemini, the system uses graph relationships instead of large text chunks to retrieve more focused and explainable cybersecurity context involving CVEs, malware, threat actors, and attack techniques.

With a 3.5M+ token dataset and interactive graph visualizations, CyberGraph demonstrates how GraphRAG can reduce token usage, improve retrieval quality, and deliver faster multi-hop threat intelligence reasoning.

## Dataset

Domain: Cybersecurity Threat Intelligence focused on threat actors, CVEs, malware, attack techniques, and attack-chain analysis.  Sources Used:  MITRE ATT&CK Enterprise M

## Benchmark results

Benchmark Results Summary

1. Token Reduction (GraphRAG vs Basic RAG):
   ~46.5% average reduction in prompt token usage.

2. Cost Per Query:

* LLM-Only: $0.000071
* Basic RAG: $0.000096
* TigerGraph GraphRAG: $0.000051 (~46.8% lower than Basic RAG)

3. Average Latency:

* LLM-Only: 10.15s
* Basic RAG: 6.45s
* TigerGraph GraphRAG: 3.80s (~62.5% faster)

4. Accuracy:
   LLM-as-a-Judge Pass Rate

* LLM-Only: 20%
* Basic RAG: 60%
* GraphRAG: 100% (avg. 4.85/5)

BERTScore F1

* LLM-Only: 0.7102
* Basic RAG: 0.8405
* GraphRAG: 0.9324 (~11% higher semantic precision)

## Links

- Live app: https://cybergraph-rag-915854891523.us-central1.run.app/
- Blog post: https://dev.to/bhuvi_d/how-we-built-cybergraph-rag-a-35m-token-cybersecurity-graphrag-system-with-tigergraph-5eon
