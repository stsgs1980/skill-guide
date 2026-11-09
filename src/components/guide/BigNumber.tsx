import { PlusIcon } from './icons'
import { NumberTicker } from './NumberTicker'

interface BigNumberProps {
  /** The digit(s) to display as hero */
  value: string
  /** If true, animate count-up from 0 on mount (design-kit #19) */
  animate?: boolean
  /** Small caption beneath the number */
  label: string
  /** Accent color for anchor points (CSS var) */
  accent?: string
  /** Optional sub-metrics shown as small annotations */
  annotations?: { value: string; label: string }[]
}

/**
 * Big number as graphical hero — inspired by technical layout references.
 * Features:
 * - Double-layer digit (gray back + white front) for depth
 * - Figma-style anchor points (blue squares) at corners
 * - Dimensional callouts with crosses
 * - Small annotation metrics attached
 */
export function BigNumber({ value, animate = false, label, accent = 'var(--l-purple-2)', annotations = [] }: BigNumberProps) {
  // If animate, parse to number for ticker; else render string as-is
  const numValue = animate ? parseInt(value, 10) : null
  const display = animate && numValue !== null && !isNaN(numValue) ? <NumberTicker to={numValue} duration={1600} /> : value
  return (
    <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
      {/* Top — label + dimension line */}
      <div className="flex items-center justify-between">
        <span className="type-meta font-mono text-[var(--l-text-4)]">{label}</span>
        <div className="flex items-center gap-1.5">
          <span className="h-px w-8" style={{ background: accent, opacity: 0.5 }} />
          <PlusIcon className="h-3 w-3" style={{ color: accent, opacity: 0.6 }} />
        </div>
      </div>

      {/* Center — giant number, centered, with DotPattern background (design-kit #2) */}
      <div
        className="relative my-4 flex flex-1 items-center justify-center"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1.1px, transparent 1.2px)',
          backgroundSize: '15px 15px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, #000 30%, transparent 75%)',
        }}
      >
        <span
          className="font-display relative leading-none font-bold tabular-nums select-none"
          style={{
            fontSize: 'clamp(7rem, 16vw, 11rem)',
            color: 'var(--l-text)',
            letterSpacing: '-0.06em',
            textShadow: '0 0 60px rgba(94, 106, 210, 0.35), 0 0 120px rgba(94, 106, 210, 0.15)',
          }}
        >
          {display}
        </span>

        {/* Anchor points — Figma-style accent squares at digit corners (stronger) */}
        {[
          { top: '5%', left: '5%' },
          { top: '5%', right: '5%' },
          { bottom: '5%', left: '5%' },
          { bottom: '5%', right: '5%' },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute flex h-2.5 w-2.5 items-center justify-center border-2"
            style={{
              ...pos,
              borderColor: accent,
              background: 'var(--l-bg)',
            }}
            aria-hidden
          >
            <span className="h-0.5 w-0.5" style={{ background: accent }} />
          </span>
        ))}
      </div>

      {/* Bottom — annotations as small metrics, centered columns */}
      {annotations.length > 0 && (
        <div className="grid grid-cols-3 gap-3 border-t border-dashed border-[var(--l-border-3)] pt-4">
          {annotations.map((a, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className={['type-mono font-mono text-lg', 'leading-none font-semibold text-[var(--l-text)]', 'tabular-nums'].join(' ')}>
                {a.value}
              </div>
              <div className="type-meta mt-1.5 font-mono text-[var(--l-text-4)]">{a.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
