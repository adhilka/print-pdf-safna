import React from 'react';
import { Printer, FileText, Users, Lightbulb, ShieldCheck, Settings, TrendingUp, Target, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { CircuitDiagram } from './components/CircuitDiagram';
import { BlockDiagram } from './components/BlockDiagram';
import { WorkflowDiagram } from './components/WorkflowDiagram';

interface PageProps {
  children: React.ReactNode;
  pageNumber: number;
}

const ReportPage: React.FC<PageProps> = ({ children, pageNumber }) => (
  <div className="a4-page font-serif relative mb-8">
    <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 no-print" />
    <div className="h-full flex flex-col">
      <div className="flex-grow">
        {children}
      </div>
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-100 pt-4">
        Page {pageNumber}
      </div>
    </div>
  </div>
);

const Heading1: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h1 id={id} className="text-[16pt] font-bold uppercase mb-6 mt-8 text-center text-slate-900">
    {children}
  </h1>
);

const Heading2: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h2 id={id} className="text-[14pt] font-bold uppercase mb-4 mt-8 border-b-2 border-blue-100 pb-1 text-slate-800">
    {children}
  </h2>
);

const Heading3: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h3 id={id} className="text-[12pt] font-bold mb-3 mt-6 text-slate-700 flex items-center gap-2">
    <Info size={16} className="text-blue-500" />
    {children}
  </h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[12pt] leading-[1.8] mb-4 justified-text text-slate-700">
    {children}
  </p>
);

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 print:py-0 print:bg-white">
      <div className="fixed top-4 right-4 flex gap-2 no-print z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-105 font-bold"
        >
          <Printer size={20} />
          GENERATE FULL PDF REPORT
        </button>
      </div>

      {/* Page 1: Cover */}
      <ReportPage pageNumber={1}>
        <div className="flex flex-col items-center justify-center h-full text-center py-12">
          <div className="w-full h-1 bg-blue-600 mb-16" />
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-6 text-slate-900">
            SMART WASTE SEGREGATION USING SENSORS
          </h1>
          <div className="w-32 h-1.5 bg-blue-600 mb-10" />
          <p className="text-2xl font-medium text-slate-600 mb-20">Business Plan Report</p>
          
          <div className="w-full max-w-lg mb-20 relative">
             <div className="absolute -inset-4 bg-blue-50 rounded-3xl -z-10" />
             <img 
               src="https://picsum.photos/seed/smart-bin/1200/800" 
               alt="Smart Waste Bin Concept" 
               className="w-full h-auto rounded-2xl shadow-xl border-4 border-white"
               referrerPolicy="no-referrer"
             />
             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-xs font-bold text-blue-600 uppercase tracking-tighter">
               Prototype v1.0
             </div>
          </div>
          
          <div className="mt-auto w-full flex justify-between items-end px-10">
            <div className="text-left text-slate-500 text-sm">
              <p className="font-bold uppercase mb-1">Submission Date</p>
              <p>March 30, 2026</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-900 mb-4 uppercase tracking-wider border-b border-slate-200 pb-2">Presented By:</p>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>NOOR FATHIMA.A</li>
                <li>SAFNA FATHIMA.S.S</li>
                <li>NOORUL SURUMI.F</li>
                <li>AMINA.S</li>
                <li>MUHAMMED RAMEES.N</li>
              </ul>
            </div>
          </div>
        </div>
      </ReportPage>

      {/* Page 2: Table of Contents */}
      <ReportPage pageNumber={2}>
        <Heading1>TABLE OF CONTENTS</Heading1>
        <div className="mt-12 space-y-6 px-8">
          {[
            { t: "1. EXECUTIVE SUMMARY", p: 3 },
            { t: "2. INTRODUCTION & VENTURE OVERVIEW", p: 4 },
            { t: "3. PROBLEM STATEMENT & SOLUTION CANVAS", p: 6 },
            { t: "4. IPR STRATEGY", p: 7 },
            { t: "5. TEAM STRUCTURE", p: 8 },
            { t: "6. CUSTOMER & MARKET ANALYSIS", p: 9 },
            { t: "7. COMPETITOR ANALYSIS", p: 10 },
            { t: "8. BUSINESS MODEL & FINANCIAL PROJECTIONS", p: 11 },
            { t: "9. PROTOTYPE DEVELOPMENT PLAN", p: 12 },
            { t: "10. STAKEHOLDER ENGAGEMENT STRATEGY", p: 13 },
            { t: "11. RISK MANAGEMENT & CONCLUSION", p: 14 },
            { t: "12. APPENDICES", p: 15 }
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-end group cursor-pointer">
              <span className="text-[13pt] font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{item.t}</span>
              <div className="flex-grow border-b border-dotted border-slate-300 mx-4 mb-1" />
              <span className="text-[13pt] font-bold text-blue-600">{item.p}</span>
            </div>
          ))}
        </div>
      </ReportPage>

      {/* Page 3: Executive Summary */}
      <ReportPage pageNumber={3}>
        <Heading1>1. EXECUTIVE SUMMARY</Heading1>
        <Paragraph>
          Waste management has emerged as one of the most pressing environmental challenges in modern society. With rapid population growth and urbanization, the volume of daily waste generation has increased exponentially, leading to severe environmental pollution and health hazards. Traditional waste management systems rely heavily on manual segregation, which is inefficient, unhygienic, and prone to human error. The mixing of different waste types - plastic, paper, organic, and other materials - makes recycling extremely difficult and increases the burden on landfills, contributing to soil and water contamination.
        </Paragraph>
        <Paragraph>
          Our venture, Smart Waste Segregation Using Sensors, addresses this critical problem through an innovative, technology-driven solution. We have developed an automated waste segregation system that uses Arduino Uno microcontroller and multiple sensor technologies (IR sensors, moisture sensors, and capacitive sensors) to identify and separate waste into appropriate categories in real-time. This smart bin system eliminates the need for manual sorting, reduces contamination between waste streams, and significantly improves recycling efficiency.
        </Paragraph>
        <Paragraph>
          The system operates autonomously: when waste is deposited, the IR sensor detects its presence and triggers the classification process. The moisture sensor identifies wet/organic waste, while the capacitive sensor detects plastic materials. Based on these readings, the Arduino processes the data and activates the appropriate servo motor to direct the waste into the correct bin. LED indicators provide visual feedback to users, ensuring transparency in the segregation process.
        </Paragraph>
        <Paragraph>
          Our target market includes smart cities, municipal corporations, educational institutions, commercial complexes, and residential communities. With an estimated project cost of ₹2,455 to ₹6,570 per unit for initial prototypes, we project significant cost reduction through scaled manufacturing.
        </Paragraph>
      </ReportPage>

      {/* Page 4: Introduction */}
      <ReportPage pageNumber={4}>
        <Heading1>2. INTRODUCTION & VENTURE OVERVIEW</Heading1>
        <Heading2>2.1 BACKGROUND AND CONTEXT</Heading2>
        <Paragraph>
          Waste management is a major environmental challenge in the modern society. The rapid population growth has dramatically increased the amount of daily waste products generated across urban and semi-urban areas. According to recent studies, improper waste disposal leads to the mixing of plastic, paper, and organic wastes, which makes recycling extremely difficult and increases landfill pollution.
        </Paragraph>
        <Heading2>2.2 VENTURE VISION AND MISSION</Heading2>
        <div className="grid grid-cols-2 gap-8 mt-6">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2 uppercase text-sm"><Target size={16}/> Vision</h4>
            <p className="text-sm italic text-slate-600">"To revolutionize waste management through intelligent automation, creating cleaner, healthier, and more sustainable communities worldwide."</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2 uppercase text-sm"><ShieldCheck size={16}/> Mission</h4>
            <p className="text-sm italic text-slate-600">"To develop and deploy affordable, reliable smart waste segregation systems that accurately classify and separate waste at the point of disposal."</p>
          </div>
        </div>
        
        <Heading2>2.3 TECHNOLOGY OVERVIEW</Heading2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm border border-slate-100">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Settings size={20}/></div>
            <div>
              <h4 className="font-bold text-slate-800">Arduino Uno Microcontroller</h4>
              <p className="text-sm text-slate-600">The central processing unit that receives signals from various sensors and controls the mechanical components.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm border border-slate-100">
            <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Lightbulb size={20}/></div>
            <div>
              <h4 className="font-bold text-slate-800">Infrared (IR) Sensors</h4>
              <p className="text-sm text-slate-600">Detects the presence of waste material near the bin opening to initiate the detection process.</p>
            </div>
          </div>
        </div>
      </ReportPage>

      {/* Page 5: Technology Continued */}
      <ReportPage pageNumber={5}>
        <div className="space-y-4 pt-8">
          <div className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm border border-slate-100">
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><CheckCircle2 size={20}/></div>
            <div>
              <h4 className="font-bold text-slate-800">Moisture Sensors</h4>
              <p className="text-sm text-slate-600">Identifies wet/organic waste by measuring water content in food scraps and organic matter.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm border border-slate-100">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600"><FileText size={20}/></div>
            <div>
              <h4 className="font-bold text-slate-800">Capacitive Sensors</h4>
              <p className="text-sm text-slate-600">Measures changes in capacitance to accurately identify plastic materials from other waste.</p>
            </div>
          </div>
        </div>

        <Heading2>2.4 COMPETITIVE ADVANTAGES</Heading2>
        <ul className="space-y-4 mt-4">
          <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-slate-700"><strong>Multi-sensor Integration:</strong> Higher accuracy than single-method bins.</span>
          </li>
          <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-slate-700"><strong>Cost-Effectiveness:</strong> Built on open-source Arduino platform.</span>
          </li>
          <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-slate-700"><strong>Scalability:</strong> Modular design for household or public use.</span>
          </li>
        </ul>
        
        <div className="mt-12">
          <WorkflowDiagram />
        </div>
      </ReportPage>

      {/* Page 6: Problem Statement & Solution */}
      <ReportPage pageNumber={6}>
        <Heading1>3. PROBLEM STATEMENT & SOLUTION CANVAS</Heading1>
        <Heading2>3.1 PROBLEM STATEMENT</Heading2>
        <Paragraph>
          Improper waste segregation leads to inefficient recycling and increased environmental pollution. The current waste management ecosystem faces several critical challenges:
        </Paragraph>
        <div className="space-y-6 mt-6">
          <div className="bg-red-50 p-5 rounded-xl border border-red-100">
            <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2"><AlertTriangle size={18}/> 3.1.1 Environmental Impact</h4>
            <p className="text-sm text-red-700">Mixed waste produces methane and greenhouse gases, accelerating climate change. Contamination prevents effective composting.</p>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2"><TrendingUp size={18}/> 3.1.2 Economic Inefficiency</h4>
            <p className="text-sm text-amber-700">Manual segregation is labor-intensive. Contaminated recyclables lose market value, representing significant economic losses.</p>
          </div>
        </div>

        <Heading2>3.2 SOLUTION CANVAS</Heading2>
        <Heading3>3.2.1 Proposed Solution</Heading3>
        <Paragraph>
          Our Smart Waste Segregation System provides an automated, intelligent solution that automatically classifies waste into appropriate categories (plastic, organic, paper, and other waste) using a combination of sensor technologies.
        </Paragraph>
        <Heading3>3.2.2 How It Works</Heading3>
        <Paragraph>
          The system operates through a sequential process: IR sensor detects presence → Moisture/Capacitive sensors analyze properties → Arduino processes data → Servo motor opens correct lid → LED feedback provided.
        </Paragraph>
      </ReportPage>

      {/* Page 7: IPR Strategy */}
      <ReportPage pageNumber={7}>
        <Heading1>4. IPR STRATEGY</Heading1>
        <Heading2>4.1 INTELLECTUAL PROPERTY OVERVIEW</Heading2>
        <Paragraph>
          Protecting our intellectual property is critical to maintaining competitive advantage. Our strategy encompasses patents, trademarks, trade secrets, and copyrights.
        </Paragraph>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="p-5 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs">Patent Strategy</h4>
            <p className="text-xs text-slate-600">Filing provisional patent for the multi-sensor integration algorithm and specific sensor configuration within 6 months.</p>
          </div>
          <div className="p-5 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs">Trademark Strategy</h4>
            <p className="text-xs text-slate-600">Registering product name and logo in all target markets to establish brand recognition and prevent unauthorized use.</p>
          </div>
          <div className="p-5 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs">Trade Secrets</h4>
            <p className="text-xs text-slate-600">Maintaining sensor calibration parameters and proprietary algorithms as internal trade secrets through NDAs.</p>
          </div>
          <div className="p-5 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs">Copyright</h4>
            <p className="text-xs text-slate-600">All software code, Arduino programming, and user interface components are protected under copyright law.</p>
          </div>
        </div>

        <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-blue-400"/> IP Defense Plan</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            We will conduct regular IP audits to identify potential infringement risks. Our legal team will monitor competitor activities and market developments to identify potential violations. We are prepared to defend our IP rights through litigation if necessary.
          </p>
        </div>
      </ReportPage>

      {/* Page 8: Team Structure */}
      <ReportPage pageNumber={8}>
        <Heading1>5. TEAM STRUCTURE</Heading1>
        <div className="space-y-6 mt-8">
          {[
            { n: "Noor Fathima.A", r: "Project Lead & Systems Integration", d: "Oversees overall project coordination, systems integration, and stakeholder management." },
            { n: "Safna Fathima.S.S", r: "Hardware Design & Sensor Integration", d: "Leads hardware development, circuit layouts, and sensor calibration." },
            { n: "Noorul Surumi.F", r: "Software Development & Arduino Programming", d: "Responsible for microcontroller programming and classification algorithms." },
            { n: "Amina.S", r: "Research & Documentation", d: "Conducts research, literature review, and maintains project documentation." },
            { n: "Muhammed Ramees.N", r: "Mechanical Design & Prototype Construction", d: "Manages mechanical design, lid mechanisms, and physical assembly." }
          ].map((member, i) => (
            <div key={i} className="flex gap-6 items-center bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                {member.n.charAt(0)}
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-slate-900 text-lg">{member.n}</h4>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">{member.r}</p>
                <p className="text-sm text-slate-600">{member.d}</p>
              </div>
            </div>
          ))}
        </div>
      </ReportPage>

      {/* Page 9: Customer & Market Analysis */}
      <ReportPage pageNumber={9}>
        <Heading1>6. CUSTOMER & MARKET ANALYSIS</Heading1>
        <Heading2>6.1 TARGET CUSTOMER SEGMENTS</Heading2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 text-sm mb-2 uppercase">Municipalities</h4>
            <p className="text-xs text-slate-600">Smart cities implementing automated waste management to reduce labor costs and meet regulations.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 text-sm mb-2 uppercase">Educational Institutions</h4>
            <p className="text-xs text-slate-600">Universities and schools aiming to educate students and maintain campus cleanliness.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 text-sm mb-2 uppercase">Commercial Complexes</h4>
            <p className="text-xs text-slate-600">Shopping malls and office buildings with high waste generation and sustainability goals.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 text-sm mb-2 uppercase">Residential Communities</h4>
            <p className="text-xs text-slate-600">Gated communities and apartment complexes looking to improve hygiene and reduce fees.</p>
          </div>
        </div>

        <Heading2>6.2 MARKET ANALYSIS</Heading2>
        <Paragraph>
          The global smart waste management market is experiencing significant growth, driven by urbanization and environmental regulations. The market is expected to grow at a CAGR of approximately 15-20% over the next five years.
        </Paragraph>
        
        <div className="mt-8 p-6 bg-blue-600 rounded-2xl text-white shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold uppercase tracking-widest text-sm">Market Trend Highlights</h4>
            <TrendingUp size={24} className="text-blue-200" />
          </div>
          <ul className="space-y-3 text-sm text-blue-50">
            <li className="flex items-center gap-2"><CheckCircle2 size={14}/> Increasing environmental awareness and regulations.</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={14}/> Government incentives for sustainable technologies (Swachh Bharat).</li>
            <li className="flex items-center gap-2"><CheckCircle2 size={14}/> Growing adoption of IoT and automation in public services.</li>
          </ul>
        </div>
      </ReportPage>

      {/* Page 10: Competitor Analysis */}
      <ReportPage pageNumber={10}>
        <Heading1>7. COMPETITOR ANALYSIS</Heading1>
        <Heading2>7.1 COMPETITIVE LANDSCAPE</Heading2>
        <Paragraph>
          The market includes traditional bin manufacturers and high-tech IoT providers. Our position is the "Affordable Automation" middle ground.
        </Paragraph>
        
        <div className="mt-8 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold">
              <tr>
                <th className="px-6 py-4 text-left">Feature</th>
                <th className="px-6 py-4 text-center">Traditional Bins</th>
                <th className="px-6 py-4 text-center bg-blue-50 text-blue-600">Our System</th>
                <th className="px-6 py-4 text-center">High-end IoT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 font-bold text-slate-700">Auto-Segregation</td>
                <td className="px-6 py-4 text-center text-red-500">No</td>
                <td className="px-6 py-4 text-center text-emerald-500 font-bold bg-blue-50/30">Yes</td>
                <td className="px-6 py-4 text-center text-emerald-500">Yes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-700">Cost</td>
                <td className="px-6 py-4 text-center text-emerald-500">Very Low</td>
                <td className="px-6 py-4 text-center text-blue-600 font-bold bg-blue-50/30">Medium</td>
                <td className="px-6 py-4 text-center text-red-500">Very High</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-700">Maintenance</td>
                <td className="px-6 py-4 text-center text-emerald-500">Zero</td>
                <td className="px-6 py-4 text-center text-blue-600 font-bold bg-blue-50/30">Low</td>
                <td className="px-6 py-4 text-center text-red-500">High</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-700">Standalone</td>
                <td className="px-6 py-4 text-center text-emerald-500">Yes</td>
                <td className="px-6 py-4 text-center text-emerald-500 font-bold bg-blue-50/30">Yes</td>
                <td className="px-6 py-4 text-center text-red-500">No (Cloud)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Heading2>7.4 SWOT ANALYSIS</Heading2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xs uppercase mb-2">Strengths</h4>
            <ul className="text-[10px] text-emerald-700 space-y-1">
              <li>• Affordable cost structure</li>
              <li>• Multi-sensor accuracy</li>
              <li>• Simple modular design</li>
            </ul>
          </div>
          <div className="p-5 bg-red-50 border border-red-100 rounded-xl">
            <h4 className="font-bold text-red-800 text-xs uppercase mb-2">Weaknesses</h4>
            <ul className="text-[10px] text-red-700 space-y-1">
              <li>• New entrant brand</li>
              <li>• Prototype stage</li>
              <li>• Limited capacity</li>
            </ul>
          </div>
        </div>
      </ReportPage>

      {/* Page 11: Business Model & Financials */}
      <ReportPage pageNumber={11}>
        <Heading1>8. BUSINESS MODEL & FINANCIAL PROJECTIONS</Heading1>
        <Heading2>8.1 BUSINESS MODEL</Heading2>
        <div className="space-y-4 mt-6">
          <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="bg-blue-600 text-white p-3 rounded-lg font-bold">₹</div>
            <div>
              <h4 className="font-bold text-slate-800">Direct Product Sales</h4>
              <p className="text-sm text-slate-600">Primary revenue from selling units to municipalities and institutions. Target price: ₹8,000-15,000 per unit.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="bg-emerald-600 text-white p-3 rounded-lg font-bold"><Settings size={20}/></div>
            <div>
              <h4 className="font-bold text-slate-800">Maintenance Contracts</h4>
              <p className="text-sm text-slate-600">Annual agreements covering sensor calibration and support. Projected at 10-15% of unit cost.</p>
            </div>
          </div>
        </div>

        <Heading2>8.2 FINANCIAL PROJECTIONS</Heading2>
        <div className="mt-6 border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-900 text-white p-4 font-bold text-center uppercase tracking-widest text-xs">Prototype Component Cost Breakdown</div>
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 font-bold text-[10px]">
              <tr>
                <th className="px-6 py-3 text-left">Component</th>
                <th className="px-6 py-3 text-right">Cost Range (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr><td className="px-6 py-3">Arduino Uno Microcontroller</td><td className="px-6 py-3 text-right font-mono">200 - 800</td></tr>
              <tr><td className="px-6 py-3">Sensor Suite (IR, Moisture, Cap)</td><td className="px-6 py-3 text-right font-mono">1,055 - 3,170</td></tr>
              <tr><td className="px-6 py-3">Servo Motors (x4 bins)</td><td className="px-6 py-3 text-right font-mono">400 - 800</td></tr>
              <tr><td className="px-6 py-3">LEDs, Circuitry & Wiring</td><td className="px-6 py-3 text-right font-mono">200 - 400</td></tr>
              <tr><td className="px-6 py-3">Dustbin Structure & Power</td><td className="px-6 py-3 text-right font-mono">600 - 1,400</td></tr>
              <tr className="bg-blue-50 font-bold text-blue-700">
                <td className="px-6 py-4">TOTAL COMPONENT COST</td>
                <td className="px-6 py-4 text-right font-mono">2,455 - 6,570</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ReportPage>

      {/* Page 12: Prototype Plan */}
      <ReportPage pageNumber={12}>
        <Heading1>9. PROTOTYPE DEVELOPMENT PLAN</Heading1>
        <div className="relative mt-10 ml-6 border-l-2 border-blue-200 pl-10 space-y-12">
          <div className="relative">
            <div className="absolute -left-[51px] top-0 w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow flex items-center justify-center text-white font-bold text-xs">1</div>
            <h4 className="font-bold text-slate-900 uppercase tracking-tighter">Phase 1: Concept Validation</h4>
            <p className="text-xs text-blue-600 font-bold mb-2">COMPLETED</p>
            <p className="text-sm text-slate-600">Literature review, component selection, and basic circuit design verified.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[51px] top-0 w-10 h-10 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold text-xs">2</div>
            <h4 className="font-bold text-slate-900 uppercase tracking-tighter">Phase 2: Functional Prototype</h4>
            <p className="text-xs text-amber-600 font-bold mb-2">CURRENT PHASE (2-3 Months)</p>
            <p className="text-sm text-slate-600">Integrating all sensors, implementing classification logic, and constructing the physical bin structure.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[51px] top-0 w-10 h-10 rounded-full bg-slate-200 border-4 border-white shadow flex items-center justify-center text-slate-500 font-bold text-xs">3</div>
            <h4 className="font-bold text-slate-900 uppercase tracking-tighter">Phase 3: Pilot Testing</h4>
            <p className="text-xs text-slate-400 font-bold mb-2">FUTURE (3-4 Months)</p>
            <p className="text-sm text-slate-600">Deployment at partner institutions (campus, office) to gather real-world usage data and performance metrics.</p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-6 uppercase tracking-widest text-center text-sm">Technical Specifications</h4>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-xs text-slate-500">Bin Capacity</span>
                <span className="text-xs font-bold text-slate-800">20-30 Liters</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-xs text-slate-500">Accuracy Target</span>
                <span className="text-xs font-bold text-slate-800">&gt; 90%</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-xs text-slate-500">Response Time</span>
                <span className="text-xs font-bold text-slate-800">&lt; 3 Seconds</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-xs text-slate-500">Power Usage</span>
                <span className="text-xs font-bold text-slate-800">&lt; 10 Watts</span>
              </div>
            </div>
          </div>
        </div>
      </ReportPage>

      {/* Page 13: Stakeholders */}
      <ReportPage pageNumber={13}>
        <Heading1>10. STAKEHOLDER ENGAGEMENT STRATEGY</Heading1>
        <Heading2>10.1 STAKEHOLDER IDENTIFICATION</Heading2>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3"><Users size={20}/></div>
            <h4 className="font-bold text-xs text-slate-800 mb-1">End Users</h4>
            <p className="text-[10px] text-slate-500">Primary users of the system. Adoption is critical for success.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3"><Target size={20}/></div>
            <h4 className="font-bold text-xs text-slate-800 mb-1">Municipalities</h4>
            <p className="text-[10px] text-slate-500">Potential customers and policy decision-makers.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3"><ShieldCheck size={20}/></div>
            <h4 className="font-bold text-xs text-slate-800 mb-1">Regulators</h4>
            <p className="text-[10px] text-slate-500">Set standards and provide funding/grants.</p>
          </div>
        </div>

        <Heading2>10.2 ENGAGEMENT METHODS</Heading2>
        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-slate-400 text-2xl">01</div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Surveys & Interviews</h4>
              <p className="text-xs text-slate-500">Understanding user needs and pain points through online questionnaires.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-slate-400 text-2xl">02</div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Demonstrations</h4>
              <p className="text-xs text-slate-500">Showcasing functionality at environmental technology exhibitions.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
            <div className="font-bold text-slate-400 text-2xl">03</div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Pilot Programs</h4>
              <p className="text-xs text-slate-500">Deploying prototypes at partner institutions for real-world validation.</p>
            </div>
          </div>
        </div>
      </ReportPage>

      {/* Page 14: Risk & Conclusion */}
      <ReportPage pageNumber={14}>
        <Heading1>11. RISK MANAGEMENT & CONCLUSION</Heading1>
        <Heading2>11.1 RISK IDENTIFICATION</Heading2>
        <div className="space-y-4 mt-6">
          <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-xl">
            <h4 className="font-bold text-red-800 text-sm">Technical Risk: Sensor Accuracy</h4>
            <p className="text-xs text-red-700 mt-1">Mitigation: Extensive testing with diverse samples and continuous algorithm improvement.</p>
          </div>
          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r-xl">
            <h4 className="font-bold text-amber-800 text-sm">Market Risk: Slow Adoption</h4>
            <p className="text-xs text-amber-700 mt-1">Mitigation: Flexible pricing models and pilot programs to demonstrate value.</p>
          </div>
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl">
            <h4 className="font-bold text-blue-800 text-sm">Operational Risk: Supply Chain</h4>
            <p className="text-xs text-blue-700 mt-1">Mitigation: Multiple supplier relationships and maintaining buffer inventory.</p>
          </div>
        </div>

        <Heading1>11.5 CONCLUSION</Heading1>
        <Paragraph>
          The Smart Waste Segregation Using Sensors project represents a practical, technology-driven solution to one of modern society's most pressing environmental challenges. Improper waste segregation contributes to pollution, inefficient resource utilization, and public health risks. Our automated system addresses these issues by eliminating human error, improving segregation accuracy, and making proper waste disposal convenient and hygienic.
        </Paragraph>
        <Paragraph>
          Our solution combines proven sensor technologies with Arduino-based microcontroller automation in an affordable, scalable package. The system demonstrates strong technical feasibility through our prototype development and testing. The market opportunity is substantial and growing, driven by urbanization, environmental regulations, and smart city initiatives.
        </Paragraph>
        
        <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-white text-center shadow-2xl">
          <h4 className="text-xl font-bold mb-2 uppercase tracking-widest">Final Statement</h4>
          <p className="text-sm text-blue-100 italic">"Transforming waste management through intelligent automation for a sustainable future."</p>
        </div>
      </ReportPage>

      {/* Page 15: Appendices */}
      <ReportPage pageNumber={15}>
        <Heading1>12. APPENDICES</Heading1>
        <Heading2>12.2 SYSTEM DIAGRAMS</Heading2>
        <Paragraph>
          The following diagrams illustrate the system architecture and detailed wiring of the Smart Waste Segregation System.
        </Paragraph>
        
        <div className="mt-8">
          <BlockDiagram />
        </div>
        
        <div className="mt-12">
          <CircuitDiagram />
        </div>
      </ReportPage>

      {/* Page 16: References */}
      <ReportPage pageNumber={16}>
        <Heading1>12.5 REFERENCES</Heading1>
        <div className="mt-10 space-y-6 px-8">
          {[
            "Elakkia Elumalai et al., 'Smart Waste Detection and Segregation,' 2021.",
            "Balapriya F et al., 'Enhanced Smart Waste Segregation and Management Using Arduino,' 2022.",
            "Muhammad Amirul Farhan & Amira Saryati, 'Smart Waste Bin with Automated Segregation System,' 2024.",
            "Shwetashree Vijay et al., 'Smart Waste Management System Using Arduino,' 2019.",
            "Government of India, Swachh Bharat Mission Guidelines and Reports.",
            "Ministry of Environment, Forest and Climate Change, Solid Waste Management Rules, 2016.",
            "Arduino Official Documentation and Community Resources.",
            "Various sensor manufacturer datasheets and technical specifications."
          ].map((ref, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="text-blue-600 font-bold text-sm">[{i+1}]</div>
              <p className="text-sm text-slate-700 leading-relaxed">{ref}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 flex flex-col items-center">
          <div className="w-48 h-px bg-slate-200 mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-[0.5em]">Thank You</h2>
          <p className="text-xs text-slate-400 mt-4 uppercase tracking-widest">End of Document</p>
        </div>
      </ReportPage>
    </div>
  );
}
