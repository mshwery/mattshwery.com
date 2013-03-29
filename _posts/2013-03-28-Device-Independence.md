---
layout: post
title: Device Independence
---

Unfortunately, for all the methodologies that are used in Responsive Web Design, we still cling to the artifacts of old things.

#### The web is responsive by design.

We aren't really talking about the web so much as we're talking about browsers. Browsers render html rather flexibly. Elements have default styles that allow fluidity. For every style you write, you are creating a more rigid definition of how an element should be rendered.


#### So use media queries.

That's great. Really, media queries are a handy way to define styles selectively. For awhile I used to do something like this:

~~~ css
  @media all and (max-device-width: 480px) { … }
~~~

I was trying to narrowly define rules for a specific size (this one caters to iPhone 4-). This doesn't work on iPhone 5, nor on many Android devices. I was defining breakpoints by device.

But what I should have been doing was this:

~~~ css
  @media all and (max-width: 600px) { … }
~~~

I shifted my media queries to focus to on where the design breaks. It is called a breakpoint, after all. This covers a much wider range of browsers sizes (and devices) when you define breakpoints by content/layout rather than by device dimensions.


#### When should I aim for responsive design?

Generally, device agnosticism is a good idea. Unless you have a specific reason for rigidity. Cennydd Bowles has a nice method to help you figure out when to use RWD – he calls [the gradient chart](http://cennydd.co.uk/2013/the-gradient-chart).
