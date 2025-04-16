"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return

    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth cursor movement
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        if (!isVisible) setIsVisible(true)
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const computedStyle = window.getComputedStyle(target)
      setIsPointer(computedStyle.cursor === "pointer")
    }

    // Hide cursor when it leaves the window
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isMobile, isVisible])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white z-50 pointer-events-none mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isPointer ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        mass: 0.2,
        stiffness: 100,
        damping: 10,
      }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isPointer ? 0 : 1,
        }}
      />
    </motion.div>
  )
}
