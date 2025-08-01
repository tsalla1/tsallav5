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

// The main component, updated for paginated horizontal scrolling.
export default function Dexter1(): JSX.Element {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Use a ref to track the current page index without causing re-renders.
  const currentIndex = useRef(0);

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

    // A flag to prevent rapid-fire scrolling while a transition is active.
    let isScrolling = false;
    const scrollCooldown = 700; // Must be same or more than the CSS transition duration.

    const pages = Array.from(track.children) as HTMLElement[];
    // Calculate the horizontal start position (snap point) for each page.
    const snapPoints = pages.map(page => page.offsetLeft);

    const handleWheel = (e: WheelEvent) => {
      // If a scroll animation is already in progress, do nothing.
      if (isScrolling) return;

      const scrollDirection = e.deltaY > 0 ? 1 : -1; // 1 for down/right, -1 for up/left
      const newIndex = currentIndex.current + scrollDirection;

      // Check if the new page index is within the valid range.
      if (newIndex >= 0 && newIndex < pages.length) {
        // Set the scrolling flag to true to start the cooldown.
        isScrolling = true;
        currentIndex.current = newIndex;
        // Move the track to the calculated snap point of the new page.
        track.style.transform = `translateX(-${snapPoints[currentIndex.current]}px)`;

        // After the animation finishes, reset the flag.
        setTimeout(() => {
          isScrolling = false;
        }, scrollCooldown);
      }
    };

    container.addEventListener('wheel', handleWheel);
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif;
        }
      `}</style>

      <section ref={containerRef} className="font-clash-grotesk bg-black text-white w-full h-screen overflow-hidden">
        {/* The track now has a longer, smoother transition for the page-snap effect. */}
        <div ref={trackRef} className="flex h-full items-center relative transition-transform duration-700 ease-in-out">

          {/* Page 1: The Header. It now takes the full screen width to act as a distinct page. */}
          <div className="flex-shrink-0 w-screen h-full flex items-center justify-center">
            <div className="text-left w-full max-w-7xl px-8 sm:px-16 lg:px-24">
              <h1 className="text-7xl font-medium tracking-tight">
                Mission Profiles
              </h1>
              <p className="text-xl text-gray-400 mt-4 max-w-lg">
                Engineered for reliability in critical scenarios.
              </p>
            </div>
          </div>

          {/* Subsequent Pages: The Profile Cards. We add padding to space them out correctly. */}
          {profiles.map((profile) => (
            <div key={profile.title} className="flex-shrink-0 w-[450px] px-10">
              <ProfileCard
                title={profile.title}
                description={profile.description}
                imageUrl={profile.imageUrl}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
