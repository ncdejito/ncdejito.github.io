---
layout: page
title: Vision Language Action Models in Production
description: Wrote delivery plan from research prototypes
img: assets/img/ncdejito/vlm.png
importance: 1
category: work
related_publications: false
---

(Note: To respect previous employer privacy, this discussion focuses on high-level architecture, scoping process, and industry-shared practices.)

#### Situation

The team was challenged to enable a robotics platform to execute complex, real-world tasks based on natural language voice commands combined with visual inputs from the robot's environment. This required integrating cutting-edge Vision-Language-Action (VLA) models into a real-time production system.

#### Task

The primary organizational challenge was a lack of existing deep neural network (DNN) and ML deployment capability within our team of dedicated C++ robotics developers. This created a significant bottleneck in defining the feasibility and intermediate steps for implementing a VLA system.

My main tasks were to bridge this gap and define the full end-to-end strategy, including:
* Providing high-level guidance on VLA model architectures and deployment methods.
* Translating the vague product vision into a concrete, executable system diagram and delivery plan.
* Scoping personal technical contributions in key robotics areas essential for VLA execution.

#### Action

Leveraging my prior ML and data experience, I led the technical scoping process, moving the project from vague vision to a detailed, actionable plan broken down into Epics and granular tickets.

A. System and Deployment Architecture

I designed the high-level system flow:

* Input Pipeline: Defined the flow from voice command (Speech-to-Text translation) to the central LLM/VLA model, including the fusion of text and visual data (images from the robot).
* Local Deployment Scoping: Investigated and scoped optimal inference options for local, on-robot deployment, including selecting appropriate tooling and defining alignment matrices for input/output sizes between different model components (e.g., visual encoders, LLM output, motion planners).
* Deployment Procedures: Established the necessary steps for model finetuning and updating in a production environment.

B. Personal Technical Contributions (Interface Design & Bug Resolution)

My personal contributions were critical in enabling the successful execution of the model's output:

* Path Planning: Designed robust interfaces for the LLM output to seamlessly integrate with our existing path planning modules, and resolved critical bugs in the system's ability to translate high-level action commands into executable trajectories.
* Motion Control: Designed and refined the interfaces and logic within the motion control modules to ensure the robot could reliably execute the LLM-derived movement commands, resolving bugs related to physical constraints and dynamic control.

#### Result

While ultimately the project implementation was transferred to another team due to an internal restructuring and insufficient local manpower, the action phase yielded a crucial, tangible result:

* Established a Concrete Blueprint: I successfully created a high-level system diagram, Epics, and a detailed ticket breakdown, providing a production-ready roadmap for VLA implementation. This work validated the feasibility of the concept and reduced the unknown technical risk for the organization.
* Demonstrated Technical Leadership: My ability to scope the project and define technical requirements acted as a crucial supplement to the team's C++ expertise, demonstrating the ability to rapidly integrate and plan advanced ML technologies.

This experience represents a significant "stretch project" in my portfolio, highlighting my deep interest and competency in physical AI and my belief in the technology's transformative potential for streamlining and simplifying future robotics development.


#### Relevant links:
* (c) Image from [Dyson page](https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/robot-vacuums/vis-nav/pdp/277-2023/gallery/277_7_smart_home_connected_SUBLNK_gallery_image.jpg?cropPathE=desktop&fit=stretch,1&wid=1152)
* Project context: [Website](https://www.dyson.com/support/voice/google-assistant)
