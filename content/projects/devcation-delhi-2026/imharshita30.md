---
id: "prj_c8ec17"
team: "imharshita30"
title: "Ecobite Ai Interviewer"
round: null
repo_url: "https://github.com/Saksham-Chaudhary-03/ecobite-ai-interviewer"
demo_url: "https://drive.google.com/file/d/1wyqeOGXWEanKRrKBQG5SqdwgngLONdgQ/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

Core Function (The Relational Brain): TigerGraph replaces traditional SQL databases to map a candidate's technical skills as a dynamic, interconnected network (Knowledge Graph) rather than a static list.

Custom Graph Schema: * Vertices (Nodes): CandidateNode (user profiles), SkillNode (technical competencies like React, Node.js), and InterviewNode (session metrics and scores).

Edges (Relationships): CANDIDATE_HAS_SKILL (connects candidates to their verified skills) and GAVE_INTERVIEW (links candidates to their performance history).

High-Speed API Integration: The Node.js backend connects to TigerGraph Cloud using RESTPP endpoints. We use direct HTTP/Axios requests to fetch candidate-skill edges, bypassing traditional dashboard limitations and RDBMS bottlenecks.

Real-Time Skill-Gap Analytics: The system performs multi-hop graph traversals to calculate the exact "logical distance" between a student’s current skill nodes and the required nodes for a specific job role.

Live UI Synchronization: The relational data fetched from TigerGraph is fed directly into the React frontend to render an interactive 2D Force-Directed Graph, allowing candidates to visually explore their strengths and missing skills.

Dynamic Updating: As soon as an AI interview concludes, the candidate's performance data and newly validated skills are instantly pushed back to TigerGraph to update their live "Neural Map."

## Links

- Slides: https://docs.google.com/presentation/d/1iry1iW1zrbDIgJaDVz9tYpyzoY6ESHz5/edit?usp=drivesdk&ouid=111381693410609023530&rtpof=true&sd=true
