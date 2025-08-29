import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4">
          WHAT THEY SAY
        </h3>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Our User Kind Words
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Here are some testimonials from our user after using Spend.In<br />
          to manage their business expenses.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-12">
        {/* Testimonial 1 */}
        <div className="bg-gray-800 rounded-2xl p-8 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold mb-6">
              It's just incredible!
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!
            </p>
          </div>
          
          {/* Separator Line */}
          <div className="border-t border-gray-700 mb-6"></div>
          
          {/* User Info */}
          <div className="flex items-center">
            <img 
              src="/images/testimonialperson1.png"
              alt="Jimmy Bartney"
              className="w-14 h-14 rounded-full mr-4 object-cover"
            />
            <div>
              <h4 className="text-white font-semibold text-base">Jimmy Bartney</h4>
              <p className="text-gray-400 text-sm">Product Manager at Picko Lab</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-800 rounded-2xl p-8 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold mb-6">
              Satisfied User Here!
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!
            </p>
          </div>
          
          {/* Separator Line */}
          <div className="border-t border-gray-700 mb-6"></div>
          
          {/* User Info */}
          <div className="flex items-center">
            <img 
              src="/images/testimonialperson2.png"
              alt="Natasha Romanoff"
              className="w-14 h-14 rounded-full mr-4 object-cover"
            />
            <div>
              <h4 className="text-white font-semibold text-base">Natasha Romanoff</h4>
              <p className="text-gray-400 text-sm">Black Widow</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-gray-800 rounded-2xl p-8 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold mb-6">
              No doubt, Spend.In is the best!
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              "The best"! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!
            </p>
          </div>
          
          {/* Separator Line */}
          <div className="border-t border-gray-700 mb-6"></div>
          
          {/* User Info */}
          <div className="flex items-center">
            <img 
              src="/images/testimonialperson3.png"
              alt="Moritika Kazuki"
              className="w-14 h-14 rounded-full mr-4 object-cover"
            />
            <div>
              <h4 className="text-white font-semibold text-base">Moritika Kazuki</h4>
              <p className="text-gray-400 text-sm">Finance Manager at Mangan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4">
        <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M15 10L5 10M5 10L10 5M5 10L10 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M5 10L15 10M15 10L10 5M15 10L10 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;