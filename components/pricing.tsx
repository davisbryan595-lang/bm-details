"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const plans = [
    {
      name: "Basic",
      price: 99,
      description: "Perfect for regular maintenance",
      features: ["Exterior Wash", "Interior Vacuum", "Tire Shine", "Air Freshener"],
      recommended: false,
    },
    {
      name: "Premium",
      price: 179,
      description: "Most popular choice",
      features: [
        "Full Interior Detail",
        "Full Exterior Detail",
        "Wax Application",
        "Leather Conditioning",
        "Window Tint",
      ],
      recommended: true,
    },
    {
      name: "Elite",
      price: 249,
      description: "Ultimate protection",
      features: [
        "Premium Interior Detail",
        "Paint Correction",
        "Ceramic Coating",
        "Headlight Restoration",
        "Engine Bay Cleaning",
        "Lifetime Support",
      ],
      recommended: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl poppins font-bold text-gray-900 dark:text-white mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Transparent pricing for every budget</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.recommended
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl scale-105 glow-pulse"
                  : "bg-gray-50 dark:bg-gray-900/60 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-blue-600"
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full poppins font-bold text-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Recommended
                </motion.div>
              )}

              <h3 className="text-2xl poppins font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.recommended ? "text-blue-100" : "text-gray-600 dark:text-gray-300"}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl poppins font-bold">${plan.price}</span>
                <span className={plan.recommended ? "text-blue-100" : "text-gray-600 dark:text-gray-300"}>/service</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  >
                    <Check size={20} className={plan.recommended ? "text-yellow-300" : "text-blue-600"} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg poppins font-bold transition-all duration-300 ${
                  plan.recommended
                    ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
