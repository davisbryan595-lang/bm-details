"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Loading"
        >
          <motion.div
            className="glass-effect rounded-2xl p-8 flex flex-col items-center gap-4 glow-blue"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-16 h-16">
              <motion.span
                className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </div>
            <p className="poppins font-bold text-white text-lg">BM Detailz</p>
            <p className="text-sm text-blue-200">Preparing your shine...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
