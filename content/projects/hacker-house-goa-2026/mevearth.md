---
id: "prj_4daf3f"
team: "Mevearth"
title: "Redthread"
round: null
repo_url: "https://github.com/KunalSewal/redthread"
demo_url: "https://drive.google.com/file/d/1DOsH30lh_01P5hcZlMjK-pBYPBfr04xK/view?usp=sharing"
placement: "Selected for Hacker House Goa"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Notes from the team

RedThread treats the LLM as an investigator, not a judge. The model chooses which queries to run and judges what each finding means; GSQL finds the facts, a policy engine decides the actions and approval routes, and the probability is auditable arithmetic you can take apart line by line in the UI.

We held it to strict rules: nothing after the alert is ever visible to an investigation, every starting probability is measured from the bank's own history, nothing is counted twice, and the agent reads back only cases a person has ruled on. All 20 answers pass schema and policy audits and are written to the graph as case memory.

Beyond the 20, the agent monitored November and December on its own and raised 25 alerts the bank's queue never did, catching 9 frauds, 7 of them among alerts the bank had scored below 0.30. It also surfaced an undocumented pattern: one device profile, new to every account and behind an anonymous proxy, across 20 cards.

We can't wait to take it further in Goa. Waiting for the invite :)

3-5 MINUTES IS TOO LESS TO EXPLAIN WHAT I BUILT 😭😭😭, PLEASE BEAR WITH THE 10 MINS ONE (had to rush it as well and missed a lot of stuff). Please check out the Blog we wrote and the readme as well, a lot more details are present there as well.
Thanks 😊

## Details

- **LLM:** Gemini 3.8 Flash (gemini-3.8-flash, thinking level high) for reasoning, tool selection, evidence judgement and explanations. BAAI/bge-small-en-v1.5 (384-dimension) embeddings stored in TigerVector for GraphRAG. The model never does arithmetic, picks approval routes or sets probabilities: those are deterministic code.
- **Agent framework:** LangGraph (a state-machine workflow: intake, evidence gathering, LLM-directed investigation, assessment, policy decision, evidence request, re-decision, report, write-back). The agent's only tool surface is the official TigerGraph MCP server (tigergraph-mcp), allowlisted to installed GSQL queries and vector search, with one dedicated write query for case memory.
- **TigerGraph deployment:** Savanna

## Links

- Technical blog: https://medium.com/@kunalsewal/redthread-an-agentic-fraud-investigator-on-tigergraph-d7e91536d836
