"use client"

import { useEffect, useState } from "react"
import { Code2, Database, Globe2, Laptop, Rocket, Sparkles, Zap } from "lucide-react"

export function FloatingElements() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const icons = [
    { Icon: Code2, delay: 0, speed: 0.3, x: 10, y: 20 },
    { Icon: Database, delay: 2, speed: 0.5, x: 85, y: 30 },
    { Icon: Globe2, delay: 4, speed: 0.4, x: 15, y: 60 },
    { Icon: Laptop, delay: 1, speed: 0.35, x: 80, y: 70 },
    { Icon: Rocket, delay: 3, speed: 0.45, x: 20, y: 85 },
    { Icon: Sparkles, delay: 5, speed: 0.25, x: 90, y: 50 },
    { Icon: Zap, delay: 2.5, speed: 0.55, x: 5, y: 40 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map(({ Icon, delay, speed, x, y }, index) => (
        <div
          key={index}
          className="absolute opacity-10 dark:opacity-5"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: `translateY(${scrollY * speed}px) rotate(${scrollY * 0.05}deg)`,
            animation: `float ${5 + delay}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />
        </div>
      ))}
    </div>
  )
}

