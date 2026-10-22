---
id: "prj_407d41"
team: "Lakshay Tyagi"
title: "Fraud Multiverse"
round: null
repo_url: "https://github.com/Sanidhya-Sehgal/fraud-multiverse"
demo_url: null
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

Our choice of using TigerGraph as the backbone for our fraud detection solution lies in the fact that our solution depends entirely on relationship-based analysis rather than the individual data points.

Whereas conventional data solutions rely on tabular data storage, we have opted for a graph database format. As such, information like phone numbers, UPI IDs, banking accounts, device IDs, and even social media handles are stored as nodes, while the connections between them, such as transactions, device sharing, and account links, are stored as edges.

Once new data is collected from the backend (built with FastAPI), it is added to TigerGraph, which automatically associates it with relevant nodes.

## Links

- Slides: https://1drv.ms/p/c/0e748c230d4cbab0/IQBdurUKpuIESaQhpay0KQYmAWK1mkZSOBcqxcpYVb6fbBs?e=qHPx1x
