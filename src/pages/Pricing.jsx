import React, { useState } from 'react';
import { Check, X, Zap } from 'lucide-react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Choose a plan that suits your business needs
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className={`text-lg font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-purple-600 transition-colors focus:outline-none"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>

          {/* Save Badge */}
          <div className="flex justify-center">
            <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium relative">
              Save 65%
              <div className="absolute -top-2 -right-10">
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
                  <path d="M2 14C2 14 8 8 14 8C20 8 24 12 28 8C32 4 38 2 38 2" 
                        stroke="#6B7280" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        fill="none"/>
                  <path d="M34 6L38 2L36 10" 
                        stroke="#6B7280" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#8B5CF6"/>
                  <path d="M16.5 3a4 4 0 0 0-4.5 4 4 4 0 0 0-4.5-4 4 4 0 0 0-4 4c0 3 4 7 8 10 4-3 8-7 8-10a4 4 0 0 0-4-4z" fill="#A855F7"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Free</h3>
            </div>
            
            <p className="text-gray-500 mb-8">Perfect plan to get started</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            
            <p className="text-gray-600 text-sm mb-8">
              A free plan grants you access to some cool features of Spend.In.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Sync across device</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">5 workspace</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Collaborate with 5 user</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                  <X size={12} className="text-white" />
                </div>
                <span className="text-gray-400">Sharing permission</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                  <X size={12} className="text-white" />
                </div>
                <span className="text-gray-400">Admin tools</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                  <X size={12} className="text-white" />
                </div>
                <span className="text-gray-400">100+ integrations</span>
              </div>
            </div>
            
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-full transition-colors">
              Get Your Free Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  {/* Crown icon like in mockup */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 16L3 5l5.5 4L12 4l3.5 5L21 5l-2 11H5z" fill="#8B5CF6"/>
                    <circle cx="12" cy="6" r="1" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
              </div>
              <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </span>
            </div>
            
            <p className="text-gray-500 mb-8">Perfect plan for professionals!</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$12</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            
            <p className="text-gray-600 text-sm mb-8">
              For professional only! Start arranging your expenses with our best templates.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Everything in Free Plan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Unlimited workspace</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Collaborative workspace</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Sharing permission</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Admin tools</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">100+ integrations</span>
              </div>
            </div>
            
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-full transition-colors">
              Get Started
            </button>
          </div>

          {/* Ultimate Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#8B5CF6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Ultimate</h3>
            </div>
            
            <p className="text-gray-500 mb-8">Best suits for great company!</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$33</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            
            <p className="text-gray-600 text-sm mb-8">
              If you a finance manager at big company, this plan is a perfect match.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Everything in Pro Plan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Daily performance reports</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Dedicated assistant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Artificial intelligence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Marketing tools & automations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-700">Advanced security</span>
              </div>
            </div>
            
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;