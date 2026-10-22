---
id: "prj_362e12"
team: "MasterGraph"
title: "Generalizable context optimization on SEC filings"
round: "Round 3"
repo_url: "https://github.com/knightwalker96/graphrag-round3-context-optimization"
demo_url: "https://www.loom.com/share/6d584d06f7be42e28ac038fbc31b4503"
placement: "1st place – Round 3"
prize: null
image_url: null
updated_at: "2026-10-14T19:30:07+05:30"
---

## Details

- **LLM:** gpt-4o-mini
- **Vector database for RAG:** chromadb>=0.5.0
- **Token reduction, GraphRAG vs RAG (%):** 50

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 286 | 4739 | 2359 |
| Cost per query | 0.000136 | 0.00149 | 0.000775 |
| Latency | 2.61 | 3.05 | 3.11 |
| LLM-as-judge pass % | 11.3 | 33.3 | 48.7 |
| BERTScore F1 | 0.215 | 0.191 | 0.287 |

## Links

- Live app: https://claude.ai/code/artifact/0815d998-a78a-4a0b-a06f-85670de44616
- Slides: https://drive.google.com/file/d/1NiOmFHLmAluN-cAKfd4xWHthANlmoqfZ/view?usp=sharing
