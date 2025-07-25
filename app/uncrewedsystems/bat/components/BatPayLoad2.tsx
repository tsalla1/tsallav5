"use client";

import React, { useState } from 'react';

// --- Accordion Item Component ---
// Reusable component for displaying feature details.
interface AccordionItemProps {
  title: string;
  whatItMeans: string;
  keyBenefit: string;
  isOpen: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, whatItMeans, keyBenefit, isOpen }) => {
  return (
    <div className="border-b border-gray-300 py-4 cursor-pointer">
      <div>
        <h3 className="text-xl font-medium text-black">{title}</h3>
      </div>
      {/* Content expands/collapses on hover with a smooth 500ms transition */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <div className="text-gray-700 space-y-2">
            <p><span className="font-semibold">What it means:</span> {whatItMeans}</p>
            <p><span className="font-semibold">Key benefit:</span> {keyBenefit}</p>
        </div>
      </div>
    </div>
  );
};


// --- Main Page Component ---
export default function BatPayLoad2(): JSX.Element {
  // All features are now in a single array for the left column.
  const features = [
    {
      title: "EO Zoom Camera",
      whatItMeans: "A powerful daylight camera with smooth 40x zoom – combines 20x true optical zoom and 2x digital boost.",
      keyBenefit: "Wide-area coverage and stand-off detail with zero risk to the aircraft.",
    },
    {
      title: "Thermal Camera — 640x480",
      whatItMeans: "A high-resolution thermal sensor at the core of the gimbal – detects heat signatures invisible to the naked eye.",
      keyBenefit: "Reliable day/night situational awareness and thermal inspection in any environment.",
    },
    {
        title: "Stabilized Gimbal — Pitch/Yaw/Roll",
        whatItMeans: "Fully stabilized 3-axis gimbal with -45° to +135° pitch and continuous 360° yaw/roll rotation.",
        keyBenefit: "Accurate, smooth data capture from any angle with no blind spots.",
    },
    {
        title: "Compact & Lightweight",
        whatItMeans: "Compact build (40x40x65 mm) and weighs only 125 grams.",
        keyBenefit: "Maximizes mission-flexibility without trade-offs in flight time.",
    }
  ];

  // State to manage which accordion item is currently hovered.
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif;
        }
      `}</style>
      <section className="font-clash-grotesk bg-white w-full min-h-screen py-20 px-8 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Header Section */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
            <div className="w-full md:w-1/2">
                <h1 className="text-6xl md:text-7xl font-medium tracking-tight text-black leading-tight">
                    Payloads and Sensors
                </h1>
            </div>
            <div className="w-full md:w-1/2">
                <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
                    Supports multi-domain operations through adaptable payload bays, carrying high-resolution cameras, thermal imagers, and mission-specific sensors to meet dynamic operational demands.
                </p>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-medium text-black mb-6">
                NextVision Colibri 2 <br/> Mapping Payload
              </h2>
              <div className="flex flex-col">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    onMouseEnter={() => setHoveredTitle(feature.title)}
                    onMouseLeave={() => setHoveredTitle(null)}
                  >
                    <AccordionItem
                      {...feature}
                      isOpen={hoveredTitle === feature.title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2">
                <div className="flex flex-col">
                    {/* Product Image */}
                    <div className="bg-gray-100 p-4 rounded-lg mb-6">
                        <img 
                            src="https://www.nextvision-sys.com/wp-content/uploads/2021/11/Raptor-W.png" 
                            alt="NextVision Raptor-W Payload"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
