---
id: "prj_5465ee"
team: "SYNTAX BUSTER"
title: "Cinematch Engine"
round: null
repo_url: "https://github.com/prateeksharmacoder-sys/cinematch-engine"
demo_url: "https://drive.google.com/file/d/1RDEIDooF2JmNuL86nW6DmbfBp4RCPTRI/view?usp=drivesdk"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:52+05:30"
---

## How the team used TigerGraph

We integrated TigerGraph into our project by first connecting mcp with antigravity code editor then  designing a graph schema consisting of nodes like users, movies, actors, and genres, and relationships such as likes, acted_in, and belongs_to. After setting up the database, we loaded our dataset into TigerGraph using GSQL loading jobs. We then wrote GSQL queries to generate recommendations based on actor similarity, genre, and user preferences. Our backend (Node.js/Python) connects to TigerGraph using REST APIs to execute these queries. When a user searches for a movie, the backend sends a request to TigerGraph and retrieves relevant recommendations. These results are finally displayed on the frontend, enabling a fast and efficient graph-based recommendation system.

## Links

- Live app: https://cinematch-engine-frontend.onrender.com
- Slides: https://docs.google.com/presentation/d/10JJglVUn0lESTlGFynOk8Mn6ZcNrxhB7/edit?usp=drivesdk&ouid=115359106121631451426&rtpof=true&sd=true
