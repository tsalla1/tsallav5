"use client";
import { useEffect } from "react";

export default function BatHero(): JSX.Element {
  // Dynamically load the Clash Grotesk font
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
        poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
      >
        <source
          src="https://cdn.sanity.io/files/z5s3oquj/production/f3cab16e70d9afbe1c7a4cef3e496ef06e3dd497.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Left Side: Title & Subtitle (shifted down) */}
      <div className="absolute left-14 top-[60%] z-10" style={{ maxWidth: "38rem" }}>
        <h1 className="font-bold text-7xl sm:text-8xl md:text-9xl leading-none tracking-normal mb-3" style={{ letterSpacing: "-0.03em" }}>
         T - BAT
        </h1>
        <p className="text-lg sm:text-xl font-normal tracking-wide" style={{ letterSpacing: "0.01em" }}>
          Battlefield Airborne Tactical - Uncrewed Systems
        </p>
      </div>

      {/* Right Side: Paragraph (shifted down) */}
      <div className="absolute right-14 top-[65%] z-10 max-w-xs sm:max-w-md text-left">
        <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed tracking-wide">
         Where advanced autonomy meets agile design, missions stay silent, precise, and ready for anything. This is tactical innovation that expands what’s achievable in the toughest conditions.
        </p>
      </div>
    </section>
  );
}
