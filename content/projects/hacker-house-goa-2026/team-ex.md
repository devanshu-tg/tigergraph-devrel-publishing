---
id: "prj_86411e"
team: "Team Ex"
title: "Fraudlens Tigergraph"
round: null
repo_url: "https://github.com/samarthputhraya/fraudlens-tigergraph"
demo_url: "https://youtu.be/hMCUqjbN9js?si=wJPxXt_Av67RlP4x"
placement: "Selected for Hacker House Goa"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Notes from the team

All 20 answer files were produced live on TigerGraph Savanna through the official MCP server, and each investigation is written back to the graph as case memory. That memory is as-of: no case can recall itself or a case opened later. The fraud probability starts from a transaction model trained only on the bank's closed cases. On the October hold-out it scores AUC 0.973, against 0.866 for the bank's own risk score. Replayed on 498 October closed cases, the agent names the pattern correctly 91% of the time and matches the bank's SAR decisions 81% of the time. An autonomous monitor opened 16 more cases on its own (cases_autonomous/), and every claim in every answer carries a GSQL query anyone can re-run. The README maps each requirement to the code that meets it.

## Details

- **LLM:** Gemini 3.1 Pro (gemini-3.1-pro-preview) for the Lead Investigator, Compliance Reviewer and Writer; Gemini 3.5 Flash for the four specialist agents; Vertex AI text-embedding-005 for TigerVector embeddings. All on Google Vertex AI. Plus our own LightGBM transaction model trained on the closed cases.
- **Agent framework:** LangGraph (multi-agent StateGraph), with the official TigerGraph MCP server (tigergraph-mcp, read-only tool allowlist) for all graph queries, pyTigerGraph for case-memory write-back, and a FastAPI + React command center
- **TigerGraph deployment:** Savanna

## Links

- Technical blog: https://dev.to/rishabh_arun_c17a00aa9bf3/the-model-predicts-tigergraph-proves-building-an-agentic-fraud-investigator-on-a-graph-5325
