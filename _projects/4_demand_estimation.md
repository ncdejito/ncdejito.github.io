---
layout: page
title: Find customers without years of data collection
description: Estimate customer demand from satellite image based computer vision AI model
img: assets/img/ncdejito/demand-estimation.png
importance: 4
category: work
giscus_comments: false
---
(c) Headline image from [ThinkingMachine blogpost](https://stories.thinkingmachin.es/bridging-the-gap-with-geoai/)

Project context: [External blogpost](https://stories.thinkingmachin.es/wealth-detection-satellite-image/)
* A comparable project as above but with larger regional provider, anonymized to preserve client identity.

#### Summary
Estimate customer demand and infrastructural needs using a satellite image-based Computer Vision AI model deployed at regional scale.

This project, similar in scope and methodology to the Vision AI for wealth detection, involved applying advanced Computer Vision (CV) and Machine Learning (ML) techniques to massive satellite imagery datasets for a major regional telecommunications provider. Our goal was to generate crucial, previously uncollectable data that enabled strategic network planning, customer targeting, and infrastructure rollout decisions at a fraction of the commercial cost.

#### Situation

The regional telecommunications client required detailed, high-resolution geospatial data—such as building locations, usage, and density—to optimize its multi-regional network expansion and predict customer demand. Relying on existing commercial APIs was prohibitively expensive (USD15 - USD59 per sq km), and collecting this data manually across massive service areas was infeasible and time-consuming. Furthermore, the initial models developed needed a significant lift in accuracy to meet the client's usability threshold for real-world deployment.

#### Task

My central tasks were to engineer a complete, cost-efficient, and highly accurate end-to-end data generation pipeline. This involved:
* Model Performance: Enhancing the core AI model accuracy by at least 13% to surpass the client's critical usability threshold.
* Scalability & Speed: Dramatically reducing the processing time for petabyte-scale satellite data from days to hours to ensure on-time project delivery.
* Cost Savings: Developing and productionalizing multiple in-house data products to save the client up to $59 per square kilometer compared to commercial alternatives.
* Production Readiness: Establishing robust MLOps, including deployment, data quality, and API automation.

#### Action

I led several critical technical efforts spanning model development, large-scale deployment, and MLOps implementation:

A. Model Enhancement and Novel Architecture
* Accuracy Breakthrough: I performed intensive error analysis on the initial model predictions and developed a novel graph-based solution (implemented a graph-based model feature for building use classification model) that captured spatial relationships between features. This effort enhanced the accuracy by 13%, surpassing the critical usability threshold required by the international telecommunications client.
* Hybrid Prototyping: Prototyped a building classification model that involved modifying PyTorch layers to successfully enable the fusion of image and tabular features into a single, comprehensive model.

B. Massively Distributed Deployment
* Accelerated Rollout: To process over 50 GB worth of satellite images quickly, I engineered a highly distributed computing solution. By distributing the compute load on 40 VMs via GCP DataFlow, I rolled out the ML model in 2 hours, compared to the usual 2 days required on a single machine, ensuring on-time project delivery.
* Optimization: Further reduced the model rollout runtime by 2 minutes by optimizing a graph calculation with a cached hashmap approach.

C. Productionalization and Cost-Saving Products
* Data Product Development: Developed and productionalized two key object detection data products: an object detection model (saving USD15/sq km) and a building height prediction model (saving USD59/sq km) for the client's rollout.
* MLOps and API Automation: Automated static analysis, profiling, and test coverage for ML APIs to ensure continuous quality and reliability in the production environment.
* Data Quality Pipeline: Productionalized an SQL pipeline with automated data quality checks using DataForm to maintain data integrity throughout the pipeline.
* Client Management: Achieved acceptance criteria for the enterprise ML CV project by successfully negotiating an image-based error-correction web-app feature with the client, ensuring they had the final necessary control over model outputs.

#### Result

The successful execution of the project delivered immediate and substantial value to the client:
* Cost-Efficient Data Generation: Successfully built, trained, and deployed ML models rolled out to 50+ GB worth of satellite images to generate previously unknowable and infeasible data, saving the regional telco client $15/sq km vs commercial API for the core data product.
* Critical Usability Achieved: The model’s accuracy was enhanced by 13% through error analysis and a novel graph-based solution, successfully surpassing the critical usability threshold for the international telecommunications client.
* Accelerated Delivery: The successful distribution of compute via GCP DataFlow allowed the model rollout to be completed in 2 hours (vs 2 days), ensuring on-time project delivery.
* Strengthened Partnership: I taught fundamental ML/DL to external clients, contributing to a good relationship for return engagement and reinforcing their trust in our expertise.