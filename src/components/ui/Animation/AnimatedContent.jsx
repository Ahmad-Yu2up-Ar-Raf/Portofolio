"use client"

import { useRef, useEffect, useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import { useMediaQuery } from "@/hooks/lib/use-media-query";

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disableOnMobile = true,
  enableExitAnimation = false,
  className,
}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef()
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Skip animation if on mobile and disableOnMobile is true
  const shouldAnimate = !(isMobile && disableOnMobile)

  useEffect(() => {
    if (!ref.current) return

    // If we're on mobile and animations are disabled, immediately set to inView
    if (isMobile && disableOnMobile) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When enableExitAnimation is true, update inView based on current visibility
        if (enableExitAnimation) {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setInView(true)
            }, delay)
          } else {
            // Only reset to initial state when completely outside viewport
            if (entry.intersectionRatio === 0) {
              setInView(false)
            }
          }
        } else {
          // Original behavior: set inView once and disconnect
          if (entry.isIntersecting) {
            observer.unobserve(ref.current)
            setTimeout(() => {
              setInView(true)
            }, delay)
          }
        }
      },
      { threshold: [0, threshold] },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold, delay, isMobile, disableOnMobile, enableExitAnimation])

  const directions = {
    vertical: "Y",
    horizontal: "X",
  }

  // For mobile with disabled animations, use these default styles
  const defaultStyles = {
    transform: `translate${directions[direction]}(0px) scale(1)`,
    opacity: 1,
  }

  // For normal animation flow
  const animationStyles = {
    from: {
      transform: `translate${directions[direction]}(${reverse ? `-${distance}px` : `${distance}px`}) scale(${scale})`,
      opacity: animateOpacity ? initialOpacity : 1,
    },
    to: inView
      ? {
          transform: `translate${directions[direction]}(0px) scale(1)`,
          opacity: 1,
        }
      : enableExitAnimation
        ? {
            transform: `translate${directions[direction]}(${reverse ? `-${distance}px` : `${distance}px`}) scale(${scale})`,
            opacity: animateOpacity ? initialOpacity : 1,
          }
        : undefined,
    config,
  }

  // Choose which style to use based on whether we should animate
  const springProps = useSpring(shouldAnimate ? animationStyles : { ...defaultStyles, immediate: true })

  return (
    <animated.div ref={ref} className={className} style={springProps}>
      {children}
    </animated.div>
  )
}

export default AnimatedContent