---
title: Test slide 1
description: Use another theme (moon.css) and disable the progress bar at the bottom 
reveal:
  theme: moon
  progress: false
  transition: concave
---


# Slide one
background-video: 
background-iframe: 
background-image: 
{% comment %}background: auto detect based on extension of url or hex code, otherwise image {% endcomment %}

## In depth
Here we go deeper into the content

## And deeper!
Test inline `code` highlighting
[go to second slide](#/2)

## Deep

notes: Show this up as __notes__ on the _side_

# Bulleted list __animated__
animate: roll-in

- One
- Two

# Table test

| Hello | World |
| --- | --- |
| It | Works! |

#  Slide TWO
background: black
animate: roll-in


- I scan all nodes, text nodes or elements and check what they start with.
- Jekyll does the conversion to HTML

<aside class="notes">
  lorem ipsum this is my notes!
</aside>

---

background: http://www.reactiongifs.com/r/20151.gif
animate: grow 

```markdown
// Write Code Here!
console.log('hello world');
```

---

<iframe src="https://vine.co/v/MvtwlhqjqBz/embed/simple" width="600"
height="600" frameborder="0"></iframe><script
src="https://platform.vine.co/static/scripts/embed.js"></script>

---


# How
- I scan all nodes, text nodes or elements and check what they start with.
- Jekyll does the conversion to HTML

# How to do fragmented lists?
Fuck it, we'll do that later. 


<!--
1st slide
-->
<section>
  <h1>{{ page.title }}</h1>
</section>

<!--
2nd slide
-->
<section>
  <h2>Powered by</h2>
  <ul>
    <li class="fragment">Jekyll</li>
    <li class="fragment">reveal.js</li>
  </ul>
</section>

<!--
3rd slide with sample syntax highlighting
-->
<section>
  <h2>Code preview</h2>
  <pre>
    <code contententeditable>
void init_opts() {
        int i;
        for(i = 0; abook_vars[i].option; i++)
                restore_default(&abook_vars[i]);
}
    </code>
  </pre>
</section>
