---
layout: default
title: Reshape the Wild
summary: Alternate rules for using an hexagonal defined map
permalink: /rules/reshape_the_wild
parent: Rules
tags:
    - rules
    - official-article
contributors:
    - milly
---

Originally posted on the official website on [September 15th, 2019](https://reclaimthewild.net/index.php/2019/04/15/improvised-magic/)

# Reshape the Wild
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

*Today’s article is a special guest article! Milly’s been a prolific member of the community, writing interesting homebrew and providing copious notes and useful feedback. Today, he’s presenting rules to reshape how Reclaim the Wild’s tactical combat works – from a square grid, to a classic hex grid.*

Distances in Reclaim the Wild are usually measured in squares. However, some people may wish to use hexagonal maps for battles instead. Converting squares to hexes may be difficult, but this guide may help make the task less daunting!

## What is a hexagonal grid?

A hexagon is a shape that has six sides, as opposed to squares that have four. Hex maps typically have two variants: one with a horizontal (or “flat”) top, and one with vertical (or “flat”) sides. The principles outlined in this article will work the same in both variants, with one important exception: a flat-top hex map allows straight top-down (or north-south) movement, while a flat-side hex map allows straight left-right (or east-west) movement.

*Read more about hex-based combat below!*

The examples below show a Medium creature (marked in blue) moving in 3 hex increments in both cardinal directions.

{% include floating/image_center.html src="https://i.imgur.com/vypbXQV.png" description="Cardinal movement with flat-sided hexes" custom_width="90" %}

{% include floating/image_center.html src="https://i.imgur.com/hc0qT4m.png" description="Cardinal movement with flat-topped hexes" custom_width="90" %}

## Why would anyone use a hexagonal grid?

Hexagonal grids, like squares, are a way of breaking down a map into manageable increments. As such, both hexes and squares distort the map in ways that don’t make intuitive sense to humans.

The following is partly taken from [the Wikipedia page on hex maps](https://en.wikipedia.org/wiki/Hex_map), with simplified language!

Compared to squares, hexes have the following advantages:
* The distance between a hex’s center and its neighbor is always equal, when real-world measurements as used. This is in contrast to a square-grid, where a square’s cardinal neighbors’ centers are closer than the diagonal neighbors’.
* For Reclaim the Wild, the difference in diagonal movement described above requires alternating the cost of moving squares. The first diagonal square costs 1 movement, while the second diagonal square costs 2 movement, then the third diagonal square costs 1 movement again… and so on. As such, hexes make diagonal movement simpler, because you just count each hex as a point of movement.

Likewise, hexes have the following disadvantages:
* As seen in the previous section, movement along one axis cannot be straight. Flat-top hexagons do not allow simple east-west movement, and flat-side hexagons do not allow simple north-south movement. Zig-zagging movement must be used.
* Movement happens in 6 directions compared to the 8 in a square-grid map. This may reduce your options to escape, and allows 6 enemies to fully surround a Medium creature rather than 8!
* Partial hexes may come up when dealing with structures, which are often created as squares or rectangles. Movement within a partial hex may be restricted, despite not making much sense from a “real world” perspective. Just keep in mind that Reclaim the Wild uses video game logic more so than many other systems.

## How much space do larger creatures take up?

With square maps, creatures larger than Medium size take up squares commensurate to their size. In contrast, on a hex map creatures take on a form that is more similar to that of a hexagon, or a circle as interpreted through a hex map.

{% include floating/image_center.html src="https://i.imgur.com/bRcfWsz.png" description="Size of foes on hex map" custom_width="90" %}

A Large creature takes up three hexes, which should approximate four squares.

Huge creatures take up seven hexes, in a shape with a diameter of three hexes.

Gigantic creatures take up thirteen hexes, with a diameter of four hexes.

Colossal creatures take up nineteen hexes, with a diameter of five hexes. However, given the open-ended nature of the Colossal size category, they could certainly be even larger!

## What about attack ranges?

Most attack ranges work the same, just with hexes instead of squares. Just start counting from a hex next to your character, toward your intended target! The main difference with squares is the counting of diagonals. Diagonal movement doesn’t follow the 1-2-1 rule of squares, so diagonal movement is somewhat easier!

Below you will see a collection of various attack ranges, with the blue hex being the user of the ability, and red hexes being the range of the ability.

{% include floating/image_center.html src="https://i.imgur.com/JzcXnYZ.png" description="Examples of various Attack Ranges on a hex map" custom_width="90" %}

Blast is the first range worth noting, given its explicitly square-like nature that ignores the 1-2-1 diagonal distance counting. At first I thought to make the ranges match up with the equivalent creature size, but ultimately that would make the ranges resemble a circle. Instead, I settled upon a square-like shape, where the length and width of the range are the same.

Bursts, lines, and sweeps are mostly the same, though of course there are only six hexes around a medium creature, and diagonal movement is simple to count.

Cones work quite fine when the cone begins with two hexes and spreads out from there (see the bottom three figures labeled cone), but work quite strangely when the cone begins with a single hex (see the top three cone figures).

Ultimately, the easiest variant was following similar rules as the cones in the base system: X hexes forward, with the width increasing by 2 for every hex forward it moves. The shape looks strange in the abstraction of a hex map, but it mostly works the same. Just check if you’re using the Friendly Fire master mode before you shoot such a cone!

However, if drawing a cardinal-facing cone is too strange or covers too much ground, then just stick to the cones in the bottom half of the image.

Below you will see an equivalent map for the “X targets/squares within Y squares” map shown for attack ranges. The brown hexes are enemies, and the purple hexes are cover.

As you can see, the hex system has six enemies be within range of the “3 targets in 8 squares” attack, while the square system has five enemies be within range.

{% include floating/image_center.html src="https://i.imgur.com/6csRsLh.png" description="Example of “3 Targets within 8 Hexes” Attack Range" custom_width="90" %}

This is all the information I currently have for using hexadecimals. Let me know if you have any questions! Just stop on by the *Reclaim the Wild* Discord, or ask me through [my Twitter](https://twitter.com/MilleniaAntares).