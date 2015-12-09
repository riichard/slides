# Git Slides

A text-only presentation framework that gives you clean formatting with
markdown and lets you focus on what matters.
Plus, it also mixes very well with HTML presentation decks. 

## Problem with visual presentation builders

When it comes to creating presentations, the most popular tools have the most
burdensome UI. 

This distracts the user from being able to focus on the story. Creating even a
simple slide can take several unnecessary interactions. Editing the styling for
the slide is cumbersome, as each slide must be edited manually.

Why do we need such complex tools to create quick and simple presentations?

## Taking away the UI 
Text-only solutions for creating presentation slide decks without a UI are not
new, but often require advanced code with HTML, or its design is stuck in the
nineties. For those of us with an eye for design, the solution is gitslides.

Now, the only thing you need to think about is the content itself.

GitSlides utilizes the popular markup language `markdown`. A syntax that was
specifically designed to take away markup-distractions from the content.
Markdown is currently supported by Github, StackOverflow, Tumblr and WikiPedia
and seems to be the trending default for formatting.

You won’t need to study any new knowledge if you’re already familiar with
Markdown. New slides are simply created by adding a new `#heading`, just as if
you were writing a normal markdown file.

## Design 
Having zero design/font/color specifications allows you to easily switch themes
or have a controllable cross company slide deck theme with a logo and company
colors.

Existing themes can be easily incorporated and edited using gitslides.

## Staying flex with HTML 
Built on top of the popular presentation framework [Reveal.js] and with
intelligent parsing within gitslides, you can _still_ use HTML within your
markdown, separating it with a line-break. Almost as if it were the same
language.

## Git 
As the name suggests, this text-only system ensures seamless integration
with git to support fluent collaboration.  Team-mates can make edits and
changes to the deck can easily be reviewed and optionally merged into a master
slide.

## Shareable: internally or on GitHub pages 
Each deck is hosted internally on a git-server or publicly on github-pages.
Simply fork this project on GitHub and create a file in your `./_slides/` or
`._posts` folder. You can already view your presentation on
`yourusername.github.io/slides/slides/name-of-your-file`.

## PDF is your friend 
Need to upload your deck, put it on slideshare or share it by email? Export
your deck by clicking the print button and opt for save-as-pdf. 

# How to get started

## Fork this project to create your own slides directory 
This project is
[hosted on GitHub](https://github.com/riichard/slides/). Start creating
markdown slides by forking this project and triggering a commit to your fork,
you can host your own gitslides directory. All your slides will be viewable on
`yourusername.github.io/slides/`.  Add all your HTML/markdown slides to the
`slides` folder and they will automatically be listed on the front page.


# How to use Git Slides

This is an example file called `example.md` to create a slide deck. 

```
# This creates a title slide
- With bullet points
- Which are unordered

# This creates a second title slide
1. Also
2. With bullet points
3. This time they are ordered (also known as numbered)

## Using two hash-tags you can create a sub-slide

## Sub-slides look really slick with animations
They can be accessed with the arrow keys on your keyboard, or will show up when pressing the space bar.

# You can also separate slides by using three dashes 
`---`

---
This is helpful when the next slide doesn't need a title, such as images,
bullet points and videos.
```

#### Here is an small overview of the markdown tags.

Prefix                      | Result
---:                        | ---
`#`                         | New title slide
`##`                        | New sub-slide
`---`                       | New slide without a title
`1. `                       | Ordered list on the slide
`- `                        | Unordered list on the slide

## Slide options

Option                      | Description
---:                        | ---
`background; image.jpg`     | Specify an url to use as a background image
`background-color: #3F3F3F` | Set a background color to the slide
`background-video: TODO`    | Set a video as a background. Youtube videos can be embedden a URL and will be played full-screen on the background
`blur: 20`                  | Make the background image blurred. On a scale of 0 to 100, whereas 100 is the most blurred.
`animate: roll-in`          | Make each bullet/image (after the option definition) in the slide come in with an animation. Animation options are: `roll-in`, `fade-in`, `grow`, `shrink`, `highlight-red`, `highlight-blue`.

# General Shortcuts
When presenting your presentation, use the following shortcuts:

Press the letter | What does it do
---:             | :---
`f`              | Make your presentation F-ullscreen
`n`              | Popups-up a second window with a preview of the next slide and a box with your N-otes
`o`              | Opens an O-verview of all your slides.
`b` or `.`       | Turn the screen B-lack.
`ESC`            | Exit fullscreen.
