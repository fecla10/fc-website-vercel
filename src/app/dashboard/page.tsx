'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import ChatInterface from '@/components/ChatInterface'

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold neon-text mb-4"
          >
            Francesca, Felipe&apos;s Assistant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Ask me anything about my experience, skills, or background
          </motion.p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<div className="h-96 bg-gray-800 rounded-lg animate-pulse" />}>
            <ChatInterface />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

