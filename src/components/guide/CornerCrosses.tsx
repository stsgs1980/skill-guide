import { PlusIcon } from './icons'

/**
 * Blueprint-style corner crosses — decorative markers
 * at each corner of a card, like Figma frame handles.
 * Inspired by Ruixen Bento cards reference.
 */
export function CornerCrosses({ className = '' }: { className?: string }) {
  const positions = ['-top-3 -left-3', '-top-3 -right-3', '-bottom-3 -left-3', '-bottom-3 -right-3']
  return (
    <>
      {positions.map((pos, i) => (
        <span key={i} className={`absolute ${pos} z-10 ${className}`} aria-hidden>
          <PlusIcon className="h-4 w-4" strokeWidth={1} />
        </span>
      ))}
    </>
  )
}
