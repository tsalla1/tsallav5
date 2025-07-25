"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function TechTools() {
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
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full h-screen text-white flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.sanity.io/images/z5s3oquj/production/759cf3b1631ac09f8787809500212d9914788964-4064x2286.jpg?auto=format&fit=max&w=1920&q=90"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col">
        <h2
  className={`text-white/60 mb-4 uppercase tracking-widest transition-all duration-700 transform font-sans text-2xl font-light ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
  }`}
  style={{ transitionDelay: "0ms" }}
>
  OUR TECHNOLOGY
</h2>
       <h3
  className={`text-white/100 mb-3 transition-all duration-700 transform font-mono ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
  } `}
  style={{
    transitionDelay: "150ms",
    fontFamily: "Inter, sans-serif",
    fontSize: "35px",
    lineHeight: "1.5",
    fontWeight: 500,
  }}
>
  Empowering innovation with cutting-edge tools and platforms for unmatched performance.
</h3>

        </div>

        {/* Right Column */}
        <div className="max-w-[500px] space-y-2 text-[15px] text-white/80 flex flex-col justify-start pt-[122px] font-extralight font-['Inter']">
          <p
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Our pursuit of innovation is fueled by a robust ecosystem of advanced tools, proprietary software, and
            state-of-the-art hardware. We select and develop technologies that push boundaries, ensuring agility and
            precision in every project.
          </p>
          <p
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{
              transitionDelay: "450ms",
              paddingTop: "4px",
            }}
          >
            We believe in building from the ground up, leveraging modern frameworks and custom solutions to tackle
            complex challenges. Our integrated approach ensures that every tool in our arsenal contributes to creating a
            decisive advantage.
          </p>

          <Link
            href="/hardware"
            className={`inline-flex items-center group transition-all duration-700 transform mt-6 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <span className="relative font-medium text-lg mr-2" style={{ fontFamily: "Chakra Petch, sans-serif" }}>
              <span className="relative z-10">Explore Our Tech Stack</span>
              {/* Animated Underline */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <span className="w-6 h-6 border border-white rounded-full flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black ml-2">
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
