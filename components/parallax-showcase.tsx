"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, Palette, Smartphone, Zap } from "lucide-react"

export function ParallaxShowcase() {
  const [scrollY, setScrollY] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showcaseItems = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
      color: "from-blue-500 to-cyan-500",
      speed: 0.2,
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Modern Design",
      description: "Beautiful and intuitive interfaces",
      color: "from-violet-500 to-purple-500",
      speed: 0.3,
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Responsive",
      description: "Perfect on all devices",
      color: "from-emerald-500 to-teal-500",
      speed: 0.25,
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance",
      description: "Lightning-fast load times",
      color: "from-amber-500 to-orange-500",
      speed: 0.35,
    },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 scroll-animate ${isVisible ? "visible" : ""}`}>
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                transform: `translateY(${scrollY * item.speed * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

