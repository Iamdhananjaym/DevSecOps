import React from 'react';
import { UserCircle } from 'lucide-react';

const Accounts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center space-x-4 mb-8">
          <UserCircle size={48} className="text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Account Access</h1>
            <p className="text-gray-600">Manage your account and access settings</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Access Levels</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Platform & DevOps Engineers</h3>
                  <p className="text-sm text-gray-600">Full access with upload permissions</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Full Access
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Designer, Service & Database Engineers</h3>
                  <p className="text-sm text-gray-600">View-only access to engine data</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  View Only
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Login Required</h2>
            <p className="text-gray-600">
              Please contact your system administrator for login credentials and access permissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;