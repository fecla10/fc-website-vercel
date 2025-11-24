'use client'

import { useRef, useState, useEffect } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'

// Locations with accurate lat/lng, flags, and details based on resume
const experiences = [
  {
    city: 'Santiago',
    country: 'Chile',
    flag: '🇨🇱',
    role: 'Project Manager',
    period: 'Nov 2024 - Current',
    lat: -33.4489,
    lng: -70.6693,
    color: '#7B68EE',
    description: 'Managed cross-functional team of 6 specialists delivering luxury furniture to clients in Chile and Peru, achieving 98% on-time delivery and negotiating 26% cost savings.'
  },
  {
    city: 'New York',
    country: 'United States',
    flag: '🇺🇸',
    role: 'University',
    period: '2016-2020',
    lat: 40.7128,
    lng: -74.0060,
    color: '#32CD32',
    description: 'Earned B.S. in Business Administration with full scholarship as a D1 student-athlete, transitioning from professional soccer to business excellence.'
  },
  {
    city: 'West Palm Beach',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Healthcare Internship',
    period: 'Apr 2018 - Jan 2020',
    lat: 26.7153,
    lng: -80.0534,
    color: '#FFB347',
    description: 'Improved reporting by implementing robust data entry and analysis using Salesforce and Excel to support marketing and sales teams.'
  },
  {
    city: 'Chicago',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Import-Export Coordinator',
    period: '2020-2021',
    lat: 41.8781,
    lng: -87.6298,
    color: '#FF6B6B',
    description: 'Managed 100% of air/ocean freight operations and automated 50% of data entry processes using Cargowise EDI capabilities for 500+ monthly shipments.'
  },
  {
    city: 'Sofia',
    country: 'Bulgaria',
    flag: '🇧🇬',
    role: 'Data Analyst',
    period: 'Jan 2021 - Dec 2021',
    lat: 42.6977,
    lng: 23.3219,
    color: '#DDA0DD',
    description: 'Developed data-driven proposal analyzing 1,000+ delivery records that secured $250K in capital investment and automated Power BI reports reducing manual time by 60%.'
  },
  {
    city: 'Sofia',
    country: 'Bulgaria',
    flag: '🇧🇬',
    role: 'Project Manager',
    period: 'Jan 2022 - Apr 2024',
    lat: 42.6977,
    lng: 23.3219 + 0.3, // Slight offset
    color: '#FF69B4',
    description: 'Directed Chilean wine portfolio operations, generated $1M+ revenue, secured 20+ distributor partnerships, and negotiated 28% price reductions boosting profit margins for $4M portfolio.'
  },
  {
    city: 'Osnabrück',
    country: 'Germany',
    flag: '🇩🇪',
    role: 'Logistics Analysis',
    period: '2021',
    lat: 52.2799,
    lng: 8.0472,
    color: '#FFD700',
    description: 'Analyzed transportation data during 4-month secondment identifying key patterns in UK-EU trade flows with 80% accuracy for post-Brexit scenarios.'
  },
  {
    city: 'Los Angeles',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Data & Business Analyst',
    period: 'Mar 2024 - Oct 2024',
    lat: 34.0522,
    lng: -118.2437,
    color: '#40E0D0',
    description: 'Automated market analysis reducing processing time by 96% and architected Power BI solutions for 2TB+ of data, consolidating 15+ KPIs from 10 markets into centralized dashboards.'
  },
  {
    city: 'Los Angeles',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Data Consulting',
    period: 'Jun 2025 - Current',
    lat: 34.0522,
    lng: -118.2437 + 0.3, // Slight offset
    color: '#00D4FF',
    description: 'Currently managing comprehensive data operations for startups, utilizing web scraping and AI tools like Cursor and Claude to design cloud-based data warehousing solutions.'
  }
]

type Experience = typeof experiences[0]

