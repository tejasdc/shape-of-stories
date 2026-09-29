# Helper agent — Score The Odyssey from synopsis

## Task given to this agent · 2026-08-01 16:33

You are scoring an epic's protagonist fortune line from a PUBLISHED SYNOPSIS ONLY. This is a validation exercise — you must NOT read anything under ./data/pilot/ or ./data/synopsis/ (they contain other scorings that would bias you).

READ THIS RUBRIC FIRST — follow it exactly:
./data/synopsis/SYNOPSIS-RUBRIC.md

Book: The Odyssey (Homer, c. -700)
Slug: the-odyssey
Region: west
Protagonist: Odysseus
IMPORTANT: score in TELLING ORDER (the narrative order of Homer's poem, 24 books). The middle books are flashback tales Odysseus tells the Phaeacians; score those events at the position where they are NARRATED (mid-poem), not where they chronologically occurred.

Steps:
1. WebFetch the Wikipedia "Synopsis" or "Plot" section: https://en.wikipedia.org/wiki/Odyssey — full synopsis with book numbers.
2. If plot section is <300 words, add a second reputable synopsis; record both URLs.
3. Extract 12-20 beats in TELLING order (books 1-24). E.g. Telemachy first, then Calypso's island, then Phaeacia + flashback tales, then Ithaca return + slaughter of suitors, then reunion.
4. Assign t in 0..1 using book numbers (book N ≈ N/24).
5. Score each beat 1-9 for Odysseus's situation. For flashback beats, score the recounted event (shipwreck = low even though he's safe at Alcinous's palace narrating it — score the event, not the frame).
6. Event text ≤ 90 chars.

Write STRICT JSON (no trailing commas) to ./data/validation/the-odyssey.json:
{"id": "the-odyssey", "title": "The Odyssey", "author": "Homer", "year": -700, "region": "west", "protagonist": "Odysseus", "source": ["<url>", ...], "beats": [{"t": 0.05, "score": 6, "event": "..."}, ...]}

Then reply with a 2-line summary: (1) shape in words, (2) source(s) used.

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Odyssey]* · *[Write: ./data/validation/the-odyssey.json]*

**Claude:**

Shape: Long trough of captivity and shipwreck disasters (books 1-12, mostly 1-5), a rebound at Phaeacia, then a violent V-shaped rise from beggar to bow-stringing avenger to reunion (books 13-24) — a "Man in a Hole" that ends in triumph.
Source: https://en.wikipedia.org/wiki/Odyssey (Wikipedia Synopsis section, single source; sufficiently detailed for 21 beats in telling order).

