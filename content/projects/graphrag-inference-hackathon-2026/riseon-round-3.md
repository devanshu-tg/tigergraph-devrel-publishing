---
id: "prj_fb5a4d"
team: "Riseon"
title: "Optimized TigerGraph GraphRAG for SEC Filings, Cutting Tokens While Raising Accuracy"
round: "Round 3"
repo_url: "https://github.com/Yash11778/sp100-GraphRAG.git"
demo_url: "https://drive.google.com/file/d/1lWObvWm6E5JeINGdWFe6ywAHs4VOpMld/view?usp=sharing"
placement: "Finalist – Round 3"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

A three-pipeline benchmark showing that a TigerGraph-powered GraphRAG answers S&P-100 SEC-filing questions 62% correctly vs 15% for traditional RAG - using 45% fewer tokens.

## Details

- **LLM:** Gemini 2.5 Flash (gemini-2.5-flash) - same model for all three (LLM-only, RAG, GraphRAG).
- **Vector database for RAG:** FAISS (faiss-cpu) v1.14.3
- **Token reduction, GraphRAG vs RAG (%):** 45.5

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 455 | 2182 | 1190 |
| Cost per query | $0.000239 per query | $0.000351 per query | $0.000195 per query |
| Latency | 2.94s | 1.20s | 1.70s |
| LLM-as-judge pass % | 10.00% | 15.30% | 62.00% |
| BERTScore F1 | -0.2439 | -0.0266 | 0.219 |

## Links

- Live app: https://graphrag-dashboard-blue.vercel.app
- Slides: https://drive.google.com/drive/folders/1Zjtj2kei1tx5fIE0hVb92NLcag68KiaP?usp=sharing
