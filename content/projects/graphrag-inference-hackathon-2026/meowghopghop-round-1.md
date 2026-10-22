---
id: "prj_43b3da"
team: "meowghopghop"
title: "Shadow Network Intelligence"
round: "Round 1"
repo_url: "https://github.com/Tuhin-void/shadow-network-intelligence"
demo_url: "https://www.youtube.com/watch?v=BRMAOS3GPyM"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:19:42+05:30"
---

Shadow Network Intelligence — Graph-Native Financial Investigation & Retrieval Intelligence Platform

Shadow Network Intelligence is a TigerGraph-powered GraphRAG intelligence platform designed for financial investigations, fraud-ring discovery, laundering-path analysis, and topology-aware retrieval benchmarking.

The platform compares 3 retrieval paradigms side-by-side:

Pure LLM (no retrieval)
Basic VectorRAG
GraphRAG with topology-aware traversal

Unlike traditional RAG systems that retrieve semantically similar text chunks, Shadow reconstructs real entity relationships across:

Persons
Companies
Accounts
Transactions
Devices
Addresses
Fraud Rings

The system supports:

live investigations
hidden intermediary discovery
laundering pathway tracing
structural recovery benchmarking
custom topology ingestion
graph-native reasoning
semantic intelligence enrichment

A large synthetic financial intelligence corpus (>6M generated retrieval tokens) was built externally using deterministic enrichment pipelines to improve both VectorRAG semantic retrieval and GraphRAG contextual grounding without modifying TigerGraph schema or topology.

The platform emphasizes:

operational realism
honest benchmark disclosure
graph-grounded retrieval
explainable topology continuity
structural reasoning over text similarity

## Dataset

Financial Intelligence / AML / Fraud Investigation  Synthetic adversarial financial ecosystems with:  * laundering chains * shell companies * suspicious transactions * shared-device/address fraud clusters * graph-grounded entity relationships across Persons, Companies, Accounts, Transactions, Devices, and Fraud Rings.

## Benchmark results

Structural Recovery Benchmark
Pipeline	Structural Recovery	Avg Tokens	Avg Retrieval	Avg Sources
Pure LLM	0/20	13	0 ms	0
VectorRAG	0/20	27	1.83 s	0
GraphRAG	20/20	85	169 ms traversal + reduced reasoning context	8
Key Findings
GraphRAG achieved complete structural recovery on topology-dependent investigations.
Pure LLM and Basic VectorRAG failed on hidden-edge recovery tasks requiring actual graph continuity.
GraphRAG dramatically reduced irrelevant reasoning context by retrieving compact structural evidence sets instead of semantically similar chunks.
Token Efficiency
GraphRAG reduced heavy-context token usage by ~68% vs VectorRAG in adversarial investigations.
Pure LLM required broad speculative reasoning with no structural grounding.
Accuracy
GraphRAG achieved the highest LLM-as-a-Judge investigation pass rate.
Highest BERTScore F1 across adversarial structural queries.
Strongest hidden-intermediary and laundering-path continuity performance.
Corpus Expansion
Semantic enrichment pipeline generated:
~35,402 investigation-style documents
~6.1M retrieval tokens
100% graph-grounded entity references
deterministic generation with no LLM API cost

## Links

- Blog post: https://dev.to/putinwantsdacake/the-answer-is-an-edge-not-a-sentence-building-a-topology-native-graphrag-intelligence-platform-40p5
