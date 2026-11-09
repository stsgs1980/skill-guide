import type { Bundle } from './types'

export const BUNDLES: Bundle[] = [
  {
    env: 'zai',
    title: 'Z.ai Code (Next.js sandbox)',
    installHint:
      'Clone SKILL.md files into docs/skills/, reference in AGENTS.md at project root. No native skill-loader — invoke explicitly.',
    obra: ['brainstorming', 'writing-plans', 'test-driven-development', 'systematic-debugging', 'requesting-code-review'],
    wondelai: [
      'clean-code',
      'refactoring-patterns',
      'software-design-philosophy',
      'clean-architecture',
      'high-perf-browser',
      'refactoring-ui',
      'ux-heuristics',
    ],
    rationale:
      'Sandbox creates a fresh Next.js project per task, so architecture/legacy skills are less relevant. Focus on procedures (obra) + principles for clean code and UI (wondelai). high-perf-browser is especially valuable for Next.js.',
  },
  {
    env: 'opencode',
    title: 'Opencode (native agentskills.io)',
    installHint: 'Native. /plugin install or npx skills add. AGENTS.md auto-read. Metaskills with docs/ state work as designed.',
    obra: [
      'brainstorming',
      'writing-plans',
      'executing-plans',
      'test-driven-development',
      'systematic-debugging',
      'requesting-code-review',
      'verification-before-completion',
    ],
    wondelai: [
      'clean-code',
      'pragmatic-programmer',
      'refactoring-patterns',
      'working-with-legacy-code',
      'clean-architecture',
      'domain-driven-design',
      'release-it',
      'high-perf-browser',
      'refactoring-ui',
      'ux-heuristics',
      'web-typography',
    ],
    rationale:
      'Most native environment for both. Install full obra methodology (procedures) + a wide wondelai selection (principles). Metaskills like create-app / improve-code-quality orchestrate them in guided journeys.',
  },
  {
    env: 'webstorm',
    title: 'WebStorm + Junie',
    installHint:
      'No native SKILL.md loader. Consolidate wondelai principle-skills into .junie/guidelines.md. Use obra procedures only via manual AI Assistant custom prompts.',
    obra: [],
    wondelai: [
      'clean-code',
      'pragmatic-programmer',
      'software-design-philosophy',
      'clean-architecture',
      'domain-driven-design',
      'refactoring-ui',
      'ux-heuristics',
      'web-typography',
    ],
    rationale:
      'obra skills are procedural (multi-phase, gated) — they lose their logic without slash-commands. wondelai skills are principle-based (rules to hold in head) — perfect as static Junie guidelines. Build one ~400-600 line guidelines.md.',
  },
]
