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
      <div className="absolute z-20 responsive-container flex flex-col items-start justify-start top-32 sm:top-40 md:top-48 lg:top-56 xl:top-64 left-0 right-0">
        {/* MAIN LINE */}
        <h1 className="heading-primary mb-4 sm:mb-6 font-clash tracking-tight">
          UNMANNED.<br />
          UNMATCHED.<br />
          UNCOMPROMISED.
        </h1>

        {/* SECOND LINE */}
        <p className="text-body mb-4 sm:mb-6 font-clash text-white max-w-2xl">
          We Don't Build Drones. We Build Unfair Advantages.
        </p>

        {/* THIRD LINE */}
        <Link
          href="/about"
          className="
            inline-block bg-transparent border border-white text-white
            hover:bg-white hover:text-black
            px-6 py-3 sm:px-8 sm:py-4 mt-2 transition-colors duration-200
            font-clash text-sm sm:text-base
          "
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}
