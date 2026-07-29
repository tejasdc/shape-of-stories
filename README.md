# The Shape of Stories

An animated atlas of the narrative arcs of 93 books, after Kurt Vonnegut's "Shape of Stories" —
and one step further: fortune isn't the only axis a story can run on.

**Live:** https://claude.ai/code/artifact/2ca30c0c-9f32-4723-a5f7-ae8741fee187
**Local:** `python3 -m http.server 8321` then open `http://localhost:8321/index.html`

## What's in it

- **93 books** — 37 with arcs *measured* from the full text, 56 hand-scored *editorial readings*
  calibrated against `data/RUBRIC.md`. 35 are **crossed** (two lines diverging — the survey's thesis).
- **Six y-axes**: fortune (Vonnegut's), knowledge, power, connection, tension, certainty.
- **Encodings**: classic line, scissors (divergence ribbon), phase portrait, lanes, morph,
  ridgeline wall, barcode wall, shape-space map, autoplay tour, chalk skin.

## Data provenance

- Measured arcs: Reagan, Mitchell, Kiley, Danforth & Dodds, *"The emotional arcs of stories are
  dominated by six basic shapes"* (EPJ Data Science 5:31, 2016; arXiv:1606.07772), per-book labMT
  time series from [andyreagan/core-stories](https://github.com/andyreagan/core-stories)
  (`src/VACC-scripts/timeseries.tgz`; no explicit license — used with attribution; underlying
  texts are Project Gutenberg public domain).
- **Series orientation was empirically verified**: re-derived five books from raw Gutenberg text with
  the labMT lexicon; all correlate positively with the tarball series (r = +0.15..+0.67), so the
  stored values are happiness-as-is. (An earlier "fix" that flipped the sign was wrong — plot
  intuition is not lexical sentiment. See below.)
- The lexicon hears vocabulary, not plot: five famous books whose measured line contradicts the
  remembered plot (A Christmas Carol, Emma, The Odyssey, The Metamorphosis, Pride & Prejudice)
  carry both lines — "The plot as remembered" (authored, primary) vs "What the lexicon heard"
  (measured) — as deliberate crossed pairs.
- Tension-axis framing informed by Boyd, Blackburn & Pennebaker, *"The narrative arc"*
  (Science Advances 6:eaba2196, 2020; data at osf.io/q2a7m).

## Pipeline

Scripts live in `~/workspace/agent-scripts/`: `extract_arcs.py` (smooth + normalize + archetype-fit
measured series), `merge_stories.py` (validate + merge authored batches + augments → `data/stories.js`),
`verify_sign*.py` (labMT orientation checks), `shoot_shapes.mjs` (Playwright screenshot suite).
`artifact.html` is `index.html` with the data inlined (single-file, CSP-safe).

Externally reviewed by Codex (session log in `tmp/reviews/`), iterated to GO.
