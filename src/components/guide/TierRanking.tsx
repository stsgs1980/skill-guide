'use client'

import { useMemo, useState } from 'react'
import { REPOS } from '@/lib/data/repos'
import type { Tier } from '@/lib/data/types'
import { tierConfig } from './tier-config'
import { SectionHeading } from './SectionHeading'
import { RepoCard } from './RepoCard'
import { RepoSidebar } from './RepoSidebar'

const FILTERS: ('all' | Tier)[] = ['all', 'green', 'amber', 'red']
const LABELS: Record<string, string> = {
  all: 'Все',
  green: 'Доверие',
  amber: 'Проверять',
  red: 'Подозрение',
} as const

const FEATURED_RANKS = new Set([1, 2, 3])

export function TierRanking() {
  const [tierFilter, setTierFilter] = useState<'all' | Tier>('all')
  const [activeRepo, setActiveRepo] = useState<number | null>(null)
  const filtered = useMemo(() => (tierFilter === 'all' ? REPOS : REPOS.filter((r) => r.tier === tierFilter)), [tierFilter])

  return (
    <section id="tier" className="relative divide-double border-y border-[var(--l-border-2)] bg-[var(--l-bg-1)]/30">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <SectionHeading
          num="02"
          kicker="Тир-ранжирование"
          title={<>15 репозиториев, ранжированы по содержанию</>}
          subtitle="Звёзды в этой нише — шум. Каждый репо оценён по репутации автора, числу контрибьюторов, наличию evals/тестов, качеству SKILL.md и red-flag паттернам."
        />

        {/* Mini TOC */}
        <div className="type-mono mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-[var(--l-text-4)]">
          <span>2.1 Trusted (10)</span>
          <span>·</span>
          <span>2.2 Verify (3)</span>
          <span>·</span>
          <span>2.3 Suspicious (2)</span>
        </div>

        {/* Filter bar */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((t) => {
            const count = t === 'all' ? REPOS.length : REPOS.filter((r) => r.tier === t).length
            const isActive = tierFilter === t
            const cfg = t === 'all' ? null : tierConfig[t]
            return (
              <button
                key={t}
                onClick={() => setTierFilter(t)}
                className={`type-mono inline-flex items-center gap-2 rounded-md px-3.5 py-2 font-mono font-medium transition-all ${
                  isActive
                    ? 'border border-[var(--l-border-3)] bg-[var(--l-bg-3)] text-[var(--l-text)]'
                    : 'border border-[var(--l-border-2)] bg-transparent text-[var(--l-text-3)] hover:border-[var(--l-border-3)] hover:text-[var(--l-text)]'
                }`}
              >
                {cfg && <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />}
                <span>{LABELS[t]}</span>
                <span className="text-[var(--l-text-3)]">{count}</span>
              </button>
            )
          })}
        </div>

        {/* Sidebar + content: CSS grid with sticky sidebar in its own column */}
        <div className={['mt-8 hidden lg:grid'].join(' ')} style={{ gridTemplateColumns: 'minmax(0, 240px) minmax(0, 1fr)', gap: '2rem' }}>
          {/* Sidebar — sticky in its column, never overlaps content */}
          <aside>
            <RepoSidebar filter={tierFilter} onActiveChange={setActiveRepo} />
          </aside>

          {/* Content — repo cards, in their own column */}
          <div>
            <div className="grid grid-cols-1 gap-4">
              {filtered.map((repo) => {
                const featured = FEATURED_RANKS.has(repo.rank)
                return (
                  <div key={repo.url} id={`repo-${repo.rank}`} style={{ scrollMarginTop: '6rem' }}>
                    <RepoCard repo={repo} featured={featured} active={activeRepo === repo.rank} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile — no sidebar, just cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:hidden">
          {filtered.map((repo) => {
            const featured = FEATURED_RANKS.has(repo.rank)
            return (
              <div key={repo.url} id={`repo-${repo.rank}`} style={{ scrollMarginTop: '6rem' }}>
                <RepoCard repo={repo} featured={featured} active={activeRepo === repo.rank} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
