import { HeartIcon, Link2Icon, TreePineIcon } from './icons'

const SOURCES = [
  { href: 'https://github.com/stsgs1980?tab=stars', label: 'GitHub stars @stsgs1980' },
  { href: 'https://github.com/obra/superpowers', label: 'obra/superpowers' },
  { href: 'https://github.com/wondelai/skills', label: 'wondelai/skills' },
  { href: 'https://skills.wondel.ai/skills/code/', label: 'skills.wondel.ai' },
] as const

export function Footer() {
  return (
    <footer className="border-t-2 border-[var(--l-border-3)] bg-[var(--l-bg)]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div
                className={[
                  'flex h-6 w-6',
                  'items-center justify-center rounded-md',
                  'bg-gradient-to-br from-[var(--l-purple)] to-[var(--l-purple-2)]',
                ].join(' ')}
              >
                <TreePineIcon className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="type-subheading text-[var(--l-text)]">Путеводитель по скиллам</span>
            </div>
            <p className="type-body leading-relaxed text-[var(--l-text-3)]">
              Проверенный анализ 15 starred-репозиториев на GitHub с bundle-наборами для Z.ai Code, Opencode и WebStorm.
            </p>
          </div>
          <div>
            <div className="type-meta mb-4 font-mono text-[var(--l-text-2)]">Источники</div>
            <ul className="type-body space-y-2.5 text-[var(--l-text-3)]">
              {SOURCES.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--l-purple-2)]"
                  >
                    <Link2Icon className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="type-meta mb-4 font-mono text-[var(--l-text-2)]">Загружено в проект</div>
            <p className="type-body leading-relaxed text-[var(--l-text-3)]">
              См.{' '}
              <code className="type-mono rounded bg-[var(--l-bg-2)] px-1.5 py-0.5 font-mono text-[var(--l-purple-2)]">
                docs/skills/README.md
              </code>{' '}
              — манифест obra + wondelai навыков.
            </p>
          </div>
        </div>
        <div
          className={[
            'mt-12 flex flex-wrap',
            'items-center justify-between gap-4',
            'border-t border-dashed border-[var(--l-border-3)]',
            'pt-6',
          ].join(' ')}
        >
          <p className="type-mono flex items-center gap-2 font-mono text-[var(--l-text-4)]">
            <HeartIcon className={['h-3.5 w-3.5 text-[var(--l-red)]'].join(' ')} /> Z.ai Code · agent-browser · LLM · Base UI ·
            Linear-inspired
          </p>
          <p className="type-mono font-mono text-[var(--l-text-4)]">v3.0 · Nov 2026</p>
        </div>
      </div>
    </footer>
  )
}
