---
id: "prj_391038"
team: "Amrithesh S Menon"
title: "EcoGraph AI: Enterprise GraphRAG for Global Regulatory Compliance"
round: "Round 1, Round 2"
repo_url: "https://github.com/im-Amrith/EcoGraph"
demo_url: "https://drive.google.com/drive/folders/12rb9WS7206ftGKebtMNDoGQGkJJZRM2Q?usp=sharing"
placement: "Finalist – Round 2"
prize: null
image_url: null
updated_at: "2026-10-14T19:38:11+05:30"
---

Modern hardware manufacturers must navigate a dense, overlapping web of global environmental regulations—from EU RoHS and REACH to California’s Proposition 65. When enterprise AI teams attempt to automate compliance tracking using standard Vector RAG, the architecture structurally fails. Vector engines treat legal frameworks as isolated text chunks, leading to severe retrieval fragmentation, massive context pollution, and an explosion in LLM prompt token costs when attempting to cross-reference multi-jurisdictional constraints.

The Solution
EcoGraph AI is a zero-hallucination compliance tracking engine built on TigerGraph. By moving from flat vector spaces to a deterministic, strictly typed graph topology, EcoGraph AI maps unstructured statutory texts into an explicit network of Regulations, Substances, and Requirements.

When a user submits a natural language query, our backend normalizes the input via a prompt-constrained LLM and executes a concurrent, multi-hop REST traversal through the TigerGraph database. Utilizing a custom Intersection Filtering layer, the system dynamically strips out irrelevant chemical noise and passes only pure, hyper-dense relational fact triplets (e.g., EU_MDR restricts DBP to 0.1%) to the generation engine.

The Impact
By unifying TigerGraph’s structural knowledge boundaries with generative AI, EcoGraph AI achieved:

82% Reduction in Token Overhead: Dropping average query consumption from 850 tokens (Vector RAG) to just 153 tokens.

100% Factual Accuracy: Eliminating mathematical and jurisdictional hallucinations entirely.

Near-Perfect Semantic Alignment: Achieving a 0.8834 rescaled BERTScore F1 by feeding the LLM pristine corporate truth instead of noisy legal paragraphs.

EcoGraph AI proves that replacing standard semantic search with relational graph topologies fundamentally transforms the economics, speed, and safety of generative AI for enterprise supply chains.

## Dataset

Dataset Domain
Environmental Regulatory Compliance, Global Supply Chain Law, and Chemical Liability Directives.

Dataset Sources
The underlying knowledge graph was populated using a high-volume, unstructured text corpus (exceeding 100 million input tokens) sourced from official international regulatory repositories. The data was extracted via a custom 79-batch ingestion pipeline from the following primary sources:

EUR-Lex (European Union Law):

Restriction of Hazardous Substances (RoHS) Directive

Registration, Evaluation, Authorisation and Restriction of Chemicals (REACH)

The EU Batteries Directive

Substances of Concern In articles as such or in complex objects (Products) (SCIP) Database under the Waste Framework Directive

European Medical Device Regulation (EU MDR)

US Federal & State Statutes:

California Proposition 65 (Safe Drinking Water and Toxic Enforcement Act, via OEHHA)

Toxic Substances Control Act (TSCA) Title VI (via the EPA)

Processing Note: The raw HTML and PDF statutory texts from these sources were parsed, chunked, and pushed through a schema-constrained entity resolution pipeline to extract deterministic constraints (e.g., maximum allowable weight thresholds). These facts were then structured directly into the Ecograph TigerGraph ontology as interconnected Regulation and Substance vertices tied together by metric-rich RESTRICTS edges.

## Details

- **LLM:** Google Gemini 2.5 Flash (Universally used for the Base LLM, Vector RAG, GraphRAG, and the LLM-as-a-Judge)
- **Vector database for RAG:** ChromaDB version 1.5.9
- **Token reduction, GraphRAG vs RAG (%):** 76

## Results

| Metric | LLM only | Basic RAG | GraphRAG |
|---|---|---|---|
| Tokens per query | 21.3 | 1062.7 | 254.5 |
| Cost per query | $0.0000016 (Based on Gemini Flash standard input pricing of $0.075 / 1M tokens) | $0.0000797 (Based on Gemini Flash standard input pricing of $0.075 / 1M tokens) | $0.0000191 (Based on Gemini Flash standard input pricing of $0.075 / 1M tokens) |
| Latency | 6.38 | 3.67 | 9.02 |
| LLM-as-judge pass % | 90 | 80 | 80 |
| BERTScore F1 | 0.779 | 0.845 | 0.875 |

## Links

- Live app: https://eco-graph.vercel.app/
- Blog post: https://dev.to/amrithesh_dev/engineering-zero-hallucination-regulatory-compliance-why-vector-rag-fails-and-tigergraph-rules-cpc
