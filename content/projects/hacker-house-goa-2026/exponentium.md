---
id: "prj_a6fc02"
team: "Exponentium"
title: "FraudGraph Investigator"
round: null
repo_url: "https://github.com/Sakibimam/FraudGraph-Investigator"
demo_url: "https://www.youtube.com/watch?v=Cxw6vCJN0zw&t=11s"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:20:46+05:30"
---

## Notes from the team

Thanks for a well-designed challenge. The dataset's closed cases, policy and undocumented patterns made it feel like a real investigation, not a toy. Two notes on my submission: card IDs aren't a column in the data, so I rebuilt them from customer + card network (this matches 99.3% of the labelled IDs, and labels override the rest); and customer and step-up replies are simulated from the agent's posterior, with every assumption recorded in evidence_requests, as the README allows. Beyond the 20 cases, the agent also monitored November–December on its own and investigated 30 more cases (in monitor/). The repo includes tests, a stress test, an October back-test and a read-only hosted snapshot of the dashboard.

## Details

- **LLM:** Gemini 3.5 Flash-Lite(free tier) and local Qwen2.5 3B. Gemini (free tier) is tried first. When its free quota or rate limit runs out, the agent switches automatically to Qwen2.5 3B running locally through Ollama
- **Agent framework:** Custom Python agent, no external agent framework. It's an explicit state machine (trigger → investigate → assess uncertainty → gather evidence → decide → explain → update memory) that calls TigerGraph through the TigerGraph MCP server via the official MCP Python SDK. An LLM (Gemini 3.5 Flash-Lite with a local Qwen2.5 3B fallback on Ollama) chooses the next graph tool and writes explanations, while a policy engine written in code decides actions and approval routes. We built it custom so every decision is deterministic, auditable and policy-bound.
- **TigerGraph deployment:** Community Edition

## Links

- Live app: https://fraudgraph-investigato.vercel.app/
- Technical blog: https://medium.com/@lifeofsakib/from-a-noisy-risk-score-to-a-defensible-decision-building-a-fraud-investigation-agent-on-b9ef9a4907cb?sharedUserId=lifeofsakib
