---
id: "prj_6a9930"
team: "Team: Byteess"
title: "Chakravyuh Fraud Agent"
round: null
repo_url: "https://github.com/Tanmay2006-Tech/chakravyuh-fraud-agent"
demo_url: "https://drive.google.com/file/d/1bywYUzzxZ-JhuGxp5YcdiwOzunb2odny/view?usp=sharing"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Notes from the team

We built in a no-look-ahead backtest against the bank's own closed cases before trusting
our evidence weights, and it caught a real problem: our first model scored past alerts
worse than random chance, because most "new device" alerts in the historical data turned
out to be genuine customers with new phones. Calibrating on that history took accuracy on
a held-out window from 49% to 66%. Details and the full reproduction steps are in the blog.

## Details

- **LLM:** Groq gpt-oss-120b as primary, with Groq gpt-oss-20b as a secondary backup and Gemini gemini-3.6-flash as a third fallback, so the agent keeps writing case summaries and suspicious activity reports even if one provider is rate-limited or down.
- **Agent framework:** LangGraph, orchestrating a nine-stage workflow (intake, evidence gathering, memory recall, follow-up tool selection, risk assessment, initial recommendation, evidence request, final recommendation, and case write-back), with a conditional branch that only asks for more evidence when the case genuinely needs it.
- **TigerGraph deployment:** Savanna

## Links

- Live app: https://chakravyuh-fraud-agent.streamlit.app
- Technical blog: https://chakravyuh-hhgoa.hashnode.dev/chakravyuh-building-a-fraud-investigator-that-knows-when-not-to-block-you
