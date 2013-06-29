---
layout: post
categories: articles
title: Sass Loops
date: 2013-02-08
---

In nearly every project I've worked on, patterns develop throughout the css. That's when I turn to [Sass](http://sass-lang.com) to simplify my stylesheets (hello whitespace, nesting, and mix-ins).

Sass offers `@each`, `@for`, `@while` loops to simplify pattern-making. [The Sass Way](http://thesassway.com/intermediate/if-for-each-while) talks about this in a bit more detail. Here's an example of `@each`:

~~~ sass
$icon: [create, view, edit, delete]

@each $icon {
  .#{$icon} {
    background-image: url(/images/icons/#{$icon}.png);
  }
}
~~~

Results in:

~~~ css
.create {
  background-image: url(/images/icons/create.png);
}

.view {
  background-image: url(/images/icons/view.png);
}

.edit {
  background-image: url(/images/icons/edit.png);
}

.delete {
  background-image: url(/images/icons/delete.png);
}
~~~

It's a simple way to reduce repetitive css. Pretty neat, eh?
