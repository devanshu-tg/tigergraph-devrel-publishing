---
id: "prj_63d337"
team: "ARVYO"
title: "Assay"
round: null
repo_url: "https://github.com/nikhilcherry/assay"
demo_url: "https://x.com/nikhil45970527/status/2103179718103290325"
placement: "Selected for Hacker House Goa"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:58+05:30"
---

## Details

- **LLM:** None on the decision path (0 LLM tokens per case, by design). Probabilities come from a LightGBM model with isotonic calibration, trained on the bank's 5,565 closed cases, then updated with measured likelihood ratios from TigerGraph graph findings. Summaries and SAR narratives are generated from the evidence ledger, so every figure in them is one the ledger holds.
- **Agent framework:** Custom Python agent (no external framework): an Investigator loop that picks the next installed GSQL query based on what the last one returned, keeps a log-odds evidence ledger, and maps the final probability to the brief's actions and routes. Runs on TigerGraph Community Edition 4.2.5 via installed GSQL queries.
- **TigerGraph deployment:** Community Edition

## Links

- Live app: https://nikhilcherry.github.io/assay/
- Technical blog: https://x.com/nikhil45970527/status/2103186749765910677
