# Helper agent — Adversarial beat audit B

**Agent `team-lead` reported** — 

> Adversarial audit of synopsis-scored fortune lines. Same task as described below for these 6 files in ./data/synopsis/: macbeth.json, the-kite-runner.json, journey-to-the-west.json, shawshank-redemption.json, harishchandra.json, beloved.json — 1. Fetch the SAME synopsis URL(s) listed in each file's "source". 2. Check EVERY beat: (a) event actually stated in the synopsis (not invented, not from adaptations)? (b) telling order correct? (c) t position sensible? (d) 1-9 score defensible per data/synopsis/SYNOPSIS-RUBRIC.md — flag inflated 9s/deflated 1s. 3. Be adversarial: find errors, don't bless. Write per-book report to ./tmp/reviews/beat-audit-b.md with verdicts (CLEAN / MINOR ISSUES / MATERIAL ERRORS), numbered discrepancies, and a summary table: book | beats checked | invented events | order errors | score disputes. Reply with the summary table only.

> *[Bash: List synopsis files and existing reviews]* · *[Bash: Read the synopsis rubric]* · *[Read: ./data/synopsis/macbeth.json]* · *[Read: ./data/synopsis/the-kite-runner.json]* · *[Read: ./data/synopsis/journey-to-the-west.json]* · *[Read: ./data/synopsis/shawshank-redemption.json]* · *[Read: ./data/synopsis/harishchandra.json]* · *[Read: ./data/synopsis/beloved.json]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Macbeth]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Kite_Runner]* · *[WebFetch: https://en.wikipedia.org/wiki/Journey_to_the_West]* · *[WebFetch: https://en.wikipedia.org/wiki/Rita_Hayworth_and_Shawshank_Redemption]* · *[WebFetch: https://en.wikipedia.org/wiki/Harishchandra]* · *[WebFetch: https://en.wikipedia.org/wiki/Beloved_(novel)]*

**Claude:**

Now I'll write the audit report to disk.

> *[Write: ./tmp/reviews/beat-audit-b.md]* · *[ToolSearch: select:SendMessage]* · *[SendMessage]*

**Claude:**

Audit delivered to team-lead. Report at `./tmp/reviews/beat-audit-b.md`.

Headline findings across the six files: no invented events except one in `harishchandra.json` (a subjects-curse claim absent from the cited Markandeya Purana synopsis), one material protagonist/fortune-carrier inconsistency in `shawshank-redemption.json` (Andy declared as protagonist but final two beats score Red's arc), and two trivial wording fixes in `beloved.json` (Stamp Paid, not "coworker") and `macbeth.json` ("killed offstage" per Wikipedia, not "in combat"). `the-kite-runner`, `journey-to-the-west`, and `beloved` are otherwise clean on events, order, and `t` positioning.

