"use client"

import { useState, useEffect } from "react"

export default function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return

    // Initial check
    setIsMobile(window.innerWidth < breakpoint)

    // Handler for window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}

