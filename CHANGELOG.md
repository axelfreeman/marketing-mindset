# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.4.0] — 2026-09-22

### Added
- **The Playbook: the second step, never the first** — new section (`SKILL.md`): what a business sales-and-marketing playbook actually is, and the only moment it is worth writing. A playbook is a written set of client-acquisition moves that already work — simple, primitive, repeatable ("bought an ad from a blogger in segment A, it produced clients"; "segment B gave the numbers in three months"; "this targeting converts at break-even or better"). Compiling one brings you no closer to sales: it is a **second step**, taken when a hypothesis is already tested and working and the job changes from *finding* to *draining* — drinking that hypothesis to the bottom, taking the market capacity it holds. The order is fixed: find a working hypothesis by hand → press it to its ceiling → only then write it down.
- **Delegation changes the mode** (same section): a written playbook can be handed to a marketing hire, a department, any person who follows a procedure — or to an agent, if the work is genuinely repeatable. Delegation ends free search and switches to regular management (goals, volume, cadence, reporting), because draining a hypothesis to the bottom is an operating task, not an exploration one. Critical mass ≈ **6 working hypotheses** — then you can hire marketing.
- **The playbook is filled from your own experiments only** — personal experiments on your own base; never borrowed case studies or a competitor's playbook.
- **Failed hypotheses go to the archive, not into reflection** — one line each (what was tried, that the numbers were zero). Marketing is not a mathematical craft yet, so a zero does not tell you which variable was wrong; and handing a new person your failures is toxic, because a marketer starts from zero, not from the previous person's pause point. Kept only as historical marketing data for the agent.
- Two new `SKILL.md` anti-patterns: writing a playbook before a working hypothesis exists; analysing or handing down failed hypotheses instead of archiving them.
- New `SKILL.md` verification item: a playbook exists only after a working hypothesis; failures are archived in one line.
- Condensed "The Playbook" in `SKILL.lite.md`; rule #9 in `SKILL.deepseek-flash.md`.

### Changed
- Versions: `SKILL.md` 0.3.0 → 0.4.0; `SKILL.lite.md` / `SKILL.deepseek-flash.md` 1.2.0 → 1.3.0; `package.json` 0.3.0 → 0.4.0.

### Known gap
- `.cursorrules` has not been updated with this section yet, so the Cursor adapter is one release behind `SKILL.md`.

## [0.3.0] — 2026-09-07

### Added
- **The Despair Dividend** — new section (`SKILL.md`): the hypotheses that win are the strange ones. The obvious moves fail because everyone already tried them; once the mind exhausts the ordinary guesses it starts producing free-association, "hallucinated" hypotheses — and those carry the one thing the reasonable ones lack: a real chance to work. Reaching the state people call despair is not a dead end, it's a method — and it's normal (and useful) to tell the user plainly that every variant was tried and nothing worked.
- Condensed "The Despair Dividend" in `SKILL.lite.md`.
- Rule #8 "Despair is a source" in `SKILL.deepseek-flash.md`.

### Fixed
- `.cursorrules` was missing the "Graphics: Draw for the Eye" section from v0.2.0 — restored so the Cursor adapter matches `SKILL.md`.

### Changed
- Versions: `SKILL.md` 0.2.0 → 0.3.0; `SKILL.lite.md` / `SKILL.deepseek-flash.md` 1.1.0 → 1.2.0.

## [0.2.0] — 2026-09-06

### Added
- **Graphics: Draw for the Eye** — new section (`SKILL.md`) on designing ad creatives from how the human eye works: the eye sees sharply only in a small focal spot (the fovea), so every creative needs a **background + scene**, a **hero** (anywhere in the frame, but present), and **movement** (the hardest in a still frame, and the most important — the eye locks onto motion first).
- Condensed "Graphics" section in `SKILL.lite.md`.
- Rule #7 "Draw for the eye" in `SKILL.deepseek-flash.md`.

### Changed
- Frontmatter description extended to cover ad creatives and visual design.
- Versions: `SKILL.md` 0.1.0 → 0.2.0; `SKILL.lite.md` / `SKILL.deepseek-flash.md` 1.0.0 → 1.1.0.

## [0.1.0] — 2026-09-01

### Added
- Initial release — the full marketing OS for AI agents: core principles, competitors as the source of truth, the McDonald's Burger, customer acquisition stages (client #1 by hand → 2–10 by copying competitors), three keys to the human, attention split in two, and axioms.
- Principle 6 "Marketing never works for free" (exchange) added 2026-09-04.
