import type { ReactNode } from 'react'
import { HashIcon } from './icons'

interface SectionHeadingProps {
  num: string
  kicker: string
  title: ReactNode
  subtitle?: string
}

export function SectionHeading({ num, kicker, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-3 md:border-l md:border-[var(--l-border-3)] md:pl-6">
        <div className="mb-2 flex items-baseline gap-2">
          <HashIcon className="h-3.5 w-3.5 text-[var(--l-text-4)]" />
          <span className="type-mono font-mono text-base font-semibold text-[var(--l-purple-2)]">v{num}.0</span>
        </div>
        <div className="type-meta font-mono text-[var(--l-text-3)]">{kicker}</div>
      </div>
      <div className="md:col-span-9">
        <h2
          className={[
            'font-display type-heading bg-gradient-to-r',
            'from-[var(--l-text)] to-[var(--l-text-3)] bg-clip-text',
            'text-transparent',
          ].join(' ')}
        >
          {title}
        </h2>
        {subtitle && <p className="type-body-lg mt-5 max-w-2xl text-[var(--l-text-2)]">{subtitle}</p>}
      </div>
    </div>
  )
}
