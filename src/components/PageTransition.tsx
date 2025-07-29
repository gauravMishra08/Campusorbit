import { useState, useEffect, ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  pageKey: string // Unique identifier for each page
}

const PageTransition = ({ children, pageKey }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Reset animation on page change
    setIsVisible(false)
    
    // Subtle delay for smooth Aceternity-style transition
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [pageKey])

  return (
    <div className="relative w-full h-full">
      {/* Subtle grid background effect */}
      <div 
        className={`absolute inset-0 opacity-[0.03] transition-opacity duration-700 ${
          isVisible ? 'opacity-0' : 'opacity-[0.03]'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          pointerEvents: 'none'
        }}
      />
      
      {/* Main content with Aceternity-style animation */}
      <div
        className={`relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
      
      {/* Subtle border gradient effect */}
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-700 ease-out pointer-events-none ${
          isVisible ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          padding: '1px',
        }}
      />
    </div>
  )
}

export default PageTransition
