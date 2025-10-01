'use client'

import { useEffect, useRef, useState } from 'react'

interface ParticleDissolveProps {
  targetImageId: string
  autoStart?: boolean
}

export default function ParticleDissolve({ targetImageId, autoStart = true }: ParticleDissolveProps) {
  const [isTriggered, setIsTriggered] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!autoStart) return

    const startEffect = () => {
      const targetElement = document.getElementById(targetImageId)
      const img = targetElement?.querySelector('img') as HTMLImageElement
      
      if (!img || !canvasRef.current) {
        // Retry if elements not ready
        setTimeout(startEffect, 200)
        return
      }

      setIsTriggered(true)
      
      // Convert image to black and white
      img.style.filter = 'grayscale(100%) contrast(150%) brightness(120%)'
      img.style.transition = 'filter 1s ease-out'

      // Setup canvas
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const rect = img.getBoundingClientRect()
      canvas.style.position = 'fixed'
      canvas.style.left = `${rect.left}px`
      canvas.style.top = `${rect.top}px`
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      canvas.style.pointerEvents = 'none'
      canvas.style.zIndex = '1000'
      canvas.width = rect.width
      canvas.height = rect.height

      // Create particles after a delay
      setTimeout(() => {
        // Start fading the original image
        img.style.opacity = '0'
        img.style.transition = 'opacity 2s ease-out'

        // Create particles
        const particles: any[] = []
        const gridSize = 4

        for (let x = 0; x < rect.width; x += gridSize) {
          for (let y = 0; y < rect.height; y += gridSize) {
            // Create particles in circular pattern (since image is circular)
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
            
            if (distance < rect.width / 2 - 10) { // Only within circle
              const angle = Math.random() * Math.PI * 2
              const speed = 2 + Math.random() * 3
              
              particles.push({
                x,
                y,
                vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
                vy: Math.sin(angle) * speed - 1,
                life: 0,
                maxLife: 60 + Math.random() * 90,
                size: Math.random() * 3 + 1,
                alpha: 0.8 + Math.random() * 0.2
              })
            }
          }
        }

        particlesRef.current = particles

        // Animation loop
        const animate = () => {
          ctx.clearRect(0, 0, rect.width, rect.height)
          
          particlesRef.current.forEach((particle, index) => {
            particle.life++
            particle.x += particle.vx
            particle.y += particle.vy
            particle.vy += 0.1 // Gravity
            particle.vx *= 0.99 // Air resistance
            
            const lifeRatio = particle.life / particle.maxLife
            const alpha = particle.alpha * (1 - lifeRatio)
            
            if (alpha > 0.01) {
              ctx.save()
              ctx.globalAlpha = alpha
              ctx.fillStyle = '#ffffff'
              ctx.shadowBlur = 4
              ctx.shadowColor = '#00ffff'
              ctx.beginPath()
              ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
              ctx.fill()
              ctx.restore()
            }
            
            if (particle.life >= particle.maxLife) {
              particlesRef.current.splice(index, 1)
            }
          })
          
          if (particlesRef.current.length > 0) {
            animationRef.current = requestAnimationFrame(animate)
          } else {
            setIsTriggered(false)
          }
        }
        
        animate()
      }, 1000)
    }

    // Start after page loads
    const timer = setTimeout(startEffect, 2000)
    return () => clearTimeout(timer)
  }, [autoStart, targetImageId])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  if (!isTriggered) return null

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none"
    />
  )
}