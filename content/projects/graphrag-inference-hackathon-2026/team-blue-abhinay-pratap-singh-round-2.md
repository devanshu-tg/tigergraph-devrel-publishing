---
id: "prj_818879"
team: "Team Blue / Abhinay Pratap Singh"
title: "Financial Intelligence: A 3-Tier GraphRAG Benchmarking Suite"
round: "Round 2"
repo_url: "https://github.com/abhinay-codes/TigerGraph-100M-"
demo_url: "https://drive.google.com/drive/folders/1fN4fXuIqFd93WDjIRqCeRSaGTtOmf_NQ?usp=sharing"
placement: "Finalist – Round 2"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Traditional Retrieval-Augmented Generation (RAG) relies on flat vector similarity, which completely fails when tasked with answering complex, multi-hop financial queries.

To solve this, we built Financial Intelligence, a highly secure, full-stack benchmarking dashboard powered by TigerGraph and Gemini 2.5 Flash. We processed over 105 million tokens of SEC 10-K financial filings to extract intricate corporate networks (companies, competitors, subsidiaries, and market risks) into a custom TigerGraph schema.

To mathematically prove GraphRAG's superiority, our application executes three pipelines simultaneously in real-time:

LLM-Only: A baseline test with no retrieval.
Basic RAG: A traditional dense vector retrieval baseline using a live ChromaDB instance.
GraphRAG: A dynamic, multi-hop reverse traversal algorithm executed natively on TigerGraph Cloud.
Every query is graded in real-time using a strict LLM-as-a-Judge to evaluate factual accuracy, and the official Hugging Face BERTScore neural network to calculate mathematical F1 groundedness.

Key Features:

Live Benchmarking: Watch all three pipelines race to answer complex financial queries simultaneously.
BYOK Security: A strict "Bring Your Own Key" architecture ensures no credentials are hardcoded; users pass API keys dynamically through the UI.
Cost & Latency Tracking: Dynamic token calculation directly from Google's API to prove the token-reduction cost savings of GraphRAG.
Cloud Deployed: Fully hosted on Hugging Face Spaces via Docker, seamlessly serving the Python FastAPI backend and Javascript frontend.

## Dataset

Dataset Domain: Corporate Finance / Financial Regulatory Filings

Primary Source: Hugging Face Datasets: winterForestStump/10-K_sec_filings

Dataset Description: The dataset consists of official Form 10-K annual reports mandated by the United States Securities and Exchange Commission (SEC). These filings provide comprehensive, legally required summaries of a company's financial performance, including highly detailed sections on corporate structure, international subsidiaries, executive leadership, and primary market risk factors.

Data Scale & Processing: To build the knowledge graph and vector database for this benchmarking suite, we processed 8,417 individual SEC 10-K documents, representing a massive raw data scale of 105,001,658 tokens.

## Details

- **LLM:** Gemini 2.5 Flash (gemini-2.5-flash). We strictly enforced using the exact same Gemini 2.5 model across all three pipelines (LLM-Only, RAG, and GraphRAG) as well as for the LLM-as-a-Judge, to ensure a perfectly fair baseline comparison.
- **Vector database for RAG:** all-MiniLM-L6-v2 (This is the underlying SentenceTransformer neural network that ChromaDB used to mathematically embed the 105 million tokens).
- **Token reduction, GraphRAG vs RAG (%):** 99

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 88 | 73211 | 577 |
| Cost per query | $0.00 | $0.02 | $0.00 |
| Latency | 2.8 seconds | 25.3 seconds | 13.5 seconds |
| LLM-as-judge pass % | 30% (Frequently fails by dodging the question, apologizing, or aggressively hallucinating historical facts) | 20% (Fails consistently due to the "Needle-in-a-Haystack" problem; the LLM gets overwhelmed by the massive 70k+ token context window and fails to synthesize the multi-hop relationships). | 100% (Consistently passes because the TigerGraph query performs the multi-hop relationship traversal at the database level, handing the LLM a clean, noise-free context). |
| BERTScore F1 | 0 | 0.1142 | 0.7415 |

## Links

- Live app: https://abhinaycodes-graphrag-backend.hf.space
- Blog post: https://medium.com/@abhinaypratapsingh47/why-vector-rag-is-failing-finance-and-how-we-fixed-it-with-graphrag-cd466a5a2ce8?sharedUserId=abhinaypratapsingh47
