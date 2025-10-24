"use client"

import { useEffect, useRef, useState } from "react"

interface UseInViewOptions {
  threshold?: number | number[]
  margin?: string
  triggerOnce?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!options.triggerOnce) {
          setInView(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.margin || "0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return { ref, inView }
}
