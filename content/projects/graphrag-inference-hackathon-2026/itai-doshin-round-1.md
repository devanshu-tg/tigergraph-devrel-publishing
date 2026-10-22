---
id: "prj_07f33e"
team: "Itai Doshin"
title: "GraphRAG vs Vector RAG: A Comparative Analysis Dashboard for E-Commerce Relationships"
round: "Round 1"
repo_url: "https://github.com/rzil-1/TG-GraphRAG-Hackathon"
demo_url: "https://drive.google.com/file/d/1gUmdSdroDMtRIMVGZFJlXjAif5K8dpol/view?usp=drive_link"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:19:42+05:30"
---

Project Summary
When dealing with complex enterprise datasets—such as thousands of e-commerce beauty products, nested chemical ingredients, and multi-faceted user reviews—standard Vector-based RAG struggles with the "needle in a haystack" problem. Relying purely on semantic similarity results in massive, unstructured text blocks being fed to the LLM, which causes high token consumption, slow latency, and an inability to map explicit relationships.

To solve this, we built a comparative Evaluation Dashboard utilizing TigerGraph Cloud to construct a highly structured Knowledge Graph. Our dashboard runs three separate pipelines concurrently (LLM-Only, ChromaDB Vector RAG, and TigerGraph GraphRAG) and scores them in real-time. By traversing explicit graph relationships, our GraphRAG solution successfully provides the LLM with leaner, denser context. This approach generates hyper-specific, highly accurate insights while reducing token bloat by nearly 20% and improving end-to-end response speeds by nearly 40% compared to standard Vector RAG

## Dataset

https://www.kaggle.com/datasets/nadyinky/sephora-products-and-skincare-reviews?resource=download

## Benchmark results

Benchmark Report
(Data gathered from our final dashboard run on the LANEIGE Lip Sleeping Mask analysis query using Groq's llama-3.3-70b-versatile model).

1. Pipeline: LLM-Only Baseline

Tokens Used (Prompt + Completion): 539
Cost ($ USD): $0.00030
Response Latency: 1.81 seconds
BERTScore (Semantic Match): 0.02
LLM-as-a-Judge Accuracy: PASS
(Note: While fast and cheap, this pipeline relies purely on pre-trained knowledge and is incapable of citing actual, private company data, making it unsuitable for enterprise analytics).
2. Pipeline: Basic Vector RAG (ChromaDB + HuggingFace)

Tokens Used (Prompt + Completion): 1145
Cost ($ USD): $0.00028
Response Latency: 7.29 seconds
BERTScore (Semantic Match): 0.22
LLM-as-a-Judge Accuracy: PASS
(Note: Successfully summarized general consensus but required scanning massive unstructured text chunks, leading to the highest token consumption and highest latency of all pipelines).
3. Pipeline: TigerGraph GraphRAG (Our Solution)

Tokens Used (Prompt + Completion): 928
Cost ($ USD): $0.00042
Response Latency: 4.61 seconds
BERTScore (Semantic Match): 0.00
LLM-as-a-Judge Accuracy: PASS
(Note: Identified hyper-specific edge cases, such as a user curing their "angular cheilitis." Achieved an ~20% token reduction and a ~40% speed improvement over Vector RAG by traversing explicit connections rather than embedding massive text blobs).

## Links

- Live app: https://tg-graphrag-hackathon-9rpddlaqnytwsepxcba3qz.streamlit.app/
- Blog post: https://medium.com/@mandaviarshl/your-vector-rag-is-lying-to-you-how-we-proved-graphrag-is-the-future-of-enterprise-ai-e183a0f08977
