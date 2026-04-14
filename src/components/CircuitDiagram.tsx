import React from 'react';

export const CircuitDiagram: React.FC = () => {
  return (
    <div className="w-full border border-gray-200 p-8 bg-white rounded-lg shadow-sm my-8">
      <svg viewBox="0 0 1000 800" className="w-full h-auto font-sans">
        {/* Background */}
        <rect width="1000" height="800" fill="#ffffff" />
        
        {/* Arduino Uno - Center */}
        <g transform="translate(350, 300)">
          <rect width="300" height="200" rx="10" fill="#00979c" stroke="#008184" strokeWidth="4" />
          <text x="150" y="100" textAnchor="middle" fill="white" className="text-2xl font-bold">ARDUINO UNO</text>
          <text x="150" y="130" textAnchor="middle" fill="white" className="text-xs opacity-80">Microcontroller Board</text>
          
          {/* Digital Pins */}
          <rect x="0" y="0" width="300" height="30" fill="#008184" />
          <text x="150" y="20" textAnchor="middle" fill="white" className="text-[10px] font-mono">DIGITAL (PWM ~)</text>
          
          {/* Analog Pins */}
          <rect x="0" y="170" width="300" height="30" fill="#008184" />
          <text x="150" y="190" textAnchor="middle" fill="white" className="text-[10px] font-mono">ANALOG IN / POWER</text>
        </g>
        
        {/* Input Sensors - Left Column */}
        {/* IR Sensor */}
        <g transform="translate(50, 50)">
          <rect width="180" height="100" rx="6" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
          <text x="90" y="40" textAnchor="middle" fill="white" className="text-sm font-bold uppercase">IR Proximity Sensor</text>
          <circle cx="150" cy="70" r="10" fill="#ef4444" />
          <circle cx="120" cy="70" r="10" fill="#334155" />
          <g className="text-[10px] fill-slate-400">
            <text x="10" y="85">VCC</text>
            <text x="40" y="85">GND</text>
            <text x="70" y="85">OUT</text>
          </g>
        </g>
        
        {/* Moisture Sensor */}
        <g transform="translate(50, 200)">
          <rect width="180" height="100" rx="6" fill="#064e3b" stroke="#065f46" strokeWidth="2" />
          <text x="90" y="40" textAnchor="middle" fill="white" className="text-sm font-bold uppercase">Moisture Sensor</text>
          <path d="M120 60 L120 90 M140 60 L140 90" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <g className="text-[10px] fill-emerald-200">
            <text x="10" y="85">VCC</text>
            <text x="40" y="85">GND</text>
            <text x="70" y="85">SIG</text>
          </g>
        </g>
        
        {/* Capacitive Sensor */}
        <g transform="translate(50, 350)">
          <rect width="180" height="100" rx="6" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2" />
          <text x="90" y="40" textAnchor="middle" fill="white" className="text-sm font-bold uppercase">Capacitive Sensor</text>
          <rect x="110" y="60" width="40" height="30" rx="4" fill="#3b82f6" />
          <g className="text-[10px] fill-blue-200">
            <text x="10" y="85">VCC</text>
            <text x="40" y="85">GND</text>
            <text x="70" y="85">SIG</text>
          </g>
        </g>
        
        {/* Power Supply */}
        <g transform="translate(50, 600)">
          <rect width="180" height="120" rx="10" fill="#78350f" stroke="#92400e" strokeWidth="2" />
          <text x="90" y="40" textAnchor="middle" fill="white" className="text-sm font-bold uppercase">5V / 12V Power Unit</text>
          <circle cx="90" cy="80" r="20" fill="none" stroke="white" strokeWidth="2" />
          <path d="M80 80 Q 90 60 100 80 T 120 80" stroke="white" fill="none" />
          <text x="90" y="110" textAnchor="middle" fill="white" className="text-[10px]">AC MAINS 230V</text>
        </g>
        
        {/* Actuators - Right Column */}
        {/* Servo Cluster */}
        <g transform="translate(750, 50)">
          <rect width="200" height="400" rx="10" fill="#374151" stroke="#1f2937" strokeWidth="2" />
          <text x="100" y="40" textAnchor="middle" fill="white" className="text-sm font-bold uppercase">Servo Actuators (x4)</text>
          
          {[0, 1, 2, 3].map(i => (
            <g key={i} transform={`translate(20, ${70 + i*80})`}>
              <rect width="160" height="60" rx="4" fill="#4b5563" />
              <circle cx="130" cy="30" r="15" fill="#9ca3af" />
              <rect x="125" y="10" width="10" height="40" rx="2" fill="white" />
              <text x="10" y="35" fill="white" className="text-[10px] font-bold">SERVO {i+1}</text>
            </g>
          ))}
        </g>
        
        {/* Visual Feedback */}
        <g transform="translate(750, 500)">
          <rect width="200" height="150" rx="10" fill="#111827" stroke="#000000" strokeWidth="2" />
          <text x="100" y="40" textAnchor="middle" fill="white" className="text-sm font-bold uppercase">LED Feedback Panel</text>
          
          <circle cx="60" cy="80" r="15" fill="#22c55e" className="animate-pulse" />
          <text x="100" y="85" fill="white" className="text-xs">SYSTEM READY</text>
          
          <circle cx="60" cy="120" r="15" fill="#ef4444" />
          <text x="100" y="125" fill="white" className="text-xs">ERROR / BUSY</text>
        </g>
        
        {/* Wiring Paths */}
        <g fill="none" strokeWidth="2">
          {/* VCC - Red */}
          <path d="M230 100 H 300 V 350 H 350" stroke="#ef4444" />
          <path d="M230 250 H 300" stroke="#ef4444" />
          <path d="M230 400 H 300" stroke="#ef4444" />
          <path d="M230 660 H 300 V 350" stroke="#ef4444" />
          
          {/* GND - Black */}
          <path d="M230 110 H 280 V 380 H 350" stroke="#000000" />
          <path d="M230 260 H 280" stroke="#000000" />
          <path d="M230 410 H 280" stroke="#000000" />
          <path d="M230 680 H 280 V 380" stroke="#000000" />
          
          {/* Signals - Blue/Green/Purple */}
          <path d="M230 120 H 350" stroke="#3b82f6" /> {/* IR to D2 */}
          <path d="M230 270 H 350" stroke="#10b981" /> {/* Moisture to A0 */}
          <path d="M230 420 H 350" stroke="#8b5cf6" /> {/* Cap to A1 */}
          
          {/* Outputs - Orange/Pink */}
          <path d="M650 320 H 750" stroke="#f59e0b" strokeWidth="3" /> {/* Arduino to Servos */}
          <path d="M650 380 H 700 V 575 H 750" stroke="#ec4899" strokeWidth="3" /> {/* Arduino to LEDs */}
        </g>
        
        {/* Header Label */}
        <text x="500" y="780" textAnchor="middle" className="text-lg font-bold fill-slate-800 uppercase tracking-widest">
          Comprehensive System Interconnection Diagram
        </text>
      </svg>
    </div>
  );
};
