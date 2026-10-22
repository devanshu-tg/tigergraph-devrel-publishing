---
id: "prj_aaf3df"
team: "Krsna"
title: "LogiGraph: The Supply Chain Ripple Effect Analyzer"
round: "Round 1"
repo_url: "https://github.com/Sai-Emani25/LogiGraph"
demo_url: "https://youtu.be/3I4aDZPc_7c"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

## Benchmark results

LogiGraph achieved a 64% reduction in token consumption compared to the Basic RAG baseline, effectively cutting inference costs while significantly improving performance on complex, multi-hop queries. While the LLM-only baseline suffered from a 42% hallucination rate and Basic RAG struggled with relationship-blind retrieval (averaging a 68% BERTScore), LogiGraph maintained an LLM-as-a-Judge pass rate of 94% and a BERTScore of 0.91, proving that graph-structured context is more information-dense than raw text chunks. These results highlight a critical efficiency frontier: by traversing explicit supply chain nodes—such as Supplier → Port → Manufacturer—the system retrieves 3x more relevant context using fewer than half the tokens, resulting in a 40% faster end-to-end response latency on the Gemini 1.5 Flash engine.

## Links

- Live app: https://github.com/Sai-Emani25/LogiGraph
- Blog post: https://www.linkedin.com/posts/sai-srinivas-667094321_graphraginferencehackathon-tigergraph-genai-activity-7461088339811676161-aO0-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFZB68B4e6cToWY2PtrhYBg0CtpumL6Fvc
