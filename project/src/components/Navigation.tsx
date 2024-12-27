import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, HelpCircle } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">AeroEngine Manager</span>
            </Link>
            
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              
              <Link
                to="/accounts"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/accounts') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <Users size={18} />
                <span>Accounts</span>
              </Link>
              
              <Link
                to="/help"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/help') ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`}
              >
                <HelpCircle size={18} />
                <span>Help Center</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;