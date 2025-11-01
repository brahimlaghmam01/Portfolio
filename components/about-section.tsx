"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center text-gradient scroll-animate ${isVisible ? "visible" : ""}`}
          >
            {t("aboutTitle")}
          </h2>

          <div ref={ref} className={`glass-card rounded-xl p-8 md:p-12 scroll-animate ${isVisible ? "visible" : ""}`}>
            <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed text-pretty">{t("aboutText")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
