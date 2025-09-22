---
layout: post
title: Python and Arduino via Smartphones
date: 2024-01-27 11:46:00
description: Python and Arduino via Smartphones
tags: swe
categories: deployment
thumbnail: assets/img/9.jpg
images:
  compare: true
  slider: true
---

#### Summary
Run python code on a smartphone to see LED turn on.

[DEMO](https://github.com/ncdejito/android-arduino/blob/main/assets/android-arduino-1.gif?raw=true)

#### Motivation
* Wirelessly run python programs that control Arduino
* Control android without rooting
* Access sensors available in smartphone i.e. camera, GPS


#### Usage
Follow `Setup` instructions then run the following on python ssh terminal to control LED.
```
tn.write('1'.encode('ascii')) # on
tn.write('0'.encode('ascii')) # off
```


#### Requirements
##### Hardware
1. Android phone (tested on 7.0 and 8.1)
1. Arduino UNO
1. LED
1. USB Cable Type A/B
1. OTG cable USB to micro-USB

##### Software
1. Arduino IDE
1. Termux (F-Droid version)
1. Server Bridge X

#### Setup
All code is available on [github](https://github.com/ncdejito/android-arduino)

1. On the PC, install Arduino IDE.
1. Connect Arduino UNO to PC using USB Cable Type A/B.
1. Upload sketch.ino to your Ardunio board using the Upload button in the Arduino IDE.

1. On the android smartphone, install Server Bridge X and Termux via F-Droid marketplace.
1. Open Android app Server Bridge X.
1. Attach OTG cable USB to micro-USB to Arduino. Press 'ok' when asked to Allow the app ServerBridgeX to access the USB device.
1. Press play in Server Bridge X.

1. Open Android app Termux.
1. Connect smartphone to same network as PC.
1. On Termux, install SSH tools and python via commands in `script.sh`.
1. On the PC command line, access the smartphone terminal using SSH.

1. On PC command line, run Python.
1. On Python, run `send.py` commands. LED should turn on/off based on the command sent (1 or 0).


#### References
* [SSH to any Android Phone](https://www.youtube.com/watch?v=broLBoU5rZ4)
* [Control Arduino via USB OTG from Android](https://www.danbp.org/p/en/node/140)
* [Server Bridge X](https://play.google.com/store/apps/details?id=com.cidtepole.serverbridge&hl=en)
* [Termux](https://f-droid.org/en/packages/com.termux/)

