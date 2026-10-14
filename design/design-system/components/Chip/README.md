# Chip

A pill the person taps: prompt suggestions under the composer, dish choices, filters.

- Selected: `primary` border, `primary` at 20% fill, bold `foreground` text, `aria-pressed="true"`.
- At rest: `surface` fill, foreground at 15% border, `muted-foreground` text.
- 36 px tall; in a scrolling row give the row 16 px side padding.

**Tag** is the static cousin for things that are true rather than choosable: taste notes, budget, a struck-through dislike (`struck`). Tags never take a click.

Code: `<Chip selected>`, `<Tag tone="primary" | "default" | "struck">`.
