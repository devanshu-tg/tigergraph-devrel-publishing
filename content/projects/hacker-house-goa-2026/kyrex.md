---
id: "prj_3c2832"
team: "Kyrex"
title: "Sentinel"
round: null
repo_url: "https://github.com/v4xsh/sentinel"
demo_url: "https://www.youtube.com/watch?v=JTeIDz8PVe8"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Notes from the team

Beyond the 20 cases, the repo includes a 150-case backtest, an out-of-time evaluation on 1,372 unseen cases (AUC 0.94), 15 extra alerts investigated in monitoring mode, and a test showing the policy engine reproduces the bank's SAR filing decision on all 4,665 past fraud cases. docs/SUBMISSION.md is a one-page guide to the repo.

## Details

- **LLM:** Google Gemini 3.5 Flash-Lite. It only writes the case summaries and SAR narratives; verdicts and actions come from a deterministic policy engine.
- **Agent framework:** LangGraph
- **TigerGraph deployment:** Savanna

## Links

- Technical blog: https://dev.to/vansh_dobhal_dda22820bf29/sentinel-an-agentic-fraud-investigator-on-tigergraph-c9n
