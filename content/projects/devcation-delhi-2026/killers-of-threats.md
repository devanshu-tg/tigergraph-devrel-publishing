---
id: "prj_161dad"
team: "killers_of_threats"
title: "FinGuard IIT Hackathon"
round: null
repo_url: "https://github.com/RJDEVMAN/FinGuard_IIT_Hackathon"
demo_url: "https://www.youtube.com/watch?v=w__DSKoYtUs"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

We have integrated 4 vertices, 'Pattern', 'Stock', 'Transaction' and 'Message' each possessing almost 10k connections with integrated datasets. Each vertex, loaded with dataset. In our monetary fraud detection system, LangGraph is our primary backbone for state transfer, score generation and detecting fraudulent patterns.  The state from fraud analysis node is bifurcated into 4 parts, wherein each part goes towards each of the vertex(each is an individual DB from within). Graph analysis via comparing the states with the DB values take place, generating insights and a graph score which is passed in the further pipeline, each of the vertex contributing mathematically for generating the score.

## Links

- Live app: https://finguardiithackathon-mzkcmrbcyglhhesizdrt5e.streamlit.app/
- Slides: https://docs.google.com/presentation/d/1xDbm7CnqLN2FT2tve3pv9oeXKHfLUslb/edit?usp=sharing&ouid=111168720743665272169&rtpof=true&sd=true
