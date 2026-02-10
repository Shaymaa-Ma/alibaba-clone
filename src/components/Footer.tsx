import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const renderMobileAccordion = (title: string, content: JSX.Element) => {
    const isExpanded = expandedSection === title;
    return (
      <div className="border-b border-gray-700 md:border-none">
        <button
          className="w-full flex items-center justify-between py-4 md:hidden"
          onClick={() => toggleSection(title)}
        >
          <h3 className="text-lg font-semibold">{title}</h3>
          {isExpanded ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
        <div className={`md:hidden ${isExpanded ? 'block' : 'hidden'} pb-4`}>
          {content}
        </div>
        <div className="hidden md:block">{content}</div>
      </div>
    );
  };

  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {renderMobileAccordion(
            "About Us",
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-orange-500">About Alibaba Clone</Link></li>
              <li><Link to="/careers" className="hover:text-orange-500">Careers</Link></li>
              <li><Link to="/press" className="hover:text-orange-500">Press</Link></li>
            </ul>
          )}

          {renderMobileAccordion(
            "Customer Service",
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-orange-500">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-orange-500">Shipping Info</Link></li>
            </ul>
          )}

          {renderMobileAccordion(
            "Trade Services",
            <ul className="space-y-2">
              <li><Link to="/supplier" className="hover:text-orange-500">Supplier Membership</Link></li>
              <li><Link to="/learning" className="hover:text-orange-500">Learning Center</Link></li>
              <li><Link to="/trade" className="hover:text-orange-500">Trade Assurance</Link></li>
            </ul>
          )}

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-sm text-gray-400 mb-4">Get access to exclusive offers!</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-full md:w-auto">
              Download Now
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Alibaba Clone. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-orange-500">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 