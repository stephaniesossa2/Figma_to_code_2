import React from 'react';
import { Paperclip } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <Paperclip className="w-8 h-8 text-purple-600 mr-3" />
              <span className="text-xl font-semibold text-gray-900">Spend.In</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Data visualization, and expense management for your business.
            </p>
          </div>

          {/* Product */}
          <div className="md:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Digital Invoice</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Insights</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Reimbursements</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Virtual Assistant</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Artificial Intelligence</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Newsletters</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Our Partners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Career</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Events</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Ebook & Guide</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-6">Follow Us</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-purple-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-semibold">Privacy Policy</a>
            <span className="hidden md:block text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-semibold">Terms & Conditions</a>
            <span className="hidden md:block text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-semibold">Cookie Policy</a>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-600 text-sm">© Picko Lab 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;