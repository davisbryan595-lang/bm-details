"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Sparkles, Droplet, Zap, Wind, Shield, Brush } from "lucide-react"

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const services = [
    {
      icon: Sparkles,
      title: "Full Interior & Exterior Detailing",
      description: "Complete cleaning and protection for your vehicle",
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      description: "Long-lasting protection with premium shine",
    },
    {
      icon: Zap,
      title: "Paint Correction",
      description: "Remove swirls, scratches, and imperfections",
    },
    {
      icon: Wind,
      title: "Headlight Restoration",
      description: "Restore clarity and brightness to headlights",
    },
    {
      icon: Droplet,
      title: "Deep Cleaning & Waxing",
      description: "Professional-grade cleaning with protective wax",
    },
    {
      icon: Brush,
      title: "Premium Detailing",
      description: "Customized packages for your specific needs",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl poppins font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Premium detailing solutions tailored to your needs</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-900/60 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-blue-600 transition-all duration-300 glow-blue-hover cursor-pointer"
              >
                <motion.div
                  className="mb-4 inline-block p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>

                <h3 className="text-xl poppins font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>

                {/* Animated line */}
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
