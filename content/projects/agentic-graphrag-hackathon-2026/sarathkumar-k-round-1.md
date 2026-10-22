---
id: "prj_3b4012"
team: "Sarathkumar K"
title: "fistround_v1 & firstround_v2"
round: "Round 1"
repo_url: "https://github.com/Sarath-Ju/tigergraph-hackathon.git"
demo_url: "https://drive.google.com/drive/folders/1a85afd7YfeFhkVJCu49dQ1y2xrmj9LX2?usp=drive_link"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:18:47+05:30"
---

## Details

- **LLM:** `gpt-4.1-mini
- **Vector database:** TigerVector, the vector search built into TigerGraph Community Edition 4.2.2 (Docker image tigergraph/community:4.2.2)
- **Graph backend:** TigerGraph Community Edition 4.2.2, self-hosted in Docker.
- **Average agent steps per question:** We measured the average number of retrieval and reasoning steps by counting every action the agent took in its trace for each of the 100 public questions, adding them up and dividing by the number of questions. In v1 the agent took 227 steps across 100 questions, an average of 2.27 per question. These were graph lookups of an event (44), counts and rankings over event records (31), lookups by venue and date (28), finding the Games held before or after a given year (22), and an evidence check before every final answer (102), which confirms that the answer is grounded in the retrieved records. For example, to answer how many biathlon events at the 2018 Winter Olympics had more than 73 competitors, the agent ran one aggregation that counted 5 events and then one evidence check that accepted the answer, which is two steps. In v2 the agent took 196 steps across 100 questions, an average of 1.96 per question. These were hybrid searches combining vector search with graph expansion (98), graph queries that the agent wrote and ran over the typed records (96), and plain vector searches (2). A typical counting or multi-hop question used one graph query and one hybrid search, while a simple lookup used a single vector search. In both versions we count only the actions the agent chose to take to gather or check evidence, and not the language model calls that decide the next action or write the final sentence.
- **Retrieval methods:** v1 = Entity linking, graph traversal, temporal reasoning, aggregation, similarity search, document retrieval, evidence evaluation v2 = LLM planning, hybrid search (vector + graph expansion), similarity search, structural retrieval (schema mapping + Cypher graph queries for traversal, filtering, aggregation and ranking), answer synthesis with citation

## Results

| Metric | RAG | GraphRAG | Agentic GraphRAG |
|---|---|---|---|
| Accuracy % | v1 =50.5, v2 =49.0 | v1= 66 v2=48.0 | v1=100.0, v2 =81 |
| Tokens per query | v1=2939 v2=2334 | v1=4585 v2= 2334 | v1=3007 v2 =33493 |
| Latency | v1= 3.83 v2= 1.93 | v1=7.8, v2=1.92 | v1=2.46, v2=13. |

## Links

- Blog post: https://medium.com/@sarathjuk/when-does-a-question-actually-need-an-agent-91d355b5f034?sharedUserId=sarathjuk
