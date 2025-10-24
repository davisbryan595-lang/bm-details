"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "@/components/count-up"

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
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <p className="text-6xl poppins font-bold mb-2">BM</p>
                <p className="text-xl">Premium Detailing</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl poppins font-bold text-gray-900 mb-6">About BM Detailz</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over a decade of experience in automotive detailing, BM Detailz brings professional-grade service
              directly to your doorstep across San Diego. We're committed to delivering exceptional results using
              premium products and proven techniques.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
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
                  className="bg-white rounded-lg p-4 text-center shadow-md"
                >
                  <p className="text-3xl poppins font-bold text-blue-600 mb-2">
                    {inView && <CountUp end={stat.value} />}
                    {stat.label === "Mobile Service" && "+"}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
