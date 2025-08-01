import React, { useRef, useEffect } from 'react';

interface ProfileCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col w-[300px]">
      <div className="aspect-[100/117] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
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

export default function Dexter1(): JSX.Element {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
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
    {
      title: "Urban Recon",
      description: "Navigate complex urban terrain with precision and stealth.",
      imageUrl: "https://cdn.sanity.io/images/z5s3oquj/production/8801921308d204efa9bf03a05503df326916b847-3642x2049.png?auto=format&fit=max&w=1920&q=90",
    },
    {
      title: "Environmental Monitoring",
      description: "Track changes in forests, oceans, and deserts to inform policy and response.",
      imageUrl: "https://cdn.sanity.io/images/z5s3oquj/production/9ac1a07d3b84827ba687a8a9281ed48b31458e49-1920x1080.png?auto=format&fit=max&w=1920&q=90",
    },
    {
      title: "Tactical Edge",
      description: "Designed to operate in GPS-denied and comms-contested environments.",
      imageUrl: "https://cdn.sanity.io/images/z5s3oquj/production/641de74487cf8d3c116abd5924ab673367516bb2-2000x2500.jpg?auto=format&fit=max&w=1920&q=90",
    },
    {
      title: "Urban Recon",
      description: "Navigate complex urban terrain with precision and stealth.",
      imageUrl: "https://cdn.sanity.io/images/z5s3oquj/production/8801921308d204efa9bf03a05503df326916b847-3642x2049.png?auto=format&fit=max&w=1920&q=90",
    },
    {
      title: "Environmental Monitoring",
      description: "Track changes in forests, oceans, and deserts to inform policy and response.",
      imageUrl: "https://cdn.sanity.io/images/z5s3oquj/production/9ac1a07d3b84827ba687a8a9281ed48b31458e49-1920x1080.png?auto=format&fit=max&w=1920&q=90",
    },
    {
      title: "Tactical Edge",
      description: "Designed to operate in GPS-denied and comms-contested environments.",
      imageUrl: "https://cdn.sanity.io/images/z5s3oquj/production/641de74487cf8d3c116abd5924ab673367516bb2-2000x2500.jpg?auto=format&fit=max&w=1920&q=90",
    },
  ];

  // Group profiles into pages of 3
  const pageSize = 3;
  const profilePages = [];
  for (let i = 0; i < profiles.length; i += pageSize) {
    profilePages.push(profiles.slice(i, i + pageSize));
  }

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let isScrolling = false;
    const scrollCooldown = 700;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = currentIndex.current + direction;

      if (newIndex >= 0 && newIndex < profilePages.length + 1) {
        isScrolling = true;
        currentIndex.current = newIndex;

        const newScroll = newIndex * window.innerWidth;
        track.style.transform = `translateX(-${newScroll}px)`;

        setTimeout(() => {
          isScrolling = false;
        }, scrollCooldown);
      }
    };

    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, [profilePages.length]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif;
        }
      `}</style>

      <section ref={containerRef} className="font-clash-grotesk bg-black text-white w-full h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full transition-transform duration-700 ease-in-out">
          {/* First Page: Header */}
          <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-12">
            <div className="max-w-5xl">
              <h1 className="text-6xl font-medium tracking-tight">Mission Profiles</h1>
              <p className="text-xl text-gray-400 mt-6 max-w-xl">
                Engineered for reliability in critical scenarios.
              </p>
            </div>
          </div>

          {/* Profile Card Pages */}
          {profilePages.map((group, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-screen h-full flex items-center justify-center gap-10"
            >
              {group.map((profile) => (
                <ProfileCard
                  key={profile.title}
                  title={profile.title}
                  description={profile.description}
                  imageUrl={profile.imageUrl}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
