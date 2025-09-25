---
layout: page
title: Table robot
description: Making an autonomous table from scratch
img: assets/img/ncdejito/table-bot.png
importance: 7
category: fun
---

[Demo](https://github.com/ncdejito/table-bot#demo---prototype-1)
[Slides](https://docs.google.com/presentation/d/1soTVk5oDR6poGmBGVkWSns3mVcw5qtx2BYByW9c3VRQ/edit#slide=id.g15d23346b1b_0_0)

## Contents
* Perception - lidar, camera
* Autonomy - nav2
* Movement - wiring, bill of materials, rpi setup

## Use Cases
platform for high-value tech
* Logistics - indoor warehousing, outdoor delivery
* Agriculture - autonomous watering, fertilizer spraying, weeding
* Construction - build site monitoring, floor plan sketching

## System Design
Robot
* Navigation - [Nav2](https://navigation.ros.org/)
* Sensing - RPLidar via [vegvisir](https://github.com/ncdejito/vegvisir)
* Remote Control - React+FastAPI via [rc-car](https://github.com/ncdejito/rc-car)
* Infrastructure - Ubuntu in RPi, MicroK8s

Server
* APIs - FastAPI
* Networking - Ngrok, Zerotier
* CI/CD - Github Actions, Docker, Podman

Client
* UserInput - Python-Telegram, React/React-Native for Mobile
* Map Progress UI - Streamlit, Mapbox
* Remote Control UI - rc-car

## Bill of Materials
Total=$445, PH prices converted to USD (Shopee)
* $50 - RPi
* $25 - Arduino
* $90 - Smartphone
* $130 - RPLidar
* $60 - 2x [DC 12V Motors with encoders](https://www.amazon.com/dp/B0792RX5X1?psc=1&ref=ppx_yo2ov_dt_b_product_details)
* $40 - Table with wheels
* $50 - [OpenBot components](https://github.com/isl-org/OpenBot/tree/master/body/diy#bill-of-materials)