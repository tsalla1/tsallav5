"use client"

import { useEffect } from "react"

export default function DexterHero() {
  // Load Clash Grotesk
  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@400;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])

  return (
    <section
      className="relative h-screen w-full text-white overflow-hidden"
      style={{ fontFamily: "'Clash Grotesk', Arial, sans-serif" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://pplx-res.cloudinary.com/image/private/user_uploads/81852386/12ccb371-9ea5-4f3d-8853-99db5ce28887/image.jpg"
      >
        <source
          src="https://cdn.sanity.io/files/z5s3oquj/production/2087133f8c19622b6ae4ae9205ef784a1cc7f158.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Bottom-left: Title & Subtitle (shifted up) */}
      <div className="absolute bottom-24 left-8 sm:left-12 md:left-16 lg:left-20 z-10 max-w-[50%]">
        <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-2">
          DEXTER
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg tracking-wide">
          Multirole Single Solution
        </p>
      </div>

      {/* Bottom-right: Paragraph (shifted up) */}
      <div className="absolute bottom-24 right-8 sm:right-12 md:right-16 lg:right-20 z-10 max-w-sm sm:max-w-md md:max-w-lg text-right">
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed tracking-wide">
          Where cutting-edge AI meets seamless lift,<br />
          missions become smarter, faster, and more reliable.<br />
          This is aerial innovation that rewrites what's possible in any environment.
        </p>
      </div>
    </section>
  )
}
