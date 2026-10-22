---
id: "prj_707dd4"
team: "Atharva Rajendra Kumbhar"
title: "FinGraph"
round: "Round 3"
repo_url: "https://github.com/atharva-kumbhar/FinGraph-AI.git"
demo_url: "https://drive.google.com/file/d/1Ae9FZUKY9V1EnuF2Ch84PIv56L3T4-PS/view?usp=sharing"
placement: "Finalist – Round 3"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

FinGraph - FinGraph solves the precision and reasoning challenges of enterprise financial analysis. Standard vector search (Basic RAG) can struggle with multi-document, multi-year, and multi-entity questions across SEC filings (10-K, 10-Q, 8-K, and DEF 14A).

By combining TigerGraph Knowledge Graphs with Gemini 2.5 Flash, FinGraph performs deterministic graph retrieval and targeted SEC filing retrieval across S&P 100 companies, enabling more accurate multi-hop financial reasoning while reducing prompt tokens and API cost compared with a traditional vector-only RAG pipeline.

## Details

- **LLM:** LLM Model: Gemini 2.5 Flash LLM-as-a-Judge Evaluation :Meta Llama 3.3 70B
- **Vector database for RAG:** Vector DB / Library: FAISS (Facebook AI Similarity Search) (faiss-cpu) Version: 1.8.0 Embedding Model: sentence-transformers/all-MiniLM-L6-v2 (384-dimensional embeddings) Index Type: faiss.IndexFlatIP (Inner Product similarity search over L2-normalized vectors) Dataset Indexed: SP100 Dataset (~50,487 text chunks from 100 company folders)
- **Token reduction, GraphRAG vs RAG (%):** 88

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 492 | 26334 | 2859 |
| Cost per query | $0.00 | $0.02 | $0.00 |
| Latency | 4.1 | 11 | 3.5 |
| LLM-as-judge pass % | 42.00% | 78.00% | 98.00% |
| BERTScore F1 | 0.163 | 0.812 | 1 |

## Links

- Live app: https://huggingface.co/spaces/AtharvaRK07/MedGraph
- Slides: https://drive.google.com/file/d/1lHQ0uC95kcKvCyPJ3dWugLwoBj28HV7W/view?usp=sharing
