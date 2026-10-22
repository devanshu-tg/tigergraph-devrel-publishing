---
id: "blg_4f47bf"
slug: "graphrag-pipeline-comparison"
title: "GraphRAG Pipeline Comparison"
author: "TigerGraph DevRel"
published_at: "2026-10-16T21:23:21+05:30"
updated_at: "2026-10-16T21:26:11+05:30"
tags: ["graphrag", "benchmark", "rag"]
cover_image_url: "/images/blogs/graphrag-benchmark.svg"
canonical_url: "https://graphrag-benchmark.netlify.app/"
featured: true
---

How much does a graph actually help retrieval? This benchmark runs three pipelines side by side on the same questions, with the same model and the same grader, and reports what was measured, not asserted:

- **LLM only:** the model answers with no retrieval at all.
- **Basic RAG:** the model answers from text chunks found by vector search.
- **GraphRAG:** a planner call turns the question into a TigerGraph traversal, and the model answers from what the traversal finds.

There are two datasets. **Textual · Enterprise** is the internal documents, Slack messages and org chart of a fictional company, so nothing in it can be answered from model memory. **Factual · SEC** is real SEC filings (10-Ks and 8-Ks) from public companies.

The headline score is the **LLM judge**. The judge reads the question, the correct answer and the given answer and awards 0–100, so a near-miss earns proportional credit instead of a flat zero. That makes it the fairest single number for the baseline too. The tables also show how many answers were exactly right.

## Textual · Enterprise

**EnterpriseRAG-Bench 20k — this system**

50 questions · 20 single-doc / 10 directory / 20 multi-hop · 73,613 chunks · 128,282 edges.

Basic RAG here uses cross-encoder reranking, which is its strongest configuration (see the notes below).

### Headline numbers

- **LLM judge score (GraphRAG):** 100%, vs Basic RAG 62.3% · 50 questions
- **Basic RAG tokens:** 5,312 per query
- **GraphRAG tokens:** 2,733 per query
- **Token reduction:** 49% fewer tokens than Basic RAG (2,733 vs 5,312)

### Benchmark

| Pipeline | BERTScore | LLM judge | Exactly right | Partly right | Wrong | Tokens per query | Cost / 1k |
| --- | --- | --- | --- | --- | --- | --- | --- |
| LLM only | 0.852 | 0.008 | 0/50 | 1/50 | 49/50 | 273 | $0.10 |
| Basic RAG | 0.934 | 0.623 | 26/50 | 11/50 | 13/50 | 5,312 | $1.60 |
| **GraphRAG** | 1.000 | **1.000** | 50/50 | 0/50 | 0/50 | 2,733 | $0.83 |

### By question type

LLM judge score from 0 to 1, with tokens per query in brackets.

| Question type | Questions | LLM only | Basic RAG | GraphRAG |
| --- | --- | --- | --- | --- |
| Single document | 20 | 0.00 (273) | 0.80 (6,295) | **1.00** (2,875) |
| Directory lookup | 10 | 0.04 (260) | **1.00** (2,712) | **1.00** (1,890) |
| Multi-hop | 20 | 0.00 (279) | 0.26 (5,629) | **1.00** (3,012) |

### Reading the numbers

