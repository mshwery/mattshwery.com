---
layout: post
categories: articles
title: Redux + Webpack = Time Travel
published: true
---

I've been developing sites for the past 7 or 8 years now, and I've finally landed on one of the best frontend development toolchains.

Admittedly, I was reluctant to dive into a few of these technologies: Facebook's [React](https://facebook.github.io/react/), and [Webpack](https://webpack.github.io/) in particular. I played with Webpack and prematurely dismissed it, feeling more comfortable composing code in [Gulp](http://gulpjs.com/) to build out my asset pipeline.

Then I watched [Dan Abramov](https://github.com/gaearon)'s talk on Redux, Hot Loading, and Time Travel. It's a really great talk, and worth watching when you have a spare 30 minutes:

<iframe width="100%" height="360" src="https://www.youtube.com/embed/xsSnOQynTHs" frameborder="0" allowfullscreen></iframe>

<br />
The really awesome thing is that with [Redux](http://rackt.github.io/redux/), you decouple actions from "reducers" which are just pure functions. Reducers take state and an action, and return the new state. They describe how actions modify state.

Because actions are just plain objects (without middleware) and reducers are pure functions, you can do cool things like keep track of every action and undo/replay them. [Redux Dev Tools](https://github.com/gaearon/redux-devtools) builds on this concept.

Now, I know we're getting into a lot of moving parts, but it gets better. Add Webpack to the mix and you can enable "hot reloading", which is basically live reload on crack. Hot reloading will swap out css or javascript code in the browser as you change it in your text editor, *without losing state*.

All of these things combined can make development super smooth. 
