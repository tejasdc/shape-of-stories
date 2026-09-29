# Helper agent — Editorial shape labeling pass

**Agent `team-lead` reported** — 

> Task: assign a shape label to each of 114 story fortune-lines. Read ./data/label-input.json — each entry has the book's score sequence (values −1..1, telling order) and an unreliable auto-label. Labels and STRICT definitions (judge the story-level envelope, ignoring beat-to-beat jitter): - rise: broadly upward the whole way; ends near its top; no major mid-story collapse-and-recovery. - tragedy: broadly downward; ends near its bottom. - hole: starts middling-or-better, one dominant valley, climbs out, ends HIGHER than the valley and near/above the start. - icarus: one dominant peak in the early/middle, ends much lower than the peak. - cinderella: up, then a real setback, then up again — ends near its top (the setback distinguishes it from rise). - oedipus: down, a genuine recovery, then down again — ends near its bottom. - flatline: stays within a narrow band the whole way (Waiting for Godot pattern) — the line refuses to commit. - complex: THREE OR MORE genuine story-level reversals of comparable size (a true sawtooth, e.g. repeated captures and rescues) — use sparingly, only when no single dominant valley/peak exists. Rules: judge from the…

> *[Bash: Inspect the label-input.json file]* · *[Read: ./data/label-input.json]*

**Claude:**

I've read all 114 fortune-lines. Now I'll write a Python script to build the labels JSON deterministically with my classifications.

> *[Write: <temporary file>]* · *[Bash: Run script to generate shape-labels.json]*

**Claude:**

All 114 labeled, both anchors satisfied (`cinderella-perrault` = cinderella, `waiting-for-godot` = flatline), and `./data/shape-labels.json` written.

**Counts by label:**
- rise: 8
- tragedy: 23
- hole: 23
- icarus: 23
- cinderella: 8
- oedipus: 1
- flatline: 6
- complex: 22

**Overrides from auto label (69 of 114):**

*→ icarus* (auto over-called tragedy/cinderella/oedipus on clear peak-then-fall arcs): epic-of-gilgamesh, tale-of-the-bamboo-cutter, tale-of-the-heike, romance-of-three-kingdoms, romeo-and-juliet, dream-of-the-red-chamber, great-expectations, the-great-gatsby, the-murder-of-roger-ackroyd, of-mice-and-men, rebecca, animal-farm, 1984, the-old-man-and-the-sea, lord-of-the-flies, flowers-for-algernon, one-hundred-years-of-solitude, fight-club, the-fault-in-our-stars, when-breath-becomes-air

*→ hole* (auto called them oedipus/tragedy/rise but they end near-or-above start after one dominant valley): the-iliad, buddhacarita, cilappatikaram, conference-of-the-birds, pride-and-prejudice, the-count-of-monte-cristo, dracula, the-stranger, to-kill-a-mockingbird, the-handmaids-tale, into-thin-air

*→ complex* (auto missed the sawtooth of 3+ comparable reversals): ramayana, mahabharata, tale-of-kieu, jane-eyre, les-miserables, tom-sawyer, the-time-machine, wizard-of-oz, call-of-the-wild, peter-pan, the-hobbit, charlottes-web, the-lord-of-the-rings, the-kite-runner, the-hunger-games, eleanor-oliphant, educated, normal-people

*→ cinderella* (up-then-setback-then-up ending near top): nala-damayanti, cinderella-perrault (anchor), tale-of-chunhyang, journey-to-the-west, shawshank-redemption, the-color-purple, unbroken

*→ flatline* (narrow band, no committed arc): alice-in-wonderland, crime-and-punishment, the-metamorphosis, the-catcher-in-the-rye, waiting-for-godot (anchor)

*→ tragedy* (auto over-imagined a recovery; end sits at/near bottom): layla-and-majnun, jekyll-and-hyde, tess-of-the-durbervilles, diary-of-a-young-girl, the-godfather, the-road

*→ oedipus*: slaughterhouse-five (down, mid recovery 0.5, down again to -0.75)

*→ rise*: harry-potter-sorcerers-stone (jumps -0.5→0.5 early and holds; the "flat" mid is a sustained plateau above start, not a pre-arc)

