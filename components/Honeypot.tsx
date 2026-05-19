'use client'

import { useState } from 'react'

/**
 * Honeypot anti-spam field.
 *
 * Bots auto-fill input fields with names like "website", "url" or "homepage".
 * The field is visually hidden from users (off-screen, not display:none — bots
 * skip display:none) and tabIndex=-1 so keyboard users skip past it.
 *
 * On submit, include `value` as the `website` property on your /api/lead
 * payload. The API silently discards any submission with a non-empty `website`.
 */
export function useHoneypot() {
  const [value, setValue] = useState('')

  const fieldProps = {
    type: 'text' as const,
    name: 'website',
    autoComplete: 'off',
    tabIndex: -1,
    'aria-hidden': true,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
  }

  return { value, fieldProps }
}

export function HoneypotField({ fieldProps }: { fieldProps: ReturnType<typeof useHoneypot>['fieldProps'] }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <label htmlFor="website-hp">Website (leave blank)</label>
      <input id="website-hp" {...fieldProps} />
    </div>
  )
}
