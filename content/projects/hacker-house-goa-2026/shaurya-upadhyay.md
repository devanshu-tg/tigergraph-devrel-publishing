---
id: "prj_712944"
team: "Shaurya Upadhyay"
title: "CaseVera"
round: null
repo_url: "https://github.com/BEAST04289/CaseVera"
demo_url: "https://youtu.be/ifnwHPjoYlQ"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:20:46+05:30"
---

## Notes from the team

CaseVera was built around one principle: risk score is a trigger, not a verdict.

I intentionally kept general-purpose LLMs out of the scored fraud-decision path. In an investigation, a hallucinated relationship, incorrectly merged piece of evidence or invented fact can contaminate the entire decision record. Instead, the model supplies suspicion, TigerGraph supplies relationships and facts, GraphRAG supplies historical/policy context, and deterministic evidence + policy controls govern verdicts, next-best actions, approval routes and SAR decisions.

One benchmark case illustrates why: the model was 91.8% suspicious, but CaseVera found 0 fraud signals and 5 legitimacy signals, so it stayed uncertain and recommended verification rather than immediately blocking the card.

I do want to use LLMs next — for natural-language analyst input, conversational investigation and grounded explanation of already-verified findings — but not to manufacture or modify evidence.

The build was also heavily validated: all 20 investigation outputs were produced, all 20 cases were persisted and reconciled in TigerGraph with 273 Evidence vertices, all 7 installed read queries matched across REST and MCP, and the full MCP run completed 96 graph calls with 0 failures and 0 semantic differences.

CaseVera — Investigate the case. Not just the score.

## Details

- **LLM:** None — no LLM is used in the scored decision path. CaseVera uses a purpose-built policy-constrained investigation pipeline with TigerGraph MCP, GSQL, GraphRAG, a statistical suspicion model, deterministic evidence balancing, and policy logic.
- **Agent framework:** Custom Python policy-constrained investigation agent — no external agent framework
- **TigerGraph deployment:** Savanna

## Links

- Live app: https://casevera.vercel.app
- Technical blog: https://dev.to/beast04289/i-didnt-want-ai-to-decide-fraud-i-wanted-it-to-investigate-it-321m
