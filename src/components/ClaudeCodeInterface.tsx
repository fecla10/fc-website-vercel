'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface SystemMessage {
  id: string
  title: string
  steps: string[]
  expanded: boolean
}

export default function ClaudeCodeInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [systemMessages] = useState<SystemMessage[]>([
    {
      id: '1',
      title: 'Connection successful',
      steps: [
        'Establishing connection to Francesca',
        'Loading knowledge base',
        'Initializing conversation context'
      ],
      expanded: false
    },
    {
      id: '2',
      title: 'Assistant ready',
      steps: [
        'Francesca is online',
        'Ready to answer questions about Felipe',
        'Context loaded successfully'
      ],
      expanded: false
    }
  ])
  const [expandedSystem, setExpandedSystem] = useState<Set<string>>(new Set())
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const toggleSystemMessage = (id: string) => {
    setExpandedSystem(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input.trim() }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.text,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error generating response:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I'm sorry, I encountered an error while processing your question. Please try again.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
    }
  }, [input])

  return (
    <div className="claude-code-interface">
      {/* System Messages */}
      <div className="space-y-0">
        {systemMessages.map((systemMsg) => (
          <div key={systemMsg.id} className="row row--system">
            <div 
              className="glyph accordion-toggle cursor-pointer select-none claude-icon"
              role="button"
              tabIndex={0}
              onClick={() => toggleSystemMessage(systemMsg.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleSystemMessage(systemMsg.id)
                }
              }}
              aria-expanded={expandedSystem.has(systemMsg.id)}
              aria-label="Toggle details"
            >
              {expandedSystem.has(systemMsg.id) ? '▼' : '▶'}
            </div>
            <div className="content">
              <div 
                className="accordion-header cursor-pointer"
                onClick={() => toggleSystemMessage(systemMsg.id)}
                tabIndex={0}
              >
                {systemMsg.title}
              </div>
              <AnimatePresence>
                {expandedSystem.has(systemMsg.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="accordion-panel"
                  >
                    {systemMsg.steps.map((step, idx) => (
                      <div key={idx} className="accordion-step accordion-step--orange">
                        <span className="accordion-step__icon accordion-step__icon--orange">✓</span>
                        <span className="accordion-step__text accordion-step__text--orange">{step}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Message */}
      <div className="row row--system">
        <div className="glyph claude-icon">∙</div>
        <div className="content">
          <AnimatedText 
            text="Welcome! I'm Francesca, Felipe's AI assistant. I know him pretty well professionally and I'd love to chat about his work, experience, or background. What would you like to know?"
            delay={500}
          />
        </div>
      </div>

      {/* Chat Messages */}
      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`row ${message.role === 'user' ? 'row--user' : 'row--assistant'}`}
          >
            <div className={`glyph ${message.role === 'assistant' ? 'claude-icon' : ''}`}>{message.role === 'user' ? '>' : '∙'}</div>
            <div className="content">
              {message.role === 'assistant' ? (
                <AnimatedText text={message.content} delay={0} />
              ) : (
                <span>{message.content}</span>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Loading Indicator */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="row row--system"
        >
          <div className="glyph claude-icon">∙</div>
          <div className="content">
            <span className="typing-indicator">
              <span>●</span>
              <span>●</span>
              <span>●</span>
            </span>
          </div>
        </motion.div>
      )}

      {/* Input Row */}
      <div className="row row--input">
        <div className="glyph">&gt;</div>
        <div className="content">
          <form onSubmit={handleSubmit} className="prompt-form" autoComplete="off">
            <div className="prompt-input-wrapper">
              <textarea
                ref={inputRef}
                className="prompt-input"
                rows={1}
                placeholder="Ask me about Felipe..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
                disabled={isLoading}
                aria-label="Command input"
                spellCheck={false}
              />
            </div>
          </form>
        </div>
      </div>

      <div ref={messagesEndRef} />
    </div>
  )
}

// Character-by-character animation component
function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('')
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 15) // Adjust speed here

    return () => clearInterval(interval)
  }, [text, hasStarted])

  return <span>{hasStarted ? displayedText : ''}</span>
}
