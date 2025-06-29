import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Newsletter({ theme }) {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.className = theme ? 'dark' : 'light';
    }
  }, [theme]);

  const blogs = [
    {
      id: 1,
      title: 'Empowering Indian Farmers',
      description:
        'Discover how Farmer Shop India helps farmers get fair prices for their produce while providing consumers with quality foods.',
      imageSrc: '/images/1.jpg',
    },
    {
      id: 2,
      title: 'Empowering Indian Farmers',
      description:
        'Discover how Farmer Shop India helps farmers get fair prices for their produce while providing consumers with quality foods.',
      imageSrc: '/images/2.jpg',
    },
    {
      id: 3,
      title: 'Empowering Indian Farmers',
      description:
        'Discover how Farmer Shop India helps farmers get fair prices for their produce while providing consumers with quality foods.',
      imageSrc: '/images/3.jpg',
    },
  ];

  return (
    <div id="newsletter" className={`relative w-full min-h-screen overflow-hidden flex items-center justify-center ${theme ? 'bg-black' : 'bg-white'}`}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* ========= HEADER AREA ========= */}
        <div ref={headerRef} className="relative w-full h-16 lg:h-40 flex items-center justify-center overflow-hidden">
          {/* Background "BLOGS" (faint) */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`absolute text-[35px] lg:text-[120px] font-bold font-orbitron translate-x-[2px] translate-y-[2px] z-10 ${theme ? 'text-[#023c02]' : 'text-[#afe5b6]'}`}
          >
            NEWSLETTER
          </motion.h2>

          {/* Foreground "BLOGS" */}
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`relative top-4 lg:top-12 text-[25px] lg:text-6xl z-10 font-extrabold font-orbitron tracking-widest ${theme ? 'dark:text-[#ffffff]' : 'text-[rgb(0,0,0)]'}`}
          >
            NEWSLETTER
          </motion.h3>
        </div>

        {/* ========= BLOG CARDS ========= */}
        <motion.div 
          ref={cardsRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-8 lg:mt-20 sm:mt-12 px-2 sm:px-4 lg:px-8 w-full max-w-6xl flex flex-col sm:flex-row flex-wrap justify-center gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-8"
        >
          {blogs.map((blog, index) => (
           <motion.div
           key={blog.id}
           initial={{ opacity: 0, y: 50, scale: 0.9 }}
           animate={
             isCardsInView
               ? { opacity: 1, y: 0, scale: 1 }
               : { opacity: 0, y: 50, scale: 0.9 }
           }
           transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
           className="relative w-full max-w-xs sm:max-w-[300px] lg:max-w-[320px] bg-transparent rounded-xl overflow-hidden group transition-shadow duration-300 mx-auto"
         >
           {/* Masked Image with Smooth Bottom-Right Curve */}
           <div className="relative w-full h-44 lg:h-44">
             <svg
               className="absolute inset-0 w-full h-full z-0"
               viewBox="0 0 320 192"
               preserveAspectRatio="none"
             >
               <defs>
                 <mask id={`mask-${blog.id}`}>
                   {/* Base Rounded Rectangle */}
                   <rect x="0" y="0" width="320" height="190" rx="20" ry="20" fill="white" />
                   {/* Smooth Cutout in Bottom-Right */}
                   <g transform="translate(253 117)">
                    <path d="M66.9606 0C66.9606 0 67.0493 0.574274 66.9606 1.48535V74.7353H0C0 74.7353 6.48253 72.4706 9.98047 63.7353C13.4784 55 12.9924 43.1912 14.9912 36.8824C16.99 30.5735 22.4868 21.8382 30.9818 17.9559C39.4768 14.0735 37.4779 15.5294 52.9688 12.6176C64.6916 10.4142 66.6846 4.3198 66.9606 1.48535V0Z" fill="black"/>
                   </g>
                 </mask>
               </defs>
         
               {/* Masked Blog Image */}
               <image
                 href='/images/1.webp'
                 width="320"
                 height="192"
                 preserveAspectRatio="xMidYMid slice"
                 mask={`url(#mask-${blog.id})`}
               />
             </svg>
         
             {/* Arrow Button in the Curved Notch */}
             <button
               className="absolute bottom-1 right-1 z-10 w-[44px] h-[44px] rounded-full flex items-center justify-center bg-[#FAD08B] hover:bg-[#FAD08B] text-black transition duration-300"
             >
               <Image src="/images/right-arrow.svg" alt="Arrow Right" width={20} height={20} className='w-5 h-5'/>
             </button>
           </div>
         
           {/* Text Content */}
           <div
             className={`pr-4 py-2 lg:pr-6 sm:py-3 bg-transparent ${
               theme
                 ? ' text-white'
                 : ' text-gray-800'
             }`}
           >
             <h4 className="text-lg sm:text-xl font-semibold mb-1">{blog.title}</h4>
             <p className="text-xs sm:text-sm leading-relaxed">{blog.description}</p>
           </div>
         </motion.div>
         
         
          ))}
        </motion.div>
      </div>

      {/* Background Radial Glow */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(50, 183, 42, 0.5) 0%, rgba(50, 183, 42, 0.2) 40%, rgba(0, 0, 0, 0) 100%)',
          filter: 'blur(80px)',
          opacity: 0.9,
        }}
      />
    </div>
  );
}


