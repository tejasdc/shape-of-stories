# Helper agent — Synopsis-score west batch 1

**Agent `team-lead` reported** — 

> Follow ./data/synopsis/SYNOPSIS-RUBRIC.md exactly. Score these 15 works (region "west" unless noted), writing one JSON per book to ./data/synopsis/{slug}.json: the-iliad | The Iliad | Homer | -750 oedipus-rex | Oedipus Rex | Sophocles | -429 romeo-and-juliet | Romeo and Juliet | William Shakespeare | 1597 macbeth | Macbeth | William Shakespeare | 1606 king-lear | King Lear | William Shakespeare | 1606 don-quixote | Don Quixote | Miguel de Cervantes | 1615 cinderella-perrault | Cinderella | Charles Perrault | 1697 sense-and-sensibility | Sense and Sensibility | Jane Austen | 1811 pride-and-prejudice | Pride and Prejudice | Jane Austen | 1813 frankenstein | Frankenstein | Mary Shelley | 1818 the-count-of-monte-cristo | The Count of Monte Cristo | Alexandre Dumas | 1844 jane-eyre | Jane Eyre | Charlotte Brontë | 1847 wuthering-heights | Wuthering Heights | Emily Brontë | 1847 the-scarlet-letter | The Scarlet Letter | Nathaniel Hawthorne | 1850 moby-dick | Moby-Dick | Herman Melville | 1851

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[Bash: List existing synopsis files]* · *[Bash: List project directory]* · *[Bash: Check pilot dir for example JSONs]* · *[Read: ./data/pilot/odyssey.json]* · *[Bash: Find all JSON files]*

**Claude:**

I'll fetch the Wikipedia plot synopses for all 15 books, then write the scored JSONs. Let me batch-fetch them in parallel.

> *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Iliad]* · *[WebFetch: https://en.wikipedia.org/wiki/Oedipus_Rex]*

**Claude:**

I'll continue fetching remaining synopses in parallel batches.

> *[WebFetch: https://en.wikipedia.org/wiki/Romeo_and_Juliet]* · *[WebFetch: https://en.wikipedia.org/wiki/Macbeth]* · *[WebFetch: https://en.wikipedia.org/wiki/King_Lear]* · *[WebFetch: https://en.wikipedia.org/wiki/Don_Quixote]* · *[WebFetch: https://en.wikipedia.org/wiki/Cinderella]* · *[WebFetch: https://en.wikipedia.org/wiki/Sense_and_Sensibility]* · *[WebFetch: https://en.wikipedia.org/wiki/Pride_and_Prejudice]* · *[WebFetch: https://en.wikipedia.org/wiki/Frankenstein]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Count_of_Monte_Cristo]* · *[WebFetch: https://en.wikipedia.org/wiki/Jane_Eyre]* · *[WebFetch: https://en.wikipedia.org/wiki/Wuthering_Heights]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Scarlet_Letter]* · *[WebFetch: https://en.wikipedia.org/wiki/Moby-Dick]*

**Claude:**

I have all 15 synopses. Now writing the scored JSONs.

> *[Write: ./data/synopsis/the-iliad.json]* · *[Write: ./data/synopsis/oedipus-rex.json]* · *[Write: ./data/synopsis/romeo-and-juliet.json]* · *[Write: ./data/synopsis/macbeth.json]* · *[Write: ./data/synopsis/king-lear.json]* · *[Write: ./data/synopsis/don-quixote.json]* · *[Write: ./data/synopsis/cinderella-perrault.json]* · *[Write: ./data/synopsis/sense-and-sensibility.json]* · *[Write: ./data/synopsis/pride-and-prejudice.json]* · *[Write: ./data/synopsis/frankenstein.json]* · *[Write: ./data/synopsis/the-count-of-monte-cristo.json]* · *[Write: ./data/synopsis/jane-eyre.json]* · *[Write: ./data/synopsis/wuthering-heights.json]* · *[Write: ./data/synopsis/the-scarlet-letter.json]* · *[Write: ./data/synopsis/moby-dick.json]*

**Claude:**

All 15 JSONs written. Let me validate them all as strict JSON.

> *[Bash: Validate all 15 JSONs]* · *[Bash: Check all event labels ≤90 chars]* · *[Edit: ./data/synopsis/the-count-of-monte-cristo.json]*

**Claude:**

All 15 JSONs validated and event labels within 90-char limit. Reporting shape summaries to team-lead.

> *[ToolSearch: select:SendMessage]* · *[SendMessage]*

**Claude:**

Batch 1 complete. All 15 books scored from Wikipedia plot sections and validated (strict JSON, 15-19 beats each, event labels ≤90 chars). Files written to `./data/synopsis/{slug}.json`. Shape summaries relayed to team-lead.

