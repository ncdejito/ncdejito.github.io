---
layout: post
title: The Psycellium
date: 2024-01-27 11:46:00
description: The Psycellium
tags: swe
categories: deployment
thumbnail: assets/img/ncdejito/psycellium.PNG
images:
  compare: true
  slider: true
---

#### Goal
Assess the level of interaction between characters
#### Data
Sense8 season 1 subtitles
#### Insights
*	Which “sensates” interacted the most with whom;
*	Will interacted with the most people in the group;
*	Nomi is connected to a lot of influential people;
*	Wolfgang is the most distant character. 

I tried replicating the [network of thrones analysis](https://www.macalester.edu/~abeverid/thrones.html) because aside from being informative, it also looked so cool. I adapted the analysis to one of my favorite tv series, Sense8, and here's what the network looks like.

<img class="img-fluid" src="../img/ncdejito/Capture.PNG">
Figure 1. Network graph of Sense8 characters

The connections represent how often the characters interacted in the series. The size of the name measures how important that character is, based on how many other characters he/she interacted with. The distances between nodes represent the distance of each character to every other character, as measured by interactions.

The graph confirms that Will is the most important character in the story so far, the one with the "savior behavior". All sensates are labelled important by the size of their names, and the closeness of each sensate to another is shown. The closest pairs are Nomi-Lito, Wolfgang-Kala, and Sun-Capheus, which is confirmed from watching the show.

It is interesting to note that Nomi is closer to Will than Riley, but then again the measure is the number of interactions. Perhaps Will's interaction with Riley was infrequent but intimate moments, while Nomi interacted more with strategizing and coordinating with Will. Also, Felix looks to be of the same importance as other sensates, which I haven't discovered why yet.

Within the cluster, which are the closest sensates?
<img class="img-fluid" src="../img/ncdejito/sensates1.PNG">

Figure 2. Network graph of main characters

As expected, the closest sensates are Will and Riley. It is interesting to note though, that the network algorithm calculated Will and Nomi to be closer in the complete network graph, which means that Will and Nomi's world is closer (i.e. Will interacts with more people in Nomi's circle than Riley's, and vice versa). The only person Riley interacts with in Will's world is Diego, while in Nomi's world, Will interacted with nurses (when he saved Nomi from lobotomy), Neets (whenever Neets Nomi and Will are strategizing), and Jonas (strategic meetings). It seems like Capheus-Nomi, Riley-Nomi, and Sun-Kala should spend more time together, hopefully the creators find more ways to get them together.

Of the outside-cluster people closest to the sensates, which relationships are the strongest?
<img class="img-fluid" src="../img/ncdejito/sensateswithbestbuds1.PNG">
Figure 3. Network graph of main characters with best buds

Unexpectedly, Lito-Daniela seems to be the closest pair as measured by interactions. This would probably be caused by when Lito dated Dani, and when he saved Dani from Joaquin. Kala-Rajan seems to be the weakest pairing, which is understandable considering that Kala is not as open to Rajan as the other sensates are with their partners (except Lito, which is yet to disclose to Hernando what is happening to him as a Homo sensorium).

Diving deeper, here are also the centrality measures for each recurring character.

<img class="img-fluid" src="../img/ncdejito/sense8-metrics.PNG">
Figure 4. Measures of centrality for recurring characters

Will, being the central character, is number 1 for 3 centrality measures. Nomi is the most connected to the most influential people, as evidenced by her eigencentrality. From here we can see that Wolfgang is the most distant character from the group, with the largest closeness centrality. Sun has the highest betweenness centrality, which means she often appears when two or more characters are in a pinch, which attests to how useful and how badass she is in the show.
