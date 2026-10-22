---
id: "prj_a4e902"
team: "HackHerz"
title: "AI Career Recommendation System"
round: null
repo_url: "https://github.com/Mehak-Kansal12/AI-Career-Recommendation-System"
demo_url: "https://drive.google.com/file/d/14Or-_YNuuQPZw8FlGxpVdJqrk4VQQvdR/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

TigerGraph was integrated as the core graph database to model relationships between skills, career paths, and learning courses. The project uses vertices such as Skill, Career, and Course, and edges like REQUIRES and TEACHES to represent connections between them. CSV files were uploaded into TigerGraph to populate the graph structure. A custom GSQL query (getRecommendationBySkill) was created to retrieve relevant career paths and recommended courses based on the selected skill. This query is accessed through a REST API and connected to the Streamlit frontend, allowing users to select a skill and receive personalized career and course recommendations dynamically.

## Links

- Slides: https://docs.google.com/presentation/d/1pv6I2604ul3Zr7m3Ywma9mvmvQionIOm/edit?usp=sharing&ouid=104122638066104839299&rtpof=true&sd=true
