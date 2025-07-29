import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MissionProfiles = () => {
  const sectionRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll to horizontal movement
  // Move from 0% to -200% to show 3 cards one at a time
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-200%']);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const missionData = [
    {
      id: 1,
      title: "Tactical Drone Swarm Neutralization",
      description: "Coordinated drone swarms demand rapid, autonomous countermeasures. Multiple interceptors can launch simultaneously to track and disable swarm elements in real time.",
      image: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=800&h=600&fit=crop&crop=center",
      bgGradient: "from-orange-500/20 to-red-600/20"
    },
    {
      id: 2,
      title: "Border Security Enforcement",
      description: "Persistent surveillance and rapid response capabilities enhance border protection through coordinated detection and threat assessment systems across vast territories.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      bgGradient: "from-green-500/20 to-blue-600/20"
    },
    {
      id: 3,
      title: "Ship Drone Defense",
      description: "Naval vessels implement advanced targeting for drone swarms and critical threat detection systems that launch fiber-optic countermeasures for active fleet defense under extreme conditions.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
      bgGradient: "from-blue-500/20 to-purple-600/20"
    }
  ];

  return (
    <div ref={sectionRef} className="relative bg-black text-white" style={{ height: '400vh' }}>
      {/* Sticky container that holds the horizontally scrolling content */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Header */}
        <motion.div 
          className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            Mission Profiles
          </h1>
          <p className="text-xl text-gray-400 font-light">
            Engineered for reliability in critical scenarios.
          </p>
        </motion.div>

        {/* Horizontally moving cards container - only one card visible at a time */}
        <motion.div 
          className="absolute top-1/2 left-0 transform -translate-y-1/2 flex"
          style={{ 
            x,
            width: `${missionData.length * 100}vw`
          }}
        >
          {missionData.map((mission, index) => (
            <motion.div
              key={mission.id}
              className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 md:px-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + index * 0.1,
                ease: "easeOut"
              }}
            >
              <div className="w-full max-w-4xl h-3/4 relative group cursor-pointer">
                {/* Background Image */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${mission.image})`,
                    filter: 'brightness(0.3)'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: 'brightness(0.4)'
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient Overlay */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${mission.bgGradient} rounded-3xl`}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end rounded-3xl">
                  <motion.div
                    className="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl font-bold border border-white/20"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {mission.id}
                  </motion.div>

                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {mission.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl opacity-90"
                    whileHover={{ 
                      y: -8,
                      opacity: 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {mission.description}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.button
                    className="mt-8 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-semibold w-fit hover:bg-white hover:text-black transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,1)",
                      color: "#000"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
                
                {/* Border Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20"
                  whileHover={{ 
                    boxShadow: "0 0 40px rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="text-sm font-light">Scroll to explore missions</span>
          <div className="flex gap-2">
            {missionData.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-600"
                style={{
                  backgroundColor: useTransform(
                    scrollYProgress,
                    [index / 3, (index + 1) / 3],
                    ["rgb(75, 85, 99)", "rgb(255, 255, 255)"]
                  )
                }}
              />
            ))}
          </div>
          <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white rounded-full"
              style={{ scaleX: scrollYProgress }}
              transformOrigin="left"
            />
          </div>
        </motion.div>

        {/* Mission Counter */}
        <motion.div
          className="absolute top-1/2 right-8 transform -translate-y-1/2 text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isLoaded ? 0.6 : 0, x: isLoaded ? 0 : 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-6xl font-black text-white/10">
            {Math.floor(scrollYProgress.get() * 3) + 1 || 1}
          </div>
          <div className="text-lg text-gray-500">/ {missionData.length}</div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MissionProfiles;
