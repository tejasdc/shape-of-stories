# Helper agent — Update shape-of-stories memory

**Agent `team-lead` reported** — 

> Update the memory file ~/.claude/projects/<this project>/memory/shape-of-stories-project.md (read it first; preserve its existing content and format, including frontmatter). Add a concise "Published" section (or update one if present) recording, as of 2026-08-01: - The page is LIVE at https://tejas.nyc/stories/ (canonical), published via the ship-to-site skill at level "sovereign" (no site chrome, one-line attribution). stories.tejas.nyc 301s there. - Republish procedure: from ./ run `node ~/workspace/chann.app/scripts/ship-to-site.mjs` with NO flags (.publish.json descriptor exists). Also rebuild artifact.html by inlining data/stories3.js in place of its script tag, and republish the claude.ai artifact (URL <private preview id>) which is a secondary preview only. - Registry entry lives in chann.app scripts/artifacts-registry.json; specimen is an element screenshot of #heroCv. - Mobile detail view uses a beat list below the chart at <700px (annotation labels draw on-canvas only at >=480px canvas width); nav has scrollspy highlighting. - Hero copy and the atlas spoiler line (…

> *[Read: ~/.claude/projects/<this project>/memory/shape-of-stories-project.md]* · *[Edit: ~/.claude/projects/<this project>/memory/shape-of-stories-project.md]* · *[Read: ~/.claude/projects/<this project>/memory/MEMORY.md]* · *[Edit: ~/.claude/projects/<this project>/memory/MEMORY.md]*

**Claude:**

Added a "Published (2026-08-01)" block to `shape-of-stories-project.md` with the canonical URL, ship-to-site republish command, the artifact-as-secondary-preview note, mobile beat-list behavior, and the copy-lock rule (hero + spoiler line verbatim). Refreshed the `MEMORY.md` one-liner to reflect 114 stories, live URL, and copy lock — the old hook mentioned an artifact URL and "encoding-cull pending" which are both stale.

