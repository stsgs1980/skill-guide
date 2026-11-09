'use client'

import { BookOpenIcon, CodeIcon, CpuIcon, HammerIcon, LightbulbIcon, PackageIcon } from './icons'
import { Tabs as BaseTabs } from '@base-ui-components/react/tabs'
import { BUNDLES } from '@/lib/data/bundles'
import type { Bundle, Env } from '@/lib/data/types'
import { SectionHeading } from './SectionHeading'
import { ClientOnly } from './ClientOnly'

const ENV_LABELS: Record<Env, string> = {
  zai: 'Z.ai Code',
  opencode: 'Opencode',
  webstorm: 'WebStorm',
} as const

const ENV_ICONS: Record<Env, typeof CpuIcon> = {
  zai: CpuIcon,
  opencode: PackageIcon,
  webstorm: CodeIcon,
} as const

function BundleCard({ bundle }: { bundle: Bundle }) {
  const EnvIcon = ENV_ICONS[bundle.env]
  return (
    <div className="rounded-xl border border-[var(--l-border-2)] bg-[var(--l-bg-1)] p-8">
      <div className="mb-8 flex items-start gap-4">
        <div
          className={[
            'flex h-12 w-12',
            'flex-shrink-0 items-center justify-center',
            'rounded-lg bg-gradient-to-br from-[var(--l-purple)]',
            'to-[var(--l-purple-2)]',
          ].join(' ')}
        >
          <EnvIcon className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="type-subheading text-[var(--l-text)]">{bundle.title}</h3>
          <p className="type-mono mt-2 font-mono leading-relaxed text-[var(--l-text-3)]">{bundle.installHint}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-[var(--l-border-2)] bg-[var(--l-bg)] p-6">
          <div className="mb-4 flex items-center gap-2">
            <HammerIcon className="h-4 w-4 text-[var(--l-purple-2)]" />
            <h4 className="type-subheading text-[var(--l-text)]">obra</h4>
            <span className="type-meta font-mono text-[var(--l-text-4)]">· процедуры</span>
          </div>
          {bundle.obra.length === 0 ? (
            <p className="type-body text-[var(--l-text-4)] italic">Не рекомендовано для этой среды</p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {bundle.obra.map((s) => (
                <span
                  key={s}
                  className={[
                    'type-mono rounded border',
                    'border-[var(--l-purple)]/20 bg-[var(--l-purple)]/10 px-2',
                    'py-1 font-mono text-[var(--l-purple-2)]',
                  ].join(' ')}
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="rounded-lg border border-[var(--l-border-2)] bg-[var(--l-bg)] p-6">
          <div className="mb-4 flex items-center gap-2">
            <BookOpenIcon className="h-4 w-4 text-[var(--l-blue)]" />
            <h4 className="type-subheading text-[var(--l-text)]">wondelai</h4>
            <span className="type-meta font-mono text-[var(--l-text-4)]">· принципы</span>
          </div>
          {bundle.wondelai.length === 0 ? (
            <p className="type-body text-[var(--l-text-4)] italic">Не рекомендовано для этой среды</p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {bundle.wondelai.map((s) => (
                <span
                  key={s}
                  className={[
                    'type-mono rounded border',
                    'border-[var(--l-blue)]/20 bg-[var(--l-blue)]/10 px-2',
                    'py-1 font-mono text-[var(--l-blue)]',
                  ].join(' ')}
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={[
          'mt-6 flex items-start',
          'gap-3 rounded-lg border',
          'border-dashed border-[var(--l-border-3)] bg-[var(--l-bg)]',
          'p-5',
        ].join(' ')}
      >
        <LightbulbIcon className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--l-yellow)]" />
        <p className="type-body leading-relaxed text-[var(--l-text-2)]">{bundle.rationale}</p>
      </div>
    </div>
  )
}

export function Bundles() {
  return (
    <section id="bundles" className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
      <SectionHeading
        num="03"
        kicker="Bundle-наборы"
        title={<>Один набор на каждую среду</>}
        subtitle="Рекомендованный срез для каждой платформы — что ставить, как ставить, и почему именно так."
      />
      <div className="mt-12">
        <ClientOnly fallback={<BundleCard bundle={BUNDLES[0]} />}>
          <BaseTabs.Root defaultValue="zai" className="block">
            <BaseTabs.List className="mb-px flex border-b border-[var(--l-border-2)]">
              {(Object.keys(ENV_LABELS) as Env[]).map((env) => (
                <BaseTabs.Tab
                  key={env}
                  value={env}
                  className={[
                    'type-body -mb-px cursor-pointer',
                    'border-b-2 border-transparent px-4',
                    'py-3 font-medium text-[var(--l-text-3)]',
                    'transition-colors data-[selected]:border-[var(--l-purple)] data-[selected]:text-[var(--l-text)]',
                  ].join(' ')}
                >
                  {ENV_LABELS[env]}
                </BaseTabs.Tab>
              ))}
            </BaseTabs.List>
            {BUNDLES.map((b) => (
              <BaseTabs.Panel key={b.env} value={b.env} className="pt-8">
                <BundleCard bundle={b} />
              </BaseTabs.Panel>
            ))}
          </BaseTabs.Root>
        </ClientOnly>
      </div>
    </section>
  )
}
