import React from 'react';
import { HelpCircle, Book, Mail, Phone } from 'lucide-react';

const Help = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center space-x-4 mb-8">
          <HelpCircle size={48} className="text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
            <p className="text-gray-600">Find answers and support resources</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Book className="text-indigo-600 mb-4" size={32} />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h2>
            <p className="text-gray-600 mb-4">
              Access comprehensive guides and documentation for the AeroEngine Manager platform.
            </p>
            <button className="text-indigo-600 font-medium hover:text-indigo-700">
              Browse Documentation →
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Mail className="text-indigo-600 mb-4" size={32} />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h2>
            <p className="text-gray-600 mb-4">
              Get in touch with our support team for technical assistance.
            </p>
            <button className="text-indigo-600 font-medium hover:text-indigo-700">
              Send Message →
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
            <Phone className="text-indigo-600 mb-4" size={32} />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support Line</h2>
            <p className="text-gray-600 mb-4">
              For urgent matters, our support team is available 24/7 via phone.
            </p>
            <p className="text-lg font-semibold text-indigo-600">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;