import React from 'react';

const CTADashboardSection = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center px-6 py-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        
        {/* Left Content */}
        <div className="text-left lg:pr-4">
          <h3 className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4">
            DOWNLOAD NOW!
          </h3>
          <h1 className="text-white text-sm md:text-base lg:text-lg font-semibold mb-6 leading-tight">
            Start Track Your Business<br />
            Expenses Today
          </h1>
          <p className="text-gray-400 text-base mb-6 max-w-md">
            Are you ready to make your business more organized?<br />
            Download Spend.In now!
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full text-base transition-colors">
            Get a Free Demo
          </button>
        </div>

        {/* Right Dashboard Mockup */}
        <div className="relative">
          {/* Main Dashboard Container */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h2 className="text-gray-900 text-xl font-bold mb-6">Spending Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Left Side - Donut Chart */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Spend by category</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Donut Chart */}
                <div className="relative w-48 h-48 mx-auto">
                  <svg width="192" height="192" viewBox="0 0 192 192" className="transform -rotate-90">
                    {/* Background Circle */}
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#f3f4f6" strokeWidth="24"/>
                    
                    {/* Pink Segment */}
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#f472b6" strokeWidth="24"
                            strokeDasharray="125.6 377.04" strokeDashoffset="0"/>
                    
                    {/* Blue Segment */}
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#3b82f6" strokeWidth="24"
                            strokeDasharray="94.2 377.04" strokeDashoffset="-125.6"/>
                    
                    {/* Light Blue Segment */}
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#60a5fa" strokeWidth="24"
                            strokeDasharray="62.8 377.04" strokeDashoffset="-219.8"/>
                    
                    {/* Purple Segment */}
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#8b5cf6" strokeWidth="24"
                            strokeDasharray="94.2 377.04" strokeDashoffset="-282.6"/>
                  </svg>
                  
                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-gray-500 text-sm">Overall Spending</span>
                    <span className="text-gray-900 text-xl font-bold">$19,760.00</span>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Employees Salary</span>
                    <span className="ml-auto text-gray-900 font-semibold">$8.000.00</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Bar Chart */}
              <div className="space-y-4">
                <div className="flex items-end justify-between h-48 gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-4 bg-purple-500 rounded-t-sm" style={{height: '120px'}}></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 bg-purple-500 rounded-t-sm" style={{height: '90px'}}></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 bg-purple-500 rounded-t-sm" style={{height: '110px'}}></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 bg-purple-500 rounded-t-sm" style={{height: '85px'}}></div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    {/* Expense Tooltip */}
                    <div className="absolute -top-16 -left-6 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-10">
                      Expense<br />
                      <span className="text-lg font-bold">$15.030</span>
                      {/* Tooltip Arrow */}
                      <div className="absolute -bottom-1 left-8 w-3 h-3 bg-gray-900 transform rotate-45"></div>
                    </div>
                    <div className="w-4 bg-gray-900 rounded-t-sm" style={{height: '160px'}}></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-4 bg-purple-500 rounded-t-sm" style={{height: '75px'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTADashboardSection;