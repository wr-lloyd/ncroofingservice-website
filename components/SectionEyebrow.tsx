import type { ReactNode } from 'react'

interface SectionEyebrowProps {
  eyebrow: string
  title: string
  subtitle?: ReactNode
  align?: 'left' | 'center'
  invert?: boolean
  className?: string
}

/**
 * Standard section header used across About: an uppercase brand-red eyebrow,
 * a large heading, and an optional supporting paragraph. Use `invert` on
 * dark sections so heading + subtitle invert to white/slate-300.
 */
export default function SectionEyebrow({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  invert = false,
  className = '',
}: SectionEyebrowProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const headingColor = invert ? 'text-white' : 'text-brand-black'
  const subtitleColor = invert ? 'text-slate-300' : 'text-slate-600'
  return (
    <div className={`mb-12 ${alignClasses} ${className}`}>
      <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
        {eyebrow}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold mt-2 mb-4 ${headingColor}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${subtitleColor}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
