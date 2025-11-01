"use client"

import { useState, useEffect, useRef } from "react"
import { Moon, Sun, Globe, Download, ChevronDown } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const langMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ]

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a')
    link.href = '/cv dev.pdf'
    link.download = 'Brahim_Laghmam_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-card shadow-lg border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient tracking-tight">Brahim Laghmam</div>

          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
            >
              {t("skills")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
            >
              {t("projects")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
            >
              {t("experience")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
            >
              {t("contact")}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="sm"
              className="hidden md:flex items-center gap-2 hover:bg-accent/50 transition-colors"
            >
              <Download className="h-4 w-4" />
              {t("downloadResume")}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:bg-accent/50 transition-colors"
            >
              <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Language Switcher */}
            <div className="relative" ref={langMenuRef}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="hover:bg-accent/50 transition-colors"
              >
                <Globe className="h-[1.1rem] w-[1.1rem]" />
                <ChevronDown className={`h-3 w-3 ml-1 transition-transform ${isLangMenuOpen ? "rotate-180" : ""}`} />
                <span className="sr-only">Change language</span>
              </Button>

              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 glass-card border border-border/50 rounded-lg shadow-lg overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any)
                        setIsLangMenuOpen(false)
                      }}
                      className={`w-full flex items-center px-4 py-3 text-sm transition-colors hover:bg-accent/80 ${
                        language === lang.code ? "bg-accent/50" : ""
                      }`}
                    >
                      <span className="text-xl mr-3">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                      {language === lang.code && (
                        <span className="ml-auto text-blue-500">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
