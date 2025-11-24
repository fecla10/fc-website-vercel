'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Resume() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold neon-text mb-4"
          >
            Resume
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Download my complete resume or explore key highlights
          </motion.p>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6 neon-text">Download Resume</h2>
              <p className="text-gray-300 mb-6">
                Get the full version of my resume with detailed experience, skills, and achievements.
              </p>

              <a
                href="/Felipe_Clavijo_Resume.pdf"
                download="Felipe_Clavijo_Resume.pdf"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 w-full justify-center"
              >
                <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>

              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-400 mb-2">File Info</h3>
                <p className="text-xs text-gray-500">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  <br />
                  Format: PDF • Size: ~200KB
                </p>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 neon-text">Professional Summary</h3>
                <p className="text-gray-300 leading-relaxed">
                  Strategic data consultant and project manager specializing in AI-powered analytics, 
                  data warehousing, and business intelligence. Expert in automating complex data operations, 
                  reducing processing times by up to 97%, and delivering actionable insights for international 
                  businesses across multiple markets.
                </p>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 neon-text">Key Achievements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Achieved 98% on-time delivery managing cross-functional teams for luxury furniture projects averaging $70K</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reduced data processing time by 97% (1 hour to 2 minutes) through automated ETL processes and Power BI solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Negotiated 26% cost savings with premium manufacturers while maintaining luxury service standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Drove $1M+ revenue growth and secured 20+ distributor partnerships across 7 international markets</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improved reporting accuracy by 85% through unified data warehouse consolidation</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 neon-text">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Analytics', 'AI/ML', 'Python', 'Power BI', 'Databricks', 'Project Management', 
                    'Web Scraping', 'ETL Processes', 'Data Warehousing', 'SAP', 'ERP', 'Financial Modeling',
                    'ROI Analysis', 'International Trade', 'Supply Chain', 'Business Intelligence',
                    'Cursor', 'Claude', 'Next.js', 'Vercel', 'Supabase', 'Prompt Engineering',
                    'Agentic Frameworks', 'RAG', 'VectorDBs', 'LLMs'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 glass-card text-gray-300 hover:text-cyan-400 transition-colors rounded-lg"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

