"use client";

import React, { useState } from 'react';

// --- Accordion Item Component ---
// This component now just displays the feature information.
// The open/close state is controlled entirely by the parent.
interface AccordionItemProps {
  title: string;
  whatItMeans: string;
  keyBenefit: string;
  isOpen: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, whatItMeans, keyBenefit, isOpen }) => {
  return (
    // The wrapper div has a bottom border
    <div className="border-b border-gray-300 py-4 cursor-pointer">
      <div>
        <h3 className="text-xl font-medium text-black">{title}</h3>
        {/* The '+' icon has been removed. */}
      </div>
      {/* The content area expands and collapses with a smooth transition based on the isOpen prop. The duration has been increased to 500ms. */}
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
export default function BatpayLoad1(): JSX.Element {
  // All features are in a single array for the left column.
  const features = [
    {
      title: "61MP Full-Frame Sensor",
      whatItMeans: "Ultra-high resolution – captures extremely detailed still images.",
      keyBenefit: "You can fly higher or cover more area without losing image quality.",
    },
    {
      title: "Remote Operation (USB-C / LAN)",
      whatItMeans: "You can control the camera from a distance – trigger, change settings, transfer data.",
      keyBenefit: "Full automation or remote piloting – efficient workflows.",
    },
    {
      title: "Compact & Lightweight Body",
      whatItMeans: "Small size and light weight make it easy to integrate.",
      keyBenefit: "More flight time, more mounting options, less power draw.",
    },
    {
      title: "E-Mount Lens Compatibility",
      whatItMeans: "Works with Sony’s wide range of interchangeable lenses (zoom, prime, wide-angle, telephoto).",
      keyBenefit: "One camera body, multiple use cases – just switch the lens.",
    },
  ];

  // State to manage which accordion item is currently being hovered over.
  // We store the title of the hovered item, or null if none are hovered.
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
          {/* Main Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-black">
              ILX-LR1 - Sony Pro <br />
              Mapping Payload
            </h1>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-col">
                {features.map((feature) => (
                  // This wrapper div detects the hover state for each item.
                  <div
                    key={feature.title}
                    onMouseEnter={() => setHoveredTitle(feature.title)}
                    onMouseLeave={() => setHoveredTitle(null)}
                  >
                    <AccordionItem
                      {...feature}
                      // The item is open only if its title matches the hovered title.
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
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <img 
                            src="https://pro.sony/s3/2023/08/21131220/ILX-LR1-_-Hero-product-image-1.png" 
                            alt="Sony ILX-LR1 Camera"
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
