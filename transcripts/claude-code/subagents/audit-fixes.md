# Helper agent — Apply audit A beat fixes

**Agent `team-lead` reported** — 

> Read ./tmp/reviews/beat-audit-a.md carefully. For each numbered discrepancy in the per-book sections (the-great-gatsby, pride-and-prejudice, 1984, the-hobbit, tale-of-kieu, epic-of-gilgamesh — gilgamesh was CLEAN, skip it), edit the corresponding ./data/synopsis/{slug}.json to fix it: rewrite beat event text so it states only what the cited synopsis states (drop embellishments and adaptation details like "double wedding" staging), fix the one order error (gatsby beat 2 motive → move its reveal to where the synopsis places it, adjusting t values minimally while keeping ts ascending), and adjust the disputed scores where the audit's argument is sound (use your judgment per the rubric data/synopsis/SYNOPSIS-RUBRIC.md; if the audit's score dispute is weak, keep the original and note why). Keep every file strict valid JSON, beats in ascending t, event text ≤90 chars. Do not touch any other files. Reply with a list of every change made (book, beat t, old → new).

> *[Read: ./tmp/reviews/beat-audit-a.md]* · *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[Read: ./data/synopsis/the-great-gatsby.json]* · *[Read: ./data/synopsis/pride-and-prejudice.json]* · *[Read: ./data/synopsis/1984.json]* · *[Read: ./data/synopsis/the-hobbit.json]* · *[Read: ./data/synopsis/tale-of-kieu.json]*

**Claude:**

Now I'll apply the fixes to each file.

> *[Edit: ./data/synopsis/the-great-gatsby.json]* · *[Edit: ./data/synopsis/the-great-gatsby.json]* · *[Edit: ./data/synopsis/the-great-gatsby.json]* · *[Edit: ./data/synopsis/the-great-gatsby.json]* · *[Edit: ./data/synopsis/the-great-gatsby.json]*

**Claude:**

Now Pride and Prejudice:

> *[Edit: ./data/synopsis/pride-and-prejudice.json]* · *[Edit: ./data/synopsis/pride-and-prejudice.json]* · *[Edit: ./data/synopsis/pride-and-prejudice.json]* · *[Edit: ./data/synopsis/pride-and-prejudice.json]*

**Claude:**

Now 1984:

> *[Edit: ./data/synopsis/1984.json]*

**Claude:**

For 1984 beat 4, I'll drop the invented beat rather than substitute with another guess.

> *[Edit: ./data/synopsis/1984.json]* · *[Edit: ./data/synopsis/1984.json]* · *[Edit: ./data/synopsis/1984.json]*

**Claude:**

Now the Hobbit:

> *[Edit: ./data/synopsis/the-hobbit.json]* · *[Edit: ./data/synopsis/the-hobbit.json]* · *[Edit: ./data/synopsis/the-hobbit.json]* · *[Edit: ./data/synopsis/the-hobbit.json]*

**Claude:**

Now Tale of Kieu:

> *[Edit: ./data/synopsis/tale-of-kieu.json]* · *[Edit: ./data/synopsis/tale-of-kieu.json]* · *[Edit: ./data/synopsis/tale-of-kieu.json]* · *[Edit: ./data/synopsis/tale-of-kieu.json]* · *[Edit: ./data/synopsis/tale-of-kieu.json]* · *[Edit: ./data/synopsis/tale-of-kieu.json]*

**Claude:**

Let me verify all files are valid JSON:

> *[Bash: Validate JSON for all 5 modified files]*

**Claude:**

All 5 files are valid JSON with beats in ascending t order and events ≤90 chars. Summary of every change:

