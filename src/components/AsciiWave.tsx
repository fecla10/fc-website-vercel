'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

export default function AsciiWave() {
  const [waveFrame, setWaveFrame] = useState<string>('')
  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)

  // Simple pseudo-random function for consistent noise
  const noise = useCallback((x: number, y: number, t: number) => {
    return Math.sin(x * 0.1 + t * 0.3) * Math.cos(y * 0.1 + t * 0.2) * 0.5 +
           Math.sin(x * 0.05 + t * 0.15) * Math.cos(y * 0.05 + t * 0.1) * 0.3
  }, [])

  const generateWave = useCallback((time: number) => {
    // Calculate dimensions based on character size
    const charWidth = 8
    const charHeight = 16
    const cols = Math.ceil(window.innerWidth / charWidth) + 20
    const rows = Math.ceil(window.innerHeight / charHeight)

    // Continuous, smooth directional movement using sine/cosine for organic flow
    const t = time * 0.0001875 // Slower overall speed
    const directionX = Math.sin(t * 0.09375) * 0.8 + Math.cos(t * 0.075) * 0.4 // Slower direction change
    const directionY = Math.cos(t * 0.1125) * 0.8 + Math.sin(t * 0.0625) * 0.4 // Slower direction change
    
    // Wave speeds that continuously vary for smooth movement
    const waveSpeedX = t * (0.25 + directionX * 0.25) // Reduced speed
    const waveSpeedY = t * (0.21875 + directionY * 0.25) // Reduced speed
    const waveHeight = rows * 0.5 // Taller wave section
    const waveStart = rows * 0.45 + Math.sin(t * 0.09375) * 5 // Slower vertical drift

    const lines: string[] = []

    for (let y = 0; y < rows; y++) {
      let line = ''
      for (let x = 0; x < cols; x++) {
        // Add noise for organic movement patterns
        const noiseValue = noise(x, y, t * 0.5) * 8 // Slower noise
        
        // Snake-like wave with continuous multi-directional movement
        // Using varying frequencies and phases for smooth, continuous flow
        const wave1 = Math.sin((x * 0.025) + waveSpeedX + noiseValue * 0.1) * 12 // Primary wave
        const wave2 = Math.sin((x * 0.015) + waveSpeedX * 0.9375 + (y * 0.01) + waveSpeedY) * 10 // Diagonal movement
        const wave3 = Math.sin((x * 0.04) + waveSpeedX * 0.5 + (y * 0.02) + waveSpeedY * 0.375 + noiseValue * 0.2) * 6 // Ripple with diagonal
        const wave4 = Math.sin((x * 0.008) + waveSpeedX * 0.3125 + (y * 0.005) + waveSpeedY * 0.4375) * 15 // Long undulation
        const wave5 = Math.sin((y * 0.02) + waveSpeedY + noiseValue * 0.15) * 5 // Vertical wave component
        const wave6 = Math.sin((x * 0.03 + y * 0.015) + waveSpeedX * 0.4375 + waveSpeedY * 0.5625) * 7 // Diagonal flow
        
        const combinedWave = wave1 + wave2 + wave3 + wave4 + wave5 + wave6 + noiseValue

        // Calculate distance from wave surface
        const waveY = waveStart + combinedWave
        const distFromWave = y - waveY

        // Determine character based on position - thinner bands for snake look
        if (distFromWave < -waveHeight * 0.5) {
          line += ' '
        } else if (distFromWave < -waveHeight * 0.35) {
          line += '~'
        } else if (distFromWave < -waveHeight * 0.15) {
          line += '-'
        } else if (distFromWave < waveHeight * 0.15) {
          line += '·'
        } else if (distFromWave < waveHeight * 0.35) {
          line += '-'
        } else if (distFromWave < waveHeight * 0.5) {
          line += '~'
        } else {
          line += ' '
        }
      }
      lines.push(line)
    }

    return lines.join('\n')
  }, [noise])

  useEffect(() => {
    const animate = (timestamp: number) => {
      // ~45fps for smoother animation
      if (timestamp - lastTimeRef.current >= 22) {
        const frame = generateWave(timestamp)
        setWaveFrame(frame)
        lastTimeRef.current = timestamp
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [generateWave])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const frame = generateWave(performance.now())
      setWaveFrame(frame)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [generateWave])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-norcal-dark">
      <pre 
        className="ascii-wave text-norcal-sage/45 font-mono text-[12px] leading-[16px] whitespace-pre w-full h-full"
        style={{
          fontFamily: '"Space Mono", "Fira Code", "Consolas", monospace',
        }}
      >
        {waveFrame}
      </pre>
      {/* Gradient overlay - faded at top hero area, visible below */}
      <div className="absolute inset-0 bg-gradient-to-b from-norcal-dark/75 from-0% via-norcal-dark/60 via-35% to-transparent to-55%" />
      <div className="absolute inset-0 bg-gradient-to-r from-norcal-dark/15 via-transparent to-norcal-dark/15" />
    </div>
  )
}
