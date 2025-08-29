import React, { useState } from 'react';
import { Search, Bell, ChevronDown, TrendingUp, CreditCard, ArrowUpRight, DollarSign, Paperclip, Home, Activity, FileText, Package, Wallet, MoreHorizontal, ChevronLeft, ChevronRight, Check, BarChart3, Mail, Users, Settings, HelpCircle, Folder } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import des composants
import SuccessStories1 from '../components/SucessStories1';
import SuccessStories2 from '../components/SucessStories2';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const SpendInLanding = () => {
  const [benefitDropdownOpen, setBenefitDropdownOpen] = useState(false);
  const [howItWorkDropdownOpen, setHowItWorkDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen text-white bg-[#0b0d14]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-4 bg-transparent">
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <div className="flex items-center gap-2">
            <Paperclip className="w-6 h-6 md:w-8 md:h-8 text-[#E2D6FF]" />
            <span className="text-lg md:text-xl font-semibold text-[#E2D6FF]">Spend.In</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-300">
            <div className="flex items-center gap-1 hover:text-white transition-colors">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
                         <div className="relative">
               <span 
                 className="hover:text-white transition-colors cursor-pointer"
                 onClick={(e) => {
                   e.stopPropagation();
                   setBenefitDropdownOpen(!benefitDropdownOpen);
                   setHowItWorkDropdownOpen(false); // Ferme l'autre menu
                 }}
               >
                 Benefit
               </span>
                               {benefitDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-50">
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        setBenefitDropdownOpen(false);
                        document.getElementById('benefit1').scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Benefit 1
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        setBenefitDropdownOpen(false);
                        document.getElementById('benefit2').scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Benefit 2
                    </button>
                  </div>
                )}
             </div>
                         <div className="relative">
               <span 
                 className="hover:text-white transition-colors cursor-pointer"
                 onClick={(e) => {
                   e.stopPropagation();
                   setHowItWorkDropdownOpen(!howItWorkDropdownOpen);
                   setBenefitDropdownOpen(false); // Ferme l'autre menu
                 }}
               >
                 How it Works
               </span>
                               {howItWorkDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-50">
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        setHowItWorkDropdownOpen(false);
                        document.getElementById('howitwork1').scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      How it Works 1
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        setHowItWorkDropdownOpen(false);
                        document.getElementById('howitwork2').scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      How it Works 2
                    </button>
                  </div>
                )}
             </div>
            <span className="hover:text-white transition-colors">Pricing</span>
            <div className="flex items-center gap-1 hover:text-white transition-colors">
              <span>Company</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden sm:inline text-gray-300 hover:text-white transition-colors">Login</span>
          <button className="bg-[#6C5CE7] hover:bg-[#5b4ed1] text-white rounded-full px-4 md:px-6 py-2 text-sm font-medium shadow-md">
            Get Demo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative overflow-hidden bg-gradient-to-b from-[#0d0f16] to-[#0b0d14]">
        <div className="relative z-10 text-center py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-[-0.02em] max-w-4xl mx-auto">
            All your business<br />
            expenses in one place.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#B8C2D1] mb-2 md:mb-3 max-w-2xl mx-auto">
            Your one-stop finance empower platform.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-[#93A0B3] mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto">
            Manage all your business expenses with our supafast app.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 max-w-md mx-auto">
            <button className="w-full sm:w-auto bg-[#6C5CE7] hover:bg-[#5b4ed1] text-white rounded-full px-6 md:px-8 py-3 font-medium shadow-md">
              Get a Free Demo
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white rounded-full border border-white/10 px-6 md:px-8 py-3">
              See Pricing
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16">
          <div className="bg-white rounded-2xl border border-gray-200/70 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gray-50 px-4 md:px-6 py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Paperclip className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                  <span className="text-gray-800 font-semibold text-sm md:text-base">Spend.In</span>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="relative">
                    <Search aria-label="Search" className="w-4 h-4 md:w-5 md:h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search something here"
                      className="pl-9 md:pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm w-60 md:w-80 lg:w-96 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <Bell aria-label="Notifications" className="w-5 h-5 md:w-6 md:h-6 text-[#9AA3B2]" strokeWidth={1.7} />
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF5A5F] ring-2 ring-white"></div>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <img
                      src="/images/profilJohn.png"
                      alt="John Connors"
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                    />
                    <span className="text-gray-800 font-semibold text-sm md:text-base">John Cornors</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Sidebar */}
              <div className="w-full lg:w-64 bg-gray-50 p-4">
                <div className="text-xs text-gray-500 mb-4">Main Menu</div>
                <nav className="space-y-2">
                  <div className="bg-purple-600/90 text-white rounded-lg px-4 py-2 flex items-center space-x-3">
                    <Home className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Dashboard</span>
                  </div>
                  <div className="text-gray-600 px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 rounded-lg">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Insight</span>
                  </div>
                  <div className="text-gray-600 px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 rounded-lg">
                    <FileText className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Invoices</span>
                  </div>
                  <div className="text-gray-600 px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 rounded-lg">
                    <Package className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Products</span>
                  </div>
                  <div className="text-gray-600 px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 rounded-lg">
                    <Wallet className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Reimburse</span>
                  </div>
                </nav>
                
                                 {/* Nouveau menu de navigation */}
                 <div className="mt-6">
                   <nav className="space-y-2">
                     <div className="text-gray-700 px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 rounded-lg">
                       <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                         <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                         <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                         <circle cx="6" cy="8" r="1" fill="currentColor"/>
                         <circle cx="9" cy="8" r="1" fill="currentColor"/>
                         <circle cx="12" cy="8" r="1" fill="currentColor"/>
                       </svg>
                       <span className="text-sm md:text-base">Inbox</span>
                     </div>
                     <div className="text-gray-700 px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 rounded-lg">
                       <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                         <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                         <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                         <circle cx="6" cy="8" r="1" fill="currentColor"/>
                         <circle cx="9" cy="8" r="1" fill="currentColor"/>
                         <circle cx="12" cy="8" r="1" fill="currentColor"/>
                       </svg>
                       <span className="text-sm md:text-base">People & Teams</span>
                     </div>
                     <div className="text-gray-500 px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 rounded-lg ml-4">
                       <span className="text-sm md:text-base">Preferences</span>
                     </div>
                   </nav>
                 </div>
                 
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 md:p-6 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                  {/* Chart Section */}
                  <div className="lg:col-span-2">
                    <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-lg shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-0">Spending Statistics</h2>
                        <div className="flex items-center gap-2 md:gap-3 text-gray-600">
                          <button className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gray-100 hover:bg-gray-200">
                            <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                          <span className="text-gray-800 font-medium text-sm md:text-base">2024</span>
                          <button className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gray-100 hover:bg-gray-200">
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Chart container */}
                      <div className="relative" style={{ height: '280px', minHeight: '280px' }}>
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-4 pr-4 md:pr-6">
                          <span className="text-xs text-gray-400">$10k</span>
                          <span className="text-xs text-gray-400">$8k</span>
                          <span className="text-xs text-gray-400">$6k</span>
                          <span className="text-xs text-gray-400">$4k</span>
                          <span className="text-xs text-gray-400">$2k</span>
                          <span className="text-xs text-gray-400">$0k</span>
                        </div>
                        
                        {/* Chart area */}
                        <div className="ml-8 md:ml-12 h-full relative">
                          {/* Grid lines */}
                          <div className="absolute inset-0 flex flex-col justify-between py-4">
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className="w-full h-px bg-gray-100"></div>
                            ))}
                          </div>
                          
                          {/* Bars container */}
                          <div className="h-full flex items-end justify-around pb-8 md:pb-10">
                            {[
                              { height: 60, month: 'Jan', value: null },
                              { height: 80, month: 'Feb', value: null },
                              { height: 140, month: 'Mar', value: null },
                              { height: 100, month: 'Apr', value: null },
                              { height: 160, month: 'May', value: null },
                              { height: 240, month: 'Jun', value: '$15,030' },
                              { height: 120, month: 'Jul', value: null },
                              { height: 200, month: 'Aug', value: null },
                              { height: 130, month: 'Sep', value: null },
                              { height: 170, month: 'Oct', value: null },
                              { height: 110, month: 'Nov', value: null },
                              { height: 90, month: 'Dec', value: null }
                            ].map((bar, index) => (
                              <div key={index} className="flex flex-col items-center relative">
                                {bar.value && (
                                  <div className="absolute bottom-full right-full mb-0 translate-y-12 mr-2 bg-[#111827] text-white px-4 py-2 rounded-xl text-xs shadow-[0_10px_25px_-10px_rgba(0,0,0,0.35)] border border-white/10">
                                    <div className="text-gray-300 text-[11px] mb-1">Expense</div>
                                    <div className="text-white font-semibold">{bar.value}</div>
                                    <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-[#111827]"></div>
                                  </div>
                                )}
                                <div 
                                  className={`w-4 md:w-6 rounded-t-lg mb-3 transition-all duration-200 hover:opacity-80 cursor-pointer ${
                                    index === 5 ? 'bg-[#131924]' : 'bg-[#9B5CFF]'
                                  }`}
                                  style={{ height: `${bar.height}px` }}
                                ></div>
                                {index === 5 ? (
                                  <span className="text-xs font-medium text-gray-800 bg-gray-200 rounded-md px-2 py-1">
                                    {bar.month}
                                  </span>
                                ) : (
                                  <span className="text-xs text-gray-500">{bar.month}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Balance Card */}
                  <div className="lg:col-span-1">
                    <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <span className="text-gray-800 font-semibold text-sm md:text-base">Your balance</span>
                        <button aria-label="More options" className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full hover:bg-gray-100">
                          <span className="flex items-center gap-1 md:gap-1.5">
                            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-700"></span>
                            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-700"></span>
                            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-700"></span>
                          </span>
                        </button>
                      </div>
                      
                      <div className="mb-4 md:mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                          <div className="text-2xl md:text-3xl lg:text-[25px] leading-tight font-bold text-gray-900 tracking-tight">$120,435.00</div>
                          <span className="text-sm font-medium text-[#4C6BFF]">( USD )</span>
                        </div>
                        <div className="text-sm text-[#9AA3B2] mt-3">From Jan 01, 2022 to Jan 31, 2022</div>
                      </div>
                      
                      <div className="mt-2 md:mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                        {/* Top Up - plein violet, une seule ligne */}
                        <button className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-white px-4 py-2 h-10 rounded-[14px] bg-gradient-to-r from-[#7A5CFF] to-[#6C5CE7] shadow-sm whitespace-nowrap">
                          <span className="relative inline-flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-white/25 text-white">
                            <DollarSign className="w-2.5 h-2.5" />
                            <ArrowUpRight className="w-2.5 h-2.5 absolute -right-1 -top-1" />
                          </span>
                          <span>Top Up</span>
                        </button>
                        {/* Transfer - contour violet, fond clair, texte/icone violets */}
                        <button className="inline-flex items-center justify-center gap-2 text-[13px] font-medium rounded-[14px] border-2 border-[#6C5CE7] text-[#6C5CE7] bg-[#F4F2FF] px-4 py-2 h-10 whitespace-nowrap">
                          <span className="relative inline-flex items-center justify-center w-5 h-5 rounded-full ring-2 ring-[#6C5CE7]/30 text-[#6C5CE7]">
                            <DollarSign className="w-2.5 h-2.5" />
                            <ArrowUpRight className="w-2.5 h-2.5 absolute -right-1 -top-1" />
                          </span>
                          <span>Transfer</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Spend by category card */}
                    <div className="mt-4 bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800 text-sm">Spend by category</h3>
                        <button aria-label="More options" className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-100">
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                          </span>
                        </button>
                      </div>
                      
                      {/* Donut Chart */}
                      <div className="relative flex items-center justify-center mb-4">
                        <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                          {/* Donut segments */}
                          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-xs text-gray-500">Overall Spending</div>
                              <div className="text-lg font-bold text-gray-900">$19,760.00</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Donut chart overlay with segments */}
                        <div className="absolute inset-0 w-32 h-32">
                          <svg className="w-full h-full" viewBox="0 0 128 128">
                            {/* Pink segment */}
                            <circle cx="64" cy="64" r="60" fill="none" stroke="#FF6B9D" strokeWidth="8" 
                              strokeDasharray="75.4 188.5" strokeDashoffset="0" transform="rotate(-90 64 64)" />
                            {/* Light purple segment */}
                            <circle cx="64" cy="64" r="60" fill="none" stroke="#A78BFA" strokeWidth="8" 
                              strokeDasharray="56.5 188.5" strokeDashoffset="-75.4" transform="rotate(-90 64 64)" />
                            {/* Dark purple segment */}
                            <circle cx="64" cy="64" r="60" fill="none" stroke="#7C3AED" strokeWidth="8" 
                              strokeDasharray="37.7 188.5" strokeDashoffset="-131.9" transform="rotate(-90 64 64)" />
                            {/* Light blue segment */}
                            <circle cx="64" cy="64" r="60" fill="none" stroke="#60A5FA" strokeWidth="8" 
                              strokeDasharray="18.8 188.5" strokeDashoffset="-169.6" transform="rotate(-90 64 64)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Cards - Single card with divider */}
                <div className="lg:col-span-1 -mt-24 max-w-lg">
                  <div className="bg-white border border-gray-200 p-2 rounded-lg shadow-sm">
                    <div className="flex">
                                             {/* Total Income Section */}
                       <div className="flex-1 p-0 border-r border-gray-200 my-4">
                         <div className="flex items-center justify-between mb-0 px-4">
                          <span className="text-gray-800 font-semibold text-sm">Total Income</span>
                          <div className="w-7 h-7 bg-green-50 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          </div>
                        </div>
                                                 <div className="flex items-baseline gap-2 mb-2 px-4">
                           <div className="text-2xl font-bold text-gray-900">$50,530.00</div>
                           <span className="text-sm text-gray-500">(USD)</span>
                         </div>
                         <div className="text-sm font-medium px-4">
                          <span className="text-green-400">20%</span>
                          <span className="text-gray-400"> increase compared to last week</span>
                        </div>
                      </div>

                                             {/* Total Expense Section */}
                       <div className="flex-1 p-0 my-4">
                                                  <div className="flex items-center justify-between mb-0 px-4">
                            <span className="text-gray-800 font-semibold text-sm">Total Expense</span>
                          <div className="w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                        </div>
                                                 <div className="flex items-baseline gap-2 mb-2 px-4">
                           <div className="text-2xl font-bold text-gray-900">$19,760.00</div>
                           <span className="text-sm text-gray-500">(USD)</span>
                         </div>
                         <div className="text-sm font-medium px-4">
                          <span className="text-red-400">10%</span>
                          <span className="text-gray-400"> decrease compared to last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                 </div>
       </main>

       {/* Benefit 1 Section */}
       <section id="benefit1" className="min-h-screen bg-gray-50 p-12">
         <div className="max-w-7xl mx-auto">
           {/* Header Section */}
           <div className="mb-16">
             <p className="text-purple-600 font-medium mb-4 text-sm tracking-wide">
               WHY USE SPEND.IN
             </p>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               <div>
                 <h1 className="text-5xl font-bold text-black leading-tight mb-0">
                   Easy, Simple,<br />
                   Affordable
                 </h1>
               </div>
               <div className="lg:pt-4">
                 <p className="text-gray-500 text-lg leading-relaxed">
                   Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                 </p>
               </div>
             </div>
           </div>

           {/* Features Section - Three Columns */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
             {/* Feature 1: Automatic Invoice Payment */}
             <div className="space-y-6">
               <div className="bg-gray-100 rounded-2xl p-4 h-80">
                 {/* Invoice Document Mockup */}
                 <div className="bg-white rounded-lg shadow-sm p-3 h-full relative text-xs">
                   {/* Header with Logo and Verified */}
                   <div className="flex justify-between items-center mb-3">
                     <div className="flex items-center space-x-1">
                       <div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
                         <span className="text-white font-bold text-xs">S</span>
                       </div>
                       <span className="font-medium text-xs text-gray-800">Spend.In</span>
                     </div>
                     
                     <div className="text-center">
                       <span className="text-gray-500 text-xs">INVOICE</span>
                     </div>
                     
                     <div className="flex items-center space-x-1 bg-green-500 text-white rounded-full px-2 py-0.5">
                       <div className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
                         <svg width="4" height="3" viewBox="0 0 4 3" fill="none">
                           <path d="M0.5 1.5L1.5 2.5L3.5 0.5" stroke="#10B981" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                       </div>
                       <span className="text-xs font-medium">Verified</span>
                     </div>
                   </div>
                   
                   {/* Invoice Content - Two Columns */}
                   <div className="grid grid-cols-2 gap-3 mb-3">
                     {/* Left Column - Sender */}
                     <div className="space-y-0.5">
                       <div className="font-semibold text-gray-800 text-xs">Jimmy Dean</div>
                       <div className="text-gray-600 text-xs">123 Main Street</div>
                       <div className="text-gray-600 text-xs">New York, NY 10001</div>
                       <div className="text-gray-600 text-xs">jimmy.dean@email.com</div>
                       <div className="text-gray-600 text-xs">+1 (555) 123-4567</div>
                     </div>
                     
                     {/* Right Column - Recipient */}
                     <div className="space-y-0.5">
                       <div className="font-semibold text-gray-800 text-xs">Company Name</div>
                       <div className="text-gray-600 text-xs">456 Business Ave</div>
                       <div className="text-gray-600 text-xs">Los Angeles, CA 90210</div>
                       <div className="text-gray-600 text-xs">billing@company.com</div>
                     </div>
                   </div>
                   
                   {/* Invoice Details - Two Columns */}
                   <div className="grid grid-cols-2 gap-3 mb-3">
                     <div className="space-y-0.5">
                       <div className="text-gray-800 text-xs">Invoice Date: July 10th, 2023</div>
                       <div className="text-gray-800 text-xs">Invoice No.: INV-001</div>
                     </div>
                     <div className="space-y-0.5">
                       <div className="text-gray-800 text-xs">Due Date: Sep 10th, 2023</div>
                     </div>
                   </div>
                   
                   {/* Table Header */}
                   <div className="grid grid-cols-4 gap-1 mb-1 text-xs font-medium text-gray-700 border-b border-gray-200 pb-0.5">
                     <div className="text-xs">Product/Lab Code</div>
                     <div className="text-center text-xs">Qty</div>
                     <div className="text-center text-xs">Unit Price</div>
                     <div className="text-right text-xs">Amount</div>
                   </div>
                   
                   {/* Table Row */}
                   <div className="grid grid-cols-4 gap-1 mb-3 text-xs">
                     <div className="text-gray-800 text-xs">Product A</div>
                     <div className="text-center text-gray-600 text-xs">1</div>
                     <div className="text-center text-gray-600 text-xs">300</div>
                     <div className="text-right text-gray-800 text-xs">300.00</div>
                   </div>
                   
                   {/* Totals - Right aligned */}
                   <div className="absolute bottom-4 right-3 text-xs">
                     <div className="space-y-0.5 text-right">
                       <div className="flex justify-between w-16">
                         <span className="text-gray-600 text-xs">Subtotal:</span>
                         <span className="text-gray-800 text-xs">300.00</span>
                       </div>
                       <div className="flex justify-between w-16 font-semibold">
                         <span className="text-gray-800 text-xs">Total:</span>
                         <span className="text-gray-800 text-xs">300.00</span>
                       </div>
                     </div>
                   </div>
                   
                   {/* Signature - Bottom left */}
                   <div className="absolute bottom-1 left-3">
                     <span className="text-gray-400 italic text-xs">*Signature: [?]</span>
                   </div>
                 </div>
               </div>
               
               <div>
                 <h3 className="text-2xl font-bold text-black mb-4">
                   Automatic Invoice Payment
                 </h3>
                 <p className="text-gray-500 leading-relaxed">
                   No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!
                 </p>
               </div>
             </div>

             {/* Feature 2: Clear Payment History */}
             <div className="space-y-6">
               <div className="bg-gray-100 rounded-2xl p-6 h-80">
                 <div className="bg-white rounded-lg h-full p-4">
                   {/* Date Header */}
                   <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center space-x-2">
                       <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                       </svg>
                       <span className="text-sm text-gray-700">1 Jan - 1 Feb 2022</span>
                     </div>
                   </div>
                   
                   {/* Table Headers */}
                   <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                     <div className="flex items-center space-x-1">
                       <span>Amount</span>
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </div>
                     <div className="flex items-center space-x-1">
                       <span>Status</span>
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </div>
                   </div>
                   
                   {/* Payment Entries */}
                   <div className="space-y-4">
                     <div className="flex justify-between items-center">
                       <span className="text-lg font-bold text-black">$2,000.00</span>
                       <div className="flex items-center space-x-2">
                         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                         <span className="text-sm text-gray-600">Completed</span>
                       </div>
                     </div>
                     
                     <div className="flex justify-between items-center">
                       <span className="text-lg font-bold text-black">$2,000.00</span>
                       <div className="flex items-center space-x-2">
                         <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                         <span className="text-sm text-gray-600">Pending</span>
                       </div>
                     </div>
                     
                     <div className="flex justify-between items-center">
                       <span className="text-lg font-bold text-black">$2,000.00</span>
                       <div className="flex items-center space-x-2">
                         <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                         <span className="text-sm text-gray-600">On Hold</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div>
                 <h3 className="text-2xl font-bold text-black mb-4">
                   Clear payment history
                 </h3>
                 <p className="text-gray-500 leading-relaxed">
                   Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!
                 </p>
               </div>
             </div>

             {/* Feature 3: Multi-card Payments */}
             <div className="space-y-6">
               <div className="bg-gray-100 rounded-2xl p-6 h-80 flex items-center justify-center">
                 <div className="relative">
                   {/* Back Card (Brown) */}
                   <div className="w-52 h-32 bg-gradient-to-br from-amber-800 to-amber-900 rounded-xl shadow-lg absolute transform -rotate-12 -translate-x-4 -translate-y-4">
                     <div className="absolute bottom-4 left-4 text-white text-sm font-mono">
                       2221 - 0057 - 4680 - 2089
                     </div>
                   </div>
                   
                   {/* Middle Card (Green) */}
                   <div className="w-52 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg absolute transform -rotate-6 -translate-x-2 -translate-y-2">
                     <div className="absolute top-4 right-4 text-white text-xs font-bold">
                       VER
                     </div>
                     <div className="absolute bottom-4 left-4 text-white text-sm font-mono">
                       6011 - 1111 - 1111 - 1117
                     </div>
                   </div>
                   
                   {/* Front Card (Blue Visa) */}
                   <div className="w-52 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl relative">
                     <div className="absolute top-4 right-4">
                       <div className="text-white text-xs font-bold">
                         VISA
                       </div>
                     </div>
                     <div className="absolute bottom-4 left-4">
                       <div className="text-white text-sm font-mono">
                         1111 - 1111 - 1111 - 1111
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div>
                 <h3 className="text-2xl font-bold text-black mb-4">
                   Use of multi-card payments
                 </h3>
                 <p className="text-gray-500 leading-relaxed">
                   Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Benefit 2 Section */}
       <section id="benefit2" className="min-h-screen bg-gray-50 py-16 px-4">
         <div className="max-w-6xl mx-auto">
           {/* Header Section */}
           <div className="text-center mb-16">
             <div className="text-purple-600 text-sm font-medium tracking-wide mb-4">
               WHY USE SPEND.IN
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
               Easy, Simple, Affordable
             </h1>
             <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
               Our platform helps your business in managing expenses. These are some of the 
               reasons why you should use our platform in managing business finances.
             </p>
           </div>

           {/* Content Section */}
           <div className="grid lg:grid-cols-2 gap-12 items-start">
             {/* Left Column - Features */}
             <div className="space-y-8">
               {/* Feature 1 */}
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                     <CreditCard className="w-6 h-6 text-white" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
                     Automatic Invoice Payment
                   </h3>
                   <p className="text-gray-600 leading-relaxed">
                     Automatic payments help you to arrange payments on a 
                     certain date without doing it manually again.
                   </p>
                 </div>
               </div>

               {/* Feature 2 */}
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                     <FileText className="w-6 h-6 text-white" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
                     Clear payment history
                   </h3>
                   <p className="text-gray-600 leading-relaxed">
                     Clear payment history helps you to track your business 
                     expenses on specific dates.
                   </p>
                 </div>
               </div>

               {/* Feature 3 */}
               <div className="flex items-start space-x-4">
                 <div className="flex-shrink-0">
                   <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                     <Wallet className="w-6 h-6 text-white" />
                   </div>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
                     Use of multi-card payments
                   </h3>
                   <p className="text-gray-600 leading-relaxed">
                     Have more than one debit or credit card? Don't worry, we 
                     support payments using more than one card.
                   </p>
                 </div>
               </div>
             </div>

             {/* Right Column - Dashboard Preview */}
             <div className="lg:pl-8">
               {/* Transaction History Card */}
               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                 {/* Header */}
                 <div className="px-6 py-4 border-b border-gray-100">
                   <div className="flex items-center justify-between">
                     <h2 className="text-lg font-semibold text-gray-900">
                       Transaction History
                     </h2>
                     <div className="flex items-center space-x-12 text-sm text-gray-500">
                       <div className="flex items-center space-x-1">
                         <span>to</span>
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                         </svg>
                       </div>
                       <span>Amount</span>
                     </div>
                   </div>
                 </div>

                 {/* Transaction List */}
                 <div className="divide-y divide-gray-100">
                   {/* Transaction 1 - Highlighted avec document violet */}
                   <div className="px-6 py-4 bg-purple-50">
                     <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-4">
                         {/* Document/Facture avec logo Spend.In */}
                         <div className="relative">
                           <div className="w-16 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-sm flex flex-col overflow-hidden">
                             {/* Header du document */}
                             <div className="h-4 bg-purple-500 flex items-center px-2">
                               <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                             </div>
                             {/* Contenu du document */}
                             <div className="flex-1 bg-white/90 p-2 flex flex-col justify-center space-y-1">
                               <div className="h-1 bg-gray-400 rounded w-full"></div>
                               <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                               <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                               <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                             </div>
                           </div>
                           {/* Logo circulaire Spend.In en bas à droite */}
                           <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
                             <span className="text-white text-xs font-bold">S</span>
                           </div>
                         </div>
                         <div>
                           <div className="font-semibold text-gray-900 text-base">Spend.In</div>
                           <div className="text-sm text-gray-600">
                             Advertising - Marketing, Promotion
                           </div>
                           <div className="text-xs text-gray-500 mt-1">
                             Due Date: Sep 16th, 2022
                           </div>
                         </div>
                       </div>
                       <div className="text-right flex flex-col items-end space-y-1">
                         <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200">
                           <Check className="w-3 h-3 mr-1" />
                           <span className="text-xs font-medium">Verified</span>
                         </div>
                         <div className="text-sm text-gray-500 mt-2">101,2022</div>
                         <div className="font-bold text-lg text-gray-900">$2,000</div>
                       </div>
                     </div>
                   </div>

                   {/* Transaction 2 - Adobe */}
                   <div className="px-6 py-4">
                     <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-4">
                         <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                           <span className="text-white font-bold text-lg">A</span>
                         </div>
                         <div>
                           <div className="font-semibold text-gray-900 text-base">Adobe</div>
                           <div className="text-sm text-gray-600">License</div>
                         </div>
                       </div>
                       <div className="text-right">
                         <div className="text-sm text-gray-500">104,2022</div>
                         <div className="font-bold text-lg text-gray-900">$2,000</div>
                       </div>
                     </div>
                   </div>

                   {/* Transaction 3 - Zoom */}
                   <div className="px-6 py-4">
                     <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-4">
                         <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                           <span className="text-white font-bold text-lg">Z</span>
                         </div>
                         <div>
                           <div className="font-semibold text-gray-900 text-base">Zoom</div>
                           <div className="text-sm text-gray-600">Subscription</div>
                         </div>
                       </div>
                       <div className="text-right">
                         <div className="text-sm text-gray-500">106,2022</div>
                         <div className="font-bold text-lg text-gray-900">$2,000</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* How it Works 1 Section */}
       <section id="howitwork1" className="min-h-screen bg-gray-900 py-20 px-4">
         <div className="max-w-6xl mx-auto">
           {/* Header Section */}
           <div className="text-center mb-16">
             <div className="text-purple-500 text-sm font-medium tracking-wide mb-4">
               HOW IT WORKS
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Few Easy Steps and Done
             </h1>
             <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
               In just few easy step, you are all set to manage your business finances.
               <br />
               Manage all expenses with Spend.In all in one place.
             </p>
           </div>

           {/* Steps Section */}
           <div className="grid md:grid-cols-3 gap-8 mb-16">
             {/* Step 1 */}
             <div className="text-center">
               <div className="relative mb-6">
                 {/* Step Number */}
                 <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                   1
                 </div>
                 {/* Login Form Card */}
                 <div className="bg-white rounded-2xl p-6 shadow-lg h-48">
                   <div className="space-y-4">
                     <div>
                       <div className="text-left text-sm font-medium text-gray-700 mb-2">
                         Username
                       </div>
                       <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-left">
                         <span className="text-gray-600">your_user</span>
                         <span className="animate-pulse">|</span>
                       </div>
                     </div>
                     <div>
                       <div className="text-left text-sm font-medium text-gray-700 mb-2">
                         Password
                       </div>
                       <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-left">
                         <span className="text-gray-800 text-lg tracking-wider">• • • • • • • • •</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <h3 className="text-xl font-semibold text-white mb-2">
                 Register your
                 <br />
                 Spend.In account.
               </h3>
             </div>

             {/* Step 2 */}
             <div className="text-center">
               <div className="relative mb-6">
                 {/* Step Number */}
                 <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                   2
                 </div>
                 {/* Expenses List Card */}
                 <div className="bg-white rounded-2xl p-6 shadow-lg h-48">
                   <div>
                     <div className="text-left text-sm font-medium text-gray-700 mb-4">
                       Expenses
                     </div>
                     <div className="space-y-3">
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded flex-1 mr-3"></div>
                         <div className="w-4 h-4 bg-gray-300 rounded"></div>
                       </div>
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded w-4/5 mr-3"></div>
                         <div className="w-4 h-4 bg-gray-300 rounded"></div>
                       </div>
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded w-3/5 mr-3"></div>
                         <div className="w-4 h-4 bg-gray-300 rounded"></div>
                       </div>
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded w-2/3 mr-3"></div>
                         <div className="w-4 h-4 bg-gray-300 rounded"></div>
                       </div>
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded w-1/2 mr-3"></div>
                         <div className="w-4 h-4 bg-gray-300 rounded"></div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <h3 className="text-xl font-semibold text-white mb-2">
                 Fill in the list of your
                 <br />
                 business expenses.
               </h3>
             </div>

             {/* Step 3 */}
             <div className="text-center">
               <div className="relative mb-6">
                 {/* Step Number */}
                 <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                   3
                 </div>
                 {/* Done List Card */}
                 <div className="bg-white rounded-2xl p-6 shadow-lg h-48">
                   <div>
                     <div className="text-left text-sm font-medium text-gray-700 mb-4">
                       Completed Tasks
                     </div>
                     <div className="space-y-3">
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded flex-1 mr-3"></div>
                         <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                           <Check className="w-3 h-3 text-white" />
                         </div>
                       </div>
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded w-4/5 mr-3"></div>
                         <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                           <Check className="w-3 h-3 text-white" />
                         </div>
                       </div>
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded w-3/5 mr-3"></div>
                         <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                           <Check className="w-3 h-3 text-white" />
                         </div>
                       </div>
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded w-2/3 mr-3"></div>
                         <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                           <Check className="w-3 h-3 text-white" />
                         </div>
                       </div>
                       <div className="flex items-center justify-between">
                         <div className="h-2 bg-purple-200 rounded w-1/2 mr-3"></div>
                         <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                           <Check className="w-3 h-3 text-white" />
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <h3 className="text-xl font-semibold text-white mb-2">
                 Done, let's
                 <br />
                 continue the work.
               </h3>
             </div>
           </div>

           {/* CTA Buttons */}
           <div className="text-center">
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                 Get a Free Demo
               </button>
               <button className="text-gray-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                 See Pricing
               </button>
             </div>
           </div>
         </div>
       </section>

       {/* How it Works 2 Section */}
       <section id="howitwork2" className="min-h-screen bg-gray-900 py-20 px-4">
         <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             {/* Left Column - Dashboard Preview */}
             <div className="order-2 lg:order-1">
               <div className="bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                 {/* Browser Header */}
                 <div className="bg-gray-200 px-4 py-3 flex items-center space-x-2">
                   <div className="flex space-x-2">
                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                     <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                   </div>
                 </div>

                 {/* Dashboard Content */}
                 <div className="bg-white">
                   {/* Success Messages */}
                   <div className="p-6 space-y-4">
                     <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                       <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                         <Check className="w-3 h-3 text-white" />
                       </div>
                       <span className="text-green-700 font-medium">Yeay! Your account has been registered.</span>
                       <span className="text-gray-400 text-sm ml-auto">here</span>
                     </div>

                     <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                       <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                         <Check className="w-3 h-3 text-white" />
                       </div>
                       <span className="text-green-700 font-medium">Your expenses has been saved.</span>
                     </div>

                     <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                       <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                         <Check className="w-3 h-3 text-white" />
                       </div>
                       <span className="text-green-700 font-medium">Done, let's continue the work</span>
                     </div>
                   </div>

                   {/* Main Dashboard Layout */}
                   <div className="flex">
                     {/* Sidebar */}
                     <div className="w-1/3 bg-gray-50 p-4">
                       <div className="space-y-2">
                         <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
                           <BarChart3 className="w-4 h-4 text-gray-600" />
                           <span className="text-sm font-medium text-gray-700">Insight</span>
                         </div>
                         
                         <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
                           <Folder className="w-4 h-4 text-gray-600" />
                           <span className="text-sm font-medium text-gray-700">Reimburse</span>
                         </div>
                         
                         <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
                           <Mail className="w-4 h-4 text-gray-600" />
                           <span className="text-sm font-medium text-gray-700">Inbox</span>
                         </div>
                         
                         <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
                           <Users className="w-4 h-4 text-gray-600" />
                           <span className="text-sm font-medium text-gray-700">People & Teams</span>
                         </div>

                         <div className="pt-4">
                           <div className="text-xs text-gray-500 font-medium mb-2">Preferences</div>
                           <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
                             <Settings className="w-4 h-4 text-gray-600" />
                             <span className="text-sm font-medium text-gray-700">Settings</span>
                           </div>
                           
                           <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
                             <HelpCircle className="w-4 h-4 text-gray-600" />
                             <span className="text-sm font-medium text-gray-700">Help & Center</span>
                           </div>
                         </div>
                       </div>
                     </div>

                     {/* Main Content */}
                     <div className="flex-1 p-4">
                       {/* Chart Section */}
                       <div className="mb-6">
                         <div className="bg-gray-100 rounded-lg p-4 h-32 relative">
                           <div className="text-xs text-gray-500 mb-2">Expenses</div>
                           <div className="text-sm font-semibold text-gray-700 bg-gray-800 text-white px-2 py-1 rounded text-center absolute top-2 right-2">
                             $15,030
                           </div>
                           {/* Simple Bar Chart */}
                           <div className="flex items-end justify-center space-x-2 h-16 mt-4">
                             <div className="w-4 bg-purple-400 h-8 rounded-t"></div>
                             <div className="w-4 bg-purple-500 h-12 rounded-t"></div>
                             <div className="w-4 bg-purple-600 h-6 rounded-t"></div>
                             <div className="w-4 bg-purple-500 h-14 rounded-t"></div>
                             <div className="w-4 bg-purple-400 h-10 rounded-t"></div>
                             <div className="w-4 bg-purple-500 h-16 rounded-t"></div>
                           </div>
                           {/* Chart Labels */}
                           <div className="flex justify-center space-x-3 text-xs text-gray-500 mt-2">
                             <span>Jan</span>
                             <span>Feb</span>
                             <span>Mar</span>
                             <span>Apr</span>
                             <span>Mei</span>
                             <span>Jun</span>
                           </div>
                         </div>
                       </div>

                       {/* Income and Expenses Cards */}
                       <div className="grid grid-cols-2 gap-4 mb-4">
                         <div className="bg-gray-50 rounded-lg p-3">
                           <div className="text-xs text-gray-500 mb-1">Total Income</div>
                           <div className="font-bold text-lg">$50,530.00</div>
                           <div className="text-xs text-gray-500">(USD)</div>
                           <div className="text-xs text-green-600 mt-1">20% increase compared to last week</div>
                         </div>
                         <div className="bg-gray-50 rounded-lg p-3">
                           <div className="text-xs text-gray-500 mb-1">Total Expenses</div>
                           <div className="font-bold text-lg">$19,740.00</div>
                           <div className="text-xs text-red-600 mt-1">10% decrease</div>
                         </div>
                       </div>

                       {/* Transaction History */}
                       <div className="text-sm font-medium text-gray-700">
                         Transaction History
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Right Column - Content */}
             <div className="order-1 lg:order-2">
               <div className="text-purple-500 text-sm font-medium tracking-wide mb-4">
                 HOW IT WORKS
               </div>
               <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                 Few Easy Steps and Done
               </h1>
               <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                 In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.
               </p>

               {/* Steps */}
               <div className="space-y-8">
                 {/* Step 1 */}
                 <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                     1
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-white">
                       Register your Spend.In account.
                     </h3>
                   </div>
                 </div>

                 {/* Connector Line */}
                 <div className="ml-6 w-0.5 h-6 bg-gray-700"></div>

                 {/* Step 2 */}
                 <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                     2
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-white">
                       Fill in the list of your business expenses.
                     </h3>
                   </div>
                 </div>

                 {/* Connector Line */}
                 <div className="ml-6 w-0.5 h-6 bg-gray-700"></div>

                 {/* Step 3 */}
                 <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-lg flex-shrink-0">
                     3
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-white">
                       Done, let's continue the work.
                     </h3>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
               </section>

                {/* Success Stories Sections */}
        <div id="success1">
          <SuccessStories1 />
        </div>
        <div id="success2">
          <SuccessStories2 />
        </div>

         {/* Testimonials Section */}
         <div id="testimonials">
           <Testimonials />
         </div>

         {/* Pricing Section */}
         <div id="pricing">
           <Pricing />
         </div>

         {/* Call to Action Section */}
         <div id="cta">
           <CallToAction />
         </div>

         {/* Footer Section */}
         <Footer />
       </div>
     );
   };

export default SpendInLanding;