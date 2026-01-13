'use client'

import { motion } from 'framer-motion'

export default function SystemStatusContent() {
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
    <div className="flex flex-col h-full bg-norcal-dark/40 relative p-6 md:p-10">
      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-norcal-stone/30"></div>
      <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-norcal-stone/30"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-norcal-stone/30"></div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-norcal-stone/30"></div>

      <div className="flex-grow border border-norcal-stone/30 flex flex-col relative p-8">
        {/* Top banner */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-norcal-dark px-4 py-1 border border-norcal-stone/30 z-10">
          <span className="text-[10px] font-mono tracking-[0.2em] whitespace-nowrap text-norcal-sage">
            SYSTEM MODE: ACTIVE CLIENT OPERATIONS
          </span>
        </div>

        <div className="flex justify-between items-start mb-4 relative z-10">
          {/* System Log */}
          <div className="font-mono text-[10px] leading-[1.6] text-norcal-sage">
            <div className="mb-2 text-norcal-mist font-bold">[ SYSTEM LOG ]</div>
            {systemLogs.map((log, index) => (
              <div key={index} className={log === '-' ? 'opacity-20' : ''}>
                {log}
              </div>
            ))}
          </div>

          {/* Stats Box */}
          <div className="w-[105px] border border-norcal-stone/30 p-3 flex flex-col gap-1 bg-norcal-stone/40">
            <span className="text-[8px] font-mono tracking-wider font-bold leading-tight text-norcal-sage uppercase">
              ACTIVE WORKFLOWS:
            </span>
            <div className="text-[22px] font-mono leading-none tracking-tighter font-bold py-1 text-norcal-sand tabular-nums">
              47
            </div>
            <span className="text-[10px] font-mono font-bold uppercase leading-tight text-norcal-sage">
              clients
            </span>
          </div>
        </div>

        {/* Radar Visualization */}
        <div className="flex-grow flex items-center justify-center relative min-h-[300px]">
          {/* SVG Radar */}
          <svg viewBox="0 0 400 400" className="w-full h-full max-h-[400px] overflow-visible">
            {/* Outer ring - orange */}
            <circle
              cx="200"
              cy="200"
              r="180"
              className="dashed-ring animate-cw-slow"
              stroke="#c47f62"
              strokeDasharray="8 4"
              strokeWidth="4"
              fill="none"
              style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}
            />
            {/* Moving marker on outer ring */}
            <g transform="translate(200, 200)">
              <circle cx="0" cy="-180" r="5" fill="#c47f62" opacity="1">
                <animateTransform attributeName="transform" type="rotate" values="0;360" dur="30s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Middle ring - gray */}
            <circle
              cx="200"
              cy="240"
              r="140"
              className="dashed-ring animate-ccw"
              stroke="rgba(227, 224, 215, 0.5)"
              strokeDasharray="6 3"
              strokeWidth="4"
              fill="none"
              style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}
            />
            {/* Moving marker on middle ring */}
            <g transform="translate(200, 240)">
              <circle cx="0" cy="-140" r="4" fill="#e3e0d7" opacity="0.8">
                <animateTransform attributeName="transform" type="rotate" values="0;-360" dur="25s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Inner ring - blue */}
            <circle
              cx="200"
              cy="280"
              r="100"
              className="dashed-ring animate-cw"
              stroke="#8a9a8a"
              strokeDasharray="10 3"
              strokeWidth="4"
              fill="none"
              style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}
            />
            {/* Moving marker on inner ring */}
            <g transform="translate(200, 280)">
              <circle cx="0" cy="-100" r="4" fill="#8a9a8a" opacity="1">
                <animateTransform attributeName="transform" type="rotate" values="0;360" dur="20s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Innermost ring - light blue */}
            <circle
              cx="200"
              cy="320"
              r="60"
              className="dashed-ring animate-ccw-slow"
              stroke="rgba(138, 154, 138, 0.7)"
              strokeDasharray="6 2"
              strokeWidth="4"
              fill="none"
              style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}
            />
            {/* Moving marker on innermost ring */}
            <g transform="translate(200, 320)">
              <circle cx="0" cy="-60" r="3.5" fill="#8a9a8a" opacity="1">
                <animateTransform attributeName="transform" type="rotate" values="0;-360" dur="35s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Center crosshair */}
            <g transform="translate(200, 320)">
              <line x1="-35" y1="0" x2="35" y2="0" stroke="currentColor" strokeWidth="3" className="text-norcal-sand" />
              <line x1="0" y1="-35" x2="0" y2="35" stroke="currentColor" strokeWidth="3" className="text-norcal-sand" />
            </g>
          </svg>
        </div>

        {/* Bottom info */}
        <div className="mt-4 flex justify-between items-end text-[10px] font-mono tracking-widest text-norcal-sand leading-relaxed relative z-10">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="opacity-50 font-bold">&gt;</span>
              <span>SYSTEM MODE: ACTIVE CLIENT OPERATIONS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-50 font-bold">&gt;</span>
              <span>OPERATOR: FLC-2025</span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="mb-1 text-norcal-sage">AES-256 /</div>
            <div className="font-bold text-norcal-sand">ENTERPRISE SECURITY</div>
          </div>
        </div>
      </div>
    </div>
  )
}

