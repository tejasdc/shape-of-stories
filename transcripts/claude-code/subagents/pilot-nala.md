# Helper agent — Hero-line: Nala-Damayanti

**Agent `team-lead` reported** — 

> Follow ./data/pilot/PILOT-RUBRIC.md exactly, with two adaptations: extraction from a compendium, and 16 chunks instead of 20 (short text). Use ./data/reagan/book_13268.txt if it already exists (another agent may have downloaded it), else download https://www.gutenberg.org/cache/epub/13268/pg13268.txt there. Extract ONLY the "Nala and Damayanti" section. gutenberg_id: 13268 (note "section": "Nala and Damayanti"). Protagonist: Nala (score his and Damayanti's joint fortune — this is a couple's arc: kingdom lost to dice, separation, disguise, reunion, restoration). 16 chunks, t = (i-0.5)/16. Output: ./data/pilot/nala-damayanti.json

> *[Bash: Check existence of files]* · *[Read: ./data/pilot/PILOT-RUBRIC.md]* · *[Bash: Find section boundaries]* · *[Bash: Find end of Nala section]* · *[Read: ./data/reagan/book_13268.txt]* · *[Read: ./data/reagan/book_13268.txt]* · *[Bash: Find part boundaries]* · *[Read: ./data/reagan/book_13268.txt]* · *[Write: ~/workspace/agent-scripts/nala_chunks.py]* · *[Bash: Split Nala section into 16 chunks]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Write: ./data/pilot/nala-damayanti.json]* · *[Bash: Validate JSON]*

**Claude:**

Wrote `./data/pilot/nala-damayanti.json` (16 chunks, valid JSON) after reading all 16 chunks of the Nala-Damayanti section from Sir Edwin Arnold's translation.

Scores by chunk: 7, 6, 9, 2, 1, 2, 3, 2, 3, 4, 6, 6, 7, 7, 9, 9

Shape in words: a classic **deep U-curve (double-check bathtub)**: opens at everyday-happy love idyll, spikes to triumphant wedding, plunges to catastrophe (Kali's possession, dice ruin, abandonment, rape attempt, elephant stampede, being blamed as a witch), then climbs steadily back through Damayanti's rescue at Chedi, Nala's transformation into Vahuka, the messenger poems, expulsion of Kali, and the miracle-cued reunion — finishing with the reclaimed throne. The rise is slower than the fall, giving a slightly asymmetric U with a very high final terrace at chunks 15–16.

