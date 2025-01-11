import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Map from './components/Map';
import SOSButton from './components/SOSButton';
import EmergencyContacts from './components/EmergencyContacts';
import type { Contact, Zone } from './types';

export default function App() {
  const [contacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Mom',
      phone: '+1 234 567 890',
      isPriority: true,
    },
    {
      id: '2',
      name: 'Sister',
      phone: '+1 234 567 891',
      isPriority: true,
    },
    {
      id: '3',
      name: 'Local Women Helpline',
      phone: '1091',
      isPriority: true,
    }
  ]);

  const [zones] = useState<Zone[]>([
    {
      id: '1',
      type: 'safe',
      latitude: 40.7128,
      longitude: -74.006,
      description: 'Women Police Station',
    },
    {
      id: '2',
      type: 'safe',
      latitude: 40.7130,
      longitude: -74.008,
      description: 'Women Safety Center',
    },
    {
      id: '3',
      type: 'danger',
      latitude: 40.7129,
      longitude: -74.007,
      description: 'Reported Unsafe Area',
    }
  ]);

  const handleDeleteContact = (id: string) => {
    // Implement delete logic
  };

  const handleTogglePriority = (id: string) => {
    // Implement toggle priority logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navigation />
      
      <main className="pt-16">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-pink-500 mb-2">Welcome to GuardianHer</h1>
          <p className="text-gray-600 mb-6">Your personal safety companion</p>
        </div>
        
        <Map
          userLocation={{ lat: 40.7128, lng: -74.006 }}
          zones={zones}
        />
        
        <EmergencyContacts
          contacts={contacts}
          onDelete={handleDeleteContact}
          onTogglePriority={handleTogglePriority}
        />
      </main>

      <SOSButton />
    </div>
  );
}