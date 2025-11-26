'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Assistant', href: '/dashboard' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-12 flex justify-between items-start mix-blend-screen">
      {/* Logo */}
      <div className="flex items-start gap-3">
        <Link href="/" className="text-base font-bold tracking-widest text-norcal-sand uppercase opacity-80 hover:opacity-100 transition-opacity duration-300">
          Felipe<br />Clavijo
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-row gap-8 text-xs tracking-widest">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`uppercase transition-colors duration-300 ${
                pathname === item.href
                  ? 'text-norcal-clay'
                  : 'text-norcal-sage hover:text-norcal-sand'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-norcal-sage hover:text-norcal-sand transition-colors uppercase text-xs tracking-widest"
        aria-label="Toggle menu"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-norcal-dark/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile menu content */}
          <div className="relative z-50 flex flex-col items-end p-6 pt-20">
            <ul className="flex flex-col gap-6 text-right">
              {navItems.map((item, index) => (
                <li 
                  key={item.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-light tracking-widest uppercase transition-colors duration-300 ${
                      pathname === item.href
                        ? 'text-norcal-clay'
                        : 'text-norcal-sage hover:text-norcal-sand'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile footer info */}
            <div className="mt-auto pt-12 text-right">
              <p className="text-norcal-mist text-[10px] uppercase tracking-widest">Los Angeles, CA</p>
              <a 
                href="mailto:feclavijo@gmail.com" 
                className="text-norcal-sage text-xs hover:text-norcal-clay transition-colors"
              >
                feclavijo@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
