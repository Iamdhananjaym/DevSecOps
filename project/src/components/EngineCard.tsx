import React from 'react';
import type { Engine } from '../types';

interface EngineCardProps {
  engine: Engine;
}

const EngineCard: React.FC<EngineCardProps> = ({ engine }) => (
  <div className="border rounded-lg p-4">
    <img
      src={engine.imageUrl}
      alt={engine.model}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h3 className="font-bold text-lg mb-2">{engine.model}</h3>
    <p className="text-gray-600 text-sm mb-2">
      Manufacturer: {engine.manufacturer}
    </p>
    <p className="text-gray-600 text-sm mb-2">
      Thrust: {engine.thrust}
    </p>
    <p className="text-gray-600 text-sm">{engine.details}</p>
  </div>
);

export default EngineCard;