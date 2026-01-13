'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CornerBrackets from '../CornerBrackets'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic leading-[0.95] text-norcal-sand tracking-tight mb-8">
            I build AI systems that eliminate operational friction.
          </h1>
          
          <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-norcal-sage opacity-90 mb-12">
            Automation architect specializing in LLM agents, data pipelines, and workflow systems for growth-stage companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="relative inline-block w-fit group">
              <CornerBrackets className="opacity-0 group-hover:opacity-100 transition-opacity" />
              <Link
                href="#capabilities"
                className="bg-norcal-clay border border-norcal-clay text-norcal-dark px-10 md:px-14 py-3 md:py-4 text-xs md:text-sm font-mono font-bold tracking-[0.25em] transition-all hover:translate-y-[-2px] active:translate-y-[0px] whitespace-nowrap inline-block"
              >
                VIEW CAPABILITIES
              </Link>
            </div>
            
            <Link
              href="/dashboard"
              className="px-10 md:px-14 py-3 md:py-4 text-xs md:text-sm font-mono font-bold tracking-[0.25em] border border-norcal-stone text-norcal-sand hover:bg-norcal-sand hover:text-norcal-dark transition-all whitespace-nowrap inline-flex items-center gap-2 group"
            >
              TALK WITH FRANCESCA
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-norcal-clay/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-norcal-sage/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

