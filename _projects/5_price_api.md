---
layout: page
title: Faster apartment deals with ML
description: Deployed ML backend services for instantaneous price estimates
img: assets/img/ncdejito/price-prediction.jpeg
importance: 5
category: work
giscus_comments: false
---

Project context: [External blogpost](https://stories.thinkingmachin.es/how-ohmyhome-used-machine-learning-for-real-estate-valuation/)
Description: Leading the development, deployment, and MLOps lifecycle for real estate price prediction models across multiple international markets for a major PropTech client.

This project focused on developing and productionalizing machine learning models to provide accurate, real-time real estate valuation and pricing for an international client (Ohmyhome, as per the context link). My role was central to the entire lifecycle, ensuring model performance, maintaining low-latency service, and implementing the MLOps practices necessary for scale and reliability across distinct markets.

🌟 My Contributions to Real Estate Valuation ML

#### Situation

The client needed to rapidly deploy accurate real estate valuation services across multiple international markets, each with unique data patterns and regulatory environments. This required building, deploying, and maintaining several high-availability Machine Learning (ML) models and APIs. The team faced challenges related to cost efficiency, service latency, and the need for rigorous MLOps practices to handle frequent model retraining and deployment across a global infrastructure.

#### Task

My core task was to serve as the full-stack MLOps engineer and model owner for the predictive pricing service. This involved:
* Service Ownership: Developing and owning the full lifecycle of multiple ML models and their serving APIs across different markets.
* Performance & Cost Optimization: Significantly reducing GCP storage costs and decreasing API latency to meet client expectations for a real-time service.
* Infrastructure Reliability: Implementing best practices for CI/CD, access control, and data pipeline reliability using Kubernetes and GCP services.

#### Action

I executed a comprehensive set of actions across model development, infrastructure, and deployment to ensure a scalable and reliable service:

A. Model Development and Service Leadership
* Full Ownership: I owned the development of 5 distinct ML models for real estate pricing, tailored for various operational markets.
* API Development & MLOps: I led the development of 3 initial backend APIs serving these ML models. By rigorously following MLOps best practices and CI/CD with Kubernetes, this initial success led to extended client engagement with 2 more APIs.
* On-Call Responsibility: I served as the primary on-call engineer for the 5 APIs deployed on the Kubernetes CI/CD system, ensuring high-availability operations across all international markets.

B. Cost and Performance Optimization
* Cost Reduction: I analyzed the output format of the ML models and optimized the data serialization, successfully reducing recurring GCP storage costs by optimizing ML output file size by an order of 10.
* Latency Reduction: I identified data fetching as a key bottleneck and implemented a caching layer for query results on GCP BigQuery, which reduced latency per ML API call by 3 seconds, significantly improving the real-time user experience.

C. Productionization and Governance
* Data Pipeline Ownership: I handled data ingestion, processing, and monitoring data pipelines necessary for weekly model retraining and data integrity.
* Access Control: I established strong security and operational governance by configuring access for team members with GCP IAM and K8s RBAC, ensuring secure and granular control over the production environment.

#### Result

My focus on reliable MLOps and service optimization delivered a high-performance, cost-efficient, and trustworthy product:
* Extended Client Engagement: The robust deployment and reliable service, driven by following MLOps best practices and CI/CD with Kubernetes, led to extended client engagement with 2 more APIs being developed.
* Financial Efficiency: I significantly reduced recurring GCP storage costs by optimizing ML output file size by an order of 10, resulting in tangible operational savings for the client.
* Service Performance: By caching data for queries on GCP BigQuery, the service saw a marked reduction in latency per ML API call by 3 seconds, improving user experience and system reliability.
* Reliable Infrastructure: The end-to-end management of the data pipelines and Kubernetes deployment established a stable foundation for the client’s international real estate valuation service.
