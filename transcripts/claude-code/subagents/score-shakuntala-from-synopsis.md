# Helper agent — Score Shakuntala from synopsis

## Task given to this agent · 2026-08-01 16:33

You are scoring a play's protagonist fortune line from a PUBLISHED SYNOPSIS ONLY. This is a validation exercise — you must NOT read anything under ./data/pilot/ or ./data/synopsis/ (they contain other scorings that would bias you).

READ THIS RUBRIC FIRST — follow it exactly:
./data/synopsis/SYNOPSIS-RUBRIC.md

Work: Shakuntala (a.k.a. Abhijnanashakuntalam, Kalidasa, c. 400 CE — the Sanskrit play, NOT the older Mahabharata version)
Slug: shakuntala
Region: india
Protagonist: Shakuntala

Steps:
1. WebFetch the Wikipedia article: https://en.wikipedia.org/wiki/Abhijnanashakuntalam — full plot/synopsis with act numbers (the play has 7 acts).
2. If plot section is <300 words, ALSO fetch a second synopsis (Britannica or academic summary of Kalidasa's play). Record all URLs.
3. Extract 12-20 beats in telling order across the 7 acts.
4. Assign t in 0..1 using act cues (act N ≈ N/7).
5. Score each beat 1-9 for Shakuntala's situation.
6. Event text ≤ 90 chars.

Write STRICT JSON (no trailing commas) to ./data/validation/shakuntala.json:
{"id": "shakuntala", "title": "Shakuntala", "author": "Kalidasa", "year": 400, "region": "india", "protagonist": "Shakuntala", "source": ["<url>", ...], "beats": [{"t": 0.05, "score": 6, "event": "..."}, ...]}

Then reply with a 2-line summary: (1) shape in words, (2) source(s) used.

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Abhijnanashakuntalam]* · *[WebFetch: https://en.wikipedia.org/wiki/Shakuntala]* · *[WebFetch: https://www.britannica.com/topic/Abhijnanashakuntala]* · *[WebFetch: https://www.britannica.com/topic/Shakuntala-Sanskrit-drama]* · *[WebFetch: https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/shakuntala]* · *[ToolSearch: select:WebSearch]* · *[WebSearch: Abhijnanashakuntalam act by act synopsis all seven acts Kalidasa detailed]* · *[WebFetch: https://gyansanchay.csjmu.ac.in/wp-content/uploads/2021/11/Abhijnana-Shakuntalam.pdf]* · *[WebFetch: https://literopedia.com/kalidasa-abhijnana-shakuntalam-summary-themes]* · *[Bash: Ensure validation directory exists]* · *[Write: ./data/validation/shakuntala.json]*

**Claude:**

Shape: rises from ordinary hermitage life to a peak at the Gandharva wedding, then collapses through Durvasa's curse to a nadir at Dushyanta's public disowning of her at court, drifts in celestial exile with her son, and climbs back to a triumphant reunion peak in Act 7 — a rise, deep fall, long trough, and final restoration (Cinderella-like double arc).

Sources: Wikipedia (Abhijnanashakuntalam and Shakuntala articles), Unacademy act-by-act overview, Literopedia summary.

