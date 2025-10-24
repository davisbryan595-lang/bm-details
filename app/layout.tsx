import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Preloader from "@/components/preloader"
import OfferPopup from "@/components/offer-popup"
import WhatsAppFab from "@/components/whatsapp-fab"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BM Detailz | San Diego's Premium Mobile Auto Detailing Service",
  description:
    "Mobile car detailing in San Diego — interior, exterior, ceramic coating, paint correction, and more. We bring the shine to you!",
  generator: "v0.app",
  openGraph: {
    title: "BM Detailz | Premium Mobile Auto Detailing",
    description: "Professional mobile detailing across San Diego",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BM Detailz",
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bm-rnyLks6NcYLvQfW2NWbwjLh4A1VLBv.jpg",
              description: "Premium mobile auto detailing service in San Diego",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Diego",
                addressRegion: "CA",
                addressCountry: "US",
              },
              telephone: "(619) 837-3522",
              email: "bm.detailz@gmail.com",
              url: "https://bmdetailz.com",
              priceRange: "$$",
              areaServed: "San Diego, CA",
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Preloader />
          <OfferPopup />
          <WhatsAppFab />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
