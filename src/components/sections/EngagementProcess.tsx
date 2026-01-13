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

export default function EngagementProcess() {
  return (
    <section className="py-24 px-4 md:px-8 border-b border-norcal-stone/30 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 md:p-12 lg:p-20 flex flex-col bg-norcal-dark/40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 border-b border-norcal-stone/30 pb-12">
            <div className="max-w-2xl">
              <h2 className="text-[12px] font-mono font-bold tracking-[0.4em] uppercase mb-4 opacity-40 text-norcal-sage">
                Engagement Process
              </h2>
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.9] italic text-norcal-sand">
                Toward automated<br />operational excellence.
              </p>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <div className="w-12 h-[1px] bg-norcal-clay"></div>
              <span className="text-[10px] font-mono tracking-[0.2em] font-bold text-norcal-sage">
                CLIENT SPEC // REVISION 01
              </span>
            </div>
          </div>

          <div className="flex flex-col max-w-6xl mx-auto w-full">
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
                  className="relative pl-12 pb-16 last:pb-0 group"
                >
                  {/* Vertical line */}
                  <div className={`absolute left-[7px] top-0 bottom-0 w-[1px] ${index === phases.length - 1 ? 'bg-transparent' : 'bg-norcal-stone/30'}`}></div>

                  {/* Phase dot */}
                  <div
                    className={`absolute left-0 top-1 w-4 h-4 rounded-full border border-norcal-stone z-10 transition-colors ${
                      isActive
                        ? 'bg-norcal-clay animate-pulse'
                        : isComplete
                        ? 'bg-norcal-dark'
                        : 'bg-norcal-dark border-dashed'
                    }`}
                  ></div>

                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left column - Metadata */}
                    <div className="md:w-1/4 shrink-0">
                      <div className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase opacity-40 mb-1 text-norcal-sage">
                        Phase {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className={`text-[11px] font-mono tracking-widest font-bold ${isActive ? 'text-norcal-clay' : 'text-norcal-sage'}`}>
                        {phase.label}
                      </div>
                      <div
                        className={`mt-4 inline-block text-[8px] font-mono px-2 py-0.5 border uppercase tracking-widest ${
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
                      <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6 text-norcal-sand group-hover:italic transition-all">
                        {phase.title}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="text-[10px] font-mono opacity-30 mt-1 text-norcal-sage">
                              [{itemIndex + 1}]
                            </span>
                            <p className="text-[11px] font-mono leading-normal opacity-70 group-hover:opacity-100 transition-opacity text-norcal-sage">
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

          <div className="mt-24 border-t-2 border-norcal-clay pt-12 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 border border-norcal-stone flex items-center justify-center font-serif text-3xl italic text-norcal-sand">
                FLC
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest uppercase mb-1 text-norcal-sand">
                  Start Your Project
                </h4>
                <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest text-norcal-sage">
                  Early Access Program for Strategic Partners
                </p>
              </div>
            </div>
            <button className="px-10 py-4 bg-norcal-clay text-norcal-dark font-mono text-xs font-bold tracking-[0.3em] hover:bg-norcal-clay/80 hover:text-norcal-dark transition-all uppercase">
              Inquire for Access
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

