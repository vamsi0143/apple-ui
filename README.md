# Apple UI — Recreated (Apple-04, Web / React)

A React recreation of the Apple-04 Figma page (the iPhone marketing page),
built section by section to match the design screens.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Adding the real images

The design's images aren't bundled in this zip. Export each one from
Figma and drop it into `src/assets/` using the exact filenames listed in
`src/assets/README.md` — every component already imports by that name,
so no code changes are needed once the files are in place.

## Project structure

```
src/
  index.css              global tokens (colors, type, spacing) + base styles
  App.jsx                assembles every section in page order
  main.jsx               React entry point
  assets/                put exported Figma images here (see README.md)
  components/
    Navbar.jsx / .css
    PromoBanner.jsx / .css
    Hero.jsx / .css                 iPhone 14 hero
    GuidedTour.jsx / .css           "A Guided Tour of iPhone 14 & 14 Pro"
    DualPromo.jsx / .css            iPhone 14 Pro + iPhone SE cards
    ProductPicker.jsx / .css        "Which iPhone is right for you?"
    ProductCard.jsx / .css          reusable card used by ProductPicker
    ComparisonTable.jsx / .css      spec comparison table
    SavingsSection.jsx / .css       "Ways to save on iPhone" (trade-in)
    CarrierAppleCard.jsx / .css     carrier deals + Apple Card cash back
    TrustIcons.jsx / .css           delivery / financing / help icons
    WhatMakesIphone.jsx / .css      "What makes an iPhone an iPhone?"
    FeatureTile.jsx / .css          reusable tile used by WhatMakesIphone
    ServicesGrid.jsx / .css         Apple TV+ / Music / News+ / Arcade
    ServiceCard.jsx / .css          reusable card used by ServicesGrid
    SwitchAndAppleOne.jsx / .css    "Switching to iPhone" + Apple One
    AccessoriesPromo.jsx / .css     AirTag + AirPods family
    WhyApplePromo.jsx / .css        "Why Apple is the best place to buy"
    FitnessGiftResearch.jsx / .css  Fitness+ / Gift Card / Research app
    LegalFootnotes.jsx / .css       paraphrased legal disclaimer copy
    SiteFooter.jsx / .css           full sitemap footer + bottom bar
```

Components are split one-per-file and reuse shared pieces (`ProductCard`,
`ServiceCard`, `FeatureTile`) so new items can be added as data rather than
new markup. Shared design tokens (Apple blue, grays, type scale, radii,
easing curve) live in `src/index.css` as CSS custom properties, so palette
or spacing tweaks only need to happen in one place.

## Responsive behavior

Every section collapses to a single column below ~734px and the nav
switches to a toggled mobile menu below ~834px. The comparison table
scrolls horizontally on narrow screens instead of squeezing columns.

## Notes on content accuracy

- Carrier logos (AT&T / T-Mobile / Verizon) are rendered as plain text
  rather than real logo assets, since those are third-party trademarks.
- The legal fine print in `LegalFootnotes.jsx` is short, paraphrased
  placeholder copy standing in for Apple's actual dense terms paragraphs
  — replace it with the real legal copy from your team before shipping.

## Mobile app (React Native)

This zip covers the web (React) deliverable only. The brief also calls
for a React Native mobile UI for the same Apple-04 content — say the
word and I'll put that together as a separate React Native project next.
