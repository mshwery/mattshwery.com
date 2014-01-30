---
layout: post
categories: articles
title: Placeholders in Sass
---

You should be using a preprocessor. But I won't argue with you about it if you aren't using one. These are some thoughts on why I love using a CSS preprocessor, and my flavor of choice is Sass.

### Hand-craft is flawed

I often hear of web designers and front-enders saying they "hand-craft" code. I used to say this myself. I think most people use the phrase to emphasize that they take great care in the quality of code they write. They don't condone poor scaffolding or design programs that vomit a mess of worst-practice code. That's something I can get behind.

But the idea of "hand-crafted" code is counter-intuitive.

By definition, hand-crafted is the opposite of what good code should be: DRY, extensible, abstract. While I do agree with the sentiment of sweating the small stuff, it should be met with the intention of developing elegant/simple abstractions. Design systems.

CSS inherently relies on a bit of hand-craftery. It's not very DRY. Preprocessors mitigate this problem by providing useful abstractions to CSS, bringing grown-up language things like variables and functions into the rather simplistic world of CSS.

### Placeholders in Sass

My favorite grown-up thing that Sass brings to the table: [placeholders](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_). It's an improvement of the ```@extend``` directive.

The ```@extend``` directive in Sass allows you to inherit styles from other selectors, and it doesn't duplicate everything like a ```@mixin``` does. But it can cause code bloat when mixed with nesting. Placeholders are little blocks of css that you can ```@extend```, but they won't appear in your output css. In fact, the placeholder acts as a placeholder for all selectors that ```@extend``` it.

{% highlight scss %}
// set your placeholder
%button {
  background: gray;
  color: black;
}

// use it!
.button {
  @extend %button;
}

// use it again
.other-button {
  @extend %button;
  font-size: 1.5em;
}

{% endhighlight %}

As you can see in the output, the selectors reside where the placeholders were, and the code is only produced once:

{% highlight css %}
.button, .other-button {
  background: gray;
  color: black;
}

.other-button {
  font-size: 1.5em;
}

{% endhighlight %}

That's pretty sweet. I get the benefits of reusing styles in a semantic/meaningful way, without the bloated output. At the time of writing there isn't anything quite like placeholders in [other preprocessors](https://gist.github.com/matt-bailey/3911666). I'm anxious to see that change.

