# Helper agent — Synopsis-score west batch 2

**Agent `team-lead` reported** — 

> Follow ./data/synopsis/SYNOPSIS-RUBRIC.md exactly. Score these 15 works (region "west"), one JSON per book to ./data/synopsis/{slug}.json: a-tale-of-two-cities | A Tale of Two Cities | Charles Dickens | 1859 great-expectations | Great Expectations | Charles Dickens | 1861 les-miserables | Les Misérables | Victor Hugo | 1862 alice-in-wonderland | Alice’s Adventures in Wonderland | Lewis Carroll | 1865 crime-and-punishment | Crime and Punishment | Fyodor Dostoevsky | 1866 little-women | Little Women | Louisa May Alcott | 1868 middlemarch | Middlemarch | George Eliot | 1872 tom-sawyer | The Adventures of Tom Sawyer | Mark Twain | 1876 anna-karenina | Anna Karenina | Leo Tolstoy | 1877 treasure-island | Treasure Island | Robert Louis Stevenson | 1883 huckleberry-finn | Adventures of Huckleberry Finn | Mark Twain | 1884 jekyll-and-hyde | Dr. Jekyll and Mr. Hyde | Robert Louis Stevenson | 1886 tess-of-the-durbervilles | Tess of the d’Urbervilles | Thomas Hardy | 1891 the-time-machine | The Time Machine | H. G. Wells | 1895 dracula | Dracula | Bram Stoker | 1897

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/A_Tale_of_Two_Cities]* · *[WebFetch: https://en.wikipedia.org/wiki/Great_Expectations]* · *[WebFetch: https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables]* · *[WebFetch: https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland]* · *[WebFetch: https://en.wikipedia.org/wiki/Crime_and_Punishment]* · *[WebFetch: https://en.wikipedia.org/wiki/Little_Women]* · *[WebFetch: https://en.wikipedia.org/wiki/Middlemarch]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Adventures_of_Tom_Sawyer]* · *[WebFetch: https://en.wikipedia.org/wiki/Anna_Karenina]* · *[WebFetch: https://en.wikipedia.org/wiki/Treasure_Island]* · *[WebFetch: https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn]* · *[WebFetch: https://en.wikipedia.org/wiki/Strange_Case_of_Dr_Jekyll_and_Mr_Hyde]* · *[WebFetch: https://en.wikipedia.org/wiki/Tess_of_the_d%27Urbervilles]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Time_Machine]* · *[WebFetch: https://en.wikipedia.org/wiki/Dracula]*

**Claude:**

Now let me write all 15 JSON files.

> *[Write: ./data/synopsis/a-tale-of-two-cities.json]* · *[Write: ./data/synopsis/great-expectations.json]* · *[Write: ./data/synopsis/les-miserables.json]* · *[Write: ./data/synopsis/alice-in-wonderland.json]* · *[Write: ./data/synopsis/crime-and-punishment.json]* · *[Write: ./data/synopsis/little-women.json]* · *[Write: ./data/synopsis/middlemarch.json]* · *[Write: ./data/synopsis/tom-sawyer.json]* · *[Write: ./data/synopsis/anna-karenina.json]* · *[Write: ./data/synopsis/treasure-island.json]* · *[Write: ./data/synopsis/huckleberry-finn.json]* · *[Write: ./data/synopsis/jekyll-and-hyde.json]* · *[Write: ./data/synopsis/tess-of-the-durbervilles.json]* · *[Write: ./data/synopsis/the-time-machine.json]* · *[Write: ./data/synopsis/dracula.json]* · *[Bash: Validate each JSON file parses and count beats]*

**Claude:**

All 15 files parse and fall within the 12–20 beat range. Summary (3-line per book):

**A Tale of Two Cities** — Charles Dickens (1859). Shape: quiet reunion → aristocratic marriage → catastrophic condemnation → sacrificial rescue that ends peacefully for the family. Source: Wikipedia plot.

**Great Expectations** — Charles Dickens (1861). Shape: uneasy childhood → sudden gentlemanly ascent → collapse when the benefactor's identity lands → chastened, quiet coda. Source: Wikipedia plot.

**Les Misérables** — Victor Hugo (1862). Shape: prison-low, moral rebirth, mayoral peak, decades of pursuit, barricade descent, redemptive death. Source: Wikipedia plot.

**Alice's Adventures in Wonderland** — Lewis Carroll (1865). Shape: bored fall → wobbling size-changes → episodic absurdity → confident defiance and waking. Source: Wikipedia plot.

**Crime and Punishment** — Fyodor Dostoevsky (1866). Shape: catastrophe at the axe, sustained torment, brief false safety, confession and Siberian dawn. Source: Wikipedia plot.

**Little Women** — Louisa May Alcott (1868). Shape: warm hardship → recovery → maturation with one deep loss → coupled, prosperous close. Source: Wikipedia plot.

**Middlemarch** — George Eliot (1872). Shape: dual arcs of hope souring — Dorothea/Casaubon and Lydgate/Rosamond — with Dorothea's late release and modest, compromised happiness. Source: Wikipedia plot.

**The Adventures of Tom Sawyer** — Mark Twain (1876). Shape: mischief-highs punctuated by graveyard dread and cave nadir → triumphant treasure ending. Source: Wikipedia plot.

**Anna Karenina** — Leo Tolstoy (1877). Shape: exhilarating affair → social crash → Italian lull → jealous spiral to the train, counterpointed by Levin's rising faith. Source: Wikipedia plot.

**Treasure Island** — Robert Louis Stevenson (1883). Shape: menacing coastal opening → shipboard tension → island chaos → triumphant return with treasure. Source: Wikipedia plot.

**Adventures of Huckleberry Finn** — Mark Twain (1884). Shape: escape and river camaraderie → cascading shore disasters (feud, con men, Jim sold) → uneasy freedom and lighting out west. Source: Wikipedia plot.

**Strange Case of Dr Jekyll and Mr Hyde** — Robert Louis Stevenson (1886). Shape: escalating unease → brief rejuvenation false-peak → irreversible slide into Hyde and death. Source: Wikipedia plot.

**Tess of the d'Urbervilles** — Thomas Hardy (1891). Shape: early rape and stillbirth → dairy-idyll false rise → wedding-night crash → hunted decline → gallows. Source: Wikipedia plot.

**The Time Machine** — H. G. Wells (1895). Shape: wondrous arrival → Morlock horror and Weena's death → hard-won escape → dying-Earth vision → uncertain vanishing. Source: Wikipedia plot.

**Dracula** — Bram Stoker (1897). Shape: gothic captivity → Lucy's tragic fall → Mina's cursed midpoint → hunt across Europe → victorious destruction. Source: Wikipedia plot.

All 15 JSONs written to `./data/synopsis/`.

