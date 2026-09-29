# Helper agent — Hero-line: Mahabharata arc

**Agent `team-lead` reported** — 

> Follow ./data/pilot/PILOT-RUBRIC.md exactly. Book: Maha-bharata, The Epic of Ancient India Condensed into English Verse (Romesh C. Dutt, 1898) — this condensation already extracts the Pandava throughline from the full epic, which is why we use it. Download https://www.gutenberg.org/cache/epub/19630/pg19630.txt to ./data/reagan/book_19630.txt. gutenberg_id: 19630. Protagonist: Yudhishthira and the Pandava brothers as a collective (score the family's collective fortune: their standing, freedom, exile, the war's cost, final ascent). 20 chunks. Output: ./data/pilot/mahabharata.json

> *[Read: ./data/pilot/PILOT-RUBRIC.md]* · *[Bash: Download Mahabharata text]* · *[Bash: Locate Gutenberg headers]* · *[Write: <temporary file>]* · *[Bash: Split into 20 chunks]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Write: ./data/pilot/mahabharata.json]* · *[Bash: Validate JSON]*

**Claude:**

Wrote `./data/pilot/mahabharata.json` — scored all 20 chunks after reading each end-to-end.

The Pandavas' fortune arc is a **jagged W with a redemptive lift**: princely peak at the tournament and Rajasuya sacrifice (chunks 3-4, scores 7-9), then a violent collapse into the dice-game humiliation and forest/menial exile (chunks 5-8, scores 2-4), a mid-book rebound as Arjun reveals himself and Abhimanyu weds (chunk 9, score 7), then a long grinding trough through the eighteen-day war where they win generals but bleed children — Abhimanyu, Ghatotkacha, Draupadi's five sons, and finally the revelation that Karna was their brother (chunks 10-17, mostly 3-5) — before the Aswa-medha and heavenly ascent restore glory at the very end (chunks 18-19, scores 8-9). Chunk 20 is entirely the translator's epilogue, so I scored the implied post-story state.

The main judgment call was the Savitri episode (chunks 6-8): the Pandavas are on-page only as listeners in forest exile, so I scored their exile situation rather than the tale itself, per the rubric.

