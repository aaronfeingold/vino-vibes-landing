# PartnerForm

The sign-up for restaurants, bars and wine shops on Partner with us: eight fields in a `vv-surface` card, then one gradient button.

| Field | Required | Notes |
| --- | --- | --- |
| Name of your place | yes | |
| What kind of place | yes | Restaurant, Bar, Wine shop, Something else |
| City | yes | |
| Your name | yes | |
| Your role | no | Placeholder "Owner, GM, sommelier" |
| Email | yes | |
| Phone | no | |
| Anything we should know | no | Four rows; placeholder "How your wine program works, when service is busiest, what you'd want from this" |

- Two columns from 640 px, one below. Labels 14 px 600 above each field; "(optional)" in `vv-text3`.
- Inputs: 48 px, 12 px corners, `vv-surface` fill on the `vv-surface` card with a white-18% border, `vv-stroke` on focus.
- One error line in `vv-error` above the button; the button reads "Sending..." while it posts.
- Done: the form is replaced by a `vv-glow` 16% panel: "Thanks. We'll be in touch." and "We read every one of these ourselves and will reach out to set things up."
- A hidden honeypot field ("website") catches bots; it's off-screen and hidden from assistive tech.

Code: `<PartnerForm />`, validated by `partnerSignupSchema`, posting to `/api/partner-signup`.
