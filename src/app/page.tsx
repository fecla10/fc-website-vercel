'use client'

import { Suspense, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ParticleDissolve from '@/components/ParticleDissolve'
import AsciiWave from '@/components/AsciiWave'
import MatrixText from '@/components/MatrixText'
import dynamic from 'next/dynamic'
import OperationsArchitecture from '@/components/sections/OperationsArchitecture'

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

// Expertise Container with Matrix Effect
function ExpertiseContainer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isTriggered, setIsTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTriggered) {
          setIsTriggered(true)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isTriggered])

  const expertiseData = [
    { title: 'Analytics', items: ['Business Intelligence', 'Data Visualization', 'Statistical Modeling', 'Predictive Analytics'] },
    { title: 'Technology', items: ['AI Automation', 'Python & SQL', 'Cloud Infrastructure', 'API Integration'] },
    { title: 'Markets', items: ['United States', 'Europe', 'Latin America', 'Global Expansion'] },
    { title: 'Background', items: ['Professional Athlete', 'Data Science', 'Strategic Consulting', 'International Business'] },
  ]

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-norcal-dark/60 backdrop-blur-[2px] rounded-xl p-4 sm:p-6 md:p-8 border border-norcal-stone/30"
    >
      <div className="mb-6 sm:mb-8 ml-1 border-l-2 border-norcal-clay/50 pl-2 sm:pl-3">
        <h2 className="text-xs font-mono tracking-[0.2em] text-norcal-clay uppercase mb-1">
          <MatrixText text="Expertise" trigger={isTriggered} delay={0} speed={60} />
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-12 pl-2 sm:pl-4">
        {expertiseData.map((category, catIndex) => (
          <div key={category.title}>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
              <MatrixText text={category.title} trigger={isTriggered} delay={200 + catIndex * 300} speed={50} />
            </h4>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={item} className="text-norcal-sage text-sm hover:text-norcal-clay transition-colors duration-300 cursor-default">
                  <MatrixText text={item} trigger={isTriggered} delay={400 + catIndex * 300 + itemIndex * 100} speed={25} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen relative bg-norcal-dark">
      {/* ASCII Wave Background */}
      <AsciiWave />
      
      {/* Modern Startup Hero Section */}
      <section className="startup-hero pt-4">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 mt-16"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-norcal-stone/60 backdrop-blur-sm border-2 border-norcal-clay/70 mb-8 cursor-default shadow-xl"
              style={{ borderColor: 'rgba(196, 127, 98, 0.7)' }}
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
                borderColor: 'rgba(196, 127, 98, 0.8)',
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
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.h1 
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.85] sm:leading-[0.82] tracking-tighter mb-6 sm:mb-8 px-2 text-norcal-sand"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building the Future
              <br />
              <span className="startup-accent italic">with Data & AI</span>
            </motion.h1>

            <motion.p 
              className="startup-subtitle max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Automation architect specializing in AI agents, data pipelines, and intelligent workflows. I help companies eliminate manual processes, scale operations, and turn complex data into actionable growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="flex justify-center items-center mb-12 sm:mb-16 md:mb-20 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/dashboard" className="startup-cta inline-flex items-center group w-full sm:w-auto justify-center max-w-xs sm:max-w-none">
                <span className="relative z-10">Talk with Francesca</span>
                <svg className="ml-3 w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Profile & Globe Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 items-center mb-8 sm:mb-12">
            {/* Left Column - Profile */}
            <motion.div 
              className="flex justify-center order-1 lg:order-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-none">
                <div 
                  id="hero-profile-image"
                  className="w-full aspect-square max-w-[256px] sm:max-w-[320px] lg:max-w-[384px] mx-auto rounded-xl overflow-hidden startup-card border border-norcal-clay/30 shadow-2xl"
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
                <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-xl border border-norcal-clay/20 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Right Column - Globe */}
            <motion.div 
              className="relative order-2 lg:order-none w-full"
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

      {/* Expertise Container - Right after Profile & Globe */}
      <section className="startup-section relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-start lg:items-center">
            {/* Expertise Container with Matrix Effect */}
            <ExpertiseContainer />

            {/* Tree ASCII - to the right of Expertise */}
            <div className="flex justify-center lg:justify-end opacity-60 hover:opacity-90 transition-opacity duration-500 order-first lg:order-none">
              <div className="bg-norcal-dark/60 backdrop-blur-[2px] rounded-xl p-4 sm:p-6 lg:p-8 border border-norcal-stone/30 cursor-pointer transition-all duration-300 group">
                <pre className="font-mono text-[6px] sm:text-[8px] lg:text-[10px] leading-[8px] sm:leading-[10px] lg:leading-[12px] text-norcal-sage whitespace-pre group-hover:text-orange-500 group-active:text-orange-600 transition-colors duration-300">
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
            </div>
          </div>
        </div>
      </section>

      {/* Operations Architecture - Right after Expertise section */}
      <OperationsArchitecture />

      {/* Contact Section - Right after OperationsArchitecture */}
      <section className="startup-section relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-norcal-dark/60 backdrop-blur-[2px] rounded-xl p-6 sm:p-8 border border-norcal-stone/30 mb-6 sm:mb-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-norcal-clay/20 hover:border-norcal-clay/50"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
              <div className="flex-1 min-w-0">
                <h2 className="text-norcal-sand text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-serif">Open Frequency</h2>
                <p className="text-norcal-sage text-xs sm:text-sm max-w-xs leading-relaxed break-words">
                  Always open to discussions on data, technology, and the intersection of business strategy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto shrink-0">
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
            
            <div className="mt-12 sm:mt-16 md:mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0 text-[9px] sm:text-[10px] text-norcal-mist uppercase tracking-widest">
              <span className="whitespace-nowrap">Los Angeles, CA</span>
              <span className="tracking-[0.2em] sm:tracking-[0.25em] text-center sm:text-right break-words sm:break-normal">© 2025 FELIPE CLAVIJO | AI & AUTOMATION SOLUTIONS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-norcal-stone to-transparent my-12 opacity-50 relative z-10"></div>

      {/* Particle Dissolve Effect */}
      <ParticleDissolve targetImageId="hero-profile-image" autoStart={true} />
    </div>
  )
}
