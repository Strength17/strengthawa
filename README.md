# strengthawa

Personal portfolio and service site for Strength Awa — web developer, graphic artist, and music instructor.

## What it does

A static, SEO-optimized site with a landing page, about section, services, portfolio showcase, and contact page, highlighting 3+ years of design experience. Built for clarity and fast load times.

## Stack

- HTML/CSS
- Deployed as a static site (GitHub Pages)

## Live site

https://strengthawa.surge.sh

## Status

Live and maintained.

## Adjusting the background bubbles

The site has a subtle, decorative floating-bubble animation running behind the content on every page (`css/bubbles.css` + `js/bubbles.js`).

To make the bubbles more or less visible, edit **`css/bubbles.css`**, find the `.bubble` rule, and change this line:

```css
opacity: 0.12;   /* <-- increase to make bubbles more visible, decrease toward 0 to fade them out */
```

- Lower it (e.g. `0.05`) for barely-there bubbles.
- Raise it (e.g. `0.25`) for more visible bubbles.
- Set it to `0` to effectively hide them without removing the code.

To change how many bubbles appear at once, edit **`js/bubbles.js`** and adjust:

```js
const BUBBLE_COUNT = 8;   // <-- number of bubbles on screen at once
```
