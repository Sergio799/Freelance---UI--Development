'use client'

import { useEffect, useState } from 'react'

const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin mb-4"></div>
        <h2 className="text-2xl font-bold text-white animate-pulse">
          Loading AI Platform...
        </h2>
        <div className="mt-4 flex space-x-1">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce animation-delay-0"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  )
}

export default PageTransition