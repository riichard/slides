# Git Slides

A text-only presentation framework that gives you clean formatting with
markdown and lets you focus on what matters.
Plus, it also mixes very well with HTML presentation decks. 

# How to get started

## Get your own slides repo on yourname.github.io 
This project is
[hosted on GitHub](https://github.com/riichard/slides/). Start creating
markdown slides by forking this project and triggering a commit to your fork,
Github will then create a slides project on your account and all your slides
will be viewable on `yourusername.github.io/slides/`.  

1. Create a fork of this repository (and leave a star when you're there
anyway).

2. Trigger a commit
Github will now start building your slides page. 

3. Open your slides page

Bonus, Add all your HTML/markdown slides to the `slides` folder or start
creating slides. Each slide will automatically be listed on the front page.

## Local installation

1. Clone this repo
2. Install reveal.js submodule

```
git submodule update --init --recursive
```

3. Install jekyll
```
gem install jekyll
```

4. Build
```
jekyll serve build --watch
```


# Syntax

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
