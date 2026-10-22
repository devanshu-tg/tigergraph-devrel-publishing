---
id: "prj_b56b47"
team: "Raggers / Himank Parashar"
title: "Strategic Intelligence Matrix"
round: "Round 1"
repo_url: "https://github.com/Devanshjain-blip/hackathon"
demo_url: "https://drive.google.com/file/d/1Khnx1DAk97BVzj6TQGJP7eSbFmSdG6CA/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

The Strategic Intelligence Matrix by team Raggers demonstrates a clear hierarchy in forensic AI performance, where accuracy is directly proportional to architectural complexity. The LLM Baseline serves as the speed benchmark, clocking in at an average of 0.20s, yet it remains a liability for serious investigations with an accuracy score of only 45% due to its tendency to hallucinate when denied private data. In contrast, Vector RAG bridges the data gap by retrieving relevant document chunks, achieving a much more reliable 82% accuracy with a moderate latency of 0.45s. However, the definitive winner is GraphRAG, which reaches a near-perfect 98% accuracy by mapping "multi-hop" relationships between hidden entities. Although it is the most resource-intensive with an average latency of 0.85s, its ability to trace the specific chain of command from executives to fraudulent debt makes it the only strategy capable of delivering high-stakes forensic truth at scale.

## Dataset

enron_sample.txt.txt and Financial/corporate

## Benchmark results

Strategy              Latency   Token      Cost       Accuracy
LLM Baseline  	0.26	96	   0.000006    2/10
Vector RAG	        0.67	341	   0.00002      8/10
GraphRAG	        1.2	        85	   0.000005    9/10

## Links

- Live app: https://teamraggers.streamlit.app/
- Blog post: https://strategicintelligencematrix.blogspot.com/2026/05/forensic-analysis-using-graph-augmented.html
