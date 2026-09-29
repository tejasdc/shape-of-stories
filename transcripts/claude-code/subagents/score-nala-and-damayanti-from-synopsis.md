# Helper agent — Score Nala and Damayanti from synopsis

## Task given to this agent · 2026-08-01 16:33

You are scoring an episode's protagonist fortune line from a PUBLISHED SYNOPSIS ONLY. This is a validation exercise — you must NOT read anything under ./data/pilot/ or ./data/synopsis/ (they contain other scorings that would bias you).

READ THIS RUBRIC FIRST — follow it exactly:
./data/synopsis/SYNOPSIS-RUBRIC.md

Work: Nala and Damayanti (episode from the Mahabharata's Vana Parva; date approx -400)
Slug: nala-damayanti
Region: india
Protagonist: Nala (score the couple's JOINT fortune — Damayanti's suffering counts toward Nala's fortune too since they're separated across much of the tale)

Steps:
1. WebFetch the Wikipedia article: https://en.wikipedia.org/wiki/Nala_and_Damayanti — full plot/synopsis.
2. If Wikipedia is <300 words on plot, ALSO fetch https://en.wikipedia.org/wiki/Nala for its plot summary section. Record both URLs.
3. If still thin, try Britannica or a scholarly summary; record all URLs used.
4. Extract 12-20 beats in telling order (svayamvara → marriage → Kali's possession → dice game loss → exile → separation → Damayanti's wanderings → Nala's transformation as Bahuka → reunion → restoration of kingdom).
5. Assign t in 0..1 evenly across the tale's arc.
6. Score each beat 1-9 for the joint fortune of Nala+Damayanti.
7. Event text ≤ 90 chars.

Write STRICT JSON (no trailing commas) to ./data/validation/nala-damayanti.json:
{"id": "nala-damayanti", "title": "Nala and Damayanti", "author": "Mahabharata episode", "year": -400, "region": "india", "protagonist": "Nala (and Damayanti jointly)", "source": ["<url>", ...], "beats": [{"t": 0.05, "score": 6, "event": "..."}, ...]}

Then reply with a 2-line summary: (1) shape in words, (2) source(s) used.

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Nala_and_Damayanti]* · *[Write: ./data/validation/nala-damayanti.json]*

**Claude:**

Shape: high peak at marriage, deep plunge through Kali's possession, dice loss, forest abandonment, and Damayanti's ordeals (nadir ~0.5-0.6), gradual climb through snake-king's boon and Bahuka disguise, then a triumphant restoration — a canonical man-in-hole / rags-to-riches arc.
Source: https://en.wikipedia.org/wiki/Nala_and_Damayanti

