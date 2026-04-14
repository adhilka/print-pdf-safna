import React from 'react';

export const BlockDiagram: React.FC = () => {
  return (
    <div className="w-full border border-gray-200 p-4 bg-white rounded-lg shadow-sm my-6">
      <svg viewBox="0 0 800 400" className="w-full h-auto font-sans">
        <rect width="800" height="400" fill="#f8fafc" />
        
        {/* Nodes */}
        <g transform="translate(50, 170)">
          <rect width="120" height="60" rx="8" fill="#3b82f6" />
          <text x="60" y="35" textAnchor="middle" fill="white" className="text-sm font-bold">WASTE INPUT</text>
        </g>
        
        <g transform="translate(220, 170)">
          <rect width="120" height="60" rx="8" fill="#10b981" />
          <text x="60" y="35" textAnchor="middle" fill="white" className="text-sm font-bold">SENSORS ARRAY</text>
          <text x="60" y="52" textAnchor="middle" fill="white" className="text-[8px]">(IR, Moisture, Cap)</text>
        </g>
        
        <g transform="translate(390, 150)">
          <rect width="140" height="100" rx="8" fill="#6366f1" />
          <text x="70" y="45" textAnchor="middle" fill="white" className="text-sm font-bold">ARDUINO UNO</text>
          <text x="70" y="65" textAnchor="middle" fill="white" className="text-[10px]">Processing Logic</text>
          <text x="70" y="80" textAnchor="middle" fill="white" className="text-[10px]">& Classification</text>
        </g>
        
        <g transform="translate(580, 100)">
          <rect width="150" height="60" rx="8" fill="#f59e0b" />
          <text x="75" y="35" textAnchor="middle" fill="white" className="text-sm font-bold">SERVO ACTUATORS</text>
        </g>
        
        <g transform="translate(580, 240)">
          <rect width="150" height="60" rx="8" fill="#ef4444" />
          <text x="75" y="35" textAnchor="middle" fill="white" className="text-sm font-bold">LED INDICATORS</text>
        </g>
        
        {/* Arrows */}
        <g stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)">
          <path d="M170 200 H 220" />
          <path d="M340 200 H 390" />
          <path d="M530 200 H 555 V 130 H 580" />
          <path d="M530 200 H 555 V 270 H 580" />
        </g>
        
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>
        
        <text x="400" y="40" textAnchor="middle" className="text-xl font-bold fill-slate-800">PROPOSED SYSTEM BLOCK DIAGRAM</text>
      </svg>
    </div>
  );
};
