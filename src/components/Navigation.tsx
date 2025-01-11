import React, { useState } from 'react';
import { Menu, X, Home, Phone, MapPin, Users, User, Shield, Bell, Heart } from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', icon: <Home className="w-5 h-5" />, onClick: () => {} },
    { name: 'Emergency Contacts', icon: <Phone className="w-5 h-5" />, onClick: () => {} },
    { name: 'Safe Routes', icon: <MapPin className="w-5 h-5" />, onClick: () => {} },
    { name: 'Guardian Angels', icon: <Users className="w-5 h-5" />, onClick: () => {} },
    { name: 'Safety Tips', icon: <Shield className="w-5 h-5" />, onClick: () => {} },
    { name: 'Alerts', icon: <Bell className="w-5 h-5" />, onClick: () => {} },
    { name: 'Profile', icon: <User className="w-5 h-5" />, onClick: () => {} },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <Heart className="w-8 h-8 text-pink-500" />
            <h2 className="text-2xl font-bold text-pink-500">GuardianHer</h2>
          </div>
          <nav>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.onClick}
                className="flex items-center space-x-4 w-full p-4 hover:bg-pink-50 rounded-lg transition-colors"
              >
                <span className="text-pink-500">{item.icon}</span>
                <span className="text-gray-700">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}