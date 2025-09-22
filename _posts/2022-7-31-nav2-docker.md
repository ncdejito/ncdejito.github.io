---
layout: post
title: Simulate robot navigation inside Docker
date: 2024-01-27 11:46:00
description: Simulate robot navigation inside Docker
tags: swe
categories: deployment
thumbnail: assets/img/9.jpg
images:
  compare: true
  slider: true
---

#### Summary

Run Nav2 quickstart inside Docker

<img class="img-fluid" src="../img/ncdejito/nav2_docker.png">

#### Why
* Reduce setup steps by getting ROS pre-installed
* Develop navigation applications in the safety of an isolated Docker environment
* Encourage development with ease of use

#### Specs
* Nav2
* ROS galactic Geochelone [switched from Humble for stability]
* tested on Ubuntu 20.04

#### Steps
1. Get docker image. Test that it's working with [this example](https://docs.ros.org/en/galactic/How-To-Guides/Run-2-nodes-in-single-or-separate-docker-containers.html)
```
docker pull osrf/ros:galactic-desktop
```

2. Connect docker to linux display
```
export DISPLAY=:0.0
xhost +local:docker
```

3. Run docker
```
docker run -it --net=host --device /dev/dri/ -e DISPLAY=$DISPLAY -v $HOME/.Xauthority:/root/.Xauthority:ro osrf/ros:galactic-desktop
```

4. Install [nav2](https://navigation.ros.org/getting_started/index.html)
```
apt update
apt install ros-galactic-navigation2 -y
apt install ros-galactic-nav2-bringup -y
apt install ros-galactic-turtlebot3* -y
```

5. Load ROS environment variables
```
source /opt/ros/galactic/setup.bash
export TURTLEBOT3_MODEL=waffle
export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:/opt/ros/galactic/share/turtlebot3_gazebo/models
```

6. Run navigation example
```
ros2 launch nav2_bringup tb3_simulation_launch.py headless:=False
```

7. [Optional] Add workspace tools
```
apt install vim -y
apt install tmux -y
```

8. Save progress to workspace
```
# in a separate terminal
docker ps
docker commit 3204cbea0e30 osrf/ros:galactic-desktop-nav2
```

#### Fixes for common errors
`[ERROR] [rviz2-5]: process has died [pid 75, exit code -11, cmd '/opt/ros/galactic/lib/rviz2/rviz2 -d /opt/ros/galactic/share/nav2_bringup/rviz/nav2_default_view.rviz --ros-args']`
* Run the following:
```
export DISPLAY=:0.0
xhost +local:docker
```
`Error: Non-unique names detected in type collision in <link name='camera_link'>`
* reinstall turtlebot packages
```
apt remove --purge ros-galactic-turtlebot3*
apt install ros-galactic-turtlebot3* -y
```

#### References
[1] [Trying out ROS2 galactic Hawksbill using Docker](https://robofoundry.medium.com/trying-out-ros2-galactic-hawksbill-using-docker-4490bc88c926)