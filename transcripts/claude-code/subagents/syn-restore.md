# Helper agent — Synopsis-score restored books

**Agent `team-lead` reported** — 

> Follow ./data/synopsis/SYNOPSIS-RUBRIC.md exactly. Score these 13 works (region "west"), one JSON per book to ./data/synopsis/{slug}.json: hamlet | Hamlet | William Shakespeare | 1601 the-trial | The Trial | Franz Kafka | 1925 rebecca | Rebecca | Daphne du Maurier | 1938 diary-of-a-young-girl | The Diary of a Young Girl | Anne Frank | 1947 (handle with dignity; her line simply stops — final beat where the diary ends, not at t=1) the-murder-of-roger-ackroyd | The Murder of Roger Ackroyd | Agatha Christie | 1926 (protagonist Dr. Sheppard) fight-club | Fight Club | Chuck Palahniuk | 1996 (the unnamed narrator) flowers-for-algernon | Flowers for Algernon | Daniel Keyes | 1966 (Charlie Gordon — score his overall situation, the rise and loss of his mind included) the-godfather | The Godfather | Mario Puzo | 1969 (Michael Corleone — score his overall situation as a person, not his power) educated | Educated | Tara Westover | 2018 (memoir) eleanor-oliphant | Eleanor Oliphant Is Completely Fine | Gail Honeyman | 2017 a-man-called-ove | A Man Called Ove | Fredrik Backman | 2012 normal-people | Normal People | Sa…

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Hamlet]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Trial]* · *[WebFetch: https://en.wikipedia.org/wiki/Rebecca_(novel)]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Diary_of_a_Young_Girl]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Murder_of_Roger_Ackroyd]* · *[WebFetch: https://en.wikipedia.org/wiki/Fight_Club]* · *[WebFetch: https://en.wikipedia.org/wiki/Flowers_for_Algernon]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Godfather_(novel)]* · *[WebFetch: https://en.wikipedia.org/wiki/Educated]* · *[WebFetch: https://en.wikipedia.org/wiki/Eleanor_Oliphant_Is_Completely_Fine]* · *[WebFetch: https://en.wikipedia.org/wiki/A_Man_Called_Ove]* · *[WebFetch: https://en.wikipedia.org/wiki/Normal_People]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Da_Vinci_Code]*

**Claude:**

I have most synopses. Let me re-fetch the three that failed with better URLs.

> *[WebFetch: https://en.wikipedia.org/wiki/Fight_Club_(novel)]* · *[WebFetch: https://en.wikipedia.org/wiki/Educated_(memoir)]* · *[WebFetch: https://en.wikipedia.org/wiki/A_Man_Called_Ove_(novel)]* · *[WebFetch: https://en.wikipedia.org/wiki/A_Man_Called_Ove_(film)]*

**Claude:**

Now I'll write all 13 JSON files in parallel.

> *[Write: ./data/synopsis/hamlet.json]* · *[Write: ./data/synopsis/the-trial.json]* · *[Write: ./data/synopsis/rebecca.json]* · *[Write: ./data/synopsis/diary-of-a-young-girl.json]* · *[Write: ./data/synopsis/the-murder-of-roger-ackroyd.json]* · *[Write: ./data/synopsis/fight-club.json]* · *[Write: ./data/synopsis/flowers-for-algernon.json]* · *[Write: ./data/synopsis/the-godfather.json]* · *[Write: ./data/synopsis/educated.json]* · *[Write: ./data/synopsis/eleanor-oliphant.json]* · *[Write: ./data/synopsis/a-man-called-ove.json]* · *[Write: ./data/synopsis/normal-people.json]* · *[Write: ./data/synopsis/the-da-vinci-code.json]*

**Claude:**

All 13 books scored. Sending 3-line summaries to team lead.

> *[ToolSearch: select:SendMessage]* · *[SendMessage]*

**Claude:**

All 13 works scored and written to `./data/synopsis/` (one JSON per slug), with 3-line summaries sent to team-lead. Notes worth flagging:

- **Anne Frank** — final beat at t=0.92 (score 4, her last entry), no terminal 1.0 beat per your dignity instruction.
- **A Man Called Ove** — the novel's Wikipedia page has no plot section (article carries an April 2026 "needs a plot summary" tag), so I sourced from `en.wikipedia.org/wiki/A_Man_Called_Ove_(film)`, which follows the book faithfully. Called out in the source field.
- **The Godfather** — Michael's line reflects overall situation-as-a-person (Apollonia's bombing = 1, ending 2 despite maximum power), not his rising authority.
- **Flowers for Algernon** — single clean arc that includes the pre-surgery baseline, the peak, and the regression, ending at the Warren home.

Files: `hamlet.json`, `the-trial.json`, `rebecca.json`, `diary-of-a-young-girl.json`, `the-murder-of-roger-ackroyd.json`, `fight-club.json`, `flowers-for-algernon.json`, `the-godfather.json`, `educated.json`, `eleanor-oliphant.json`, `a-man-called-ove.json`, `normal-people.json`, `the-da-vinci-code.json`.

