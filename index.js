// dsh skill plugin — registers marketing-mindset as a model-loadable skill.
// dsh skills are "name + description (routing metadata) + markdown body", same
// shape as Claude/Hermes SKILL.md, so the body is read straight from SKILL.md.
import { readFileSync } from 'node:fs'

const NAME = 'marketing-mindset'
const DESCRIPTION =
  "Use when the user needs a professional marketer's operating mindset for any marketing, growth, or client-acquisition task — finding first customers, writing an ad or landing page, designing ad creatives and visuals, evaluating an idea, deciding whether to do X to get Y, positioning or launching a B2B or SaaS product, running cold outreach, setting up ads, or writing copy — not a tactical template."

export const name = NAME

export function apply(ctx) {
  // Strip YAML frontmatter from SKILL.md and register the body as the skill content.
  const raw = readFileSync(new URL('./SKILL.md', import.meta.url), 'utf8')
  const content = raw.replace(/^---[^\n]*\n[\s\S]*?\n---\s*\n?/, '').trim()
  ctx.skills.register({ name: NAME, description: DESCRIPTION, source: 'runtime', content })
}
