---
layout: post
categories: articles
title: Device Independence
date: 2013-03-27
---

The world of screens is multiplying, and with it the use of Responsive Design. But [we're still figuring it out](http://alistapart.com/article/responsive-web-design).

#### The web is responsive by default.

Not really the web so much as I mean browsers. Browsers render html rather flexibly. Elements have default styles that allow fluidity. For every style you write, you create a more rigid definition of how an element should be rendered.


#### What if I use media queries?

That's great. Really, media queries are a handy way to define styles selectively so your. I used to do something like this:

{% highlight css %}
  @media all and (max-device-width: 480px) { … }
{% endhighlight %}

I defined media queries around device dimensions that I was familiar with (like the iPhone). But this one wont target iPhone 5, nor many Android devices.

I should have been doing this:

{% highlight css %}
  @media all and (max-width: 600px) { … }
{% endhighlight %}

I shifted my media queries to focus on where the design breaks. It is called a breakpoint, after all. Defining breakpoints by content/layout rather than device dimensions covers a much broader range of displays.


#### When should I aim for responsive design?

Generally, device agnosticism is a good idea. Unless you have a specific reason for rigidity. Cennydd Bowles has a nice method to help you figure out when to use RWD – he calls [the gradient chart](http://cennydd.co.uk/2013/the-gradient-chart).


#### RWD tips & tricks

Fortunately, W3C has many proposals and drafts that will be coming of age soon. I mention some of my favorites in this talk:

<script async class="speakerdeck-embed" data-id="5e815a0064530130f08a12313d04fda1" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
