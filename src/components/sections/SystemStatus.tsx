'use client'

import { motion } from 'framer-motion'

export default function SystemStatus() {
  const systemLogs = [
    '# INIT... OK',
    '# DATA SYNC... STABLE',
    '# API CONNECTIONS... HEALTHY',
    '# AGENT CLUSTER... OPERATIONAL',
    '# MONITORING... ACTIVE',
    '-',
    '-',
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 md:px-8 border-b border-norcal-stone/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col h-full bg-norcal-dark/40 relative p-4 sm:p-6 md:p-10">
          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-norcal-stone/30"></div>
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-norcal-stone/30"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-norcal-stone/30"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-norcal-stone/30"></div>

          <div className="flex-grow border border-norcal-stone/30 flex flex-col relative p-8">
            {/* Top banner */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-norcal-dark px-3 sm:px-4 py-1 border border-norcal-stone/30 z-10 max-w-[calc(100%-2rem)] sm:max-w-none">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap text-norcal-sage">
                SYSTEM MODE: ACTIVE CLIENT OPERATIONS
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start gap-4 sm:gap-0 mb-4 relative z-10">
              {/* System Log */}
              <div className="font-mono text-[9px] sm:text-[10px] leading-[1.6] text-norcal-sage flex-1">
                <div className="mb-2 text-norcal-mist font-bold">[ SYSTEM LOG ]</div>
                {systemLogs.map((log, index) => (
                  <div key={index} className={log === '-' ? 'opacity-20' : ''}>
                    {log}
                  </div>
                ))}
              </div>

              {/* Stats Box */}
              <div className="w-full sm:w-[105px] border border-norcal-stone/30 p-3 flex flex-col gap-1 bg-norcal-stone/40 shrink-0">
                <span className="text-[8px] font-mono tracking-wider font-bold leading-tight text-norcal-sage uppercase">
                  ACTIVE WORKFLOWS:
                </span>
                <div className="text-[20px] sm:text-[22px] font-mono leading-none tracking-tighter font-bold py-1 text-norcal-sand tabular-nums">
                  47
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase leading-tight text-norcal-sage">
                  clients
                </span>
              </div>
            </div>

            {/* Radar Visualization */}
            <div className="flex-grow flex items-center justify-center relative overflow-hidden">
              {/* Left sidebar - hidden on mobile */}
              <div className="hidden md:flex absolute left-[-42px] top-1/2 -translate-y-1/2 w-8 h-[340px] bg-norcal-dark items-center justify-center z-20 border border-norcal-stone/30">
                <span className="rotate-[-90deg] text-norcal-sand text-[9px] font-mono tracking-[0.2em] whitespace-nowrap uppercase font-medium">
                  TASK RANGE: 1-1000/day
                </span>
              </div>

              {/* Right sidebar - hidden on mobile */}
              <div className="hidden md:flex absolute right-[-42px] top-1/2 -translate-y-1/2 w-8 h-[340px] bg-norcal-dark items-center justify-center z-20 border border-norcal-stone/30">
                <span className="rotate-[90deg] text-norcal-sand text-[9px] font-mono tracking-[0.2em] whitespace-nowrap uppercase font-medium">
                  RESPONSE TIME: 0.5s - 5.0s
                </span>
              </div>

              {/* SVG Radar */}
              <svg viewBox="0 0 400 400" className="w-full h-full max-h-[300px] sm:max-h-[400px] md:max-h-[600px] overflow-visible">
                {/* Outer ring - orange */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  className="dashed-ring animate-cw-slow"
                  stroke="#c47f62"
                  strokeDasharray="3 4"
                  strokeWidth="1"
                  fill="none"
                  style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}
                />

                {/* Middle ring - gray */}
                <circle
                  cx="200"
                  cy="240"
                  r="140"
                  className="dashed-ring animate-ccw"
                  stroke="rgba(227, 224, 215, 0.3)"
                  strokeDasharray="2 3"
                  strokeWidth="1"
                  fill="none"
                  style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}
                />

                {/* Inner ring - blue */}
                <circle
                  cx="200"
                  cy="280"
                  r="100"
                  className="dashed-ring animate-cw"
                  stroke="#8a9a8a"
                  strokeDasharray="4 2"
                  strokeWidth="1"
                  fill="none"
                  style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}
                />

                {/* Innermost ring - light blue */}
                <circle
                  cx="200"
                  cy="320"
                  r="60"
                  className="dashed-ring animate-ccw-slow"
                  stroke="rgba(138, 154, 138, 0.5)"
                  strokeDasharray="2 2"
                  strokeWidth="1"
                  fill="none"
                  style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}
                />

                {/* Center crosshair */}
                <g transform="translate(200, 320)">
                  <line x1="-35" y1="0" x2="35" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-norcal-sand" />
                  <line x1="0" y1="-35" x2="0" y2="35" stroke="currentColor" strokeWidth="0.5" className="text-norcal-sand" />
                </g>
              </svg>
            </div>

            {/* Bottom info */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0 text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-widest text-norcal-sand leading-relaxed relative z-10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="opacity-50 font-bold">&gt;</span>
                  <span className="break-words">SYSTEM MODE: ACTIVE CLIENT OPERATIONS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-50 font-bold">&gt;</span>
                  <span>OPERATOR: FLC-2025</span>
                </div>
              </div>
              <div className="text-left sm:text-right flex flex-col items-start sm:items-end">
                <div className="mb-1 text-norcal-sage">AES-256 /</div>
                <div className="font-bold text-norcal-sand break-words">ENTERPRISE SECURITY</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 sm:mt-8 pt-4 border-t border-norcal-stone/20 flex justify-center items-center relative px-4">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-norcal-mist uppercase text-center break-words">
              © 2025 FELIPE CLAVIJO | AI & AUTOMATION SOLUTIONS
            </span>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-norcal-stone/30"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-norcal-stone/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

