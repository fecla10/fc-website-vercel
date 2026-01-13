'use client'

import { motion } from 'framer-motion'
import StatusIndicator from '../StatusIndicator'
import CornerBrackets from '../CornerBrackets'

interface AutomationNode {
  id: string
  name: string
  status: 'active' | 'syncing' | 'standby'
  latency: string
  indicatorColor: 'green' | 'orange' | 'blue' | 'gray'
}

const nodes: AutomationNode[] = [
  {
    id: 'AGENT-001',
    name: 'Data Pipeline Orchestrator',
    status: 'active',
    latency: '8ms',
    indicatorColor: 'green',
  },
  {
    id: 'AGENT-002',
    name: 'Document Intelligence',
    status: 'active',
    latency: '12ms',
    indicatorColor: 'orange',
  },
  {
    id: 'AGENT-003',
    name: 'API Integration Hub',
    status: 'syncing',
    latency: '180ms',
    indicatorColor: 'blue',
  },
  {
    id: 'AGENT-004',
    name: 'Workflow Automator',
    status: 'active',
    latency: '6ms',
    indicatorColor: 'orange',
  },
  {
    id: 'AGENT-005',
    name: 'Monitoring & Alerts',
    status: 'standby',
    latency: '0ms',
    indicatorColor: 'gray',
  },
  {
    id: 'AGENT-006',
    name: 'Custom LLM Agents',
    status: 'active',
    latency: '24ms',
    indicatorColor: 'orange',
  },
]

export default function ActiveAutomationRegistry() {
  return (
    <section className="py-16 px-4 md:px-8 border-b border-norcal-stone/30">
      <div className="max-w-7xl mx-auto">
        <div className="p-6 md:p-8 flex flex-col">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-xs font-mono font-bold tracking-[0.3em] uppercase mb-2 text-norcal-sage">
                Automation Stack
              </h2>
              <p className="font-serif text-2xl md:text-3xl italic text-norcal-sand">
                Active Automation Registry
              </p>
            </div>
            <div className="text-right font-mono text-[10px] tracking-widest leading-tight opacity-60">
              Uptime: 99.9%<br />
              Active Integrations: 47
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {nodes.map((node, index) => {
              const indicatorColorMap: Record<string, string> = {
                green: 'bg-green-500',
                orange: 'bg-norcal-clay',
                blue: 'bg-blue-400',
                gray: 'bg-norcal-stone/40',
              }

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-norcal-stone/30 p-3 relative group hover:bg-norcal-stone/20 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[9px] font-mono tracking-widest opacity-40">
                      {node.id}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${indicatorColorMap[node.indicatorColor]} ${node.status === 'syncing' ? 'animate-pulse' : ''}`}></div>
                  </div>
                  
                  <h4 className="font-serif text-lg md:text-xl mb-2 tracking-tight text-norcal-sand">
                    {node.name}
                  </h4>
                  
                  <div className="flex justify-between items-center text-[10px] font-mono mt-1">
                    <span className="font-bold tracking-tighter uppercase">
                      {node.status === 'syncing' ? 'SYNCING' : node.status === 'active' ? 'ACTIVE' : 'STANDBY'}
                    </span>
                    <span className="opacity-60">{node.latency}</span>
                  </div>

                  <CornerBrackets className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

