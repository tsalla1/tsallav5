"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AwardsAndCertification() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-screen flex items-center justify-start overflow-hidden transition-opacity duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-100"
      }`}
    >
      {/* Background Image */}
      <Image
        src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg3OGU4ZGU5Y2YwODE5MTlhNjk1NTFkYWQ5MTRjOWQ6ZmlsZV8wMDAwMDAwMGZkNjA2MjJmYmVhNmU3OGQ0YjIxYzljMyIsInRzIjoiNDg2ODc2IiwicCI6InB5aSIsInNpZyI6IjRkZGVkMTgwNGMwMTI0MmQ1OTM0OTAzMWFmODE2Zjg0ODhhYmVkMjQwZTY3MjBmYzE3YjE3MjIxYWIyY2Q3ZTkiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
        alt="Drone Silhouette Hero"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text and Button */}
     <div className="relative z-10 text-left px-6 max-w-2xl sm:px-16 mx-16">
  <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold mb-6">
    OUR STORY IS STILL BEING WRITTEN...
  </h1>
  <Link
    href="/careers"
    className="
      inline-block bg-transparent border-2 border-white text-white
      hover:bg-white hover:text-black
      px-4 py-2 mt-2
      transition-all duration-300
      font-sans text-xs sm:text-sm md:text-base
    "
  >
    Join Us
  </Link>
</div>
    </section>
  )
}
