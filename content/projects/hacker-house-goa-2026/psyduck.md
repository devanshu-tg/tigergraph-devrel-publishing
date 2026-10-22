---
id: "prj_744412"
team: "PsyDuck"
title: "HHGOA"
round: null
repo_url: "https://github.com/UJESH2K/HHGOA"
demo_url: "https://youtu.be/z2vEZ-hDrhI"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:20:46+05:30"
---

## Notes from the team

Our design principle was that the graph gathers, the rules decide and the model explains. Zero model calls go into decisions, so every answer file is reproducible byte for byte. Our autonomous monitor over 300 unseen high-risk alerts exposed a calibration bug (90/300 wrongly labelled "undocumented"; the closed history has 9 in 5,565) that we then fixed. Known limits are documented in the blog: simulated customer responses, the GSQL ring-window gap, and TigerVector not deployed for the graded run.

## Details

- **LLM:** claude-opus-5 (Anthropic Python SDK), used only for the analyst copilot. No LLM is in the decision loop; verdicts, actions and routes are deterministic.
- **Agent framework:** Custom Python implementation (no LangChain, LangGraph or CrewAI). Deterministic engine: GSQL queries, log-odds rubric, value-of-information question pricing and a policy engine (R1-R10).
- **TigerGraph deployment:** Savanna

## Links

- Live app: https://hhgoa.ujesh.in/
- Technical blog: https://dev.to/jrine/the-graph-gathers-the-rules-decide-the-model-explains-building-an-agentic-fraud-investigator-on-2kjo
