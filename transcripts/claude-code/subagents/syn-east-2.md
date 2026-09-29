# Helper agent — Synopsis-score East batch 2

**Agent `team-lead` reported** — 

> Follow ./data/synopsis/SYNOPSIS-RUBRIC.md exactly. Score these 9 canonical works of Chinese, Japanese, Korean, Vietnamese and Thai tradition, one JSON per book to ./data/synopsis/{slug}.json: journey-to-the-west | Journey to the West | Wu Cheng'en | 1592 | region china | protagonist Sun Wukong (the Monkey King) — score his arc from stone birth through rebellion, imprisonment, pilgrimage, buddhahood romance-of-three-kingdoms | Romance of the Three Kingdoms | Luo Guanzhong | 1400 | region china | protagonist Liu Bei and the Shu-Han cause water-margin | Water Margin (Outlaws of the Marsh) | Shi Nai'an | 1370 | region china | protagonist the 108 outlaws collectively (Song Jiang as their face) dream-of-the-red-chamber | Dream of the Red Chamber | Cao Xueqin | 1760 | region china | protagonist Jia Baoyu tale-of-genji | The Tale of Genji | Murasaki Shikibu | 1010 | region japan | protagonist Genji (score through his death; if the synopsis covers the Uji chapters, note the succession but keep Genji's line) tale-of-the-heike | The Tale of the Heike | anonymous | 1330 | region japan | protagonist the Taira clan …

> *[Read: ./data/synopsis/SYNOPSIS-RUBRIC.md]* · *[Bash: ls ./data/synopsis/]* · *[ToolSearch: select:WebFetch]* · *[WebFetch: https://en.wikipedia.org/wiki/Journey_to_the_West]* · *[WebFetch: https://en.wikipedia.org/wiki/Romance_of_the_Three_Kingdoms]* · *[WebFetch: https://en.wikipedia.org/wiki/Water_Margin]* · *[WebFetch: https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Tale_of_Genji]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Tale_of_the_Heike]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Tale_of_the_Bamboo_Cutter]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Tale_of_Chunhyang]* · *[WebFetch: https://en.wikipedia.org/wiki/The_Tale_of_Kieu]*

**Claude:**

All nine synopses fetched. Writing the JSON scorings now.

> *[Write: ./data/synopsis/journey-to-the-west.json]* · *[Write: ./data/synopsis/romance-of-three-kingdoms.json]* · *[Write: ./data/synopsis/water-margin.json]* · *[Write: ./data/synopsis/dream-of-the-red-chamber.json]* · *[Write: ./data/synopsis/tale-of-genji.json]* · *[Write: ./data/synopsis/tale-of-the-heike.json]* · *[Write: ./data/synopsis/tale-of-the-bamboo-cutter.json]* · *[Write: ./data/synopsis/tale-of-chunhyang.json]* · *[Write: ./data/synopsis/tale-of-kieu.json]* · *[Bash: Validate all 9 JSONs parse and event lengths]*

**Claude:**

All nine files parse; every event fits under the 90-character cap; every beat count is inside the 12–20 window.

### 3-line summaries

**Journey to the West** — Rags-to-hubris-to-punishment-to-redemption: a stone-monkey ascent to Great Sage, catastrophic 500-year imprisonment under the mountain, then a long steady quest that ends in buddhahood. Source: en.wikipedia.org/wiki/Journey_to_the_West.

**Romance of the Three Kingdoms** — Long slow climb from oath-bound wanderer to Emperor of Shu Han, then a hard, unrecoverable collapse (Guan Yu, Zhang Fei, Yiling, Liu Bei's death) that Zhuge Liang's futile Northern Expeditions cannot reverse; ends in Wei conquest. Source: en.wikipedia.org/wiki/Romance_of_the_Three_Kingdoms.

**Water Margin** — Injustice-driven gathering rises to a triumphant 108-strong band and imperial amnesty, followed by a bleeding collapse in the Fang La and Liao campaigns; ends with Song Jiang poisoned. Source: en.wikipedia.org/wiki/Water_Margin.

**Dream of the Red Chamber** — Golden aristocratic peak (Imperial Consort, Daguanyuan garden) hollowed by Daiyu's death, the tricked marriage, and confiscation of family assets; ends with Baoyu renouncing the world. Source: en.wikipedia.org/wiki/Dream_of_the_Red_Chamber.

**Tale of Genji** — Two arcs stacked: early demotion and exile followed by full political restoration (Reizei raises him to the highest rank), then a slow late decline through Murasaki's death and Genji's own vanishing. Source: en.wikipedia.org/wiki/The_Tale_of_Genji.

**Tale of the Heike** — Textbook rise-and-fall: Kiyomori builds absolute Taira dominance, then the whole clan slides through omens, defeats, and the drowning at Dan-no-ura, closing with Kenreimon-in's quiet Buddhist death. Source: en.wikipedia.org/wiki/The_Tale_of_the_Heike.

**Tale of the Bamboo Cutter** — A gift that has to be given back: joyful discovery and growth, five thwarted suitors as playful high plateau, then a gentle downward slope as the Moon reclaims her; the Emperor's Mount Fuji fire is a final elegiac coda. Source: en.wikipedia.org/wiki/The_Tale_of_the_Bamboo_Cutter.

**Tale of Chunhyang** — Cinderella-with-torture: quick love-marriage peak, long deep imprisonment trough under the corrupt magistrate, then a sudden reversal when the disguised inspector reveals himself; ends at maximum triumph. Source: en.wikipedia.org/wiki/The_Tale_of_Chunhyang.

**Tale of Kieu** — Sawtooth suffering: brief peaks (Kim Trong, Thuc, warlord Tu Hai's five-year reign) each cut down by betrayal and brothel; rescued from suicide in the Qiantang, ends in muted, chaste reunion rather than restored joy. Source: en.wikipedia.org/wiki/The_Tale_of_Kieu.

Files at `./data/synopsis/{journey-to-the-west, romance-of-three-kingdoms, water-margin, dream-of-the-red-chamber, tale-of-genji, tale-of-the-heike, tale-of-the-bamboo-cutter, tale-of-chunhyang, tale-of-kieu}.json`.

