import { Airline } from '../types';

export const airlines: Airline[] = [
  {
    id: 'qatar',
    name: 'Qatar Airways',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    description: 'Qatar Airways, the national carrier of Qatar, is one of the fastest growing airlines operating one of the youngest fleets in the world.',
    engines: [
      {
        id: 'pw1100g',
        model: 'PW1100G-JM',
        manufacturer: 'Pratt & Whitney',
        thrust: '24,000-33,000 lbf',
        imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745',
        details: 'Advanced geared turbofan engine powering the A320neo family.'
      }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore Airlines',
    imageUrl: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e',
    description: 'Singapore Airlines is the flag carrier airline of Singapore with its hub at Singapore Changi Airport.',
    engines: []
  },
  {
    id: 'emirates',
    name: 'Emirates',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1',
    description: 'Emirates is the largest airline in the Middle East, operating over 3,600 flights per week.',
    engines: []
  },
  {
    id: 'ana',
    name: 'ANA (All Nippon Airways)',
    imageUrl: 'https://images.unsplash.com/photo-1597218868981-1b68e15f0065',
    description: 'All Nippon Airways is Japan\'s largest airline and one of the world\'s leading carriers.',
    engines: []
  },
  {
    id: 'cathay',
    name: 'Cathay Pacific Airways',
    imageUrl: 'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad',
    description: 'Cathay Pacific is the flag carrier of Hong Kong, with its main hub at Hong Kong International Airport.',
    engines: []
  }
];