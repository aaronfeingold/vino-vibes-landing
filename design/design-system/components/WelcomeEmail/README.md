# WelcomeEmail

The email a person gets after joining the beta list, sent through Resend from the beta signup route. The HTML lives in `src/lib/email-templates.ts`; regenerate this preview from it when the copy changes.

- From "Vino Vibes", subject "You're on the Vino Vibes beta list". Never "Vino Vibes AI".
- Ground is `vv-page`; two `vv-surface` cards with 20 px corners and 28 px padding, no borders or shadows.
- Logo at 36 px with 8 px corners beside "Vino Vibes" in Poppins 700, linking to the site. The email uses a 96 px copy (`public/email/vino-vibes-logo-96.png`) so it stays light.
- Headline "You're on the list." in Poppins 800 at 36 px; lead "Thanks for joining. Coming soon:" in `vv-text2`.
- Feature card: numbers 01 to 03 in `vv-accent`, titles 16 px 600 in `vv-text`, bylines 14 px in `vv-text2`. Bespoke pairings, Palleted experiences, Recollections, in that order.
- Benefit card titled "The right wine every time." with three `vv-accent` checkmarks: Order with confidence; Build global wine knowledge, one new varietal at a time; Create dining memories.
- Sign-off under a `vv-surface2` rule: Sip the Owl (the white owl, `public/sip-inverted-no-background.png`) at 48 px beside "Vino Vibes. The wine list, simplified." in 13 px `vv-text3`. The email footer is the one place besides the site footer where the owl appears.
- No buttons, no speed claims, no emoji. Tables and inline styles only, since email clients ignore classes and CSS variables; every email ships a plain-text part too.
