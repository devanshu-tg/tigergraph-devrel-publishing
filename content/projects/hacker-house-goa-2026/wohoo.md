---
id: "prj_e2871d"
team: "Wohoo"
title: "HackerHouse TigerGraph"
round: null
repo_url: "https://github.com/Prayant-M/HackerHouse_TigerGraph"
demo_url: "https://youtu.be/w5bEZPW9vfg"
placement: "Selected for Hacker House Goa"
prize: null
image_url: null
updated_at: "2026-10-14T19:20:46+05:30"
---

## Notes from the team

Thanks for a well-designed challenge. Removing the fraud label and handing us closed investigations instead forced a genuinely different design. The most interesting finding came from that: in this history the alert's trigger type is perfectly correlated with the outcome. Stripping it on an October holdout drops fraud/not-fraud AUC from 0.92 to 0.52, while pattern identification barely moves (0.51 → 0.47) and SAR agreement with the bank's own filings doesn't move at all (0.90 → 0.91). So the trigger tells you whether something is fraud, and the graph tells you what kind and whether to file.

## Details

- **LLM:** Google Gemini 3.6 Flash
- **Agent framework:** LangGraph. It's a 15-node state graph whose conditional edge decides after each assessment whether to ask for more evidence or act. The agent reaches TigerGraph through the official TigerGraph MCP server (tigergraph-mcp, 69 tools over stdio)
- **TigerGraph deployment:** Savanna

## Links

- Live app: https://prayant-fraudgraph-console.static.hf.space/index.html#/monitoring
- Technical blog: https://dev.to/prayant_mohanty_77d03552f/the-calibration-bug-that-taught-our-fraud-agent-to-wave-fraud-through-onc
