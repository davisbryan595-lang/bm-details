"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react"

export default function Booking() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "premium",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "premium", message: "" })
    }, 3000)
  }

  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl poppins font-bold text-white mb-4">Book Your Detail</h2>
          <p className="text-xl text-blue-100">Get your car looking showroom fresh</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              {/* Service Type */}
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer"
                >
                  <option value="basic" className="bg-gray-900">
                    Basic - $99
                  </option>
                  <option value="premium" className="bg-gray-900">
                    Premium - $179
                  </option>
                  <option value="elite" className="bg-gray-900">
                    Elite - $249
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Details (Optional)"
                  rows={4}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300 backdrop-blur-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-white text-blue-600 poppins font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                {submitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="text-yellow-300 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white/70 text-sm font-medium">Phone</p>
                  <p className="text-white poppins font-bold text-lg">(619) 837-3522</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="text-yellow-300 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white/70 text-sm font-medium">Email</p>
                  <p className="text-white poppins font-bold text-lg">bm.detailz@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="text-yellow-300 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white/70 text-sm font-medium">Service Area</p>
                  <p className="text-white poppins font-bold text-lg">San Diego, CA & Nearby</p>
                </div>
              </motion.div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden h-64"
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0066341945!2d-117.1611!3d32.7157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954759b50001d%3A0x1234567890!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
              />
            </motion.div>

            {/* Confirmation Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center gap-3"
              >
                <CheckCircle className="text-green-400" size={24} />
                <div>
                  <p className="text-white poppins font-bold">Message Sent!</p>
                  <p className="text-green-100 text-sm">We'll get back to you soon.</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
