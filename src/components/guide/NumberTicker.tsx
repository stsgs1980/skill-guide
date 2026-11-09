'use client'

import { useEffect, useState } from 'react'

interface NumberTickerProps {
  to: number
  duration?: number
  className?: string
  /** Render the formatted number (default: plain) */
  format?: (n: number) => string
}

/**
 * NumberTicker (design-kit #19) — counts up from 0 to `to` on mount.
 * Uses requestAnimationFrame with cubic ease-out.
 *
 * Initial state is 0 (matches server render → no hydration mismatch),
 * then animates to `to` via rAF.
 */
export function NumberTicker({ to, duration = 1400, className, format }: NumberTickerProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(to * eased))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])

  const display = format ? format(value) : String(value)
  return <span className={className}>{display}</span>
}
