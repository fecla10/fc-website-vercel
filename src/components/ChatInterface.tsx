'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}


export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi there! I'm Francesca, and I know Felipe pretty well professionally. I'd love to chat about his work, experience, or background. What would you like to know about him?",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
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
      console.error('Error details:', JSON.stringify(error, null, 2))
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I'm sorry, I encountered an error while processing your question. Error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="retro-terminal-window relative">
      {/* Terminal Header Bar */}
      <div className="retro-terminal-header-bar">
        <div className="flex items-center gap-2">
          <motion.span 
            className="retro-text-green text-xs font-mono"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            [CHAT_INTERFACE]
          </motion.span>
          <span className="retro-text-gray text-xs font-mono">|</span>
          <motion.span 
            className="retro-text-amber text-xs font-mono"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ACTIVE
          </motion.span>
          <motion.span 
            className="retro-text-green text-xs font-mono ml-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            ●
          </motion.span>
        </div>
        <div className="flex items-center gap-1">
          <motion.div 
            className="w-2 h-2 bg-retro-green rounded-sm"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          ></motion.div>
          <motion.div 
            className="w-2 h-2 bg-retro-amber rounded-sm"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          ></motion.div>
          <motion.div 
            className="w-2 h-2 bg-red-500 rounded-sm"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          ></motion.div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="retro-terminal-content h-[500px] overflow-y-auto">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div className={`inline-block max-w-[85%] ${message.role === 'user' ? 'text-left' : ''}`}>
                <div className="flex items-start gap-2 mb-1">
                  {message.role === 'assistant' && (
                    <span className="retro-text-green font-mono text-xs flex-shrink-0">&gt;</span>
                  )}
                  {message.role === 'user' && (
                    <span className="retro-text-amber font-mono text-xs flex-shrink-0 ml-auto">USER&gt;</span>
                  )}
                  <span className={`text-xs font-mono retro-text-gray ${message.role === 'user' ? 'order-first' : ''}`}>
                    [{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}]
                  </span>
                </div>
                <motion.div 
                  className={`retro-message-box ${message.role === 'user' ? 'retro-user-message' : 'retro-assistant-message'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className={`text-sm font-mono leading-relaxed ${message.role === 'user' ? 'retro-text-amber' : 'retro-text-green'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {message.content}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-2"
          >
            <motion.span 
              className="retro-text-green font-mono text-xs"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              &gt;
            </motion.span>
            <div className="retro-assistant-message">
              <div className="flex items-center gap-2 flex-wrap">
                <motion.span 
                  className="retro-text-green font-mono text-sm"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  PROCESSING
                </motion.span>
                <div className="flex gap-1">
                  <motion.span
                    className="retro-text-green font-mono text-lg"
                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  >.</motion.span>
                  <motion.span
                    className="retro-text-green font-mono text-lg"
                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  >.</motion.span>
                  <motion.span
                    className="retro-text-green font-mono text-lg"
                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  >.</motion.span>
                </div>
                <motion.span 
                  className="retro-text-gray font-mono text-xs ml-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  [Analyzing query...]
                </motion.span>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="retro-terminal-input-area border-t-2 border-retro-green/50">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3">
          <motion.span 
            className="retro-text-green font-mono text-sm flex-shrink-0 typing-cursor"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            &gt;
          </motion.span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter query..."
            className="retro-terminal-input flex-1"
            disabled={isLoading}
            autoFocus
          />
          <motion.button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="retro-button disabled:opacity-30 disabled:cursor-not-allowed"
            whileHover={!isLoading && input.trim() ? { scale: 1.05 } : {}}
            whileTap={!isLoading && input.trim() ? { scale: 0.95 } : {}}
          >
            <motion.span 
              className="retro-text-green font-mono text-xs"
              animate={!isLoading && input.trim() ? { opacity: [1, 0.7, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              [EXECUTE]
            </motion.span>
          </motion.button>
        </form>
        <div className="px-3 pb-2">
          <motion.span 
            className="retro-text-gray font-mono text-[10px]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            TIP: Ask about resume, experience, skills, education, or achievements
          </motion.span>
        </div>
      </div>
    </div>
  )
}
