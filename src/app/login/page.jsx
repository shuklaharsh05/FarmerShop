'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log('Login attempt:', formData);
      // Redirect to home page after successful login
      // router.push('/');
    }, 1000);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log('Forgot password clicked');
  };

  return (
    <div className='bg-gray-300 min-h-screen flex items-center justify-center'>
        <div className="flex max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 rounded-2xl overflow-hidden">
        <img
          src="/images/login.png"
          alt="FarmerShop"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-12 left-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg opacity-90">Sign in to your FarmerShop account</p>
        </div> */}
      </div>

      {/* Right Side - Form */}
      <div className="min-w-[20rem] flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className=" text-center mb-8">
            <img
              src="/images/logofarm.png"
              alt="FarmerShop"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-[#0E0E0E] font-medium font-orbitron">To FarmerShop</p>
          </div>

          {/* Desktop Header */}
          {/* <div className="hidden lg:block text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
            <p className="text-gray-600">Access your FarmerShop account</p>
          </div> */}

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Email/Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email or Phone
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email or phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none transition-colors duration-200"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none transition-colors duration-200"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-green-500 hover:text-green-400 transition-colors duration-200"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#32B72A] hover:bg-[#2A9A23] text-white'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span className="ml-2">Logging In...</span>
                </div>
              ) : (
                'Login'
              )}
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  href="/signup"
                  className="text-green-500 hover:text-green-400 font-medium transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-4 border-t border-gray-200">
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
    </div>
  );
} 