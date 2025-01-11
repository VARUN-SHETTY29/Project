import React from 'react';
import { MapPin, AlertTriangle, Shield } from 'lucide-react';
import type { Zone } from '../types';

interface MapProps {
  userLocation: { lat: number; lng: number } | null;
  zones: Zone[];
}

export default function Map({ userLocation, zones }: MapProps) {
  return (
    <div className="relative w-full h-[calc(100vh-4rem)] bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-500">Map integration would go here</p>
      </div>
      
      {/* Markers would be rendered here when map is integrated */}
      <div className="absolute bottom-4 right-4 space-y-2">
        <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow">
          <MapPin className="w-5 h-5 text-blue-500" />
          <span>Your Location</span>
        </div>
        <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow">
          <Shield className="w-5 h-5 text-green-500" />
          <span>Safe Zone</span>
        </div>
        <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <span>Danger Zone</span>
        </div>
      </div>
    </div>
  );
}