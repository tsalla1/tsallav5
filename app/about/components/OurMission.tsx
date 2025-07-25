"use client";

import Image from "next/image";
// Removed unused imports: useEffect, useRef, useState, Target, Eye, Heart, Compass

export default function OurMission() {
  // Removed all state and useEffect related to visibility and missionElements,
  // as the new design is static and simpler.

  return (
    <section className="bg-black text-white py-24 px-4 md:px-8"> {/* Adjusted padding */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Text Content with Background Image */}
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center relative p-6 rounded-md"> 
          <div className="relative z-10"> {/* Content needs to be above the background image */}
          <h2
  className=" font-inter text-white/90 mb-4 uppercase tracking-tight transition-all duration-700 transform  opacity-100 translate-y-0 text-4xl font-semibold"
  style={{ transitionDelay: "0ms" }}
>
  OUR MISSION
</h2>

            <p className="font-inter text-gray-300 leading-relaxed text-sm max-w-md md:text-sm tracking-wider">
              We design AI Pilots that push the boundaries of autonomous flight — enabling drone and aircraft swarms to operate independently, without GPS, uninterrupted comms, or a human at the controls. Our systems combine edge perception, adaptive navigation, and decentralized swarm intelligence to excel in GPS-denied, contested airspace.
Our mission: to protect service members and civilians by putting resilient autonomy on the front lines where it can outthink, outmaneuver, and outlast the threat.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-md overflow-hidden"> {/* Consistent image container styling */}
            <Image
              src="https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=6CGz0oF0bra0Yiyn0PR2Sy31cA3CidlbsZlYZJx1nxg=" // Placeholder image, replace with your actual drone image
              alt="Drone in flight over landscape"
              fill
              className="object-cover"
              priority // Prioritize loading for this image
            />
          </div>
        </div>
      </div>
    </section>
  );
}