- Multi-hop is the whole story: Basic RAG scores 26% there and 100% on directory lookups — same corpus, same model, same questions. The only variable is whether the question needs a join. GraphRAG holds 100% on both. On multi-hop the baseline gets 0 of 20 exactly right.
- GraphRAG has ZERO complete failures here — 50 perfect, 0 partial, 0 wrong. Basic RAG has 13 zeros and 11 partials. A traversal either lands on the exact set or returns nothing, so it fails visibly; retrieval fails plausibly, which is harder to catch in production.
- GraphRAG reads 3 chunks, Basic RAG reads 10 — and still loses. The budgets are deliberately NOT equal: 10 is where the reranked baseline scores best (dropping it to 3 costs it hit@k 82.5% -> 75.0%), so the baseline is shown at its strongest. GraphRAG at 3 chunks costs 2,733 tokens against 5,312, i.e. 49% fewer while scoring 100% against 52%. NOT measured: the baseline end-to-end at a 3-chunk budget.
- Of GraphRAG's 2,733 tokens, 1,185 are the planner call — 43% of its spend, and a fixed cost that does not shrink with the chunk cap. That is the honest floor on the token claim, not a number to hide.
- The three arms come from three separate runs (LLM-only and the baseline were not re-run for the 3-chunk measurement, because neither reads that setting). Same 50 questions, same generator, same judge, and build/make_pub50.py aborts unless all three cover identical question ids and wording.
- LLM-only scores 0.8% with no retrieval. The company is fictional, so nothing here is answerable from model memory — that is the leak gate, and it is what makes the rest of the numbers mean anything.
- The answer key was re-derived from 20,182 RAW documents without opening the graph, 30/30 (build/verify_gold_independent.py). Gold was originally computed BY traversal, so without this check the graph would be graded against its own representation.
- On 20 held-out questions generated with a different seed and never developed against, multi-hop scored 0.717 versus 0.700 on the tuned set — ABOVE, not below. That is the test that caught overfitting on the SEC round, where the ranking reversed.
- Every fairness fix helped the BASELINE: the BGE query prefix, an 8,192-token budget (thinking was starving the answer), retrieval k matched to P2's, a no-empty rule, and cross-encoder reranking which took Basic RAG 0.30 to 0.53 at the same token cost.
- KNOWN GAP: all 50 questions are relationship traversals — the shape a graph is built for. SEC has a 'bridge' tier (entity then its number) where both systems fall to ~38%. That shape has never been tested on this data.
- BERTScore is shown but is NOT the number of record. Here it happens to rank the arms correctly (0.852 / 0.934 / 1.000), but on the SEC set it put LLM-only ABOVE Basic RAG (0.839 vs 0.830) while LLM-only got 5 of 50 right — it rewards fluent wrong answers. A metric that only works when you already know the answer is not evidence; exact-set and the blind judge are.

### Tested questions

All 50 questions in this set:

**Single document** (20)

- Who authored the document '2025 02 11 hosted api latency fallback activated'?
- Who authored the document '20270330 milestone gatekeeper approvals'?
- Who authored the document 'ENG 913579 attention path prefetcher and kernel winnower'?
- Who authored the document '20270509 lyra onboarding sig caiq intake'?
- Who authored the document '20270610 processor roster handoff kms sourcing'?
- Who authored the document '20270521 medbridge security subprocessor checkin'?
- Who authored the document '20291107 arcadia evening walkthrough reschedule'?
- Who authored the document '20261121 slot swap proxy invite widget handoff'?
- Who authored the document 'ENG 411007 stratified hit ensemble ttl runbook'?
- Who authored the document '20270420 qbr runway stitch account onepagers'?
- Which Slack channel is the message '5390001111 tiny astronaut toast emoji echo' in?
- Which Slack channel is the message '1898765432 pin decay orchestration and grace unification' in?
- Which Slack channel is the message '3187654321 token identity wobble on embed proj sanity' in?
- Which Slack channel is the message '2176543210 kms rewrap edge cases and rbac clarify' in?
- Which Slack channel is the message '2755550000 legal hold stale snapshot service account check' in?
- Which Slack channel is the message '1918765432 vxlan mtu probe regression canary' in?
- Which Slack channel is the message '1950012345 shim routing decisionflow' in?
- Which Slack channel is the message '1789123456 sdr emea first week access' in?
- Which Slack channel is the message '5698765432 marketplace edgebox gTM readiness' in?
- Which Slack channel is the message '1845678901 onprem handshake networking handoff' in?

**Directory lookup** (10)

- Who reports directly to Vikram Singh?
- Who reports directly to Kimberly Park?
- Who reports directly to Alex Martinez?
- Who reports directly to Rafael Mendes?
- Who is Devon Price's manager?
- Who is Olivia Grant's manager?
- Who is Hassan Mirza's manager?
- Which people are in the Operations / IT department?
- Which people are in the Finance department?
- Which people are in the People department?

**Multi-hop** (20)

- Which Slack channels contain documents involving both Allison Grant and Sergio Costa?
- Which people from the Product department take part in the #incidents Slack channel?
- Which Slack channels contain documents involving both Daniel Carter and Naomi Feldman?
- Which people from the Product department take part in the #product Slack channel?
- Which Slack channels contain documents involving both Ibrahim Khan and Wei Chen?
- Which Slack channels do the people reporting to Marcus Lin take part in?
- Which Slack channels contain documents involving both Rafael Mendes and Victor Alvarez?
- Which Slack channels contain documents involving both Sean Gallagher and Vivek Kulkarni?
- Which Slack channels contain documents involving both Dev Patel and Rafael Mendes?
- Which Slack channels do the people reporting to Sofia Ivanova take part in?
- Which Slack channels contain documents involving both Allison Grant and Ibrahim Khan?
- Which Slack channels contain documents involving both Aisha Bello and Mina Haddad?
- Which Slack channels do the people reporting to Vikram Singh take part in?
- Which people from the Product department take part in the #sales Slack channel?
- Which Slack channels do the people reporting to Dr. Maya Srinivasan take part in?
- Which people from the Infrastructure & SRE department take part in the #eng-runtime Slack channel?
- Which Slack channels contain documents involving both Markus Klein and Talia Benson?
- Which Slack channels do the people reporting to Laura Bennett take part in?
- Which people from the Product department take part in the #announcements Slack channel?
- Which Slack channels do the people reporting to Monica Patel take part in?

