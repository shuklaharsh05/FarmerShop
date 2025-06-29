'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';

export default function TermsOfUse() {
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
            Terms of Use
            </h1>
            <p className="text-base md:text-lg opacity-80 font-medium">
            Welcome to FarmerShop Tech India. By using our services, you agree to the following terms and conditions.            
            </p>
          </div>

           
        </div>
      </div>

      {/* Terms of Use Content Section */}
        <div className='max-w-6xl mx-auto px-4 pb-16 text-base md:text-lg space-y-6'>
            <ol className='list-inside space-y-6'>
                <li>
                    1. Use of the Platform
                    <ul className='list-disc pl-6 space-y-1'>
                        <li>
                        You must be 18+ or have permission from a guardian to use our services.                        
                        </li>
                        <li>
                        All information provided must be accurate and up to date.
                        </li>
                    </ul>
                </li>


                <li>
                    2. User Responsibilities
                    <ul className='list-disc pl-6 space-y-1'>
                        <li>
                        You are responsible for maintaining the confidentiality of your account.                        
                        </li>
                        <li>
                        You agree not to misuse the app for illegal or harmful activities.
                        </li>
                    </ul>
                </li>

                <li>
                    3. Transactions and Payments
                    <ul className='list-disc pl-6 space-y-1'>
                        <li>
                        All payments are handled securely via authorized providers.                        
                        </li>
                        <li>
                        We are not liable for disputes between buyers and sellers but will support conflict resolution.
                        </li>
                    </ul>
                </li>

                <li>
                4. Intellectual Property
                    <ul className='list-disc pl-6 space-y-1'>
                        <li>
                        All content, logos, and features are the property of FarmerShop Tech India and cannot be reused without permission.                        
                        </li>
                    </ul>
                </li>

                <li>
                5. Termination
                    <ul>
                        <li>
                        We reserve the right to suspend or terminate access if terms are violated or misuse is detected.                        
                        </li>
                    </ul>
                </li>

                <li>
                6. Liability Disclaimer
                    <ul>
                        <li>
                        We are not responsible for any loss or damage caused by reliance on the app’s information or services.                        
                        </li>
                    </ul>
                </li>

                <li>
                Contact Us:
                    <ul>
                        <li>
                        For any issues or questions, contact <a href="mailto:support@farmershoptech.in" className='text-[#32B72A] underline'>support@farmershoptech.in</a>.
                        </li>
                    </ul>
                </li>
                
            </ol>
        </div>

      <Footer theme={isDark} />
    </div>
  );
}