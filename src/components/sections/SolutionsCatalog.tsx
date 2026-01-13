'use client'

import { motion } from 'framer-motion'

export default function SolutionsCatalog() {
  const solutions = [
    {
      num: '01',
      title: 'Intelligent Document Processing Pipelines',
      meta: ['ENTERPRISE AUTOMATION', 'Q4 2024', 'SOL-REF-101'],
    },
    {
      num: '02',
      title: 'Multi-Agent Systems for Financial Analysis',
      meta: ['AI AGENT DEVELOPMENT', 'Q1 2025', 'SOL-REF-202'],
    },
    {
      num: '03',
      title: 'Operations Automation for Growth-Stage Companies',
      meta: ['END-TO-END IMPLEMENTATION', 'Q1 2025', 'SOL-REF-303'],
    },
  ]

  const capabilities = [
    {
      id: 'CAP-01-DO',
      title: 'Data Orchestration',
      desc: 'Automated pipelines connecting disparate systems. Real-time sync without manual intervention.',
    },
    {
      id: 'CAP-02-AI',
      title: 'AI Agent Development',
      desc: 'Custom LLM-powered agents for research, analysis, and decision support tasks.',
    },
    {
      id: 'CAP-03-PA',
      title: 'Process Automation',
      desc: 'End-to-end workflow automation reducing manual touchpoints by 80%+.',
    },
    {
      id: 'CAP-04-IA',
      title: 'Integration Architecture',
      desc: 'Seamless connections between CRMs, ERPs, databases, and custom tools.',
    },
  ]

  return (
    <>
      {/* Solutions Catalog */}
      <section className="py-12 sm:py-16 md:py-24 px-4 md:px-8 border-b border-norcal-stone/30 bg-norcal-stone/20">
        <div className="max-w-7xl mx-auto">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 h-full bg-white/5 flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-8 sm:mb-10 md:mb-12 gap-2 sm:gap-0">
              <h2 className="text-[10px] sm:text-[11px] md:text-[12px] font-mono font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-norcal-sage">
                Solutions Catalog
              </h2>
              <span className="text-[9px] sm:text-[10px] font-mono opacity-40 text-norcal-sage">INDEX / 2024-2025</span>
            </div>

            <div className="flex-grow space-y-8 sm:space-y-10">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-norcal-stone/40 group-hover:text-norcal-clay transition-colors leading-none shrink-0">
                      {solution.num}
                    </span>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl leading-tight mb-2 tracking-tight text-norcal-sand group-hover:underline decoration-1 underline-offset-4 break-words">
                        {solution.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-[9px] sm:text-[10px] font-mono tracking-wider opacity-60 text-norcal-sage">
                        {solution.meta.map((item, i) => (
                          <span key={i} className={i === 0 ? 'uppercase font-bold text-norcal-sand opacity-100' : ''}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 flex items-center gap-3 sm:gap-4">
              <div className="h-[1px] flex-grow bg-norcal-stone/30"></div>
              <button className="px-4 sm:px-6 py-2 border border-norcal-stone/50 text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:bg-norcal-stone/30 hover:text-norcal-sand transition-all uppercase text-norcal-sage whitespace-nowrap">
                VIEW ALL SOLUTIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Ledger */}
      <section className="py-12 sm:py-16 md:py-24 px-4 md:px-8 border-b border-norcal-stone/30">
        <div className="max-w-7xl mx-auto">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[10px] sm:text-[11px] md:text-[12px] font-mono font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 text-norcal-sage">
                Core Capabilities Ledger
              </h2>
              <div className="h-[1px] w-24 sm:w-32 bg-norcal-clay mb-3 sm:mb-4"></div>
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic max-w-2xl leading-tight text-norcal-sand break-words">
                Systematic automation for the next era of business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0 border-l border-t border-norcal-stone/30">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-norcal-stone/30 p-4 sm:p-6 md:p-8 flex flex-col group hover:bg-norcal-stone/20 transition-colors"
                >
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <span className="text-[9px] sm:text-[10px] font-mono opacity-40 font-bold text-norcal-sage break-words">
                      {cap.id}
                    </span>
                    <div className="w-1.5 h-1.5 bg-norcal-clay rounded-full shrink-0 ml-2"></div>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 tracking-tight text-norcal-sand group-hover:italic transition-all break-words">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono leading-relaxed opacity-60 text-norcal-sage break-words">
                    {cap.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

