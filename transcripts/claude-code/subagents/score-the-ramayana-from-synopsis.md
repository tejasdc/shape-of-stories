# Helper agent — Score The Ramayana from synopsis

## Task given to this agent · 2026-08-01 16:34

You are scoring an epic's protagonist fortune line from a PUBLISHED SYNOPSIS ONLY. This is a validation exercise — you must NOT read anything under ./data/pilot/ or ./data/synopsis/ (they contain other scorings that would bias you).

READ THIS RUBRIC FIRST — follow it exactly:
./data/synopsis/SYNOPSIS-RUBRIC.md

Work: The Ramayana (Valmiki, c. -500)
Slug: ramayana
Region: india
Protagonist: Rama

CRITICAL: score through the Uttara Kanda ending — Sita's banishment and Rama's death ARE part of the arc if the synopsis covers them. Do NOT stop at Rama's coronation. Include the seven kandas in full: Bala, Ayodhya, Aranya, Kishkindha, Sundara, Yuddha, Uttara.

Steps:
1. WebFetch the Wikipedia article: https://en.wikipedia.org/wiki/Ramayana — full synopsis covering all seven kandas.
2. If Wikipedia's Uttara Kanda coverage is thin, ALSO fetch https://en.wikipedia.org/wiki/Uttara_Kanda for the ending events. Record both URLs.
3. Extract 12-20 beats in telling order: birth, Vishwamitra's mission, marriage to Sita, exile ordered, forest life, Sita's abduction by Ravana, alliance with Sugriva, Hanuman finds Sita, bridge to Lanka, war with Ravana, Ravana slain, Sita's agni pariksha, return and coronation, THEN Uttara Kanda — Sita banished, twins Lava and Kusha, Sita returns to earth, Rama's final departure (Sarayu/ascension).
4. Assign t in 0..1 across the kandas (coronation ≈ 0.85, Uttara Kanda ≈ 0.85-1.0).
5. Score each beat 1-9 for Rama's situation.
6. Event text ≤ 90 chars.

Write STRICT JSON (no trailing commas) to ./data/validation/ramayana.json:
{"id": "ramayana", "title": "The Ramayana", "author": "Valmiki", "year": -500, "region": "india", "protagonist": "Rama", "source": ["<url>", ...], "beats": [{"t": 0.05, "score": 6, "event": "..."}, ...]}

Then reply with a 2-line summary: (1) shape in words, (2) source(s) used.

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Ramayana]* · *[Bash: Ensure validation dir exists]* · *[Write: ./data/validation/ramayana.json]* · *[Bash: Validate JSON]*

**Claude:**

Shape: Rises from princely birth through marriage to a coronation-eve peak, plunges at exile and Sita's abduction, climbs through alliance, bridge, and Ravana's defeat to the triumphant Rama Rajya coronation, then descends again through Sita's banishment, her return to the earth, and Rama's final walk into the Sarayu — a "double rise-and-fall" ending in dignified renunciation rather than triumph.

Source: https://en.wikipedia.org/wiki/Ramayana (Wikipedia synopsis, all seven kandas including Uttara Kanda — no supplementary fetch needed).

