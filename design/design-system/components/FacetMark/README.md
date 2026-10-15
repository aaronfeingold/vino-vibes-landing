# FacetMark

The facet, a five-sided polygon like a face of cut glass, is the brand: logo, the sommelier's face in chat, list numbers and bullets.

- **Mark**: outer facet in `primary`, inner facet in `primary-deep`. Pair with the wordmark "Vino Vibes" in Poppins 700.
- **Number** (`FacetNumber`): 34 px, `primary` for the top result, `char-600` for the rest, number in white or `foreground`.
- **Bullet** (`FacetBullet`): 16 px `primary`, for feature lists and lesson timelines.
- Points: mark `13,1 25,9 21,25 5,25 1,9` on a 26 grid; number `17,1 33,12 27,33 7,33 1,12` on a 34 grid.

Don't rotate, outline or recolour the mark outside the two themes. The owl (Sip) is a separate mark for the site footer only; it never appears inside the product.

Code: `<FacetMark size={30} />`, `<FacetNumber n={1} active />`, `<FacetBullet />`.
