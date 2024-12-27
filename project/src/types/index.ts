export interface Airline {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  engines: Engine[];
}

export interface Engine {
  id: string;
  model: string;
  manufacturer: string;
  thrust: string;
  imageUrl: string;
  details: string;
}

export type UserRole = 'platform' | 'devops' | 'designer' | 'service' | 'database';