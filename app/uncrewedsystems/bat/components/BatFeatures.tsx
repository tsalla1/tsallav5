"use client";

import React from 'react';

// Define the props interface for a single specification item
interface SpecItemProps {
  label: string;
  value: string;
}

// A reusable component for displaying each specification item with a bottom border.
const SpecItem: React.FC<SpecItemProps> = ({ label, value }) => (
  <div className="border-b border-neutral-300 last:border-b-0">
    {/* Font size increased from text-lg to text-xl */}
    <div className="flex justify-between py-3 text-xl leading-tight tracking-tight text-neutral-800">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
  </div>
);

export default function BatFeatures(): JSX.Element {
  // The specifications array has been updated with the content from your image.
  const specifications: SpecItemProps[] = [
    { label: "Endurance", value: "90+ mins" },
    { label: "Cruise Speed", value: "20 m/s Optimal" },
    { label: "Altitude", value: "1 km AGL" },
    { label: "Lift Capacity", value: "Up To 1kg" },
    { label: "Communication", value: "Over 50 km LOS" },
  ];

  return (
    <>
      {/* Global Clash Grotesk font inclusion */}
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        body, .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif !important;
        }
      `}</style>

      <div className="font-clash-grotesk bg-white min-h-screen w-full flex flex-col md:flex-row">
        {/* LEFT COLUMN: Text Content and Specifications */}
        <div className="md:w-1/2 w-full flex justify-center items-center px-6 py-16 md:py-0">
          <div className="max-w-md w-full">
            {/* The descriptive paragraph has been updated. */}
            <p className="text-3xl leading-snug text-black mb-12 tracking-tight">
              Wherever the mission demands silent precision and clear intelligence, T-BAT deploys instantly. It navigates, detects, strikes, and surveys with speed and confidence in any terrain.
            </p>
            <div className="w-full">
              {specifications.map((spec, index) => (
                <SpecItem key={`${spec.label}-${index}`} label={spec.label} value={spec.value} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="md:w-1/2 w-full h-72 md:h-screen">
          <img
            // IMPORTANT: Replace this src with the actual path to your new image.
            src="https://cdn.sanity.io/images/z5s3oquj/production/0649dbe96de92e27212722dbfc01e42c576247ad-1080x1235.png?auto=format&fit=max&w=828&q=90"
            alt="T-BAT Drone in flight"
            className="object-cover w-full h-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/800x600/1a1a1a/ffffff?text=Image+Unavailable`;
            }}
          />
        </div>
      </div>
    </>
  );
}