**the-great-gatsby.json**
- Beat t=0.12: `"Gatsby throws lavish nightly parties in hope Daisy will come"` → `"Gatsby throws lavish nightly parties across the bay"` (dropped motive; moved to beat 5 where synopsis reveals it)
- Beat t=0.38: `"Jordan reveals Gatsby's old 1917 romance with Daisy"` → `"Jordan reveals the 1917 romance; Gatsby hopes Daisy will come"` (motive lands where synopsis places it — order fix; no t reshuffle needed)
- Beat t=0.70: `"Tom notices the affair and grows suspicious"` → `"Tom discovers the affair"` (matches wiki verb)
- Beat t=0.87: `"Gatsby waits outside Daisy's house, ready to take blame"` → `"Gatsby intends to take the blame for Myrtle's death"` (drops book-only all-night vigil)
- Beat t=1.00: `"Nick leaves East Egg, gazes once more at the green light"` → `"Nick leaves West Egg, gazes once more at the green light"` (Nick's Egg was wrong); score `3 → 1` (Gatsby dead; posthumous coda from his fortune line)

**pride-and-prejudice.json**
- Beat t=0.22: `"…Darcy cheated him of a living"` → `"…Darcy treated him badly"` (drops book-only "living")
- Beat t=0.72: `"Touring Pemberley she meets Darcy again; his manners have softened"` → `"Touring Pemberley she meets Darcy again"` (drops "manners softened" — book-side reading)
- Beat t=0.88: `"Aunt Gardiner reveals Darcy secretly paid Wickham off to save Lydia"` → `"Elizabeth learns Darcy secretly paid Wickham off to save Lydia"` (drops named source Wiki doesn't state)
- Beat t=1.00: `"Double wedding of Jane to Bingley and Elizabeth to Darcy"` → `"Jane weds Bingley and Elizabeth weds Darcy; both happy endings"` (drops "double wedding" staging)
- Score dispute beat 12 (t=0.78, Lydia elopement, score 1): kept — audit calls it a defensible edge case; Regency social ruin of whole family qualifies as catastrophic.
- Score dispute beat 17 (t=1.00, score 9): kept — audit itself calls it defensible fairy-tale peak.

**1984.json**
- Beat t=0.10: `"…knows he is already a thought-criminal"` → `"…the diary already condemns him"` (drops book-only "thought-criminal" term)
- Beat t=0.22 (`"Suspects Julia is a spy…"`): **removed** — no basis in the declared Wikipedia synopsis and I could not substitute a replacement I could verify. Beat count 14 → 13 (still above 12 min).
- Beat t=0.60: `"He and Julia read Goldstein's forbidden book together"` → `"Reads Goldstein's forbidden book on the Party's rule"` (drops the joint-reading that's book-side; wiki only has O'Brien providing the book)
- Beat t=0.98: score `2 → 1` (audit's argument sound — Winston's mutual-betrayal admission is on par with the flanking 1s of Room 101 and Big-Brother acceptance)

**the-hobbit.json**
- Beat t=0.03 (`"Bilbo enjoys quiet life…"`): **removed** — prologue not in the declared synopsis (wiki opens with Gandalf). Beat count 18 → 17. Following beat (Gandalf) shifted from t=0.07 to t=0.05 to preserve smooth opening.
- Beat t=0.62: `"…Wood-elf dungeons in barrels"` → `"…Wood-elf dungeons"` (drops "in barrels" — book detail)
- Beat t=0.84: `"…kills Smaug with an arrow to the bare patch"` → `"…kills Smaug through the bare patch"` (drops "arrow" — book detail; keeps bare-patch which the synopsis does name)
- Beat t=1.00: `"Bilbo returns home a year later with modest wealth"` → `"Bilbo returns to the Shire, wealthy but humble"` (matches wiki wording; drops "a year later")
- Score disputes beats 17 (score 6) and 14 (score 7): kept — audit itself calls both defensible edges; 6 for Thorin-dies-but-mission-succeeds is a defensible mixed win, and 7 for Smaug's death from Bilbo's perspective is defensible immediately-before-Battle-of-Five-Armies.
- Score dispute beat 3 (score 4): kept — audit says fine.

**tale-of-kieu.json**
- Beat t=0.12: `"…mourn his uncle for six months"` → `"…mourn his uncle, delaying their union"` (drops "six months" — not in synopsis; adds the delay the synopsis does state)
- Beat t=0.18: `"A silk dealer's frame-up jails her father and brother"` → `"False charges jail her father and brother; family faces ruin"` (drops specific silk-dealer frame-up)
- Beat t=0.38: `"Con man So Khanh lures her to elope, then abandons her"` → `"Con man So Khanh is hired to seduce and manipulate her"` (matches wiki wording); score `1 → 2` (audit's argument sound — grim continuation on already-1 baseline)
- Beat t=0.50: `"Student Thuc buys her out of the brothel and marries her"` → `"Student Thuc purchases her from the brothel as concubine"` (substantive — she's a concubine to Thuc's first wife Hoan Thu, which drives the next beat)
- Beat t=0.68: score `1 → 2` (audit's argument sound — grim continuation, not a fresh catastrophe)
- Beat t=0.86: `"Ho Ton Hien marries her off to a local official…"` → `"She is forced into another marriage to cover the scandal"` (drops named agent and "local official" — book detail not in synopsis)
- Score dispute beat 14 (score 9): kept — audit itself calls the outcast-to-warlord's-queen reversal defensibly a 9.
- Score dispute beat 20 (score 6): kept — audit itself calls it defensible.

**epic-of-gilgamesh.json**: not touched (audit clean).

