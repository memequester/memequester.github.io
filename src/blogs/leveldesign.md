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

Finally, I put together some C++ to handle render targets for the screens. Or... I tried to. To try and minimise memory usage, I envisioned a system where a pool of render targets would be managed and dynamically assigned to screens when they became visible. But why stop there? What if there were pools of render targets at a variety of resolutions, e.g. full-res, half-res, quarter-res, and then the manager could assign render targets based on the relative size of the screens too? That would let me have *loads* of them! But I couldn't get this to work nicely, so I ended up sticking to a simple system that created render targets when they were needed.

## The Mistake
So, with my mechanics created (even though I wanted several other things, like the platform-making Gloo Gun, perhaps some enemies, etc., so I wasn't really done), I set about making the level. Step one: find assets. Yes, that's step one, what else would I do first?

I thought I was in luck fairly early, as I found a kind of 'Space Museum' asset pack with lots of wood-on-brass-on-steel, echoing the 'Neo Deco' of *Prey*. But I found it limited and I worried what it would be like to work with; it appeared to just be some other team's Unreal project zipped up, meaning it was disorganised and definitely dodgy for me to be using. 

So, I thought...

<blockquote>"Why don't I just use the real assets from *Prey*"?</blockquote>

### Ripping from Prey
I made progress on getting assets out of *Prey* fairly quickly. Tools already existed for extracting assets from CryEngine games; one I relied on from the very beginning of the project to the very end was Markemp's cgf-converter, a program originally designed for extracting mechs from MechWarrior Online. 

However I quickly ran into a rather large problem which -- spoilers -- would not be properly solved for a number of weeks. So: Unreal uses the metallic-roughness PBR workflow, where a greyscale (usually 1-bit, i.e. black or white, with no shades of grey) metallic/metalness texture controls whether or not a material is rendered as a metal, and a greyscale roughness texture controls to what extent light is scattered rather than perfectly reflected. Assumptions are made about the materials being rendered in order to save texture space: materials are assumed to either be metal *or* non-metal ("dielectric"), hence the 1-bit metallic texture where 0 is dielectric and 1 is metal; dielectrics are restricted to a narrow range of specularity, usually between 2% and 8%, defaulting to 4% in Unreal; and the colour of the specular highlight is controlled only by the colour of the light. These assumptions mean that while metal-rough requires less data, it's also less accurate.

CryEngine uses specular-glossiness. In this workflow, the colour of the specular highlight is stored in a colour texture, meaning 

## Making the level...?
Ideation is something I struggle a lot with. Despite my many bad experiences with teams, I still prefer to work in them because I can be a problem-solver and I can occasionally "yes, and" other teammates' ideas. I thought I'd gotten a bit better at ideation over the past few years, but any positive progress I've made on this has surely been undone by this level design project.

I must have driven my friends absolutely insane, sitting on call in December and the first two weeks of January, desperately trying to make my brain have one (1) idea. Just one. We did an online whiteboard where I tried to sketch out room plans and nail down a sequence, I streamed myself working on the level


## What the hell happened???




