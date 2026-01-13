import type { Metadata } from 'next'
import { Space_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const playfairDisplay = Playfair_Display({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Felipe Clavijo - Data Operations Strategist',
  description: 'Personal portfolio showcasing expertise in data analytics, AI, and project management across international markets.',
  keywords: ['data analyst', 'project manager', 'AI', 'analytics', 'international trade', 'portfolio'],
  authors: [{ name: 'Felipe Clavijo' }],
  creator: 'Felipe Clavijo',
  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
    ],
    apple: '/favicon.jpg',
  },
  openGraph: {
    title: 'Felipe Clavijo - Data Operations Strategist',
    description: 'Personal portfolio showcasing expertise in data analytics, AI, and project management.',
    url: 'https://felipeclavijo.dev',
    siteName: 'Felipe Clavijo Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felipe Clavijo - Data Operations Strategist',
    description: 'Personal portfolio showcasing expertise in data analytics, AI, and project management.',
    creator: '@felipeclavijo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceMono.variable} ${playfairDisplay.variable} ${spaceMono.className} min-h-screen bg-norcal-dark text-norcal-sand selection:bg-norcal-clay selection:text-white`}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
