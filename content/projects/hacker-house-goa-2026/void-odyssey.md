---
id: "prj_03ae68"
team: "Void Odyssey"
title: "Argus"
round: null
repo_url: "https://github.com/ShreySharma07/Argus"
demo_url: "https://youtu.be/BBxsabop5gw"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Details

- **LLM:** Claude, Gemini
- **Agent framework:** Custom agent (no framework): a Python asyncio workflow (agent/workflow.py) with an evidence loop: assess, request policy-approved evidence, re-assess, until the policy §6 stop criteria hold. Tool access is through the MCP Python SDK to tigergraph-mcp, restricted by an allowlist. LLM calls go through the Anthropic SDK (Claude Opus 5, structured outputs), with Google Gemini as a switchable fallback. Actions and approval routes come from a deterministic policy engine, not the LLM.
- **TigerGraph deployment:** Savanna

## Links

- Technical blog: https://medium.com/@shrey7shrey/argus-a-fraud-investigator-that-knows-when-to-ask-6ebd34b45a8a?sharedUserId=shrey7shrey