## Factual · SEC

**SEC 10-K filings — MasterGraph reproduced, re-run under a fair config**

50 questions · finance graph, 13 queries restored · 8,192-token budget and no-refusal prompt applied to ALL arms · graded by the same blind judge.

### Headline numbers

- **LLM judge score (GraphRAG):** 65.7%, vs Basic RAG 58.2% · 50 questions
- **Basic RAG tokens:** 4,846 per query
- **GraphRAG tokens:** 2,545 per query
- **Token reduction:** 47% fewer tokens than Basic RAG (2,545 vs 4,846)

### Benchmark

| Pipeline | LLM judge | Exactly right | Partly right | Wrong | Tokens per query | Cost / 1k |
| --- | --- | --- | --- | --- | --- | --- |
| LLM only | 0.383 | 5/50 | 28/50 | 17/50 | 372 | $0.22 |
| Basic RAG | 0.582 | 16/50 | 24/50 | 10/50 | 4,846 | $1.60 |
| **GraphRAG** | **0.657** | 23/50 | 18/50 | 9/50 | 2,545 | $0.90 |

### By question type

LLM judge score from 0 to 1, with tokens per query in brackets.

| Question type | Questions | LLM only | Basic RAG | GraphRAG |
| --- | --- | --- | --- | --- |
| Single lookup | 8 | 0.38 (332) | **0.99** (5,993) | 0.62 (3,765) |
| Bridge · relation then number | 16 | 0.42 (347) | 0.46 (4,775) | **0.55** (3,241) |
| Aggregation | 20 | 0.43 (408) | 0.48 (4,415) | **0.76** (951) |
| Multi-part | 6 | 0.12 (377) | **0.70** (4,943) | 0.65 (4,375) |

### Reading the numbers

