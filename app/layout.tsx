import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import AnimatedCursor from "@/components/animated-cursor"
import {LoadingScreen} from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brahim Laghmam - Fullstack Developer",
  description:
    "Professional portfolio of Brahim Laghmam, a passionate fullstack developer specializing in modern web technologies.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <LanguageProvider>
            <LoadingScreen>
              {children}
              <AnimatedCursor />
            </LoadingScreen>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
