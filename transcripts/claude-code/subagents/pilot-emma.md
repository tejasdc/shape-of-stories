# Helper agent — Hero-line: Emma

**Agent `team-lead` reported** — 

> Follow ./data/pilot/PILOT-RUBRIC.md exactly. Book: Emma (Jane Austen). Text already at ./data/reagan/emma.txt. gutenberg_id: 158. Protagonist: Emma Woodhouse. Output: ./data/pilot/emma.json Note: the word-mood line for this book sinks in the final fifth despite the happy ending; your careful event-based scores through Box Hill, the Harriet crisis, and the proposals are exactly what we need.

> *[Read: ./data/pilot/PILOT-RUBRIC.md]* · *[Bash: Check emma.txt size and header]* · *[Bash: Check footer]* · *[Write: ~/workspace/agent-scripts/split_emma.py]* · *[Bash: Split emma into 20 chunks]* · *[Read: ./data/reagan/chunks/chunk_01.txt]* · *[Bash: Check what's actually in emma.txt]* · *[Bash: Verify chunk_01 content]* · *[Bash: Check first bytes of emma.txt]*

**Claude:**

Another agent is writing to the same chunks directory. Let me use a unique path.

> *[Bash: Check dir]* · *[Edit: ~/workspace/agent-scripts/split_emma.py]* · *[Bash: Re-split emma into unique location]*

**Claude:**

Now let me read the chunks in order and score them. Chunk 01:

> *[Read: <temporary file>]*

**Claude:**

Chunk 01: Emma introduced as handsome, clever, rich, with gentle sorrow at Miss Taylor's marriage; she takes up Harriet Smith. Score 7 — comfortable, on top of her world.

> *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]* · *[Read: <temporary file>]*

**Claude:**

Now I have read all 20 chunks. Let me write the JSON output.

> *[Write: ./data/pilot/emma.json]* · *[Bash: Validate JSON]*

**Claude:**

JSON is valid. Wrote 20 event-based scores after reading each ~7,877-word chunk in order.

Shape summary (3 lines):
Emma's fortune line opens comfortably around 6–7 as she reigns over Highbury, drops sharply at Elton's carriage proposal in chunk 6 (score 3), climbs back through Frank Churchill's arrival and the ball, then plunges to a hard nadir across Box Hill (chunk 16, score 3) and the twin discoveries that Frank was secretly engaged and Harriet loves Knightley (chunk 17, score 2). It then leaps to 8 with Knightley's proposal in chunk 18 and rises further to 9 at the wedding — a jagged W with a shallow first dip and a much deeper second, resolving on the highest note in the book. If the labMT word-mood line indeed sinks in the final fifth as predicted, that divergence lands exactly against chunks 18–20 here, where Emma's actual situation is at its life peak while Austen's prose is thick with reproach, humility, and quiet elegiac language about lost illusions.

Output: `./data/pilot/emma.json`

