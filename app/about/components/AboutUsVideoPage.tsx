"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUsVideoPage() {
  return (
    <section className="relative h-screen w-full flex items-center justify-start bg-black text-white overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/889008535/rendition/1080p/file.mp4?loc=external&signature=8a912138a2014f2a2454300b4cd0605d97c26167bdc3d6dc09d07286c5490b66"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Optional: Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

      {/* Text & CTA */}
      <div className="relative z-20 max-w-6xl px-6 md:px-12 lg:px-16">
        <h1 className="font-bold text-[36px] md:text-[56px] lg:text-[70px] leading-[1.1] mb-5 font-farro tracking-tight">
          ABOUT US
        </h1>

        <p className="text-base sm:text-sm sm:text-base md:text-lg lg:text-xl mb-1 font-pontano text-white max-w-[60%]">
          Discover who we are, what drives us, and the vision that guides our journey beyond the horizon.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg"
        >
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
        </Button>
      </div>
    </section>
  )
}
