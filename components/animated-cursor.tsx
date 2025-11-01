"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      const isClickable = !!(
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer"
      )

      setIsPointer(isClickable)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot - more subtle and professional */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out ${
          theme === "dark"
            ? "bg-blue-400"
            : "bg-blue-600"
        } ${isClicking ? "scale-100" : isPointer ? "scale-100" : "scale-100"}`}
        style={{
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
          opacity: isClicking ? 1 : 1,
        }}
      />

      {/* Cursor ring - subtle and elegant */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out border ${
          theme === "dark" ? "border-blue-400/40" : "border-blue-600/40"
        } ${isPointer ? "scale-100" : "scale-100"} ${isClicking ? "scale-60 opacity-60" : "opacity-100"}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />

      {/* Subtle glow for interactive elements */}
      {isPointer && (
        <div
          className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9997] transition-all duration-300 ease-out"
          style={{
            transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
          }}
        />
      )}
    </>
  )
}
