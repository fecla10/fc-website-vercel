'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ParticleDissolve from '@/components/ParticleDissolve'
import dynamic from 'next/dynamic'
import { RevenueGrowthChart, ProcessingTimeChart, CostSavingsChart } from '@/components/achievement-charts'

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
                <div className="absolute -inset-8 rounded-3xl border border-blue-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
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
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="startup-section pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 startup-accent leading-tight">What I Bring</h2>
            
            {/* Elegant Interactive Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-blue-600/10 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(139, 92, 246, 0.2) 100%)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                }}
              />

              {/* Pulsing dot */}
              <motion.div
                className="w-2 h-2 bg-cyan-400 rounded-full relative z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              <span className="text-sm font-medium text-cyan-300 relative z-10">
                Core Expertise
              </span>
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
                }}
              />
            </motion.div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              International expertise meets cutting-edge technology. From professional athletics 
              to data science, I bring a unique perspective to every challenge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Data Analytics Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="startup-card p-8 text-center relative overflow-hidden group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                }}
              />

              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ 
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.5 }
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(37, 99, 235, 0.5))',
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <motion.svg
                  className="w-10 h-10 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </motion.svg>
              </motion.div>
              
              <motion.h3
                className="text-xl font-bold text-white mb-4 relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                Data Analytics
              </motion.h3>
              <motion.p
                className="text-gray-300 relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                Transform complex datasets into actionable business insights with advanced analytics and visualization.
              </motion.p>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </motion.div>

            {/* AI Automation Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="startup-card p-8 text-center relative overflow-hidden group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                }}
              />

              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{ 
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.5 }
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.5))',
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <motion.svg
                  className="w-10 h-10 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </motion.svg>
              </motion.div>
              
              <motion.h3
                className="text-xl font-bold text-white mb-4 relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                AI Automation
              </motion.h3>
              <motion.p
                className="text-gray-300 relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                Streamline operations with intelligent automation solutions that scale with your business growth.
              </motion.p>

              {/* Pulsing rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-blue-400 rounded-lg"
                  style={{
                    borderColor: `rgba(59, 130, 246, ${0.3 - i * 0.1})`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </motion.div>

            {/* Global Markets Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="startup-card p-8 text-center relative overflow-hidden group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                }}
              />

              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ 
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.5 }
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.5))',
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <motion.svg
                  className="w-10 h-10 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
              </motion.div>
              
              <motion.h3
                className="text-xl font-bold text-white mb-4 relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                Global Markets
              </motion.h3>
              <motion.p
                className="text-gray-300 relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                International experience across US, Europe, and Latin America brings unique market perspectives.
              </motion.p>

            </motion.div>
          </div>

          {/* Achievement Charts Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 startup-accent">Measurable Impact</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <RevenueGrowthChart />
              <ProcessingTimeChart />
              <CostSavingsChart />
            </div>
          </motion.div>

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
