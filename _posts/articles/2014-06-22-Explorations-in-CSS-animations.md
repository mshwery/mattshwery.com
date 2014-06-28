---
layout: post
categories: articles
title: Explorations in CSS animations
published: true
---

After begrudgingly installing Facebook's Messenger app on my Nexus 5, I was thoroughly entranced by the realistically springy animations used by the app's "chat heads" feature.

I wanted to try to replicate this as much as possible with plain old web standards: html, css, and javascript. Here's what I threw together:

<p data-height="500" data-theme-id="0" data-slug-hash="mjedK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/mshwery/pen/mjedK/'>Chatheads style animations</a> by Matt Shwery (<a href='http://codepen.io/mshwery'>@mshwery</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

### Update:

After [@_mculp](https://twitter.com/_mculp/status/480926629850398720) pointed me towards Facebook's open-source spring animation library written in Java – [Rebound](http://facebook.github.io/rebound/) – I made a fork and implemented this with their javascript port. The animations feel much closer to the actual Messenger app.

I also optimized the drag positioning by handing off the actual drawing of the new x/y coordinates to a separate function that gets called every 16ms (~60fps), meanwhile the x/y coordinates get updates both by drag movements and by the spring physics resolver.

You can see the updated version here: 

<p data-height="500" data-theme-id="0" data-slug-hash="BgImL" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/mshwery/pen/BgImL/'>Chatheads style animations</a> by Matt Shwery (<a href='http://codepen.io/mshwery'>@mshwery</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<a href="http://codepen.io/mshwery/pen/BgImL" class="codepen" target="_blank">Check out the code in action on CodePen</a>
