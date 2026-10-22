---
id: "prj_e3d5d8"
team: "AlgoRhythms"
title: "Fraudgraph"
round: null
repo_url: "https://github.com/AKRai-2005/fraudgraph"
demo_url: "https://youtu.be/eJTAnfc5e1g"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Notes from the team

Two things we would rather you hear from us than discover.

We publish no accuracy figure for the 20 cases — we do not have the key, and no estimate appears anywhere in the repo. What we did instead is replay the agent over the 5,565 closed investigations that do have outcomes, with case memory and every forward-looking transaction window clamped to the moment each case opened. Under a neutral prior it caught all nine undocumented-typology frauds in the dataset from graph structure alone, at 7 false fraud calls in 300 of the hardest negatives; at the exam's own operating point, zero false fraud calls. An earlier version of that backtest leaked, which inflated a secondary number (AUC 0.718); we found it, fixed it, and the corrected 0.691 is in docs/BACKTEST.md along with the withdrawal.

The Live UI URL is a static export on GitHub Pages: all 20 cases, evidence, graphs, policy and the backtest are browsable, but live investigation and approvals need the agent running locally, and the page says so. The demo video shows the live version.

Everything runs on free tiers (₹0). Nothing reaches a real financial system: every action is simulated, and L1/L2 actions wait for a named approver.

## Details

- **LLM:** Google Gemini (gemini-flash-lite-latest, free tier) — narration only. Verdicts, probabilities, patterns, actions, approval routes and SAR decisions are computed in code; an LLM rewrite is rejected if it introduces an id, amount or date not in the retrieved evidence.
- **Agent framework:** None — a custom Python orchestrator (src/fraudgraph/agent/orchestrator.py). Graph access through one 17-query catalogue implemented by three backends: TigerGraph MCP (tigergraph-mcp), pyTigerGraph, and a local pandas mirror. FastAPI + vanilla JS for the console.
- **TigerGraph deployment:** Savanna

## Links

- Live app: https://akrai-2005.github.io/fraudgraph/
- Technical blog: https://dev.to/ashutosh_kumarrai_6335bf/our-fraud-classifier-scored-0963-auc-we-threw-it-away-1cl5