- CONFIG, NOT ARCHITECTURE: their shipped config capped answers at 512 tokens, which truncated 19 of 50 Basic RAG answers mid-number against 7 of ours — it punished the arm that retrieves most. Raising it to 8,192 and removing the refusal option took their baseline from 54.8% to 58.2% and GraphRAG from 57.3% to 65.7%. We changed their prompt to run this; their source is untouched and stays hash-frozen.
- GraphRAG leads by 7.5 points on the average (65.7% vs 58.2%) — but the average is the least interesting number here. See the tiers.
- It uses HALF the tokens: 2,545 vs 4,846 per question.
- LLM-only scores 38% with NO retrieval — the model has read these filings. On the enterprise corpus the same arm scores 0%, because that company is fictional. That gap is contamination measured, and the reason the enterprise result is the one to trust.
- The judge also inflates every arm here: it gave 75% to 'Walmart $611,289M; Apple $383,285M' when the gold was $713.2B and $416.2B — real figures from the wrong year. For financial QA a wrong number is a wrong answer, so `exact` (23 of 50) is the figure to trust, not the percentage.
- Scored by judge, not set-F1: these gold answers are numbers with commentary ('$57,048M, down 2% YoY'), so name-set matching does not apply.
- BY TIER — GraphRAG wins the hardest and LOSES the easiest. Aggregation (20 q, 'every company audited by KPMG'): 76.1% vs 48.0%, and 12 exact against 3. Single lookup (8 q, 'Apple's net sales'): 61.9% vs 99.4% — retrieval is simply the better tool for one number in one filing, and the planner call is wasted overhead.
- The BRIDGE tier is where both struggle (16 q, 54.7% vs 45.9%): 'the company that appointed John Ternus as CEO — what were its total net sales?' Hop one is a relationship, hop two is a table cell. Neither tool does both well.
- SEC relations are THIN: audited_by 100 edges, uses_supplier 178, has_ceo just ONE in the whole graph. Enterprise participated_in has 88,188. Same idea, ~800x the density — which is why CEO bridge questions had nothing to traverse.
- 18 of 50 answers are a NUMBER or DATE; on the enterprise set it is 0 of 50. A graph stores relationships, so it can point at the right filing but cannot pick the right table row. Two failures were exactly that: $344,582M for $332,238M, and a filing date read as the fiscal year end.

### Tested questions

All 50 questions in this set:

**Single document** (8)

- Apple's total net sales for fiscal year 2025?
- NVIDIA's total revenue for fiscal year 2026?
- ExxonMobil's total revenues and other income for FY2025?
- Coca-Cola's net operating revenues for FY2025?
- On what date does Microsoft's FY2025 end?
- Who is Amazon's Chief Executive Officer?
- Netflix relies on which cloud provider to operate its streaming service?
- JPMorgan Chase's net income for FY ended Dec 31, 2025?

**Multi-document** (12)

- Which had the higher fiscal-year net income: JPMorgan Chase or ExxonMobil?
- Which had the higher fiscal-year revenue: Walmart or Apple?
- Which spent more on R&D in its latest fiscal year: Apple or NVIDIA?
- Amgen named an incoming CFO in 2026 — who is he, and who is Amgen's auditor?
- Chevron's departing Chief Legal Officer (per its 2026 8-K) is whom, and who is Chevron's auditor?
- AMD names which two companies as its principal competitors in Data Center and discrete graphics?
- AMD's new revolving credit facility (May 2026 8-K) names which bank as administrative agent, and which was agent on the facility it replaced?
- By how much did Caterpillar raise its quarterly dividend (June 2026 8-K), and to what new amount?
- In Apple's April 2026 8-K, who was appointed CEO, and what role will Tim Cook move into?
- The company that appointed John Ternus as CEO — what were its total net sales in FY2025?
- The company that agreed to acquire Apogee Therapeutics — who is its independent auditor?
- Among the companies that name TSMC as a foundry, which one had the highest fiscal-year revenue?

**Aggregation** (20)

- Which companies in the dataset name TSMC as a foundry/manufacturing partner?
- Two companies list Indra Nooyi as a member of their board — which two?
- Ellen Kullman serves on the boards of which two dataset companies?
- F. William McNabb III is a director at which two dataset companies?
- Which Energy-sector companies discuss climate change as a risk factor in their 10-K?
- Which Utilities-sector companies address climate change in their 10-K?
- Which companies authorized a $25 billion share-repurchase program via an 8-K?
- Which KPMG-audited companies are in the Consumer Staples sector?
- Among the companies that name TSMC as a foundry, which are audited by Ernst & Young?
- Among the companies that name TSMC as a foundry, which are audited by PricewaterhouseCoopers?
- Which Deloitte-audited companies are in the Health-Care sector?
- Among companies that name NVIDIA as a competitor, which are audited by PricewaterhouseCoopers?
- List all S&P-100 companies in the dataset audited by KPMG.
- Which Health-Care companies mention weight-loss / obesity (GLP-1) drugs in their 10-K?
- Besides health-care companies, which consumer companies flag GLP-1 / weight-loss drugs as a business risk?
- Which companies declared a cash dividend via an 8-K in this dataset?
- Which KPMG-audited companies are in the Financials sector?
- Among the dataset's semiconductor and networking companies, which explicitly name NVIDIA as a competitor?
- Among Health-Care companies that mention obesity/weight-loss drugs, which are audited by Ernst & Young?
- How many dataset companies does each Big Four firm audit?

**Hard** (6)

- Apple filed two 8-Ks in April 2026 (Apr 20, Apr 30). What event does each report?
- The company that expanded a productivity/restructuring program on April 30, 2026 — name it, its auditor, and the revised total pre-tax charge range.
- What quarterly cash dividend per share did Costco declare in its July 2026 8-K?
- Amgen's CFO transition (2026): when does the outgoing CFO retire, and when does the incoming CFO start?
- Put these 2026 buyback authorizations in chronological order: Adobe $25B, Netflix +$25B, Accenture +$2B, Morgan Stanley $20B.
- Cisco's May 2026 restructuring 8-K funds which growth areas, and who is Cisco's auditor?

**Not answered correctly by any pipeline** (4)

- Besides Netflix, which company authorized a $25B share-repurchase program in 2026?
- Company that formed a 50/50 joint venture with BT Group plc — who is its auditor?
- The company that appointed Jay Hoag as Chairman in 2026 — what share-repurchase amount did it authorize that year?
- Which Deloitte-audited company had a fiscal year ending June 30, 2025?

## About the costs

Token counts are measured. The dollar figures in the Cost / 1k column assume gemini-3.6-flash is priced like gemini-2.5-flash, which is not verified, so the comparison above uses tokens rather than cost.

---

The [interactive version](https://graphrag-benchmark.netlify.app/) has the same numbers, plus a query console that runs all three pipelines against the real graph for any of the tested questions and shows each answer next to the correct one.

