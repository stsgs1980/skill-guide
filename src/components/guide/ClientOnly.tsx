'use client'

import { useSyncExternalStore, type ReactNode } from 'react'

const emptySubscribe = () => () => {}

/**
 * Renders children only after client mount.
 * Server and first client render both show `fallback`,
 * so there's no hydration mismatch.
 *
 * Uses `useSyncExternalStore` (React 18+) — the recommended
 * pattern for client-only rendering without hydration errors.
 *
 * Used for Base UI components that generate useId-based IDs
 * which differ between SSR and CSR.
 */
export function ClientOnly({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true, // client snapshot
    () => false, // server snapshot
  )
  return mounted ? <>{children}</> : <>{fallback ?? null}</>
}
