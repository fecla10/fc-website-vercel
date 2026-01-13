'use client'

import { motion } from 'framer-motion'

export default function SystemStatusCompact() {
  const systemLogs = [
    '# INIT... OK',
    '# DATA SYNC... STABLE',
    '# API CONNECTIONS... HEALTHY',
    '# AGENT CLUSTER... OPERATIONAL',
    '# MONITORING... ACTIVE',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="w-full max-w-[400px] bg-norcal-dark/60 backdrop-blur-[2px] border border-norcal-stone/30 rounded-xl p-6"
    >
      {/* Top banner */}
      <div className="mb-4 pb-3 border-b border-norcal-stone/20">
        <span className="text-[9px] font-mono tracking-[0.2em] text-norcal-sage uppercase">
          SYSTEM MODE: ACTIVE CLIENT OPERATIONS
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {/* System Log */}
        <div className="font-mono text-[9px] leading-[1.6] text-norcal-sage">
          <div className="mb-2 text-norcal-mist font-bold text-[8px]">[ SYSTEM LOG ]</div>
          {systemLogs.map((log, index) => (
            <div key={index} className="opacity-80">
              {log}
            </div>
          ))}
        </div>

        {/* Stats Box */}
        <div className="border border-norcal-stone/30 p-3 flex flex-col gap-1 bg-norcal-stone/40">
          <span className="text-[8px] font-mono tracking-wider font-bold leading-tight text-norcal-sage uppercase">
            ACTIVE WORKFLOWS:
          </span>
          <div className="text-[20px] font-mono leading-none tracking-tighter font-bold py-1 text-norcal-sand tabular-nums">
            47
          </div>
          <span className="text-[9px] font-mono font-bold uppercase leading-tight text-norcal-sage">
            clients
          </span>
        </div>

        {/* Bottom info */}
        <div className="pt-3 border-t border-norcal-stone/20 text-[8px] font-mono tracking-wider text-norcal-sage">
          <div className="flex items-center gap-2 mb-1">
            <span className="opacity-50 font-bold">&gt;</span>
            <span>OPERATOR: FLC-2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-50 font-bold">&gt;</span>
            <span>AES-256 / ENTERPRISE SECURITY</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

