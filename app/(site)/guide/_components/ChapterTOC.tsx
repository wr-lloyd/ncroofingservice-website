'use client'

import { useEffect, useState } from 'react'

export interface TocItem {
  id: string
  label: string
}

interface ChapterTOCProps {
  items: TocItem[]
  /** "mobile" = horizontal sticky strip. "desktop" = right-rail sticky list. */
  variant: 'mobile' | 'desktop'
}

/**
 * Table-of-contents for a chapter. Two variants share the same active-item
 * tracking logic so they highlight the section closest to the top of the
 * viewport via IntersectionObserver.
 */
export default function ChapterTOC({ items, variant }: ChapterTOCProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null)

  useEffect(() => {
    if (typeof window === 'undefined' || items.length === 0) return

    const elements = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      {
        rootMargin: '-96px 0px -50% 0px',
        threshold: 0,
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  if (variant === 'mobile') {
    return (
      <nav
        aria-label="In this chapter"
        className="lg:hidden bg-white border-y border-slate-200 sticky top-20 z-30"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex gap-3 overflow-x-auto whitespace-nowrap text-sm">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 flex-shrink-0 self-center">
            In this chapter
          </span>
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={`flex-shrink-0 px-2 py-1 rounded font-medium transition-colors ${
                activeId === i.id
                  ? 'text-brand-red'
                  : 'text-slate-600 hover:text-brand-black'
              }`}
            >
              {i.label}
            </a>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <aside className="hidden lg:block" aria-label="In this chapter">
      <div className="sticky top-28">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
          In this chapter
        </div>
        <ul className="space-y-2 border-l border-slate-200">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className={`block pl-4 py-1 -ml-px border-l-2 text-sm transition-colors ${
                  activeId === i.id
                    ? 'border-brand-red text-brand-red font-semibold'
                    : 'border-transparent text-slate-600 hover:text-brand-black'
                }`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
