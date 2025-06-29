'use client'

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';

export default function Careers() {
  const [isDark, setIsDark] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const jobsPerPage = 4;
  const [shareModal, setShareModal] = useState({ open: false, jobId: null });
  const [shareEmail, setShareEmail] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const modalRef = useRef(null);

  // Sample job data
  const allJobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      category: "Technology",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-12 LPA",
      description: "We're looking for a Senior Software Engineer to join our technology team and help build innovative agricultural solutions.",
      requirements: ["React/Next.js", "Node.js", "MongoDB", "AWS", "Agile methodologies"],
      postedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Agricultural Research Specialist",
      category: "Research",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-9 LPA",
      description: "Join our research team to develop cutting-edge agricultural technologies and improve farming practices.",
      requirements: ["Agricultural Science", "Data Analysis", "Field Research", "Report Writing"],
      postedDate: "2024-01-12"
    },
    {
      id: 3,
      title: "Marketing Manager",
      category: "Marketing",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹10-15 LPA",
      description: "Lead our marketing initiatives and help grow our presence in the agricultural technology sector.",
      requirements: ["Digital Marketing", "Brand Management", "Team Leadership", "Analytics"],
      postedDate: "2024-01-10"
    },
    {
      id: 4,
      title: "Sales Representative",
      category: "Sales",
      location: "Delhi, NCR",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹4-7 LPA",
      description: "Build relationships with farmers and agricultural businesses to promote our innovative solutions.",
      requirements: ["Sales Experience", "Communication Skills", "Agricultural Knowledge", "Travel Ready"],
      postedDate: "2024-01-08"
    },
    {
      id: 5,
      title: "UI/UX Designer",
      category: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      description: "Create intuitive and beautiful user experiences for our agricultural technology platforms.",
      requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
      postedDate: "2024-01-05"
    },
    {
      id: 6,
      title: "Data Scientist",
      category: "Technology",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹12-18 LPA",
      description: "Analyze agricultural data to provide insights and improve farming efficiency through AI/ML solutions.",
      requirements: ["Python", "Machine Learning", "Statistics", "Big Data"],
      postedDate: "2024-01-03"
    },
    {
      id: 7,
      title: "Customer Success Manager",
      category: "Customer Service",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹5-8 LPA",
      description: "Ensure customer satisfaction and help farmers maximize the value of our agricultural solutions.",
      requirements: ["Customer Service", "Problem Solving", "Training", "Communication"],
      postedDate: "2024-01-01"
    },
    {
      id: 8,
      title: "Product Manager",
      category: "Product",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹15-22 LPA",
      description: "Lead product strategy and development for our agricultural technology platform.",
      requirements: ["Product Strategy", "Agile", "Market Research", "Cross-functional Leadership"],
      postedDate: "2023-12-28"
    }
  ];

  // Filter jobs based on search term and category
  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  // Get unique categories
  const categories = ['All', ...new Set(allJobs.map(job => job.category))];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark]);

  // Close modal on outside click or Escape
  useEffect(() => {
    function handleClick(e) {
      if (shareModal.open && modalRef.current && !modalRef.current.contains(e.target)) {
        setShareModal({ open: false, jobId: null });
        setShareEmail('');
        setCopySuccess(false);
      }
    }
    function handleEsc(e) {
      if (e.key === 'Escape') {
        setShareModal({ open: false, jobId: null });
        setShareEmail('');
        setCopySuccess(false);
      }
    }
    if (shareModal.open) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [shareModal]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Simulate share action
  const handleShareSend = () => {
    // You can add real email sending logic here
    setShareModal({ open: false, jobId: null });
    setShareEmail('');
    setCopySuccess(false);
    alert('Job shared via email!');
  };

  // Copy link to clipboard
  const handleCopy = () => {
    const shareUrl = window.location.origin + '/careers?job=' + shareModal.jobId;
    navigator.clipboard.writeText(shareUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1500);
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
            className="text-left mb-16"
          >
            <h1 className={`text-3xl uppercase md:text-5xl font-orbitron font-bold mb-6 ${isDark ? 'text-[#32B72A]' : 'text-black'}`}>
            FIND OPPORTUNITIES
            </h1>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className={`w-full px-4 py-3 pl-12 rounded-full border border-[#32B72A]/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#32B72A] focus:border-transparent transition-all duration-300 ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              {/* <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#32B72A] text-white'
                        : 'bg-[#32B72A]/10 text-[#32B72A] hover:bg-[#32B72A]/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div> */}
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-sm opacity-70">
              Showing {filteredJobs.length} of {allJobs.length} opportunities
            </p>
          </div>

          {/* Job Listings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 mb-12"
          >
            {currentJobs.length > 0 ? (
              currentJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-transparent border-b border-[#32B72A]/20 pb-8 flex flex-col"
                >
                  <div className="flex flex-row items-start justify-between gap-4 w-full">
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3 className="text-lg lg:text-2xl font-medium mb-2 truncate">{job.title}</h3>
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-2">
                        <span>{job.location}</span>
                        <span className="mx-1">•</span>
                        <span>{job.type}</span>
                        <span className="mx-1">•</span>
                        <span>{job.salary}</span>
                      </div>
                      {/* Description */}
                      {/* <p className="text-base text-gray-300 mb-4 line-clamp-2">{job.description}</p> */}
                      {/* Actions */}
                      <div className="flex items-center gap-4 mt-4 ">
                        <button className="bg-[#2E6F40] hover:bg-[#2E6F40]/80 text-white font-medium py-2 px-10 rounded-full transition-all duration-300">Apply</button>
                        <button className="text-gray-500 hover:underline text-base font-normal bg-transparent p-0">Save</button>
                      </div>
                    </div>
                    {/* Share Icon */}
                    <div className="flex items-center justify-center h-full my-auto">
                      <button
                        className="p-2 rounded-full cursor-pointer transition-colors"
                        onClick={() => setShareModal({ open: true, jobId: job.id })}
                        aria-label="Share job"
                      >
                        <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.3333 24.5C17.3148 24.5 16.4491 24.15 15.7361 23.45C15.0231 22.75 14.6667 21.9 14.6667 20.9C14.6667 20.78 14.6972 20.5 14.7583 20.06L6.17222 15.14C5.8463 15.44 5.46944 15.675 5.04167 15.845C4.61389 16.015 4.15556 16.1 3.66667 16.1C2.64815 16.1 1.78241 15.75 1.06944 15.05C0.356481 14.35 0 13.5 0 12.5C0 11.5 0.356481 10.65 1.06944 9.95C1.78241 9.25 2.64815 8.9 3.66667 8.9C4.15556 8.9 4.61389 8.985 5.04167 9.155C5.46944 9.325 5.8463 9.56 6.17222 9.86L14.7583 4.94C14.7176 4.8 14.6921 4.665 14.6819 4.535C14.6718 4.405 14.6667 4.26 14.6667 4.1C14.6667 3.1 15.0231 2.25 15.7361 1.55C16.4491 0.85 17.3148 0.5 18.3333 0.5C19.3519 0.5 20.2176 0.85 20.9306 1.55C21.6435 2.25 22 3.1 22 4.1C22 5.1 21.6435 5.95 20.9306 6.65C20.2176 7.35 19.3519 7.7 18.3333 7.7C17.8444 7.7 17.3861 7.615 16.9583 7.445C16.5306 7.275 16.1537 7.04 15.8278 6.74L7.24167 11.66C7.28241 11.8 7.30787 11.935 7.31806 12.065C7.32824 12.195 7.33333 12.34 7.33333 12.5C7.33333 12.66 7.32824 12.805 7.31806 12.935C7.30787 13.065 7.28241 13.2 7.24167 13.34L15.8278 18.26C16.1537 17.96 16.5306 17.725 16.9583 17.555C17.3861 17.385 17.8444 17.3 18.3333 17.3C19.3519 17.3 20.2176 17.65 20.9306 18.35C21.6435 19.05 22 19.9 22 20.9C22 21.9 21.6435 22.75 20.9306 23.45C20.2176 24.15 19.3519 24.5 18.3333 24.5ZM18.3333 22.1C18.6796 22.1 18.9699 21.985 19.2042 21.755C19.4384 21.525 19.5556 21.24 19.5556 20.9C19.5556 20.56 19.4384 20.275 19.2042 20.045C18.9699 19.815 18.6796 19.7 18.3333 19.7C17.987 19.7 17.6968 19.815 17.4625 20.045C17.2282 20.275 17.1111 20.56 17.1111 20.9C17.1111 21.24 17.2282 21.525 17.4625 21.755C17.6968 21.985 17.987 22.1 18.3333 22.1ZM3.66667 13.7C4.01296 13.7 4.30324 13.585 4.5375 13.355C4.77176 13.125 4.88889 12.84 4.88889 12.5C4.88889 12.16 4.77176 11.875 4.5375 11.645C4.30324 11.415 4.01296 11.3 3.66667 11.3C3.32037 11.3 3.03009 11.415 2.79583 11.645C2.56157 11.875 2.44444 12.16 2.44444 12.5C2.44444 12.84 2.56157 13.125 2.79583 13.355C3.03009 13.585 3.32037 13.7 3.66667 13.7ZM18.3333 5.3C18.6796 5.3 18.9699 5.185 19.2042 4.955C19.4384 4.725 19.5556 4.44 19.5556 4.1C19.5556 3.76 19.4384 3.475 19.2042 3.245C18.9699 3.015 18.6796 2.9 18.3333 2.9C17.987 2.9 17.6968 3.015 17.4625 3.245C17.2282 3.475 17.1111 3.76 17.1111 4.1C17.1111 4.44 17.2282 4.725 17.4625 4.955C17.6968 5.185 17.987 5.3 18.3333 5.3Z" fill="#999999"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {shareModal.open && shareModal.jobId === job.id && (
                    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isDark ? 'bg-black/40' : 'bg-white/40'} backdrop-blur-xs`}>
                      <div ref={modalRef} className={`rounded-2xl shadow-xl p-6 w-[90vw] max-w-sm relative animate-fadeIn ${isDark ? 'bg-zinc-800 border border-zinc-600' : 'bg-gray-200 border border-gray-500'}`}>
                        
                        <h3 className="text-lg lg:text-xl font-medium mb-4 pl-1 text-left">Share opportunity</h3>
                        <div className="flex items-center gap-2 mb-4">
                          <input
                            type="email"
                            value={shareEmail}
                            onChange={e => setShareEmail(e.target.value)}
                            placeholder="Enter email address"
                            className="max-w-[85%] flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#32B72A] placeholder-gray-400 text-black dark:text-white"
                          />
                          <button
                            onClick={handleShareSend}
                            className="bg-[#32B72A] hover:bg-[#2E6F40] text-white p-2 rounded-full transition-colors"
                            aria-label="Send job to email"
                          >
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                          </button>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <input
                            type="text"
                            readOnly
                            value={window.location.origin + '/careers?job=' + job.id}
                            className="max-w-[85%] flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none text-black dark:text-white"
                          />
                          <button
                            onClick={handleCopy}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Copy job link"
                          >
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><rect x="2" y="2" width="13" height="13" rx="2"/></svg>
                          </button>
                          {copySuccess && <span className="text-xs text-green-500 ml-2">Copied!</span>}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
                <p className="opacity-70">Try adjusting your search criteria or browse all categories.</p>
              </div>
            )}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center items-center gap-2"
            >
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-[#32B72A]/30 bg-transparent hover:bg-[#32B72A]/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-[#32B72A] text-white'
                      : 'border border-[#32B72A]/30 bg-transparent hover:bg-[#32B72A]/10'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-[#32B72A]/30 bg-transparent hover:bg-[#32B72A]/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Next
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <Footer theme={isDark} />
    </div>
  );
}
