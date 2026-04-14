import React from 'react';

export const CircuitDiagram: React.FC = () => {
  return (
    <div className="w-full border-2 border-slate-300 p-4 bg-slate-50 rounded-xl shadow-inner my-8">
      <svg viewBox="0 0 1000 800" className="w-full h-auto font-mono">
        {/* Background Grid for Blueprint feel */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="1000" height="800" fill="url(#grid)" />
        
        {/* Arduino Uno - Center Right */}
        <g transform="translate(450, 200)">
          <rect width="280" height="380" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="4" />
          <text x="140" y="190" textAnchor="middle" fill="#38bdf8" className="text-3xl font-bold tracking-widest">ARDUINO</text>
          <text x="140" y="220" textAnchor="middle" fill="#94a3b8" className="text-xl tracking-widest">UNO R3</text>
          
          {/* Digital Pins (Right Side) */}
          <rect x="260" y="40" width="20" height="300" fill="#1e293b" />
          {[...Array(14)].map((_, i) => (
            <g key={`d${i}`} transform={`translate(260, ${50 + i*20})`}>
              <circle cx="10" cy="5" r="4" fill="#cbd5e1" />
              <text x="-10" y="8" textAnchor="end" fill="#cbd5e1" className="text-[10px]">D{13-i}</text>
            </g>
          ))}

          {/* Analog Pins (Left Side Bottom) */}
          <rect x="0" y="240" width="20" height="120" fill="#1e293b" />
          {[...Array(6)].map((_, i) => (
            <g key={`a${i}`} transform={`translate(0, ${250 + i*20})`}>
              <circle cx="10" cy="5" r="4" fill="#cbd5e1" />
              <text x="30" y="8" textAnchor="start" fill="#cbd5e1" className="text-[10px]">A{i}</text>
            </g>
          ))}

          {/* Power Pins (Left Side Top) */}
          <rect x="0" y="40" width="20" height="140" fill="#1e293b" />
          <g transform="translate(0, 50)">
            <circle cx="10" cy="5" r="4" fill="#cbd5e1" /><text x="30" y="8" fill="#cbd5e1" className="text-[10px]">VIN</text>
            <circle cx="10" cy="25" r="4" fill="#cbd5e1" /><text x="30" y="28" fill="#cbd5e1" className="text-[10px]">GND</text>
            <circle cx="10" cy="45" r="4" fill="#cbd5e1" /><text x="30" y="48" fill="#cbd5e1" className="text-[10px]">GND</text>
            <circle cx="10" cy="65" r="4" fill="#cbd5e1" /><text x="30" y="68" fill="#cbd5e1" className="text-[10px]">5V</text>
            <circle cx="10" cy="85" r="4" fill="#cbd5e1" /><text x="30" y="88" fill="#cbd5e1" className="text-[10px]">3.3V</text>
            <circle cx="10" cy="105" r="4" fill="#cbd5e1" /><text x="30" y="108" fill="#cbd5e1" className="text-[10px]">RESET</text>
            <circle cx="10" cy="125" r="4" fill="#cbd5e1" /><text x="30" y="128" fill="#cbd5e1" className="text-[10px]">IOREF</text>
          </g>
        </g>
        
        {/* Sensors - Left Column */}
        {/* IR Sensor */}
        <g transform="translate(80, 100)">
          <rect width="140" height="80" rx="4" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
          <text x="70" y="30" textAnchor="middle" fill="#334155" className="text-sm font-bold">IR SENSOR</text>
          <circle cx="40" cy="55" r="8" fill="#1e293b" />
          <circle cx="100" cy="55" r="8" fill="#e2e8f0" stroke="#94a3b8" />
          <g transform="translate(140, 20)">
            <text x="-15" y="5" textAnchor="end" className="text-[10px] fill-slate-600">VCC</text>
            <text x="-15" y="25" textAnchor="end" className="text-[10px] fill-slate-600">GND</text>
            <text x="-15" y="45" textAnchor="end" className="text-[10px] fill-slate-600">OUT</text>
            <circle cx="0" cy="2" r="3" fill="#64748b" />
            <circle cx="0" cy="22" r="3" fill="#64748b" />
            <circle cx="0" cy="42" r="3" fill="#64748b" />
          </g>
        </g>
        
        {/* Moisture Sensor */}
        <g transform="translate(80, 250)">
          <rect width="140" height="80" rx="4" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
          <text x="70" y="30" textAnchor="middle" fill="#334155" className="text-sm font-bold">MOISTURE</text>
          <path d="M40 50 L40 70 M100 50 L100 70" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
          <g transform="translate(140, 20)">
            <text x="-15" y="5" textAnchor="end" className="text-[10px] fill-slate-600">VCC</text>
            <text x="-15" y="25" textAnchor="end" className="text-[10px] fill-slate-600">GND</text>
            <text x="-15" y="45" textAnchor="end" className="text-[10px] fill-slate-600">SIG</text>
            <circle cx="0" cy="2" r="3" fill="#64748b" />
            <circle cx="0" cy="22" r="3" fill="#64748b" />
            <circle cx="0" cy="42" r="3" fill="#64748b" />
          </g>
        </g>
        
        {/* Capacitive Sensor */}
        <g transform="translate(80, 400)">
          <rect width="140" height="80" rx="4" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
          <text x="70" y="30" textAnchor="middle" fill="#334155" className="text-sm font-bold">CAPACITIVE</text>
          <rect x="40" y="45" width="60" height="20" rx="2" fill="#e2e8f0" stroke="#94a3b8" />
          <g transform="translate(140, 20)">
            <text x="-15" y="5" textAnchor="end" className="text-[10px] fill-slate-600">VCC</text>
            <text x="-15" y="25" textAnchor="end" className="text-[10px] fill-slate-600">GND</text>
            <text x="-15" y="45" textAnchor="end" className="text-[10px] fill-slate-600">SIG</text>
            <circle cx="0" cy="2" r="3" fill="#64748b" />
            <circle cx="0" cy="22" r="3" fill="#64748b" />
            <circle cx="0" cy="42" r="3" fill="#64748b" />
          </g>
        </g>
        
        {/* Power Supply */}
        <g transform="translate(80, 600)">
          <rect width="140" height="100" rx="4" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
          <text x="70" y="35" textAnchor="middle" fill="#334155" className="text-sm font-bold">POWER SUPPLY</text>
          <text x="70" y="55" textAnchor="middle" fill="#64748b" className="text-xs">5V / 2A</text>
          <g transform="translate(140, 30)">
            <text x="-15" y="5" textAnchor="end" className="text-[10px] fill-slate-600">+5V</text>
            <text x="-15" y="35" textAnchor="end" className="text-[10px] fill-slate-600">GND</text>
            <circle cx="0" cy="2" r="3" fill="#64748b" />
            <circle cx="0" cy="32" r="3" fill="#64748b" />
          </g>
        </g>
        
        {/* Actuators - Right Column */}
        <g transform="translate(820, 100)">
          {[0, 1, 2, 3].map(i => (
            <g key={i} transform={`translate(0, ${i*120})`}>
              <rect width="120" height="70" rx="4" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
              <text x="60" y="25" textAnchor="middle" fill="#334155" className="text-sm font-bold">SERVO {i+1}</text>
              <circle cx="60" cy="45" r="12" fill="#e2e8f0" stroke="#94a3b8" />
              <g transform="translate(0, 15)">
                <text x="15" y="5" textAnchor="start" className="text-[10px] fill-slate-600">PWM</text>
                <text x="15" y="20" textAnchor="start" className="text-[10px] fill-slate-600">VCC</text>
                <text x="15" y="35" textAnchor="start" className="text-[10px] fill-slate-600">GND</text>
                <circle cx="0" cy="2" r="3" fill="#64748b" />
                <circle cx="0" cy="17" r="3" fill="#64748b" />
                <circle cx="0" cy="32" r="3" fill="#64748b" />
              </g>
            </g>
          ))}
        </g>
        
        {/* LED Indicators */}
        <g transform="translate(820, 600)">
          <rect width="120" height="100" rx="4" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
          <text x="60" y="25" textAnchor="middle" fill="#334155" className="text-sm font-bold">LED PANEL</text>
          <circle cx="40" cy="55" r="10" fill="#22c55e" stroke="#166534" strokeWidth="2" />
          <circle cx="80" cy="55" r="10" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
          <g transform="translate(0, 30)">
            <text x="15" y="5" textAnchor="start" className="text-[10px] fill-slate-600">D8</text>
            <text x="15" y="25" textAnchor="start" className="text-[10px] fill-slate-600">D7</text>
            <text x="15" y="45" textAnchor="start" className="text-[10px] fill-slate-600">GND</text>
            <circle cx="0" cy="2" r="3" fill="#64748b" />
            <circle cx="0" cy="22" r="3" fill="#64748b" />
            <circle cx="0" cy="42" r="3" fill="#64748b" />
          </g>
        </g>
        
        {/* WIRING (Manhattan Routing) */}
        <g fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
          {/* VCC Lines (Red) */}
          <path d="M220 122 H 240 V 632 H 220" stroke="#ef4444" /> {/* IR & Power */}
          <path d="M220 272 H 240" stroke="#ef4444" /> {/* Moisture */}
          <path d="M220 422 H 240" stroke="#ef4444" /> {/* Cap */}
          <path d="M240 315 H 460" stroke="#ef4444" /> {/* To Arduino 5V */}
          
          <path d="M240 80 H 780 V 492" stroke="#ef4444" /> {/* Top bridge to right bus */}
          <path d="M780 132 H 820" stroke="#ef4444" />
          <path d="M780 252 H 820" stroke="#ef4444" />
          <path d="M780 372 H 820" stroke="#ef4444" />
          <path d="M780 492 H 820" stroke="#ef4444" />

          {/* GND Lines (Black) */}
          <path d="M220 142 H 250 V 662 H 220" stroke="#000000" /> {/* IR & Power */}
          <path d="M220 292 H 250" stroke="#000000" /> {/* Moisture */}
          <path d="M220 442 H 250" stroke="#000000" /> {/* Cap */}
          <path d="M250 275 H 460" stroke="#000000" /> {/* To Arduino GND */}
          
          <path d="M250 60 H 790 V 672 H 820" stroke="#000000" /> {/* Top bridge to right bus & LED GND */}
          <path d="M790 147 H 820" stroke="#000000" />
          <path d="M790 267 H 820" stroke="#000000" />
          <path d="M790 387 H 820" stroke="#000000" />
          <path d="M790 507 H 820" stroke="#000000" />

          {/* Signal Lines (Various Colors) */}
          {/* IR OUT to D2 */}
          <path d="M220 162 H 300 V 710 H 750 V 475 H 720" stroke="#3b82f6" /> 
          {/* Moisture SIG to A0 */}
          <path d="M220 312 H 320 V 455 H 460" stroke="#10b981" />
          {/* Cap SIG to A1 */}
          <path d="M220 462 H 340 V 475 H 460" stroke="#8b5cf6" />
          
          {/* Servo PWMs (D11, D10, D9, D6) */}
          <path d="M720 295 H 740 V 117 H 820" stroke="#f59e0b" /> {/* Servo 1 to D11 */}
          <path d="M720 315 H 750 V 237 H 820" stroke="#f59e0b" /> {/* Servo 2 to D10 */}
          <path d="M720 335 H 760 V 357 H 820" stroke="#f59e0b" /> {/* Servo 3 to D9 */}
          <path d="M720 395 H 770 V 477 H 820" stroke="#f59e0b" /> {/* Servo 4 to D6 */}

          {/* LED Signals (D8, D7) */}
          <path d="M720 355 H 740 V 632 H 820" stroke="#ec4899" /> {/* LED 1 to D8 */}
          <path d="M720 375 H 730 V 652 H 820" stroke="#ec4899" /> {/* LED 2 to D7 */}
        </g>
        
        {/* Connection Dots */}
        <g fill="#000000">
          {/* VCC Dots */}
          <circle cx="240" cy="122" r="4" fill="#ef4444" />
          <circle cx="240" cy="272" r="4" fill="#ef4444" />
          <circle cx="240" cy="422" r="4" fill="#ef4444" />
          <circle cx="240" cy="315" r="4" fill="#ef4444" />
          <circle cx="240" cy="80" r="4" fill="#ef4444" />
          <circle cx="780" cy="80" r="4" fill="#ef4444" />
          <circle cx="780" cy="132" r="4" fill="#ef4444" />
          <circle cx="780" cy="252" r="4" fill="#ef4444" />
          <circle cx="780" cy="372" r="4" fill="#ef4444" />
          <circle cx="780" cy="492" r="4" fill="#ef4444" />

          {/* GND Dots */}
          <circle cx="250" cy="142" r="4" />
          <circle cx="250" cy="292" r="4" />
          <circle cx="250" cy="442" r="4" />
          <circle cx="250" cy="275" r="4" />
          <circle cx="250" cy="60" r="4" />
          <circle cx="790" cy="60" r="4" />
          <circle cx="790" cy="147" r="4" />
          <circle cx="790" cy="267" r="4" />
          <circle cx="790" cy="387" r="4" />
          <circle cx="790" cy="507" r="4" />
          <circle cx="790" cy="672" r="4" />
        </g>

        {/* Header Label */}
        <text x="500" y="770" textAnchor="middle" className="text-xl font-bold fill-slate-800 uppercase tracking-widest">
          System Schematic & Wiring Diagram
        </text>
      </svg>
    </div>
  );
};

