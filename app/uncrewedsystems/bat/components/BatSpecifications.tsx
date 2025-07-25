import React from 'react';

// Define the props interface for the reusable Feature component
interface FeatureProps {
  title: string;
  description: string;
}

// Reusable feature component with left alignment
const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="py-4 border-b border-gray-300">
    <h3 className="text-2xl sm:text-3xl font-medium text-black mb-1">{title}</h3>
    <p className="text-lg sm:text-xl text-black font-normal leading-7 tracking-wide">{description}</p>
  </div>
);

export default function BatSpecifications(): JSX.Element {
  // The features array has been updated with the content from your image.
  const features: FeatureProps[] = [
    {
      title: "Multi-Role Capability",
      description: "One platform, many possibilities – modular payload integration empowers rapid role changes without any downtime.",
    },
    {
      title: "Rapid Mission Ready",
      description: "Always-ready display in minutes, operate with ease, recover with zero hassle.",
    },
    {
      title: "Operable by One",
      description: "Designed for solo deployment — streamlined setup and mission management for individual users.",
    },
    {
      title: "AI enhanced object detection",
      description: "Intelligent algorithms scan the environment, identify key objects, providing mission teams with clear, actionable data.",
    },
    {
        title: "Target Acquisition and Recon",
        description: "Detect, identify, and track with precision — delivering actionable intelligence and live situational awareness where it matters most.",
    },
    {
        title: "Way Point Navigation",
        description: "Pre-set your path, use relay points or point-to-point routing with precise autonomous control.",
    },
    {
        title: "Low acoustic signature",
        description: "Engineered for near-silent performance to stay discreet, minimize noise, and avoid detection during critical missions.",
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk-variable');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk Variable', sans-serif;
        }
      `}</style>

      {/* The horizontal padding (px-*) has been increased to add more space on the left and right. */}
      <section className="font-clash-grotesk bg-white w-full min-h-screen flex items-center py-20 px-12 sm:px-20 lg:px-32">
        <div className="w-full">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tighter text-black leading-tight">
              Key Features
            </h1>
            <p className="text-lg sm:text-xl text-black font-normal leading-7 tracking-wide mt-4">
              Each feature unlocks new possibilities — precision, power, and performance built into every flight.
            </p>
          </div>

          {/* Features List */}
          <div className="flex flex-col">
            {features.map((feature) => (
              <Feature
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
