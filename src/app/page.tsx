'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ParticleDissolve from '@/components/ParticleDissolve'
import AsciiWave from '@/components/AsciiWave'
import dynamic from 'next/dynamic'

const Interactive3DGlobe = dynamic(() => import('@/components/Interactive3DGlobe'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-norcal-clay/30 border-t-norcal-clay rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-norcal-sage">Loading interactive globe...</p>
      </div>
    </div>
  )
})

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* ASCII Wave Background */}
      <AsciiWave />
      
      {/* Modern Startup Hero Section */}
      <section className="startup-hero pt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full startup-card border border-norcal-clay/30 mb-8 cursor-default"
              animate={{ 
                scale: [1, 1.02, 1],
                y: [0, -4, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(196, 127, 98, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="w-2 h-2 bg-norcal-clay rounded-full mr-2 sm:mr-3"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-[10px] sm:text-xs text-norcal-sage font-mono uppercase tracking-wider sm:tracking-widest">Available for new projects</span>
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <div className="text-center mb-20">
            <motion.h1 
              className="startup-title mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building the Future
              <br />
              <span className="startup-accent">with Data & AI</span>
            </motion.h1>

            <motion.p 
              className="startup-subtitle max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Strategic data consultant specializing in AI automation, business intelligence, 
              and international market expansion. Transforming complex data into actionable insights 
              that drive growth and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/dashboard" className="startup-cta inline-flex items-center group w-full sm:w-auto justify-center">
                <span className="relative z-10">Talk with Francesca</span>
                <svg className="ml-3 w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              
              <a 
                href="/Felipe_Clavijo_Resume.pdf" 
                download 
                className="px-6 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-widest text-norcal-sage border border-norcal-stone hover:border-norcal-clay hover:text-norcal-clay transition-all duration-500 inline-flex items-center group w-full sm:w-auto justify-center"
              >
                <svg className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Profile & Globe Grid */}
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
            {/* Left Column - Profile */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="relative">
                <div 
                  id="hero-profile-image"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden startup-card border border-norcal-clay/30 shadow-2xl"
                >
                  <Image
                    src="/felipe-profile.jpg"
                    alt="Felipe Clavijo"
                    width={384}
                    height={384}
                    priority
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    style={{ objectPosition: 'center 22%' }}
                  />
                </div>
                <div className="absolute -inset-3 sm:-inset-4 rounded-xl border border-norcal-clay/20 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Right Column - Globe */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Interactive3DGlobe />
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-norcal-clay/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-norcal-sage/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-norcal-stone to-transparent my-12 opacity-50 relative z-10"></div>

      {/* Features Section with ASCII Art on sides */}
      <section className="startup-section relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8">
            {/* Left - Tree ASCII */}
            <div className="flex-shrink-0 opacity-60 hover:opacity-90 transition-opacity duration-500">
              <pre className="font-mono text-[6px] sm:text-[8px] lg:text-[10px] leading-[8px] sm:leading-[10px] lg:leading-[12px] text-norcal-sage whitespace-pre">
{`      &&& &&  & &&
  && &\\/&\\|& ()|/ @, &&
  &\\/(/&/&||/& /_/)_&/_&
&() &\\/&|()|/&\\/ '%" & ()
&_\\_&&_\\ |& |&&/&__%_/_& &&
&&   && & &| &| /& & % ()& /&&
 ()&_---()&\\&\\|&&-&&--%---()~
     &&     \\|||
             |||
             |||
       _____[___]_____
       \\             /
        \\___________/`}
              </pre>
            </div>

            {/* Center - Expertise Container */}
            <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 bg-norcal-dark/60 backdrop-blur-[2px] rounded-xl p-8 border border-norcal-stone/30"
          >
            <div className="mb-8 ml-1 border-l-2 border-norcal-clay/50 pl-3">
              <h2 className="text-xs tracking-[0.2em] text-norcal-sage uppercase mb-1">Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 pl-4">
              <div>
                <h4 className="text-norcal-sand text-xs font-bold uppercase tracking-widest mb-4 opacity-70">Analytics</h4>
                <ul className="space-y-2">
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Business Intelligence</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Data Visualization</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Statistical Modeling</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Predictive Analytics</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-norcal-sand text-xs font-bold uppercase tracking-widest mb-4 opacity-70">Technology</h4>
                <ul className="space-y-2">
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">AI Automation</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Python & SQL</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Cloud Infrastructure</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">API Integration</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-norcal-sand text-xs font-bold uppercase tracking-widest mb-4 opacity-70">Markets</h4>
                <ul className="space-y-2">
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">United States</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Europe</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Latin America</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Global Expansion</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-norcal-sand text-xs font-bold uppercase tracking-widest mb-4 opacity-70">Background</h4>
                <ul className="space-y-2">
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Professional Athlete</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Data Science</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">Strategic Consulting</li>
                  <li className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">International Business</li>
                </ul>
              </div>
            </div>
          </motion.div>
            </div>

          </div>

        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-norcal-dark/60 backdrop-blur-[2px] rounded-xl p-8 border border-norcal-stone/30 mb-20"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h2 className="text-norcal-sand text-lg mb-2">Open Frequency</h2>
                <p className="text-norcal-sage text-xs max-w-xs leading-relaxed">
                  Always open to discussions on data, technology, and the intersection of business strategy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a 
                  href="https://www.linkedin.com/in/felipe-clavijoc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-norcal-stone text-norcal-sand hover:bg-norcal-sand hover:text-norcal-dark transition-all duration-500 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:feclavijo@gmail.com" 
                  className="px-4 py-3 sm:px-6 border border-norcal-stone text-norcal-sand text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest hover:bg-norcal-sand hover:text-norcal-dark transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  Contact
                </a>
              </div>
            </div>
            
            <div className="mt-24 flex justify-between items-end text-[10px] text-norcal-mist uppercase tracking-widest">
              <span>Los Angeles, CA</span>
              <span>© 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Particle Dissolve Effect */}
      <ParticleDissolve targetImageId="hero-profile-image" autoStart={true} />
    </div>
  )
}
