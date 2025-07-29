import type React from "react"
import type { Metadata } from "next"
import { Inter, Farro } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Load Inter and Farro fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const farro = Farro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-farro",
})

export const metadata: Metadata = {
  title: "Tsalla Aerospace - Unmanned Systems & AI Technology",
  description:
    "We Don't Build Drones. We Build Unfair Advantages. Leading aerospace technology company specializing in unmanned systems and AI.",
  keywords: "aerospace, drones, unmanned systems, AI, defense technology",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pontano+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Orbit&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/clash-grotesk" rel="stylesheet" />
      </head>
      <body className="bg-black text-white font-clash">
        <Navbar />
        <main className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
