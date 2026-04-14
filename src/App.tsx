import React, { useRef } from 'react';
import { Printer, Download, FileText, Users, Lightbulb, ShieldCheck, Settings, TrendingUp, Target, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { CircuitDiagram } from './components/CircuitDiagram';

interface PageProps {
  children: React.ReactNode;
  pageNumber: number;
}

const ReportPage: React.FC<PageProps> = ({ children, pageNumber }) => (
  <div className="a4-page font-serif relative">
    {/* Blue top line like in the reference */}
    <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 no-print" />
    
    <div className="h-full flex flex-col">
      <div className="flex-grow">
        {children}
      </div>
      
      {/* Page Number */}
      <div className="text-center text-sm text-gray-500 mt-8">
        {pageNumber}
      </div>
    </div>
  </div>
);

const Heading1: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h1 id={id} className="text-[16pt] font-bold uppercase mb-4 mt-8 text-center">
    {children}
  </h1>
);

const Heading2: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h2 id={id} className="text-[14pt] font-bold uppercase mb-4 mt-6">
    {children}
  </h2>
);

const Heading3: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h3 id={id} className="text-[12pt] font-bold mb-3 mt-4">
    {children}
  </h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[12pt] leading-[2] mb-4 justified-text">
    {children}
  </p>
);

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-8 print:py-0">
      {/* Toolbar */}
      <div className="fixed top-4 right-4 flex gap-2 no-print z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Printer size={20} />
          Print to PDF
        </button>
      </div>

      {/* Cover Page */}
      <ReportPage pageNumber={1}>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="w-full h-1 bg-blue-600 mb-12" />
          
          <h1 className="text-3xl font-bold uppercase tracking-wider mb-4">
            SMART WASTE SEGREGATION USING SENSORS
          </h1>
          
          <div className="w-24 h-1 bg-gray-300 mb-8" />
          
          <p className="text-xl mb-16">Business Plan Report</p>
          
          <div className="w-full max-w-md mb-16 border border-gray-200 p-4 rounded-xl bg-gray-50">
             <img 
               src="https://picsum.photos/seed/waste/800/600" 
               alt="Smart Waste Bin Concept" 
               className="w-full h-auto rounded-lg shadow-sm"
               referrerPolicy="no-referrer"
             />
             <p className="text-xs text-gray-400 mt-2 italic">Sensor-Based Smart Waste Segregation System</p>
          </div>
          
          <div className="mt-auto w-full flex justify-end">
            <div className="text-right">
              <p className="font-bold mb-4">PRESENTED BY:</p>
              <ul className="space-y-1">
                <li>NOOR FATHIMA.A</li>
                <li>SAFNA FATHIMA.S.S</li>
                <li>NOORUL SURUMI.F</li>
                <li>AMINA.S</li>
                <li>MUHAMMED RAMEES.N</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-gray-500">
            March 30, 2026
          </div>
        </div>
      </ReportPage>

      {/* Table of Contents */}
      <ReportPage pageNumber={2}>
        <Heading1>TABLE OF CONTENTS</Heading1>
        <div className="mt-8 space-y-4 text-[12pt]">
          {[
            "1. EXECUTIVE SUMMARY",
            "2. INTRODUCTION & VENTURE OVERVIEW",
            "3. PROBLEM STATEMENT & SOLUTION CANVAS",
            "4. IPR STRATEGY",
            "5. TEAM STRUCTURE",
            "6. CUSTOMER & MARKET ANALYSIS",
            "7. COMPETITOR ANALYSIS",
            "8. BUSINESS MODEL & FINANCIAL PROJECTIONS",
            "9. PROTOTYPE DEVELOPMENT PLAN",
            "10. STAKEHOLDER ENGAGEMENT STRATEGY",
            "11. RISK MANAGEMENT & CONCLUSION",
            "12. APPENDICES"
          ].map((item, index) => (
            <div key={index} className="flex justify-between border-b border-dotted border-gray-300 pb-1">
              <span>{item}</span>
              <span>{index + 3}</span>
            </div>
          ))}
        </div>
      </ReportPage>

      {/* Chapter 1: Executive Summary */}
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
      </ReportPage>

      {/* Chapter 2: Introduction */}
      <ReportPage pageNumber={4}>
        <Heading1>2. INTRODUCTION & VENTURE OVERVIEW</Heading1>
        <Heading2>2.1 BACKGROUND AND CONTEXT</Heading2>
        <Paragraph>
          Waste management is a major environmental challenge in the modern society. The rapid population growth has dramatically increased the amount of daily waste products generated across urban and semi-urban areas. According to recent studies, improper waste disposal leads to the mixing of plastic, paper, and organic wastes, which makes recycling extremely difficult and increases landfill pollution. Mixed waste streams contaminate recyclable materials, rendering them unusable and forcing them into landfills where they contribute to environmental degradation.
        </Paragraph>
        <Heading2>2.2 VENTURE VISION AND MISSION</Heading2>
        <Paragraph>
          Our vision is to revolutionize waste management through intelligent automation, creating cleaner, healthier, and more sustainable communities worldwide. We envision a future where every household, institution, and public space has access to smart waste segregation technology, making proper waste disposal effortless and automatic.
        </Paragraph>
        <Paragraph>
          Our mission is to develop, manufacture, and deploy affordable, reliable smart waste segregation systems that use sensor technology and microcontroller automation to accurately classify and separate waste at the point of disposal.
        </Paragraph>
      </ReportPage>

      {/* Chapter 2 Continued */}
      <ReportPage pageNumber={5}>
        <Heading2>2.3 TECHNOLOGY OVERVIEW</Heading2>
        <div className="space-y-4">
          <Heading3>Arduino Uno Microcontroller</Heading3>
          <Paragraph>The central processing unit that receives signals from various sensors, processes the data using embedded algorithms, and controls the mechanical components.</Paragraph>
          
          <Heading3>Infrared (IR) Sensors</Heading3>
          <Paragraph>These sensors detect the presence of waste material near the bin opening. When an object approaches, the IR sensor sends a signal to the microcontroller to initiate the detection and classification process.</Paragraph>
          
          <Heading3>Moisture Sensors</Heading3>
          <Paragraph>These sensors detect the moisture content of waste materials, enabling the system to identify wet waste or organic materials such as food scraps.</Paragraph>
          
          <Heading3>Capacitive Sensors</Heading3>
          <Paragraph>These sensors detect plastic materials by measuring changes in capacitance when plastic objects are present, allowing accurate identification.</Paragraph>
        </div>
      </ReportPage>

      {/* Chapter 3: Problem Statement */}
      <ReportPage pageNumber={6}>
        <Heading1>3. PROBLEM STATEMENT & SOLUTION CANVAS</Heading1>
        <Heading2>3.1 PROBLEM STATEMENT</Heading2>
        <Paragraph>
          Improper waste segregation leads to inefficient recycling and increased environmental pollution, creating the need for an automated smart solution. The current waste management ecosystem faces several critical challenges:
        </Paragraph>
        <Heading3>3.1.1 Environmental Impact</Heading3>
        <Paragraph>
          Mixed waste streams contaminate recyclable materials, forcing them into landfills where they contribute to soil and water pollution. Organic waste mixed with inorganic materials produces methane and other greenhouse gases, accelerating climate change.
        </Paragraph>
        <Heading3>3.1.2 Economic Inefficiency</Heading3>
        <Paragraph>
          Manual waste segregation requires significant labor costs and infrastructure. Contaminated recyclable materials have reduced market value or become completely unusable, representing economic losses.
        </Paragraph>
      </ReportPage>

      {/* Chapter 5: Team Structure */}
      <ReportPage pageNumber={7}>
        <Heading1>5. TEAM STRUCTURE</Heading1>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <Heading3>5.1.1 Noor Fathima.A - Project Lead</Heading3>
            <Paragraph>Role: Oversees overall project coordination, systems integration, and stakeholder management.</Paragraph>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <Heading3>5.1.2 Safna Fathima.S.S - Hardware Design</Heading3>
            <Paragraph>Role: Leads hardware development and sensor system design. Responsibilities: Designing circuit layouts and hardware architecture.</Paragraph>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <Heading3>5.1.3 Noorul Surumi.F - Software Development</Heading3>
            <Paragraph>Role: Responsible for software development and microcontroller programming using Arduino IDE.</Paragraph>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <Heading3>5.1.4 Amina.S - Research</Heading3>
            <Paragraph>Role: Conducts research, literature review, and maintains project documentation.</Paragraph>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <Heading3>5.1.5 Muhammed Ramees.N - Mechanical Design</Heading3>
            <Paragraph>Role: Manages mechanical design and physical prototype construction, including lid mechanisms.</Paragraph>
          </div>
        </div>
      </ReportPage>

      {/* Chapter 8: Business Model */}
      <ReportPage pageNumber={8}>
        <Heading1>8. BUSINESS MODEL & FINANCIAL PROJECTIONS</Heading1>
        <Heading2>8.1 BUSINESS MODEL</Heading2>
        <Heading3>8.1.1 Revenue Streams</Heading3>
        <ul className="list-disc ml-8 space-y-2 text-[12pt] leading-[2]">
          <li><strong>Direct Product Sales:</strong> Selling units to municipalities and institutions (₹8,000-15,000 per unit).</li>
          <li><strong>Maintenance Contracts:</strong> Annual agreements covering sensor calibration and support.</li>
          <li><strong>Customization Services:</strong> Adapting systems for specific customer requirements.</li>
        </ul>
        
        <Heading2>8.2 FINANCIAL PROJECTIONS</Heading2>
        <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-[12pt]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left border-b">Component</th>
                <th className="px-4 py-2 text-right border-b">Cost Range (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-4 py-2 border-b">Arduino Uno</td><td className="px-4 py-2 text-right border-b">200 - 800</td></tr>
              <tr><td className="px-4 py-2 border-b">Sensors Array</td><td className="px-4 py-2 text-right border-b">1,055 - 3,170</td></tr>
              <tr><td className="px-4 py-2 border-b">Servo Motors (x4)</td><td className="px-4 py-2 text-right border-b">400 - 800</td></tr>
              <tr><td className="px-4 py-2 border-b">Structure & Power</td><td className="px-4 py-2 text-right border-b">600 - 1,400</td></tr>
              <tr className="font-bold bg-gray-50"><td className="px-4 py-2">Total Estimated Cost</td><td className="px-4 py-2 text-right">2,455 - 6,570</td></tr>
            </tbody>
          </table>
        </div>
      </ReportPage>

      {/* Chapter 12: Appendices & Diagrams */}
      <ReportPage pageNumber={9}>
        <Heading1>12. APPENDICES</Heading1>
        <Heading2>12.2 SYSTEM DIAGRAMS</Heading2>
        <Paragraph>
          The following diagram illustrates the detailed wiring and connections between the central Arduino Uno microcontroller and the various sensors and actuators used in the Smart Waste Segregation System.
        </Paragraph>
        
        <CircuitDiagram />
        
        <div className="mt-8">
          <Heading3>12.2.1 Workflow Logic</Heading3>
          <div className="flex flex-col items-center gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200">Waste Input</div>
              <div className="text-blue-400">→</div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200">IR Detection</div>
              <div className="text-blue-400">→</div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200">Sensor Analysis</div>
            </div>
            <div className="text-blue-400">↓</div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md">Arduino Processing</div>
            </div>
            <div className="text-blue-400">↓</div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200">Servo Activation</div>
              <div className="text-blue-400">→</div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-200">Segregated Bin</div>
            </div>
          </div>
        </div>
      </ReportPage>

      {/* Conclusion */}
      <ReportPage pageNumber={10}>
        <Heading1>11. CONCLUSION</Heading1>
        <Paragraph>
          The Smart Waste Segregation Using Sensors project represents a practical, technology-driven solution to one of modern society's most pressing environmental challenges. Improper waste segregation contributes to pollution, inefficient resource utilization, and public health risks. Our automated system addresses these issues by eliminating human error, improving segregation accuracy, and making proper waste disposal convenient and hygienic.
        </Paragraph>
        <Paragraph>
          Our solution combines proven sensor technologies with Arduino-based microcontroller automation in an affordable, scalable package. The system demonstrates strong technical feasibility through our prototype development and testing. The market opportunity is substantial and growing, driven by urbanization, environmental regulations, and smart city initiatives.
        </Paragraph>
        <div className="mt-16 flex flex-col items-center">
          <div className="w-32 h-px bg-gray-400 mb-4" />
          <p className="text-sm italic">End of Report</p>
          <p className="text-xs text-gray-400 mt-2">© 2026 Smart Waste Solutions Team</p>
        </div>
      </ReportPage>
    </div>
  );
}
