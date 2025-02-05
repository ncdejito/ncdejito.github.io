---
layout: essay
type: essay
title: "Autonomous Mobile Industry"
tags: [robotics]
---

Autonomous mobile robots - move ground platform from point A to B by calculating the optimal path from a map and navigating around obstacles using sensor data

Industry Applications
* Warehouse logistics - Locus, Geek+
* Delivery robots - PostMates, TinyMile
* Lawn mowing - Electric Sheep, Scythe Robotics
* Farming - Monarch Tractor
* Cleaning - iRobot, AvidBots
* Security - Cobalt Robotics
* Self Driving Cars - Cruise, Motional
* Navigation Software - Polymath robotics, MovelAI

Outlook - not so good
* Nuro - layoffs
* FedEx - shutdown
* Amazon Scout - shutdown
* ArgoAI - shutdown

Problems from people I met
* Warehouse robotics CEO - stream large 3D point cloud data to navigate around overhead obstacles (right now they use 2D)
* ML Engineer in Robotic vision company - How to detect lanes from streams
* Tech Lead from delivery robot company - How to develop good distributed systems

Required engineering skills
* C++ - programs need to be fast because they're real time, 1ms delay can kill somebody like in self-driving cars
* Navigation and Path Planning algorithms
* Distributed systems - sensor nodes publish data to a topic, algorithm nodes calculate best path from that topic, algorithm nodes publish desired move command to another topic
* Continuous Integration and Deployment - robot systems involve a lot of software pieces, and need to be developed in a safe and automated way to not break the full system

Sensors involved
* Radars - high range low accuracy
* Lidars - low range high accuracy
* Computer Vision - obstacle detection, semantic segmentation like image depth