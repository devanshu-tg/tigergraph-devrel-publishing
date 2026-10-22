---
id: "prj_04fd52"
team: "Lowkey Sentient"
title: "Graph-Native Agentic Fraud Investigation System (HHGOA)"
round: "Round 1"
repo_url: "https://github.com/Vikas-93257/tigergraph-fraud-agent"
demo_url: "https://youtu.be/QEq3ZpKoV4g"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

We built a LangGraph workflow for investigating card-fraud alerts using TigerGraph, with a local pandas/TF-IDF fallback. It gathers transaction, card-history, device and case evidence; retrieves similar cases and policy/typology text; assigns signed evidence weights; and produces initial and final next-best-action recommendations with approval routing. The repo includes a FastAPI investigator console, MCP server code, case-memory writes, setup instructions, an architecture diagram, and 20 case outputs with traces. Customer-validation and step-up responses are currently deterministic simulations, and SAR narratives are drafts requiring analyst verification. This repository does not currently show a three-pipeline comparison, a comparative metrics dashboard, or results for 100 visible plus 50 hidden questions.

## Details

- **LLM:** gpt-4o-mini
- **Vector database:** TigerVector (native to TigerGraph Savanna 4.2.5); local fallback: TF-IDF
- **Graph backend:** TigerGraph Savanna 4.2.5
- **Average agent steps per question:** 14.1
- **Retrieval methods:** GSQL graph traversal (card timeline via NEXT/PREV, card history, device neighbors and region history); customer prior-case lookup; recurring-charge and small-authorization analysis; cross-customer pattern-peer scans; TigerVector similarity search for cases and policy/typology chunks (TF-IDF fallback when vectors are unavailable).

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | Not available | Not available | Not measured against verified gold labels |
| Tokens per query | Not available | Not available | 0 |
| Latency | Not available | Not available | 1.27 |

## Links

- Blog post: https://medium.com/@saxena.adhipatya25/an-investigator-not-a-classifier-building-a-graph-native-fraud-agent-on-tigergraph-0becd4c5b299
