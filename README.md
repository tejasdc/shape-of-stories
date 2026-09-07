# The Shape of Stories

An interactive atlas for seeing how stories move: the rises, reversals, recoveries,
and endings that give a narrative its shape.

**[Explore the atlas →](https://tejas.nyc/stories/)**

## Why I made it

A writing workshop introduced me to Kurt Vonnegut’s *Shape of Stories*: beginning to
end on one axis, good fortune to bad fortune on the other. I wanted to see what
those drawings looked like across books I knew, and books I hadn’t read. Which
shapes kept coming back? Was fortune always the right thing to track, or could a
story take a different shape when you followed knowledge, connection, or power?

I built this to learn by seeing the stories side by side. The animations and plot
events make an abstract idea about narrative something I can look at, compare,
and question. Along the way, I wanted to understand whether the mood of a book’s
words follows what actually happens to its characters, and whether stories from
Asian traditions, especially Indian mythology, trace similar arcs.

The current atlas focuses on characters’ fortunes. Those broader questions were
the starting point; the charts are readings to explore, rather than a claim that
every story can be reduced to one universal formula.

## Explore

Start with the shape sketches, then open a familiar book in the atlas to connect
its curve to the events you remember. Search by title or author, filter by shape,
and hover or tap along a story’s line to inspect its turning points. The **East &
West** section extends the comparison beyond the Western collection. **Method**
shows how the lines were made, including comparisons between the mood of the
words and the fortunes of the characters.

The event annotations include endings, so expect spoilers.

## Run locally

This is a static HTML, CSS, and JavaScript site using Canvas for the charts. It
needs no package installation, build step, API key, or backend.

```sh
git clone https://github.com/tejasdc/shape-of-stories.git
cd shape-of-stories
python3 -m http.server 8321 --bind 127.0.0.1
```

Open [localhost:8321](http://localhost:8321/). Press Ctrl+C to stop the server.

## Method and sources

The checked-in atlas contains 114 works: 92 in the Western collection and 22
across eight other traditions. Its eight shape groups combine the six basic
emotional arcs studied by Reagan and colleagues with a line of ambiguous fortune
and a group for stories with repeated reversals.

The main curves were scored by AI agents judging plot events against a shared
fortune rubric: nine works from full texts or condensed translations, and 105
from published synopses. Each line is a smoothed interpretation of those scores.
Synopsis links and event explanations are retained in the data; synopsis-based
stories also link to their source in the detail view. Event positions are
approximate, synopses omit things, and choosing whose fortunes to follow is
itself an interpretation. These are not objective measurements of a book’s
meaning or quality.

The dataset also retains vocabulary-based mood curves for 37 books. The Method
section draws selected comparisons with the event-based curves; the two kinds
of line answer different questions. The project’s full-text/synopsis comparison
records are in [data/validation/](data/validation/), and the
[live Method section](https://tejas.nyc/stories/#machine) explains the checks and
their limitations, particularly for sprawling epics.

The project draws on:

- Kurt Vonnegut’s [*Shape of Stories* lecture](https://www.youtube.com/watch?v=oP3c1h8v2ZQ),
  which prompted the exploration.
- Reagan, Mitchell, Kiley, Danforth & Dodds,
  [*The emotional arcs of stories are dominated by six basic shapes*](https://arxiv.org/abs/1606.07772)
  (2016), and the accompanying [core-stories repository](https://github.com/andyreagan/core-stories),
  the source of the labMT vocabulary-based comparison series.
- Boyd, Blackburn & Pennebaker,
  [*The narrative arc*](https://doi.org/10.1126/sciadv.aba2196) (2020), which informed
  the early exploration of narrative dimensions beyond fortune.

## Repository guide

- [index.html](index.html) — the app, chart drawing, interactions, and explanatory copy.
- [data/stories3.js](data/stories3.js) — the dataset loaded by the app.
- [data/pilot/](data/pilot/), [data/synopsis/](data/synopsis/), and
  [data/validation/](data/validation/) — scoring records and comparison inputs.
- [artifact.html](artifact.html) — a standalone export with its data inlined.
- [preview.html](preview.html) — the animated preview used on the portfolio.
- [docs/plans/](docs/plans/) and the earlier data files — the original design and
  earlier experiments; they do not all describe the current interface.

The data preparation scripts used during development lived outside this
repository and are not included. The checked-in data is enough to run the atlas;
this repository does not yet reproduce the entire data-generation process.
