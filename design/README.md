# Vino Vibes design handoff

Everything a designer or design agent needs, as plain files. Start here.

The same material also lives in two private claude.ai artifacts. An agent without
claude.ai artifact access cannot open those links, so this folder is the portable copy.
When the artifacts and this folder disagree, the live code in `src/` wins.

| What | In this repo | In claude.ai (owner only) |
| --- | --- | --- |
| Live site code | `src/components/landing/`, `src/app/` | - |
| Design system: tokens, brand README, component previews | `design/design-system/` | https://claude.ai/artifact/46pYJNA7t7R5Czrnfd5od3 |
| Design canvas: page and app-screen boards | `design/canvas/` | https://claude.ai/artifact/MdCepsmokvYUHXVTrAMrNh |
| Screenshots of what is live | `design/screenshots/` | - |

Exported 2026-10-14 from the branch `claude/cool-ptolemy-3jw1uh`
(PR aaronfeingold/vino-vibes-landing#6).

## Read in this order

1. `screenshots/`: what the site and app screens look like today.
2. `design-system/README.md`: voice, colour, type, layout, marks, icons.
3. `design-system/tokens.json`: every colour, type style, spacing, radius and shadow,
   with a usage note on each. Names match the code (`vv-surface` here is
   `bg-vv-surface` in Tailwind).
4. `design-system/components/<Name>/README.md`: what each component is for and
   which file implements it.

## What is live

- **Home (`/`)**: hero "The wine list, simplified." with the pick screen in a phone,
  How it works (three phones), Made for the connoisseur (the profile), Your wine library
  (four phones), one proof stat, the closing sign-up, a strip pointing restaurants to
  `/partners`, and the footer.
- **Partner with us (`/partners`)**: free trial for restaurants, bars and wine shops,
  four steps, and an interest form that saves to the database.
- **App screens shown on the site** (`screenshots/app-*.png`), from `canvas/Vino Vibes App v2.dc.html`.
  They are concepts for the iPhone app. The app no longer speaks as "I"; it says what it
  did (extracted, matched, compared, saved).

  | Screen | v2 option | Code (`src/components/landing/screens/`) | On the page |
  | --- | --- | --- | --- |
  | Snap: live extraction sheet | 2l | `AppSnap.tsx` | Hero (behind), How it works 1 |
  | List analysis report | 2g | `AppAnalysis.tsx` | How it works 2 |
  | Pick and compare, as chat | 2i | `AppPick.tsx` | Hero (front), How it works 3 |
  | Profile: portrait and style map | 2b | `AppProfile.tsx` | Made for the connoisseur |
  | Next-day check-in | 2j | `AppCheckIn.tsx` | Your wine library |
  | Library by place | 2d | `AppLibrary.tsx` | Your wine library |
  | One wine, over time | 2e | `AppWine.tsx` | Your wine library |
  | Tonight, nearby | 2f | `AppNearby.tsx` | Your wine library |

  v2 also has options that are not on the site: 2a and 2c (other profile layouts), 2h
  (list sorted by palate fit) and 2k (Snap with a "See analysis" pill). "What I read"
  and "What I know about you" were replaced by 2g and 2b. `canvas/AppRead.dc.html`,
  `canvas/AppMemory.dc.html` and the matching `design-system/components/App*` previews
  still show the v1 screens.

## Not live: Direction B (chat-first)

`canvas/LandingV3.dc.html`, `canvas/AppChat.dc.html` and the `canvas/Block*.dc.html`
boards are a chat-first direction where the app answers with generated blocks (a
pick, places, a lesson, a saved note, your bottles). The design system keeps these
under "Direction B". They are the likely next step for the app, not the current site.

## Decisions already made

- Purple on near-black plum, Poppins only. One purple-to-fuchsia gradient
  (`vv-primary`), for the one primary action on a view and nothing else.
- Headline "The wine list, simplified." Subline "Enjoying wine is easier than ever."
  The headline is still under review by the owner.
- The note under the email form is only "We'll email you when your invite is ready."
- Audience: people who eat out and want to choose wine with confidence. Section copy:
  "Made for the connoisseur. You're different. Vino Vibes gets you."
- The sample restaurant is "Maison Lune" (invented). Wines on screens are real
  producers (Ameztoi, Vacheron, Lapierre, CVNE and others) with bottle and glass prices.
- The camera screen picks what it's reading with a sideways mode strip (Spirits,
  Cocktails, Wine list, Menu, Dessert), like the iOS camera.
- No Instagram, no Google Forms survey, no Venmo or "Support the project". These were
  removed on purpose; do not bring them back.
- Only real numbers (697 wines read). No invented stats, ratings or quotes; the diner
  quote slot stays hidden until there is a real quote.
- Sip the Owl appears only in the site footer, never inside the product.
- No emoji anywhere, in UI or code.

## Open questions for the owner

- Final headline and a one-line explanation of what Vino Vibes is.
- Whether the hero email form is too prominent (options: smaller, below the phone,
  or a single button that scrolls to the closing form).
- Whether to replace "Maison Lune" with another sample restaurant name.

## File formats

- `canvas/*.dc.html` are Claude Design boards. They need the canvas runtime to render
  interactively, but they are readable HTML with inline styles; treat them as the
  layout and copy spec. `canvas/canvas.json` lists each board's title and size.
- `design-system/components/*/preview.html` are static renditions. Most use CSS
  variables named after the tokens in `tokens.json` (`var(--vv-surface)` and so on)
  plus classes from `components/bundle.css`; the app-screen previews are fully inline.
- Logos and the owl are in `public/` (`VinoVibesLogo.png`,
  `sip-inverted-no-background.png`, `StylishOwlAnimation.gif`).

## Working with this

- Design changes should end up in three places: the code, `tokens.json`, and the
  boards. When you change a value, say which token it is.
- New screens for the iPhone app are 390 x 844. Blocks inside chat are 358 wide.
- Keep touch targets at least 44 px and text contrast at least 4.5:1; the README lists
  the checked pairs.
