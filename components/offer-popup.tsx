"use client"

'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

export default function OfferPopup() {
  const [open, setOpen] = useState(false)

  // Always show popup on every page load / refresh after a short delay
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 2500)
    return () => clearTimeout(t)
  }, [])

  const handleDismiss = () => {
    // Only close for this session; do not persist so it appears on refresh
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-blue-600/30 glass-effect">
        <DialogTitle className="sr-only">Limited Time Offer</DialogTitle>
        <div className="grid md:grid-cols-2">
          <div className="relative h-48 md:h-full">
            <Image
              src="https://images.pexels.com/photos/14615262/pexels-photo-14615262.jpeg"
              alt="Special offer car detailing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="p-6 md:p-8 bg-black/70">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
              <p className="poppins font-bold text-2xl text-white mb-2">Limited Time Offer</p>
              <p className="text-blue-300 mb-4">Get 15% OFF your first detail this week</p>
              <ul className="text-sm text-gray-200 space-y-1 mb-6 list-disc pl-5">
                <li>Interior + exterior premium clean</li>
                <li>Free tire shine and air freshener</li>
                <li>We come to you anywhere in San Diego</li>
              </ul>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                    handleDismiss()
                  }}
                  className="btn-glow btn-modal glow-pulse glow-blue"
                >
                  <span>Claim Discount</span>
                </button>
                <button onClick={handleDismiss} className="btn-ghost-glow btn-modal">
                  <span className="label">Not now</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
