import React from 'react';
import { Phone, Star, Trash } from 'lucide-react';
import type { Contact } from '../types';

interface EmergencyContactsProps {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onTogglePriority: (id: string) => void;
}

export default function EmergencyContacts({
  contacts,
  onDelete,
  onTogglePriority,
}: EmergencyContactsProps) {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold text-pink-500">Emergency Contacts</h2>
      <div className="space-y-2">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-pink-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold">{contact.name}</h3>
                <p className="text-gray-500">{contact.phone}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onTogglePriority(contact.id)}
                className={`p-2 rounded-full ${
                  contact.isPriority ? 'text-pink-500' : 'text-gray-400'
                }`}
              >
                <Star className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(contact.id)}
                className="p-2 rounded-full text-pink-500 hover:text-pink-700"
              >
                <Trash className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}