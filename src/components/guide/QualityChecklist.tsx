import { SectionHeading } from './SectionHeading'
import { CornerCrosses } from './CornerCrosses'

const ITEMS = [
  {
    q: 'Кто автор?',
    good: 'Известный разработчик с историей или официальная орга',
    bad: 'Анонимный аккаунт, маркетинговый handle',
  },
  {
    q: 'Звёзды vs контрибьюторы',
    good: 'Пропорция адекватна (314k / 14 контриб.)',
    bad: '147k / 1 автор = аномалия',
  },
  {
    q: 'Evals или tests?',
    good: 'Настоящие evals/ или tests/ со сценариями',
    bad: 'Нет тестов, нет evals',
  },
  {
    q: 'Описание в SKILL.md',
    good: 'Измеримое, с границами и примерами',
    bad: 'Чистые прилагательные («pro», «ultimate»)',
  },
  { q: 'Star-history chart?', good: 'Отсутствует', bad: 'Проминентно показан (маркетинг)' },
  {
    q: 'Имя репозитория',
    good: 'Нейтральное или привязано к автору',
    bad: 'SEO-ключевик (pro-max, tons-of)',
  },
  { q: 'Последний коммит', good: 'Недавний, активная поддержка', bad: 'Протух 6+ месяцев' },
  {
    q: 'Routing-таблица',
    good: '«Симптом → навык» есть в README или на сайте',
    bad: 'Только список файлов без маршрутизации',
  },
  {
    q: 'Совместимость сред',
    good: 'Указаны Claude Code / Codex / Cursor / Opencode',
    bad: 'Только одна среда, без документации',
  },
] as const

export function QualityChecklist() {
  return (
    <section id="checklist" className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
      <SectionHeading
        num="07"
        kicker="Чек-лист качества"
        title={<>9 вопросов для проверки</>}
        subtitle="Используйте на ЛЮБОМ skill-репо. Занимает 2 минуты."
      />
      {/* Bento grid — 3 cols, even fill, no orphan cards */}
      <div className="bento-grid mt-12 grid grid-cols-1 items-stretch gap-4 md:grid-cols-3">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className={[
              'relative rounded-xl border',
              'border-dashed border-[var(--l-border-3)] bg-[var(--l-bg-1)]',
              'p-6 transition-colors hover:border-[var(--l-text-3)]',
            ].join(' ')}
          >
            <CornerCrosses className="text-[var(--l-text-4)]" />
            <div className="flex items-start gap-4">
              <div
                className={[
                  'type-mono flex h-10',
                  'w-10 flex-shrink-0 items-center',
                  'justify-center rounded-lg border',
                  'border-[var(--l-border-3)] bg-[var(--l-bg-3)] font-mono',
                  'text-base font-semibold text-[var(--l-text-2)]',
                  'tabular-nums',
                ].join(' ')}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <h4 className="type-subheading text-[var(--l-text)]">{item.q}</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="type-body flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--l-green)]" />
                    <span className="text-[var(--l-text-2)]">{item.good}</span>
                  </div>
                  <div className="type-body flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--l-red)]" />
                    <span className="text-[var(--l-text-2)]">{item.bad}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
