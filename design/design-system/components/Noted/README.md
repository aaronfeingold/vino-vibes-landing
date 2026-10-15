# Noted

Confirms that the sommelier saved something about the person, and gives them a way to take it back.

Data (`noted`): `memoryId`, `text` (the fact, in the sommelier's voice, with what it will change).

- Shown only when the person stated a preference worth confirming. Routine saves stay quiet, as the persona spec says.
- Always offers "Undo" (forgets that one item) and a way to see everything it knows. That visibility is a promise of the product.
- Emphasis border in `primary` at 45%: it's a change to their profile, so it should be noticed.

Code: `<Noted block={…} onAction={…} />`; schema `notedSchema`.
