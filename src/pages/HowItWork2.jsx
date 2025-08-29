import React from 'react';
import { Check, BarChart3, Mail, Users, Settings, HelpCircle, Folder } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
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
    </div>
  );
}