import React from 'react';

export const CircuitDiagram: React.FC = () => {
  return (
    <div className="w-full border border-gray-200 p-4 bg-white rounded-lg shadow-sm my-6">
      <svg viewBox="0 0 800 600" className="w-full h-auto font-sans">
        {/* Background */}
        <rect width="800" height="600" fill="#f8fafc" />
        
        {/* Arduino Uno */}
        <rect x="300" y="200" width="200" height="200" rx="4" fill="#00979c" />
        <text x="400" y="300" textAnchor="middle" fill="white" className="text-xl font-bold">ARDUINO UNO</text>
        
        {/* Pin Headers */}
        <rect x="300" y="200" width="200" height="20" fill="#008184" />
        <rect x="300" y="380" width="200" height="20" fill="#008184" />
        
        {/* Sensors - Left Side */}
        {/* IR Sensor */}
        <g transform="translate(50, 50)">
          <rect width="120" height="80" rx="4" fill="#1e293b" />
          <text x="60" y="30" textAnchor="middle" fill="white" className="text-xs font-bold">IR SENSOR</text>
          <text x="10" y="55" fill="#94a3b8" className="text-[8px]">VCC</text>
          <text x="10" y="65" fill="#94a3b8" className="text-[8px]">GND</text>
          <text x="10" y="75" fill="#94a3b8" className="text-[8px]">OUT</text>
        </g>
        
        {/* Moisture Sensor */}
        <g transform="translate(50, 150)">
          <rect width="120" height="80" rx="4" fill="#065f46" />
          <text x="60" y="30" textAnchor="middle" fill="white" className="text-xs font-bold">MOISTURE SENSOR</text>
          <text x="10" y="55" fill="#94a3b8" className="text-[8px]">VCC</text>
          <text x="10" y="65" fill="#94a3b8" className="text-[8px]">GND</text>
          <text x="10" y="75" fill="#94a3b8" className="text-[8px]">SIG</text>
        </g>
        
        {/* Capacitive Sensor */}
        <g transform="translate(50, 250)">
          <rect width="120" height="80" rx="4" fill="#1e40af" />
          <text x="60" y="30" textAnchor="middle" fill="white" className="text-xs font-bold">CAPACITIVE SENSOR</text>
          <text x="10" y="55" fill="#94a3b8" className="text-[8px]">VCC</text>
          <text x="10" y="65" fill="#94a3b8" className="text-[8px]">GND</text>
          <text x="10" y="75" fill="#94a3b8" className="text-[8px]">SIG</text>
        </g>
        
        {/* Power Supply */}
        <g transform="translate(50, 450)">
          <rect width="120" height="100" rx="4" fill="#92400e" />
          <text x="60" y="30" textAnchor="middle" fill="white" className="text-xs font-bold">5V POWER SUPPLY</text>
          <circle cx="60" cy="65" r="15" fill="none" stroke="white" strokeWidth="2" />
          <text x="60" y="70" textAnchor="middle" fill="white" className="text-xs font-bold">AC/DC</text>
        </g>
        
        {/* Actuators - Right Side */}
        {/* Servo Cluster */}
        <g transform="translate(630, 50)">
          <rect width="120" height="250" rx="4" fill="#374151" />
          <text x="60" y="30" textAnchor="middle" fill="white" className="text-xs font-bold">SERVO MOTORS (x4)</text>
          <rect x="10" y="50" width="100" height="40" rx="2" fill="#4b5563" />
          <rect x="10" y="100" width="100" height="40" rx="2" fill="#4b5563" />
          <rect x="10" y="150" width="100" height="40" rx="2" fill="#4b5563" />
          <rect x="10" y="200" width="100" height="40" rx="2" fill="#4b5563" />
        </g>
        
        {/* LED Panel */}
        <g transform="translate(630, 350)">
          <rect width="120" height="150" rx="4" fill="#1f2937" />
          <text x="60" y="30" textAnchor="middle" fill="white" className="text-xs font-bold">LED INDICATORS</text>
          <circle cx="40" cy="70" r="10" fill="#22c55e" />
          <text x="80" y="75" fill="white" className="text-[10px]">SUCCESS</text>
          <circle cx="40" cy="110" r="10" fill="#ef4444" />
          <text x="80" y="115" fill="white" className="text-[10px]">ERROR</text>
        </g>
        
        {/* Wiring Lines */}
        <g strokeWidth="1.5" fill="none">
          {/* Power Lines (Red) */}
          <path d="M170 505 H 250 V 210 H 300" stroke="#ef4444" /> {/* PS to Arduino */}
          <path d="M250 210 V 100 H 170" stroke="#ef4444" /> {/* PS to IR */}
          <path d="M250 100 V 200 H 170" stroke="#ef4444" /> {/* PS to Moisture */}
          <path d="M250 200 V 300 H 170" stroke="#ef4444" /> {/* PS to Cap */}
          
          {/* Ground Lines (Black) */}
          <path d="M170 525 H 270 V 230 H 300" stroke="#000000" />
          <path d="M270 230 V 110 H 170" stroke="#000000" />
          <path d="M270 110 V 210 H 170" stroke="#000000" />
          <path d="M270 210 V 310 H 170" stroke="#000000" />
          
          {/* Signal Lines (Various) */}
          <path d="M170 125 H 300" stroke="#3b82f6" /> {/* IR to D2 */}
          <path d="M170 225 H 300" stroke="#10b981" strokeDasharray="4" /> {/* Moisture to A0 */}
          <path d="M170 325 H 300" stroke="#6366f1" /> {/* Cap to A1 */}
          
          {/* Output Lines */}
          <path d="M500 220 H 580 V 100 H 630" stroke="#f59e0b" /> {/* Arduino to Servos */}
          <path d="M500 380 H 580 V 400 H 630" stroke="#ec4899" /> {/* Arduino to LEDs */}
        </g>
        
        {/* Labels */}
        <text x="400" y="30" textAnchor="middle" className="text-xl font-bold fill-slate-800 uppercase">Detailed System Wiring Diagram</text>
        <text x="400" y="580" textAnchor="middle" className="text-sm italic fill-slate-500">Fig 12.2: Comprehensive wiring between Arduino Uno, Sensor Suite, and Actuators</text>
      </svg>
    </div>
  );
};
