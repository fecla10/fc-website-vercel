'use client'

import { Suspense, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChatInterface from '@/components/ChatInterface'
import MatrixText from '@/components/MatrixText'
import ClaudeCodeInterface from '@/components/ClaudeCodeInterface'

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
  const [bootSequence, setBootSequence] = useState<string[]>([])
  const [showInterface, setShowInterface] = useState(false)
  const [triggeredLines, setTriggeredLines] = useState<Set<number>>(new Set())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Boot sequence effect
  useEffect(() => {
    const bootLines = [
      '[SYSTEM] Initializing neural network...',
      '[SYSTEM] Loading knowledge base...',
      '[SYSTEM] Establishing AI connection...',
      '[SYSTEM] ✓ Core systems online',
      '[SYSTEM] ✓ Memory allocation complete',
      '[SYSTEM] ✓ Language processing active',
      '[SYSTEM] ✓ Ready for queries',
      '[SYSTEM] > FRANCESCA.EXE v2.0.1 LOADED'
    ]

    let index = 0
    const interval = setInterval(() => {
      if (index < bootLines.length) {
        setBootSequence(prev => [...prev, bootLines[index]])
        setTriggeredLines(prev => new Set(Array.from(prev).concat([index])))
        index++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowInterface(true), 500)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen pt-16 retro-terminal-bg relative overflow-hidden">
      {/* CRT Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none z-[60] retro-scanlines"></div>
      
      {/* Glitch overlay */}
      <div className="fixed inset-0 pointer-events-none z-[55] retro-glitch"></div>
      
      {/* Terminal Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="claude-code-interface"
          >
            {/* Boot Sequence */}
            <div className="space-y-0 min-h-[120px]">
              {bootSequence.map((line, index) => {
                const hasCheckmark = line.includes('✓')
                
                return (
                  <motion.div
                    key={`${line}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="row row--system boot-row"
                  >
                    <div className="glyph boot-glyph boot-icon">∙</div>
                    <div className="content boot-sequence-content">
                      {hasCheckmark ? (
                        <>
                          {line.split('✓').map((part, i, arr) => (
                            <span key={i}>
                              <span className="boot-text-part">{part}</span>
                              {i < arr.length - 1 && (
                                <span className="boot-checkmark">✓</span>
                              )}
                            </span>
                          ))}
                        </>
                      ) : (
                        <span className="boot-text-part">
                          <MatrixText 
                            key={`matrix-${line}-${index}`}
                            text={line} 
                            trigger={triggeredLines.has(index)} 
                            delay={0} 
                            speed={15}
                            className="boot-text"
                          />
                        </span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Main Title */}
            {showInterface && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-4"
              >
                <div className="row">
                  <div className="glyph">&gt;</div>
                  <div className="content" style={{ color: '#e0e0e0', fontSize: '1.5rem', fontWeight: 600 }}>
                    FRANCESCA.EXE
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="row row--system mt-2"
                >
                  <div className="glyph">∙</div>
                  <div className="content">
                    <span style={{ color: '#888' }}>[AI_ASSISTANT]</span>
                    <span style={{ color: '#888', marginLeft: '0.5rem' }}>v2.0.1</span>
                    <span style={{ color: '#888', margin: '0 0.5rem' }}>|</span>
                    <span style={{ color: '#888' }}>STATUS: ONLINE</span>
                    <span style={{ color: '#888', margin: '0 0.5rem' }}>|</span>
                    <span style={{ color: '#888' }}>READY_FOR_QUERIES</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Claude Code Interface */}
      {showInterface && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-6 px-4 sm:px-6 lg:px-8 relative z-10 pb-20"
        >
          <div className="max-w-4xl mx-auto">
            <ClaudeCodeInterface />
          </div>
        </motion.section>
      )}

      {/* Terminal Footer */}
      {showInterface && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="fixed bottom-0 left-0 right-0 border-t-2 border-retro-green/50 bg-black/95 backdrop-blur-sm z-40"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-mono">
              <span className="retro-text-green">[SYSTEM_INFO]</span>
              <span className="retro-text-gray">CPU:</span>
              <motion.span 
                className="retro-text-amber"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                CLAUDE-3.7-SONNET
              </motion.span>
              <span className="retro-text-gray">|</span>
              <span className="retro-text-gray">MEM:</span>
              <motion.span 
                className="retro-text-green"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                OPTIMAL
              </motion.span>
              <span className="retro-text-gray">|</span>
              <span className="retro-text-gray">TIME:</span>
              <span className="retro-text-amber">{currentTime}</span>
              <span className="retro-text-gray">|</span>
              <motion.span 
                className="retro-text-green"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ●
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
