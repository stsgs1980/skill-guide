'use client'

import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion'
import { ZapIcon } from './icons'
import { OBRA_SKILLS } from '@/lib/data/obra-skills'
import { SectionHeading } from './SectionHeading'
import { ClientOnly } from './ClientOnly'
import { HammerIcon, TargetIcon } from './icons'

function SkillRow({ skill, isLast }: { skill: (typeof OBRA_SKILLS)[number]; isLast: boolean }) {
  const hasIronLaw = !!skill.ironLaw
  return (
    <BaseAccordion.Item value={skill.slug} className={isLast ? '' : 'border-b border-dashed border-[var(--l-border)]'}>
      <BaseAccordion.Header>
        <BaseAccordion.Trigger className="flex w-full items-center gap-4 p-6 text-left transition-colors hover:bg-white/[0.02]">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--l-purple)]/15">
            <HammerIcon className="h-5 w-5 text-[var(--l-purple-2)]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h4 className="type-mono font-mono text-base font-semibold text-[var(--l-text)]">{skill.slug}</h4>
              {skill.hasEvals && (
                <span className="type-mono rounded border border-[var(--l-green)]/20 bg-[var(--l-green)]/10 px-1.5 py-0 font-mono text-[var(--l-green)]">
                  evals
                </span>
              )}
              <span className="type-mono rounded border border-[var(--l-border)] bg-[var(--l-bg-2)] px-1.5 py-0 font-mono text-[var(--l-text-3)]">
                {skill.category}
              </span>
              {hasIronLaw && (
                <span className="type-mono rounded border border-[var(--l-red)]/30 bg-[var(--l-red)]/10 px-1.5 py-0 font-mono text-[var(--l-red)]">
                  Iron Law
                </span>
              )}
            </div>
            <p className="type-body mt-1 text-[var(--l-text-3)]">{skill.purpose}</p>
          </div>
          <span className="type-mono font-mono text-[var(--l-text-4)] transition-transform group-data-[panel-open]:rotate-90">›</span>
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
      <BaseAccordion.Panel>
        <div className="px-6 pb-6 pl-20">
          <div className="border-l-2 border-[var(--l-purple)]/50 py-1 pl-4">
            <span className="type-meta font-mono font-semibold text-[var(--l-purple-2)]">Ключевая техника</span>
            <p className="type-body mt-1.5 leading-relaxed text-[var(--l-text-2)]">{skill.keyTechnique}</p>
          </div>
          {skill.ironLaw && (
            <div className="mt-4 rounded-lg border border-[var(--l-purple)]/30 bg-gradient-to-r from-[var(--l-purple)]/15 via-[var(--l-purple)]/5 to-transparent p-5">
              <div className="mb-2 flex items-center gap-2">
                <ZapIcon className="h-4 w-4 text-[var(--l-purple-2)]" />
                <span className="type-meta font-mono font-semibold text-[var(--l-purple-2)]">Iron Law</span>
              </div>
              <p className="type-subheading text-[var(--l-text)] italic">{skill.ironLaw}</p>
            </div>
          )}
        </div>
      </BaseAccordion.Panel>
    </BaseAccordion.Item>
  )
}

export function ObraDeepDive() {
  return (
    <section id="obra" className="divide-double border-y border-[var(--l-border-2)] bg-[var(--l-bg-1)]/30">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <SectionHeading
          num="04"
          kicker="Deep dive · obra"
          title={<>obra/superpowers — слой дисциплины</>}
          subtitle="Методология Jesse Vincent. 15 процессных навыков с Iron Laws, настоящими evals, и философией TDD-for-skills. Кликни навык — раскроется техника и Iron Law."
        />

        {/* Top row — 3 meta cells */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-xl border border-dashed border-[var(--l-border-3)] md:grid-cols-3">
          <div className="border-b border-dashed border-[var(--l-border)] p-6 md:border-r md:border-b-0">
            <div className="type-meta mb-3 font-mono text-[var(--l-purple-2)]">Проверенные сигналы</div>
            <p className="type-body text-[var(--l-text-2)]">Известный автор · 14 контрибьюторов · настоящий tests/ · 14 harnesses · MIT</p>
          </div>
          <div className="border-b border-dashed border-[var(--l-border)] p-6 md:border-r md:border-b-0">
            <div className="type-meta mb-3 font-mono text-[var(--l-purple-2)]">Формат</div>
            <p className="type-body text-[var(--l-text-2)]">
              Лаконичный, поведенческий. Iron Laws, таблицы рационализаций, graphviz-блок-схемы.
            </p>
          </div>
          <div className="p-6">
            <div className="type-meta mb-3 font-mono text-[var(--l-purple-2)]">Философия evals</div>
            <p className="type-body text-[var(--l-text-2)]">RED (без навыка) → GREEN (написать) → REFACTOR (давить на рационализации).</p>
          </div>
        </div>

        {/* Skills — accordion */}
        <ClientOnly
          fallback={
            <div className="mt-4 overflow-hidden rounded-xl border border-dashed border-[var(--l-border-3)]">
              {OBRA_SKILLS.map((skill, i) => (
                <div
                  key={skill.slug}
                  className={`p-6 ${i !== OBRA_SKILLS.length - 1 ? 'border-b border-dashed border-[var(--l-border)]' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--l-purple)]/15">
                      <HammerIcon className="h-5 w-5 text-[var(--l-purple-2)]" />
                    </div>
                    <div>
                      <h4 className="type-mono font-mono text-base font-semibold text-[var(--l-text)]">{skill.slug}</h4>
                      <p className="type-body text-[var(--l-text-3)]">{skill.purpose}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <BaseAccordion.Root multiple className="mt-4 overflow-hidden rounded-xl border border-dashed border-[var(--l-border-3)]">
            {OBRA_SKILLS.map((skill, i) => (
              <SkillRow key={skill.slug} skill={skill} isLast={i === OBRA_SKILLS.length - 1} />
            ))}
          </BaseAccordion.Root>
        </ClientOnly>

        {/* Warning */}
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-[var(--l-yellow)]/30 bg-[var(--l-yellow)]/5 p-5">
          <TargetIcon className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--l-yellow)]" />
          <div>
            <p className="type-meta mb-2 font-mono font-semibold text-[var(--l-yellow)]">Важно про имена</p>
            <p className="type-body leading-relaxed text-[var(--l-text-2)]">
              Неформальные имена (tdd, grill-with-docs, diagnosing-bugs){' '}
              <strong className="text-[var(--l-text)]">не все существуют дословно</strong>. Реальные:{' '}
              <code className="type-mono font-mono text-[var(--l-purple-2)]">test-driven-development</code>,{' '}
              <code className="type-mono font-mono text-[var(--l-purple-2)]">brainstorming</code>,{' '}
              <code className="type-mono font-mono text-[var(--l-purple-2)]">systematic-debugging</code>. А{' '}
              <code className="type-mono font-mono text-[var(--l-purple-2)]">improve-codebase-architecture</code> в obra нет — берите
              wondelai.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
