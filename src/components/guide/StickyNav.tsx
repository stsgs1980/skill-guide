import { CommandIcon, TreePineIcon } from './icons'

const NAV_ITEMS = [
  { href: '#concept', label: 'Концепции', num: '01' },
  { href: '#tier', label: 'Тир-ранг', num: '02' },
  { href: '#bundles', label: 'Bundle', num: '03' },
  { href: '#obra', label: 'obra', num: '04' },
  { href: '#wondelai', label: 'wondelai', num: '05' },
  { href: '#tree', label: 'Решения', num: '06' },
  { href: '#checklist', label: 'Чек-лист', num: '07' },
  { href: '#meta', label: 'Мета', num: '08' },
] as const

export function StickyNav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-[var(--l-border-2)] bg-[var(--l-bg)]/80 backdrop-blur-xl"
      aria-label="Основная навигация"
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-6 px-6 md:px-10">
        <a href="#" className="group flex flex-shrink-0 items-center gap-2.5">
          <div
            className={[
              'flex h-6 w-6',
              'items-center justify-center rounded-md',
              'bg-gradient-to-br from-[var(--l-purple)] to-[var(--l-purple-2)]',
            ].join(' ')}
          >
            <TreePineIcon className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="type-body hidden font-semibold text-[var(--l-text)] sm:block">Путеводитель по скиллам</span>
        </a>
        <nav className="scrollbar-none flex max-w-2xl flex-1 items-center justify-center gap-1 overflow-x-auto">
          {NAV_ITEMS.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className={[
                'type-mono flex items-center',
                'gap-1.5 rounded-md px-2.5',
                'py-1.5 font-mono whitespace-nowrap',
                'text-[var(--l-text-3)] transition-colors hover:bg-white/[0.04]',
                'hover:text-[var(--l-text)]',
              ].join(' ')}
            >
              <span className="text-[var(--l-text-4)]">{i.num}</span>
              <span>{i.label}</span>
            </a>
          ))}
        </nav>
        <div className="hidden flex-shrink-0 items-center gap-1.5 text-[var(--l-text-4)] md:flex">
          <kbd
            className={[
              'type-mono inline-flex items-center',
              'gap-0.5 rounded border',
              'border-[var(--l-border-2)] bg-[var(--l-bg-1)] px-2',
              'py-1 font-mono text-[var(--l-text-3)]',
            ].join(' ')}
          >
            <CommandIcon className="h-3 w-3" />K
          </kbd>
        </div>
      </div>
    </nav>
  )
}
