# Assets needed (full project, all screens)

Export these from the Figma file and save them here with these exact
filenames — every component already imports them by name, so nothing
else needs to change once they're in place.

| Filename                  | Used in                | Section |
|-----------------------------|--------------------------|---------|
| iphone14-lineup.png          | Hero.jsx               | iPhone 14 hero |
| guided-tour-bg.jpg            | GuidedTour.jsx         | Guided tour banner |
| iphone14pro-lineup.png        | DualPromo.jsx          | iPhone 14 Pro card |
| iphoneSE-lineup.png           | DualPromo.jsx          | iPhone SE card |
| iphone14pro.png                | ProductPicker.jsx     | Which iPhone grid |
| iphone14.png                    | ProductPicker.jsx     | Which iPhone grid |
| iphone13.png                    | ProductPicker.jsx     | Which iPhone grid |
| iphoneSE.png                    | ProductPicker.jsx     | Which iPhone grid |
| tradein-phones.png             | SavingsSection.jsx     | Trade-in card |
| apple-card-hands.png            | CarrierAppleCard.jsx  | Apple Card cash back |
| ios16-lineup.png                 | WhatMakesIphone.jsx   | iOS 16 tile |
| tvplus-shows.png                 | ServicesGrid.jsx       | Apple TV+ |
| music-mixes.png                  | ServicesGrid.jsx       | Apple Music |
| newsplus-covers.png              | ServicesGrid.jsx       | Apple News+ |
| arcade-icon.png                   | ServicesGrid.jsx      | Apple Arcade |
| switching-phones.png              | SwitchAndAppleOne.jsx | Switching to iPhone |
| airtag-keys.png                     | AccessoriesPromo.jsx | AirTag |
| airpods-family.png                  | AccessoriesPromo.jsx | Magic runs in the family |
| why-apple-phones.png                 | WhyApplePromo.jsx    | Why Apple is the best place to buy |
| magsafe-cases.png                     | WhyApplePromo.jsx   | Featured accessories / MagSafe |
| fitness-workout.png                    | FitnessGiftResearch.jsx | Apple Fitness+ |
| gift-card-apple.png                     | FitnessGiftResearch.jsx | Apple Gift Card |
| research-app-phones.png                  | FitnessGiftResearch.jsx | Apple Research app |

Notes:
- Carrier logos (AT&T / T-Mobile / Verizon) are rendered as plain text in
  `CarrierAppleCard.jsx` rather than image assets, since those are
  third-party trademarks — swap in real logo SVGs if your project needs them.
- The legal fine print in `LegalFootnotes.jsx` is short, paraphrased
  placeholder copy standing in for Apple's actual dense terms/footnote
  paragraphs from the Figma file. Replace it with the real legal copy
  from your design/legal team before shipping — it wasn't reproduced
  verbatim here.

Until real assets are added, the app shows broken image icons where
these are referenced — drop the exported PNGs/JPGs/JPG in and it
resolves itself, no code changes needed.
