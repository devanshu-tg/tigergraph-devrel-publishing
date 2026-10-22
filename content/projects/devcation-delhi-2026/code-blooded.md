---
id: "prj_e64c1c"
team: "Code Blooded"
title: "UPI Fraud Detection"
round: null
repo_url: "https://github.com/Vansh-Harit/UPI-Fraud-Detection"
demo_url: "https://drive.google.com/drive/folders/12lTgo-jhfy3R7TfUFR0fNbd6cEnqGw7E?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

Integration of TigerGraph with SentinelGraph

Our primary database was TigerGraph Savanna, which we accessed using Python's pyTigerGraph. With about 10,000 transactions spread across 1,850 nodes, our graph schema represents UPI participants as four vertex types—UPI_User, UPI_Device, UPI_Merchant, and UPI_Location—connected by five connection edges, such as SENDS_MONEY and OWNS_DEVICE.

Four bespoke GSQL stored procedures that run server-side on TigerGraph's MPP engine were installed: detectCircularFlow, findDeviceAnomalies, calculateVelocity, and identifyMuleNetworks. Every incoming transaction uses runInstalledQuery() to initiate all four queries. The results are fed into our weighted FraudScorer class, which generates a risk score between 0 and 100 in less than a second.

The main benefit is that TigerGraph automatically detects a 4-hop circular money loop in a single graph traverse, whereas SQL takes five or more JOINs.

## Links

- Slides: https://drive.google.com/drive/folders/12lTgo-jhfy3R7TfUFR0fNbd6cEnqGw7E?usp=sharing
