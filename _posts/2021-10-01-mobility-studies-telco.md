---
layout: post
title: Optimizing Fleet Operations from the Telecom Learnings
date: 2021-10-01 00:00:00
description: Lessons from building subscriber mobility systems that fleet managers can use
tags: data-science
categories: case-study
---

# Optimizing Fleet Operations from the Telecom Learnings

---

Telecom companies and fleet operators have more in common than either side usually admits.

Both manage large numbers of mobile assets — subscribers moving across a network, vehicles moving across a city. Both ingest massive streams of location signals. Both need to predict where demand will spike, identify gaps in coverage, and allocate capacity before the moment of need rather than after. Both operate at a scale where small modeling improvements translate directly into millions of dollars.

I spent two years building subscriber mobility systems for a telecommunications company serving millions of users across a national network. The problems I worked on — demand forecasting, gap identification, asset segmentation — are the same problems fleet operations teams are wrestling with today. The vocabulary is different. The math is the same.

Here are the four ideas that translate most directly.

---

## 1. Your High-Value Assets Have a Mobility Signature

In telecom, not all subscribers are equal. A segment called **high-value mobility subscribers** — frequent travelers, long-distance commuters, users crossing multiple regions daily — drove a disproportionate share of network revenue while also generating the most strain on the system during peak periods. Identifying them wasn't about demographics. It was about movement patterns: how far they traveled, how regularly, which nodes they passed through, and how their patterns shifted across days of the week.

The method was deceptively simple: analyze site traffic and inter-site transitions to reconstruct individual mobility signatures from the raw signal of cell tower handoffs. No survey data. No declared preference. Just revealed behavior from the movement itself.

**Fleet translation:** Your high-utilization vehicles — the ones generating 80% of your revenue miles — have the same kind of signature in your GPS ping data. Daily range, consistency of route, time-of-day patterns, frequency of repositioning events. A vehicle that operates on a fixed commuter corridor behaves fundamentally differently from one deployed for on-demand trips, and both differ from a scheduled paratransit run. Identifying those clusters from operational data, rather than relying on how the asset was originally categorized, gives you a more accurate picture of where your real capacity constraints live.

---

## 2. Demand Appears in the Data Before It Appears in the Street

One project I'm particularly proud of: building a discovery algorithm to identify **upcoming summer destinations** — beach towns, mountain resorts, tourist corridors — before the season actually began.

The inputs were: historical site traffic volume, subscriber mobility patterns across the network graph, and the rate of change in traffic at each node relative to seasonal baselines. The algorithm used graph theory to identify clusters of sites that were seeing accelerating inbound flow from geographically dispersed origins — a signature that precedes a destination boom rather than following it.

We validated the output against ground truth reports from local field teams. The algorithm found the right places, at the right time, early enough to actually act on.

**Fleet translation:** GPS pings and operator feeds contain the same leading signal. When you start seeing unusual inbound flow to a specific zone — from origins that don't normally route there, at volumes above seasonal baseline — that's the demand signature arriving before the explicit booking or request does. Systems that detect this pattern can pre-position vehicles, adjust driver incentives, or open capacity in corridors that haven't yet registered as hot in the dispatch queue.

Reacting to demand is table stakes. The competitive advantage is detecting it early.

---

## 3. Map Demand Against Supply to Find the Revenue Gaps

One of the clearest wins I produced: overlaying subscriber mobility data against the existing network infrastructure map to identify **popular locations with no cell coverage**.

The analysis wasn't complicated. Take the density of subscribers moving through or toward a location. Cross-reference against cell site coverage polygons. Find the high-traffic zones where coverage was absent or degraded. Rank by estimated subscriber volume and usage intensity.

The network team used the output to prioritize site installations. Several of those sites now generate USD 51,000 per day in new revenue. The locations were always there. The demand was always there. The gap just hadn't been made visible in a way that was actionable.

**Fleet translation:** The equivalent analysis for fleet operations is straightforward: take trip request data or mobility demand signals (from GPS pings, operator feeds, or third-party data), overlay against current vehicle routing coverage, and find the zones with high latent demand and low vehicle presence.

This is not a new idea in fleet ops. What the telecom experience adds is the analytical discipline — ranking gaps by demand intensity, estimating the revenue potential of closing each gap, and building the case for infrastructure deployment in terms the business can act on. The gap identification is only useful if it produces a prioritized list, not just a map.

---

## 4. Movement Patterns Are a Better Segmentation Variable Than Demographics

To support targeted marketing campaigns, we needed to identify commuters and students in our subscriber base. The traditional approach — demographic proxies, survey-based profiling — was producing estimates at **353% of actual school enrollment figures**. Highly inflated. Useless for targeting.

We switched to mobility signatures. Students have a recognizable pattern: daily round trips between residential and institutional zones, concentrated in academic calendar windows, with distinctive midday behavior. Commuters have their own signature: high regularity, predictable origin-destination pairs, compressed morning and evening peaks.

Classifying subscribers by detected mobility type rather than demographic proxy got us to **138% of actual enrollment** — still slightly above, but in the range of useful rather than wildly misleading. The campaign targeting that followed was measurably more effective.

**Fleet translation:** Dispatching, pricing, and capacity planning all benefit from segmenting trips and assets by actual usage pattern rather than how they were originally labeled. A vehicle nominally classified as "on-demand" that empirically runs the same route at the same time every morning is effectively a fixed-route asset and should be planned accordingly. Discovering those de-facto patterns from GPS and trip data — rather than relying on how the operator entered the asset into the system — gives you a more accurate operational picture.

---

## The Shift Telecom Made (and Fleet Is Making)

Ten years ago, telecom companies managed their networks primarily on fixed infrastructure logic: build coverage, assign capacity, wait for demand to arrive. The shift to subscriber mobility modeling — treating the network as a dynamic system shaped by real-time movement patterns — changed how they planned, deployed, and optimized.

Fleet operations is at the same inflection point. The move from fixed-schedule thinking to **demand-responsive operations** is already underway. The data infrastructure is there: GPS pings, operator feeds, real-time position signals. What's often missing is the analytical layer that turns that data into actionable operational intelligence — demand forecasting, gap identification, movement-based segmentation.

Telecom ran this experiment first. The algorithms traveled well from cell sites to city streets. The only thing that changes is the asset type.

---

## The Parallel at a Glance

| Telecom Concept | Fleet Operations Analog |
|---|---|
| High-value mobility subscribers | High-utilization vehicles / anchor routes |
| Summer destination discovery (graph + flow) | Seasonal demand forecasting for vehicle positioning |
| Coverage gap → $51K/day new revenue | Underserved corridor identification |
| Commuter/student segmentation by mobility signature | Usage pattern segmentation (commute/on-demand/scheduled) |
| Petabyte ETL on sharded cell site data | GPS pings + operator feed ingestion at scale |

The problems are structurally identical. The data is in your systems already. The question is whether you're running the analysis.
