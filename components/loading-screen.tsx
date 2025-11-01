"use client"

import { useEffect, useState } from "react"

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setIsMounted(true)

    // Check if we've already shown the loading screen in this session
    const hasLoaded = sessionStorage.getItem("portfolio-has-loaded")

    if (!hasLoaded) {
      setIsLoading(true)

      // Animate progress bar
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2
        })
      }, 30)

      // Hide loading screen after 3 seconds
      const timer = setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem("portfolio-has-loaded", "true")
      }, 3000)

      return () => {
        clearInterval(progressInterval)
        clearTimeout(timer)
      }
    }
  }, [])

  // Prevent hydration mismatch by not rendering loading screen on server
  if (!isMounted) {
    return <>{children}</>
  }

  return (
    <>
      {/* Loading Screen Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Loading content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Logo/Name */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient animate-fade-in">
                BL
              </h1>
              <p className="text-sm text-muted-foreground animate-fade-in-delay">
                Loading Portfolio...
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-64 mx-auto">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{progress}%</p>
            </div>

            {/* Spinner */}
            <div className="flex justify-center">
              <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            </div>
          </div>
        </div>
      )}

      {/* Website Content - Always render to avoid hydration mismatch */}
      <div className={isLoading ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  )
}

