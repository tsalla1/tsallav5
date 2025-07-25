"use client";

import React from 'react';
import Image from 'next/image';

// This is the main component for the "Mission Ready Autonomy" section.
// It's designed to be a full-screen section with an image on the left and text on the right.
export default function DexterCapabilities(): JSX.Element {
  return (
    <>
      {/*
        The link to the "Clash Grotesk" font is included here.
        This ensures the font is available for the component to use.
        In a real-world application, this would typically be placed in the <head> of your main HTML file.
      */}
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif;
        }
      `}</style>

      <section className="font-clash-grotesk flex flex-col md:flex-row items-center justify-center bg-black text-white w-full min-h-screen px-6 md:px-16 lg:px-24 py-12 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24">

          {/* Left Column: Image */}
         <div className="w-full md:w-5/12 flex justify-center">
  <div className="relative w-full max-w-md aspect-[1075/1433]">
    <Image
      src="https://cdn.sanity.io/images/z5s3oquj/production/cb086dde298ee0705a8a4afad32741324e8997cf-1075x1433.jpg?auto=format&fit=max&w=1080&q=90"
      alt="DEXTER Drone"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-7/12 flex flex-col justify-center text-left max-w-2xl">
            <h1 className="text-6xl lg:text-8xl font-medium leading-none tracking-tight mb-8">
              Mission Ready<br />Autonomy
            </h1>
           <p className="font-clash-grotesk text-lg lg:text-xl leading-relaxed text-gray-300 font-extralight">
  Engineered with real-world mission feedback, DEXTER combines AI-powered autonomy, advanced sensing, and modular architecture — giving operators the decisive edge in complex environments.
</p>
          </div>

        </div>
      </section>
    </>
  );
}
