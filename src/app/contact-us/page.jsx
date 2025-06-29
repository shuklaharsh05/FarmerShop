'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';

export default function ContactUs() {
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
      <div className="relative pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className={`text-3xl uppercase md:text-5xl font-orbitron font-bold mb-6 ${isDark ? 'text-[#32B72A]' : 'text-black'}`}>
                Contact Us
            </h1>
            <p className="text-base md:text-lg opacity-80">
            Contact me about anything related to our company or services.We'll do our best to get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="w-[100%] max-w-[46rem] gap-12 items-start">
            {/* Contact Information */}
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-orbitron font-bold mb-6 text-[#32B72A]">
                  Get In Touch
                </h2>
                <p className="text-lg opacity-80 mb-8">
                  Have questions about our agricultural solutions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#32B72A]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#32B72A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold">Phone</h3>
                    <p className="opacity-80">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#32B72A]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#32B72A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold">Email</h3>
                    <p className="opacity-80">info@farmertechindia.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#32B72A]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#32B72A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold">Address</h3>
                    <p className="opacity-80">123 Agriculture Street, Tech Park, Bangalore, Karnataka 560001</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#32B72A]/10 rounded-xl p-6">
                <h3 className="font-orbitron font-semibold text-[#32B72A] mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=""
            >
              {/* <h2 className="text-2xl font-orbitron font-bold mb-6 text-[#32B72A]">
                Send Message
              </h2> */}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border border-[#32B72A]/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#32B72A] focus:border-transparent transition-all duration-300 ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border border-[#32B72A]/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#32B72A] focus:border-transparent transition-all duration-300 ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg border border-[#32B72A]/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#32B72A] focus:border-transparent transition-all duration-300 ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border border-[#32B72A]/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#32B72A] focus:border-transparent transition-all duration-300 ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                      placeholder="Enter subject"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-2 rounded-lg border border-[#32B72A]/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#32B72A] focus:border-transparent transition-all duration-300 resize-none ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                    placeholder="Enter your message..."
                  />
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                  >
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                  >
                    Sorry, there was an error sending your message. Please try again.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit bg-[#2E6F40] hover:bg-[#2E6F40]/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#32B72A] focus:ring-offset-2 focus:ring-offset-black"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer theme={isDark} />
    </div>
  );
}