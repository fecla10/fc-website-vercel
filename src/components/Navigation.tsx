'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Assistant', href: '/dashboard' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 flex justify-between items-center bg-norcal-dark/80 backdrop-blur-sm border-b border-norcal-stone/30">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-wider sm:tracking-widest text-norcal-sand uppercase opacity-90 hover:opacity-100 transition-opacity duration-300 break-words">
          FELIPE CLAVIJO
        </Link>
      </div>

      {/* Navigation - visible on all screens */}
      <ul className="flex flex-row gap-4 sm:gap-6 md:gap-8 text-[10px] sm:text-xs font-mono tracking-[0.15em] sm:tracking-[0.2em] font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`uppercase transition-opacity duration-300 ${
                pathname === item.href
                  ? 'text-norcal-clay'
                  : 'text-norcal-sage hover:opacity-60'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
