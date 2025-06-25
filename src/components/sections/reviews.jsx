import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const reviews = [
  {
    id: 1,
    text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/avatar1.png",
  },
  {
    id: 2,
    text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/avatar2.png",
  },
  {
    id: 3,
    text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/avatar3.png",
  },
];

export default function Reviews({ theme }) {
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

  return (
    <section className={`relative w-full min-h-screen transition-colors duration-500 flex flex-col items-center justify-start pt-8 lg:pt-20 pb-12 lg:pb-0 overflow-hidden
      ${theme 
        ? 'bg-black lg:bg-[radial-gradient(ellipse_at_center,_#004d0060_0%,_#00000000_100%)] text-white' 
        : 'bg-white lg:bg-[radial-gradient(ellipse_at_center,_#004d0060_0%,_#f0fff000_100%)] text-black'
      }`}>
        {/* ========= HEADER AREA ========= */}
        <div ref={headerRef} className="relative w-full h-16 lg:h-40 flex items-center justify-center overflow-hidden">
          {/* Background "REVIEWS" (faint) */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`absolute text-[35px] lg:text-[120px] font-bold font-orbitron translate-x-[2px] translate-y-[2px] z-10 ${theme ? 'text-white/35' : 'text-gray-900/35'}`}
          >
            REVIEWS
          </motion.h2>

          {/* Foreground "REVIEWS" */}
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`relative top-4 lg:top-12 text-[25px] lg:text-[70px] z-10 font-extrabold font-orbitron tracking-widest ${theme ? 'text-white' : 'text-black'}`}
          >
            REVIEWS
          </motion.h3>
        </div>
      <div className="max-w-6xl w-[90%] mx-auto px-4 flex flex-col mt-10 lg:mt-20 lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h3 className={`text-center text-2xl lg:text-left lg:text-[2.5rem] lg:leading-[3rem] font-medium mb-4 lg:mb-6 lg:max-w-80 ${theme ? 'text-white' : 'text-black'}`}>What Our Customer Says</h3>
          <p className={`mb-6 max-w-lg ${theme ? 'text-gray-300' : 'text-black'}`}>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
          <button className="bg-gradient-to-r from-[#32B72A] to-[#165113] text-white px-6 py-2 rounded-full shadow-md font-medium hover:shadow-lg transition-shadow duration-300">
            View More
          </button>
        </div>

        {/* Right Side - Review Cards */}
        <div className="flex flex-col gap-4 lg:gap-8 w-full max-w-md ml-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`rounded-3xl shadow-md px-4 py-3 flex gap-3 text-black bg-white transition-transform duration-300 ${
                review.id === 2 
                  ? 'scale-110 lg:scale-110 lg:origin-right' 
                  : 'scale-100'
              }`}
            >
              <div className="min-w-[50px] lg:min-w-[80px] min-h-[50px] lg:min-h-[80px]">
                <Image
                  src="/images/review-avatar.png"
                  alt="Customer"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>
              <p className={`text-[12px] leading-[1.25] lg:text-base text-black`}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ellipse Background */}
      {/* <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full h-[800px] rounded-full pointer-events-none"
        style={{
          background: theme
            ? 'radial-gradient(ellipse at center, rgba(50, 183, 42, 0.4) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
            : 'radial-gradient(ellipse at center, rgba(50, 183, 42, 0.2) 0%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.9) 100%)',
          filter: 'blur(80px)',
          opacity: 0.9,
          transition: 'background 0.6s ease-in-out',
        }}
      /> */}
    </section>
  );
}

