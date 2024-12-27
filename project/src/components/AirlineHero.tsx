import React from 'react';

interface AirlineHeroProps {
  name: string;
  imageUrl: string;
}

const AirlineHero: React.FC<AirlineHeroProps> = ({ name, imageUrl }) => (
  <div className="relative h-64">
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    <h1 className="absolute bottom-4 left-4 text-white text-3xl font-bold">
      {name}
    </h1>
  </div>
);

export default AirlineHero;