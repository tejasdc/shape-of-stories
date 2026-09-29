# Helper agent — Score Dorian Gray from synopsis

## Task given to this agent · 2026-08-01 16:32

You are scoring a novel's protagonist fortune line from a PUBLISHED SYNOPSIS ONLY. This is a validation exercise — you must NOT read anything under ./data/pilot/ or ./data/synopsis/ (they contain other scorings that would bias you).

READ THIS RUBRIC FIRST — follow it exactly:
./data/synopsis/SYNOPSIS-RUBRIC.md
(You may read this rubric file; it's the only file in data/synopsis/ you're allowed to open.)

Book: The Picture of Dorian Gray (Oscar Wilde, 1890)
Slug: dorian-gray
Region: west
Protagonist: Dorian Gray

Steps:
1. WebFetch the Wikipedia "Plot" section: https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray — ask for the full Plot section text with chapter/part markers preserved.
2. If Wikipedia's plot section is <300 words, also fetch a second reputable synopsis (Britannica, SparkNotes summary page) and record both URLs.
3. Extract 12-20 beats in telling order using ONLY events the synopsis states.
4. Assign each beat a t in 0..1 (position across the work; use chapter cues).
5. Score each beat 1-9 (1=catastrophic, 5=ordinary life, 9=triumphant peak; reserve 1 and 9 for extremes).
6. Event text ≤ 90 chars each.

Write STRICT JSON (no trailing commas) to ./data/validation/dorian-gray.json in this exact schema:
{"id": "dorian-gray", "title": "The Picture of Dorian Gray", "author": "Oscar Wilde", "year": 1890, "region": "west", "protagonist": "Dorian Gray", "source": ["<url>", ...], "beats": [{"t": 0.05, "score": 6, "event": "..."}, ...]}

Then reply with a 2-line summary: (1) shape of the fortune line in words, (2) source(s) used.

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray]* · *[WebFetch: https://www.britannica.com/topic/The-Picture-of-Dorian-Gray-novel-by-Wilde]* · *[WebFetch: https://www.sparknotes.com/lit/doriangray/summary/]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray]* · *[Bash: Create validation directory]* · *[Write: ./data/validation/dorian-gray.json]*

**Claude:**

Shape: Comfortable start (~6) with a brief romantic rise into the 7s at the Sibyl engagement, then a sharp fall through her suicide (3), a false plateau (~6) of eighteen ageless years, and a long slide bottoming out with Basil's murder (2), a brief reprieve when James Vane dies (5), a false-redemption bump, and a terminal crash to 1 when Dorian destroys the portrait and himself.
Source: Wikipedia summary of The Picture of Dorian Gray (https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray) — over 300 words, so no second synopsis needed.

