import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { Airline } from '../types';

interface AirlineCardProps {
  airline: Airline;
}

const AirlineCard: React.FC<AirlineCardProps> = ({ airline }) => {
  return (
    <Link
      to={`/airline/${airline.id}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="relative h-48">
        <img
          src={airline.imageUrl}
          alt={airline.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
          {airline.name}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-2">{airline.description}</p>
        <div className="mt-4 flex items-center justify-between text-indigo-600">
          <span className="text-sm font-medium">View details</span>
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default AirlineCard;