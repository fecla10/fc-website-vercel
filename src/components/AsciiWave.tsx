'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

export default function AsciiWave() {
  const [waveFrame, setWaveFrame] = useState<string>('')
  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)

  const generateWave = useCallback((time: number) => {
    // Calculate dimensions based on character size
    const charWidth = 8
    const charHeight = 16
    const cols = Math.ceil(window.innerWidth / charWidth) + 20
    const rows = Math.ceil(window.innerHeight / charHeight)

    // Wave parameters - smooth snake movement
    const waveSpeed = time * 0.001 // Slower, smoother pace
    const waveHeight = rows * 0.5 // Taller wave section
    const waveStart = rows * 0.45 // Center position

    const lines: string[] = []

    for (let y = 0; y < rows; y++) {
      let line = ''
      for (let x = 0; x < cols; x++) {
        // Snake-like wave with larger amplitudes and varying frequencies
        const wave1 = Math.sin((x * 0.025) + waveSpeed) * 12 // Primary wave - bigger
        const wave2 = Math.sin((x * 0.015) + waveSpeed * 1.5) * 10 // Secondary wave
        const wave3 = Math.sin((x * 0.04) + waveSpeed * 0.8) * 6 // Ripple
        const wave4 = Math.sin((x * 0.008) + waveSpeed * 0.5) * 15 // Long undulation (snake body)
        const combinedWave = wave1 + wave2 + wave3 + wave4

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
  }, [])

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
        className="ascii-wave text-norcal-sage/80 font-mono text-[12px] leading-[16px] whitespace-pre w-full h-full"
        style={{
          fontFamily: '"Space Mono", "Fira Code", "Consolas", monospace',
        }}
      >
        {waveFrame}
      </pre>
      {/* Gradient overlay - faded at top hero area, visible below */}
      <div className="absolute inset-0 bg-gradient-to-b from-norcal-dark/70 from-0% via-norcal-dark/50 via-35% to-transparent to-55%" />
      <div className="absolute inset-0 bg-gradient-to-r from-norcal-dark/10 via-transparent to-norcal-dark/10" />
    </div>
  )
}
