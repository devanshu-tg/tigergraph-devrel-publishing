---
id: "prj_3314ef"
team: "Riseon"
title: "GraphRAG vs Basic RAG vs LLM-only on U.S. Case Law"
round: "Round 2"
repo_url: "https://github.com/maithili39/graphrag"
demo_url: "https://drive.google.com/file/d/1B-jvhxadNEpiuzeKnLaJARJd4LK_u_-C/view?usp=drive_link"
placement: "1st place – Round 2"
prize: null
image_url: null
updated_at: "2026-10-14T19:30:07+05:30"
---

Legal questions are naturally multi-hop: a doctrine originates in case A, is applied in case B, and is distinguished in case C — connected by real citations. We built a knowledge graph of 63,632 U.S. court opinions (117.5M tokens, Gemini-verified) in TigerGraph, with 9,632 real citation edges (CITES) and 1,413 courts (DECIDED_BY), and compared three pipelines on 55 multi-hop questions built from actual in-corpus citation chains: LLM-only (no retrieval), Basic RAG (FAISS flat similarity over 500K chunks), and GraphRAG (live GSQL multi-hop traversal over citation edges).

Under a single strict LLM-as-a-Judge (Gemini, no fallback, no auto-pass, errors counted as FAIL), GraphRAG passes 50.9% vs Basic RAG 9.1% and LLM-only 1.8% — a 5.6× advantage — while using 37.8% fewer tokens than Basic RAG (1,423 vs 2,288 avg, equal 512-token output caps). The clearest proof is 3-hop questions: GraphRAG 40.0% vs Basic RAG 0.0% — flat chunk similarity structurally cannot assemble a three-case citation chain; graph traversal can. BERTScore agrees: 0.841 (GraphRAG) vs 0.807 (Basic RAG) vs 0.787 (LLM-only).

Every GraphRAG answer reads the live graph on every call — no snapshots, no curated subsets; retrieval misses are scored as failures. A live React dashboard runs all three pipelines side by side with per-question judge verdicts, token counts, latency, cost, and BERTScore.

Live demo: https://graphrag-dashboard.vercel.app · API: https://maithili39-graphrag-legal-api.hf.space

## Dataset

Domain: U.S. case law - judicial opinions from state and federal courts (criminal procedure, civil/contract/property, constitutional and family law).

Source: The courtlistener_opinions split of the Pile of Law dataset (HuggingFace), which aggregates public CourtListener data from the Free Law Project. Corpus: 63,632 opinions, 117.5M tokens (verified via Gemini count_tokens, receipt in data/token_count_official.json).

Citation edges: built from CourtListener's public citation-map bulk data, filtered to the 9,632 edges where both endpoints are in-corpus. Case metadata (name, court, year) parsed with eyecite + courts-db (Free Law Project).

Licensing: the underlying opinion text is public domain (government edict doctrine, Georgia v. Public.Resource.Org, 2020); Pile of Law's compiled artifact is CC-BY-NC-SA-4.0, consistent with this non-commercial competition use.

## Details

- **LLM:** Gemini 2.5 Flash (same model for all three pipelines: LLM-only, RAG, GraphRAG and also the LLM-as-a-Judge)
- **Vector database for RAG:** FAISS (faiss-cpu) v1.13.2
- **Token reduction, GraphRAG vs RAG (%):** 37.8

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 609 | 2288 | 1423 |
| Cost per query | 0.000309 | 0.000458 | 0.000318 |
| Latency | 4.55 | 3.67 | 7 |
| LLM-as-judge pass % | 1.8 | 9.1 | 50.9 |
| BERTScore F1 | 0.0736 | 0.1694 | 0.3364 |

## Links

- Live app: https://graphrag-dashboard.vercel.app
- Blog post: https://medium.com/@yashdharme6/nobody-talks-about-token-cost-until-its-too-late-57ce7851afea
