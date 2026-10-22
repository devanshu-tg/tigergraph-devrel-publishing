---
id: "prj_17848c"
team: "NextIn/ Dhruv Pandey"
title: "AgentNinja"
round: "Round 1"
repo_url: "https://github.com/Dhruvpandey1476/Agentic-GraphRAG"
demo_url: "https://www.loom.com/share/174229663586435eb8b5a59b00c2b8be"
placement: "Top 25 – Round 1"
prize: null
image_url: null
updated_at: "2026-10-14T19:18:57+05:30"
---

Description
A three-pipeline benchmark (RAG / GraphRAG / Agentic GraphRAG) over ~3,000 Olympic
event pages in TigerGraph Savanna, built around one observation: a compiled graph
query can be perfectly valid — real filters, real rows, real citations — and still
answer a different question than the one asked. "Which athletics event had the most
competitors?" compiled to a COUNT and answered "43". Every structural check passed.

The agentic layer verifies each compiled query against the question before trusting
it, using five deterministic rules: literal grounding (every filter string must
appear in the question), numeric grounding, constraint coverage, shape validity, and
answer-shape grounding. Because each diagnostic names the exact broken slot, most
failures are then repaired by a rule rather than a reasoning loop — resolving an
unnamed subject from the graph, walking GAMES_SEQUENCE for "the Games immediately
before 2016", or re-issuing a title query as a venue+date lookup.

On 100 questions with all three pipelines on the same model at temperature 0:
RAG 20%, GraphRAG 37%, Agentic GraphRAG 96% — and the agent uses fewer tokens than
plain RAG (1,437 vs 2,763 per query), because verification and repair are
deterministic. 16 of 100 questions resolved with zero reasoning tokens.

## Details

- **LLM:** Llama 3 8B Instruct (Ollama "llama3:latest", Q4_0, digest 365c0bd3c000), temperature 0, run locally.
- **Vector database:** TigerGraph itself — no separate vector database. 9,065 Chunk vertices each store a 768-dim embedding (nomic-embed-text v1.5, F16) in a LIST<DOUBLE> attribute; chunk vectors are fetched once, cached in process, and cosine similarity is computed client-side with numpy. TigerGraph Savanna 4.2.5 exposes a native vectorSearch(), which we probed but did not adopt — the embeddings are stored as a vertex attribute rather than a declared embedding index. All three pipelines share this one store, so retrieval is identical across them.
- **Graph backend:** TigerGraph Savanna
- **Average agent steps per question:** 3.86
- **Retrieval methods:** Graph traversal (6 installed GSQL queries over OlympicEvent / GamesEdition / Discipline, including GAMES_SEQUENCE chronology walks and k-hop neighbourhood) Aggregation (counts, argmax/argmin, thresholded filters computed in-graph) Similarity search (768-dim dense vectors on Chunk vertices, cosine) Document retrieval (entitySupportingChunks — chunks backing a matched entity) Entity linking (question phrase to OlympicEvent vertex, word-boundary matched) Deterministic query verification (5 grounding rules, 0 tokens) Deterministic query repair (slot resolution from the graph, threshold correction, qualifier restoration, decomposition, answer-shape and structural replanning) Frequency over 100 questions: graph_query 100, verify 100, replan_structural 43, repair_literal 21, repair_shape 13, replan 8.

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | 20 | 37 | 96 |
| Tokens per query | 2763 | 1175 | 1437 |
| Latency | 11.1 | 9.2 | 11 |

## Links

- Live app: https://agentic-graphrag-site.vercel.app/dashboard/index.html
- Blog post: https://agentic-graphrag-system-on-tigergraph.hashnode.dev/
