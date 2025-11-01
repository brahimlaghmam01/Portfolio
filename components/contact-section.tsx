"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center text-gradient scroll-animate ${isVisible ? "visible" : ""}`}
        >
          {t("contactTitle")}
        </h2>

        <div ref={ref} className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 scroll-animate-left ${isVisible ? "visible" : ""}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t("contactTitle")}</h3>
              <p className="text-muted-foreground text-lg text-pretty">{t("contactSubtitle")}</p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:laghmam.dev@gmail.com"
                className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:bg-background/50 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-sm">laghmam.dev@gmail.com</span>
              </a>

              <a
                href="tel:+212770876664"
                className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:bg-background/50 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-sm">+212 770 876 664</span>
              </a>

              <a
                href="https://github.com/brahimlaghmam01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:bg-background/50 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                  <Github className="w-5 h-5 text-violet-500" />
                </div>
                <span className="text-sm">github.com/brahimlaghmam01</span>
              </a>

              <a
                href="https://www.linkedin.com/in/brahim-laghmam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:bg-background/50 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm">linkedin.com/in/brahim-laghmam</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`glass-card rounded-xl p-8 scroll-animate-right ${isVisible ? "visible" : ""}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  name="name"
                  placeholder={t("name")}
                  value={formData.name}
                  onChange={handleChange}
                  className="glass-card border-border/50 bg-background/50 focus:bg-background/70 transition-colors h-11"
                  required
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder={t("email")}
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-card border-border/50 bg-background/50 focus:bg-background/70 transition-colors h-11"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder={t("message")}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-card border-border/50 bg-background/50 focus:bg-background/70 transition-colors min-h-36 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full neon-glow h-11 text-base font-medium"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : t("sendMessage")}
              </Button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500 text-sm text-center animate-fade-in">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm text-center animate-fade-in">
                  ✗ Failed to send message. Please try again or email me directly at laghmam.dev@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
