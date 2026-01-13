'use client'

import { motion } from 'framer-motion'

interface Phase {
  label: string
  status: 'complete' | 'active' | 'planned'
  badge: string
  title: string
  items: string[]
}

const phases: Phase[] = [
  {
    label: 'WEEK 1-2',
    status: 'complete',
    badge: 'DISCOVERY',
    title: 'Process Mapping',
    items: [
      'Current state documentation',
      'Pain point identification',
      'Integration inventory audit',
      'ROI opportunity analysis',
    ],
  },
  {
    label: 'WEEK 3-4',
    status: 'complete',
    badge: 'ARCHITECTURE',
    title: 'Solution Design',
    items: [
      'Data flow & system design',
      'Technology stack selection',
      'Security & compliance review',
      'Implementation roadmap',
    ],
  },
  {
    label: 'WEEK 5-8',
    status: 'active',
    badge: 'ACTIVE',
    title: 'Build & Deploy',
    items: [
      'Core automation development',
      'AI agent configuration',
      'Integration & testing',
      'Staged production rollout',
    ],
  },
  {
    label: 'ONGOING',
    status: 'planned',
    badge: 'OPTIMIZE',
    title: 'Scale & Improve',
    items: [
      'Performance monitoring',
      'Continuous improvement cycles',
      'New automation identification',
      'Team training & handoff',
    ],
  },
]

export default function EngagementProcessContent() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 flex flex-col bg-norcal-dark/40 h-full">
      <div className="flex flex-col max-w-6xl mx-auto w-full">
        <h2 className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.4em] sm:tracking-[0.6em] uppercase mb-4 sm:mb-6 text-norcal-clay flex items-center gap-2 sm:gap-4">
          <span className="w-8 sm:w-16 h-[1px] bg-norcal-clay"></span>
          <span className="break-words">ENGAGEMENT_PROCESS // SPEC_03.A</span>
        </h2>
        {phases.map((phase, index) => {
          const isActive = phase.status === 'active'
          const isComplete = phase.status === 'complete'
          const isPlanned = phase.status === 'planned'

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-10 md:pl-12 pb-12 sm:pb-14 md:pb-16 last:pb-0 group"
            >
              {/* Vertical line */}
              <div className={`absolute left-[5px] sm:left-[7px] top-0 bottom-0 w-[1px] ${index === phases.length - 1 ? 'bg-transparent' : 'bg-norcal-stone/30'}`}></div>

              {/* Phase dot */}
              <div
                className={`absolute left-0 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-norcal-stone z-10 transition-colors ${
                  isActive
                    ? 'bg-norcal-clay animate-pulse'
                    : isComplete
                    ? 'bg-norcal-dark'
                    : 'bg-norcal-dark border-dashed'
                }`}
              ></div>

              <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                {/* Left column - Metadata */}
                <div className="md:w-1/4 shrink-0">
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase opacity-40 mb-1 text-norcal-sage">
                    Phase {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className={`text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest font-bold ${isActive ? 'text-norcal-clay' : 'text-norcal-sage'}`}>
                    {phase.label}
                  </div>
                  <div
                    className={`mt-3 sm:mt-4 inline-block text-[7px] sm:text-[8px] font-mono px-2 py-0.5 border uppercase tracking-wider sm:tracking-widest ${
                      isActive
                        ? 'border-norcal-clay/50 bg-norcal-clay/10 text-norcal-clay opacity-100'
                        : 'border-norcal-stone/30 opacity-40 text-norcal-sage'
                    }`}
                  >
                    {phase.badge}
                  </div>
                </div>

                {/* Right column - Content */}
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4 sm:mb-6 text-norcal-sand group-hover:italic transition-all">
                    {phase.title}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-3 sm:gap-y-4">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 sm:gap-3 cursor-pointer group/item">
                        <span className="text-[9px] sm:text-[10px] font-mono opacity-30 mt-1 text-norcal-sage group-hover/item:text-white group-hover/item:opacity-100 group-hover/item:glow-white transition-all duration-300 shrink-0">
                          [{itemIndex + 1}]
                        </span>
                        <p className="text-xs sm:text-sm font-mono leading-normal opacity-70 group-hover:opacity-100 group-hover/item:text-white group-hover/item:opacity-100 group-hover/item:font-semibold group-hover/item:glow-white transition-all duration-300 text-norcal-sage break-words">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

