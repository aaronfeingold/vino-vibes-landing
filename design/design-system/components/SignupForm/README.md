# SignupForm

One email field and the primary button: the site's main conversion, in the hero and again at the close.

- Input: 56 px, `radius-button` (14 px), `vv-surface` fill, white-18% border, `vv-stroke` border on focus, placeholder "you@email.com" in `vv-text3`. Its label is visually hidden ("Email address").
- Button: the launch stage's label ("Get early access" or "Get the beta invite"); "Joining..." while it sends.
- Under it, the stage's note in `vv-text3` 14 px: "We'll email you when your invite is ready."
- Error: one line in `vv-error` under the field, announced (`role="alert"`).
- Done: the form is replaced by a `vv-glow` 16% panel with a `vv-stroke` 45% border: "You're on the list. We will email you when your invite is ready."
- At the App Store stage the form is replaced by the Store button.
- In the closing section the button stretches to fill the row (`stretchButton`).

Code: `<SignupForm label={cta.label} source="hero" | "join" />`, posting to `/api/beta-signup`.
