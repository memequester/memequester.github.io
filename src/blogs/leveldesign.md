---
title: Level Design
---
# {{ title }} Blog

## Preamble
I don't know who will read this. I don't know if *anybody* will read this. Really, I am mostly doing this for my own sake, to bookend this project and give myself closure. I rarely do that. But, I have this site set up to be more streamlined than ever for writing to, and I'm waiting for thousands of unused assets to be deleted from my project before I zip up my project files, so why not? If you do read this, then thanks! If you're a bot somehow scraping this page despite the fact that my homepage won't link to it and I have no sitemap, then: fuck off!

## In the beginning...
At first, my struggles were purely technical. This is not actually the truth, but the fact that that sentence was the first I wrote in this whole blog is indicative of a few things about this project and about me. 

I knew (or thought I knew...) that I wanted to recreate the 'Looking Glass' screens from *Prey*. I didn't know why. I think I wanted a gameplay hook that I could also use to tell a narrative. Perhaps the player was a Volunteer (read: prisoner from a Siberian gulag flown up to the space station against their will) who would be deceived by the screens, tricked into thinking they were still on Earth, until a pivotal moment in the level where the illusion is quite literally shattered and they must try to escape. Did I actually have that idea at the time? Nope!

### Screens
I spent most of my time in late November / early December on the task of recreating the screens. I was relatively confident as I'd made a portal mechanic a few times, and this time, I didn't even need to be able to walk through them! The basic setup was fine, as I expected. The problems came when I needed to make the glass smash; I needed the glass to be pre-smashed, then activate the simulation when a force was exerted on the screen, e.g. from a melee attack or a gun. I learned how to use the non-destructive mesh toolkit Datasmith to create a pipeline for pre-smashing the glass, which was really cool! Though, as per usual, the documentation was thin and/or wrong and options weren't doing what I expected, so I had to experiment. I landed on using four Anchor Fields to set the Anchored state on the perimeter fragments of the pre-smashed glass, as setting the Anchored state on perimeter pieces within Datasmith wasn't working. I also had some issues with exerting forces on the glass to make it break. I went back and forth for *days* on configurations for the glass to try and make it respond to forces without also completely falling apart when touched. 

I spent a truly unreasonable amount of time on the glass material and, by extension, the rendering pipeline. I went back-and-forth on using Forward Rendering for a few reasons: improved VRAM usage and the availability of MSAA and Alpha to Coverage were pluses, but I then discovered that ambient lighting via cubemaps on PostProcessVolumes did not work at all in the Forward Renderer, so I had to go back to the Deferred Renderer. How boring. 

It's a shame too, because Alpha to Coverage solved my problem with broken glass, namely the rendering of many shards of glass. The deferred pipeline just couldn't handle this nicely: shards would constantly Z-fight and render in the wrong order, no matter what settings I used. Alpha to Coverage solved this problem by effectively rendering a checkerboard of translucency and then using MSAA to blur the checkerboard into a kind of fake translucency, which had no issues with sorting. It did have downsides: surfaces could only be 25%, 50% or 75% translucent, and these translucencies would not add together, i.e. two 50% translucency shards on top of each other did not make a 25% translucent surface, so the shards always looked flat. I didn't mind this for my use case, but I couldn't use it anyway, so whatever. I'll get to use the Deferred Renderer for realsies one day.

### Making the level


## What the hell happened???
<blockquote>"I can't find assets I like, so why don't I just use the real assets from *Prey*"?</blockquote>



