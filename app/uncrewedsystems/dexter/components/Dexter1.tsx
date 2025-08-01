import React, { useRef, useEffect } from 'react';

// The ProfileCard component remains unchanged as it's a presentational component.
interface ProfileCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col">
      <div className="aspect-[100/117] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // prevent infinite loop
            target.src = `https://placehold.co/600x450/1a1a1a/ffffff?text=Image+Unavailable`;
          }}
        />
      </div>
      <div className="pt-5">
        <h3 className="text-xl font-medium tracking-tight text-white">{title}</h3>
        <p className="text-base text-gray-400 mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// The main component, updated for horizontal scrolling.
export default function Dexter1(): JSX.Element {
  // Refs for the scroll container and the horizontal track.
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Data for the mission profile cards remains the same.
  const profiles: ProfileCardProps[] = [
    {
      title: "Border Surveillance",
      description: "Provides continuous situational awareness for persistent monitoring and threat detection.",
      imageUrl: "https://cdn.sanity.io/images/z5s3oquj/production/641de74487cf8d3c116abd5924ab673367516bb2-2000x2500.jpg?auto=format&fit=max&w=1920&q=90",
    },
    {
      title: "Disaster Response",
      description: "Rapidly deliver support for real-time situational awareness and coordination in disaster relief operations.",
      imageUrl: "https://cdn.sanity.io/images/z5s3oquj/production/9ac1a07d3b84827ba687a8a9281ed48b31458e49-1920x1080.png?auto=format&fit=max&w=1920&q=90",
    },
    {
      title: "ISR Missions",
      description: "Delivers high-resolution intelligence and real-time situational awareness for critical ISR missions.",
      imageUrl: "https://cdn.sanity.io/images/z5s3oquj/production/8801921308d204efa9bf03a05503df326916b847-3642x2049.png?auto=format&fit=max&w=1920&q=90",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // This variable will hold the current horizontal scroll position.
    let scrollPosition = 0;

    const handleWheel = (e: WheelEvent) => {
      // e.deltaY gives the vertical scroll amount. We add it to our horizontal scroll position.
      scrollPosition += e.deltaY;

      // Calculate the maximum scrollable distance.
      const maxScroll = track.scrollWidth - container.clientWidth;

      // Clamp the scroll position to be within the bounds [0, maxScroll].
      if (scrollPosition < 0) {
        scrollPosition = 0;
      }
      if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
      }

      // Apply the horizontal scroll using a CSS transform.
      track.style.transform = `translateX(-${scrollPosition}px)`;
    };

    // Add the wheel event listener. The { passive: false } option is not needed here.
    container.addEventListener('wheel', handleWheel);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif;
        }
      `}</style>
      
      {/* The main section is now the scroll container. 
        - h-screen: Sets height to 100% of the viewport.
        - overflow-hidden: Hides the default scrollbar.
      */}
      <section ref={containerRef} className="font-clash-grotesk bg-black text-white w-full h-screen overflow-hidden">
        {/* The track holds all the content and moves horizontally.
          - flex, h-full, items-center: Aligns all children in a horizontal row.
          - transition, ease-out: Provides a smooth scrolling animation.
          - pl-[...]: Adds padding to center the header initially.
        */}
        <div ref={trackRef} className="flex h-full items-center transition-transform duration-500 ease-out pl-[calc(50vw-450px)]">
          
          {/* Header Section: Now a flex item within the horizontal track. */}
          <div className="flex-shrink-0 w-[900px] pr-20">
            <h1 className="text-7xl font-medium tracking-tight">
              Mission Profiles
            </h1>
            <p className="text-xl text-gray-400 mt-4">
              Engineered for reliability in critical scenarios.
            </p>
          </div>

          {/* Profiles Section: Mapped cards are now flex items. */}
          <div className="flex items-center gap-8">
            {profiles.map((profile) => (
              // Each card container has a fixed width to ensure the track's total width is predictable.
              <div key={profile.title} className="flex-shrink-0 w-[400px]">
                <ProfileCard
                  title={profile.title}
                  description={profile.description}
                  imageUrl={profile.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
