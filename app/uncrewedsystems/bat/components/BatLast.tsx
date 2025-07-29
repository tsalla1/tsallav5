"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function BatLast(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Global Clash Grotesk font inclusion */}
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/clash-grotesk');
        .font-clash-grotesk {
          font-family: 'Clash Grotesk', sans-serif !important;
        }
        .glass-morphism {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <section className="font-clash-grotesk relative h-screen w-full overflow-hidden">
        {/* Fixed Background Image */}
        <img
          src="https://cdn.sanity.io/images/z5s3oquj/production/abb6bab613d7d967786b922562d07d61f60f873e-3840x2160.jpg?auto=format&fit=max&w=1920&q=90"
          alt="Abstract background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Animated Background Image with parallax (optional - you can remove this if you want only the fixed one) */}
        <motion.div
          className="absolute inset-0 z-1"
          style={{ y }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src="https://cdn.sanity.io/images/z5s3oquj/production/abb6bab613d7d967786b922562d07d61f60f873e-3840x2160.jpg?auto=format&fit=max&w=1920&q=90"
            alt="Abstract background parallax"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Background Animated Orbs */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl opacity-20"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                background: `radial-gradient(circle, ${
                  ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981'][i]
                }/30, transparent)`,
                left: `${10 + i * 25}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        {/* Animated Dark Overlay */}
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)`
          }}
        />

        {/* Animated Grid Overlay */}
        <motion.div
          className="absolute inset-0 z-12 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            x: mousePosition.x * -0.5,
            y: mousePosition.y * -0.5,
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 z-15 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
                x: mousePosition.x * (i % 2 === 0 ? 1 : -1),
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Edge Vignette Effect */}
        <motion.div
          className="absolute inset-0 z-16 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 100%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Main Content */}
        <motion.div
          className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4"
          style={{ opacity }}
        >
          {/* Animated Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-medium leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 100 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            style={{
              x: mousePosition.x * 0.3,
              y: mousePosition.y * 0.3,
            }}
          >
            {/* Animate each word individually */}
            {"Ready to Deploy Where".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {"Others Cannot.".split(" ").map((word, index) => (
              <motion.span
                key={index + 4}
                className="inline-block mr-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.4 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Button with advanced effects */}
          <motion.button
            className="mt-8 bg-white/10 border border-white/20 backdrop-blur-sm text-white py-4 px-10 relative overflow-hidden group transition-all duration-300"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              y: isLoaded ? 0 : 50,
              scale: isLoaded ? 1 : 0.8 
            }}
            transition={{ 
              duration: 0.8, 
              delay: 2,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              x: mousePosition.x * 0.2,
              y: mousePosition.y * 0.2,
            }}
          >
            {/* Button background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-white/5 rounded-sm"
              animate={{
                opacity: [0, 0.5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10 font-medium tracking-wide">
              Request a Demo
            </span>

            {/* Button corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <span className="text-sm text-white/60 font-light">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              whileHover={{ borderColor: "rgba(255,255,255,0.6)" }}
            >
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
