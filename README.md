# Marketing Mindset

> **The marketing OS for AI agents — think like a marketer first, get tactics as the output.** Not another bag of CRO/SEO/copywriting tricks. This is how a 15-year B2B marketer *decides*, so an agent gives a real opinion instead of a template.

[![Use in Claude Code](https://img.shields.io/badge/Use%20in-Claude%20Code-orange)](SKILL.md)
[![Add to Cursor](https://img.shields.io/badge/Add%20to-Cursor-blue)](.cursorrules)
[![Codex](https://img.shields.io/badge/Codex-AGENTS.md-6e40c9)](AGENTS.md)
[![ChatGPT](https://img.shields.io/badge/ChatGPT-SKILL.lite.md-10a37f)](SKILL.lite.md)
[![Grok](https://img.shields.io/badge/Grok-SKILL.md-111111)](SKILL.md)

📄 **Landing page & docs:** https://axelfreeman.github.io/marketing-mindset/?utm_source=github&utm_medium=readme&utm_campaign=mindset

![GitHub Repo stars](https://img.shields.io/github/stars/axelfreeman/marketing-mindset?style=social)
![Version](https://img.shields.io/github/v/release/axelfreeman/marketing-mindset)
![License](https://img.shields.io/github/license/axelfreeman/marketing-mindset)
[![skills.sh installs](https://img.shields.io/badge/skills.sh-50K%20installs-blue)](https://skills.sh/axelfreeman/marketing-mindset?utm_source=github&utm_medium=badge&utm_campaign=mindset)
![views](https://komarev.com/ghpvc/?username=axelfreeman&repo=marketing-mindset&label=views&style=flat-square&color=2563eb)

**Install in one command:** `npx skills add axelfreeman/marketing-mindset`


---

---

## Test limits — how much volume before a test can be judged

Below the limit you are measuring randomness, not the market. Declare the volume before the test starts.

| Channel | Minimum volume before a verdict | What it tells you |
|---|---|---|
| Cold email — deliverability/wording smoke test | **50–100 sends** | Whether the email lands and reads plausibly. Not whether the offer works. |
| Cold email — reply-rate test | **~1,500–2,000 sends per variant** | Whether one variant genuinely beats another instead of a quiet week. |
| Cold email — subject line / open-rate test | **100–500 sends per version** | How the subject performs (opens are frequent). |
| Landing page smoke test | **100–200 targeted visitors** | Whether the promise produces interest (≈30 leads at 15% capture from 200 cold visitors). |
| Strict A/B test | **~10,000 visitors per variation, ≥300 conversions** | Statistical significance — usually out of reach for a startup's first tests. |
| Paid ad | **Spend gate of 1–3× target CPA, 48–72 hours** | Keep / re-hook / kill. Never judge during the learning phase. |
| Cold calls | **Volume until a repeatable pattern appears in one segment** | Whether the script survives real conversations. |

**The rule that follows: what comes easy, scale it.** The channel, message or offer that performed noticeably easier than the rest goes first — effort first, money later. You can only see that gap above the limit: below it, "easy" and "ordinary" look identical.

> Declare the volume → run one variable → stop at the limit → scale what came easy. Anything else is interpretation.

Full write-up with sources: https://axelfreeman.github.io/marketing-mindset/?utm_source=github&utm_medium=readme&utm_campaign=mindset

---

### The gap this fills

Every other "marketing skill" for AI agents hands over tactics. Nobody packages **how a marketer thinks**. When an agent needs to decide *should I do X to get Y*, *where do I get my first customer*, or *is this idea worth it*, tactics don't answer. This skill does.

### See it work

📄 **[View the demo transcript](examples/demo-transcript.md)** — one request in ("SaaS for finance, 0 customers"), a sharp 3-month plan out.

### The problem

Founders and solo operators can generate code, not content. "How do I do marketing" is genuinely unclear to them. They need an agent that gives honest, non-generic marketing judgment — not a template.

### The fix

Six principles and a decision framework, distilled from 15 years of hands-on B2B internet marketing:

1. **Don't learn marketing from stale sources** — skip the first Google results and cached LLM doctrine
2. **Three-month horizon** — no 2-year cycles; be useful within 3 months
3. **The user has the right to make the first move** — don't block bold or hacky first steps
4. **Every hypothesis must be testable fast** — any teammate can run the test
5. **Marketing runs ahead of the product** — ship the landing page before the build
6. **Marketing never works for free** — marketing is exchange; every action must trade for something

Plus: competitors as the source of truth, three keys to the human, and the client stages (first client by hand and free → 2–10 by copying competitors).

### The metaphors (share these)

- 🍔 **The McDonald's Burger** — photograph the product better than it is
- 🧬 **Think like a cancer cell** — when nothing else applies, multiply
- 🚫 **The stop-list** — why Product Hunt is lying to you
- 🌑 **The Despair Dividend** — when every reasonable move fails, the strange hypotheses are the good ones

### Who it's for

- **AI agents** (Claude Code, Cursor, ChatGPT — any agent that reads SKILL.md)
- **Founders & solo operators** selling a service that can't be touched but is needed right now
- **Indie hackers & solopreneurs** shipping a SaaS alone
- **Freelancers** (dev, design, writing) hunting for client #1
- **Developers** who can ship code but freeze on "how do I get customers"
- **Agency owners & fractional CMOs** — encode your judgment so juniors stop producing generic work
- **Course creators & info-product sellers** — the "can't be touched, needed now" market
- **Product managers** validating an idea before writing code
- **Prompt engineers** studying how to give an AI a personality with hard boundaries
- **VC, investors & venture scouts** — stress-test marketing claims in due diligence
- **Open-source maintainers** — grow adoption of a project
- **Startup accelerators & incubators** — a repeatable framework for portfolio companies
- **SDRs & sales engineers** — own their own outreach and positioning

### Tested on

Verified to load correctly on these models before release — each adapter matches the target's native syntax:

| Model | File to use |
|---|---|
| **Claude Code** | `SKILL.md` → `.claude/skills/marketing-mindset/` |
| **Cursor** | `.cursorrules` |
| **Codex** | `AGENTS.md` + `SKILL.md` |
| **ChatGPT (Custom GPT)** | paste `SKILL.lite.md` as instructions |
| **Grok / xAI** | `SKILL.md` (system prompt) |
| **Qwen (qwen3)** | `SKILL.lite.md` |
| **DeepSeek (V3 / Flash)** | `SKILL.lite.md` |
| **Llama (Meta)** | `SKILL.md` |
| **Mistral** | `SKILL.md` |
| **Gemini** | `SKILL.md` |
| **Hermes (Nous)** | `SKILL.md` |

### What you actually get

Working through this skill ends in concrete deliverables — a competitor analysis, three outbound angles, and sharper positioning (see the [demo](examples/demo-transcript.md)). The mindset is the input; the tactics are the output.

### Install

One skill, four harnesses — pick whichever you run:

```bash
# skills.sh / npx
npx skills add axelfreeman/marketing-mindset

# DeepSeek Harness (dsh)
dsh plugin --profile <name> add github:axelfreeman/marketing-mindset
```

Claude Code and Hermes read the same `SKILL.md` — copy it into your skills directory (`~/.claude/skills/marketing-mindset/` or your Hermes skills dir).

**Low-context or weaker models?** Use the compact [`SKILL.lite.md`](SKILL.lite.md) — the same mindset compressed to the essentials.

### The first-client gate

```bash
python scripts/first-client-gate.py
```

One honest question before you start: do you have your first client yet? If the answer isn't "me," the skill waits.

### The playbook — the second step, not the first

Most people ask for a marketing playbook at the worst possible moment: before anything works. Compiling one does not move you closer to sales.

It is the **second step** — what you write *after* a hypothesis is already tested and working, when the job changes from *finding* a channel to *draining* it: drinking that hypothesis to the bottom, taking the market capacity it holds. The order is fixed: find a working hypothesis by hand → press it to its ceiling → only then write it down.

A playbook is a written set of client-acquisition moves that already work — simple, primitive, repeatable:

> "Bought an ad from a blogger in segment A — it produced clients."
> "Segment B gave the numbers in three months."
> "This targeting converts a client at break-even or better."

One proven move, one line.

Once those moves are written down they stop being founder-only knowledge. They can be delegated — to a marketing hire, to a department, or to an agent if the work is genuinely repeatable — and that handoff ends free search and starts **regular management**: goals, volume, cadence, reporting. Critical mass is around **six working hypotheses**; that is the point at which you can hire marketing.

Two rules the skill will hold you to:

- **The playbook is filled from your own experiments only** — run by you on your own base. Borrowed case studies and a competitor's playbook are a wish list, not a playbook.
- **Failed hypotheses go to the archive, one line each.** No reflection, no museum of failures. Marketing is not a mathematical craft yet, so a zero does not tell you which variable was wrong — and handing a new person your failures is toxic, because a marketer starts from zero, not from the previous person's pause point.

Ask for a playbook before a single working hypothesis exists, and the skill will tell you plainly that the job is still the search.

### Spread the word

If it works, star it and share it. The network effect compounds.

### More from the framework

- **[competitor-xray](https://github.com/Axel-freeman-marketing-framework/competitor-xray)** — competitor research that ends in a copy-list, not a report
- **[inbox-audit](https://github.com/Axel-freeman-marketing-framework/inbox-audit)** — will your email reach the inbox? Free DNS audit + paste-ready fixes
- **[agent-stack-starter](https://github.com/Axel-freeman-marketing-framework/agent-stack-starter)** — self-hosted AI marketing stack, one job live on day one

### Stay updated

Axel Freeman ships releases and improvements to this repo regularly. If this clicks, **watch the repo** (and star it) — that's how you get each new release and update automatically.

The roadmap is long — active development is planned for at least the next 6 months, so there's a steady stream of updates coming.

Getting first customers is hard — and most marketing advice is generic. Get weekly non-generic teardowns:

- 📣 **Telegram:** [@axelfreeman](https://t.me/axelfreeman)
- 🐙 **GitHub:** [@axelfreeman](https://github.com/axelfreeman)

### Keywords

marketing mindset, marketing operator mindset, how a marketer thinks, marketing skills for AI agents, growth marketing, first customers, B2B lead generation, positioning, launch, copywriting, cold outreach, SaaS marketing

### A note on "growth hacks" and "embellishing"

"Growth hacks", "embellish", and "frame case studies" mean marketing positioning and copywriting — presenting the product's value in its best, boldest light — not fraud, fabricated testimonials, or deceiving users. Bold marketing, always legal.

### Author

Written by Axel Freeman, a B2B marketer with 15 years of validated experience across B2B SaaS. Not a content farm — the operator's own method.

### License

MIT

<!-- artifacts-block -->
## Where else this lives

Everything below is public and checkable — pages, packages, articles:

| What | Link |
|---|---|
| Landing page & docs | https://axelfreeman.github.io/marketing-mindset/?utm_source=github&utm_medium=readme&utm_campaign=mindset |
| Install (npm) | https://www.npmjs.com/package/marketing-mindset — `npx marketing-mindset` |
| MCP server (npm) | https://www.npmjs.com/package/marketing-mindset-mcp |
| Q&A pages | https://axelfreeman.github.io/marketing-mindset/qa/?utm_source=github&utm_medium=readme&utm_campaign=mindset |
| Free tool: email test planner | https://axelfreeman.github.io/marketing-mindset/tools/email-test-planner.html?utm_source=github&utm_medium=readme&utm_campaign=mindset |
| Release notes | https://github.com/axelfreeman/marketing-mindset/releases |
| Work with the author (turnkey) | https://axelfreeman.com/marketing-engineer.html?utm_source=github&utm_medium=readme&utm_campaign=mindset |
| Scope of work | https://axelfreeman.com/scope.html?utm_source=github&utm_medium=readme&utm_campaign=mindset |
| Pricing comparison | https://axelfreeman.com/pricing.html?utm_source=github&utm_medium=readme&utm_campaign=mindset |
| What shipped (artifacts) | https://axelfreeman.com/cases.html?utm_source=github&utm_medium=readme&utm_campaign=mindset |
| Proof page (all links) | https://axelfreeman.com/proof.html?utm_source=github&utm_medium=readme&utm_campaign=mindset |
| Article: what a marketing engineer does | https://dev.to/axelfreeman/what-a-marketing-engineer-actually-does-and-what-the-invoice-pays-for-1blj |

The skill is free and MIT. The paid work is the engineering around it: distribution, measurement, and the
uncomfortable part — deciding what has enough volume to be judged at all.
