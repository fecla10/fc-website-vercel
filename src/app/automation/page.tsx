'use client'

import HeroSection from '@/components/sections/HeroSection'
import ActiveAutomationRegistry from '@/components/sections/ActiveAutomationRegistry'
import OperationsArchitecture from '@/components/sections/OperationsArchitecture'
import SolutionsCatalog from '@/components/sections/SolutionsCatalog'
import EngagementProcess from '@/components/sections/EngagementProcess'
import SystemStatus from '@/components/sections/SystemStatus'

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-norcal-dark">
      <HeroSection />
      <div id="capabilities">
        <ActiveAutomationRegistry />
      </div>
      <OperationsArchitecture />
      <div id="solutions">
        <SolutionsCatalog />
      </div>
      <div id="process">
        <EngagementProcess />
      </div>
      <SystemStatus />
      <div id="contact" className="py-24 px-4 md:px-8 border-t border-norcal-stone/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-6 text-norcal-sand">
            Ready to automate your operations?
          </h2>
          <p className="text-sm md:text-base text-norcal-sage opacity-80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how AI automation can transform your business processes.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:feclavijo@gmail.com"
              className="px-8 py-4 bg-norcal-clay text-norcal-dark font-mono text-xs font-bold tracking-[0.25em] hover:bg-norcal-clay/80 transition-all uppercase inline-block"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

