// The Shape of Stories — axes taxonomy and archetype grammar
// x-axis is always narrative time (Beginning -> End). These are the y-axes the survey found.

const AXES = {
  fortune:   { name: 'Fortune',    lo: 'Ill fortune', hi: 'Good fortune', desc: 'Vonnegut’s original axis: how well things are going for the protagonist.' },
  knowledge: { name: 'Knowledge',  lo: 'Ignorance',   hi: 'Revelation',   desc: 'What the protagonist (or reader) understands. The engine of every mystery.' },
  power:     { name: 'Power',      lo: 'Powerless',   hi: 'Powerful',     desc: 'Agency and control. The antihero’s axis — it loves to diverge from fortune.' },
  connection:{ name: 'Connection', lo: 'Isolation',   hi: 'Belonging',    desc: 'Distance from other people. The axis romance and loneliness stories run on.' },
  tension:   { name: 'Tension',    lo: 'Calm',        hi: 'Dread',        desc: 'The reader’s axis, not the character’s. Thrillers optimize this one.' },
  certainty: { name: 'Certainty',  lo: 'Ambiguity',   hi: 'Clarity',      desc: 'Whether anyone — character or reader — can tell what is true. Vonnegut’s Hamlet point.' },
};

// The grammar: pure shapes. Vonnegut's chalkboard originals + the two extra
// arcs the 2016 UVM data-mining study (Reagan et al.) confirmed.
const ARCHETYPES = [
  { id: 'rise',      name: 'Rags to Riches',   motto: 'rise',            pts: [[0,-.7],[.25,-.35],[.5,.05],[.75,.45],[1,.8]],
    desc: 'A steady climb. Rarer in the canon than optimism predicts — pure ascent is hard to make interesting for 300 pages.' },
  { id: 'tragedy',   name: 'From Bad to Worse', motto: 'fall',           pts: [[0,.35],[.25,.1],[.5,-.2],[.75,-.55],[1,-.85]],
    desc: 'Vonnegut’s “From Bad to Worse.” The floor keeps giving way. The reader stays for the dignity of the descent.' },
  { id: 'hole',      name: 'Man in a Hole',    motto: 'fall – rise',     pts: [[0,.35],[.2,.15],[.45,-.65],[.7,-.3],[1,.7]],
    desc: 'Somebody gets into trouble, gets out of it again, and ends up better off. Vonnegut: “people love that story.” The most common shape in the data.' },
  { id: 'icarus',    name: 'Icarus',           motto: 'rise – fall',     pts: [[0,-.3],[.3,.3],[.55,.75],[.75,.2],[1,-.8]],
    desc: 'The climb that earns the crash. The higher the middle, the harder the ending lands.' },
  { id: 'cinderella',name: 'Cinderella',       motto: 'rise – fall – rise', pts: [[0,-.7],[.25,.3],[.45,.6],[.6,-.6],[.8,-.2],[1,.9]],
    desc: 'Rise, midnight, rise again. Vonnegut’s punchline: its shape matches the New Testament’s — which may be why the West can’t stop retelling it.' },
  { id: 'oedipus',   name: 'Oedipus',          motto: 'fall – rise – fall', pts: [[0,.3],[.25,-.35],[.5,.25],[.7,.45],[1,-.9]],
    desc: 'The cruelest shape: a recovery that turns out to be the trapdoor. The false dawn before the real dark.' },
  { id: 'flatline',  name: 'Which Way Is Up?', motto: 'ambiguity',       pts: [[0,0],[.2,.06],[.4,-.08],[.6,.04],[.8,-.05],[1,0]],
    desc: 'Vonnegut’s Hamlet: the line can’t be drawn because nobody can tell whether the news is good or bad. Not shapelessness — honesty.' },
  { id: 'crossed',   name: 'Crossed Axes',     motto: 'divergence',      pts: [[0,-.5],[.5,.1],[1,.8]], pts2: [[0,.5],[.5,.1],[1,-.8]],
    desc: 'The survey’s finding: the canon’s signature move. Two axes pulled apart — knowledge rising while fortune falls, power rising while the soul drains. Folk tales run on one axis; literature runs on two.' },
];
