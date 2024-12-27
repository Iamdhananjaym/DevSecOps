import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => (
  <Link to="/" className="text-indigo-600 hover:text-indigo-700 inline-flex items-center mb-6">
    <ArrowLeft size={20} className="mr-2" />
    Back to Airlines
  </Link>
);

export default BackButton;