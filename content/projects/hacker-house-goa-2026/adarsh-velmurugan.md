---
id: "prj_99c335"
team: "Adarsh Velmurugan"
title: "Tigergraph Fraud Agent"
round: null
repo_url: "https://github.com/adarshoff/tigergraph-fraud-agent"
demo_url: "https://drive.google.com/file/d/1RW0DGkmAhJe9UGi244u27cCDNa8A3afG/view?usp=sharing"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Notes from the team

The agent returns 11 fraud, 8 legitimate and 1 uncertain across the 20 cases, with reports filed on two. Two of the patterns it identified are not in the bank's documented set: a 20-card device ring behind an anonymous proxy ($3,778.14), and a structuring sequence of four sub-$500 charges inside 30 minutes ($1,906.07), each matched back to closed cases with the same signature.

All decisions come from a deterministic policy engine (agent/policy.py, 71 tests) rather than the LLM, so every verdict is reproducible and auditable — the UI shows the exact log-odds contribution of each piece of evidence. L1/L2 actions require human approval, written back onto the InvestigationCase in the graph.

## Details

- **LLM:** openai/gpt-oss-120b
- **Agent framework:** LangGraph
- **TigerGraph deployment:** Savanna

## Links

- Technical blog: https://medium.com/@theadarsh.ai/the-model-scored-the-fraud-ring-0-05-the-graph-caught-it-anyway-9547d590a3cf?sharedUserId=theadarsh.ai
