# Helper agent — Synopsis-score west batch 4

**Agent `team-lead` reported** — 

> Follow ./data/synopsis/SYNOPSIS-RUBRIC.md exactly. Score these 15 works (region "west"), one JSON per book to ./data/synopsis/{slug}.json: animal-farm | Animal Farm | George Orwell | 1945 mans-search-for-meaning | Man’s Search for Meaning | Viktor E. Frankl | 1946 (memoir: Frankl himself) 1984 | 1984 | George Orwell | 1949 the-catcher-in-the-rye | The Catcher in the Rye | J. D. Salinger | 1951 charlottes-web | Charlotte’s Web | E. B. White | 1952 the-old-man-and-the-sea | The Old Man and the Sea | Ernest Hemingway | 1952 waiting-for-godot | Waiting for Godot | Samuel Beckett | 1953 lord-of-the-flies | Lord of the Flies | William Golding | 1954 the-lord-of-the-rings | The Lord of the Rings | J.R.R. Tolkien | 1954 (one arc, Frodo) things-fall-apart | Things Fall Apart | Chinua Achebe | 1958 to-kill-a-mockingbird | To Kill a Mockingbird | Harper Lee | 1960 (protagonist Scout) one-hundred-years-of-solitude | One Hundred Years of Solitude | Gabriel García Márquez | 1967 (the Buendía family collectively) slaughterhouse-five | Slaughterhouse-Five | Kurt Vonnegut | 1969 (Billy Pilgrim, in TELLING order) shawsh…

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[Bash: ls ./data/synopsis/ | head -50]* · *[Bash: ls ./data/synopsis/]* · *[Bash: find ./ -name "*.json" | head -20]* · *[Read: ./data/pilot/dorian-gray.json]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Animal_Farm]* · *[WebFetch: https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning]* · *[WebFetch: https://en.wikipedia.org/wiki/Nineteen_Eighty-Four]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye]* · *[WebFetch: https://en.wikipedia.org/wiki/Charlotte%27s_Web]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea]* · *[WebFetch: https://en.wikipedia.org/wiki/Waiting_for_Godot]* · *[WebFetch: https://en.wikipedia.org/wiki/Lord_of_the_Flies]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Lord_of_the_Rings]* · *[WebFetch: https://en.wikipedia.org/wiki/Things_Fall_Apart]* · *[WebFetch: https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird]* · *[WebFetch: https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude]* · *[WebFetch: https://en.wikipedia.org/wiki/Slaughterhouse-Five]* · *[WebFetch: https://en.wikipedia.org/wiki/Rita_Hayworth_and_Shawshank_Redemption]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Color_Purple]* · *[WebFetch: https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning]* · *[WebFetch: https://www.britannica.com/topic/Mans-Search-for-Meaning]* · *[WebFetch: https://www.sparknotes.com/lit/mans-search-for-meaning/summary/]* · *[WebFetch: https://en.wikipedia.org/wiki/Viktor_Frankl]*

**Claude:**

Now writing all 14 JSON files. I'll skip Man's Search for Meaning per the rubric (Wikipedia's synopsis is essayistic, not narrative — cannot support 12 ordered plot beats from published sources).

> *[Write: ./data/synopsis/animal-farm.json]* · *[Write: ./data/synopsis/1984.json]* · *[Write: ./data/synopsis/the-catcher-in-the-rye.json]* · *[Write: ./data/synopsis/charlottes-web.json]* · *[Write: ./data/synopsis/the-old-man-and-the-sea.json]* · *[Write: ./data/synopsis/waiting-for-godot.json]* · *[Write: ./data/synopsis/lord-of-the-flies.json]* · *[Write: ./data/synopsis/the-lord-of-the-rings.json]* · *[Write: ./data/synopsis/things-fall-apart.json]* · *[Write: ./data/synopsis/to-kill-a-mockingbird.json]* · *[Write: ./data/synopsis/one-hundred-years-of-solitude.json]* · *[Write: ./data/synopsis/slaughterhouse-five.json]* · *[Write: ./data/synopsis/shawshank-redemption.json]* · *[Write: ./data/synopsis/the-color-purple.json]* · *[Bash: cd ./data/synopsis && for f in *.json; do python3 -c "import json; json.load(open('$f'))" && echo "OK $f" || echo "FAIL…]*

**Claude:**

14 of 15 books scored and validated. Skipped Man's Search for Meaning — Wikipedia's article is thematic ("three psychological phases"), not a narrative synopsis with 12+ ordered plot beats. Britannica returned 403, SparkNotes 403. Per rubric, better to skip than fall back to memory.

**Files written to `./data/synopsis/`**

**animal-farm** — Utopian rise then long slide into a new tyranny; ends indistinguishable from the start. — en.wikipedia.org/wiki/Animal_Farm

**1984** — Grey life brightens through Julia in the middle, then a total, deliberate collapse to zero. — en.wikipedia.org/wiki/Nineteen_Eighty-Four

**the-catcher-in-the-rye** — Downward drift bouncing between bad encounters and small joys with Phoebe, ending in institutional care. — en.wikipedia.org/wiki/The_Catcher_in_the_Rye

**charlottes-web** — Rescue-then-doom-then-rescue-again arc rising to a permanent guarantee, punctuated by Charlotte's death near the peak. — en.wikipedia.org/wiki/Charlotte%27s_Web

**the-old-man-and-the-sea** — Long slow climb from bad luck to a hard-won triumph, obliterated by sharks; sober plateau at home. — en.wikipedia.org/wiki/The_Old_Man_and_the_Sea

**waiting-for-godot** — Flat low line; almost nothing changes across two acts. — en.wikipedia.org/wiki/Waiting_for_Godot

**lord-of-the-flies** — Ralph's peak comes early with the conch; steady erosion to near-death, then a deus-ex rescue. — en.wikipedia.org/wiki/Lord_of_the_Flies

**the-lord-of-the-rings** — Slow descent through the quest with a plunge at Shelob, then destruction-and-rescue, closing with a bittersweet exit. — en.wikipedia.org/wiki/The_Lord_of_the_Rings

**things-fall-apart** — Early prosperity, midpoint fall with the killings, brief exile plateau, then a steep collapse into suicide. — en.wikipedia.org/wiki/Things_Fall_Apart

**to-kill-a-mockingbird** — Warm childhood with a mid-book plunge at the verdict and a dark climax that ends in reconciliation. — en.wikipedia.org/wiki/To_Kill_a_Mockingbird

**one-hundred-years-of-solitude** — Founding highs, wars and marvels in the middle, then catastrophic decline through massacre and apocalypse. — en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude

**slaughterhouse-five** — Zig-zag around a low baseline (war, Dresden, plane crash) with mid-life peaks (Valencia, Tralfamadore); dies as prophesied. — en.wikipedia.org/wiki/Slaughterhouse-Five

**shawshank-redemption** — Long slow rise through hustles and library work, hard dip in solitary, then a triumphant escape and reunion. — en.wikipedia.org/wiki/Rita_Hayworth_and_Shawshank_Redemption

**the-color-purple** — Deep-low opening, gradual rise via Shug and inheritance, dip when Shug leaves, ends at the highest point with Nettie's return. — en.wikipedia.org/wiki/The_Color_Purple

**SKIPPED — mans-search-for-meaning**: Wikipedia synopsis is thematic (three psychological phases), not a narrative summary with 12+ concrete ordered events. Britannica/SparkNotes returned 403. Per rubric, skipping rather than filling from memory. The Frankl biography article does supply concrete camp dates (Theresienstadt 1942, Auschwitz 1944, father dies Feb 1943, wife dies at Bergen-Belsen), but those are biographical, not the memoir's telling order.

