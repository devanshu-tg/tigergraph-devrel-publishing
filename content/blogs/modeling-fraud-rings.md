---
id: "blg_m3p8tr"
slug: "modeling-fraud-rings"
title: "Modeling Fraud Rings with GSQL Pattern Matching"
author: "TigerGraph DevRel"
published_at: "2026-10-01T09:00:00+05:30"
updated_at: "2026-10-01T09:00:00+05:30"
tags: ["gsql", "fraud", "tutorial"]
cover_image_url: "/images/blogs/fraud-rings.svg"
canonical_url: null
featured: true
---

Fraud rarely happens alone. A single stolen card is a problem; a group of accounts that share devices, addresses and phone numbers and pass money between themselves is a ring. Graphs are a natural way to find them.

## The schema

We model four vertex types (`Account`, `Device`, `Address` and `Phone`) and connect accounts to everything they use. Payments between accounts are edges with an amount and a timestamp.

```gsql
CREATE VERTEX Account (PRIMARY_ID id STRING, opened DATETIME)
CREATE VERTEX Device (PRIMARY_ID id STRING)
CREATE UNDIRECTED EDGE uses_device (FROM Account, TO Device)
CREATE DIRECTED EDGE pays (FROM Account, TO Account, amount DOUBLE, ts DATETIME)
```

## Finding shared identifiers

The first signal is accounts that share a device. With GSQL pattern matching this is a two-hop query:

```gsql
SELECT a2 FROM Account:a1 -(uses_device)- Device:d -(uses_device)- Account:a2
WHERE a1 != a2
```

## Finding money cycles

The second signal is money that leaves an account and comes back through a few hops. Combining both signals gives a short list of suspicious groups that an analyst can review.

## Next steps

Try this on your own data with a free TigerGraph Cloud instance, and join our next webinar to see it run on a live stream of transactions.
