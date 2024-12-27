import React from 'react';
import { Settings } from 'lucide-react';
import EngineCard from './EngineCard';
import type { Engine } from '../types';

interface EngineFleetProps {
  engines: Engine[];
}

const EngineFleet: React.FC<EngineFleetProps> = ({ engines }) => (
  <div className="border-t pt-6">
    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
      <Settings size={24} className="mr-2 text-indigo-600" />
      Engine Fleet
    </h2>
    
    {engines.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {engines.map(engine => (
          <EngineCard key={engine.id} engine={engine} />
        ))}
      </div>
    ) : (
      <div className="text-center py-8 text-gray-500">
        No engine data available for this airline.
      </div>
    )}
  </div>
);

export default EngineFleet;