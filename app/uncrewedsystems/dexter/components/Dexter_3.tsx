"use client";

import React from 'react';

// Feature component
interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="py-4 border-b border-gray-300">
    <h3 className="text-2xl sm:text-3xl font-medium text-black mb-1">{title}</h3>
    <p className="text-lg sm:text-xl text-black font-normal leading-7 tracking-wide">{description}</p>
  </div>
);

export default function KeyFeaturesSection(): JSX.Element {
  const features: FeatureProps[] = [
    {
      title: "Vertical Take-Off & Landing",
      description: "True VTOL freedom: launch from confined spaces and rough terrain with zero setup.",
    },
    {
      title: "Intelligent Autonomy",
      description: "AI-driven navigation and decision-making for missions that adapt in real time.",
    },
    {
      title: "Compact Heavy-Lift",
      description: "Minimal form, maximum payload — engineered to move more with less.",
    },
    {
      title: "Rapid Mission Ready",
      description: "Always ready: deploy in minutes, operate with ease, recover with zero hassle.",
    },
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
