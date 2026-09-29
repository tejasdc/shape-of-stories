# Helper agent — Adversarial beat audit A

**Agent `team-lead` reported** — 

> Adversarial audit of synopsis-scored fortune lines. For each of these 6 files in ./data/synopsis/: the-great-gatsby.json, pride-and-prejudice.json, 1984.json, the-hobbit.json, tale-of-kieu.json, epic-of-gilgamesh.json — 1. Fetch the SAME synopsis URL(s) listed in the file's "source". 2. Check EVERY beat: (a) is the event actually stated in the synopsis (not invented, not from another book/adaptation)? (b) is the telling order correct? (c) is the t position sensible given structural cues? (d) is the 1-9 score defensible per the rubric in data/synopsis/SYNOPSIS-RUBRIC.md (1=catastrophic, 5=ordinary, 9=fairy-tale peak — flag inflated 9s/deflated 1s where the event doesn't warrant the extreme)? 3. Be adversarial: your job is to FIND errors, not bless the data. Write a per-book report to ./tmp/reviews/beat-audit-a.md: for each book, a verdict (CLEAN / MINOR ISSUES / MATERIAL ERRORS) plus a numbered list of every discrepancy found with the beat text and what the synopsis actually says. End with a summary table: book | beats checked | invented events | order errors | score disputes. Reply with the summary tab…

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[Read: ./data/synopsis/the-great-gatsby.json]* · *[Read: ./data/synopsis/pride-and-prejudice.json]* · *[Read: ./data/synopsis/1984.json]* · *[Read: ./data/synopsis/the-hobbit.json]* · *[Read: ./data/synopsis/tale-of-kieu.json]* · *[Read: ./data/synopsis/epic-of-gilgamesh.json]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Great_Gatsby]* · *[WebFetch: https://en.wikipedia.org/wiki/Pride_and_Prejudice]* · *[WebFetch: https://en.wikipedia.org/wiki/Nineteen_Eighty-Four]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Hobbit]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Tale_of_Kieu]* · *[WebFetch: https://en.wikipedia.org/wiki/Epic_of_Gilgamesh]*

**Claude:**

I have all six synopses. Let me write the audit report.

> *[Bash: Ensure output directory exists]* · *[Write: ./tmp/reviews/beat-audit-a.md]*

**Claude:**

| Book | Beats checked | Invented events | Order errors | Score disputes |
|---|---:|---:|---:|---:|
| the-great-gatsby | 14 | 2 (beat 11 vigil; beat 14 "East Egg") | 1 (beat 2 motive placed before its reveal at beat 5) | 1 (beat 14 posthumous coda scored 3) |
| pride-and-prejudice | 17 | 3 (beat 4 "living"; beat 14 Aunt Gardiner; beat 17 "double wedding") | 0 | 1 (beat 12 Lydia elopement: 1 vs 2 edge case) |
| 1984 | 14 | 2 (beat 4 Julia-spy suspicion; beat 8 "read together") | 0 | 1 (beat 13 score 2 arguably 1) |
| the-hobbit | 18 | 4 (beat 1 quiet-life prologue; beat 10 "in barrels"; beat 14 "arrow"; beat 18 "a year later") | 0 | 2 (beat 17 score 6 vs 5; beat 14 score 7 vs 6) |
| tale-of-kieu | 20 | 4 (beat 3 "six months"; beat 4 "silk dealer"; beat 8 elopement pattern; beat 16 Hồ Tôn Hiến attribution) | 0 | 2 (beat 10 "marries" mis-status of concubine; eight 1s cluster is score-inflation) |
| epic-of-gilgamesh | 17 | 0 material (beats 6, 13, 17 lightly interpretive but grounded) | 0 | 0 |

Full per-book report at `./tmp/reviews/beat-audit-a.md`. Headline: only Gatsby has a **material** error (Nick "leaves East Egg" — he lives in West Egg). Gilgamesh is clean. The others carry the same class of minor discrepancy — book-accurate details that don't appear in the declared Wikipedia synopsis, per rubric §2's "ONLY events the synopsis states" rule. Kieu also has one substantive error: calling Kiều Thúc's wife when the synopsis makes clear Hoạn Thư is his first wife and Kiều a concubine — the very fact that motivates the next beat.

