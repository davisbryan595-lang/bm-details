"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const testimonials = [
    {
      name: "John Martinez",
      text: "BM Detailz transformed my car! The attention to detail is incredible. Highly recommend!",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Sarah Chen",
      text: "Best mobile detailing service in San Diego. Professional, punctual, and amazing results.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Mike Rodriguez",
      text: "The ceramic coating has kept my car looking showroom fresh. Worth every penny!",
      rating: 5,
      image: "👨‍🔧",
    },
    {
      name: "Lisa Thompson",
      text: "Convenient, professional, and they really care about their work. Five stars!",
      rating: 5,
      image: "👩‍🎨",
    },
  ]

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-grey-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl poppins font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Join hundreds of satisfied customers</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="glass-effect rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={current === index ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Quote Icon */}
                    <motion.div
                      className="mb-6"
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Quote className="text-blue-600" size={40} />
                    </motion.div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div>
                        <p className="poppins font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">Verified Customer</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoPlay(false)
                }}
                className={`h-3 rounded-full transition-all ${
                  index === current ? "bg-blue-600 w-8" : "bg-gray-400 w-3"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
