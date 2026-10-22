---
id: "prj_9ea415"
team: "Akansha Mishra"
title: "SanctionTrace: Graph-Grounded AML Compliance Copilot"
round: "Round 1"
repo_url: "https://github.com/AMSecretAgent/sanctiontrace"
demo_url: "https://drive.google.com/file/d/15T0_BNO0UuPUVRALNY6rW30HWJro-kev/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

An anti-money-laundering (AML) compliance copilot built on TigerGraph GraphRAG. Drop in a transaction, an entity name, or a free-text scenario; in 20 seconds, get back a SAR-ready case file with OFAC sanctions screening, multi-hop graph reasoning, regulatory citations from FinCEN/BSA/FATF sources, a risk score with explainable signals, and a draft SAR narrative an analyst can edit.

The hackathon claim says "GraphRAG beats vector RAG on multi-hop AML reasoning" is backed by a 40-question benchmark across 1-hop to 4-hop reasoning plus hybrid graph+text questions. Each answer is auditable through a Per-Question Explorer that shows every pipeline's response, judge verdict, BERTScore, and token usage side by side.

TigerGraph 4.2 Savanna (managed Cloud), Gemini 2.5 Flash-Lite, Streamlit, FastAPI-orchestrated GraphRAG inference service, a 3.4M-token AML corpus (FinCEN advisories, OFAC programs, BSA/USC sections, FATF guidance, historical case writeups), and 18,947 OFAC SDN entities indexed for fuzzy-match screening.

## Dataset

Domain: Anti-Money-Laundering (AML) compliance and sanctions screening.  Corpus (3.4M tokens): - FinCEN advisories and SAR Activity Reviews — fincen.gov/resources/advisories - OFAC sanctions program documentation and SDN List (CSV) — treasury.gov/ofac - Bank Secrecy Act and relevant US Code sections (Title 31 §5311–5336) — law.cornell.edu - FATF Recommendations and Mutual Evaluation reports — fatf-gafi.org - Historical money-laundering case studies (BCCI, Danske Bank, Panama Papers, 1MDB, HSBC, Wirecard, FTX-Alameda, etc.) — public DOJ filings, ICIJ reports, regulatory enforcement orders  Transactions (synthetic): PaySim mobile-money dataset (Kaggle) — ~6.3M transactions with isFraud labels for testing pattern-based detection.  OFAC matching: 18,947 SDN entities indexed locally via rapidfuzz for sub-second fuzzy match.

## Benchmark results

40 multi-hop AML questions. Scored by LLM-as-Judge (pass/fail) and BERTScore F1.

ACCURACY (LLM-Judge):
- LLM-only:  75.0% (30/40)
- Basic RAG: 37.5% (15/40)
- GraphRAG:  84.6% (33/39)

BERTSCORE F1:
- LLM-only:  0.076
- Basic RAG: 0.187
- GraphRAG:  0.315

LATENCY (avg):
- LLM-only:  4.71s
- Basic RAG: 2.59s
- GraphRAG:  16.25s

COST / QUERY:
- LLM-only:  $0.0002
- Basic RAG: $0.0003
- GraphRAG:  $0.0029

TOKEN REDUCTION (GraphRAG vs Basic RAG): -52% per correct answer (3,779 vs 7,799 tokens/correct).

GraphRAG = +126% accuracy and +68% BERT F1 vs Basic RAG.

## Links

- Live app: https://sanctiontrace.netlify.app/
- Blog post: https://medium.com/@mishakansha.01/my-first-time-building-with-tigergraph-graphrag-7df4b3054c9f
