# Helper agent — Score The Mahabharata from synopsis

## Task given to this agent · 2026-08-01 16:33

You are scoring an epic's protagonist fortune line from a PUBLISHED SYNOPSIS ONLY. This is a validation exercise — you must NOT read anything under ./data/pilot/ or ./data/synopsis/ (they contain other scorings that would bias you).

READ THIS RUBRIC FIRST — follow it exactly:
./data/synopsis/SYNOPSIS-RUBRIC.md

Work: The Mahabharata (attributed to Vyasa, c. -400)
Slug: mahabharata
Region: india
Protagonist: Yudhishthira and the Pandavas collectively (score the collective fortune of the five Pandava brothers)

Steps:
1. WebFetch the Wikipedia "Synopsis" section: https://en.wikipedia.org/wiki/Mahabharata — full plot/synopsis; the epic has 18 parvas.
2. Because this is a very long epic, ALSO fetch a second synopsis to fill gaps: try https://en.wikipedia.org/wiki/Synopsis_of_the_Mahabharata if it exists, otherwise Britannica. Record all URLs.
3. Extract 12-20 beats in telling order covering the whole arc: birth of the Pandavas, lacquer house, marriage to Draupadi, division of kingdom, Rajasuya, dice game loss, 13-year exile, war preparations, Kurukshetra war, Pandava victory, Yudhishthira's coronation, Ashwamedha, Krishna's death and Yadava destruction, Pandavas' final journey to Himalayas, ascension.
4. Assign t in 0..1 across the parvas (dice game around 0.25, war around 0.55-0.7, final journey near 1.0).
5. Score each beat 1-9 for the Pandavas' collective situation.
6. Event text ≤ 90 chars.

Write STRICT JSON (no trailing commas) to ./data/validation/mahabharata.json:
{"id": "mahabharata", "title": "The Mahabharata", "author": "Vyasa", "year": -400, "region": "india", "protagonist": "Yudhishthira and the Pandavas", "source": ["<url>", ...], "beats": [{"t": 0.05, "score": 6, "event": "..."}, ...]}

Then reply with a 2-line summary: (1) shape in words, (2) source(s) used.

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Mahabharata]* · *[WebFetch: https://en.wikipedia.org/wiki/Synopsis_of_the_Mahabharata]* · *[WebFetch: https://www.britannica.com/topic/Mahabharata]* · *[WebFetch: https://en.wikipedia.org/wiki/Kurukshetra_War]* · *[Bash: Create validation directory]* · *[Write: ./data/validation/mahabharata.json]* · *[Bash: Validate JSON and check event lengths]*

**Claude:**

Valid JSON, 20 beats, all under 90 chars.

Shape: rising climb from cursed birth to Rajasuya peak (9), then a catastrophic dice-game plunge to 1, long low plateau through exile, uneven rise across the war to Duryodhana's defeat (8), a brutal Ashwatthama-massacre dip, a brief coronation recovery, and a slow descent through Krishna's death to the Himalayan ascension — a "Cinderella-then-Icarus-then-quiet-ascent" arc with a decisive mid-plummet at the dice.

Sources: Wikipedia Mahabharata article (main synopsis) and Wikipedia Kurukshetra War article (war-phase beats).

