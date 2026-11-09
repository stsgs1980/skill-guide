'use client'

import { useMemo, useState } from 'react'
import { Popover as BasePopover } from '@base-ui-components/react/popover'
import { DECISION_TREE } from '@/lib/data/decision-tree'
import type { DecisionNode } from '@/lib/data/types'
import { SectionHeading } from './SectionHeading'
import { ClientOnly } from './ClientOnly'

type Filter = 'all' | 'obra' | 'wondelai'

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'obra', label: 'obra' },
  { id: 'wondelai', label: 'wondelai' },
]

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function SymptomCell({ node }: { node: DecisionNode }) {
  return (
    <ClientOnly
      fallback={
        <span className={['cursor-help underline decoration-dotted', 'underline-offset-2 hover:decoration-solid'].join(' ')}>
          {node.symptom}
        </span>
      }
    >
      <BasePopover.Root>
        <BasePopover.Trigger
          className={['cursor-help text-left underline', 'decoration-dotted underline-offset-2 hover:decoration-solid'].join(' ')}
        >
          {node.symptom}
        </BasePopover.Trigger>
        <BasePopover.Portal>
          <BasePopover.Positioner side="right" align="start" sideOffset={8}>
            <BasePopover.Popup
              className={['max-w-sm rounded-lg border', 'border-[var(--l-border-3)] bg-[var(--l-bg-2)] p-5', 'shadow-2xl'].join(' ')}
            >
              <BasePopover.Title className="type-meta mb-1 font-mono text-[var(--l-text-4)]">Перевод</BasePopover.Title>
              <p className="type-body text-[var(--l-text)]">{node.symptomRu}</p>
              {node.note && <p className="type-meta mt-3 font-mono text-[var(--l-text-3)]">— {node.note}</p>}
              <BasePopover.Close
                className="type-mono mt-4 block font-mono text-[var(--l-purple-2)] hover:text-[var(--l-text)]"
                aria-label="Закрыть"
              >
                Закрыть ×
              </BasePopover.Close>
            </BasePopover.Popup>
          </BasePopover.Positioner>
        </BasePopover.Portal>
      </BasePopover.Root>
    </ClientOnly>
  )
}

export function DecisionTree() {
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let result = DECISION_TREE
    if (filter === 'obra') result = result.filter((d) => d.obra)
    if (filter === 'wondelai') result = result.filter((d) => d.wondelai)
    if (query.trim()) {
      const q = query.toLowerCase().trim()
      result = result.filter(
        (d) =>
          d.symptom.toLowerCase().includes(q) ||
          d.symptomRu.toLowerCase().includes(q) ||
          (d.obra && d.obra.toLowerCase().includes(q)) ||
          (d.wondelai && d.wondelai.toLowerCase().includes(q)) ||
          (d.note && d.note.toLowerCase().includes(q)),
      )
    }
    return result
  }, [filter, query])

  return (
    <section id="tree" className="divide-double border-y border-[var(--l-border-2)] bg-[var(--l-bg-1)]/30">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <SectionHeading
          num="06"
          kicker="Дерево решений"
          title={<>Симптом → навык</>}
          subtitle="Перестаньте угадывать. Найдите свой симптом, поставьте навык. Кликни на симптом — увидишь перевод. obra = процедуры, wondelai = принципы."
        />

        {/* Toolbar */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <div className="relative max-w-md min-w-[200px] flex-1">
            <SearchIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--l-text-4)]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск симптома или навыка…"
              className={[
                'type-mono w-full rounded-md',
                'border border-[var(--l-border-2)] bg-[var(--l-bg)]',
                'py-2 pr-3 pl-10',
                'font-mono text-sm text-[var(--l-text)]',
                'placeholder:text-[var(--l-text-4)] focus:border-[var(--l-purple)] focus:outline-none',
              ].join(' ')}
            />
          </div>

          <div className="flex gap-1">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`type-mono rounded-md px-3 py-2 font-mono text-sm font-medium transition-all ${
                  filter === f.id
                    ? 'border border-[var(--l-border-3)] bg-[var(--l-bg-3)] text-[var(--l-text)]'
                    : 'border border-transparent text-[var(--l-text-3)] hover:bg-white/[0.04] hover:text-[var(--l-text)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <span className="type-mono font-mono text-sm text-[var(--l-text-4)]">
            {filtered.length} / {DECISION_TREE.length}
          </span>
        </div>

        {/* Data table */}
        <div className="mt-6 overflow-hidden rounded-xl border border-[var(--l-border-2)]">
          <div className="max-h-[600px] overflow-y-auto">
            <table className="w-full">
              <thead className="sticky top-0 z-10 bg-[var(--l-bg-2)]">
                <tr className="type-meta border-b border-[var(--l-border-3)] font-mono">
                  <th className="w-12 px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Симптом</th>
                  <th className="w-44 px-4 py-3 text-left text-[var(--l-purple-2)]">obra</th>
                  <th className="w-44 px-4 py-3 text-left text-[var(--l-blue)]">wondelai</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="type-body px-4 py-12 text-center text-[var(--l-text-4)]">
                      Ничего не найдено
                    </td>
                  </tr>
                ) : (
                  filtered.map((d, i) => {
                    const originalIndex = DECISION_TREE.indexOf(d)
                    return (
                      <tr
                        key={i}
                        className={[
                          'type-body h-12 border-b',
                          'border-[var(--l-border)] transition-colors last:border-0',
                          'hover:bg-[var(--l-bg-2)]',
                        ].join(' ')}
                      >
                        <td className="type-mono px-4 font-mono text-[var(--l-text-4)] tabular-nums">
                          {String(originalIndex + 1).padStart(2, '0')}
                        </td>
                        <td className="px-4 text-[var(--l-text)]">
                          <SymptomCell node={d} />
                        </td>
                        <td className="px-4">
                          {d.obra ? (
                            <code
                              className={['type-mono block truncate', 'font-mono text-sm font-medium', 'text-[var(--l-purple-2)]'].join(
                                ' ',
                              )}
                              title={d.obra}
                            >
                              {d.obra}
                            </code>
                          ) : (
                            <span className="text-[var(--l-text-4)]">—</span>
                          )}
                        </td>
                        <td className="px-4">
                          {d.wondelai ? (
                            <code
                              className="type-mono block truncate font-mono text-sm font-medium text-[var(--l-blue)]"
                              title={d.wondelai}
                            >
                              {d.wondelai}
                            </code>
                          ) : (
                            <span className="text-[var(--l-text-4)]">—</span>
                          )}
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
