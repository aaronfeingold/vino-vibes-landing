# Button

Four styles on the site, and one gradient button per view.

| Style | Looks | Used for |
| --- | --- | --- |
| Primary | `vv-primary-from` to `vv-primary-to` gradient, white 16 px 600 text, 56 px tall, `radius-button` (14 px), 26 px sides | The one action: "Get early access", "I'm interested" |
| Store | `vv-text` fill, `vv-bg` text, phone icon, 56 px | "Download for iPhone" once the app is in the App Store |
| Nav | `vv-text` fill, `vv-bg` text, 14 px, 40 px tall, 12 px corners | The navbar's call to action |
| Outline | 1.5 px white-24% border, `vv-text`, 15 px, 48 px tall, 12 px corners; `vv-accent` border and text on hover | Secondary paths: "Partner with us" with an arrow |

- While a form sends, the primary button reads "Joining..." or "Sending..." at 60% opacity and is disabled.
- Hover on primary and light buttons is 90% opacity; there is no scale effect.
- Never two gradient buttons in one view.

Code: Tailwind classes in `SignupForm.tsx`, `StoreButton.tsx`, `Navbar.tsx` and `Join.tsx` (`bg-vv-primary`, `bg-vv-text text-vv-bg`, `border-white/[0.24]`).
