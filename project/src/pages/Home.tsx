import React from 'react';
import AirlineCard from '../components/AirlineCard';
import { airlines } from '../data/airlines';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Airline Engine Management
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airlines.map((airline) => (
          <AirlineCard key={airline.id} airline={airline} />
        ))}
      </div>
    </div>
  );
};

export default Home;