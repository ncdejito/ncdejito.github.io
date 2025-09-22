---
layout: post
title: Connect IR Sensor to ROS2
date: 2024-01-27 11:46:00
description: Connect IR Sensor to ROS2
tags: swe
categories: deployment
thumbnail: assets/img/9.jpg
images:
  compare: true
  slider: true
---

#### Summary

Connect IR Sensor to ROS2

* [Demo](https://youtu.be/c4Xirzo_jJk)
* [Code](https://github.com/ncdejito/ir-sensor-ros2)

#### Why
* Outdated documentation of how to do it - rosserial is ROS1, ros2arduino was updated 2 years ago
* Approachable python interface vs more complex frameworks - micro-ros, arduino-cli, johnny-five requires nodejs install
* No need to code in Arduino C - enabled by the Firmata protocol

#### Software
* ROS2 Humble
* pyFirmata
* Arduino IDE

#### Hardware
* [Sharp IR Sensor](https://www.sparkfun.com/products/12728)
* Arduino UNO

#### Steps:

1. Wire IR sensor using [this diagram](http://wiki.ros.org/rosserial_arduino/Tutorials/IR%20Ranger)

1. On the arduino IDE, upload `File > Examples > Firmata > StandardFirmata` to the Arduino Uno board (following [this tutorial](https://roboticsbackend.com/arduino-standard-firmata-tutorial/))

1. Get device location from the lower right part of Arduino IDE, for me it was `/dev/ttyACM0`

1. Install pyfirmata
```
sudo apt install python3-pip
python3 -m pip install pyfirmata
python3
```

1. Modify device location in the script `ir_sensor_pyfirmata.py`.

1. Test if the range readings are read by pyfirmata by running the script.

1. Test message publishing and subscribing using [this tutorial](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html#) and replacing the publisher and subscriber functions with the scripts in this repo.
    * `publisher_member_function.py`
    * `subscriber_member_function.py`

Bonus:
* If [running inside docker](https://ncdejito.github.io/nav2-docker/), connect docker container with Arduino device by adding a `--device` flag

```
docker run -it --net=host --device /dev/dri/ --device /dev/ttyACM0 -e DISPLAY=$DISPLAY -v $HOME/.Xauthority:/root/.Xauthority:ro osrf/ros:humble-desktop-nav2
```


#### References
* [ROS2 Humble Docs: Writing a simple py publisher and subscriber](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html#)
* [ROSSerial: Arduino + IR Sensor](http://wiki.ros.org/rosserial_arduino/Tutorials/IR%20Ranger)
* [Robotics Backend: Arduino Standard Firmata Tutorial](https://roboticsbackend.com/arduino-standard-firmata-tutorial/)
* [Simulate robot navigation inside Docker](https://ncdejito.github.io/nav2-docker/)