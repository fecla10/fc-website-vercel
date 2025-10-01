'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ParticleDissolve from '@/components/ParticleDissolve'
import dynamic from 'next/dynamic'

const Interactive3DGlobe = dynamic(() => import('@/components/Interactive3DGlobe'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-300">Loading interactive globe...</p>
      </div>
    </div>
  )
})

export default function Home() {
  return (
    <div className="min-h-screen">
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
            <div className="inline-flex items-center px-6 py-3 rounded-full startup-card border border-cyan-500/20 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm text-gray-300 font-medium">Available for new opportunities</span>
            </div>
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
              className="startup-subtitle max-w-4xl mx-auto mb-16"
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
              <Link href="/dashboard" className="startup-cta text-white inline-flex items-center group">
                <span className="relative z-10">Talk with Francesca</span>
                <svg className="ml-3 w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              
              <a 
                href="/Felipe_Clavijo_Resume.pdf" 
                download 
                className="px-10 py-5 rounded-2xl font-bold text-lg text-gray-300 border-2 border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 inline-flex items-center group"
              >
                <svg className="mr-3 w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Profile & Globe Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
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
                  className="w-96 h-96 rounded-3xl overflow-hidden startup-card border-4 border-cyan-400/20 shadow-2xl"
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
                <div className="absolute -inset-4 rounded-3xl border border-cyan-400/30 animate-pulse"></div>
                <div className="absolute -inset-8 rounded-3xl border border-purple-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="startup-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 startup-accent">What I Bring</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              International expertise meets cutting-edge technology. From professional athletics 
              to data science, I bring a unique perspective to every challenge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="startup-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300">
                Transform complex datasets into actionable business insights with advanced analytics and visualization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="startup-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Automation</h3>
              <p className="text-gray-300">
                Streamline operations with intelligent automation solutions that scale with your business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="startup-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Markets</h3>
              <p className="text-gray-300">
                International experience across US, Europe, and Latin America brings unique market perspectives.
              </p>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="startup-card p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-8 startup-accent">Let&apos;s Connect</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to transform your data into competitive advantage? 
              Let&apos;s discuss how we can accelerate your business growth.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:feclavijo@gmail.com" 
                className="startup-cta text-white inline-flex items-center group"
              >
                <svg className="mr-3 w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>feclavijo@gmail.com</span>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Los Angeles, CA
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                24hr Response Time
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for Projects
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Particle Dissolve Effect */}
      <ParticleDissolve targetImageId="hero-profile-image" autoStart={true} />
    </div>
  )
}
