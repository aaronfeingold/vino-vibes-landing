# Places

The answer to "where should I go": up to three places, each with the matching thing they pour.

Data (`places`): `query` (what was searched for), `places[]` of `{id, name, match, distanceMiles?}`, one to three.

- `match` names the specific wine and price that answers the question, not the place's general description.
- The first result is the recommendation: its number takes the `primary` facet, the rest `char-600`.
- Place names in samples (Oxblood, Rue Cellar, The Marrow) are invented. Real ones come from the wine library.
- Actions: "Show on map", "What to eat there".

Code: `<Places block={…} />`; schema `placesSchema`.
