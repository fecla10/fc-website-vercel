'use client'

import { motion } from 'framer-motion'
import TelemetryBox from '../TelemetryBox'
import CornerBrackets from '../CornerBrackets'
import EngagementProcessContent from './EngagementProcessContent'

export default function OperationsArchitecture() {
  const telemetryMetrics = [
    {
      label: 'System Stability',
      value: 'NOMINAL',
      progress: 98,
      progressColor: 'bg-norcal-clay',
    },
    {
      label: 'Tasks Processed',
      value: '10,000+/mo',
      progress: 76,
      progressColor: 'bg-norcal-dark',
    },
    {
      label: 'Avg Latency',
      value: '1.2s',
      progress: 22,
      progressColor: 'bg-blue-400',
    },
  ]

  return (
    <section className="py-24 px-4 md:px-8 border-b border-norcal-stone/30 bg-norcal-dark/50 overflow-hidden relative min-h-[1300px]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="max-w-3xl">
            <h2 className="text-xs font-mono font-bold tracking-[0.6em] uppercase mb-6 text-norcal-clay flex items-center gap-4">
              <span className="w-16 h-[1px] bg-norcal-clay"></span>
              OPERATIONS_ARCHITECTURE // SPEC_01.A
            </h2>
            <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-6xl leading-[0.82] tracking-tighter mb-10 text-norcal-sand">
              End-to-End Automation
              <br />
              <span className="italic">& Intelligence Pipeline.</span>
            </h3>
          </div>

          <div className="w-full lg:w-[380px] shrink-0">
            <TelemetryBox
              title="PIPELINE TELEMETRY"
              metrics={telemetryMetrics}
              footer={{
                left: { label: 'Pipeline ID', value: 'FLC-PIPE-01' },
                right: { label: 'Status', value: 'OPERATIONAL', highlight: true },
              }}
              className="bg-norcal-stone/40 border-norcal-stone/30 shadow-xl"
            />
          </div>
        </div>

        {/* Deployment Status Footer */}
        <div className="mt-6 pt-4 border-t border-dotted border-norcal-stone/30 flex justify-between items-center mb-12">
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-norcal-sage opacity-60">
            Deployment Status: PRODUCTION
          </span>
          <button className="text-[10px] font-mono font-bold border-b border-norcal-sand hover:opacity-50 transition-opacity">
            VIEW SYSTEM LOGS
          </button>
        </div>

        {/* Infrastructure Schematic */}
        <div className="relative flex-grow flex flex-col items-center justify-center mt-12">
          <div className="relative w-full max-w-[1000px] h-[1000px] flex items-center justify-center">
            {/* Left side labels */}
            <div className="absolute left-0 h-full flex flex-col justify-between py-24 z-20">
              {[
                { tier: 'TIER 01', title: 'Source Connections', desc: 'API integrations, database pipelines, and third-party data feeds.' },
                { tier: 'TIER 02', title: 'Transformation Engine', desc: 'ETL workflows, data validation, and normalization rules.' },
                { tier: 'TIER 03', title: 'AI Agent Cluster', desc: 'LLM orchestration, decision engines, custom reasoning agents.' },
                { tier: 'TIER 04', title: 'Automation Layer', desc: 'Business logic execution, conditional routing, human-in-the-loop triggers.' },
                { tier: 'TIER 05', title: 'Client Interface', desc: 'Dashboards, notifications, reports, and real-time alerts.' },
              ].map((tier, index) => (
                <div key={index} className="flex flex-col max-w-[220px] text-left items-start cursor-pointer group/item">
                  <span className="text-xs font-mono font-bold text-norcal-clay tracking-[0.2em] uppercase mb-2 transition-all duration-300">
                    {tier.tier}
                  </span>
                  <span className="text-base font-mono font-bold uppercase mb-2 tracking-tighter text-white transition-all duration-300">
                    {tier.title}
                  </span>
                  <span className="text-xs font-mono opacity-40 leading-relaxed text-norcal-sage group-hover/item:text-white group-hover/item:opacity-100 group-hover/item:font-semibold group-hover/item:glow-white transition-all duration-300">
                    {tier.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Right side stats */}
            <div className="absolute right-0 h-full flex flex-col justify-around py-32 text-right pointer-events-none opacity-40 font-mono text-[9px] leading-relaxed uppercase tracking-[0.2em] z-20 text-norcal-sage">
              <div>DATA_SOURCES: 20+<br />UPTIME: 99.9%</div>
              <div>API_ENDPOINTS: 45+<br />SYNC_FREQ: Real-time</div>
              <div>THROUGHPUT: 50K rows/hr<br />ERROR_RATE: 0.1%</div>
              <div>ACTIVE_AGENTS: 12<br />MODEL: GPT-4/Claude</div>
              <div>WORKFLOWS: 150+<br />TRIGGERS: 2,400/day</div>
            </div>

            {/* SVG Schematic */}
            <svg viewBox="0 0 600 1000" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="pulseGradient" x1="0" y1="720" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#c47f62" />
                  <stop offset="25%" stopColor="#c47f62" />
                  <stop offset="45%" stopColor="#8a9a8a" />
                  <stop offset="75%" stopColor="#8a9a8a" />
                  <stop offset="95%" stopColor="#1a1a18" />
                  <stop offset="100%" stopColor="#1a1a18" />
                </linearGradient>
                <filter id="neonPulse">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Vertical trunk */}
              <rect x="299.5" y="80" width="1" height="640" fill="rgba(227, 224, 215, 0.15)" />
              <rect x="298" y="80" width="4" height="640" fill="rgba(227, 224, 215, 0.03)" />

              {/* Animated arrow data blocks moving upward */}
              {/* White arrows */}
              <g>
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,720; 0,80" dur="4s" repeatCount="indefinite" />
                  <path d="M 290 0 L 310 0 L 305 -12 L 300 -8 L 295 -12 Z" fill="#e3e0d7" opacity="0.9" filter="url(#neonPulse)" />
                  <rect x="290" y="-4" width="20" height="8" fill="#e3e0d7" opacity="0.9" filter="url(#neonPulse)" />
                </g>
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,720; 0,80" dur="4s" begin="1s" repeatCount="indefinite" />
                  <path d="M 290 0 L 310 0 L 305 -12 L 300 -8 L 295 -12 Z" fill="#e3e0d7" opacity="0.9" filter="url(#neonPulse)" />
                  <rect x="290" y="-4" width="20" height="8" fill="#e3e0d7" opacity="0.9" filter="url(#neonPulse)" />
                </g>
              </g>
              {/* Red arrows */}
              <g>
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,720; 0,80" dur="4s" begin="2s" repeatCount="indefinite" />
                  <path d="M 290 0 L 310 0 L 305 -12 L 300 -8 L 295 -12 Z" fill="#c47f62" opacity="1" />
                  <rect x="290" y="-4" width="20" height="8" fill="#c47f62" opacity="1" />
                </g>
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,720; 0,80" dur="4s" begin="3s" repeatCount="indefinite" />
                  <path d="M 290 0 L 310 0 L 305 -12 L 300 -8 L 295 -12 Z" fill="#c47f62" opacity="1" />
                  <rect x="290" y="-4" width="20" height="8" fill="#c47f62" opacity="1" />
                </g>
              </g>

              {/* Tier 05 - Delivery Plane */}
              <g transform="translate(300, 80)">
                <circle r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.1" className="text-norcal-sand" />
                <path d="M-130,0 L0,-45 L130,0 L0,45 Z" fill="#2b2b26" stroke="currentColor" strokeWidth="2" className="text-norcal-sand" />
                <path d="M-130,0 V15 L0,60 L130,15 V0" fill="none" stroke="currentColor" strokeWidth="2" className="text-norcal-sand" />
                <circle r="5" fill="#c47f62" stroke="currentColor" strokeWidth="1" className="text-norcal-sand" />
                <text y="-60" textAnchor="middle" className="text-[12px] font-mono font-bold tracking-[0.5em] uppercase fill-current text-norcal-sand">
                  Delivery Plane
                </text>
              </g>

              {/* Tier 04 - Workflow Mesh */}
              <g transform="translate(300, 240)">
                <line x1="-140" y1="0" x2="140" y2="0" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.3" className="text-norcal-sand" />
                <path d="M-50,0 L0,-20 L50,0 L0,20 Z" fill="#2b2b26" stroke="currentColor" strokeWidth="1.5" className="text-norcal-sand" />
                <rect x="-4" y="-4" width="8" height="8" fill="currentColor" transform="rotate(45)" className="text-norcal-sand" />
                <g transform="translate(-100, 0)">
                  <path d="M-25,0 L0,-10 L25,0 L0,10 Z" fill="#2b2b26" stroke="currentColor" strokeWidth="1" className="text-norcal-sand" />
                  <circle r="2.5" fill="#8a9a8a" stroke="currentColor" strokeWidth="0.5" className="text-norcal-sand" />
                </g>
                <g transform="translate(100, 0)">
                  <path d="M-25,0 L0,-10 L25,0 L0,10 Z" fill="#2b2b26" stroke="currentColor" strokeWidth="1" className="text-norcal-sand" />
                  <circle r="2.5" fill="#8a9a8a" stroke="currentColor" strokeWidth="0.5" className="text-norcal-sand" />
                </g>
                <text y="-35" textAnchor="middle" className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] fill-current text-norcal-sand">
                  Workflow Mesh
                </text>
              </g>

              {/* Tier 03 - Intelligence Core */}
              <g transform="translate(300, 400)">
                <rect x="-140" y="-15" width="280" height="30" fill="#2b2b26" stroke="currentColor" strokeWidth="1" className="text-norcal-sand" />
                <g stroke="currentColor" strokeWidth="0.5" opacity="0.3" className="text-norcal-sand">
                  {[-120, -94, -68, -42, -16, 10, 36, 62, 88, 114].map((x, i) => (
                    <line key={i} x1={x} y1="-10" x2={x} y2="10" />
                  ))}
                </g>
                <text y="50" textAnchor="middle" className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] fill-current text-norcal-sand">
                  Intelligence Core
                </text>
              </g>

              {/* Tier 02 - Processing Layer */}
              <g transform="translate(300, 560)">
                <path d="M-100,0 L0,-30 L100,0 L0,30 Z" fill="#2b2b26" stroke="currentColor" strokeWidth="1" strokeDasharray="3,1" className="text-norcal-sand" />
                <circle r="12" fill="none" stroke="#8a9a8a" strokeWidth="1" />
                <circle r="4" fill="currentColor" className="text-norcal-sand" />
              </g>

              {/* Tier 01 - Data Foundation */}
              <g transform="translate(300, 720)">
                <path d="M-220,10 L0,-90 L220,10 L0,110 Z" fill="rgba(43, 43, 38, 0.5)" />
                <path d="M-200,0 L0,-80 L200,0 L0,80 Z" fill="#1a1a18" stroke="#2b2b26" strokeWidth="1" />
                <path d="M-200,0 V40 L0,120 L200,40 V0" fill="#000" />
                <path d="M-160,0 L0,-65 L160,0 L0,65 Z" fill="#080808" stroke="rgba(196, 127, 98, 0.1)" strokeWidth="0.5" />
                
                {/* Pulsing core */}
                <g transform="translate(0,0)">
                  <circle r="50" fill="none" stroke="#c47f62" strokeWidth="0.5" strokeDasharray="4,8" opacity="0.4">
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite" />
                  </circle>
                  <circle r="35" fill="none" stroke="#c47f62" strokeWidth="0.8" strokeDasharray="10,5" opacity="0.6">
                    <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="8s" repeatCount="indefinite" />
                  </circle>
                </g>
                
                <g transform="translate(0,0) scale(0.8)">
                  <path d="M-25,0 L0,-25 L25,0 L0,25 Z" fill="#c47f62">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                  </path>
                  <circle r="4" fill="white" filter="url(#neonPulse)" />
                </g>
                
                <text y="145" textAnchor="middle" className="text-[11px] font-mono font-bold uppercase tracking-[0.6em] fill-current text-norcal-sand">
                  Data Foundation
                </text>
              </g>
            </svg>

            {/* Overlay stat boxes */}
            <div className="absolute top-[15%] left-[65%] p-4 border border-norcal-stone/30 bg-norcal-stone/60 backdrop-blur-md shadow-lg flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-norcal-sage">AGENT_PULSE</span>
                <div className="w-1.5 h-1.5 bg-norcal-clay animate-ping"></div>
              </div>
              <div className="text-[18px] font-mono font-bold tabular-nums text-norcal-sand">24.3 ms</div>
              <span className="text-[7px] font-mono opacity-40 text-norcal-sage">avg_response_time</span>
            </div>
          </div>
        </div>

        {/* Bottom capabilities grid */}
        <div className="mt-32 mb-16 pb-16 relative z-10">
          <h2 className="text-xs font-mono font-bold tracking-[0.6em] uppercase mb-6 text-norcal-clay flex items-center gap-4">
            <span className="w-16 h-[1px] bg-norcal-clay"></span>
            CAPABILITIES // SPEC_02.A
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-norcal-stone/20 pt-16">
          {[
            { num: '01', title: 'PERSPECTIVE', subtitle: 'Global Fluency', desc: 'International background across Europe and the Americas. I navigate cross-border operations, diverse markets, and async-first collaboration with ease.', color: 'text-norcal-clay' },
            { num: '02', title: 'METHODOLOGY', subtitle: 'Quantitative Rigor', desc: 'Economics and data science foundation. Every automation is built on validated logic, clean architecture, and measurable outcomes.', color: 'text-blue-400' },
            { num: '03', title: 'SECURITY', subtitle: 'Privacy First', desc: 'Data protection built into every workflow. Encrypted connections, compliant processes, and audit-ready documentation as standard.', color: 'text-norcal-sand' },
            { num: '04', title: 'PARTNERSHIP', subtitle: 'Full Ownership', desc: 'From discovery to deployment to optimization - one point of contact, no handoffs, no gaps. I build it, I support it, I improve it.', color: 'text-norcal-clay' },
          ].map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-default"
            >
              <div className={`text-[10px] font-mono font-bold ${cap.color} mb-5 tracking-[0.4em] uppercase`}>
                {cap.num} {'//'} {cap.title}
              </div>
              <h4 className="font-serif text-2xl md:text-3xl mb-4 italic tracking-tight text-norcal-sand group-hover:text-norcal-clay transition-colors duration-300">
                {cap.subtitle}
              </h4>
              <p className="text-sm font-mono leading-relaxed opacity-60 text-norcal-sage group-hover:text-norcal-sand group-hover:opacity-100 transition-colors duration-300">
                {cap.desc}
              </p>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Active Automation Registry */}
        <div id="capabilities" className="mt-16">
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
              {[
                { id: 'AGENT-001', name: 'Data Pipeline Orchestrator', status: 'active', latency: '8ms', indicatorColor: 'green' },
                { id: 'AGENT-002', name: 'Document Intelligence', status: 'active', latency: '12ms', indicatorColor: 'orange' },
                { id: 'AGENT-003', name: 'API Integration Hub', status: 'syncing', latency: '180ms', indicatorColor: 'blue' },
                { id: 'AGENT-004', name: 'Workflow Automator', status: 'active', latency: '6ms', indicatorColor: 'orange' },
                { id: 'AGENT-005', name: 'Monitoring & Alerts', status: 'active', latency: '0ms', indicatorColor: 'gray' },
                { id: 'AGENT-006', name: 'Custom LLM Agents', status: 'active', latency: '24ms', indicatorColor: 'orange' },
              ].map((node, index) => {
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

        {/* Engagement Process Content */}
        <div className="mt-16">
          <EngagementProcessContent />
        </div>
      </div>
    </section>
  )
}

