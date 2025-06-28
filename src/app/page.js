'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Blogs from '../components/sections/blogs';
import OurServices from '../components/sections/ourServices';
import About from '../components/sections/about';
import Whychooseus from '../components/sections/whyCooseUs';
import Navbar from '../components/ui/Navbar';
import Warehouses from '../components/sections/warehouses';
import Stores from '../components/sections/stores';
import Footer from '../components/ui/Footer';
import Reviews from '../components/sections/reviews';
import Newsletter from '../components/sections/newsletter';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

export default function Home() {
  const [shopText, setShopText] = useState('FARMERSHOP');
  const rotatingTexts = ['FARMERSHOP', 'FAST DELIVERY', '24/7SUPPORT'];
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShopText(prev =>
        rotatingTexts[(rotatingTexts.indexOf(prev) + 1) % rotatingTexts.length]
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark]);

  return (
    <>
      {/* Hero Section - Fixed */}
      <div className={`relative w-full min-h-[725px] lg:min-h-screen overflow-hidden ${isDark?'text-white bg-black':'text-black bg-white'} font-sans duration-500`}>
        {/* Background Animation */}
        <div className="absolute inset-0 z-0 pt-[435px] lg:pt-0">
          <Player
            autoplay
            loop
            src="/gif/First-page.json"
            className=" w-full h-full bg-black"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10" />

        {/* Navbar Component */}
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        {/* Hero Content with Direct Framer Motion */}
        <div className="relative mt-24 lg:mt-28 flex flex-col items-center h-full text-center px-4 z-20">
          <div className="h-16 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={shopText}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="lg:text-5xl text-3xl font-orbitron font-bold text-[#32B72A] absolute"
              >
                {shopText}
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-opacity-70 mt-4 px-4 py-2 max-w-4xl text-base lg:text-lg font-normal"
          >
            Farmertechindia, established in 2017, is a product and service-based company in the agricultural sector.
            It focuses on providing innovative solutions for farmers, integrating technology to enhance productivity
            and efficiency. The company offers a range of agricultural products and services tailored to modern
            farming needs.
          </motion.p>
        </div>
      </div>

      {/* Sections */}
      <div className={`relative w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="relative isolate">
          <Warehouses theme={isDark}/>
        </div>
        <div className="relative isolate">
          <Stores theme={isDark}/>
        </div>
        <div className="relative isolate">
          <OurServices theme={isDark}/>
        </div>
        <div className="relative isolate">
          <Blogs theme={isDark}/>
        </div>
        <div className="relative isolate">
          <About theme={isDark}/>
        </div>
        <div className="relative isolate">
          <Whychooseus theme={isDark}/>
        </div>
        <div className="relative isolate">
          <Reviews theme={isDark}/>
        </div>
        <div className="relative isolate">
          <Newsletter theme={isDark}/>
        </div>
      </div>

      {/* Footer */}
      <Footer theme={isDark} />
    </>
  );
}
