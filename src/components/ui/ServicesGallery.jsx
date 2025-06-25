'use client'
import Image from 'next/image';
import { useState } from 'react';

const AppsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First item expanded by default

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const sections = [
    {
      title: '01',
      description: 'Farming Rental Equipments',
      bgimg: '/images/1.webp',
    },
    {
        title: '02',
        description: 'Fresh Fruits',
        bgimg: '/images/1.webp',
      },
      {
        title: '03',
        description: 'Dairy Products',
        bgimg: '/images/1.webp',
      },
      {
        title: '04',
        description: 'Organic Vegetables',
        bgimg: '/images/1.webp',
      },
    
    
  ];

  return (
    <div className="w-[90%] lg:w-[80%] 2xl:w-[100%] mx-auto px-2 py-8 lg:py-12 max-w-4xl">
      <div id="accordion" className="flex flex-col md:flex-row items-stretch h-[30rem] md:h-[30rem] lg:h-[25rem] 2xl:h-[25rem] overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`accordion-item flex-1 relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out rounded-xl ${
              activeIndex === index ? 'flex-[3] md:flex-[5] ' : 'flex-1'
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className="relative w-full h-full ">
              <Image 
                src={section.bgimg} 
                alt={`Image ${index + 1}`} 
                className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'filter-none' : 'filter blur-2xl'
                }`} 
                width={1000} 
                height={1000} 
              />
              <div className="absolute inset-0"></div>
            </div>
            <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
            
              <h3
                className={`text-2xl md:text-3xl font-semibold whitespace-nowrap tracking-wide transition-all duration-700 ease-in-out delay-200 md:rotate-[270deg] ${
                  activeIndex === index ? 'hidden' : 'opacity-100'
                }`}
              >
                {section.title}
              </h3>

              {/* Description at bottom with blur background */}
              <div
                className={`absolute bottom-0 left-0 right-0 transition-all duration-700 ease-in-out delay-75 ${
                  activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                }`}
              >
                <div className="bg-black/40 backdrop-blur-md p-4 rounded-t-xl">
                  <p className="text-base lg:text-lg text-center font-medium">{section.description}</p>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsAccordion;