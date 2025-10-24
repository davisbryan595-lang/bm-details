"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const galleryItems = [
    { id: 1, title: "Exterior Polish", category: "Detailing" },
    { id: 2, title: "Interior Deep Clean", category: "Cleaning" },
    { id: 3, title: "Paint Correction", category: "Correction" },
    { id: 4, title: "Ceramic Coating", category: "Protection" },
    { id: 5, title: "Headlight Restoration", category: "Restoration" },
    { id: 6, title: "Premium Finish", category: "Detailing" },
  ]

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl poppins font-bold text-white mb-4">Our Work</h2>
          <p className="text-xl text-gray-300">See the transformation we deliver</p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-64"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-2xl poppins font-bold">{item.title}</p>
                  <p className="text-sm text-blue-200 mt-2">{item.category}</p>
                </div>
              </div>

              {/* Overlay */}
              <motion.div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div whileHover={{ scale: 1.2 }} className="text-white text-center">
                  <p className="poppins font-bold text-lg">{item.title}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Preview */}
        <motion.div
          className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 border border-blue-600/30"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl poppins font-bold text-white">{galleryItems[selectedIndex].title}</h3>
            <span className="text-blue-400 text-sm font-medium">
              {selectedIndex + 1} / {galleryItems.length}
            </span>
          </div>

          {/* Preview Area */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg h-96 flex items-center justify-center mb-6 relative overflow-hidden">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center text-white"
            >
              <p className="text-4xl poppins font-bold mb-2">{galleryItems[selectedIndex].title}</p>
              <p className="text-blue-200">{galleryItems[selectedIndex].category}</p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex gap-2">
              {galleryItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === selectedIndex ? "bg-blue-600 w-8" : "bg-gray-600 w-2"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedIndex((prev) => (prev + 1) % galleryItems.length)}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
