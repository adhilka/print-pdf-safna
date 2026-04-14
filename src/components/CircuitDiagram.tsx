import React from 'react';

export const CircuitDiagram: React.FC = () => {
  return (
    <div className="w-full border border-gray-200 p-4 bg-white rounded-lg shadow-sm my-6">
      <svg viewBox="0 0 800 500" className="w-full h-auto font-sans">
        {/* Background */}
        <rect width="800" height="500" fill="#f8fafc" />
        
        {/* Arduino Uno */}
        <rect x="300" y="180" width="200" height="140" rx="4" fill="#00979c" />
        <text x="400" y="255" textAnchor="middle" fill="white" className="text-xl font-bold">ARDUINO UNO</text>
        <rect x="300" y="180" width="200" height="20" fill="#008184" />
        <rect x="300" y="300" width="200" height="20" fill="#008184" />
        
        {/* IR Sensor */}
        <rect x="50" y="50" width="120" height="60" rx="4" fill="#1e293b" />
        <text x="110" y="85" textAnchor="middle" fill="white" className="text-sm font-bold">IR SENSOR</text>
        <circle cx="170" cy="80" r="8" fill="#ef4444" /> {/* IR LED */}
        
        {/* Moisture Sensor */}
        <rect x="50" y="150" width="120" height="60" rx="4" fill="#065f46" />
        <text x="110" y="185" textAnchor="middle" fill="white" className="text-sm font-bold">MOISTURE SENSOR</text>
        
        {/* Capacitive Sensor */}
        <rect x="50" y="250" width="120" height="60" rx="4" fill="#1e40af" />
        <text x="110" y="285" textAnchor="middle" fill="white" className="text-sm font-bold">CAPACITIVE SENSOR</text>
        
        {/* Power Supply */}
        <rect x="50" y="380" width="120" height="80" rx="4" fill="#92400e" />
        <text x="110" y="425" textAnchor="middle" fill="white" className="text-sm font-bold">POWER SUPPLY</text>
        
        {/* Servo Motors */}
        <rect x="630" y="50" width="120" height="60" rx="4" fill="#374151" />
        <text x="690" y="85" textAnchor="middle" fill="white" className="text-sm font-bold">SERVO 1 (Plastic)</text>
        
        <rect x="630" y="130" width="120" height="60" rx="4" fill="#374151" />
        <text x="690" y="165" textAnchor="middle" fill="white" className="text-sm font-bold">SERVO 2 (Organic)</text>
        
        <rect x="630" y="210" width="120" height="60" rx="4" fill="#374151" />
        <text x="690" y="245" textAnchor="middle" fill="white" className="text-sm font-bold">SERVO 3 (Paper)</text>
        
        <rect x="630" y="290" width="120" height="60" rx="4" fill="#374151" />
        <text x="690" y="325" textAnchor="middle" fill="white" className="text-sm font-bold">SERVO 4 (Other)</text>
        
        {/* LEDs */}
        <circle cx="650" cy="420" r="15" fill="#22c55e" />
        <text x="650" y="455" textAnchor="middle" fill="#1e293b" className="text-xs">Green LED</text>
        
        <circle cx="730" cy="420" r="15" fill="#ef4444" />
        <text x="730" y="455" textAnchor="middle" fill="#1e293b" className="text-xs">Red LED</text>
        
        {/* Wiring Lines */}
        <g stroke="#94a3b8" strokeWidth="2" fill="none">
          {/* Sensors to Arduino */}
          <path d="M170 80 H 300" />
          <path d="M170 180 H 300" />
          <path d="M170 280 H 300" />
          
          {/* Power to Arduino */}
          <path d="M170 420 H 250 V 250 H 300" />
          
          {/* Arduino to Servos */}
          <path d="M500 200 H 580 V 80 H 630" />
          <path d="M500 220 H 580 V 160 H 630" />
          <path d="M500 240 H 580 V 240 H 630" />
          <path d="M500 260 H 580 V 320 H 630" />
          
          {/* Arduino to LEDs */}
          <path d="M500 300 H 580 V 420 H 635" />
          <path d="M500 310 H 580 V 420 H 715" />
        </g>
        
        {/* Labels */}
        <text x="400" y="30" textAnchor="middle" className="text-lg font-bold fill-slate-800">CIRCUIT WIRING DIAGRAM</text>
        <text x="400" y="480" textAnchor="middle" className="text-sm italic fill-slate-500">Fig 12.1: Wiring connections between Arduino Uno, Sensors, and Actuators</text>
      </svg>
    </div>
  );
};
