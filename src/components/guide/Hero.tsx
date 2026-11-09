import { ArrowRightIcon, SparklesIcon } from './icons'
import { CornerCrosses } from './CornerCrosses'
import { BigNumber } from './BigNumber'

export function Hero() {
  return (
    <section
      className={['linear-glow progressive-blur relative', 'divide-double overflow-hidden border-b', 'border-[var(--l-border-2)]'].join(
        ' ',
      )}
    >
      <div className="linear-grid absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        {/* Top status bar */}
        <div
          className={[
            'type-meta mb-8 flex',
            'items-center gap-3 border-b',
            'border-dashed border-[var(--l-border-3)] pb-4',
            'font-mono text-[var(--l-text-3)]',
          ].join(' ')}
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--l-green)]" />
          <span>Глубокий анализ GitHub stars</span>
          <span className="text-[var(--l-text-4)]">·</span>
          <span className="text-[var(--l-text-4)]">Ноябрь 2026</span>
          <span
            className={[
              'ml-auto hidden items-center',
              'gap-1.5 rounded border',
              'border-[var(--l-purple)]/30 bg-[var(--l-purple)]/10 px-2',
              'py-0.5 text-[var(--l-purple-2)] md:inline-flex',
            ].join(' ')}
          >
            <SparklesIcon className="h-3 w-3" />
            <span>v7 · Bento grid</span>
          </span>
        </div>

        {/* Bento grid: 6 cols, headline + big number (no duplicate metrics) */}
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {/* Headline — col-span-4, row-span-2 */}
          <div
            className={[
              'relative flex flex-col',
              'justify-between border border-dashed',
              'border-[var(--l-border-3)] bg-[var(--l-bg-1)]/60 p-10',
              'md:p-14 lg:col-span-4 lg:row-span-2',
            ].join(' ')}
          >
            <CornerCrosses className="text-[var(--l-text-4)]" />
            <div>
              <h1 className="font-display type-display text-[var(--l-text)]">
                Какие скиллы для
                <br />
                <span className={['bg-gradient-to-r from-white to-[var(--l-text-3)]', 'bg-clip-text text-transparent'].join(' ')}>
                  AI-агентов
                </span>{' '}
                реально хорошие?
              </h1>
              <p className="type-body-lg mt-8 max-w-xl text-[var(--l-text-2)]">
                Проверенный анализ пятнадцати starred-репозиториев на GitHub — тир-ранжирование по содержанию, а не по звёздам — с готовым
                набором для Z.ai Code, Opencode и WebStorm.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#tier"
                className={[
                  'type-mono inline-flex items-center',
                  'gap-2 rounded-full bg-white',
                  'px-5 py-2.5 font-mono',
                  'font-medium text-[var(--l-bg)] transition-opacity',
                  'hover:opacity-90',
                ].join(' ')}
              >
                <span>К тир-ранжированию</span>
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Big number "15" — col-span-2, row-span-2, with annotations (21/3/2 here, no duplicate cards) */}
          <div
            className={[
              'relative overflow-hidden border',
              'border-dashed border-[var(--l-border-3)] bg-[var(--l-bg-1)]',
              'lg:col-span-2 lg:row-span-2',
            ].join(' ')}
          >
            <CornerCrosses className="text-[var(--l-text-4)]" />
            <BigNumber
              value="15"
              animate
              label="Репозиториев проанализировано"
              accent="var(--l-purple-2)"
              annotations={[
                { value: '21', label: 'навык' },
                { value: '3', label: 'среды' },
                { value: '2', label: 'подозр.' },
              ]}
            />
          </div>

          {/* Method — col-span-4 */}
          <div
            className={['relative border border-dashed', 'border-[var(--l-border-3)] bg-[var(--l-bg-1)]/30 p-6', 'lg:col-span-4'].join(' ')}
          >
            <CornerCrosses className="text-[var(--l-text-4)]" />
            <div className="type-meta mb-2 font-mono text-[var(--l-purple-2)]">Метод</div>
            <p className="type-body text-[var(--l-text-2)]">
              Глубокий scraping через agent-browser + параллельные subagent&rsquo;ы. Не угадывали — собирали реальные числа.
            </p>
          </div>

          {/* Stack — col-span-2 */}
          <div
            className={['relative border border-dashed', 'border-[var(--l-border-3)] bg-[var(--l-bg-1)]/30 p-6', 'lg:col-span-2'].join(' ')}
          >
            <CornerCrosses className="text-[var(--l-text-4)]" />
            <div className="type-meta mb-2 font-mono text-[var(--l-green)]">Stack</div>
            <p className={['type-body text-[var(--l-text-2)]'].join(' ')}>Next.js 16 · Base UI · Inter Tight · Linear-inspired dark.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
