'use client'

import { BookOpenIcon, ChevronRightIcon, CodeIcon, LayersIcon, SparklesIcon } from './icons'
import { Tabs as BaseTabs } from '@base-ui-components/react/tabs'
import { WONDELAI_SKILLS } from '@/lib/data/wondelai-skills'
import type { WondelaiSkill } from '@/lib/data/types'
import { SectionHeading } from './SectionHeading'
import { ClientOnly } from './ClientOnly'

type Category = WondelaiSkill['category']

const CATEGORIES: { id: Category; label: string; count: number; icon: typeof CodeIcon }[] = [
  { id: 'code', label: 'Качество кода', count: 6, icon: CodeIcon },
  { id: 'architecture', label: 'Архитектура', count: 6, icon: LayersIcon },
  { id: 'design', label: 'Дизайн', count: 4, icon: SparklesIcon },
]

export function WondelaiDeepDive() {
  return (
    <section id="wondelai" className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
      <SectionHeading
        num="05"
        kicker="Deep dive · wondelai"
        title={<>wondelai/skills — слой знаний</>}
        subtitle="65 навыков (51 фреймворк из бестселлеров + 14 метаскилла). Рекомендуем 16: 6 Код + 6 Архитектура + 4 Дизайн. Эти говорят агенту ЧТО знать."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-[var(--l-border-2)] bg-[var(--l-bg-1)] p-6">
          <div className="type-meta mb-3 font-mono text-[var(--l-green)]">Сигналы</div>
          <p className="type-body leading-relaxed text-[var(--l-text-2)]">
            MIT · мульти-harness упаковка · консистентная SKILL.md структура · routing-правила
          </p>
        </div>
        <div className="rounded-lg border border-[var(--l-border-2)] bg-[var(--l-bg-1)] p-6">
          <div className="type-meta mb-3 font-mono text-[var(--l-yellow)]">Оговорки</div>
          <p className="type-body leading-relaxed text-[var(--l-text-2)]">
            Анонимный аккаунт (1 подписчик) · один human-коммитер + claude AI · нет evals/тестов.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--l-border-2)] bg-[var(--l-bg-1)] p-6">
          <div className="type-meta mb-3 font-mono text-[var(--l-text-3)]">Структура SKILL.md</div>
          <p className="type-body leading-relaxed text-[var(--l-text-2)]">
            Frontmatter → Core Principle → Scoring (0-10) → Framework → Common Mistakes → Quick Diagnostic.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <ClientOnly
          fallback={
            <div className="space-y-4">
              {WONDELAI_SKILLS.filter((s) => s.category === 'code').map((skill) => (
                <div key={skill.slug} className="rounded-xl border border-[var(--l-border-2)] bg-[var(--l-bg-1)] p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={['flex h-10 w-10', 'flex-shrink-0 items-center justify-center', 'rounded-lg bg-[var(--l-blue)]/15'].join(
                        ' ',
                      )}
                    >
                      <BookOpenIcon className="h-5 w-5 text-[var(--l-blue)]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h4 className={['type-mono font-mono text-base', 'font-semibold text-[var(--l-text)]'].join(' ')}>{skill.slug}</h4>
                        <span className="type-body text-[var(--l-text-3)] italic">{skill.source}</span>
                      </div>
                      <p className="type-body mt-2 text-[var(--l-text-2)]">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <BaseTabs.Root defaultValue="code" className="block">
            <BaseTabs.List className="mb-px flex border-b border-[var(--l-border-2)]">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon
                return (
                  <BaseTabs.Tab
                    key={cat.id}
                    value={cat.id}
                    className={[
                      'type-body -mb-px flex',
                      'cursor-pointer items-center gap-2',
                      'border-b-2 border-transparent px-4',
                      'py-3 font-medium text-[var(--l-text-3)]',
                      'transition-colors data-[selected]:border-[var(--l-blue)] data-[selected]:text-[var(--l-text)]',
                    ].join(' ')}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{cat.label}</span>
                    <span className="type-mono font-mono text-[var(--l-text-4)]">{cat.count}</span>
                  </BaseTabs.Tab>
                )
              })}
            </BaseTabs.List>
            {CATEGORIES.map((cat) => (
              <BaseTabs.Panel key={cat.id} value={cat.id} className="space-y-4 pt-6">
                {WONDELAI_SKILLS.filter((s) => s.category === cat.id).map((skill) => (
                  <div
                    key={skill.slug}
                    className={[
                      'rounded-xl border border-[var(--l-border-2)]',
                      'bg-[var(--l-bg-1)] p-6 transition-colors',
                      'hover:border-[var(--l-border-3)]',
                    ].join(' ')}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={['flex h-10 w-10', 'flex-shrink-0 items-center justify-center', 'rounded-lg bg-[var(--l-blue)]/15'].join(
                          ' ',
                        )}
                      >
                        <BookOpenIcon className="h-5 w-5 text-[var(--l-blue)]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h4 className={['type-mono font-mono text-base', 'font-semibold text-[var(--l-text)]'].join(' ')}>
                            {skill.slug}
                          </h4>
                          <span className="type-body text-[var(--l-text-3)] italic">{skill.source}</span>
                        </div>
                        <p className="type-body mt-2 text-[var(--l-text-2)]">{skill.description}</p>
                        <div className="mt-4 border-l-2 border-[var(--l-blue)]/50 py-2 pl-4">
                          <span className="type-meta font-mono font-semibold text-[var(--l-blue)]">Routing</span>
                          <p className="type-body mt-1.5 leading-relaxed text-[var(--l-text-2)]">{skill.routingRule}</p>
                        </div>
                        <div className="mt-5 border-t border-dashed border-[var(--l-border-3)] pt-5">
                          <div className="type-meta mb-3 font-mono text-[var(--l-text-4)]">Конкретные техники</div>
                          <ul className="type-body grid gap-x-6 gap-y-2 text-[var(--l-text-2)] sm:grid-cols-2">
                            {skill.techniques.map((t, i) => (
                              <li key={i} className="flex gap-2">
                                <ChevronRightIcon className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-[var(--l-purple-2)]" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </BaseTabs.Panel>
            ))}
          </BaseTabs.Root>
        </ClientOnly>
      </div>
    </section>
  )
}
