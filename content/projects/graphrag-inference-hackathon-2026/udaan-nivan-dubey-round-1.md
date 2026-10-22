---
id: "prj_68ad1d"
team: "Udaan - Nivan Dubey"
title: "JustiFile — AI-Powered FIR Legal Analyzer"
round: "Round 1"
repo_url: "https://github.com/AdarshGit2001/Justifile"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:30+05:30"
---

JustiFile is a Next.js 15 web application that uses GraphRAG on TigerGraph to help police officers and legal professionals draft accurate FIRs. It takes a natural language complaint description, extracts entities (accused, victim, location, weapon, injury, etc.), and recommends applicable IPC/BNS sections with confidence scores, reasoning, hop depth, and landmark judgments — all powered by multi-hop graph traversal over a 50,000+ node legal knowledge graph.

## Dataset

Indian Legal domain — IPC (Indian Penal Code 1860), BNS (Bharatiya Nyaya Sanhita 2023), Arms Act 1959, and related Indian statutes. Data sourced from IndianKanoon, SCC Online case law, and official legislative texts. Dataset exceeds 1M tokens covering 60+ acts and landmark Supreme Court / High Court judgments.

## Benchmark results

GraphRAG uses 1,240 tokens per query at ~$0.0012 cost and 0.8s latency, achieving 96.8% section accuracy with a BERTScore F1 of 0.91. Basic RAG uses 3,820 tokens at ~$0.0038 and 2.4s latency with 71.2% accuracy and BERTScore F1 of 0.74. LLM-Only consumes 5,200 tokens at ~$0.0052 with 3.8s latency and ~65% judge pass rate. GraphRAG delivers 67% fewer tokens than Basic RAG, is 3× faster, has a 6.9× lower hallucination rate (1.8% vs 12.4%), and achieves 4.2-hop average reasoning depth compared to Basic RAG's flat 1-hop vector matching.
