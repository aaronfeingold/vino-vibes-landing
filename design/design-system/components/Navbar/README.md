# Navbar

Fixed to the top of every page: logo and name on the left (home on click), three links and one light button on the right.

- **At the top** it's transparent. **Past half the hero** (or with the mobile menu open) it fills with `vv-page` at 62% and a 14 px backdrop blur, with a white-8% bottom border.
- Links: "How it works" (`/#how`), "Made for you" (`/#you`), "For restaurants" (`/partners`), 14 px 500 in `vv-text2`, `vv-accent` on hover.
- The button uses the launch stage's short label ("Get early access", "Join the beta", "Download") and links to the signup or the App Store. It's the light style (`vv-text` fill, `vv-bg` text), so it never competes with the page's one gradient button.
- Under 768 px the links and button fold into a menu button (lucide `Menu` / `X`, 44 px); the open menu stacks the links at 16 px and the button full width.
- Height 68 px; content max width 1200 px; logo 36 px with 8 px corners.

Code: `<Navbar ctaShort={cta.short} ctaHref={cta.storeUrl ?? "#join"} />`.
