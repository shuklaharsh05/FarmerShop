'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import Image from 'next/image';

export default function CustomerSupport() {
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
            Customer Support
            </h1>
            <p className="text-base md:text-lg opacity-80 font-medium">
            We’re here to help! At FarmerShop Tech India, your satisfaction is our priority. Whether you’re a farmer, buyer, or rental partner, our customer support team is ready to assist you.            
            </p>
          </motion.div>

          <div className='flex flex-col md:flex-row gap-4 lg:gap-8'>
          <div className='flex flex-1 flex-col items-center justify-center gap-4 lg:gap-6 border-[1px] border-[#999999] py-8 px-4 lg:p-4 rounded-lg h-60'>
                <Image src="/images/phone.svg" alt="Email" className='w-10 h-10 lg:w-16 lg:h-16' width={100} height={100} />
                <p className='text-center'>Phone Support: +91-XXXXXXXXXX (Mon–Sat, 9 AM to 6 PM)</p>
            </div>
            <div className='flex flex-1 flex-col items-center justify-center gap-4 lg:gap-6 border-[1px] border-[#999999] py-8 px-4 lg:p-4 rounded-lg h-60'>
                <Image src="/images/email.svg" alt="Email" className='w-10 h-10 lg:w-16 lg:h-16' width={100} height={100} />
                <p className='text-center'>Email: support@farmershoptech.in</p>
            </div>
          </div>

            <div className='mt-8'>
                <p className="font-medium">What We Can Help With</p>
                <ul className="list-disc space-y-2 pl-6 mt-2">
                    <li>Account setup or login issues</li>
                    <li>Product listing or rental support</li>
                    <li>Payment & transaction questions</li>
                    <li>Order delays or issues</li>
                    <li>Reporting a bug or app error</li>
                    <li>General questions and feedback</li>
                </ul>
            </div>

            <div className="mt-8">
                <p className="font-medium">Response Time</p>
                <ul className="list-disc space-y-2 pl-6 mt-2">
                    <li>Email/Chat: Within 24 hours (Mon–Sat)</li>
                    <li>Urgent Issues: We aim to resolve critical problems as soon as possible</li>
                </ul>
            </div>

        </div>
      </div>

      <Footer theme={isDark} />
    </div>
  );
}