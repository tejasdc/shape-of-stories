# Helper agent — Score A Christmas Carol from synopsis

## Task given to this agent · 2026-08-01 16:32

You are scoring a novella's protagonist fortune line from a PUBLISHED SYNOPSIS ONLY. This is a validation exercise — you must NOT read anything under ./data/pilot/ or ./data/synopsis/ (they contain other scorings that would bias you).

READ THIS RUBRIC FIRST — follow it exactly:
./data/synopsis/SYNOPSIS-RUBRIC.md
(You may read this rubric file; it's the only file in data/synopsis/ you're allowed to open.)

Book: A Christmas Carol (Charles Dickens, 1843)
Slug: a-christmas-carol
Region: west
Protagonist: Ebenezer Scrooge — score OVERALL WELLBEING including psychological and moral state, not just wealth. A rich miserable miser scores lower than a modestly-off man at peace.

Steps:
1. WebFetch the Wikipedia "Plot" section: https://en.wikipedia.org/wiki/A_Christmas_Carol — full Plot section with Stave/chapter markers.
2. If plot section is <300 words, add a second reputable synopsis; record both URLs.
3. Extract 12-20 beats in telling order.
4. Assign t in 0..1 (five staves; use stave cues).
5. Score each beat 1-9. Reserve 1 and 9 for extremes.
6. Event text ≤ 90 chars.

Write STRICT JSON (no trailing commas) to ./data/validation/a-christmas-carol.json:
{"id": "a-christmas-carol", "title": "A Christmas Carol", "author": "Charles Dickens", "year": 1843, "region": "west", "protagonist": "Ebenezer Scrooge", "source": ["<url>", ...], "beats": [{"t": 0.05, "score": 6, "event": "..."}, ...]}

Then reply with a 2-line summary: (1) shape of the fortune line in words, (2) source(s) used.

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/A_Christmas_Carol]* · *[Bash: Create validation directory]* · *[Write: ./data/validation/a-christmas-carol.json]*

**Claude:**

Wrote ./data/validation/a-christmas-carol.json (17 beats).

Shape: starts low (3) as bitter miser, dips further with Marley (2), a brief lift at Fezziwig (6), then a long trough through Belle's loss, Present's warnings, and Future's death visions (bottoming at 1 for Tiny Tim's death and his own tombstone), then a sharp redemptive rise to a triumphant peak (9) on Christmas morning — a deep-U / hockey-stick redemption arc.

Source: Wikipedia Plot section — https://en.wikipedia.org/wiki/A_Christmas_Carol (>300 words, no secondary needed).