export default function Interactive3DGlobe() {
  const globeEl = useRef<GlobeMethods>()
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)
  const [hoveredExp, setHoveredExp] = useState<Experience | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth > 768 ? 600 : window.innerWidth - 40,
        height: window.innerWidth > 768 ? 600 : 400
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Auto-rotate globe
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 2.5
    }
  }, [])

  // Handle click with zoom and show details
  const handleGlobeClick = (d: any) => {
    if (!d) return
    
    // Find the matching experience from our array by comparing lat/lng
    // Handle both direct data and nested data structures
    const clickedLat = d.lat ?? d.lat
    const clickedLng = d.lng ?? d.lng
    
    const exp = experiences.find(e => 
      Math.abs(e.lat - clickedLat) < 0.1 && 
      Math.abs(e.lng - clickedLng) < 0.1
    )
    
    if (exp) {
      setSelectedExp(exp)
      
      // Stop auto-rotation when clicking
      if (globeEl.current) {
        globeEl.current.controls().autoRotate = false
        
        // Zoom to the clicked location
        globeEl.current.pointOfView({
          lat: exp.lat,
          lng: exp.lng,
          altitude: 1.5
        }, 1000) // 1 second animation
      }
    }
  }

  // Handle mouse move to restart rotation
  const handleMouseMove = () => {
    if (globeEl.current && !selectedExp) {
      globeEl.current.controls().autoRotate = true
    }
  }

  // Custom HTML marker with hover tooltip and click handler
  const getMarker = (d: any) => {
    // Find the matching experience from our array
    const exp = experiences.find(e => 
      Math.abs(e.lat - d.lat) < 0.1 && 
      Math.abs(e.lng - d.lng) < 0.1
    ) || d as Experience
    
    if (!exp) return document.createElement('div')
    
    const marker = document.createElement('div')
    marker.className = 'marker'
    marker.style.cursor = 'pointer'
    marker.innerHTML = `
      <div style="background: ${exp.color}; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px ${exp.color}; font-size: 24px; transition: transform 0.2s ease;">
        ${exp.flag}
      </div>
    `
    
    marker.addEventListener('click', (e) => {
      e.stopPropagation()
      setSelectedExp(exp)
      
      // Stop auto-rotation when clicking
      if (globeEl.current) {
        globeEl.current.controls().autoRotate = false
        
        // Zoom to the clicked location
        globeEl.current.pointOfView({
          lat: exp.lat,
          lng: exp.lng,
          altitude: 1.5
        }, 1000) // 1 second animation
      }
    })
    
    marker.addEventListener('mouseover', (e: MouseEvent) => {
      marker.style.transform = 'scale(1.2)'
      setHoveredExp(exp)
      setTooltipPosition({
        x: e.clientX,
        y: e.clientY
      })
    })
    
    marker.addEventListener('mousemove', (e: MouseEvent) => {
      setTooltipPosition({
        x: e.clientX,
        y: e.clientY
      })
    })
    
    marker.addEventListener('mouseout', () => {
      marker.style.transform = 'scale(1)'
      setHoveredExp(null)
    })
    
    return marker
  }

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        htmlElementsData={experiences}
        htmlElement={getMarker}
        htmlTransitionDuration={300}
      />

      {/* Hover Tooltip */}
      {hoveredExp && !selectedExp && (
        <div 
          className="fixed bg-black/90 backdrop-blur-sm p-3 rounded-lg shadow-xl max-w-xs z-50 pointer-events-none border border-cyan-500/30"
          style={{
            left: `${tooltipPosition.x + 15}px`,
            top: `${tooltipPosition.y - 15}px`,
            transform: 'translateY(-100%)',
            maxWidth: '280px'
          }}
        >
          <p className="text-gray-300 text-sm leading-relaxed">{hoveredExp.description}</p>
        </div>
      )}

      {selectedExp && (
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg shadow-xl max-w-sm z-40">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-white text-lg">
              {selectedExp.flag} {selectedExp.city}, {selectedExp.country}
            </h3>
            <button 
              onClick={(e) => {
                e.stopPropagation()
                setSelectedExp(null)
                // Restart rotation when closing
                if (globeEl.current) {
                  globeEl.current.controls().autoRotate = true
                }
              }} 
              className="text-gray-300 hover:text-white text-xl leading-none w-6 h-6 flex items-center justify-center"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <p className="text-sm font-medium mb-2" style={{color: selectedExp.color}}>
            {selectedExp.role} ({selectedExp.period})
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            {selectedExp.description}
          </p>
        </div>
      )}

    </div>
  )
}
