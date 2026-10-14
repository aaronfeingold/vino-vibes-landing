# ChatBubble

The two voices in a conversation: the person in a `bubble` on the right, the sommelier as plain text beside its facet.

- Person: `bubble` ground, 18 px corners with the bottom-right at 4 px, max 290 px wide.
- Sommelier: no bubble. A 22 px `primary` facet as its face, then `foreground` text at 15 to 16 px. Its richer answers are generative blocks under the line, not longer text.
- Keep replies short enough to read at a table: a few sentences.

Code: `<ChatBubble from="person">` or `from="sommelier"`.
