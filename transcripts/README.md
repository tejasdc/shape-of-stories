# How this project was built: the agent transcripts

The Shape of Stories was built in conversation with AI agents between July 28 and August 2, 2026.
These are those conversations, kept as a record of how the page came to be: the first idea after a
writing workshop, the detours that failed, the arguments about copy, and the decisions that stuck.

- `claude-code/main-session.md` is the main conversation between Tejas and Claude Code. Start here.
- `claude-code/subagents/` holds the helper agents Claude started along the way: researchers who
  gathered story data, agents who scored individual books, auditors who checked the scores, and the
  copy and labeling helpers. Each file opens with the task it was given.
- `codex/` holds three independent reviews Claude asked OpenAI's Codex to run on the build.

## What was changed from the raw logs

- Tool calls are shown as one-line notes, and their output is left out. The output was mostly file
  contents and command logs, which are already in this repository or regenerable.
- Instructions injected by the tools themselves (system reminders, skill texts, environment details)
  are left out.
- Local machine paths are shortened, and links to private previews are replaced with a placeholder.
- Explicit language is replaced with `[expletive removed]`, and a few phrases that were abusive or
  named a private person were removed.
- Screenshots Tejas attached are not included; the messages mark where they were.
