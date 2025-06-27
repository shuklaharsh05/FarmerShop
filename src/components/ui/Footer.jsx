import React from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
    {children}
  </a>
);

export default function Footer({ theme }) {
  return (
    <footer className={`relative w-full min-h-[450px] overflow-hidden ${theme? 'dark:bg-black dark:text-white' : 'bg-white text-black'}`}>
      {/* Background Radial Glow */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
        w-full h-[600px] rounded-full pointer-events-none"
        style={{
            background:
            'radial-gradient(ellipse at center, rgba(50, 183, 42, 0.6) 0%, rgba(50, 183, 42, 0.2) 60%, rgba(0, 0, 0, 0) 80%)',
          filter: 'blur(80px)',
          opacity: 0.9,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-[90%] mx-auto px-2 lg:px-6 py-12 max-w-[76rem]">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Contact & Support */}
          <div className="flex flex-col gap-2">
            <h3 className="text-base md:text-lg lg:text-3xl font-orbitron mb-2 lg:mb-4 font-normal">Contact & Support</h3>
            <a href="#" className="hover:text-green-300 transition-colors text-sm md:text-base">Contact Us</a>
            <a href="#" className="hover:text-green-300 transition-colors text-sm md:text-base">Customer Support</a>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-2">
            <h3 className="text-base md:text-lg lg:text-3xl font-orbitron mb-2 lg:mb-4 font-normal">Company</h3>
            <a href="#" className="hover:text-green-300 transition-colors text-sm md:text-base">About Us</a>
            <a href="#" className="hover:text-green-300 transition-colors text-sm md:text-base">Career</a>
            <a href="#" className="hover:text-green-300 transition-colors text-sm md:text-base">News</a>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <h3 className="text-base md:text-lg lg:text-3xl font-orbitron mb-2 lg:mb-4 font-normal">Our Services</h3>
            <a href="#" className="hover:text-green-300 transition-colors text-sm md:text-base">Our Services</a>
            <a href="#" className="hover:text-green-300 transition-colors text-sm md:text-base">Delivery Areas</a>
            <a href="#" className="hover:text-green-300 transition-colors text-sm md:text-base">Download Apps Links</a>
            <a href="#" className="hover:text-green-300 transition-colors text-sm md:text-base">Privacy Policy | Terms of Use</a>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col col-span-2 md:col-span-1">
            <h3 className="text-base md:text-lg lg:text-3xl font-orbitron mb-2 lg:mb-4 font-normal">Contact us</h3>
            <div className="flex items-center mb-3">
              <MapPinIcon className={`w-6 h-6 mr-3 ${theme ? 'text-white' : 'dark:text-black'}`}/>
              <span>India</span>
            </div>
            <div className="flex items-center mb-3">
              <EnvelopeIcon className={`min-w-5 h-6 mr-3 ${theme ? 'text-white' : 'dark:text-black'}`}/>
              <span>farmershoptechindia@gmail.com</span>
            </div>
            <div className="flex items-center mb-4">
              <PhoneIcon className={`w-6 h-6 mr-3 ${theme ? 'text-white' : 'dark:text-black'}`}/>
              <span>+91 7890XXXXXX</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill={theme? 'white' : 'black'} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill={theme ? 'white' : 'black'} viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z"/></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill={theme ? 'white' : 'black'} viewBox="0 0 300 300"><path d="M178.57 127.15 290.27 0h-26.46l-99.41 110.93L89.34 0H0l117.13 166.94L0 300.25h26.46l104.05-116.29 81.3 116.29h89.34L178.57 127.15Zm-20.73 22.79L144.44 133.2 38.62 16.16h41.7l102.35 145.49-13.39 19.12-43.23-61.03Z"/></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill={theme ? 'white' : 'black'} viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.47 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 