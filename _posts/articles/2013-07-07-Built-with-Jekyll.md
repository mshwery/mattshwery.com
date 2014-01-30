---
layout: post
categories: articles
title: Built with Jekyll
featured_image: jekyll.png
---

Static sites are awesome. They're super fast, fully cacheable, database-free, and no-frills-easy to make. If you don't require database-driven content you can achieve plenty with a static site.

But maintenance sucks.

For every page of your static site, you've got repeated content (ie. headers, footers, nav sections, markup applied to collections of things). Think about making a change to a link in your header navigation. Now multiply that across every page... Not exactly DRY.

### The Best of Both Worlds

This site is built with [Jekyll](http://jekyllrb.com/), a generator for "simple, blog-aware, static sites". There are others, like [Middleman](http://middlemanapp.com/), but I'll just be looking at the basics of Jekyll for now.

With Jekyll, you can put together a large site using partials and nested templates. Jekyll gives you full control over every page, while giving you many benefits of a framework. I take advantage of loading page-specific javascript like [my d3.js example](/d3-js), and [archiving old sites](/shweplantis/) on my domain.

### Jekyll in Three Lines

Jekyll is stupid easy to get started. You'll need ruby installed, but after that these three lines generate your initial site.

{% highlight bash %}
~ $ gem install jekyll
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
~/my-awesome-site $ jekyll serve
# => Now browse to http://localhost:4000
{% endhighlight %}

### Jekyll on Heroku

You can use [Github Pages](https://help.github.com/articles/using-jekyll-with-pages) as a free hosting solution, but I chose to deploy to Heroku because Pages doesn't allow the use of Jekyll plugins yet. You can check out a [gist of my Heroku setup](https://gist.github.com/mshwery/5945291). I've used more complicated Heroku setups to leverage caching and multiple worker processes (using Unicorn), but I'll save that for another time.

### Why?

Now, my site isn't exactly impressive Jekyll stuff. But there are [plenty of other nerds](http://github.com/mojombo/jekyll/wiki/Sites) whose sites are. So why should you use Jekyll? Dylan Staley gave [some great reasons](http://dstaley.me/the-strange-case-of-jekyll-and-prose/#/why) in a recent talk.

I'm convinced static sites beat a CMS 90% of the time in terms of setup, speed, and ease. I'll be using either Jekyll or Middleman to create a new and improved <a href="http://www.federatedsample.com" target="_blank">FederatedSample.com</a> next.

So, what's your take on Jekyll?

