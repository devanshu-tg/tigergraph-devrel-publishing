---
id: "prj_a11ba0"
team: "SIGMOID"
title: "OpportunityTrust"
round: null
repo_url: "https://github.com/PrakharGoel8320/OpportunityTrust"
demo_url: "https://drive.google.com/file/d/1xWOmdxuVr6GTdwtz6c39KKz6E-g29Iv0/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

We used TigerGraph to model and visualize relationships between different entities involved in fraud cases.

In our system, we created a graph with three main nodes:

Company
UPI ID
Complaint

These nodes are connected using edges such as:

Company → UPI (indicating which payment ID is linked to a company)
Complaint → Company (which company is mentioned in a complaint)
Complaint → UPI (which payment ID is reported in a complaint)

This structure helps us represent fraud data as a network, where connections between entities can be easily analyzed.

Using TigerGraph’s visualization tools, we can:

Identify suspicious patterns (e.g., one UPI linked to multiple complaints)
Trace relationships between companies and payment IDs
Clearly demonstrate scam networks during the project demo

For the hackathon implementation, TigerGraph is primarily used for:

Graph modeling
Data visualization
Demonstrating fraud relationships

The core logic in the backend simulates these relationships, while TigerGraph provides a powerful visual representation that makes the system more intuitive and impactful.

## Links

- Slides: https://docs.google.com/presentation/d/1hpY4Zg82TIIk4LDtgOmbuDdrPyCYqEvZ/edit?usp=sharing&ouid=112875345172797884230&rtpof=true&sd=true
