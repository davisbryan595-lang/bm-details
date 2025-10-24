"use client"

import { useEffect, useState } from "react"

interface CountUpProps {
  end: number
  duration?: number
}

export default function CountUp({ end, duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationId = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [end, duration])

  return <>{count}</>
}
