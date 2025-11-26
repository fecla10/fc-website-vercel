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
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-12 flex justify-between items-start mix-blend-screen">
      {/* Logo */}
      <div className="flex items-start gap-3">
        <Link href="/" className="text-sm sm:text-base font-bold tracking-widest text-norcal-sand uppercase opacity-80 hover:opacity-100 transition-opacity duration-300">
          Felipe<br />Clavijo
        </Link>
      </div>

      {/* Navigation - visible on all screens */}
      <ul className="flex flex-row gap-4 sm:gap-8 text-[10px] sm:text-xs tracking-widest">
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
    </nav>
  )
}
