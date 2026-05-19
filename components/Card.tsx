import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  /** Visual variant. `default` = white surface; `surface` = slate-50; `dark` = slate-900. */
  variant?: 'default' | 'surface' | 'dark'
  /** Compact padding (`p-5` instead of `p-8`). */
  compact?: boolean
}

/**
 * Reusable rounded-2xl bordered surface used across About sections.
 * Replaces the repeated `bg-white rounded-2xl p-8 border border-slate-200 shadow-sm` pattern.
 */
export default function Card({
  children,
  className = '',
  variant = 'default',
  compact = false,
}: CardProps) {
  const variantClasses = {
    default: 'bg-white border-slate-200 shadow-sm',
    surface: 'bg-slate-50 border-slate-200',
    dark: 'bg-white/5 border-white/10 backdrop-blur-sm',
  }[variant]
  const padding = compact ? 'p-5' : 'p-8'
  return (
    <div className={`rounded-2xl border ${padding} ${variantClasses} ${className}`}>
      {children}
    </div>
  )
}
