# Hero-fortune pilot — shared rubric (all pilot agents follow this exactly)

Goal: draw the protagonist's fortune line by ACTUALLY READING the book, so it can be
compared against the 2016 word-mood (labMT sentiment) line for the same book.

## Procedure

1. Get the book's plain text (path or URL given in your prompt). Strip the Project
   Gutenberg header (everything through the '*** START ...' line) and footer
   (everything from '*** END ...').
2. Split the remaining text into 20 equal chunks BY WORD COUNT, in telling order.
   (Write a small python script to do the split; save chunks if helpful.)
3. READ each chunk — the actual text, start to finish. Do not skim, do not rely on
   plot summaries or your memory of the book. Your memory may be used ONLY to know
   who the protagonist is (given in your prompt anyway).
4. For each chunk i (1..20), give:
   - score: integer 1-9 — how well things are going for the protagonist AT THIS POINT,
     judged by their situation and events: safety, health, freedom, relationships,
     prospects, psychological/moral state. 1 = catastrophic, 5 = ordinary life,
     9 = triumphant. Judge the PLOT SITUATION, never how pleasant or beautiful the
     prose sounds — a gorgeously written murder scores low; a drab wedding scores high.
   - why: 8-20 words naming the actual event(s) that justify the score.
   If the protagonist is absent from a chunk, score what the chunk implies about
   their situation at that point in the telling.
5. Write STRICT JSON to the output path given in your prompt:
   {"book": "...", "gutenberg_id": N, "protagonist": "...",
    "chunks": [{"i": 1, "t": 0.025, "score": 5, "why": "..."}, ...]}
   where t = (i - 0.5) / 20. No trailing commas. Then reply with a 3-line summary
   including the shape in words (e.g. "steady fall with a final uptick").

Integrity rule: the value of this pilot is that a comprehending reader scored the
events. If you did not actually read a chunk, do not score it — say so instead.
