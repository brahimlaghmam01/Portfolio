"use client"

import { GraduationCap, Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ExperienceSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const timeline = [
    {
      type: "education",
      title: t("ifmoticaTitle"),
      organization: "IFMOTICA",
      period: "2023 - Present",
      description: t("ifmoticaDesc"),
      icon: GraduationCap,
    },
    {
      type: "experience",
      title: "Freelance Web Developer",
      organization: "Self-Employed",
      period: "2022 - Present",
      description:
        "Developing custom web applications for various clients, specializing in e-commerce platforms and business management systems.",
      icon: Briefcase,
    },
    {
      type: "experience",
      title: "Junior Developer",
      organization: "Tech Solutions Inc.",
      period: "2021 - 2022",
      description:
        "Collaborated on multiple web development projects, gaining experience in team-based development and agile methodologies.",
      icon: Briefcase,
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center text-gradient scroll-animate ${isVisible ? "visible" : ""}`}
        >
          {t("experienceTitle")}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-emerald-500/50 to-violet-500/50"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-10 last:mb-0">
                {/* Timeline Dot */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 glass-card rounded-full border-2 border-blue-500/30 scroll-animate-right ${isVisible ? "visible" : ""}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <item.icon className="w-5 h-5 text-blue-500" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div
                    ref={index === 0 ? ref : undefined}
                    className={`glass-card rounded-xl p-6 scroll-animate-left ${isVisible ? "visible" : ""}`}
                    style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="text-xs text-blue-500 font-medium bg-blue-500/10 px-3 py-1 rounded-full">{item.period}</span>
                    </div>
                    <h4 className="text-base text-muted-foreground mb-3 font-medium">{item.organization}</h4>
                    <p className="text-sm text-muted-foreground/90 text-pretty leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
