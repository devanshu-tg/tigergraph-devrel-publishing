---
id: "prj_77a555"
team: "404SYNDICATE"
title: "HHGOA TASK 4 TigerGraph Agentic Fraud Investigation HHGOA 404 SYNDICATE"
round: null
repo_url: "https://github.com/legitnieraj1/HHGOA-TASK-4--TigerGraph-Agentic-Fraud-Investigation-HHGOA-404-SYNDICATE-"
demo_url: "https://youtu.be/WmM7LX--7A4"
placement: "Top 30"
prize: null
image_url: null
updated_at: "2026-10-14T19:20:46+05:30"
---

## Notes from the team

Two things that might not be obvious from the demo.

First, the LLM never decides anything. It writes the case summary and the SAR narrative, and that is all. Every verdict comes from deterministic pattern rules plus a propensity model calibrated on the closed-case history. In a fraud context I did not think it was defensible to let a language model produce a verdict it could hallucinate, so the architecture makes that structurally impossible rather than relying on prompting.

Second, I caught my own worst bug by checking the aggregate, not the individual cases. An early run returned 0 legitimate verdicts out of 20, which looked fine case by case, but the dataset README states roughly half the cases are legitimate. That mismatch exposed a conflation between model confidence and evidence strength that no single case review would have surfaced. NOTES.md documents that and every other bug I hit, including the ones I found late.

I have also been explicit about what does not work. Account takeover versus out-of-region use is not cleanly separable from single-episode behaviour, and one policy rule can never fire because the dataset has no merchant identity. Both are written up rather than hidden.

Thanks for a genuinely interesting problem. The dataset rewarded actually investigating it.

## Details

- **LLM:** Gemini 3.6 Flash is the primary, with a 4-model fallback chain: 1. gemini-3.6-flash (primary) 2. gemini-3.1-flash-lite (fallback) 3. nvidia/nemotron-3-ultra-550b-a55b (fallback) 4. nvidia/nemotron-3-nano-omni-30b-a3b-reasoning (fallback)
- **Agent framework:** Agent framework : LangGraph 1.2.12 (StateGraph, 8 nodes, conditional evidence-gathering loop) LLM plumbing : langchain-core 1.6.4, langchain-google-genai 4.4.0, langchain-openai 1.6.3 Tooling : MCP 1.30.0 via tigergraph-mcp 1.0.3, wired in with langchain-mcp-adapters 0.3.2 Embeddings : sentence-transformers 6.1.0 (all-MiniLM-L6-v2, 384-dim) Graph + vectors : TigerGraph Savanna, native vector attributes
- **TigerGraph deployment:** Savanna

## Links

- Live app: https://team404syndicate.vercel.app/
- Technical blog: https://www.youtube.com/watch?v=WmM7LX--7A4
