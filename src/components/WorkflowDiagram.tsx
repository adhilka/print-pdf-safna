import React from 'react';

export const WorkflowDiagram: React.FC = () => {
  return (
    <div className="w-full border border-gray-200 p-6 bg-white rounded-lg shadow-sm my-6">
      <div className="flex flex-col items-center space-y-6">
        <h3 className="text-lg font-bold text-slate-800 uppercase">System Operational Workflow</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full items-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mb-2 border-2 border-blue-200">1</div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 w-full">
              <p className="font-bold text-xs">WASTE INPUT</p>
              <p className="text-[10px] text-slate-500">User places waste near bin</p>
            </div>
          </div>
          
          <div className="hidden md:block text-slate-300 text-2xl">→</div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold mb-2 border-2 border-emerald-200">2</div>
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 w-full">
              <p className="font-bold text-xs">DETECTION</p>
              <p className="text-[10px] text-slate-500">IR & Moisture sensors trigger</p>
            </div>
          </div>

          <div className="hidden md:block text-slate-300 text-2xl">→</div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mb-2 border-2 border-indigo-200">3</div>
            <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 w-full">
              <p className="font-bold text-xs">PROCESSING</p>
              <p className="text-[10px] text-slate-500">Arduino classifies material</p>
            </div>
          </div>

          <div className="hidden md:block text-slate-300 text-2xl">→</div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold mb-2 border-2 border-amber-200">4</div>
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 w-full">
              <p className="font-bold text-xs">ACTUATION</p>
              <p className="text-[10px] text-slate-500">Servo opens correct lid</p>
            </div>
          </div>
        </div>
        
        <div className="w-full h-px bg-slate-100" />
        
        <div className="flex gap-8 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs font-medium">Green LED: Success</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-xs font-medium">Red LED: Error/Wait</span>
          </div>
        </div>
      </div>
    </div>
  );
};
