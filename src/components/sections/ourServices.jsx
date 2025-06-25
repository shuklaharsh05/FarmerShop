import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ServicesGallery from '../ui/ServicesGallery'

export default function OurServices({ theme }) {
  const headingRef = useRef(null);
  const galleryRef = useRef(null);
  
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.className = theme ? 'dark' : 'light';
    }
  }, [theme]);

   const descriptions = [
  "Farming Rental Equipments",
  "Fresh Fruits",
  "Dairy Products",
  "Organic Vegetables",
];
  return (
    <section
      className={`lg:min-h-screen transition-colors duration-500 flex flex-col items-center justify-center pt-12 pb-8 lg:py-0
        ${theme 
          ? 'bg-black lg:bg-[radial-gradient(ellipse_at_center,_#004d00_0%,_#000000_100%)] text-white' 
          : 'bg-amber-50 lg:bg-[radial-gradient(ellipse_at_center,_#004d00_0%,_#f0fff0_100%)] text-[#222]'
        }`
      }
    >
        {/* Service Heading with Animation */}
        <div ref={headingRef} className="relative w-full h-20 lg:h-40 flex items-center justify-center overflow-hidden mb-4 lg:mb-0">
          {/* Background Text */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeadingInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`
              absolute 
              text-[35px] lg:text-[120px] font-bold font-orbitron
              translate-x-[2px] translate-y-[2px] z-10 
              ${theme ? 'text-white/50' : 'dark:text-gray-900/35'}
            `}
          >
            OUR SERVICES
          </motion.h2>
          {/* Foreground Text */}
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`
              relative top-4 lg:top-12 text-[25px] lg:text-6xl 
              font-orbitron font-bold tracking-widest 
              ${theme ? 'dark:text-[#ffffff]' : 'text-[#000000]'}
            `}
          >
            OUR SERVICES
          </motion.h3>
        </div>

        {/* Image Gallery Container with Animation */}
        <motion.div 
          ref={galleryRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full"
        >
          <ServicesGallery />
        </motion.div>
      </section>
  )
}