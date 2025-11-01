"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation, useParallax } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()
  const parallaxOffset = useParallax()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements - More subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl floating-animation parallax-bg"
          style={{ transform: `translateY(${parallaxOffset * 0.05}px)` }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-emerald-500/5 rounded-full blur-3xl floating-animation parallax-bg"
          style={{ animationDelay: "3s", transform: `translateY(${parallaxOffset * 0.08}px)` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl floating-animation parallax-bg"
          style={{ animationDelay: "6s", transform: `translateY(${parallaxOffset * 0.1}px)` }}
        ></div>
      </div>

      <div className={`container mx-auto px-6 text-center relative z-10 scroll-animate ${isVisible ? "visible" : ""}`}>
        {/* Avatar */}
        <div className="mb-10 relative">
          <div className="w-36 h-36 mx-auto rounded-full glass-card overflow-hidden ring-2 ring-blue-500/30 ring-offset-4 ring-offset-background dark:ring-blue-400/40 dark:ring-offset-background">
            <img src="/professional-developer-avatar.png" alt="Brahim Laghmam" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
          <span className="text-gradient">Brahim Laghmam</span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 text-balance font-medium">{t("heroTitle")}</h2>

        <p className="text-base md:text-lg lg:text-xl text-muted-foreground/90 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
          {t("heroSubtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="neon-glow text-base px-8 py-6" onClick={() => scrollToSection("projects")}>
            {t("viewProjects")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-card bg-transparent text-base px-8 py-6 hover:bg-background/50"
            onClick={() => scrollToSection("contact")}
          >
            {t("contactMe")}
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://github.com/brahimlaghmam01"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-card rounded-full hover:scale-110 hover:bg-background/50 transition-all duration-300 group"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/brahim-laghmam/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-card rounded-full hover:scale-110 hover:bg-background/50 transition-all duration-300 group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="mailto:laghmam.dev@gmail.com"
            className="p-4 glass-card rounded-full hover:scale-110 hover:bg-background/50 transition-all duration-300 group"
            aria-label="Email Contact"
          >
            <Mail className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-6 h-6 animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
