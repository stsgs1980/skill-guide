'use client'

import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion'
import { CheckCircleIcon, PaletteIcon, TypeIcon } from './icons'
import { SectionHeading } from './SectionHeading'
import { ClientOnly } from './ClientOnly'
import { META_STEPS } from './meta-steps'
import type { MetaStep } from './meta-steps'

const DESIGN_TOKENS = [
  { name: '--l-bg', value: '#08090a', label: 'Фон страницы' },
  { name: '--l-bg-1', value: '#101113', label: 'Карточка' },
  { name: '--l-bg-2', value: '#18191b', label: 'Hover' },
  { name: '--l-bg-3', value: '#1f2023', label: 'Active' },
  { name: '--l-text', value: '#f7f8f8', label: 'Текст 18.7:1' },
  { name: '--l-text-2', value: '#c8ced9', label: 'Вторичный 12.6:1' },
  { name: '--l-text-3', value: '#9aa1ac', label: 'Третичный 7.7:1' },
  { name: '--l-purple', value: '#5e6ad2', label: 'Акцент' },
  { name: '--l-green', value: '#26d07c', label: 'Отлично' },
  { name: '--l-blue', value: '#4b9eff', label: 'Хорошо' },
  { name: '--l-orange', value: '#ff8c42', label: 'На грани' },
  { name: '--l-red', value: '#eb5757', label: 'Подозрение' },
] as const

const TYPE_SCALE = [
  {
    name: 'Display',
    font: 'Inter Tight',
    size: 'clamp(2.75-4.5rem)',
    weight: '600',
    usage: 'Hero h1',
  },
  {
    name: 'Heading',
    font: 'Inter Tight',
    size: 'clamp(1.75-2.5rem)',
    weight: '600',
    usage: 'Section h2',
  },
  { name: 'Subheading', font: 'Inter Tight', size: '1.125rem', weight: '500', usage: 'Card h3' },
  { name: 'Body', font: 'Inter', size: '1rem', weight: '400', usage: 'Paragraphs' },
  { name: 'Body LG', font: 'Inter', size: '1.125rem', weight: '400', usage: 'Lead text' },
  { name: 'Mono', font: 'JetBrains Mono', size: '0.8125rem', weight: '500', usage: 'Data, code' },
  {
    name: 'Meta',
    font: 'JetBrains Mono',
    size: '0.6875rem',
    weight: '400',
    usage: 'Labels, UPPERCASE',
  },
] as const

