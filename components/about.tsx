"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "@/components/count-up"
import Image from "next/image"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const stats = [
    { label: "Cars Detailed", value: 500 },
    { label: "Years Experience", value: 10 },
    { label: "Mobile Service", value: 100 },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-grey-light relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <path
            d="M200 500 Q300 300 500 300 Q700 300 800 500 Q700 700 500 700 Q300 700 200 500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden h-96">
              <Image
                src="https://images.pexels.com/photos/13371846/pexels-photo-13371846.jpeg"
                alt="Premium car detailing interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl poppins font-bold text-gray-900 dark:text-white mb-6">About BM Detailz</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With over a decade of experience in automotive detailing, BM Detailz brings professional-grade service
              directly to your doorstep across San Diego. We're committed to delivering exceptional results using
              premium products and proven techniques.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Our mission is simple: bring the shine to you. We believe every vehicle deserves premium care, and we make
              it convenient by coming to you.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-gray-900/60 rounded-lg p-4 text-center shadow-md border border-transparent dark:border-gray-700"
                >
                  <p className="text-3xl poppins font-bold text-blue-600 mb-2">
                    {inView && <CountUp end={stat.value} />}
                    {stat.label === "Mobile Service" && "+"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
