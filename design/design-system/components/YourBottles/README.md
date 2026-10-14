# YourBottles

The person's shelf: their lists of wines, kept for them as they drink.

Data (`your_bottles`): `lists[]` of `{id, name, count, swatches, note?}`; swatches are up to three wine types (`red`, `white`, `rose`, `orange`, `sparkling`, `dessert`) drawn from the `wine-*` colours.

- A list with a recent change gets a `primary` ring and a one-line `note` in `highlight`.
- Lists are made by the sommelier as well as the person ("Steak nights" grew from what they ordered with steak).
- Each list row is a button that opens the list. Actions: "New list", "Places I've been".

Code: `<YourBottles block={…} />`; schema `yourBottlesSchema`.
