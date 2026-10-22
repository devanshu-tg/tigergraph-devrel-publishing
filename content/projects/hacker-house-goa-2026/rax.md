---
id: "prj_569482"
team: "RAX"
title: "TIGRA"
round: null
repo_url: "https://github.com/Roxen-AS/TIGRA"
demo_url: "https://drive.google.com/file/d/1QMWgF6QAevB1TtG4uNw5GQXdY3dyaBiJ/view?usp=sharing"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:20:46+05:30"
---

## Details

- **LLM:** None in the submitted run (tokens = 0). TIGRA's decisions come from graph evidence, a log-odds evidence model and a policy engine that encodes rules R1–R10. That keeps every recommendation reproducible and tied to a cited rule. Summaries and SAR narratives were generated from deterministic templates grounded in the retrieved evidence. There is an optional Claude integration (claude-sonnet-5 via the Anthropic API): given GraphRAG context, it writes summaries, SAR narratives and undocumented-pattern descriptions. By design it never chooses actions.
- **Agent framework:** A custom Python agent, with no LangChain or CrewAI. It runs a hypothesis-driven tool loop over a typed tool bus. TigerGraph installed GSQL queries are called through pyTigerGraph, or through the official TigerGraph MCP server (tigergraph-mcp). GraphRAG uses TigerGraph vectorSearch over policy, typology and closed-case documents. The backend is FastAPI with Server-Sent Events streaming to a no-build JS analyst UI, and TIGRA's own MCP server exposes the investigation tools.
- **TigerGraph deployment:** Savanna

## Links

- Technical blog: https://x.com/_akashsarangi_/status/2103188976274477364
