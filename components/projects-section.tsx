"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProjectsSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const projects = [
    {
      name: "SawbLi",
      description: t("sawbliDesc"),
      image: "/modern-ecommerce-interface.jpg",
      tech: ["React", "Laravel", "MySQL"],
      link: "#",
    },
    {
      name: "DigiWave",
      description: t("digiwaveDesc"),
      image: "/digital-marketing-agency-website.jpg",
      tech: ["PHP", "JavaScript", "Bootstrap"],
      link: "#",
    },
    {
      name: "HealthBot",
      description: t("healthbotDesc"),
      image: "/healthcare-chatbot-interface.jpg",
      tech: ["C#", "React", "AI Integration"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center text-gradient scroll-animate ${isVisible ? "visible" : ""}`}
        >
          {t("projectsTitle")}
        </h2>
        <p className={`text-xl text-muted-foreground text-center mb-12 scroll-animate ${isVisible ? "visible" : ""}`}>
          {t("projectsSubtitle")}
        </p>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`project-card glass-card rounded-xl overflow-hidden group scroll-animate-left ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">{project.name}</h3>
                <p className="text-muted-foreground/90 mb-5 text-pretty leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-accent/30 text-foreground/80 rounded-lg border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 text-sm">
                    <ExternalLink className="w-3.5 h-3.5 mr-2" />
                    {t("viewProject")}
                  </Button>
                  <Button size="sm" variant="outline" className="hover:bg-accent/50">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
