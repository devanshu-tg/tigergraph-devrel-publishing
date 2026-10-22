---
id: "prj_84d30a"
team: "Madhvi Rathore"
title: "Bayerische Motoren Werke"
round: "Round 1"
repo_url: "https://github.com/madhvirathor14/bayerische-motoren-werke"
demo_url: "https://youtu.be/u3bTFkxMxEY"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

Bayerische Motoren Werke — GraphRAG Inference Engine                                                                 The Problem We Solved

Traditional LLMs burn through thousands of tokens answering luxury car questions.

Every query = more tokens = more cost = slower responses.

We built GraphRAG — a knowledge graph approach that gives LLMs exactly what they need, nothing more.

User: "Compare BMW M5 and Ferrari F8 Tributo"

LLM Only    → 2,847 tokens  😰  $0.0086  ████████████████████
Basic RAG   → 1,894 tokens  😐  $0.0057  █████████████
GraphRAG    →   568 tokens  🚀  $0.0017  ████           ← WE ARE HERE
Same answer quality. 80% fewer tokens. 60% cheaper.

🏗️ Architecture
┌─────────────────────────────────────────────────────────────┐
│                    USER QUERY                               │
│              "Compare BMW M5 vs Ferrari F8"                 │
└──────────────────────┬──────────────────────────────────────┘
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
   ┌──────────┐  ┌──────────┐  ┌──────────────────┐
   │PIPELINE 1│  │PIPELINE 2│  │   PIPELINE 3     │
   │ LLM Only │  │Basic RAG │  │   GraphRAG ⭐    │
   └──────────┘  └──────────┘  └──────────────────┘
        │              │                │
        │         Vector Search    Knowledge Graph
        │         (BM25+BERT)      (TigerGraph)
        │              │                │
        ▼              ▼                ▼
   Full Prompt    Chunk-based      Entity-based
   2,847 tokens   1,894 tokens     568 tokens
        │              │                │
        └──────────────┴────────────────┘
                       │
              ┌────────▼────────┐
              │   GROQ API      │
              │  LLaMA 3.1 8B  │
              └────────┬────────┘
                       │
              ┌────────▼────────┐
              │  STREAMLIT      │
              │  DASHBOARD      │
              │  Real-time      │
              │  Comparison     │
              └─────────────────┘
📊 Results That Speak
Metric	LLM Only	Basic RAG	GraphRAG	Improvement
🎯 Tokens/Query	2,847	1,894	568	-80%
⚡ Latency	5.43s	2.39s	1.28s	-76%
💰 Cost/Query	$0.000258	$0.000181	$0.000017	-93%
🎓 Answer Quality	Good	Great	Great	Maintained
📈 Token Efficiency	1x	1.5x	5x	500%
🚗 Knowledge Graph — Car Database
Our TigerGraph database contains 26 luxury cars across 8 prestigious brands:

🏎️ BMW          → M5, M3, X7, 7 Series, i8
🐎 Ferrari       → F8 Tributo, SF90 Stradale, Roma  
🐂 Lamborghini   → Aventador, Huracán, Urus
🦅 Porsche       → 911, Taycan, Panamera
⭐ Mercedes-Benz → AMG GT, S-Class, G-Class
👑 Rolls-Royce   → Phantom, Ghost, Cullinan
💎 Bentley       → Continental GT, Mulsanne
🦁 McLaren       → 720S, Senna, Artura

## Dataset

Luxury Car Knowledge Graph - 26 cars across 8 prestigious brands (BMW, Ferrari, Lamborghini, Porsche, Mercedes-Benz, Rolls-Royce, Bentley, McLaren). Stored in TigerGraph with MANUFACTURES and COMPETES_WITH relationships.

## Benchmark results

Tokens/Query:   2,847 | 1,894 | 568       → -80% reduction
Latency:        5.43s | 2.39s | 1.28s     → -76% faster
Cost/Query:     $0.000258 | $0.000181 | $0.000017  → -93% cheaper
Answer Quality: Good  | Great | Great     → Maintained
Token Efficiency: 1x  | 1.5x  | 5x       → 500% improvement

GraphRAG achieves 80% token reduction and 93% cost savings vs Basic RAG
while maintaining answer quality using TigerGraph knowledge graph with
26 luxury cars across 8 brands.

## Links

- Live app: https://huggingface.co/spaces/madhvirathor14/bayerische-motoren-werke
- Blog post: https://x.com/MadhviRath97557/status/2055940488939852122?s=20
