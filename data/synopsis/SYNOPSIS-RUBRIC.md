# Synopsis-scored fortune line — shared rubric (all agents follow exactly)

Goal: a fortune line for a story, scored by an AI agent FROM A PUBLISHED PLOT SYNOPSIS
(open, citable public information) — not from unverifiable recall. Every line must be
checkable: a person reading the same synopsis should be able to dispute any point.

## Procedure

1. Fetch the plot synopsis: Wikipedia's "Plot" / "Synopsis" section for the work
   (WebFetch the article). If Wikipedia's plot section is thin (<300 words), also fetch
   one other reputable public synopsis (e.g., Britannica) and note both. Record the URL(s).
2. Extract the ordered sequence of plot events from the synopsis — 12 to 20 beats,
   in telling order. Use ONLY events the synopsis states (no filling gaps from memory;
   if the synopsis skips something you remember, it stays out).
3. Estimate each beat's position t in 0..1 across the work. Synopses compress unevenly,
   so positions are approximate — use structural cues (chapters, acts, parts, "in the
   final chapter...") where the synopsis gives them; otherwise space events evenly
   within their stated part. This approximation is acknowledged in the site's method
   note; do not agonize, do be sensible (a climax described at the end goes near 1.0).
4. Score each beat 1-9: how well are things going for the protagonist at that moment,
   judged from the EVENTS. 1 = catastrophic, 5 = ordinary life, 9 = triumphant peak.
   Same anchors as all prior scoring: a merely bad day ≈ 4; reserve 1 and 9 for extremes.
   Never score prose mood; score the situation.
5. For works with a collective or shifting protagonist, pick the clearest fortune-carrier
   and say who in the JSON ("protagonist"). For frame stories, score the FRAME's
   protagonist (e.g., Scheherazade herself for the Thousand and One Nights).
6. Keep each beat's event text ≤ 90 characters (it becomes an on-chart label).

## Output

Strict JSON at the path given in your prompt:
{"id": "<slug>", "title": "…", "author": "…", "year": <int, negative for BC>,
 "region": "<west|india|china|japan|korea|vietnam|persia|mesopotamia|arabia>",
 "protagonist": "…", "source": ["<synopsis url>", …],
 "beats": [{"t": 0.05, "score": 6, "event": "…"}, …]}
No trailing commas. Reply with a 3-line summary per book (title, shape in words, source used).
If a synopsis cannot be found or is too thin to support 12 beats, SKIP the book and say so
— never fall back to memory.
