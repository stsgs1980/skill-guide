'use client'

import { useEffect, useRef, useState } from 'react'
import { REPOS } from '@/lib/data/repos'
import type { Tier } from '@/lib/data/types'
import { tierConfig } from './tier-config'

interface RepoSidebarProps {
  filter: 'all' | Tier
  onActiveChange?: (repoRank: number) => void
}

/**
 * Sticky sidebar with scroll-spy navigation for the 15 repos.
 * Uses scroll-based detection (not IntersectionObserver) for reliability
 * with cards of varying heights (featured cards are tall).
 *
 * Active card = the one whose top is closest to (but not below) the trigger line
 * at ~120px from viewport top (just under sticky nav).
 */
export function RepoSidebar({ filter, onActiveChange }: RepoSidebarProps) {
  const [activeId, setActiveId] = useState<string>('')
  // Lock after click so scroll handler doesn't override during smooth scroll
  const lockRef = useRef<{ id: string; until: number } | null>(null)
  // Latest active rank, kept in a ref so scroll handler reads fresh value
  const activeRankRef = useRef<number | null>(null)

  const visibleRepos = filter === 'all' ? REPOS : REPOS.filter((r) => r.tier === filter)

  const setActive = (id: string) => {
    setActiveId(id)
    const rank = parseInt(id.replace('repo-', ''), 10)
    if (activeRankRef.current !== rank) {
      activeRankRef.current = rank
      onActiveChange?.(rank)
    }
  }

  useEffect(() => {
    const TRIGGER_LINE = 120 // px from viewport top, just under sticky nav (56px) + breathing room

    const updateActive = () => {
      // If locked (recent click), skip
      const now = Date.now()
      if (lockRef.current && now < lockRef.current.until) return
      if (lockRef.current && now >= lockRef.current.until) lockRef.current = null

      // Find the card whose top is closest to (but not below) the trigger line.
      // Cards below the line are "already passed"; cards above haven't arrived yet.
      let bestRank: number | null = null
      let bestTop = -Infinity

      for (const repo of visibleRepos) {
        const el = document.getElementById(`repo-${repo.rank}`)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        // Card must be at least partially in viewport
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue
        // Card's top should be at or above the trigger line (already scrolled past)
        // Pick the closest one below the line
        if (rect.top <= TRIGGER_LINE && rect.top >= bestTop) {
          bestTop = rect.top
          bestRank = repo.rank
        }
      }

      // If no card top is above the trigger line (e.g. at very top), pick the first visible
      if (bestRank === null) {
        for (const repo of visibleRepos) {
          const el = document.getElementById(`repo-${repo.rank}`)
          if (!el) continue
          const rect = el.getBoundingClientRect()
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            bestRank = repo.rank
            break
          }
        }
      }

      if (bestRank !== null) {
        setActive(`repo-${bestRank}`)
      }
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [visibleRepos])

  const handleClick = (rank: number) => {
    const id = `repo-${rank}`
    setActive(id)
    lockRef.current = { id, until: Date.now() + 1200 }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="sticky top-20">
      <div className="type-meta mb-4 px-2 font-mono text-[var(--l-text-4)]">Навигация · {visibleRepos.length}</div>
      <ul className="space-y-0.5">
        {visibleRepos.map((repo) => {
          const cfg = tierConfig[repo.tier]
          const isActive = activeId === `repo-${repo.rank}`
          return (
            <li key={repo.rank}>
              <button
                onClick={() => handleClick(repo.rank)}
                className={`group flex w-full min-w-0 items-center gap-2.5 rounded-md px-2.5 py-2 text-left transition-colors ${
                  isActive
                    ? 'border-l-2 border-[var(--l-purple)] bg-[var(--l-bg-2)]'
                    : 'border-l-2 border-transparent hover:bg-[var(--l-bg-2)]/50'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot} flex-shrink-0`} />
                <span
                  className={`type-mono flex-shrink-0 font-mono text-xs tabular-nums ${isActive ? 'text-[var(--l-purple-2)]' : 'text-[var(--l-text-4)]'}`}
                >
                  {String(repo.rank).padStart(2, '0')}
                </span>
                <span
                  className={`type-mono min-w-0 flex-1 truncate font-mono text-sm ${isActive ? 'font-medium text-[var(--l-text)]' : 'text-[var(--l-text-3)] group-hover:text-[var(--l-text-2)]'}`}
                >
                  {repo.owner}/{repo.name}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
