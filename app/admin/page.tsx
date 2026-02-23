'use client'

import { useState, useEffect, useCallback } from 'react'

interface Submission {
  id: string
  type: 'storm-check' | 'inspection'
  address: string
  zip: string
  city: string
  county?: string
  citySource?: string
  state?: string
  reason?: string
  name?: string
  email?: string
  phone?: string
  notes?: string
  stormResults?: {
    stormCount: number
    overallRisk: string
  }
  timestamp: string
}

type FilterType = 'all' | 'storm-check' | 'inspection'

const reasonLabels: Record<string, string> = {
  'free-inspection': 'Free Inspection',
  'repair-estimate': 'Repair Estimate',
  'replacement-estimate': 'Replacement Estimate',
  'storm-damage': 'Storm Damage',
  'insurance-help': 'Insurance Help',
  'other': 'Other',
}

const riskColors: Record<string, string> = {
  low: 'bg-green-100 text-green-700',
  moderate: 'bg-yellow-100 text-yellow-700',
  high: 'bg-orange-100 text-orange-700',
  severe: 'bg-red-100 text-red-700',
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<FilterType>('all')
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())
  
  const fetchSubmissions = useCallback(async () => {
    try {
      const response = await fetch('/api/submissions')
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      setSubmissions(data.submissions || [])
      setLastRefresh(new Date())
      setError(null)
    } catch (err) {
      console.error('Error fetching submissions:', err)
      setError('Failed to load submissions')
    } finally {
      setIsLoading(false)
    }
  }, [])
  
  useEffect(() => {
    fetchSubmissions()
    const interval = setInterval(fetchSubmissions, 30000)
    return () => clearInterval(interval)
  }, [fetchSubmissions])
  
  const filteredSubmissions = submissions.filter(s => {
    if (filter === 'all') return true
    return s.type === filter
  })
  
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    })
  }
  
  const stormCheckCount = submissions.filter(s => s.type === 'storm-check').length
  const inspectionCount = submissions.filter(s => s.type === 'inspection').length

  return (
    <main className="pt-20 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900">Admin Dashboard</h1>
              <p className="text-slate-500 mt-1">
                View all submissions • Auto-refreshes every 30s
              </p>
            </div>
            <button
              onClick={fetchSubmissions}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Total Submissions</p>
                <p className="text-3xl font-black text-slate-900">{submissions.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Storm Checks</p>
                <p className="text-3xl font-black text-slate-900">{stormCheckCount}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Inspection Requests</p>
                <p className="text-3xl font-black text-slate-900">{inspectionCount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 px-4 py-3 flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  filter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All ({submissions.length})
              </button>
              <button
                onClick={() => setFilter('storm-check')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  filter === 'storm-check'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Storm Checks ({stormCheckCount})
              </button>
              <button
                onClick={() => setFilter('inspection')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  filter === 'inspection'
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Inspections ({inspectionCount})
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Last updated: {formatDate(lastRefresh.toISOString())}
            </p>
          </div>

          {/* Table */}
          {isLoading ? (
            <div className="p-12 text-center">
              <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-500">Loading submissions...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-red-600 font-medium">{error}</p>
              <button
                onClick={fetchSubmissions}
                className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-slate-500 font-medium">No submissions yet</p>
              <p className="text-slate-400 text-sm mt-1">Submissions will appear here when users use the forms.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Address</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">City</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Zip</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Details</th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-slate-600 whitespace-nowrap">
                        {formatDate(submission.timestamp)}
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                          submission.type === 'storm-check'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {submission.type === 'storm-check' ? (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ) : (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          )}
                          {submission.type === 'storm-check' ? 'Storm' : 'Inspect'}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-900 font-medium max-w-xs truncate">
                        {submission.address || '-'}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 whitespace-nowrap">
                        {submission.city || '-'}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600 whitespace-nowrap">
                        {submission.zip || '-'}
                      </td>
                      <td className="px-4 py-4">
                        {submission.type === 'storm-check' && submission.stormResults ? (
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${riskColors[submission.stormResults.overallRisk] || 'bg-slate-100 text-slate-600'}`}>
                            {submission.stormResults.overallRisk.toUpperCase()} ({submission.stormResults.stormCount} storms)
                          </span>
                        ) : submission.reason ? (
                          <span className="text-sm text-slate-600">
                            {reasonLabels[submission.reason] || submission.reason}
                          </span>
                        ) : (
                          <span className="text-sm text-slate-400">-</span>
                        )}
                      </td>
                      <td className="px-4 py-4">
                        {submission.name ? (
                          <div className="text-sm">
                            <p className="font-medium text-slate-900">{submission.name}</p>
                            {submission.phone && (
                              <a href={`tel:${submission.phone}`} className="text-blue-600 hover:underline">
                                {submission.phone}
                              </a>
                            )}
                            {submission.email && (
                              <p className="text-slate-500 truncate max-w-[150px]">{submission.email}</p>
                            )}
                          </div>
                        ) : (
                          <span className="text-sm text-slate-400">No contact</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
