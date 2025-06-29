'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';

export default function DeliveryAreas() {
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

  const deliveryAreas = [
    {
      name: 'Punjab',
      state: ['Ludhiana','Jalandhar','Amritsar','Patiala','Bathinda','Phillaur']    
    },
    {
      name: 'Bihar',
      state: ['Ludhiana','Jalandhar','Amritsar','Patiala','Bathinda','Phillaur']    
    },
    {
      name: 'Karnataka',
      state: ['Ludhiana','Jalandhar','Amritsar','Patiala','Bathinda','Phillaur']    
    },
    {
      name: 'Maharashtra',
      state: ['Ludhiana','Jalandhar','Amritsar','Patiala','Bathinda','Phillaur']    
    },
    {
      name: 'Madhya Pradesh',
      state: ['Ludhiana','Jalandhar','Amritsar','Patiala','Bathinda','Phillaur']    
    },
    {
      name: 'Rajasthan',
      state: ['Ludhiana','Jalandhar','Amritsar','Patiala','Bathinda','Phillaur']    
    },
    
    
  ];

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
            Delivery Areas
            </h1>
            <p className="text-base md:text-lg opacity-80 font-medium">
            We proudly deliver farming products, tools, and rental services to the following areas. We're continuously expanding to serve more farmers across India.            
            </p>
          </motion.div>

        <div className="flex flex-col gap-4">
            {deliveryAreas.map((area) => (
                <div key={area.name}>
                    <p className="font-semibold">Currently Delivering In: {area.name}</p>
                    <ul className="mt-4 list-disc space-y-2 lg:space-y-5 pl-6 grid grid-cols-2 lg:grid-cols-6 lg:gap-4">
                        {area.state.map((state) => (
                            <li key={state}>{state}</li>
                        ))}
                    </ul>
                </div>
            ))}           
        </div>
      </div>
    </div>

      <Footer theme={isDark} />
    </div>
  );
}