"use client"

import React, { useRef, useEffect, useState } from "react"

export default function Missions() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
      className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-556c-61f6-9f7f-95ec25c1de5a/raw?se=2025-07-17T13%3A29%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=5134d626-6f31-5230-8af9-03b56292dd76&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-17T12%3A24%3A08Z&ske=2025-07-18T12%3A24%3A08Z&sks=b&skv=2024-08-04&sig=UP%2Bg5vhA/DyJmDUvkqgdvctYWY4zzdJsCOsZCfKHkW0%3D"
          alt="Mission Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-4 text-center max-w-4xl">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 font-sans transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ fontFamily: "'Pontano Sans', 'Inter', sans-serif" }}
        >
          The Mantle Behind the  Mission
        </h2>
<div className="max-w-7xl w-full mx-auto sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[70%] px-4 sm:px-6 md:px-8">
  <p
    className={`text-[13px] sm:text-[18px] md:text-[20px] leading-normal text-white font-semibold tracking-wide font-sans transition-all duration-700 ease-out transform ${
      isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-12"
    }`}
    style={{
      fontFamily: "'Pontano Sans', 'Inter', sans-serif",
      transitionDelay: "150ms",
    }}
  >
    By Turning Algorithms Into Fearless Pilots, We Empower Manned And Unmanned Systems To Fly,
    Fight, And Decide On Their Own, Bringing Order To Chaos And Mission-Critical Support Where
    Humans And Satellites Can't. Our Adversaries Are Evolving. And So Must We.
  </p>
</div>

      </div>
    </section>
  )
}
