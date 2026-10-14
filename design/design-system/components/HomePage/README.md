# HomePage

The landing page at `/`: get a visitor from "what is this?" to signed up, by showing the app doing its one trick.

In order: Navbar; Hero ("The wine list, simplified.", "Enjoying wine is easier than ever.", SignupForm, the pick screen in a 332 PhoneFrame with the camera screen tilted behind it); How it works on a `vv-band` (three phones: Snap the list, Tell it what you're eating, Get one pick); Made for you ("MADE FOR THE CONNOISSEUR", "You're different. Vino Vibes gets you.", three promises with check icons, the memory screen); Proof on a `vv-band` (the 697 stat card); the close ("Your next wine list is already decided." and the SignupForm again) with the restaurant strip; Footer.

- One gradient button per view: the signup.
- The launch stage (`NEXT_PUBLIC_LAUNCH_STAGE`: waitlist, testflight, appstore) swaps the button labels and notes everywhere at once; at the App Store stage the forms become Store buttons.
- Every phone shows a real screen from App screens; no stock photos, no invented stats.
- Metadata: title "Vino Vibes: the wine list, simplified".
