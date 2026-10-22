---
id: "prj_1b7a3c"
team: "Riptide"
title: "RAVEN"
round: null
repo_url: "https://github.com/Av1ralS1ngh/RAVEN"
demo_url: "https://drive.google.com/drive/folders/1XS31x6kOyToKiYqiPoC7ERRBvmBp8d6J"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

Our integration focuses on two distinct graph domains:

1. Dual Graph Architecture
We maintain two specialized graphs to power the main platform features:

DepGraph (Technical Ecosystem): Models the structure of your codebases.
Vertices: FileNode (source files) and LibNode (packages/libraries).
Edges: IMPORTS, CALLS, and LIB_DEPENDS_ON.

PersonGraph (Professional Network): Models social and professional connectivity.
Vertices: Person (LinkedIn profiles).
Edges: CONNECTED_TO (representing shared connections or direct links).

2. Core Feature: Dependency Blast Radius
The most critical integration point is the Blast Radius Analysis. When you provide a GitHub username:

Ingestion: The backend parses your repositories and upserts the entire import/dependency tree into the DepGraph.
GSQL Traversal: We trigger a custom GSQL query (blastRadius.gsql) that performs a multi-hop traversal.
Impact Calculation: It identifies exactly which files and modules are downstream "victims" of a specific library change. This allows RAVEN to calculate a Migration Effort Score by seeing how deep the "blast" travels through your architecture.

3. Professional Pathfinding
For the networking module, we use TigerGraph’s built-in pathfinding capabilities (via shortest_path.gsql) to calculate the "Degrees of Separation" between a candidate and a target recruiter. This goes beyond simple SQL joins by traversing complex connection chains in sub-millisecond time.

4. Technical Implementation
Driver: We use the pyTigerGraph SDK for all communication.
Automated Schema: The TigerGraphClient service automatically handles the lifecycle of the database, including compiling GSQL queries and installing schemas directly from the tigergraph/ directory in our codebase.
Performance: Data is pushed in optimized batches (500 nodes/edges per call) to ensure the "Analyze" phase remains responsive even for users with dozens of repositories.
By moving these "reachability" problems to Tiger Graph, RAVEN can provide real-time insights into code maintainability and networking strength that would be computationally expensive in a traditional relational database.

## Links

- Live app: https://raven-1620.vercel.app/
- Slides: https://drive.google.com/file/d/1ndhQURanrvHHpc5s8wZWKsKbYSf-MtJ7/view?usp=sharing
