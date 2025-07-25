"use client";

import Image from "next/image";
// Removed unused imports: useEffect, useRef, useState, Zap, Shield, Cpu, Satellite, Target, Cog

export default function WhatWeDo() {
  // Removed all state and useEffect related to visibility and services,
  // as only the top section is kept.

  return (
    <>
      {/* Top Black Section with Side Image and Text - Only this section is kept */}
      <section className="bg-black text-white py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image Left */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px]  overflow-hidden">
              <Image
                src="https://quantum-systems.com/wp-content/uploads/bf-advanced-images/6503/20240801-unmanned-CIHBW-16-800x800.jpg"
                alt="City Aerial"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="w-full md:w-1/2 text-right flex flex-col items-end justify-center">
<h2
  className="text-white/90 mb-4 uppercase tracking-tight transition-all duration-700 transform font-Inter opacity-100 translate-y-0 text-4xl font-semibold"
  style={{ transitionDelay: "0ms" }}
>
  WHAT WE DO
</h2>

           <p className="font-inter text-gray-300 leading-relaxed text-sm max-w-md md:text-sm tracking-wider">
  When disasters strike or borders need protection, our UAVs rise to the challenge. Engineered for both civil missions and combat-ready roles, they carry more than technology — they carry trust. Through vision and design excellence, we’re helping India own its place in the skies.
</p>
          </div>
        </div>
      </section>

      {/* Removed Advanced Services Grid Section */}
      {/* Removed the bottom CTA section */}
    </>
  );
}
