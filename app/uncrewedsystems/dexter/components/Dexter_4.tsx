"use client";

import React, { useState } from 'react';

// --- Accordion Item Component ---
// This component handles the display and interaction for each feature.
interface AccordionItemProps {
  title: string;
  whatItMeans: string;
  keyBenefit: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, whatItMeans, keyBenefit, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-xl font-medium text-black">{title}</h3>
        {/* The '+' icon rotates to an 'x' when the accordion is open */}
        <span className={`text-3xl font-light text-gray-600 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          +
        </span>
      </div>
      {/* The content area expands and collapses with a smooth transition */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <div className="text-gray-700 space-y-2">
            <p><span className="font-semibold">What it means:</span> {whatItMeans}</p>
            <p><span className="font-semibold">Key benefit:</span> {keyBenefit}</p>
        </div>
      </div>
    </div>
  );
};


// --- Main Page Component ---
export default function Dexter_5(): JSX.Element {
  // Data for the feature sections
  const leftColumnFeatures = [
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

  
  // Combine all feature titles to set the initial state with all accordions open.
  const allFeatureTitles = leftColumnFeatures.map(f => f.title);
  
  // State to manage which accordion items are open. It's now an array.
  const [openAccordions, setOpenAccordions] = useState<string[]>(allFeatureTitles);

  const handleAccordionClick = (title: string) => {
    // If the clicked item's title is already in the array, remove it (to close).
    if (openAccordions.includes(title)) {
      setOpenAccordions(openAccordions.filter(t => t !== title));
    } else {
      // Otherwise, add it to the array (to open).
      setOpenAccordions([...openAccordions, title]);
    }
  };


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
              <div className="flex flex-col gap-4">
                {leftColumnFeatures.map((feature) => (
                  <AccordionItem
                    key={feature.title}
                    {...feature}
                    isOpen={openAccordions.includes(feature.title)}
                    onClick={() => handleAccordionClick(feature.title)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-8">
                    {/* Product Image */}
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <img 
                            src="https://pro.sony/s3/2023/08/21131220/ILX-LR1-_-Hero-product-image-1.png" 
                            alt="Sony ILX-LR1 Camera"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    {/* The accordion item previously here has been removed. */}
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
