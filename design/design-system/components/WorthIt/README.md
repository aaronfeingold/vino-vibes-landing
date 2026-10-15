# WorthIt

An honest side-by-side of two bottles when the person asks whether the expensive one is worth it.

Data (`worth_it`): `question`, `options` (two `{name, price}`), `rows[]` of `{label, values: [a, b]}` (one to five), `favoured` (0 or 1), `verdict`.

- This is "trade up without getting taken" in one block: the verdict can favour the cheaper bottle, and often should on an ordinary night.
- Rows compare causes of price (place, vineyards, ageing, production), not tasting adjectives.
- The favoured column is tinted `primary` (20% in the header, 8% in cells); the verdict says why in two or three sentences.

Code: `<WorthIt block={…} />`; schema `worthItSchema`.
