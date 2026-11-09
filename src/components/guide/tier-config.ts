// Shared UI helpers for guide components.
import type { Tier } from '@/lib/data/types'

export const tierConfig: Record<
  Tier,
  {
    label: string
    labelRu: string
    dot: string
    text: string
    bg: string
    border: string
  }
> = {
  green: {
    label: 'Trusted',
    labelRu: 'Доверие',
    dot: 'bg-[var(--l-green)]',
    text: 'text-[var(--l-green)]',
    bg: 'bg-[var(--l-green)]/10',
    border: 'border-[var(--l-green)]/30',
  },
  amber: {
    label: 'Verify',
    labelRu: 'Проверять',
    dot: 'bg-[var(--l-yellow)]',
    text: 'text-[var(--l-yellow)]',
    bg: 'bg-[var(--l-yellow)]/10',
    border: 'border-[var(--l-yellow)]/30',
  },
  red: {
    label: 'Suspicious',
    labelRu: 'Подозрение',
    dot: 'bg-[var(--l-red)]',
    text: 'text-[var(--l-red)]',
    bg: 'bg-[var(--l-red)]/10',
    border: 'border-[var(--l-red)]/30',
  },
}

export const fitLabel = (n: number): string => ['Мимо', 'На грани', 'Хорошо', 'Отлично'][n] || 'Мимо'

export const fitColor = (n: number): string =>
  [
    'text-[var(--l-text-4)]', // 0 Мимо — серый
    'text-[var(--l-orange)]', // 1 На грани — оранжевый (опасно)
    'text-[var(--l-blue)]', // 2 Хорошо — синий (пойдёт)
    'text-[var(--l-green)]', // 3 Отлично — зелёный (лучшее)
  ][n] || 'text-[var(--l-text-4)]'
