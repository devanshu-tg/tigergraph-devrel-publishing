---
id: "prj_ac0eaa"
team: "LeconHinton"
title: "Graphsleuth"
round: null
repo_url: "https://github.com/neevmodh/graphsleuth"
demo_url: "https://drive.google.com/file/d/1JEltOKFWy42ZSBOnYtttyMuwrKggnau1/view?usp=sharing"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Notes from the team

Two things I'd point a judge to that don't fit the other questions:

We measured before implementing, and said no when the data didn't support it. Policy rule R6 names three "shared origin" signals — device, billing region, recipient email. We tested region-sharing on all 20 exam cases before wiring it in: billing regions hold 90–580 active cards in a 7-day window, with 8–16 of them always scoring ≥0.5 by the model's ordinary false-positive rate. There's no threshold that separates a real ring from a busy city. So R6 ships for device-sharing only, with the reasoning documented in the repo rather than a rule that would flag ordinary commerce as coordinated fraud.

Cross-checking two backends against each other found a real bug, not just confirmed consistency. Running all 20 cases through both TigerGraph and a local backend exposed a case-memory query that silently dropped in-person-only cases from similar_prior_cases. Fixed - the backends now agree exactly, 0 differences across 100 field groups.

## Details

- **LLM:** Groq openai/gpt-oss-120b (fast tool loop) + Google Gemini gemini-3.6-flash (synthesis, embeddings) — routed through OpenAI-compatible endpoints with retry/fallback between them (agent/llm.py).
- **Agent framework:** Custom — no LangChain/LangGraph/CrewAI/OpenAI Agents SDK. A hand-built orchestrator with a budgeted tool loop over installed GSQL queries (agent/orchestrator.py, agent/investigator.py), and a separate deterministic policy engine (agent/policy.py) that the LLM never touches for action decisions. This is explicitly allowed by the task brief ("A custom agent implementation is also allowed").
- **TigerGraph deployment:** Savanna

## Links

- Live app: https://graphsleuth-production.up.railway.app/
- Technical blog: https://drive.google.com/file/d/1ALgNKlZxDug7Qc2naScBnng83fgeRPN_/view?usp=sharing
