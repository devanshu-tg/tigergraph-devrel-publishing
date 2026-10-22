---
id: "prj_c3d655"
team: "SriLakshmi Polavarapu (team Sri)"
title: "Round 3 - TigerGraph Inference Hackathon"
round: "Round 1, Round 3"
repo_url: "https://github.com/SriLakshmiPolavarapu/TigerGraph_Hackathon"
demo_url: "https://drive.google.com/file/d/1wKRoTH6O5rnpHwf_3TPYxEdNIdQTbLW8/view?usp=sharing"
placement: "Finalist – Round 3"
prize: null
image_url: null
updated_at: "2026-10-14T19:38:12+05:30"
---

## Details

- **LLM:** Gemini 2.5 Flash - same model used across all three pipelines (LLM-Only, RAG, GraphRAG)
- **Vector database for RAG:** ChromaDB, 0.4.0 version
- **Token reduction, GraphRAG vs RAG (%):** 14.7

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 184 | 3023 | 2578 |
| Cost per query | $0.00 | $0.00 | $0.00 |
| Latency | 3.26s | 3.67s | 3.53s |
| LLM-as-judge pass % | 36% | 50% | 38% |
| BERTScore F1 | 0.1842 | 0.0887 | 0.0909 |

## Links

- Live app: https://tigergraph-hackathon1.streamlit.app/
- Slides: https://docs.google.com/presentation/d/1a38C3Rx__FoGimp8jTY0xorposLxhv0h/edit?usp=sharing&ouid=108019933264670446717&rtpof=true&sd=true
