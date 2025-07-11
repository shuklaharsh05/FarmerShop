import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

export default function Warehouses({theme}) {
    const headerRef = useRef(null);
    const contentRef = useRef(null);
    
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
    const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.className = theme ? 'dark' : 'light';
        }
      }, [theme]);
    
  return (
    <section
    className={`min-h-[650px] lg:h-screen transition-colors duration-500 flex flex-col items-center justify-start pt-10 lg:pt-16 overflow-hidden relative
      ${theme 
        ? 'text-white' 
        : 'text-[#000]'
      }`
    }
  >
     {/* Background Animation */}
     <div className="absolute inset-0 z-0 overflow-hidden">
       <div className="w-full h-full overflow-hidden">
          <Player
            autoplay
            loop
            src="/gif/Second-page.json"
            style={{ 
              width: '100%', 
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              overflow: 'hidden',
              objectPosition: 'bottom',
              objectFit: 'cover'
            }}
          />
       </div>
     </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/20" />
      {/* Service Heading */}
      <div ref={headerRef} className="relative w-full h-16 lg:h-40 flex items-center justify-center overflow-hidden z-20">
        {/* Background Text */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isHeaderInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`
            absolute 
            text-[35px] lg:text-[120px] font-bold font-orbitron
            translate-x-[2px] translate-y-[2px] z-10 
            ${theme ? 'text-white/50' : 'dark:text-black/50'}
          `}
        >
          WAREHOUSES
        </motion.h2>
        {/* Foreground Text */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`
            relative top-4 lg:top-12 text-[25px] lg:text-6xl 
            font-orbitron font-bold tracking-widest z-20
            ${theme ? 'dark:text-[#ffffff]' : 'text-[#000000]'}
          `}
        >
            WAREHOUSES
        </motion.h3>
      </div>

      {/* Content */}
      <motion.p 
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-opacity-70 mt-4 px-4 py-2 max-w-5xl text-base text-center lg:text-lg z-50 relative"
      >
        Farmertechindia, established in 2017, is a product and service-based company in the agricultural sector. It focuses on providing innovative solutions for farmers, integrating technology to enhance productivity and efficiency. The company offers a range of agricultural products and services tailored to modern farming needs.
      </motion.p>

    </section>
  )
}