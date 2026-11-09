'use client'

import { Tabs as BaseTabs } from '@base-ui-components/react/tabs'
import type { Env, Repo } from '@/lib/data/types'
import { fitColor, fitLabel, tierConfig } from './tier-config'
import { ClientOnly } from './ClientOnly'
import { CornerCrosses } from './CornerCrosses'
import { ExternalLinkIcon } from './icons'

const ENV_LABELS: Record<Env, string> = {
  zai: 'Z.ai',
  opencode: 'Opencode',
  webstorm: 'WebStorm',
} as const

const TABS = [
  { id: 'why', label: 'Зачем', content: (r: Repo) => r.why },
  { id: 'value', label: 'Ценность', content: (r: Repo) => r.value },
  { id: 'when', label: 'Когда', content: (r: Repo) => r.when },
] as const

export function RepoCard({ repo, featured = false, active = false }: { repo: Repo; featured?: boolean; active?: boolean }) {
  const cfg = tierConfig[repo.tier]

  if (featured) {
    return (
      <div
        data-active={active ? 'true' : undefined}
        className={`repo-card relative h-full rounded-xl transition-all hover:border-[var(--l-text-3)] ${repo.rank === 1 ? 'border-beam glare-hover' : 'overflow-hidden border border-dashed border-[var(--l-border-3)] bg-[var(--l-bg-1)]'}`}
      >
        <CornerCrosses className="text-[var(--l-text-4)]" />
        <div className="m-0.5 grid h-full gap-0 rounded-[10px] bg-[var(--l-bg-1)] md:grid-cols-12">
          {/* Left — identity (5 cols) */}
          <div className="flex flex-col border-b border-dashed border-[var(--l-border-3)] p-8 md:col-span-5 md:border-r md:border-b-0">
            {/* Rank + tier dot — single semantic color */}
            <div className="mb-5 flex items-center gap-2.5">
              <span className="type-mono font-mono text-sm text-[var(--l-text-3)] tabular-nums">#{String(repo.rank).padStart(2, '0')}</span>
              <span className={`h-2 w-2 rounded-full ${cfg.dot}`} />
              <span className="type-mono font-mono text-sm text-[var(--l-text-2)]">{cfg.labelRu}</span>
            </div>

            <h3 className="font-display text-2xl font-semibold tracking-tight break-words text-[var(--l-text)]">
              {repo.owner}/{repo.name}
            </h3>
            <p className="type-body mt-4 flex-1 leading-relaxed text-[var(--l-text-2)]">{repo.summary}</p>

            {/* Stats — single row, clear hierarchy */}
            <div className="mt-6 flex items-baseline gap-5 border-t border-dashed border-[var(--l-border-3)] pt-5">
              <div>
                <span className="type-mono font-mono text-xl font-semibold text-[var(--l-text)] tabular-nums">{repo.stars}</span>
                <span className="type-mono ml-1.5 font-mono text-sm text-[var(--l-text-3)]">stars</span>
              </div>
              <div>
                <span className="type-mono font-mono text-xl font-semibold text-[var(--l-text)] tabular-nums">{repo.forks}</span>
                <span className="type-mono ml-1.5 font-mono text-sm text-[var(--l-text-3)]">forks</span>
              </div>
              <div>
                <span className="type-mono font-mono text-xl font-semibold text-[var(--l-text)] tabular-nums">{repo.contributors}</span>
                <span className="type-mono ml-1.5 font-mono text-sm text-[var(--l-text-3)]">contrib.</span>
              </div>
            </div>

            {/* Flags + GitHub link */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {repo.hasEvals && (
                  <span className="type-mono rounded border border-[var(--l-green)]/20 bg-[var(--l-green)]/10 px-2 py-0.5 font-mono text-xs text-[var(--l-green)]">
                    evals
                  </span>
                )}
                {repo.starHistoryChart && (
                  <span className="type-mono rounded border border-[var(--l-red)]/20 bg-[var(--l-red)]/10 px-2 py-0.5 font-mono text-xs text-[var(--l-red)]">
                    star-history
                  </span>
                )}
                {repo.marketingName && (
                  <span className="type-mono rounded border border-[var(--l-red)]/20 bg-[var(--l-red)]/10 px-2 py-0.5 font-mono text-xs text-[var(--l-red)]">
                    marketing
                  </span>
                )}
              </div>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="type-mono inline-flex items-center gap-1.5 font-mono text-sm text-[var(--l-purple-2)] transition-colors hover:text-[var(--l-text)]"
              >
                <ExternalLinkIcon className="h-3.5 w-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* Right — tabs (7 cols) */}
          <div className="flex flex-col md:col-span-7">
            <ClientOnly
              fallback={
                <div className="flex-1 p-8">
                  <p className="type-body-lg leading-relaxed text-[var(--l-text-2)]">{repo.why}</p>
                </div>
              }
            >
              <BaseTabs.Root defaultValue="why" className="block flex flex-1 flex-col">
                <BaseTabs.List className="flex gap-1 border-b border-[var(--l-border)] px-8 pt-6">
                  {TABS.map((tab) => (
                    <BaseTabs.Tab
                      key={tab.id}
                      value={tab.id}
                      className="type-mono inline-flex cursor-pointer items-center rounded-md border border-transparent px-4 py-2.5 font-mono text-sm font-semibold text-[var(--l-text-3)] transition-all hover:bg-white/[0.04] hover:text-[var(--l-text)] data-[active]:border-[var(--l-purple)] data-[active]:bg-[var(--l-purple)] data-[active]:text-white data-[active]:shadow-[0_0_20px_rgba(94,106,210,0.4)]"
                    >
                      {tab.label}
                    </BaseTabs.Tab>
                  ))}
                </BaseTabs.List>
                {TABS.map((tab) => (
                  <BaseTabs.Panel key={tab.id} value={tab.id} className="flex-1 p-8">
                    <p className="type-body-lg leading-relaxed text-[var(--l-text-2)]">{tab.content(repo)}</p>
                  </BaseTabs.Panel>
                ))}
              </BaseTabs.Root>
            </ClientOnly>

            {/* Fit footer — single accent, no rainbow */}
            <div className="flex flex-wrap items-center gap-6 border-t border-dashed border-[var(--l-border-3)] px-8 py-4">
              {(Object.keys(ENV_LABELS) as Env[]).map((env) => (
                <div key={env} className="flex items-center gap-2">
                  <span className="type-mono font-mono text-sm text-[var(--l-text-3)]">{ENV_LABELS[env]}</span>
                  <span className={`type-mono font-mono text-sm font-medium ${fitColor(repo.fit[env])}`}>{fitLabel(repo.fit[env])}</span>
                </div>
              ))}
              <span className="type-mono ml-auto font-mono text-sm text-[var(--l-text-3)]">{repo.license}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Standard (rank 4-15): compact vertical card
  return (
    <div
      data-active={active ? 'true' : undefined}
      className="repo-card relative flex h-full flex-col overflow-hidden rounded-xl border border-dashed border-[var(--l-border-3)] bg-[var(--l-bg-1)] transition-all hover:border-[var(--l-text-3)]"
    >
      <CornerCrosses className="text-[var(--l-text-4)]" />
      {/* Header — compact, clear hierarchy */}
      <div className="border-b border-dashed border-[var(--l-border-3)] px-5 py-4">
        <div className="mb-2 flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot} flex-shrink-0`} />
          <span className="type-mono truncate font-mono text-sm font-medium text-[var(--l-text-2)]">
            {repo.owner}/{repo.name}
          </span>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex-shrink-0 text-[var(--l-text-3)] transition-colors hover:text-[var(--l-purple-2)]"
            aria-label="GitHub"
          >
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="type-mono flex items-baseline gap-3 font-mono text-sm">
          <span className="font-semibold text-[var(--l-text)] tabular-nums">{repo.stars}</span>
          <span className="text-[var(--l-text-3)]">stars</span>
          <span className="text-[var(--l-text-4)]">·</span>
          <span className="font-semibold text-[var(--l-text)] tabular-nums">{repo.contributors}</span>
          <span className="text-[var(--l-text-3)]">contrib.</span>
          {repo.hasEvals && <span className="ml-auto text-[var(--l-green)]">evals</span>}
        </div>
      </div>

      {/* Tabs */}
      <ClientOnly
        fallback={
          <div className="flex-1 px-5 py-4">
            <p className="type-body line-clamp-4 leading-relaxed text-[var(--l-text-2)]">{repo.why}</p>
          </div>
        }
      >
        <BaseTabs.Root defaultValue="why" className="block flex flex-1 flex-col">
          <BaseTabs.List className="flex gap-1 border-b border-[var(--l-border)] px-5 pt-2">
            {TABS.map((tab) => (
              <BaseTabs.Tab
                key={tab.id}
                value={tab.id}
                className="type-mono inline-flex cursor-pointer items-center rounded border border-transparent px-2.5 py-1.5 font-mono text-xs font-semibold text-[var(--l-text-3)] transition-all hover:bg-white/[0.04] hover:text-[var(--l-text)] data-[active]:border-[var(--l-purple)] data-[active]:bg-[var(--l-purple)] data-[active]:text-white data-[active]:shadow-[0_0_16px_rgba(94,106,210,0.4)]"
              >
                {tab.label}
              </BaseTabs.Tab>
            ))}
          </BaseTabs.List>
          {TABS.map((tab) => (
            <BaseTabs.Panel key={tab.id} value={tab.id} className="flex-1 px-5 py-4">
              <p className="type-body leading-relaxed text-[var(--l-text-2)]">{tab.content(repo)}</p>
            </BaseTabs.Panel>
          ))}
        </BaseTabs.Root>
      </ClientOnly>

      {/* Footer — compact fit, single accent, wraps if needed */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-dashed border-[var(--l-border-3)] px-5 py-3">
        {(Object.keys(ENV_LABELS) as Env[]).map((env) => (
          <span
            key={env}
            className={`type-mono font-mono text-xs font-medium ${fitColor(repo.fit[env])}`}
            title={`${ENV_LABELS[env]}: ${fitLabel(repo.fit[env])}`}
          >
            {env === 'zai' ? 'Z.ai' : env === 'opencode' ? 'OC' : 'WS'} {fitLabel(repo.fit[env])}
          </span>
        ))}
        <span className="type-mono ml-auto font-mono text-xs text-[var(--l-text-3)]">{repo.license}</span>
      </div>
    </div>
  )
}
