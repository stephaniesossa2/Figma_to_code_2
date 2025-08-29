import React from 'react';
import { Check } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
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
    </div>
  );
}