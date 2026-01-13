'use client'

interface TelemetryMetric {
  label: string
  value: string
  progress?: number
  progressColor?: string
}

interface TelemetryBoxProps {
  title: string
  metrics: TelemetryMetric[]
  footer?: {
    left?: { label: string; value: string }
    right?: { label: string; value: string; highlight?: boolean }
  }
  className?: string
}

export default function TelemetryBox({ title, metrics, footer, className = '' }: TelemetryBoxProps) {
  return (
    <div className={`p-4 sm:p-5 md:p-6 border border-norcal-stone/30 bg-norcal-stone/40 backdrop-blur-sm ${className}`}>
      <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider sm:tracking-widest mb-4 sm:mb-6 opacity-40 uppercase border-b border-norcal-stone/20 pb-2 break-words">
        {title}
      </div>
      
      <div className="flex flex-col gap-3 sm:gap-4 mb-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex justify-between items-end gap-2">
              <span className="text-[7px] sm:text-[8px] font-mono opacity-40 uppercase tracking-wider sm:tracking-widest break-words">
                {metric.label}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold whitespace-nowrap">
                {metric.value}
              </span>
            </div>
            {metric.progress !== undefined && (
              <div className="h-[1px] w-full bg-norcal-stone/20 relative overflow-hidden">
                <div 
                  className={`absolute top-0 left-0 h-full transition-all duration-1000 ${
                    metric.progressColor || 'bg-norcal-clay'
                  }`}
                  style={{ width: `${metric.progress}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {footer && (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-norcal-stone/20 grid grid-cols-2 gap-3 sm:gap-4">
          {footer.left && (
            <div className="min-w-0">
              <span className="block text-[6px] sm:text-[7px] font-mono opacity-40 uppercase break-words">
                {footer.left.label}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold break-words">
                {footer.left.value}
              </span>
            </div>
          )}
          {footer.right && (
            <div className="text-right min-w-0">
              <span className="block text-[6px] sm:text-[7px] font-mono opacity-40 uppercase break-words">
                {footer.right.label}
              </span>
              <span className={`text-[9px] sm:text-[10px] font-mono font-bold ${footer.right.highlight ? 'text-norcal-clay' : ''} break-words`}>
                {footer.right.value}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

