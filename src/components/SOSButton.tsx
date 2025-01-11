import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

export default function SOSButton() {
  const [isPressed, setIsPressed] = useState(false);

  const handleSOS = () => {
    setIsPressed(true);
    // Implement SOS logic here
    setTimeout(() => setIsPressed(false), 2000);
  };

  return (
    <button
      onClick={handleSOS}
      className={`fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
        isPressed
          ? 'bg-pink-700 scale-95'
          : 'bg-pink-500 hover:bg-pink-600 hover:scale-105'
      }`}
    >
      <AlertCircle className="w-8 h-8 text-white" />
    </button>
  );
}