# Helper agent — Score The Metamorphosis from synopsis

## Task given to this agent · 2026-08-01 16:33

You are scoring a novella's protagonist fortune line from a PUBLISHED SYNOPSIS ONLY. This is a validation exercise — you must NOT read anything under ./data/pilot/ or ./data/synopsis/ (they contain other scorings that would bias you).

READ THIS RUBRIC FIRST — follow it exactly:
./data/synopsis/SYNOPSIS-RUBRIC.md

Book: The Metamorphosis (Franz Kafka, 1915)
Slug: the-metamorphosis
Region: west
Protagonist: Gregor Samsa
IMPORTANT: after Gregor's death, if the synopsis narrates the family's outing scene, score any post-death beats as 1 (dead protagonist = 1). Include those post-death beats if the synopsis covers them — the fortune line ends with Gregor's death at 1 and continues at 1 for any narrated aftermath.

Steps:
1. WebFetch the Wikipedia "Plot" section: https://en.wikipedia.org/wiki/The_Metamorphosis — full Plot with Part I/II/III markers.
2. If plot section is <300 words, add a second reputable synopsis; record both URLs.
3. Extract 12-20 beats in telling order across the three parts.
4. Assign t in 0..1 using part cues (Part I ≈ 0-0.33, Part II ≈ 0.33-0.66, Part III ≈ 0.66-1.0).
5. Score each beat 1-9 for Gregor's situation.
6. Event text ≤ 90 chars.

Write STRICT JSON (no trailing commas) to ./data/validation/the-metamorphosis.json:
{"id": "the-metamorphosis", "title": "The Metamorphosis", "author": "Franz Kafka", "year": 1915, "region": "west", "protagonist": "Gregor Samsa", "source": ["<url>", ...], "beats": [{"t": 0.05, "score": 6, "event": "..."}, ...]}

Then reply with a 2-line summary: (1) shape in words, (2) source(s) used.

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Metamorphosis]* · *[WebFetch: https://www.britannica.com/topic/The-Metamorphosis-novella-by-Kafka]* · *[WebFetch: https://www.sparknotes.com/lit/metamorphosis/summary/]* · *[WebFetch: https://www.cliffsnotes.com/literature/m/the-metamorphosis/book-summary]* · *[WebFetch: https://simple.wikipedia.org/wiki/The_Metamorphosis]* · *[WebFetch: https://www.gradesaver.com/the-metamorphosis/study-guide/summary]* · *[Bash: Create validation directory]* · *[Write: ./data/validation/the-metamorphosis.json]*

**Claude:**

Not applicable — this is a single-shot scoring task, not a multi-step workflow.

Shape: steady decline from an already-catastrophic opening (transformation) with a brief mid-story lift under Grete's care, a sharp drop at the apple-throwing, and a floor-scraping finish through Grete's rejection, Gregor's starvation, and the post-death aftermath.
Sources: Wikipedia Plot section (https://en.wikipedia.org/wiki/The_Metamorphosis) supplemented by GradeSaver's summary (https://www.gradesaver.com/the-metamorphosis/study-guide/summary) since Wikipedia's plot ran under 300 words.

