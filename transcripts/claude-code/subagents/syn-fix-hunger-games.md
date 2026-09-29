# Helper agent — Re-score Hunger Games book 1

**Agent `team-lead` reported** — 

> Follow ./data/synopsis/SYNOPSIS-RUBRIC.md exactly. This REPLACES an invalid scoring that accidentally covered the whole trilogy. Score ONLY the first novel: the-hunger-games | The Hunger Games | Suzanne Collins | 2008 | region west | protagonist Katniss Everdeen Use the novel-specific article: https://en.wikipedia.org/wiki/The_Hunger_Games_(novel) — its Plot section covers book one only (ends with Katniss and Peeta as victors returning to District 12, and the Capitol's displeasure). VALIDATION GATE: your beats must contain NOTHING from Catching Fire or Mockingjay (no Quarter Quell, no District 13, no Prim's death). Overwrite ./data/synopsis/the-hunger-games.json

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Hunger_Games_(novel)]* · *[Write: ./data/synopsis/the-hunger-games.json]* · *[Read: ./data/synopsis/the-hunger-games.json]* · *[Write: ./data/synopsis/the-hunger-games.json]* · *[ToolSearch: select:SendMessage]* · *[SendMessage]*

**Claude:**

Rescored The Hunger Games (book 1 only) at `./data/synopsis/the-hunger-games.json` with 22 beats from the novel-specific Wikipedia article. Arc ends with Katniss and Peeta returning to District 12 as joint victors under Haymitch's warning — no Catching Fire or Mockingjay content.

