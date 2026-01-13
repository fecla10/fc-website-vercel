'use client'

interface CornerBracketsProps {
  className?: string
  color?: string
}

export default function CornerBrackets({ className = '', color = 'text-norcal-sand' }: CornerBracketsProps) {
  return (
    <>
      <div className={`corner-bracket bracket-tl ${color} ${className}`}></div>
      <div className={`corner-bracket bracket-tr ${color} ${className}`}></div>
      <div className={`corner-bracket bracket-bl ${color} ${className}`}></div>
      <div className={`corner-bracket bracket-br ${color} ${className}`}></div>
    </>
  )
}

