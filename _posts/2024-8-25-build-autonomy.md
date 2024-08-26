---
title: "Building Autonomy from Scratch"
tags: [robotics]
---

What makes a robot unique is its autonomy. Across the literature there have been ways this has been achieved through varying degrees of success. To avoid getting lost in the details, this document seeks to address the problem of building your own autonomy stack for a mobile robot, through a principles approach that focuses on the problems, learns from the mistakes of others, and defines clear expectations.

#### Concern of an Autonomy Stack
Recommend what to do given the situation. 
* Perception - form an idea of the world by getting information from sensors
* Localization - locate where you are on the map using sensor data
* Mapping - collect historical sensor data to form a map of where you have been
* Path Planning - plan path towards goal
* Motion Control - error-correct your movement to prevent deviation from the path
* Behavior - respond to environment stimuli

#### Considerations in choosing components
* Fulfills objective - reaches the goal
* Efficient - does not take too long
* Reactive - need to react in real-time to dynamic changing environment
* Modular - can easily switch between components
* Accomodates complexity - components need to talk to each other to fulfill their tasks
* Prioritized - does actions based on defined hierarchies of importance

#### Existing components
* Perception
    * LIDAR Sensors (Velodyne 3D)
        * Pros: Provides accurate distance measurements; well-suited for both indoor and outdoor environments.
        * Cons: Can be expensive; requires processing power for data interpretation.
    * RGB-D Cameras (Intel RealSense, StereoLabs Zed 2i)
        * Pros: Offers depth information along with color images; useful for detailed scene understanding.
        * Cons: Limited range compared to LIDAR; performance can degrade in low light conditions.
* Localization
    * [RTK GPS](https://www.sparkfun.com/rtk)
        * Pros: Provides centimeter-level accuracy, making it suitable for precision applications and enhancing reliability in challenging environments.
        * Cons: Requires a clear line of sight to satellites and a base station, which can be a limitation in certain terrains.
    * [AMCL](https://docs.nav2.org/configuration/packages/configuring-amcl.html)
        * Pros: Effective in various environments and can handle dynamic changes, making it suitable for indoor and outdoor applications.
        * Cons: Requires significant processing power, especially with a high number of particles, which may limit performance on resource-constrained systems.
    * [LOAM_Velodyne](https://wiki.ros.org/loam_velodyne)
        * Pros: Provides high-precision localization by continuously updating the map as the robot moves.
        * Cons: The setup and configuration can be complex, requiring a good understanding of LIDAR data processing and SLAM techniques.
* Mapping
    * [slam-toolbox](https://github.com/SteveMacenski/slam_toolbox)
        * Pros: Flexible and robust; supports 2D and 3D SLAM; useful for both indoor and outdoor mapping.
        * Cons: Can be complex to configure; requires tuning for different environments.
    * [GMapping](https://wiki.ros.org/gmapping)
        * Pros: Well-suited for 2D SLAM; relatively easy to set up and use.
        * Cons: Limited to 2D environments; may struggle with dynamic objects.
    * [ORB-SLAM3](https://github.com/UZ-SLAMLab/ORB_SLAM3)
        * Pros: Robust for both monocular and stereo setups; provides real-time performance.
        * Cons: More complex to implement; requires good feature detection.
* Path Planning
    * [Nav2](https://docs.nav2.org/index.html)
        * Pros: Comprehensive solution with a suite of tools; supports various path planning algorithms; integrates well with ROS.
        * Cons: Requires careful configuration; can be complex for beginners.
    * [Polymath Robotics APIs](https://www.polymathrobotics.com/product)
        * Pros: Offers flexible and customizable path planning solutions; well-suited for diverse applications.
        * Cons: Paid.
    * [DWB](https://docs.nav2.org/configuration/packages/configuring-dwb-controller.html) (Dynamic Window Approach)
        * Pros: Well-suited for real-time obstacle avoidance; simple to implement.
        * Cons: Limited in complex environments; requires tuning for different robot dynamics.
    * [Vector Pursuit](https://www.blackcoffeerobotics.com/blog/vector-pursuit-controller-plugin-for-ros2-navigation)
        * Pro: Low CPU usage and great for relatively clear terrains.
        * Con: Limited handling of environments with many dynamic obstacles.
* Motion Control
    * [Orocos KDL](https://www.orocos.org/kdl.html)
        * Pros: Simple and widely understood; effective for many control tasks.
        * Cons: May not handle complex dynamics well; requires tuning for optimal performance.
    * [ros2_control](https://control.ros.org/iron/index.html)
        * Pros: Standardized and widely used in the ROS ecosystem; supports various control strategies.
        * Cons: Requires familiarity with ROS; might need custom implementation for specific robots.
* Behavior
    * [BehaviorTree.CPP](https://github.com/BehaviorTree/BehaviorTree.CPP)
        * Pros: Provides a powerful framework for creating complex behaviors; modular and reusable.
        * Cons: Learning curve for new users; can become complex with extensive behaviors.
    * [SMACC2](https://github.com/robosoft-ai/SMACC2) Behavioral State Machines
        * Pros: Ideal for creating hierarchical state machines; integrates well with ROS2.
        * Cons: Requires understanding of state machines; may be overkill for simpler behaviors.
    * [SMACH](https://wiki.ros.org/smach) Hierarchical State Machines
        * Pros: Allows for organized and structured behavior design; supports concurrent states.
        * Cons: Can be complex to implement and understand; may introduce overhead.

#### Design for an indoor hospital cart
Needs: Effective navigation, patient interaction, and real-time responsiveness in a dynamic environment.
* Perception: LIDAR Sensors (2D LIDAR)
* Localization: AMCL
* Mapping: slam-toolbox
* Path Planning: Nav2
* Motion Control: ros2_control
* Behavior: BehaviorTree.CPP

#### Design for an outdoor farm tractor
Needs: Accuracy for rain or snow, real-time responsiveness, long runtimes.
* Perception: LIDAR Sensors (Velodyne 3D)
* Localization: RTK GPS
* Mapping: ORB-SLAM3
* Path Planning: Nav2 GPS
* Motion Control: ros2_control
* Behavior: BehaviorTree.CPP

#### References
* Springer Handbook of Robotics, by Bruno Siciliano Khatib

#### Notice of Generative AI use
This post was handwritten in outline form, then fed to Perplexity with the question "Can you suggest alternatives for the components provided in this list?"