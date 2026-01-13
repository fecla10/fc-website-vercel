'use client'

interface StatusIndicatorProps {
  status: 'active' | 'syncing' | 'standby' | 'error'
  size?: 'sm' | 'md'
}

export default function StatusIndicator({ status, size = 'sm' }: StatusIndicatorProps) {
  const sizeClasses = size === 'sm' ? 'w-2 h-2' : 'w-3 h-3'
  
  const statusConfig = {
    active: {
      bg: 'bg-norcal-clay',
      pulse: false,
    },
    syncing: {
      bg: 'bg-blue-400',
      pulse: true,
    },
    standby: {
      bg: 'bg-norcal-stone/40',
      pulse: false,
    },
    error: {
      bg: 'bg-red-500',
      pulse: true,
    },
  }
  
  // Handle green indicator for special cases
  if (status === 'active' && size === 'sm') {
    // This will be overridden by parent if needed
  }

  const config = statusConfig[status]

  return (
    <div 
      className={`${sizeClasses} rounded-full ${config.bg} ${config.pulse ? 'animate-pulse' : ''}`}
      aria-label={`Status: ${status}`}
    />
  )
}

