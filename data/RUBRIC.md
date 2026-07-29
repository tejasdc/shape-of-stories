# Arc-authoring rubric (shared by all authoring agents)

You are authoring narrative-arc data for a "Shape of Stories" visualization (Vonnegut-style).
Output is JSON, one file per batch, schema below. Follow this rubric EXACTLY so that arcs
from different agents are calibrated against each other.

## Schema

```json
{"books": [
  {
    "id": "kebab-slug",
    "title": "…", "author": "…", "year": 1949,
    "kind": "novel|memoir|drama|folk",
    "source": "authored",
    "arch": "rise|tragedy|hole|icarus|cinderella|oedipus|flatline",
    "crossed": false,
    "axes": [
      {"axis": "fortune", "label": "", "source": "authored", "pts": [[0.0, 0.1], [0.12, -0.4], …]},
      {"axis": "knowledge", "label": "What Pip knows about his money", "source": "authored", "pts": […]}
    ],
    "beats": [[0.25, "Short beat label, ≤6 words"], …],
    "note": "One sharp sentence (≤160 chars) about what this shape reveals."
  }
]}
```

## Axes vocabulary (use ONLY these ids)

- `fortune` — protagonist wellbeing (Vonnegut's G↔I axis)
- `knowledge` — what protagonist or reader understands (ignorance → revelation)
- `power` — agency/control (powerless → powerful)
- `connection` — isolation → belonging
- `tension` — READER-side dread (calm → dread)
- `certainty` — can anyone tell what is true / what events mean (ambiguity → clarity)

## Scoring calibration (CRITICAL — all agents must anchor identically)

- `t` runs 0→1 over narrative time IN TELLING ORDER (the order the reader experiences).
- `v` runs −1→1. Anchors: **−1** = worst state this axis reaches in ANY canonical story
  (death of everything loved, total ruin, absolute ignorance, utter isolation);
  **0** = neutral/ordinary life; **+1** = fairy-tale-grade peak (wedding+fortune+justice).
  A merely bad day is ≈ −0.3. Most realist novels should live within ±0.8;
  reserve ±0.9–1.0 for extremes (Cinderella's ending, 1984's Room 101).
- 8–16 points per axis. Place points at real plot events, not evenly spaced.
- The FIRST axis in `axes` is the story's PRIMARY axis — the one the story "runs on."
  For most books that's `fortune`. For a whodunit it's `knowledge`. Choose deliberately.
- Add a SECOND axis ONLY if the story is genuinely crossed (two axes diverging is the
  point of the story) — then set `"crossed": true` and give the second axis a human
  `label` saying whose/what line it is. Do not add decorative extra axes.
- `arch` describes the PRIMARY axis line: rise / tragedy (fall) / hole (fall–rise) /
  icarus (rise–fall) / cinderella (rise–fall–rise) / oedipus (fall–rise–fall) /
  flatline (deliberate ambiguity/oscillation, e.g. Waiting for Godot).
- 3–6 `beats`, anchored to the primary axis, at the t of the actual event.
- Endings matter most: get the final 15% of each arc exactly right (damped recoveries,
  grace notes in ruin, ambiguous codas — encode them honestly, e.g. end at 0.3 not 0.9
  if the recovery is partial).

## Worked example (calibration reference — do NOT include in your output)

Breaking Bad (TV, for calibration only): primary `power` [[0,-0.7],[0.08,-0.5],[0.2,0.0],[0.35,0.3],[0.5,0.55],[0.65,0.75],[0.8,0.9],[0.92,0.6],[1,-0.2]] — chemistry teacher → kingpin → ruin; secondary `fortune` (family wellbeing) [[0,-0.3],[0.2,0.0],[0.4,-0.2],[0.6,-0.5],[0.8,-0.8],[1,-0.95]]; crossed: true; arch: icarus (on power). Note: "Power and family wellbeing are mirror images — every step up one ladder is a step down the other."

## Output rules

- Valid strict JSON (no trailing commas, no comments). Typographic apostrophes (’) inside
  strings are fine; use straight double quotes (") as delimiters.
- Write ONLY the JSON file at the path you were given. Then reply with a 3-line summary.
- Before writing, mentally verify each arc against the actual book — events at the right t,
  ending honest. If you are unsure of a book's plot details, get them right via web search
  rather than guessing.
