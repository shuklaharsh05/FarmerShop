'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = ({ theme }) => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDeny = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed bottom-4 right-4 lg:right-10 rounded-2xl z-50 py-3 px-4 lg:py-4 lg:px-8 ${
            theme ? 'bg-gray-900 text-white' : 'bg-[#A1E49D] text-gray-900'
          } border-t ${
            theme ? 'border-gray-700' : 'border-gray-200'
          } shadow-lg max-w-[calc(100vw-2rem)] lg:max-w-2xl`}
        >
                      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 lg:gap-4">
              <div className="flex items-start gap-3 flex-1">
                {/* <div className="text-2xl">🍪</div> */}
                <div>
                  <h3 className={`font-semibold text-base lg:text-lg mb-1 ${
                    theme ? 'text-white' : 'text-gray-900'
                  }`}>
                    We Value Your Privacy
                  </h3>
                  <p className={`text-xs lg:text-sm ${
                    theme ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    This website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use this site, you consent to our use of cookies.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 lg:gap-3 flex-shrink-0">
                              <button
                  onClick={handleDeny}
                  className={`px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-lg border ${
                    theme 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' 
                      : 'border-gray-800 text-gray-700 hover:bg-gray-50'
                  } transition-colors duration-200`}
                >
                  Deny
                </button>
                <button
                  onClick={handleAccept}
                  className="px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-lg bg-[#32B72A] text-white hover:bg-[#2A9A23] transition-colors duration-200"
                >
                  Accept
                </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 