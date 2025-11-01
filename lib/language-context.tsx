"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "fr" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    downloadResume: "Download Resume",

    // Hero Section
    heroTitle: "Professional Fullstack Developer",
    heroSubtitle: "Specialized in Modern Web Technologies & Enterprise Solutions | HTML, CSS, JavaScript, React, PHP, Laravel, C#",
    viewProjects: "View Portfolio",
    contactMe: "Get In Touch",

    // About Section
    aboutTitle: "Professional Profile",
    aboutText:
      "Results-driven Fullstack Developer with expertise in building scalable web applications and enterprise solutions. Currently pursuing advanced certification in TS Fullstack Web Development at IFMOTICA. Proven track record of delivering high-quality, maintainable code and innovative digital solutions that drive business growth and enhance user experience.",

    // Skills Section
    skillsTitle: "Technical Expertise",
    skillsSubtitle: "Core Technologies & Frameworks",

    // Projects Section
    projectsTitle: "Portfolio & Case Studies",
    projectsSubtitle: "Recent client projects and enterprise solutions",
    sawbliDesc: "Enterprise-grade e-commerce platform with comprehensive business management features, inventory control, and analytics dashboard. Built with React, Laravel, and MySQL for optimal performance and scalability.",
    digiwaveDesc: "Full-service digital marketing platform featuring advanced analytics, campaign management, and real-time reporting. Developed using modern PHP, JavaScript, and Bootstrap framework.",
    healthbotDesc: "AI-powered healthcare assistant leveraging machine learning for patient support and medical information delivery. Built with C#, React, and integrated AI services for intelligent responses.",
    viewProject: "View Case Study",

    // Experience Section
    experienceTitle: "Professional Experience & Education",
    education: "Education & Certifications",
    ifmoticaTitle: "TS Fullstack Web Development",
    ifmoticaDesc: "Advanced professional training in modern web technologies, software architecture, and industry best practices. Focus on enterprise-level application development and agile methodologies.",

    // Contact Section
    contactTitle: "Let's Collaborate",
    contactSubtitle: "Ready to discuss your next project or business opportunity",
    name: "Full Name",
    email: "Email Address",
    message: "Project Details",
    sendMessage: "Send Inquiry",

    // Footer
    footerText: "© 2025 Brahim Laghmam. All rights reserved.",
  },
  fr: {
    // Navigation
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
    contact: "Contact",
    downloadResume: "Télécharger CV",

    // Hero Section
    heroTitle: "Développeur Fullstack Professionnel",
    heroSubtitle: "Spécialisé en Technologies Web Modernes & Solutions d'Entreprise | HTML, CSS, JavaScript, React, PHP, Laravel, C#",
    viewProjects: "Voir Portfolio",
    contactMe: "Me Contacter",

    // About Section
    aboutTitle: "Profil Professionnel",
    aboutText:
      "Développeur Fullstack orienté résultats avec une expertise dans la création d'applications web évolutives et de solutions d'entreprise. Actuellement en formation avancée en TS Développement Web Fullstack à IFMOTICA. Expérience prouvée dans la livraison de code de haute qualité et maintenable, ainsi que de solutions numériques innovantes qui stimulent la croissance des entreprises et améliorent l'expérience utilisateur.",

    // Skills Section
    skillsTitle: "Expertise Technique",
    skillsSubtitle: "Technologies & Frameworks Principaux",

    // Projects Section
    projectsTitle: "Portfolio & Études de Cas",
    projectsSubtitle: "Projets clients récents et solutions d'entreprise",
    sawbliDesc: "Plateforme e-commerce de niveau entreprise avec fonctionnalités complètes de gestion d'entreprise, contrôle des stocks et tableau de bord analytique. Développée avec React, Laravel et MySQL pour des performances et une évolutivité optimales.",
    digiwaveDesc: "Plateforme de marketing digital complète avec analyses avancées, gestion de campagnes et rapports en temps réel. Développée avec PHP moderne, JavaScript et framework Bootstrap.",
    healthbotDesc: "Assistant de santé alimenté par l'IA exploitant l'apprentissage automatique pour le support aux patients et la diffusion d'informations médicales. Développé avec C#, React et services IA intégrés pour des réponses intelligentes.",
    viewProject: "Voir Étude de Cas",

    // Experience Section
    experienceTitle: "Expérience Professionnelle & Formation",
    education: "Formation & Certifications",
    ifmoticaTitle: "TS Développement Web Fullstack",
    ifmoticaDesc: "Formation professionnelle avancée en technologies web modernes, architecture logicielle et meilleures pratiques de l'industrie. Focus sur le développement d'applications de niveau entreprise et les méthodologies agiles.",

    // Contact Section
    contactTitle: "Collaborons Ensemble",
    contactSubtitle: "Prêt à discuter de votre prochain projet ou opportunité commerciale",
    name: "Nom Complet",
    email: "Adresse Email",
    message: "Détails du Projet",
    sendMessage: "Envoyer Demande",

    // Footer
    footerText: "© 2025 Brahim Laghmam. Tous droits réservés.",
  },
  de: {
    // Navigation
    about: "Über mich",
    skills: "Fähigkeiten",
    projects: "Projekte",
    experience: "Erfahrung",
    contact: "Kontakt",
    downloadResume: "Lebenslauf Herunterladen",

    // Hero Section
    heroTitle: "Professioneller Fullstack-Entwickler",
    heroSubtitle: "Spezialisiert auf Moderne Webtechnologien & Unternehmenslösungen | HTML, CSS, JavaScript, React, PHP, Laravel, C#",
    viewProjects: "Portfolio Ansehen",
    contactMe: "Kontakt Aufnehmen",

    // About Section
    aboutTitle: "Berufsprofil",
    aboutText:
      "Ergebnisorientierter Fullstack-Entwickler mit Expertise im Aufbau skalierbarer Webanwendungen und Unternehmenslösungen. Derzeit in fortgeschrittener Zertifizierung für TS Fullstack Web Development bei IFMOTICA. Nachgewiesene Erfolgsbilanz in der Bereitstellung von hochwertigem, wartbarem Code und innovativen digitalen Lösungen, die Geschäftswachstum fördern und Benutzererfahrung verbessern.",

    // Skills Section
    skillsTitle: "Technische Expertise",
    skillsSubtitle: "Kerntechnologien & Frameworks",

    // Projects Section
    projectsTitle: "Portfolio & Fallstudien",
    projectsSubtitle: "Aktuelle Kundenprojekte und Unternehmenslösungen",
    sawbliDesc: "E-Commerce-Plattform auf Unternehmensniveau mit umfassenden Geschäftsverwaltungsfunktionen, Bestandskontrolle und Analyse-Dashboard. Entwickelt mit React, Laravel und MySQL für optimale Leistung und Skalierbarkeit.",
    digiwaveDesc: "Full-Service-Digital-Marketing-Plattform mit erweiterten Analysen, Kampagnenverwaltung und Echtzeit-Berichterstattung. Entwickelt mit modernem PHP, JavaScript und Bootstrap-Framework.",
    healthbotDesc: "KI-gestützter Gesundheitsassistent mit maschinellem Lernen für Patientenunterstützung und medizinische Informationsbereitstellung. Entwickelt mit C#, React und integrierten KI-Diensten für intelligente Antworten.",
    viewProject: "Fallstudie Ansehen",

    // Experience Section
    experienceTitle: "Berufserfahrung & Ausbildung",
    education: "Ausbildung & Zertifizierungen",
    ifmoticaTitle: "TS Fullstack Web Development",
    ifmoticaDesc: "Fortgeschrittene Berufsausbildung in modernen Webtechnologien, Softwarearchitektur und Branchenbest Practices. Fokus auf Anwendungsentwicklung auf Unternehmensniveau und agile Methoden.",

    // Contact Section
    contactTitle: "Lassen Sie uns Zusammenarbeiten",
    contactSubtitle: "Bereit, Ihr nächstes Projekt oder Geschäftsmöglichkeit zu besprechen",
    name: "Vollständiger Name",
    email: "E-Mail-Adresse",
    message: "Projektdetails",
    sendMessage: "Anfrage Senden",

    // Footer
    footerText: "© 2025 Brahim Laghmam. Alle Rechte vorbehalten.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Load language from localStorage on initial render
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("portfolio-language") as Language
      return savedLanguage || "en"
    }
    return "en"
  })

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-language", language)
    }
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
