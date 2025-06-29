'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';

export default function GetOurApp() {
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-500`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      {/* Hero Section */}
      <div className="relative pt-32 lg:pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 lg:mb-16"
          >
            <h1 className={`text-2xl md:text-4xl font-orbitron font-bold mb-6 ${isDark ? 'text-[#32B72A]' : 'text-black'}`}>
            Get the FarmerShop Tech India App
            </h1>
            <p className="text-base md:text-lg opacity-80 font-medium">
            Empowering farmers with smarter tools, rentals, and supplies — all at your fingertips. Download the app now and start your hassle-free farming journey!            
            </p>
          </motion.div>

            <div className="flex flex-col gap-4">
            <p className="font-semibold">Download Now:</p>
            <ul className="list-disc space-y-5 pl-6">
                <li>
                Android (Google Play Store):<br />
                <a href="https://play.google.com/store/apps/details?id=com.farmershop.tech" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline break-words">
                    https://play.google.com/store/apps/details?id=com.farmershop.tech
                </a>
                </li>

                <li>
                iOS (App Store):<br />
                <a href="https://apps.apple.com/in/app/farmershop-tech/id1234567890" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline break-words">
                https://apps.apple.com/in/app/farmershop-tech/id1234567890
                </a>
                </li>
            </ul>
            </div>
        </div>
      </div>

      <Footer theme={isDark} />
    </div>
  );
}