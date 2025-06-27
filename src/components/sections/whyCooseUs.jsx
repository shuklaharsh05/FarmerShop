'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Whychooseus({theme}) {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const imageFiles = ['image19.svg', 'Secondimage.svg', 'Thirdimage.svg'];

  // Updated titles and descriptions for each card
  const titles = [
    'Affordable & Scalable Solutions',
    'Empowering Farmers',
    '24/7 Support & Training',
  ];

  const descriptions = [
    'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  ];

  return (
    <div className={`relative w-full pb-6 pt-12 lg:py-0 min-h-screen ${theme?'bg-black text-white':' bg-white text-black'} overflow-hidden flex items-center justify-center`}>
      <div className="flex flex-col items-center justify-center w-full">
        {/* Section Title - Appears First */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: -50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }} // Appears first
          className="relative w-full lg:h-40 h-20 flex items-center justify-center font-orbitron overflow-hidden mb-4 lg:mb-0"
        >
          {/* Background Text */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute text-[35px] lg:text-[120px] font-semibold select-none"
          >
            WHY CHOOSE US
          </motion.h2>

          {/* Foreground Text */}
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative top-4 lg:top-12 text-[25px] lg:text-6xl font-semibold tracking-widest px-4"
          >
            WHY CHOOSE US
          </motion.h3>
        </motion.div>

        {/* Card Section */}
        <motion.div 
          ref={cardsRef}
          className="flex flex-wrap lg:mt-10 mt-4 ml-4 lg:ml-0 justify-center items-start gap-14 lg:gap-8 px-4 py-10 max-w-7xl"
        >
          {[1, 2, 3].map((num, index) => (
            <motion.div 
              key={num} 
              className="relative w-[320px]"
              initial={{ 
                opacity: 0, 
                x: index === 1 ? 0 : (index === 0 ? -200 : 200), // Diagonal movement for 1 and 3
                y: index === 1 ? 0 : 100,
                scale: 0.8
              }}
              animate={isCardsInView ? { 
                opacity: 1, 
                x: 0, 
                y: 0, 
                scale: 1 
              } : { 
                opacity: 0, 
                x: index === 1 ? 0 : (index === 0 ? -200 : 200), 
                y: index === 1 ? 0 : 100, 
                scale: 0.8 
              }}
              transition={{ 
                duration: 1, 
                delay: 1.0 + (index * 0.4), // Sequential: 1.0s, 1.4s, 1.8s
                ease: "easeOut"
              }}
            >
              {/* Background Green Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={isCardsInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.4) }} // Badge appears after card
                className="absolute lg:top-[-25px] top-[-18px] lg:left-[20px] left-[14px] transform -translate-x-1/2 -translate-y-1/4 z-0"
              >
                <div className="relative lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] bg-gradient-to-br from-[#32B72A] to-[#165113] rounded-2xl shadow-lg">
                  <div className="absolute top-[-4px] lg:top-0 lg:left-0 left-[-5px] transform translate-x-1/4 translate-y-1/4 lg:text-3xl text-2xl font-orbitron text-white">
                    0{num}
                  </div>
                </div>
              </motion.div>

              {/* Glass Card */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl mx-2 lg:mx-0">
                {/* Illustration */}
                <div className="flex items-center justify-center">
                  <img
                    src={`/images/${imageFiles[index]}`}
                    alt={`illustration-${num}`}
                    className="object-contain"
                    style={{ maxHeight: '420px' }}
                  />
                </div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.4 + (index * 0.4) }} // Text appears after badge
                  className="absolute bottom-0 backdrop-blur-xl p-4 rounded-2xl"
                  style={{ backgroundColor: '#A1FEE91A' }}
                >
                  <h3 className="text-base font-medium text-black">
                    {titles[index]}
                  </h3>
                  <p className="text-sm mt-2 text-black">
                    {descriptions[index]}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ellipse fixed to bottom, only upper half visible */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full h-[800px] rounded-full pointer-events-none"
        style={{
          background: theme
            ? 'radial-gradient(ellipse at center, rgba(50, 183, 42, 0.4) 0%, rgba(50, 183, 42,0.2) 70%, rgba(0,0,0,0) 100%)'
            : 'radial-gradient(ellipse at center, rgba(50, 183, 42, 0.4) 0%, rgba(50, 183, 42,0.6) 70%, rgba(255,255,255,0.0) 100%)',
          filter: 'blur(80px)',
          opacity: 0.9,
          transition: 'background 0.6s ease-in-out',
        }}
      />
    </div>
  );
}
