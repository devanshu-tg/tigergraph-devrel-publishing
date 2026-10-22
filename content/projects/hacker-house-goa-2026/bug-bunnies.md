---
id: "prj_88aaa4"
team: "bug bunnies"
title: "Hhgoa Fraud Agent"
round: null
repo_url: "https://github.com/Ansh-Sonkusare/hhgoa-fraud-agent"
demo_url: "https://youtu.be/IyJDKIUfU7I"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Notes from the team

We also built reusable GSQL tooling along the way: a tree-sitter grammar and offline linter for GSQL (https://github.com/Ansh-Sonkusare/gsql-treesitter) and a VS Code extension (https://github.com/Ansh-Sonkusare/gsql-vscode). Everything runs locally (TigerGraph CE, Qwen 7B on llama.cpp), every graph query is as_of time-bounded, and the agent never invents a customer's reply.

## Details

- **LLM:** Qwen2.5-7B-Instruct (Q4_K_M), Jev (TypeSafe), bge-small-en-v1.5 for embeddings.
- **Agent framework:** Custom TypeScript state-machine agent (no LangChain/LangGraph)
- **TigerGraph deployment:** Community Edition

## Links

- Technical blog: https://dev.to/anshsonkusare/building-a-fraud-investigator-on-tigergraph-3hk0
