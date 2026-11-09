// Shared types for the skill guide.
// See docs/skills/README.md for data sources.

export type Tier = 'green' | 'amber' | 'red'

export type AuthorType = 'individual_known' | 'individual_anon' | 'company' | 'community'
export type Env = 'zai' | 'opencode' | 'webstorm'

export interface Repo {
  rank: number
  owner: string
  name: string
  url: string
  stars: string
  forks: string
  contributors: string
  commits: string
  issues: string
  lastCommit: string
  license: string
  authorType: AuthorType
  hasEvals: boolean
  skillFormat: string
  starHistoryChart: boolean
  marketingName: boolean
  descQuality: number // 1-5
  tier: Tier
  summary: string
  redFlags: string[]
  greenFlags: string[]
  fit: Record<Env, number> // 0 (skip) - 3 (excellent)
  // Per-repo decision tabs — answers "should I install this?"
  why: string
  value: string
  when: string
}

export interface ObraSkill {
  slug: string
  realName: string
  category: string
  purpose: string
  keyTechnique: string
  hasEvals: boolean
  ironLaw?: string
}

export interface WondelaiSkill {
  slug: string
  source: string
  category: 'code' | 'architecture' | 'design'
  description: string
  routingRule: string
  techniques: string[]
}

export interface DecisionNode {
  symptom: string
  symptomRu: string
  obra?: string
  wondelai?: string
  note?: string
}

export interface Bundle {
  env: Env
  title: string
  installHint: string
  obra: string[]
  wondelai: string[]
  rationale: string
}
