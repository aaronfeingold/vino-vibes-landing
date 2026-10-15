# FacetGlow

A large blurred polygon of `primary` (or `primary-deep`) light behind a section, with thin `highlight` outlines (`FacetLines`) for the cut-glass edge.

- Two or three glows per section at most: one big `primary` glow off an edge, one smaller `primary-deep` beside it. The hero gets the most; plain sections get none or one faint one.
- Blur `blur-facet-oxblood` (88 px) or `blur-facet-candlelight` (72 px); opacity from the theme (0.6 / 0.4).
- Outlines at 12 to 22% opacity, 1 px. They must never cross body text.
- Shapes are the clip polygons `clip-facet-a`, `-b`, `-c`; don't invent new ones per page.
- Glows sit behind content (`z-index: -1` in a `relative isolate` parent) and ignore the pointer.

Code: `<FacetGlow className="-right-32 -top-16 h-[620px] w-[720px]" />`, `<FacetGlow shape="b" deep … />`, `<FacetLines />`.
