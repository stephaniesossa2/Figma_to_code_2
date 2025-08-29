import React from 'react';
import { Check, TrendingUp, MoreHorizontal } from 'lucide-react';

const Benefit1 = () => {
  return (
    <section id="benefit1" className="min-h-screen bg-gray-50 p-8">
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
                <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                  With Spend.In
                </button>
                <button className="text-gray-600 px-6 py-3 font-medium">
                  Without Spend.In
                </button>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Track Business Expenses until its Milisecond
            </h2>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Analyze your business cost easily with group transaction thorugh tagging feature.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Arrange your business expenses by date, name, etc., with just one click.
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
                <div className="text-4xl font-bold text-gray-900">$85,211.00</div>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">65,1%</span>
                </div>
              </div>

              {/* Chart Container */}
              <div className="relative h-64 bg-gradient-to-b from-green-50 to-transparent rounded-2xl p-4">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Background Grid Lines */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  {/* Chart Area Fill */}
                  <path
                    d="M 20 180 
                       L 20 140
                       L 50 130
                       L 80 120
                       L 110 100
                       L 140 90
                       L 170 110
                       L 200 100
                       L 230 80
                       L 260 70
                       L 290 50
                       L 320 60
                       L 350 40
                       L 380 30
                       L 380 180
                       Z"
                    fill="url(#chartGradient)"
                  />
                  
                  {/* Chart Line */}
                  <path
                    d="M 20 140
                       L 50 130
                       L 80 120
                       L 110 100
                       L 140 90
                       L 170 110
                       L 200 100
                       L 230 80
                       L 260 70
                       L 290 50
                       L 320 60
                       L 350 40
                       L 380 30"
                    fill="none"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Data Points */}
                  <circle cx="20" cy="140" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="50" cy="130" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="80" cy="120" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="110" cy="100" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="140" cy="90" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="170" cy="110" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="200" cy="100" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="230" cy="80" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="260" cy="70" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="290" cy="50" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="320" cy="60" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="350" cy="40" r="4" fill="rgb(34, 197, 94)" />
                  <circle cx="380" cy="30" r="4" fill="rgb(34, 197, 94)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit1;