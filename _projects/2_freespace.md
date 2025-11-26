---
layout: page
title: Navigating Uncertainty with Computer Vision
description: Enabled new methods for navigation with 3x faster image throughput
img: assets/img/ncdejito/slam.png
importance: 2
category: work
related_publications: false
---

#### Summary
Freespace detection optimization. My personal contributions:
* Triple throughput of image stream from front camera image by separating segmentation into background thread
* Motion control - tuning potential field/cost functions

#### Situation

Our consumer robot vacuum relied on a tightly coupled camera stream and computer vision pipeline for Simultaneous Localization and Mapping (SLAM), as well as feature detection. The system faced critical performance bottlenecks due to a monolithic processing architecture. Specifically, the system could only process a single camera stream at X frames per second (fps). This limitation directly blocked the adoption of advanced navigation and SLAM algorithms that required higher image throughput to handle challenging obstacles and create robust maps.

#### Task

The primary goal was to triple the image throughput to a minimum of 3X fps and decouple the pipeline's computational bottlenecks. This improvement was necessary to unlock new methods for SLAM and advanced robot mapping, ultimately creating a more capable and reliable navigation system for our product.

This required addressing several core technical challenges:

* Concurrency Issues: Resolving tight coupling and asynchronous messaging conflicts within the existing SLAM output mechanisms.
* Vector Processing Saturation: Freeing up computational capacity in shared vector processing resources that were becoming saturated.
* API Extension: Enhancing the proprietary Computer Vision processing API to support the custom embedded AI applications required by the new features.

#### Action

I executed a strategic refactoring and optimization effort focused on parallelizing the most demanding components of the vision pipeline:
* Threaded Decoupling for Throughput: I analyzed the camera stream's processing path and separated the stream into multiple threads. This critical change decoupled the previously tight integration, allowing for concurrent processing and effectively tripling the image extraction rate from X fps to 3X fps.
* Vector Processing Optimization: I identified and decoupled bottlenecks in vector processing by allocating specific, separate threads for these high-demand computations. This strategic move freed up substantial CPU capacity, which was then reallocated for running additional neural networks and complex computational tasks.
* SLAM Output Concurrency: To ensure stability at the higher throughput, I refactored the messaging architecture by decoupling the asynchronous messaging of SLAM outputs, which successfully resolved existing concurrency issues that had plagued the system.
* API Extension for Custom AI: I extended the computer vision processing API to provide custom functionalities specifically tailored for our proprietary embedded AI applications. This enabled engineering teams to develop new features without modifying the core vision pipeline.

#### Result

The architectural and threading optimizations successfully removed the previous performance ceilings, yielding a substantial improvement in robot capabilities and robustness.
* 3x Faster Image Throughput: The successful refactoring tripled the image throughput to 3X fps, directly enabling previously blocked, advanced navigation algorithms.
* Enhanced SLAM Capabilities: This throughput increase enabled a new, robust method of SLAM, allowing the robot to better handle challenging obstacles and unstructured environments that were previously navigational failure points.
* Advanced Mapping Unlocked: By successfully extracting more images from the previously tightly coupled camera stream, we enabled a new kind of robot mapping that provided richer, more accurate environmental data for the robot's long-term intelligence and task execution.
* Platform Readiness: The extended Computer Vision API empowered downstream teams to accelerate the integration of their custom, proprietary embedded AI applications.

The overall outcome was the enabled new methods for navigation with 3x faster image throughput, significantly raising the performance benchmark and the competitive advantage of the consumer robot vacuum platform.

#### Relevant links:
* (c) Image from [Dyson page](https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/robot-vacuums/vis-nav/pdp/277-2023/gallery/277_1_hero_SUBLNK_gallery_image.jpg?cropPathE=desktop&fit=stretch,1&wid=1152)
* Project context: [Video](https://www.youtube.com/watch?v=lAOifMtNra0)