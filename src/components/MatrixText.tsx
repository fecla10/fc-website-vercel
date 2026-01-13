'use client'

import { useEffect, useState, useRef } from 'react'

interface MatrixTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  trigger?: boolean
}

export default function MatrixText({
  text,
  className = '',
  delay = 0,
  speed = 30,
  trigger = false,
}: MatrixTextProps) {
  const [displayText, setDisplayText] = useState('')
  const hasAnimatedRef = useRef(false)
  const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789█▓▒░'

  useEffect(() => {
    if (!trigger) {
      setDisplayText('')
      return
    }
    
    if (hasAnimatedRef.current) {
      setDisplayText(text)
      return
    }

    hasAnimatedRef.current = true
    setDisplayText('')

    let currentIndex = 0
    let scrambleCount = 0
    const maxScrambles = 3

    const timeoutId = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex >= text.length) {
          setDisplayText(text)
          clearInterval(interval)
          return
        }

        let result = text.slice(0, currentIndex)
        
        if (scrambleCount < maxScrambles) {
          result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
          scrambleCount++
        } else {
          result += text[currentIndex]
          currentIndex++
          scrambleCount = 0
        }
        
        // Fill remaining space with scrambled characters to maintain width
        for (let i = currentIndex; i < text.length; i++) {
          if (text[i] === ' ') {
            result += ' '
          } else {
            result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
          }
        }

        setDisplayText(result)
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [trigger, text, delay, speed])

  return <span className={className}>{displayText || text}</span>
}
