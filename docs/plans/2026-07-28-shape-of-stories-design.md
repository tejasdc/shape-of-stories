# The Shape of Stories — Survey & Animated Atlas

**Origin:** Tejas took a writing workshop, met Vonnegut's "Shape of Stories" (x-axis: Beginning→End, y-axis: Good Fortune→Ill Fortune), and asked two questions:

1. Are those the right axes? Do some stories run on *different* y-axes?
2. What shapes do the canonical/popular books actually take? Survey ~50+ and visualize each shape as an animation, postable on Substack/Twitter.

## Research foundation

- **Vonnegut (1947 thesis / 1985 lecture):** shapes drawn on B→E × G↔I. His named shapes: Man in Hole, Boy Meets Girl, From Bad to Worse, Which Way Is Up? (Hamlet — the line can't be drawn because we never know if events are good or ill), Creation Story, Old Testament, New Testament, Cinderella (his punchline: Cinderella's shape matches the New Testament's).
- **Reagan et al. 2016 (EPJ Data Science, arXiv:1606.07772):** sentiment-mined 1,300+ Gutenberg novels; >90% fall into six arcs: Rags to Riches (rise), Tragedy (fall), Man in a Hole (fall–rise), Icarus (rise–fall), Cinderella (rise–fall–rise), Oedipus (fall–rise–fall). Vonnegut vindicated by big data.
- **Boyd, Blackburn & Pennebaker 2020 (Science Advances):** ~40k narratives; narrative also has structured non-valence dimensions — staging, plot progression, **cognitive tension** (rises to ~80% mark, then releases). Confirms fortune isn't the only axis with a shape.

## The axes taxonomy (the answer to question 1)

X-axis is constant: narrative time. (One footnote: *discourse* time vs *story* time — Slaughterhouse-Five is a fall in story time and a scribble in telling order. Used as the closer.)

Six y-axes found in the survey:

| Axis | Poles | Native genres | Exemplar |
|---|---|---|---|
| Fortune | ill ↔ good | fairy tale, tragedy, comedy | Cinderella |
| Knowledge | ignorance ↔ revelation | mystery, detective | And Then There Were None |
| Power / Agency | powerless ↔ powerful | antihero, political | Macbeth |
| Connection | isolation ↔ belonging | romance, literary | Frankenstein, Normal People |
| Tension (reader-side) | calm ↔ dread | thriller | Gone Girl |
| Certainty | ambiguity ↔ clarity | modernist, Kafka | Hamlet, The Trial |

**Core thesis:** folk tales are one-axis stories; the canon is dominated by **crossed-axes stories** — the effect comes from two axes diverging (Oedipus: knowledge↑ fortune↓. Macbeth: power↑ soul↓. Gatsby: wealth↑ dream↓. Flowers for Algernon: tragedy IS the icarus on the intelligence axis. Atonement: fortune's rise revealed to be fiction — a certainty collapse. Educated: knowledge↑ belonging↓).

## Deliverables

1. **Dataset** — `data/books.js`: ~55 canonical/popular works (fiction + some memoir/non-fiction), each: archetype, primary axis, 8–14 control points per axis (some books get 2 axes), beat labels, one-line insight. All scored by one calibrated hand for cross-book comparability (deliberately NOT delegated to parallel agents — consistency of the y-scale matters more than speed).
2. **Single-file animated atlas** — `index.html`, no external deps (artifact CSP), theme-aware:
   - The Grammar: the 8 archetype shapes, self-drawing, with survey counts.
   - The Atlas: filterable grid of all books, mini-sparklines; click → full animated plot with beats.
   - Crossed Axes: the thesis section — two lines diverging on one plot.
   - Tour mode: autoplay cycle for screen-recording a video to post.
   - Methodology notes.
3. **Published artifact** on claude.ai for sharing/recording.

## Rendering approach

Catmull-Rom smooth curves through control points; self-drawing via stroke-dashoffset animation on SVG paths; beats fade in as the line passes them. Light/dark theme aware per artifact requirements.

## Honest limits

- Arc scoring is editorial judgment (mine), not sentiment mining. It's a *reading* of each book, calibrated across the set, not measurement. The Reagan paper is the measured version; this is the curated version — closer to what Vonnegut actually did at the chalkboard.
- "Top popular/canonical" list is a defensible blend of bestsellers + canon + genre coverage, not a ranked scrape.
