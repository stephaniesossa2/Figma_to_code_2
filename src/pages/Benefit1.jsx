import React from 'react';

export default function Benefit1() {
  return (
    <div className="min-h-screen bg-gray-50 p-12">
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
    </div>
  );
}