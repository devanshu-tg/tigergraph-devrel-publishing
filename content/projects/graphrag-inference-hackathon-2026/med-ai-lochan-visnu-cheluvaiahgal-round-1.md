---
id: "prj_de153a"
team: "MED-AI / Lochan Visnu Cheluvaiahgal"
title: "MED-AI: Tri-Pipeline GraphRAG Architecture"
round: "Round 1"
repo_url: "https://github.com/Lochan-Visnu/GraphRAG-Hackathon-MED-AI"
demo_url: "https://drive.google.com/file/d/1eF7Ahm6laaiajQhQDBlMzY-m1IrczWZJ/view?usp=drivesdk"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

The core objective of this project is to prove a single thesis: Graphs make LLM inference faster, cheaper, and smarter than basic RAG alone. To demonstrate this, MED-AI engineered a concurrent, multi-threaded Tkinter dashboard that forces three distinct AI architectures to compete side-by-side on a massive medical dataset (2M+ tokens). The system tracks latency, token consumption, financial cost, and factual accuracy in real-time.

## Dataset

Wikimedia - Medical datasets extraction

## Benchmark results

We benchmarked three AI inference pipelines against a dense medical symptom dataset using a custom Python tkinter GUI dashboard, validating accuracy via Hugging Face metrics (BERTScore & LLM-as-a-Judge).

Pipeline 1: LLM-Only Baseline

Avg. Tokens: 55 | Cost/1k: $0.15 | Latency: 0.8s

Accuracy: Low (Fails frequently due to no external context)

Hallucinations/1k: 150

Pipeline 2: Basic Vector RAG

Avg. Tokens: 21,500 (Massive context window bloating)

Cost/1k: $58.20 | Latency: 12.5s (High chunk-processing overhead)

Accuracy: Moderate (BERTScore: 0.58 | Pass Rate: ~70%)

Hallucinations/1k: 85 (Confused by overlapping text descriptions)

Pipeline 3: TigerGraph GraphRAG (Our Solution)

Avg. Tokens: 2,300 (89% reduction vs. Vector RAG)

Cost/1k: $6.10 (90% cost savings)

Latency: 1.9s (84% faster generation vs. Vector RAG)

Accuracy: Exceptional (BERTScore: 0.91 | Pass Rate: 98%)

Hallucinations/1k: 3 (Highly hallucination-resistant)

Reasoning: True 4–9 multi-hop traversal along explicit data edges

## Links

- Live app: https://github.com/Lochan-Visnu/GraphRAG-Hackathon-MED-AI
- Blog post: https://dev.to/likhitha_m_4ace61f190b3f8/tiger-graph-hackathon-2p1i
