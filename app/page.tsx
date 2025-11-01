import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"
import { ParallaxShowcase } from "@/components/parallax-showcase"
import { ImageShowcase } from "@/components/image-showcase"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingElements />
      <Navigation />
      <BackToTop />
      <div className="pt-20 relative z-10">
        <HeroSection />
        <AboutSection />
        <ParallaxShowcase />
        <ImageShowcase />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
