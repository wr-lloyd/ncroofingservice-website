'use client'

// Pam: a "leave a quick question" widget. It's NOT a live chat (we never
// pretend to be). It's a low-commitment alternative to the full /contact
// form — name, phone, one question, posted to /api/lead just like every
// other form on the site.

import { useState } from 'react'
import Link from 'next/link'
import { useHoneypot, HoneypotField } from '@/components/Honeypot'
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY } from '@/lib/site'

type Status = 'idle' | 'submitting' | 'sent' | 'error'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [question, setQuestion] = useState('')
  const honeypot = useHoneypot()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'estimate',
          name: name.trim(),
          phone: phone.trim(),
          description: question.trim(),
          notes: 'Submitted via Pam quick-question widget',
          website: honeypot.value,
          metadata: {
            source: 'pam-widget',
            timestamp: new Date().toISOString(),
          },
        }),
      })
      if (!response.ok) throw new Error('Send failed')
      setStatus('sent')
    } catch (err) {
      console.error('Pam widget submit failed:', err)
      setStatus('error')
    }
  }

  const resetAndClose = () => {
    setIsOpen(false)
    // Give the panel a beat to animate closed before resetting state.
    setTimeout(() => {
      setStatus('idle')
      setName('')
      setPhone('')
      setQuestion('')
    }, 200)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-[2px] shadow-2xl flex items-center justify-center transition-all hover:scale-110 ${
          isOpen ? 'bg-brand-black' : 'bg-brand-red hover:bg-brand-red-dark'
        }`}
        aria-label={isOpen ? 'Close question form' : 'Ask Pam a quick question'}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="sr-only">Ask a question</span>
          </>
        )}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="pam-widget-title"
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          <div className="bg-brand-black p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Pam</span>
              </div>
              <div>
                <div id="pam-widget-title" className="text-white font-semibold text-sm">
                  Have a quick question?
                </div>
                <div className="text-white/60 text-xs">
                  Pam from the office will text or call you back.
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50">
            {status === 'sent' ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-900 font-semibold mb-1">Thanks{name ? `, ${name.split(' ')[0]}` : ''}!</p>
                <p className="text-slate-600 text-sm mb-4">
                  We&apos;ll be in touch shortly during business hours.
                </p>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="text-sm font-medium text-brand-red hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <p className="text-xs text-slate-500">
                  Leave your name, number, and one question. This isn&apos;t a live chat — Pam will
                  follow up personally.
                </p>

                <div>
                  <label htmlFor="pam-name" className="sr-only">Name</label>
                  <input
                    id="pam-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                  />
                </div>

                <div>
                  <label htmlFor="pam-phone" className="sr-only">Phone</label>
                  <input
                    id="pam-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Phone number"
                    autoComplete="tel"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                  />
                </div>

                <div>
                  <label htmlFor="pam-question" className="sr-only">Question</label>
                  <textarea
                    id="pam-question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    rows={3}
                    placeholder="What can we help with?"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 resize-none"
                  />
                </div>

                <HoneypotField {...honeypot} />

                {status === 'error' && (
                  <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
                    Couldn&apos;t send your question. Please call{' '}
                    <a className="font-semibold underline" href={`tel:${OFFICE_PHONE}`}>
                      {OFFICE_PHONE_DISPLAY}
                    </a>
                    .
                  </div>
                )}

                <p className="text-[10px] leading-snug text-slate-500">
                  By sending, you agree we may contact you about your request by phone, text,
                  or email, including with automated technology. Msg &amp; data rates may apply.
                  Reply STOP to opt out. See our{' '}
                  <Link href="/privacy" className="underline hover:text-brand-red">
                    Privacy Policy
                  </Link>
                  .
                </p>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-2.5 bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-[2px] transition-colors shadow"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send to Pam'}
                </button>

                <p className="text-center text-xs text-slate-400 pt-1">
                  Need an answer now? Call{' '}
                  <a href={`tel:${OFFICE_PHONE}`} className="text-brand-red hover:underline">
                    {OFFICE_PHONE_DISPLAY}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
