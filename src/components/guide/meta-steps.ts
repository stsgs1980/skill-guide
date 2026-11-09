import type { ComponentType } from 'react'
import { BrainIcon, BugIcon, CheckCircleIcon, ListChecksIcon, PaletteIcon, TypeIcon } from './icons'

interface IconProps {
  className?: string
}

export interface MetaStep {
  skill: string
  source: 'obra' | 'wondelai'
  icon: ComponentType<IconProps>
  title: string
  phase: string
  before?: string
  after: string
  evidence: string[]
}

export const META_STEPS: MetaStep[] = [
  {
    skill: 'brainstorming',
    source: 'obra',
    icon: BrainIcon,
    title: 'Сначала спросили — чего пользователь хочет на самом деле',
    phase: 'Phase 0 · Look Before You Ask',
    after:
      'Извлекли из трёх сообщений: (1) глубокий анализ 15 starred-репо, (2) конкретные bundle для Z.ai/Opencode/WebStorm, (3) «wow» — показать скиллы в действии.',
    evidence: [
      'Запустили 2 параллельных subagent: один по 15 репо, второй по 21 навыку',
      '«Look Before You Ask» — сначала прочитали README и skills.wondel.ai',
      'Не угадывали — скрапили реальные star/fork/contributor числа',
    ],
  },
  {
    skill: 'systematic-debugging',
    source: 'obra',
    icon: BugIcon,
    title: 'Получили критику: 3 ошибки. Iron Law — никаких фиксов без root cause',
    phase: 'Phase 1 · Root Cause Investigation',
    before: 'Radix вместо Base · Английский вместо русского · emerald/zinc = нейрослоп · Нет «wow» демонстрации',
    after:
      'Root cause каждой ошибки: (1) действовал по дефолт-инструкции вместо того чтобы услышать «Base»; (2) не идентифицировал языковую аудиторию; (3) взял безопасную палитру вместо смелого решения; (4) описал скиллы вместо того чтобы показать их в работе.',
    evidence: [
      'Iron Law выполнен: root cause каждой ошибки записан ДО фикса',
      'Phase 2-3: фикс-план по каждому root cause',
      'Phase 4: верификация через agent-browser после фикса',
    ],
  },
  {
    skill: 'refactoring-ui',
    source: 'wondelai',
    icon: PaletteIcon,
    title: 'Палитра v1 → v2: editorial bone/ink → Linear dark/purple/green',
    phase: 'Grayscale-first workflow · Constrained scales',
    before: 'Bone cream #F2EDE0 + warm ink + vermillion — editorial print, отсылка к книгам',
    after:
      'Linear dark: #08090a bg + #5e6ad2 purple + #26d07c green + #f2c94c yellow + #eb5757 red. Glow gradient на hero, dotted grid background, subtle film grain.',
    evidence: [
      'Принцип «grayscale-first»: сначала иерархия через text-2/3/4, потом purple/green/yellow для статусов',
      'Constrained scale: 4 уровня bg (bg/bg-1/bg-2/bg-3), 4 уровня text',
      'Consistent elevation: без теней, только 1px borders с low-alpha white',
      'Glow эффекты: radial-gradient purple на hero',
    ],
  },
  {
    skill: 'ux-heuristics',
    source: 'wondelai',
    icon: ListChecksIcon,
    title: 'Nielsen #1 Visibility of system status → sticky nav с §-номерами',
    phase: 'Heuristic audit',
    after: 'Sticky nav показывает §01-§08 с command-bar эстетикой. + ⌘K hint справа. Применены 5 эвристик:',
    evidence: [
      '#1 Visibility: sticky nav + pulsing green dot в hero (live indicator)',
      '#4 Consistency: все секции используют font-mono для метаданных + §-нумерация',
      '#6 Recognition over recall: status dots вместо символов',
      '#7 Flexibility: фильтры тиров + табы сред + раскрываемые карточки',
      '#8 Aesthetic: Linear dark theme, не дефолтный shadcn',
    ],
  },
  {
    skill: 'web-typography',
    source: 'wondelai',
    icon: TypeIcon,
    title: 'Шкала: Fraunces serif → Inter Tight (display) + Inter (body) + JetBrains Mono',
    phase: 'Typographic measurements · Hierarchy',
    after: 'Три семейства, каждое со своей ролью. Перешли от serif-книжности к sans-технологичности.',
    evidence: [
      'Inter Tight — для заголовков, letter-spacing -0.022em, font-feature ss01/cv11',
      "JetBrains Mono — для всех метаданных, чисел, slug'ов, tabular-nums",
      'Inter — для body-текста, antialiased, optimizeLegibility',
      'Масштаб: 64px заголовки → 13-15px body → 10-11px метаданные (tighter rhythm)',
      'Gradient text на «AI-агентов» в h1 — Linear-style accent',
    ],
  },
  {
    skill: 'verification-before-completion',
    source: 'obra',
    icon: CheckCircleIcon,
    title: 'Перед «готово»: agent-browser проверил 7 критериев',
    phase: 'Iron Law: evidence before assertions',
    after: 'Никаких «должно работать» — запустили browser, проверили каждое:',
    evidence: [
      'Страница рендерится, 0 ошибок в консоли',
      'Sticky nav (top: 0px) + ⌘K hint',
      'Footer pushed naturally (body > viewport)',
      'Фильтры тиров работают (Trusted 10 / Verify 3 / Suspicious 2)',
      'Base UI Tabs переключаются (Z.ai/Opencode/WebStorm)',
      'Base UI Accordion раскрывается (metadata + flags + fit)',
      'Mobile 375×667: нет горизонтального overflow',
    ],
  },
]
