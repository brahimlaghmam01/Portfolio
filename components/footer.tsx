"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-16 border-t border-border/50 glass-card mt-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-gradient mb-3 tracking-tight">Brahim Laghmam</div>
              <p className="text-sm text-muted-foreground mb-4">{t("heroTitle")}</p>
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                Building innovative web solutions with modern technologies and best practices.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                  About
                </a>
                <a href="#skills" className="block text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                  Skills
                </a>
                <a href="#projects" className="block text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                  Projects
                </a>
                <a href="#experience" className="block text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                  Experience
                </a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-sm font-semibold mb-4 text-foreground">Get In Touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:laghmam.dev@gmail.com"
                  className="flex items-center justify-center md:justify-end gap-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>laghmam.dev@gmail.com</span>
                </a>
                <a
                  href="tel:+213770876664"
                  className="flex items-center justify-center md:justify-end gap-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>+212 770 876 664</span>
                </a>
                <div className="flex items-center justify-center md:justify-end gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Morocco</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8 pb-8 border-b border-border/50">
            <a
              href="https://github.com/brahimlaghmam01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 hover:bg-background/50 transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/brahim-laghmam/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 hover:bg-background/50 transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="mailto:laghmam.dev@gmail.com"
              className="p-3 glass-card rounded-full hover:scale-110 hover:bg-background/50 transition-all duration-300 group"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground/80">
              © {new Date().getFullYear()} Brahim Laghmam. {t("footerText")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
