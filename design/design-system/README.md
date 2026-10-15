# Vino Vibes

The wine list, simplified. This system describes vinovibes.ai as it is live today (Home and Partner with us) and the iPhone app screens the site shows: purple on near-black plum, Poppins throughout, one purple-to-fuchsia gradient for the one action on a page.

Source of truth: `aaronfeingold/vino-vibes-landing`, branch `claude/cool-ptolemy-3jw1uh` (the live preview). Colour names here are the code's: `vv-surface` here is `bg-vv-surface` in Tailwind (`theme.extend.colors.vv` in `tailwind.config.js`), and the same names are meant for the iOS app. The primary gradient is `bg-vv-primary`.

## What's here

| Group | What | Live? |
| --- | --- | --- |
| Pages | HomePage (`/`), PartnersPage (`/partners`) | Yes |
| Site | Navbar, Button, SignupForm, PartnerForm, SectionHeader, Card, Steps, PhoneFrame, Footer | Yes |
| App screens | AppSnap, AppAnalysis, AppPick, AppProfile, AppCheckIn, AppLibrary, AppWine, AppNearby: the v2 screens the site shows in its phones (`canvas/Vino Vibes App v2.dc.html`) | Yes, as pictures on the site |
| Direction B · chat-first (not live) | Chat-first pieces and the generative blocks (WinePick, Places, Lesson, Noted, YourBottles, WorthIt) | No: the next step for the app |

## Voice

Plain, confident, short enough to read at a table.

- Headlines say the outcome: "The wine list, simplified." "Ninety seconds, start to pour." "Your next wine list is already decided." "Try Vino Vibes at your tables, free."
- Leads say it in one breath: "Enjoying wine is easier than ever."
- Promises are concrete and checkable: "Only picks from the list in front of you." "Never pushes you up in price." "Shows you everything it knows about you, and forgets anything you ask it to."
- To restaurants, say what it costs them and what we ask: "It costs you nothing. All we ask for is honest feedback."
- The app does not speak as "I". It says what it did ("List analyzed", "Saved to your library") and makes it personal: "Same coast as San Sebastián: salty, a little spritz, bright enough for the roux."
- Only real numbers ("697 wines already read from New Orleans restaurant lists"). No invented stats or quotes. No emoji, no exclamation marks.

## Colour

Five layers of dark, darkest first: `vv-phone` (bezels), `vv-page` (the site), `vv-bg` (an app screen), `vv-band` (alternate sections), `vv-surface` (cards, forms), `vv-surface2` (chips, rows inside cards). Text in three steps: `vv-text`, `vv-text2`, `vv-text3`. `vv-accent` (lavender) marks eyebrows, step numbers, check icons and highlighted words; `vv-stroke` marks focus and selection. `vv-glow` (#a855f7) is the hero's radial light at 22% and the success and selected tints at 16 to 18%.

The primary gradient (`vv-primary-from` #9333ea to `vv-primary-to` #a21caf) fills the one primary button per view and nothing else. Light buttons (`vv-text` on `vv-bg`) are for the nav and the App Store.

| Pair | Ratio |
| --- | --- |
| `vv-text` on `vv-surface` | 15.7:1 |
| `vv-text2` on `vv-surface` | 8.9:1 |
| `vv-text3` on `vv-surface` | 6.4:1 |
| `vv-accent` on `vv-surface` | 10.0:1 |
| White on `vv-primary-from` | 5.4:1 |

## Type

Poppins only: 800 for headlines (tight, -0.02 to -0.035em), 700 for titles, 600 for labels and buttons, 400 to 500 for body. Headlines step down at 900 px wide (hero 76 to 46, section 44 to 32). Eyebrows are 14 px 600, uppercase, 0.12em, in `vv-accent`. In the app, eyebrows are 12 px 700 and section labels 12 px 600 in `vv-text3`.

## Layout

Content max 1200 px; side padding 16 px, 24 px from 640 px. Sections pad 112 px top and bottom (80 on phones); short bands 88. A page's first section starts 140 px down to clear the fixed nav. Cards are `vv-surface` with 20 px corners and 28 px padding, no borders, no shadows. Shadows are only for phones (`shadow-phone`) and the pick card (`shadow-pick`).

## Brand marks

- **Vino Vibes logo** (`assets/Logos/vino-vibes-logo.png`): in the nav at 36 px with 8 px corners, beside "Vino Vibes" in Poppins 700.
- **Sip the Owl** (`sip-the-owl-white.png` in the footer; `sip-the-owl.gif` animated): the footer only. The product has no mascot.
- The facet mark and wordmark belong to Direction B and are not live.

## Iconography

Lucide icons at 2 to 2.4 px stroke: `Menu`/`X` in the nav, `Check` for promises, `ArrowRight` on "Partner with us", `Smartphone` on the Store button, `ChevronLeft`, `Camera`, `ArrowUp`, `Zap` in the app. Always with a label or `aria-label`; never emoji.

## Not synced

- Previews are static HTML renditions of the React components, generated from the code's copy, sizes and colours; the Navbar's scroll behaviour and the forms' submit states are shown as separate states.
- Fonts come from Google Fonts (Poppins); no font files are stored here.
- The separate `feat/design-system` patch (a themed Tailwind preset with a red alternate) predates this branch and is not what's live.
