export interface Contact {
  id: string;
  name: string;
  phone: string;
  isPriority: boolean;
}

export interface Location {
  latitude: number;
  longitude: number;
  timestamp: Date;
}

export interface Zone {
  id: string;
  type: 'safe' | 'danger';
  latitude: number;
  longitude: number;
  description: string;
}

export interface Volunteer {
  id: string;
  name: string;
  location: Location;
  isAvailable: boolean;
  rating: number;
}