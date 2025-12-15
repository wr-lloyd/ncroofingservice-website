'use client'

import { useState } from 'react'

interface ChatMessage {
  from: string
  text: string
  options?: string[]
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      from: 'bot', 
      text: "👋 Hi! I'm here to help with your roofing needs. I'm Randall with B&C Roofing. Would you like to:",
      options: ['Schedule Free Inspection', 'Get Repair Quote', 'Report Emergency', 'Ask a Question']
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleOptionClick = (option: string) => {
    setMessages([
      ...messages,
      { from: 'user', text: option },
      { 
        from: 'bot', 
        text: option === 'Report Emergency' 
          ? "🚨 For emergencies, please call us immediately at (919) 475-8841. We're available 24/7 for urgent roof issues!"
          : option === 'Schedule Free Inspection'
          ? "Great! We offer free roof inspections throughout the Triangle area. What city are you located in?"
          : option === 'Get Repair Quote'
          ? "I'd be happy to help! Can you describe the issue you're experiencing with your roof?"
          : "I'd be happy to help! What would you like to know about our roofing services? We're GAF, Owens Corning, and CertainTeed certified."
      }
    ])
  }

  const handleSend = () => {
    if (!inputValue.trim()) return
    setMessages([
      ...messages,
      { from: 'user', text: inputValue },
      { 
        from: 'bot', 
        text: "Thanks for reaching out! We'll get back to you shortly. For faster service, call us at (919) 475-8841 or email bandc@ncroofingservice.com."
      }
    ])
    setInputValue('')
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 ${
          isOpen ? 'bg-slate-700' : 'bg-blue-600 hover:bg-blue-700'
        }`}
        aria-label="Chat with us"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-pulse">
              1
            </span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-slate-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B&C</span>
              </div>
              <div>
                <div className="text-white font-semibold">B&C Roofing & Repair</div>
                <div className="text-blue-200 text-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Online • Rougemont, NC
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${msg.from === 'user' ? 'order-2' : ''}`}>
                  <div className={`rounded-2xl px-4 py-2 ${
                    msg.from === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-slate-800 text-slate-200 rounded-bl-md'
                  }`}>
                    {msg.text}
                  </div>
                  {'options' in msg && msg.options && (
                    <div className="mt-2 space-y-2">
                      {msg.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left px-4 py-2 bg-slate-800 hover:bg-slate-700 text-blue-400 rounded-lg text-sm transition-colors border border-slate-700"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-slate-800 border border-white/10 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-center text-xs text-slate-500 mt-2">
              Or call <a href="tel:+19194758841" className="text-blue-400 hover:underline">(919) 475-8841</a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
