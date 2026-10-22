---
id: "prj_1e9708"
team: "Flash/Nilansh Jain"
title: "Token Comparison Across Three RAG Pipelines"
round: "Round 1"
repo_url: "https://github.com/Nilanshjain/three-pipeline-comparison"
demo_url: "https://drive.google.com/file/d/1eA_U83cFzL8L5RzzuwipHpMGO-3Tozvy/view?usp=drive_link"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:29+05:30"
---

A side-by-side benchmark of LLM-Only, Basic RAG, and GraphRAG (against TigerGraph Savanna), holding corpus and synthesis model constant across all three pipelines so the deltas reflect retrieval strategy rather than model choice. The same Groq Llama 4 Scout 17B answers every query; the only thing that changes is what context (if any) is retrieved. Every internal LLM call is counted — including the ~13 score_candidate re-rankers.GraphRAG fires per query,so token figures are honest. Two reproducible configurations are shipped: a default config that hits the token-reduction rubric, and an adaptive config (one opt-in flag) that hits the accuracy bonus.

## Dataset

- Domain: Artificial Intelligence / Machine Learning knowledge — history, model architectures, researchers, organizations, safety, alignment,   techniques.   - Source: 432 English Wikipedia articles fetched via scripts/fetch_dataset.py into data/raw_articles/ (verified count: 432 files, 11 MB raw text,   ≈3M tokens — 3× over the Round 1 1M-token floor).   - Eval set: 14 curated questions in backend/tests/eval_questions.json spanning single-fact, multi-hop entity, definitional, and refusal-trap   categories.

## Benchmark results

All numbers verified from backend/tests/accuracy_results_C11_FINAL.json (default) and accuracy_results_C26_FINAL.json (adaptive). Same Llama 4
  Scout 17B synthesis model across all pipelines.
  DEFAULT CONFIG (token-reduction story)
  - LLM-Only:   judge 78.6% | F1_raw 0.875 | 270 tokens   | 787 ms   | 
  - Basic RAG:  judge 64.3% | F1_raw 0.886 | 1,407 tokens | 9,650 ms | 
  - GraphRAG:   judge 71.4% | F1_raw 0.863 | 805 tokens   | 9,456 ms | 

  ADAPTIVE CONFIG (accuracy-bonus story; adaptive_fallback=true + --judge-consensus 3)
  - LLM-Only:   judge 92.9% | F1_raw 0.875 | 278 tokens   | 808 ms    |
  - Basic RAG:  judge 57.1% | F1_raw 0.886 | 1,411 tokens | 10,314 ms | 
  - GraphRAG:   judge 92.9% | F1_raw 0.891 | 2,500 tokens | 21,228 ms |

## Links

- Live app: https://three-pipeline-comparison.vercel.app/
- Blog post: https://www.linkedin.com/posts/nilansh-jain-b32093303_graphrag-rag-llm-share-7461820594200657920-t44T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1uo5YBajxHqfTKSHcHAUtuWvNDQML1BZU
