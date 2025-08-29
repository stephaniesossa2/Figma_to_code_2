import React from 'react';
import { CreditCard, FileText, Wallet, Check } from 'lucide-react';

export default function SpendInLanding() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
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
    </div>
  );
}