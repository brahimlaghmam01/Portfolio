"use client"

import { Code, Database, Palette, Server, Smartphone, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skills = [
  { name: "HTML", icon: Code, color: "text-orange-400", description: "Semantic markup" },
  { name: "CSS", icon: Palette, color: "text-blue-400", description: "Modern styling" },
  { name: "Bootstrap", icon: Smartphone, color: "text-purple-400", description: "Responsive design" },
  { name: "Tailwind", icon: Zap, color: "text-cyan-400", description: "Utility-first CSS" },
  { name: "JavaScript", icon: Code, color: "text-yellow-400", description: "Dynamic interactions" },
  { name: "React", icon: Code, color: "text-blue-400", description: "Component-based UI" },
  { name: "PHP", icon: Server, color: "text-indigo-400", description: "Server-side logic" },
  { name: "Laravel", icon: Server, color: "text-red-400", description: "Elegant framework" },
  { name: "C#", icon: Database, color: "text-green-400", description: "Enterprise solutions" },
]

export function SkillsSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center text-gradient scroll-animate ${isVisible ? "visible" : ""}`}
        >
          {t("skillsTitle")}
        </h2>
        <p className={`text-xl text-muted-foreground text-center mb-12 scroll-animate ${isVisible ? "visible" : ""}`}>
          {t("skillsSubtitle")}
        </p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card glass-card rounded-xl p-6 group cursor-pointer scroll-animate ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className={`p-3 rounded-lg bg-background/50 ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                  <skill.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground/90 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
