# WinePick

The answer to "what should I order": one bottle, its price, its structure, and a reason that is about this person.

Data (`wine_pick`): `name`, `region`, `vintage` (year or `NV`), `price` `{amount, currency, per, source}`, `structure` `{body, tannin?, acidity}` 1 to 5, `reason`, `story?`.

- `reason` must reference something the person told the sommelier. With nothing known yet, the sommelier asks one light question instead of sending this block.
- A price shows as fact ("on their list") only when `source` is `list`; a library price reads "typical price".
- Actions: "I'm ordering it" saves the dining experience; "Teach me <wine>" opens a Lesson.
- Never pushes the price above the budget the person set.

Code: `<WinePick block={…} onAction={…} />` or `<BlockRenderer block={…} />`; schema `winePickSchema` in `blocks/schema.ts`.
