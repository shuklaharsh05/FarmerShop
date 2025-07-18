import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (sectionId) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
    if (pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      router.push(`/#${sectionId}`);
    }
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Handle scroll-based navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`fixed top-0 inset-x-0 z-30 w-full mx-auto px-4 transition-transform duration-300 ease-in-out ${
      isNavbarVisible ? 'translate-y-5' : '-translate-y-full'
    }`} ref={navbarRef}>
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between bg-[#3F7F30]/20 backdrop-blur-sm rounded-full px-4 py-2 font-orbitron">
        
        {/* Logo - Always Visible */}
        <a href="/" className="flex items-center">
          <img src="/images/logofarm.png" alt="Logo" className="w-8 h-8" loading="lazy" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-orbitron font-medium text-[15px]">
      <button onClick={() => handleNavClick('aboutus')} className="hover:text-green-400 transition-colors duration-200">About Us</button>
      <button onClick={() => handleNavClick('services')} className="hover:text-green-400 transition-colors duration-200">Our Offerings</button>
      <button onClick={() => handleNavClick('whychooseus')} className="hover:text-green-400 transition-colors duration-200">Why Choose Us</button>
      <button onClick={() => handleNavClick('blogs')} className="hover:text-green-400 transition-colors duration-200">Blogs</button>
      <button onClick={() => handleNavClick('reviews')} className="hover:text-green-400 transition-colors duration-200">Reviews</button>
    </div>

        {/* Right Side Items - Always Visible */}
        <div className="flex items-center space-x-4">
          {/* Login Button - Hidden on Mobile */}
          <Link 
            href="/login"
            className="hidden md:block nav-btn px-6 py-1 rounded-full font-krona text-sm text-white hover:scale-105 transition-transform duration-200"
          >
            Login
          </Link>
          
          {/* Theme Toggle - Desktop only */}
          <button
            onClick={toggleTheme}
            className={`hidden md:block relative w-12 h-6 rounded-full p-1 transition-colors duration-300 hover:scale-105 ${isDark ? 'bg-gray-600' : 'bg-gray-100'}`}
            aria-label="Toggle theme"
          >
            <div className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
              isDark 
                ? 'bg-white translate-x-6' 
                : 'bg-yellow-400 translate-x-0'
            }`}>
              {/* Sun Icon for Light Mode */}
              <svg 
                className={`absolute inset-0 w-4 h-4 transition-opacity duration-300 ${
                  isDark ? 'opacity-0' : 'opacity-100'
                }`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              
              {/* Moon Icon for Dark Mode */}
              <svg 
                className={`absolute inset-0 w-4 h-4 transition-opacity duration-300 text-gray-800 ${
                  isDark ? 'opacity-100' : 'opacity-0'
                }`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          </button>
          
          {/* Action Icons */}
          <div className="flex items-center space-x-2">
            {/* Cart Gif */}
            <img src="/images/Basket.gif" alt="Basket" className="w-8 h-8" loading="lazy" />
            {/* Language Gif - Desktop only */}
            <img src="/images/xa.gif" alt="Notification" className="w-8 h-8 hidden md:inline" loading="lazy" />
          </div>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-white/50' : 'bg-black/50'} ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-white/50' : 'bg-black/50'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-white/50' : 'bg-black/50'} ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`w-[90%] mx-auto md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out transform ${
        isMenuOpen 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div className="mt-2 bg-[#3F7F30]/20 backdrop-blur-sm rounded-xl p-4 space-y-4">
          
          {/* Theme and Language Row */}
          <div className="flex items-center justify-between gap-4 pb-2 border-b border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-base font-orbitron">Theme</span>
              <button
                onClick={toggleTheme}
                className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-300 hover:scale-105 ${isDark ? 'bg-gray-600' : 'bg-gray-100'}`}
                aria-label="Toggle theme"
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
                  isDark 
                    ? 'bg-white translate-x-6' 
                    : 'bg-yellow-400 translate-x-0'
                }`}>
                  {/* Sun Icon for Light Mode */}
                  <svg 
                    className={`absolute inset-0 w-4 h-4 transition-opacity duration-300 ${
                      isDark ? 'opacity-0' : 'opacity-100'
                    }`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  
                  {/* Moon Icon for Dark Mode */}
                  <svg 
                    className={`absolute inset-0 w-4 h-4 transition-opacity duration-300 text-gray-800 ${
                      isDark ? 'opacity-100' : 'opacity-0'
                    }`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-orbitron">Language</span>
              <img src="/images/xa.gif" alt="Language" className="w-8 h-8" loading="lazy" />
            </div>
          </div>

          {/* Navigation Links */}
          <button onClick={() => handleNavClick('aboutus')} className="text-center block text-base font-orbitron hover:text-green-400 transition-colors duration-200 py-2">About Us</button>
          <button onClick={() => handleNavClick('services')} className="text-center block text-base font-orbitron hover:text-green-400 transition-colors duration-200 py-2">Our Offerings</button>
          <button onClick={() => handleNavClick('whychooseus')} className="text-center block text-base font-orbitron hover:text-green-400 transition-colors duration-200 py-2">Why Choose Us</button>
          <button onClick={() => handleNavClick('blogs')} className="text-center block text-base font-orbitron hover:text-green-400 transition-colors duration-200 py-2">Blogs</button>
          <button onClick={() => handleNavClick('reviews')} className="text-center block text-base font-orbitron hover:text-green-400 transition-colors duration-200 py-2">Reviews</button>

          

          {/* Login Button in Mobile Menu */}
          <div className="flex justify-center pb-2 border-b border-white/20">
            <Link 
              href="/login"
              className="nav-btn w-full px-6 py-2 rounded-full font-krona text-sm text-white hover:scale-105 transition-transform duration-200 text-center"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 