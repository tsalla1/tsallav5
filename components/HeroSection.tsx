"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden text-white">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://cdn.sanity.io/files/z5s3oquj/production/958ffbdcaafa889bad0744af57731fae11db69a8.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content block */}
      <div
        className="absolute z-20 px-4 w-full max-w-[1182px] flex flex-col items-start justify-start"
        style={{
          top: "200px",
          left: "65px",
        }}
      >
        {/* MAIN LINE */}
        <h1 className="font-bold text-[36px] md:text-[56px] lg:text-[70px] leading-[1.1] mb-5 font-clash tracking-tight">
  UNMANNED.<br />
  UNMATCHED.<br />
  UNCOMPROMISED.
</h1>

        {/* SECOND LINE */}
        <p className="text-base sm:text-sm sm:text-base md:text-lg lg:text-xl mb-1 font-pontano text-white max-w-[90%]">
          We Don’t Build Drones. We Build Unfair Advantages.
        </p>

        {/* THIRD LINE */}
 <Link
  href="/about"
  className="
    inline-block bg-transparent border border-white text-white
    hover:bg-white hover:text-black
    px-4 py-2 mt-3 transition-colors duration-200
    font-sans text-sm md:text-base
  "
>
  Learn More
</Link>
      </div>
    </section>
  )
}