function StepRow({ step, index, isLast }: { step: MetaStep; index: number; isLast: boolean }) {
  const isObra = step.source === 'obra'
  const accent = isObra ? 'var(--l-purple)' : 'var(--l-blue)'
  const accentText = isObra ? 'text-[var(--l-purple-2)]' : 'text-[var(--l-blue)]'
  const accentBg = isObra ? 'bg-[var(--l-purple)]/15' : 'bg-[var(--l-blue)]/15'
  const accentBorder = isObra ? 'border-[var(--l-purple)]/30' : 'border-[var(--l-blue)]/30'
  const Icon = step.icon

  return (
    <BaseAccordion.Item value={`step-${index}`} className={isLast ? '' : 'border-b border-dashed border-[var(--l-border)]'}>
      <BaseAccordion.Header>
        <BaseAccordion.Trigger className="flex w-full items-start gap-4 p-6 text-left transition-colors hover:bg-white/[0.02]">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ background: accent }}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div className="type-meta font-mono text-[var(--l-text-4)] tabular-nums">#{String(index + 1).padStart(2, '0')}</div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span className={`type-mono rounded border font-mono ${accentBg} ${accentText} ${accentBorder} px-1.5 py-0.5`}>
                {step.source}/{step.skill}
              </span>
              <span className="type-meta font-mono text-[var(--l-text-4)]">{step.phase}</span>
            </div>
            <h4 className="type-subheading leading-tight text-[var(--l-text)]">{step.title}</h4>
          </div>
          <span className="type-mono mt-3 font-mono text-[var(--l-text-4)] transition-transform group-data-[panel-open]:rotate-90">›</span>
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
      <BaseAccordion.Panel>
        <div className="px-6 pb-6 pl-20">
          {step.before && (
            <div className="mb-4 border-l-2 border-[var(--l-text-4)]/40 pl-4">
              <div className="type-meta mb-1.5 font-mono text-[var(--l-text-4)]">ДО</div>
              <p className="type-body leading-relaxed text-[var(--l-text-3)] line-through">{step.before}</p>
            </div>
          )}
          <div className="border-l-2 pl-4" style={{ borderColor: accent }}>
            <div className={`type-meta mb-1.5 font-mono font-semibold ${accentText}`}>ПОСЛЕ</div>
            <p className="type-body-lg leading-relaxed text-[var(--l-text)]">{step.after}</p>
          </div>
          <div className="mt-4 grid gap-x-6 gap-y-2 border-t border-dashed border-[var(--l-border-3)] pt-4 sm:grid-cols-2">
            {step.evidence.map((e, i) => (
              <div key={i} className="type-body flex items-start gap-2 text-[var(--l-text-2)]">
                <CheckCircleIcon className="mt-1 h-3.5 w-3.5 flex-shrink-0" style={{ color: accent }} />
                <span>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </BaseAccordion.Panel>
    </BaseAccordion.Item>
  )
}

export function MetaSection() {
  return (
    <section id="meta" className="linear-glow divide-double border-y border-[var(--l-border-2)]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <SectionHeading
          num="08"
          kicker="Мета-демонстрация"
          title={<>Как скиллы построили этот гайд</>}
          subtitle="Шесть скиллов из этого путеводителя — 3 из obra, 3 из wondelai — были применены при создании страницы. Кликни шаг — раскроется что было и что стало."
        />

        {/* Meta steps — accordion */}
        <ClientOnly
          fallback={
            <div className="mt-12 overflow-hidden rounded-xl border border-dashed border-[var(--l-border-3)]">
              {META_STEPS.map((step, i) => (
                <div key={i} className={`p-6 ${i !== META_STEPS.length - 1 ? 'border-b border-dashed border-[var(--l-border)]' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-lg"
                      style={{
                        background: step.source === 'obra' ? 'var(--l-purple)' : 'var(--l-blue)',
                      }}
                    >
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="type-subheading text-[var(--l-text)]">{step.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <BaseAccordion.Root multiple className="mt-12 overflow-hidden rounded-xl border border-dashed border-[var(--l-border-3)]">
            {META_STEPS.map((step, i) => (
              <StepRow key={i} step={step} index={i} isLast={i === META_STEPS.length - 1} />
            ))}
          </BaseAccordion.Root>
        </ClientOnly>

        {/* Design System — токены + типографика (тёмная, без белых пятен) */}
        <div className="mt-4 grid overflow-hidden rounded-xl border border-dashed border-[var(--l-border-3)] md:grid-cols-2">
          {/* Design Tokens */}
          <div className="border-b border-dashed border-[var(--l-border)] p-6 md:border-r md:border-b-0">
            <div className="mb-4 flex items-center justify-between">
              <span className="type-subheading flex items-center gap-2.5 text-[var(--l-text)]">
                <PaletteIcon className="h-4 w-4 text-[var(--l-purple-2)]" />
                Design Tokens
              </span>
              <span className="type-meta font-mono text-[var(--l-text-4)]">WCAG AA</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {DESIGN_TOKENS.map((t) => (
                <div key={t.name} className="flex items-center gap-2.5">
                  <div className="h-5 w-5 flex-shrink-0 rounded border border-[var(--l-border-3)]" style={{ background: t.value }} />
                  <div className="min-w-0">
                    <code className="type-mono font-mono text-xs text-[var(--l-text-2)]">{t.name}</code>
                    <div className="type-meta font-mono text-[var(--l-text-4)]">{t.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Type Scale */}
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="type-subheading flex items-center gap-2.5 text-[var(--l-text)]">
                <TypeIcon className="h-4 w-4 text-[var(--l-purple-2)]" />
                Type Scale
              </span>
              <span className="type-meta font-mono text-[var(--l-text-4)]">7 уровней</span>
            </div>
            <div className="space-y-0">
              {TYPE_SCALE.map((t, i) => (
                <div
                  key={t.name}
                  className={`flex items-baseline justify-between py-2.5 ${i !== TYPE_SCALE.length - 1 ? 'border-b border-dashed border-[var(--l-border)]' : ''}`}
                >
                  <div>
                    <div className="type-mono font-mono text-sm text-[var(--l-text)]">{t.name}</div>
                    <div className="type-meta font-mono text-[var(--l-text-4)]">{t.usage}</div>
                  </div>
                  <div className="text-right">
                    <div className="type-mono font-mono text-xs text-[var(--l-text-3)]">{t.font}</div>
                    <div className="type-meta font-mono text-[var(--l-text-4)]">
                      {t.size} · {t.weight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
