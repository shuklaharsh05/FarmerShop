import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const reviews = [
  {
    id: 1,
    text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/review-avatar.png",
  },
  {
    id: 2,
    text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/review-avatar.png",
  },
  {
    id: 3,
    text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/review-avatar.png",
  },
  {
    id: 4,
    text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/review-avatar.png",
  },
  {
    id: 5,
    text: "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    avatar: "/review-avatar.png",
  },
];

export default function Reviews({ theme }) {
  const headerRef = useRef(null);
  const [isHeaderInView, setIsHeaderInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsHeaderInView(true);
        }
      });
    });
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative w-full min-h-screen transition-colors duration-500 flex flex-col items-center justify-start pt-8 lg:pt-20 pb-12 lg:pb-0 overflow-hidden
      ${
        theme
          ? "bg-black lg:bg-[radial-gradient(ellipse_at_center,_#004d0060_0%,_#00000000_100%)] text-white"
          : "bg-white lg:bg-[radial-gradient(ellipse_at_center,_#004d0060_0%,_#f0fff000_100%)] text-black"
      }`}
    >
      {/* ========= HEADER AREA ========= */}
      <div
        ref={headerRef}
        className="relative w-full h-16 lg:h-40 flex items-center justify-center overflow-hidden"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isHeaderInView
              ? { opacity: 0.2, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`absolute text-[35px] lg:text-[120px] font-bold font-orbitron translate-x-[2px] translate-y-[2px] z-10 ${
            theme ? "text-white/35" : "text-gray-900/35"
          }`}
        >
          REVIEWS
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`relative top-4 lg:top-12 text-[25px] lg:text-[70px] z-10 font-extrabold font-orbitron tracking-widest ${
            theme ? "text-white" : "text-black"
          }`}
        >
          REVIEWS
        </motion.h3>
      </div>

      <div className="max-w-6xl w-[90%] mx-auto px-4 flex flex-col mt-10 lg:mt-20 lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h3
            className={`text-center text-2xl lg:text-left lg:text-[2.5rem] lg:leading-[3rem] font-medium mb-4 lg:mb-6 lg:max-w-80 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            What Our Customer Says
          </h3>
          <p className={`mb-6 max-w-lg ${theme ? "text-gray-300" : "text-black"}`}>
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

        {/* Right Content - Auto Scrolling Reviews */}
        <div className="relative h-[330px] w-full max-w-md overflow-hidden">
          <AnimatePresence initial={false}>
            {Array.from({ length: 3 }).map((_, i) => {
              const reviewIndex = (activeIndex + i) % reviews.length;
              const review = reviews[reviewIndex];
              const position = i; // 0 = top, 1 = middle, 2 = bottom
              const scale = position === 1 ? 1 : 0.9;
              const translateY = (position - 1) * 110;

              return (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: translateY + 30 }}
                  animate={{ opacity: 1, y: translateY, scale }}
                  exit={{ opacity: 0, y: translateY - 30 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute top-1/2 left-0 right-0 transform -translate-y-1/2 rounded-3xl shadow-md px-4 py-3 flex gap-3 text-black bg-white`}
                >
                  <div className="min-w-[50px] lg:min-w-[80px] min-h-[50px] lg:min-h-[80px]">
                    <Image
                      src='/images/review-avatar.png'
                      alt="Customer"
                      width={100}
                      height={100}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="text-[12px] leading-[1.25] lg:text-base text-black">
                    {review.text}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
