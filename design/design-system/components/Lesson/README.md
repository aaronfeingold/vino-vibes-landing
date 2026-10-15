# Lesson

A wine explained in under a minute, as a chain from the ground to the glass.

Data (`lesson`): `title`, `steps[]` of `{label, text}` where label is `place`, `grape`, `people`, `time`, `taste` or `why`; two to five steps.

- Order follows the terroir chain: place, then grape, then people or time, then taste. This is the agent's "thinks in terroir" principle made visible.
- One sentence per step, under about 80 characters. Facts come from the wine library with a source; anything general (a DOCG ageing rule) must be right.
- Actions: "Quiz me", "Save to my notes".

Code: `<Lesson block={…} />`; schema `lessonSchema`.
