"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ImageShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount)

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  // Sample showcase items - you can replace with real project images
  const showcaseItems = [
    {
      title: "Modern Web Design",
      description: "Responsive and beautiful interfaces",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🎨",
    },
    {
      title: "Mobile First",
      description: "Optimized for all devices",
      gradient: "from-purple-500 to-pink-500",
      icon: "📱",
    },
    {
      title: "Fast Performance",
      description: "Lightning-fast load times",
      gradient: "from-emerald-500 to-teal-500",
      icon: "⚡",
    },
    {
      title: "Clean Code",
      description: "Maintainable and scalable",
      gradient: "from-orange-500 to-red-500",
      icon: "💻",
    },
    {
      title: "SEO Optimized",
      description: "Built for search engines",
      gradient: "from-indigo-500 to-blue-500",
      icon: "🔍",
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security",
      gradient: "from-rose-500 to-pink-500",
      icon: "🔒",
    },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 scroll-animate ${isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the key features and technologies I work with
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <Button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full w-12 h-12 shadow-lg"
            size="icon"
            variant="default"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Right Arrow */}
          <Button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full w-12 h-12 shadow-lg"
            size="icon"
            variant="default"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Scrollable Content */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {showcaseItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group/card"
              >
                {/* Icon with Gradient Background */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl mb-6 group-hover/card:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div
                  className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${item.gradient} group-hover/card:w-full transition-all duration-500`}
                />
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Scroll or drag to explore
              <ChevronRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

