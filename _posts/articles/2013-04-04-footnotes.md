---
layout: post
categories: articles
title: Footnotes
date: 2013-04-04
featured_image: footnotes.png
published: false
---
Let me clear things up right off: footnotes rock. Footnotes neatly connect a wealth of auxiliary information to the primary content you're reading. <sup><a href="#fn1" id="ref1" title="link-to-footnote">1</a></sup> They're a mainstay for serious writers, but haven't really been standardized when it comes to writing on the web.

While there's no html tag designated specifically for foot or end notes, there are some tags that help construct a reference and its footnote. First, there's the ```<sup>``` superscript tag, and then there's the lovely return-to-text unicode character ↩. We also have native anchor tag behavior that can jump-to-id:

~~~ html
<p>
  Text<sup><a href="#footnote1" id="ref1">1</a></sup>
</p>

<ol>
  <li id="footnote1">This is the footnote to ref1. <a href="#ref1">↩</a></li>
</ol>
~~~

<ol class="footnotes">
  <li id="fn1"><sup>1</sup> prime example, albeit short of substance.<a href="#ref1" title="Jump back to text.">↩</a></li>
</ol>
