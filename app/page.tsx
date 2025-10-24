"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Booking from "@/components/booking"
import Footer from "@/components/footer"
import OfferPopup from "@/components/offer-popup"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Booking />
      <Footer />
      <OfferPopup />
    </main>
  )
}
