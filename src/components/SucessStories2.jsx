import React from 'react';
import { X, TrendingDown, MoreHorizontal } from 'lucide-react';

const ProductivityDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-purple-600 text-sm font-medium mb-4 tracking-wider">
            INCREASE PRODUCTIVITY
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
            Reduce Time in Doing Manual Work Managing Expenses
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="col-span-7">
            {/* Toggle Buttons */}
            <div className="flex mb-8">
              <div className="flex bg-gray-200 rounded-full p-1">
                <button className="text-gray-600 px-6 py-3 font-medium">
                  With Spend.In
                </button>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                  Without Spend.In
                </button>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Taking too long to tidy up administrative files makes it unproductive
            </h2>

            {/* Problems List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Complex recording process due to every administrative file in a different place.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Need more effort to pay manually one by one invoice because there is no payment accommodation.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Manual data arranging needs a long time because the different months/years are not in the same place.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Chart */}
          <div className="col-span-5">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              {/* Chart Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-gray-600">Balance Statistics</h3>
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </div>

              {/* Balance Amount */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl font-bold text-gray-900">$25,780.00</div>
                <div className="flex items-center gap-1 text-red-600">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm font-medium">45,6%</span>
                </div>
              </div>

              {/* Chart Container */}
              <div className="relative h-64 bg-gradient-to-b from-red-50 to-transparent rounded-2xl p-4">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Background Grid Lines */}
                  <defs>
                    <linearGradient id="chartGradientRed" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  {/* Chart Area Fill */}
                  <path
                    d="M 20 180 
                       L 20 80
                       L 50 90
                       L 80 70
                       L 110 85
                       L 140 75
                       L 170 95
                       L 200 85
                       L 230 100
                       L 260 110
                       L 290 120
                       L 320 105
                       L 350 130
                       L 380 150
                       L 380 180
                       Z"
                    fill="url(#chartGradientRed)"
                  />
                  
                  {/* Chart Line */}
                  <path
                    d="M 20 80
                       L 50 90
                       L 80 70
                       L 110 85
                       L 140 75
                       L 170 95
                       L 200 85
                       L 230 100
                       L 260 110
                       L 290 120
                       L 320 105
                       L 350 130
                       L 380 150"
                    fill="none"
                    stroke="rgb(239, 68, 68)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Data Points */}
                  <circle cx="20" cy="80" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="50" cy="90" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="80" cy="70" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="110" cy="85" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="140" cy="75" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="170" cy="95" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="200" cy="85" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="230" cy="100" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="260" cy="110" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="290" cy="120" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="320" cy="105" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="350" cy="130" r="4" fill="rgb(239, 68, 68)" />
                  <circle cx="380" cy="150" r="4" fill="rgb(239, 68, 68)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityDashboard;