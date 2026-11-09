import { CircleIcon, CpuIcon, FileTextIcon } from './icons'
import { SectionHeading } from './SectionHeading'
import { CornerCrosses } from './CornerCrosses'

const ZAI_RUNTIME = ['LLM', 'VLM', 'TTS', 'ASR', 'img-gen', 'browser', 'charts', 'pdf', 'docx'] as const
const AGENTSKILLS_ORGS = ['obra', 'wondelai', 'mattpocock', 'cloudflare', 'google', 'JetBrains'] as const

export function ConceptExplainer() {
  return (
    <section id="concept" className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
      <SectionHeading
        num="01"
        kicker="Концепции"
        title={
          <>
            Две разные вещи, которые называют <span className="text-highlight">«скиллами»</span>
          </>
        }
        subtitle="Главный источник путаницы в этой области. Прочитайте сначала это."
      />
      {/* Bento: 7+5 split with corner crosses */}
      <div className="mt-12 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-12">
        {/* Z.ai Code — col-span-7 */}
        <div
          className={[
            'relative flex flex-col',
            'border border-dashed border-[var(--l-border-3)]',
            'bg-[var(--l-bg-1)] p-8 md:col-span-7',
          ].join(' ')}
        >
          <CornerCrosses className="text-[var(--l-text-4)]" />
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--l-purple)]/15">
              <CpuIcon className="h-5 w-5 text-[var(--l-purple-2)]" />
            </div>
            <div>
              <h3 className="type-subheading text-[var(--l-text)]">Z.ai Code · Skill tool</h3>
              <div className="type-meta mt-0.5 font-mono text-[var(--l-text-4)]">runtime capabilities</div>
            </div>
          </div>
          <p className="type-body-lg leading-relaxed text-[var(--l-text-2)]">
            <strong className={['text-[var(--l-text)]'].join(' ')}>Runtime-возможности.</strong> Фиксированный набор: LLM, VLM, TTS, ASR,
            генерация изображений, agent-browser, charts, docx, pdf. Вызывается через{' '}
            <code className="type-mono rounded bg-[var(--l-bg-2)] px-1.5 py-0.5 font-mono text-[var(--l-purple-2)]">
              Skill(command="LLM")
            </code>
            .
          </p>
          <div className="mt-6 border-t border-dashed border-[var(--l-border-3)] pt-6">
            <p className="type-body flex items-center gap-2 text-[var(--l-text-3)]">
              <CircleIcon className="h-3 w-3 flex-shrink-0 fill-[var(--l-red)] text-[var(--l-red)]" />
              Нельзя расширить в рантайме произвольными markdown-файлами.
            </p>
          </div>
          <div className="mt-6 mt-auto flex flex-wrap gap-1.5">
            {ZAI_RUNTIME.map((s) => (
              <span
                key={s}
                className={[
                  'type-mono rounded border',
                  'border-[var(--l-border)] bg-[var(--l-bg-2)] px-2',
                  'py-1 font-mono text-[var(--l-text-2)]',
                ].join(' ')}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* agentskills.io — col-span-5 */}
        <div
          className={[
            'relative flex flex-col',
            'border border-dashed border-[var(--l-border-3)]',
            'bg-[var(--l-bg-1)] p-8 md:col-span-5',
          ].join(' ')}
        >
          <CornerCrosses className="text-[var(--l-text-4)]" />
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--l-blue)]/15">
              <FileTextIcon className="h-5 w-5 text-[var(--l-blue)]" />
            </div>
            <div>
              <h3 className="type-subheading text-[var(--l-text)]">agentskills.io</h3>
              <div className="type-meta mt-0.5 font-mono text-[var(--l-text-4)]">SKILL.md format</div>
            </div>
          </div>
          <p className="type-body-lg leading-relaxed text-[var(--l-text-2)]">
            <strong className={['text-[var(--l-text)]'].join(' ')}>Markdown-инструкции.</strong> Используют Claude Code, Codex, Cursor,
            Opencode. Каждый файл говорит агенту <em>как себя вести</em> или <em>что знать</em>.
          </p>
          <div className="mt-6 border-t border-dashed border-[var(--l-border-3)] pt-6">
            <p className="type-body flex items-center gap-2 text-[var(--l-text-3)]">
              <CircleIcon className="h-3 w-3 flex-shrink-0 fill-[var(--l-green)] text-[var(--l-green)]" />
              Мост в Z.ai: <code className="type-mono font-mono">docs/skills/</code> + ссылка из{' '}
              <code className="type-mono font-mono">AGENTS.md</code>.
            </p>
          </div>
          <div className="mt-6 mt-auto flex flex-wrap gap-1.5">
            {AGENTSKILLS_ORGS.map((s) => (
              <span
                key={s}
                className={[
                  'type-mono rounded border',
                  'border-[var(--l-border)] bg-[var(--l-bg-2)] px-2',
                  'py-1 font-mono text-[var(--l-text-2)]',
                ].join(' ')}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
