# Meter

A five-step meter for a wine's structure: body, tannin, acidity, sweetness.

Filled steps are `primary`, empty ones `char-600` (#45423F), 6 px tall with 4 px gaps, label in `muted-foreground` at 12 px. Values are whole numbers 1 to 5 from the wine's classification; never show a meter for a value the system does not have. It carries `role="meter"` and its value for screen readers.

Code: `<Meter label="Body" value={5} />`.
