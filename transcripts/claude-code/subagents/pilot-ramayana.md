# Helper agent — Hero-line: Ramayana arc

**Agent `team-lead` reported** — 

> Follow ./data/pilot/PILOT-RUBRIC.md exactly, with one adaptation: the book must first be EXTRACTED from a compendium. Download https://www.gutenberg.org/cache/epub/13268/pg13268.txt to ./data/reagan/book_13268.txt. It contains four works ("Hindu Literature": Hitopadesa, Nala and Damayanti, Ramayana, Sakoontala). Extract ONLY the condensed Ramayana section (find its start/end headings in the file). Then run the rubric on that section alone, 20 chunks. gutenberg_id: 13268 (note in JSON: "section": "Ramayana"). Protagonist: Rama — score his fortune through birth, exile, Sita's abduction, the war at Lanka, and return. Output: ./data/pilot/ramayana.json

> *[Read: ./data/pilot/PILOT-RUBRIC.md]* · *[Bash: Download book 13268]* · *[Bash: Find section boundaries]* · *[Bash: Find Ramayana section start]* · *[Bash: Find Sakoontala start (end of Ramayana)]* · *[Bash: Search for last section variant spellings]* · *[Read: ./data/reagan/book_13268.txt]* · *[Read: ./data/reagan/book_13268.txt]* · *[Bash: Look for Ramayana intro section start]* · *[Read: ./data/reagan/book_13268.txt]*

**Claude:**

I'll ignore the task reminder since these tasks are being handled elsewhere. Let me extract the Ramayana section and chunk it.

> *[Write: ~/workspace/agent-scripts/chunk_ramayana.py]* · *[Bash: Chunk Ramayana into 20]*

**Claude:**

Now let me read each chunk in order. Reading 20 chunks of ~1406 words each — I'll batch a few at a time.

> *[Read: ./data/reagan/chunks/chunk_01.txt]* · *[Read: ./data/reagan/chunks/chunk_02.txt]* · *[Read: ./data/reagan/chunks/chunk_03.txt]* · *[Read: ./data/reagan/chunks/chunk_04.txt]*

**Claude:**

Wait — chunks 3-4 are already in Śakoontala, not Ramayana. My extraction boundaries must be wrong. Let me verify.

> *[Bash: Verify boundary lines]* · *[Bash: Find Sakoontala play markers]* · *[Bash: Check if my range accidentally contains Sakuntala]* · *[Bash: Verify word count of Ramayana range]* · *[Bash: Check chunk files]* · *[Bash: Check chunk_03 head]* · *[Bash: Verify slice contents]* · *[Bash: Clean and rechunk]* · *[Bash: Verify new chunk 3 content]*

**Claude:**

Good — now chunks are correct. Let me read chunks 3-8.

> *[Read: ./data/reagan/chunks/chunk_03.txt]* · *[Read: ./data/reagan/chunks/chunk_04.txt]* · *[Read: ./data/reagan/chunks/chunk_05.txt]* · *[Read: ./data/reagan/chunks/chunk_06.txt]* · *[Read: ./data/reagan/chunks/chunk_07.txt]* · *[Read: ./data/reagan/chunks/chunk_08.txt]* · *[Read: ./data/reagan/chunks/chunk_09.txt]* · *[Read: ./data/reagan/chunks/chunk_10.txt]* · *[Read: ./data/reagan/chunks/chunk_11.txt]* · *[Read: ./data/reagan/chunks/chunk_12.txt]* · *[Read: ./data/reagan/chunks/chunk_13.txt]* · *[Read: ./data/reagan/chunks/chunk_14.txt]* · *[Read: ./data/reagan/chunks/chunk_15.txt]* · *[Read: ./data/reagan/chunks/chunk_16.txt]*

**Claude:**

Wait — chunks 15-16 are Shakuntala again. There's a caching issue or my script isn't actually extracting Ramayana content. Let me verify.

> *[Bash: Check chunks 15 and 20 contents]* · *[Bash: List all chunk files]* · *[Edit: ~/workspace/agent-scripts/chunk_ramayana.py]* · *[Bash: Re-chunk to unique dir]* · *[Bash: Verify new chunks 15-20 are Ramayana]* · *[Bash: Diff chunks to confirm 1-14 match]* · *[Bash: Compare heads of chunks 1 and 14]*

**Claude:**

I now have clean chunks in a private dir. I already read Ramayana content for chunks 1-14 before a racing process overwrote them. Let me read the correct 15-20.

> *[Read: ./data/reagan/ramayana_chunks/chunk_15.txt]* · *[Read: ./data/reagan/ramayana_chunks/chunk_16.txt]* · *[Read: ./data/reagan/ramayana_chunks/chunk_17.txt]* · *[Read: ./data/reagan/ramayana_chunks/chunk_18.txt]* · *[Read: ./data/reagan/ramayana_chunks/chunk_19.txt]* · *[Read: ./data/reagan/ramayana_chunks/chunk_20.txt]*

**Claude:**

Now let me write the final JSON with scores based on the actual telling.

> *[Write: ./data/pilot/ramayana.json]* · *[Bash: Validate JSON]*

**Claude:**

Wrote `./data/pilot/ramayana.json` with 20 chunk scores.

**Important caveat about this selection.** The Griffith "Selections from the Rámáyana" in Gutenberg #13268 is short (~28k words) and drawn almost entirely from Book I. It opens with Nárad's compressed summary of the whole epic (chunks 1-3), then restarts and narrates only through Rama's birth, boyhood, Viswamitra's demon-slaying quests, and the journey toward Mithilá. The text ends with the Bhagirath/Gangá legend — before Rama has even reached Janaka's court. Sita's abduction, the exile, and the war at Lanka appear only in Nárad's brief opening recap, not in the running narrative. So the fortune line here reflects what is actually told (a rising line of a young hero's triumphs), not the full Rama arc the parent asked me to score.

**Shape.** A steady auspicious plateau at 6, briefly dipping to 5 when Nárad's summary compresses Rama's trials (chunk 2) and again when Dasaratha reluctantly hands boy Rama to Viswamitra (chunk 12), then a clear rise to 8 at Rama's birth and again at the demon-slaying peaks (chunks 15-16), settling to a contented 7 as he journeys toward Mithilá. Overall: gently rising with two small dips, no catastrophe.

**Files.** Book: `./data/reagan/book_13268.txt`. Ramayana chunks (private, uncontested dir): `./data/reagan/ramayana_chunks/chunk_01.txt` through `chunk_20.txt`. Output: `./data/pilot/ramayana.json`.

One process note: the shared `/data/reagan/chunks/` directory was being written by another sibling agent (Shakuntala content kept overwriting my Ramayana chunks mid-read). I moved to a private `ramayana_chunks/` dir and re-verified before scoring; the 20 chunks used for the final scores were read from the private dir or captured before the race.

