'use client'

import { useRef, useState, useEffect } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'

// Locations with accurate lat/lng, flags, and details
const experiences = [
  {
    city: 'Santiago',
    country: 'Chile',
    flag: '🇨🇱',
    role: 'Home',
    period: 'Origin',
    lat: -33.4489,
    lng: -70.6693,
    color: '#00D4FF',
    description: 'Home base where I developed foundational skills and soccer expertise that led to international opportunities.'
  },
  {
    city: 'Santiago',
    country: 'Chile',
    flag: '🇨🇱',
    role: 'Project Manager',
    period: '2018-2019',
    lat: -33.4489,
    lng: -70.6693 + 0.5, // Slight offset
    color: '#7B68EE',
    description: 'Project Manager role managing cross-functional teams and developing project management expertise in Chilean business environment.'
  },
  {
    city: 'New York',
    country: 'United States',
    flag: '🇺🇸',
    role: 'University',
    period: '2019-2023',
    lat: 40.7128,
    lng: -74.0060,
    color: '#32CD32',
    description: 'University studies - B.S. in Business Administration earned with full athletic scholarship, transitioning from professional soccer to business excellence.'
  },
  {
    city: 'Miami',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Healthcare Internship',
    period: '2022',
    lat: 25.7617,
    lng: -80.1918,
    color: '#FFB347',
    description: 'Healthcare Internship focusing on data processing, operational optimization, and healthcare industry insights.'
  },
  {
    city: 'Chicago',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Logistics',
    period: '2023',
    lat: 41.8781,
    lng: -87.6298,
    color: '#FF6B6B',
    description: 'Logistics role in major US commercial hub, developing expertise in complex distribution networks.'
  },
  {
    city: 'Sofia',
    country: 'Bulgaria',
    flag: '🇧🇬',
    role: 'Logistics',
    period: '2023-2024',
    lat: 42.6977,
    lng: 23.3219,
    color: '#DDA0DD',
    description: 'Logistics operations managing Eastern European supply chains and cross-border business processes.'
  },
  {
    city: 'Sofia',
    country: 'Bulgaria',
    flag: '🇧🇬',
    role: 'Project Manager',
    period: '2024',
    lat: 42.6977,
    lng: 23.3219 + 0.5, // Slight offset
    color: '#FF69B4',
    description: 'Project Manager role overseeing strategic initiatives in Bulgarian operations and international business.'
  },
  {
    city: 'Los Angeles',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Data & Business Analyst',
    period: '2024',
    lat: 34.0522,
    lng: -118.2437,
    color: '#40E0D0',
    description: 'Data & Business Analyst role developing advanced analytics, business intelligence, and data science capabilities.'
  },
  {
    city: 'Los Angeles',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Data Consulting',
    period: 'Current',
    lat: 34.0522,
    lng: -118.2437 + 0.5, // Slight offset
    color: '#00D4FF',
    description: 'Data Consulting - Current position providing AI-powered data consulting, automation solutions, and strategic analytics to small businesses using cutting-edge tools.'
  },
  {
    city: 'Osnabrück',
    country: 'Germany',
    flag: '🇩🇪',
    role: 'Logistics',
    period: '2024',
    lat: 52.2799,
    lng: 8.0472,
    color: '#FFD700',
    description: 'Logistics role in Germany, focusing on efficient supply chain management and international trade processes.'
  }
]

type Experience = typeof experiences[0]

export default function Interactive3DGlobe() {
  const globeEl = useRef<GlobeMethods>()
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 640
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024
      setDimensions({
        width: isMobile ? Math.min(window.innerWidth - 32, 343) : isTablet ? 500 : 600,
        height: isMobile ? 300 : isTablet ? 450 : 600
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Auto-rotate globe and disable zoom
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 2.5
      // Disable zoom
      globeEl.current.controls().enableZoom = false
    }
  }, [])

  // Handle click with zoom and show details
  const handleGlobeClick = (d: any) => {
    if (d) {
      const exp = d as Experience
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

  // Custom HTML marker
  const getMarker = (d: any) => {
    const exp = d as Experience
    const marker = document.createElement('div')
    marker.className = 'marker'
    marker.style.cursor = 'pointer'
    marker.innerHTML = `
      <div style="background: ${exp.color}; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px ${exp.color}; font-size: 24px; transition: transform 0.2s ease;">
        ${exp.flag}
      </div>
    `
    marker.addEventListener('mouseover', () => {
      marker.style.transform = 'scale(1.2)'
    })
    marker.addEventListener('mouseout', () => {
      marker.style.transform = 'scale(1)'
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

      {selectedExp && (
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-xl max-w-[calc(100%-1rem)] sm:max-w-sm z-40">
          <div className="flex justify-between items-start mb-2 sm:mb-3 gap-2">
            <h3 className="font-bold text-white text-sm sm:text-base md:text-lg break-words">{selectedExp.flag} {selectedExp.city}, {selectedExp.country}</h3>
            <button 
              onClick={() => {
                setSelectedExp(null)
                // Restart rotation when closing
                if (globeEl.current) {
                  globeEl.current.controls().autoRotate = true
                }
              }} 
              className="text-gray-300 hover:text-white text-lg sm:text-xl leading-none shrink-0"
            >
              ×
            </button>
          </div>
          <p className="text-xs sm:text-sm font-medium mb-2 break-words" style={{color: selectedExp.color}}>
            {selectedExp.role} ({selectedExp.period})
          </p>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed break-words">{selectedExp.description}</p>
        </div>
      )}

    </div>
  )
}
