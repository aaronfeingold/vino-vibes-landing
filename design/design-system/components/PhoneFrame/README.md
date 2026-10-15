# PhoneFrame

Shows a real app screen on the site: the screen is drawn at 390 × 844 and scaled into a bezel.

- Bezel: `vv-phone` fill, white-14% border; padding 10 px at 300 px wide and up, 8 px below; corner radius 0.158 × width; screen radius = bezel radius − padding.
- Sizes on Home: 332 (hero, with `shadow-phone`), 262 (behind the hero phone, rotated −9°, 55% opacity, hidden under 900 px), 250 (How it works), 313 (Made for you, with `shadow-phone`).
- The frame is one image to assistive tech (`role="img"` with a description such as "The pick: one bottle with a personal reason"); the screen inside is `inert` and hidden.
- No status bar, no notch. The screens are the ones under App screens in this system.

Code: `<PhoneFrame width={332} label="…"><AppPick /></PhoneFrame>`.
