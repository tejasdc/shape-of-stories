# Helper agent — Score Emma from synopsis

## Task given to this agent · 2026-08-01 16:33

You are scoring a novel's protagonist fortune line from a PUBLISHED SYNOPSIS ONLY. This is a validation exercise — you must NOT read anything under ./data/pilot/ or ./data/synopsis/ (they contain other scorings that would bias you).

READ THIS RUBRIC FIRST — follow it exactly:
./data/synopsis/SYNOPSIS-RUBRIC.md

Book: Emma (Jane Austen, 1815)
Slug: emma
Region: west
Protagonist: Emma Woodhouse

Steps:
1. WebFetch the Wikipedia "Plot" section: https://en.wikipedia.org/wiki/Emma_(novel) — full Plot with volume/chapter markers.
2. If plot section is <300 words, add a second reputable synopsis (Britannica/SparkNotes); record both URLs.
3. Extract 12-20 beats in telling order using ONLY events the synopsis states.
4. Assign t in 0..1 (three volumes, ~55 chapters).
5. Score 1-9 (1=catastrophic, 5=ordinary life, 9=triumphant peak; extremes reserved).
6. Event text ≤ 90 chars.

Write STRICT JSON (no trailing commas) to ./data/validation/emma.json:
{"id": "emma", "title": "Emma", "author": "Jane Austen", "year": 1815, "region": "west", "protagonist": "Emma Woodhouse", "source": ["<url>", ...], "beats": [{"t": 0.05, "score": 6, "event": "..."}, ...]}

Then reply with a 2-line summary: (1) shape in words, (2) source(s) used.

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Emma_(novel)]* · *[WebFetch: https://en.wikipedia.org/wiki/Emma_(novel)]* · *[Bash: Ensure validation output directory exists]* · *[Write: ./data/validation/emma.json]*

**Claude:**

Shape: comedy of errors that dips repeatedly (Elton fiasco, Box Hill humiliation, dread of losing Knightley) before rising to a triumphant proposal and marriage — a wobbly mid-range line ending on a sharp peak.
Source: Wikipedia "Plot summary" of Emma (https://en.wikipedia.org/wiki/Emma_(novel)).

