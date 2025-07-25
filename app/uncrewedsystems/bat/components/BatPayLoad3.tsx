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
export default function MicaSensePayload(): JSX.Element {
  // All features are now in a single array for the left column.
  const features = [
    {
      title: "High-Res Multispectral Imaging",
      whatItMeans: "Captures five narrow spectral bands (Blue, Green, Red, Red Edge, Near-IR) plus high-resolution panchromatic imagery.",
      keyBenefit: "Produce detailed, reliable maps and analytics for precision agriculture and environmental management.",
    },
    {
      title: "Panchromatic Sensor for Pan-Sharpening",
      whatItMeans: "Includes a 5.1 MP panchromatic band that combines with the multispectral bands to produce higher-resolution outputs.",
      keyBenefit: "Sharper data means more precise decisions in the field.",
    },
    {
        title: "Large Capture Area & Fast Coverage",
        whatItMeans: "Captures a larger area per flight due to high resolution – less overlap needed.",
        keyBenefit: "Lower operational costs per acre surveyed.",
    },
    {
        title: "Integration Friendly & Rugged",
        whatItMeans: "Compact, lightweight, and designed for easy drone integration – weatherproof for reliable use in challenging conditions.",
        keyBenefit: "Consistent results without complicated hardware swaps.",
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
          
          {/* Main Content Section */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <h1 className="text-6xl md:text-7xl font-medium tracking-tight text-black leading-tight mb-12">
                MicaSense RedEdge-P <br/> Payload
              </h1>
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
                            src="https://ageagle.com/wp-content/uploads/2022/06/RedEdge-P_700px_1.png" 
                            alt="MicaSense RedEdge-P Payload"
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
