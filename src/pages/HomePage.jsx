import React from 'react';
import { Search, Bell, ChevronDown, TrendingUp, CreditCard, ArrowUpRight, DollarSign, Paperclip, Home, Activity, FileText, Package, Wallet, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const SpendInLanding = () => {
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
            <span className="hover:text-white transition-colors">Benefit</span>
            <span className="hover:text-white transition-colors">How it Works</span>
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
    </div>
  );
};

export default SpendInLanding;