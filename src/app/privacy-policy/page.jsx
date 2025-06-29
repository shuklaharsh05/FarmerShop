'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';

export default function PrivacyPolicy() {
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
      <div className="relative pt-32 lg:pt-28 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className={`text-2xl md:text-4xl font-orbitron font-bold mb-6 ${isDark ? 'text-[#32B72A]' : 'text-black'}`}>
            Privacy Policy
            </h1>
            <p className="text-base md:text-lg opacity-80 font-medium">
            Empowering farmers with smarter tools, rentals, and supplies — all at your fingertips. Download the app now and start your hassle-free farming journey!            
            </p>
          </div>

           
        </div>
      </div>

      {/* Privacy Policy Content Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li><span className="font-medium">Personal Information:</span> Name, email address, phone number, and other details you provide when registering or contacting us.</li>
          <li><span className="font-medium">Usage Data:</span> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>To provide and improve our services.</li>
          <li>To communicate with you about updates, offers, and support.</li>
          <li>To analyze usage and enhance user experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-6 mb-2">3. Data Security</h3>
        <p className="mb-4">We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
        <h3 className="text-lg font-semibold mt-6 mb-2">4. Sharing Your Information</h3>
        <p className="mb-4">We do not sell or rent your personal information. We may share data with trusted partners who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.</p>
        <h3 className="text-lg font-semibold mt-6 mb-2">5. Your Choices</h3>
        <p className="mb-4">You can update or delete your personal information by contacting us. You may also opt out of receiving promotional communications at any time.</p>
        <h3 className="text-lg font-semibold mt-6 mb-2">6. Changes to This Policy</h3>
        <p className="mb-4">We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.</p>
        <h3 className="text-lg font-semibold mt-6 mb-2">7. Contact Us</h3>
        <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:support@farmershop.com" className="text-[#32B72A] underline">support@farmershop.com</a>.</p>
      </div>

      <Footer theme={isDark} />
    </div>
  );
}