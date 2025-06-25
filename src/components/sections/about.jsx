// pages/About.js
'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About({theme}) {

  const headerRef = useRef(null);
  const [isHeaderInView, setIsHeaderInView] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  setIsHeaderInView(true);
              }
          });
      });
      observer.observe(headerRef.current);
      return () => observer.disconnect();
  }, []);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
<div id='aboutus' className={`relative w-full py-12 lg:py-0 min-h-screen ${theme?'bg-black text-white':' bg-white text-black'} overflow-hidden flex items-center`}>
<div className="flex flex-col lg:flex-row items-center justify-center h-full">
  {/* Left Column - Text */}
  <motion.div 
    ref={contentRef}
    initial={{ opacity: 0, x: -100 }}
    animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex flex-col justify-center w-full lg:w-1/2"
  >
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="hidden lg:flex items-center rounded-r-full"
      style={{
        backgroundColor: "#32B72A33",
        border: "1px solid rgba(209, 220, 208, 0.3)",
      }}
    >
      <div className="flex justify-end items-center w-full py-6 px-10">
        <span className="text-2xl font-orbitron">ABOUT US</span>
      </div>
    </motion.div>

    <div ref={headerRef} className="relative w-full h-20 lg:h-40 flex items-center justify-center overflow-hidden lg:hidden">
          {/* Background "REVIEWS" (faint) */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`absolute text-[35px] lg:text-[120px] font-bold font-orbitron translate-x-[2px] translate-y-[2px] z-10 ${theme ? 'text-white/35' : 'text-gray-900/35'}`}
          >
            ABOUT US
          </motion.h2>

          {/* Foreground "REVIEWS" */}
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`relative top-4 lg:top-12 text-[25px] lg:text-[70px] z-10 font-extrabold font-orbitron tracking-widest ${theme ? 'text-white' : 'text-black'}`}
          >
            ABOUT US
          </motion.h3>
        </div>

    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-6 lg:mt-6 lg:ml-14"
    >
      <p
        className="px-10 text-base leading-relaxed text-justify"
      >
        Farmershop Tech India Private Limited is a non-government private company
        incorporated on December 17, 2021, and registered in Bangalore. It operates
        under NIC code 7290, indicating involvement in computer-related activities such
        as website maintenance and multimedia creation. The company has an authorized
        share capital of ₹5,00,000 and a paid-up capital of ₹1,00,000. The last Annual
        General Meeting (AGM) was held on December 25, 2022, and its latest balance sheet
        was filed on March 31, 2022. The company is actively managed by directors Deeksha
        Mishra and Indu Sharma. Its registered address is in Bommanahalli, Bangalore,
        Karnataka – 560068.
      </p>
    </motion.div>
  </motion.div>

  {/* Right Column - Images */}
  <motion.div 
    ref={imageRef}
    initial={{ opacity: 0, x: 100, scale: 0.8 }}
    animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
    transition={{ duration: 1, delay: 0.8 }}
    className="flex flex-col justify-center items-center w-full lg:w-1/2 relative"
  >
    <div className="relative w-60 lg:w-80 h-60 lg:h-80 mt-6 flex items-center justify-center">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        src="/images/Frame2085666081.svg"
        alt="Solid Green Pill"
        className="absolute w-40 h-40 md:w-full md:h-full"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        src="/images/Frame2085666080.svg"
        alt="Thin Green Border Arc"
        className="absolute w-40 h-40 md:w-full md:h-full z-10 transform -translate-x-4 -translate-y-4 lg:-translate-x-10 lg:-translate-y-6"
      />
    </div>
  </motion.div>

</div>
<div
  className="hidden lg:block absolute top-[200px] left-0 transform -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
style={{
  background: theme
    ? 'radial-gradient(ellipse at left top, #32B72A54 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
    : 'radial-gradient(ellipse at left top, #32B72A54 0%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0.3) 100%)',
  filter: 'blur(80px)',
  opacity: 0.9,
}}
/>

        {/* <img
          src="/images/Ellipse.svg"
          alt="Decorative Bottom Right"
          className=" absolute top-[-150px] left-0 w-150 h-150"
        /> */}
        <img
          src="/images/Frame.svg"
          alt="Decorative Bottom Right"
          className="absolute bottom-[-150px] right-0 w-170 h-170"
        />
      </div>

  );
}

