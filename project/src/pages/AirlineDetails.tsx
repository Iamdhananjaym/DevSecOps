import React from 'react';
import { useParams } from 'react-router-dom';
import { airlines } from '../data/airlines';
import BackButton from '../components/BackButton';
import AirlineHero from '../components/AirlineHero';
import EngineFleet from '../components/EngineFleet';

const AirlineDetails = () => {
  const { id } = useParams<{ id: string }>();
  const airline = airlines.find(a => a.id === id);

  if (!airline) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Airline not found</h2>
          <BackButton />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BackButton />
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <AirlineHero name={airline.name} imageUrl={airline.imageUrl} />
        <div className="p-6">
          <p className="text-gray-600 mb-6">{airline.description}</p>
          <EngineFleet engines={airline.engines} />
        </div>
      </div>
    </div>
  );
};

export default AirlineDetails;