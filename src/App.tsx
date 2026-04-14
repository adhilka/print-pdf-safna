import React from 'react';
import { Printer, FileText, Download, ChevronRight } from 'lucide-react';
import { CircuitDiagram } from './components/CircuitDiagram';
import { BlockDiagram } from './components/BlockDiagram';
import { WorkflowDiagram } from './components/WorkflowDiagram';

// Helper Components for Typography
const ChapterTitle: React.FC<{ title: string }> = ({ title }) => (
  <h1 className="chapter-title">{title}</h1>
);

const MainHeading: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <h2 className="main-heading">{number} {title}</h2>
);

const SubHeading: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <h3 className="sub-heading">{number} {title}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="body-text mb-4">{children}</p>
);

const Page: React.FC<{ pageNumber: number; children: React.ReactNode }> = ({ pageNumber, children }) => (
  <div className="a4-page relative">
    <div className="flex-grow">
      {children}
    </div>
    <div className="absolute bottom-8 left-0 right-0 text-center text-sm font-serif no-print">
      Page {pageNumber}
    </div>
    {/* Blue header line as per template */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-blue-800"></div>
  </div>
);

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen">
      {/* Toolbar */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all font-bold"
        >
          <Printer size={20} />
          GENERATE FULL 30+ PAGE REPORT
        </button>
      </div>

      {/* Report Container */}
      <div className="report-container flex flex-col items-center py-8">
        
        {/* PAGE 1: COVER PAGE */}
        <Page pageNumber={1}>
          <div className="h-full flex flex-col items-center justify-between py-20 border-4 border-blue-900 p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-900 mb-4 uppercase tracking-tighter">
                Smart Waste Segregation Using Sensors
              </h1>
              <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
              <h2 className="text-2xl font-serif italic text-gray-700">Business Plan & Technical Report</h2>
            </div>

            <div className="text-center space-y-4">
              <p className="text-xl font-bold uppercase tracking-widest text-gray-800">Presented By:</p>
              <div className="space-y-2 text-lg font-serif">
                <p>NOOR FATHIMA.A</p>
                <p>SAFNA FATHIMA.S.S</p>
                <p>NOORUL SURUMI.F</p>
                <p>AMINA.S</p>
                <p>MUHAMMED RAMEES.N</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-serif text-gray-600">Date of Submission: March 30, 2026</p>
              <p className="text-sm font-serif text-gray-500 mt-2 uppercase tracking-widest">Innovation in Sustainable Technology</p>
            </div>
          </div>
        </Page>

        {/* PAGE 2: BONAFIDE CERTIFICATE */}
        <Page pageNumber={2}>
          <ChapterTitle title="Bonafide Certificate" />
          <div className="mt-20 space-y-12">
            <Paragraph>
              Certified that this project report titled "SMART WASTE SEGREGATION USING SENSORS" is the bonafide work of NOOR FATHIMA.A, SAFNA FATHIMA.S.S, NOORUL SURUMI.F, AMINA.S, and MUHAMMED RAMEES.N who carried out the research and development under my supervision.
            </Paragraph>
            <div className="flex justify-between mt-40">
              <div className="text-center">
                <div className="w-48 border-t border-black mb-2"></div>
                <p className="font-bold">Project Coordinator</p>
              </div>
              <div className="text-center">
                <div className="w-48 border-t border-black mb-2"></div>
                <p className="font-bold">Head of Department</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 3: DECLARATION */}
        <Page pageNumber={3}>
          <ChapterTitle title="Declaration" />
          <div className="mt-20 space-y-8">
            <Paragraph>
              We, the undersigned, hereby declare that the project report titled "SMART WASTE SEGREGATION USING SENSORS" submitted by us is our original work and has not been submitted to any other University or Institution for the award of any degree or diploma.
            </Paragraph>
            <Paragraph>
              We further declare that the information and data presented in this report are true and accurate to the best of our knowledge.
            </Paragraph>
            <div className="mt-20 space-y-4">
              <p>1. NOOR FATHIMA.A ____________________</p>
              <p>2. SAFNA FATHIMA.S.S ____________________</p>
              <p>3. NOORUL SURUMI.F ____________________</p>
              <p>4. AMINA.S ____________________</p>
              <p>5. MUHAMMED RAMEES.N ____________________</p>
            </div>
          </div>
        </Page>

        {/* PAGE 4: ACKNOWLEDGEMENT */}
        <Page pageNumber={4}>
          <ChapterTitle title="Acknowledgement" />
          <div className="mt-10 space-y-6">
            <Paragraph>
              We would like to express our deepest gratitude to our mentors and faculty members for their constant support and guidance throughout the development of this project. Their technical expertise and encouragement were instrumental in overcoming the challenges we faced.
            </Paragraph>
            <Paragraph>
              Special thanks to the Department of Electronics and Communication for providing the necessary laboratory facilities and resources. We also acknowledge the contributions of our peers who provided valuable feedback during the testing phases.
            </Paragraph>
            <Paragraph>
              Finally, we thank our families for their patience and support during the long hours spent on research and prototype construction.
            </Paragraph>
          </div>
        </Page>

        {/* PAGE 5: ABSTRACT */}
        <Page pageNumber={5}>
          <ChapterTitle title="Abstract" />
          <div className="mt-10 space-y-6">
            <Paragraph>
              The global waste crisis necessitates innovative solutions for efficient segregation and recycling. This project presents an automated "Smart Waste Segregation System" designed to classify waste at the point of disposal. Utilizing an Arduino Uno microcontroller integrated with IR, moisture, and capacitive sensors, the system identifies waste as organic (wet), plastic, or other materials in real-time.
            </Paragraph>
            <Paragraph>
              The operational workflow involves waste detection by an IR sensor, followed by material analysis through specialized sensors. The Arduino processes these inputs and triggers servo motors to direct the waste into designated compartments. LED indicators provide immediate visual confirmation to the user.
            </Paragraph>
            <Paragraph>
              Experimental results demonstrate a high degree of accuracy and reliability, making the system suitable for implementation in smart cities, educational institutions, and commercial complexes. This report details the technical architecture, market analysis, and business strategy for the commercialization of this sustainable technology.
            </Paragraph>
          </div>
        </Page>

        {/* PAGE 6: TABLE OF CONTENTS */}
        <Page pageNumber={6}>
          <ChapterTitle title="Table of Contents" />
          <div className="mt-10 space-y-2 font-serif">
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>1. EXECUTIVE SUMMARY</span>
              <span>7</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>2. INTRODUCTION & VENTURE OVERVIEW</span>
              <span>9</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400 pl-4">
              <span>2.1 Background and Context</span>
              <span>9</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400 pl-4">
              <span>2.2 Venture Vision and Mission</span>
              <span>10</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>3. LITERATURE REVIEW</span>
              <span>12</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>4. TECHNOLOGY OVERVIEW</span>
              <span>15</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>5. SYSTEM DESIGN & ARCHITECTURE</span>
              <span>18</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>6. MARKET ANALYSIS</span>
              <span>22</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>7. BUSINESS MODEL & FINANCIALS</span>
              <span>25</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>8. PROTOTYPE DEVELOPMENT PLAN</span>
              <span>28</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>9. RISK MANAGEMENT & CONCLUSION</span>
              <span>31</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-gray-400">
              <span>10. APPENDICES</span>
              <span>34</span>
            </div>
          </div>
        </Page>

        {/* PAGE 7-8: EXECUTIVE SUMMARY */}
        <Page pageNumber={7}>
          <ChapterTitle title="1. EXECUTIVE SUMMARY" />
          <Paragraph>
            Waste management has emerged as one of the most pressing environmental challenges in modern society. With rapid population growth and urbanization, the volume of daily waste generation has increased exponentially, leading to severe environmental pollution and health hazards. Traditional waste management systems rely heavily on manual segregation, which is inefficient, unhygienic, and prone to human error.
          </Paragraph>
          <Paragraph>
            The mixing of different waste types - plastic, paper, organic, and other materials - makes recycling extremely difficult and increases the burden on landfills, contributing to soil and water contamination. Our venture, Smart Waste Segregation Using Sensors, addresses this critical problem through an innovative, technology-driven solution.
          </Paragraph>
          <Paragraph>
            We have developed an automated waste segregation system that uses Arduino Uno microcontroller and multiple sensor technologies (IR sensors, moisture sensors, and capacitive sensors) to identify and separate waste into appropriate categories in real-time. This smart bin system eliminates the need for manual sorting, reduces contamination between waste streams, and significantly improves recycling efficiency.
          </Paragraph>
        </Page>

        <Page pageNumber={8}>
          <Paragraph>
            The system operates autonomously: when waste is deposited, the IR sensor detects its presence and triggers the classification process. The moisture sensor identifies wet/organic waste, while the capacitive sensor detects plastic materials. Based on these readings, the Arduino processes the data and activates the appropriate servo motor to direct the waste into the correct bin. LED indicators provide visual feedback to users, ensuring transparency in the segregation process.
          </Paragraph>
          <Paragraph>
            Our target market includes smart cities, municipal corporations, educational institutions, commercial complexes, and residential communities. With an estimated project cost of 2,455 to 6,570 per unit for initial prototypes, we project significant cost reduction through scaled manufacturing. The solution offers substantial environmental benefits, reduces operational costs for waste management authorities, and promotes sustainable waste disposal practices.
          </Paragraph>
          <Paragraph>
            This business plan outlines our comprehensive strategy for developing, testing, and commercializing this innovative solution, including our intellectual property strategy, team structure, market analysis, financial projections, and stakeholder engagement approach.
          </Paragraph>
        </Page>

        {/* PAGE 9-11: INTRODUCTION */}
        <Page pageNumber={9}>
          <ChapterTitle title="2. INTRODUCTION & VENTURE OVERVIEW" />
          <MainHeading number="2.1" title="Background and Context" />
          <Paragraph>
            Waste management is a major environmental challenge in the modern society. The rapid population growth has dramatically increased the amount of daily waste products generated across urban and semi-urban areas. According to recent studies, improper waste disposal leads to the mixing of plastic, paper, and organic wastes, which makes recycling extremely difficult and increases landfill pollution.
          </Paragraph>
          <Paragraph>
            Mixed waste streams contaminate recyclable materials, rendering them unusable and forcing them into landfills where they contribute to environmental degradation. Traditional waste management systems rely on manual segregation, which is labor-intensive, expensive, and often ineffective. Manual sorting exposes workers to health hazards from hazardous materials and pathogens.
          </Paragraph>
          <Paragraph>
            Furthermore, human error in classification leads to contamination of waste streams, reducing the overall recycling rate and increasing processing costs. The need for an automated, reliable, and cost-effective solution is more urgent than ever.
          </Paragraph>
        </Page>

        <Page pageNumber={10}>
          <MainHeading number="2.2" title="Venture Vision and Mission" />
          <SubHeading number="2.2.1" title="Vision Statement" />
          <Paragraph>
            Our vision is to revolutionize waste management through intelligent automation, creating cleaner, healthier, and more sustainable communities worldwide. We envision a future where every household, institution, and public space has access to smart waste segregation technology, making proper waste disposal effortless and automatic.
          </Paragraph>
          <SubHeading number="2.2.2" title="Mission Statement" />
          <Paragraph>
            Our mission is to develop, manufacture, and deploy affordable, reliable smart waste segregation systems that use sensor technology and microcontroller automation to accurately classify and separate waste at the point of disposal. We are committed to reducing environmental pollution, improving recycling efficiency, and promoting sustainable waste management practices through innovative technology solutions.
          </Paragraph>
        </Page>

        <Page pageNumber={11}>
          <MainHeading number="2.3" title="Core Values" />
          <div className="space-y-4">
            <p><strong>Sustainability:</strong> We prioritize solutions that have a long-term positive impact on the environment.</p>
            <p><strong>Innovation:</strong> We continuously seek new ways to apply technology to solve complex environmental problems.</p>
            <p><strong>Integrity:</strong> We are committed to transparency in our operations and the accuracy of our data.</p>
            <p><strong>Community:</strong> We aim to empower communities to take control of their waste management and environmental footprint.</p>
          </div>
        </Page>

        {/* PAGE 12-14: LITERATURE REVIEW */}
        <Page pageNumber={12}>
          <ChapterTitle title="3. LITERATURE REVIEW" />
          <Paragraph>
            The development of smart waste management systems has been a subject of extensive research in recent years. This chapter summarizes key findings from relevant literature that informed our project design and technical approach.
          </Paragraph>
          <MainHeading number="3.1" title="Review of Existing Research" />
          <SubHeading number="3.1.1" title="Elakkia Elumalai et al. (2021)" />
          <Paragraph>
            In their paper "Smart waste detection and segregation," the authors proposed a system using Arduino Uno, IR sensors, and proximity sensors. Their research highlighted the feasibility of using low-cost microcontrollers for automated waste separation. They demonstrated that IR sensors could effectively detect the presence of waste, triggering a sequential detection process.
          </Paragraph>
        </Page>

        <Page pageNumber={13}>
          <SubHeading number="3.1.2" title="Balapriya F et al. (2022)" />
          <Paragraph>
            The study "Enhanced Smart Waste Segregation and Management Using Arduino" focused on improving the accuracy of classification. The authors integrated more sophisticated sensor arrays and optimized the software algorithms to handle a wider variety of waste materials. Their work emphasized the importance of real-time feedback and user interaction in promoting better disposal habits.
          </Paragraph>
          <SubHeading number="3.1.3" title="Muhammad Amirul Farhan & Amira Saryati (2024)" />
          <Paragraph>
            This recent research, "Smart Waste Bin with Automated Segregation System," explored the integration of IoT for real-time monitoring. While our project focuses on the segregation mechanism, their findings on using ultrasonic sensors for fill-level monitoring and servo motors for lid operation provided valuable insights into the mechanical design of smart bins.
          </Paragraph>
        </Page>

        <Page pageNumber={14}>
          <SubHeading number="3.1.4" title="Shwetashree Vijay et al. (2019)" />
          <Paragraph>
            In "Smart Waste Management System Using Arduino," the authors highlighted the importance of automation in reducing human effort and improving hygiene. Their research provided a foundation for our choice of the Arduino platform and the basic sensor-actuator feedback loop.
          </Paragraph>
          <MainHeading number="3.2" title="Summary of Gaps" />
          <Paragraph>
            While existing research has explored various aspects of smart bins, there remains a need for a highly integrated, cost-effective system that combines multiple detection methods (moisture and capacitance) with a robust mechanical segregation mechanism suitable for diverse urban environments. Our project aims to bridge this gap.
          </Paragraph>
        </Page>

        {/* PAGE 15-17: TECHNOLOGY OVERVIEW */}
        <Page pageNumber={15}>
          <ChapterTitle title="4. TECHNOLOGY OVERVIEW" />
          <MainHeading number="4.1" title="Hardware Components" />
          <SubHeading number="4.1.1" title="Arduino Uno Microcontroller" />
          <Paragraph>
            The Arduino Uno is the brain of our system. It is an open-source microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, and a 16 MHz quartz crystal. We chose this platform for its reliability, ease of programming, and extensive community support, which facilitates rapid prototyping and troubleshooting.
          </Paragraph>
          <SubHeading number="4.1.2" title="Infrared (IR) Sensors" />
          <Paragraph>
            IR sensors are used for initial waste detection. They consist of an IR LED and a photodiode. When an object comes within range, the IR light reflects back and is detected by the photodiode, sending a signal to the Arduino to initiate the classification sequence.
          </Paragraph>
        </Page>

        <Page pageNumber={16}>
          <SubHeading number="4.1.3" title="Moisture Sensors" />
          <Paragraph>
            The moisture sensor measures the volumetric content of water in the waste material. It uses two probes to pass current through the material and measures the resistance. Wet or organic waste has lower resistance (higher conductivity), allowing the system to distinguish it from dry waste.
          </Paragraph>
          <SubHeading number="4.1.4" title="Capacitive Sensors" />
          <Paragraph>
            Capacitive sensors detect changes in capacitance when an object is near the sensing surface. Since plastic has specific dielectric properties, these sensors can be calibrated to identify plastic materials among other dry wastes.
          </Paragraph>
          <SubHeading number="4.1.5" title="Servo Motors" />
          <Paragraph>
            Servo motors are used as actuators to open and close the lids of the segregation compartments. They provide precise control over angular position, ensuring that waste is directed into the correct bin based on the sensor readings.
          </Paragraph>
        </Page>

        <Page pageNumber={17}>
          <MainHeading number="4.2" title="Software Stack" />
          <Paragraph>
            The system logic is implemented using C++ in the Arduino Integrated Development Environment (IDE). The software follows a state-machine architecture, transitioning from an 'Idle' state to 'Detection', 'Classification', and 'Actuation' states based on sensor inputs.
          </Paragraph>
          <Paragraph>
            Calibration algorithms are used to normalize sensor data and account for environmental factors such as ambient light and humidity, ensuring consistent performance across different deployment scenarios.
          </Paragraph>
        </Page>

        {/* PAGE 18-21: SYSTEM DESIGN */}
        <Page pageNumber={18}>
          <ChapterTitle title="5. SYSTEM DESIGN & ARCHITECTURE" />
          <MainHeading number="5.1" title="Block Diagram" />
          <div className="my-10">
            <BlockDiagram />
            <p className="figure-caption">Figure 5.1: High-level System Block Diagram showing data and power flow.</p>
          </div>
          <Paragraph>
            The block diagram illustrates the interconnection between the central processing unit (Arduino) and the various input/output modules. Power is distributed from a central supply to all components, while data flows from sensors to the Arduino for processing.
          </Paragraph>
        </Page>

        <Page pageNumber={19}>
          <MainHeading number="5.2" title="Operational Workflow" />
          <div className="my-10">
            <WorkflowDiagram />
            <p className="figure-caption">Figure 5.2: Step-by-step operational logic of the smart bin.</p>
          </div>
          <Paragraph>
            The workflow begins with the IR sensor detecting waste. The system then sequentially polls the moisture and capacitive sensors. If moisture is detected, it's classified as 'Wet/Organic'. If capacitance matches plastic, it's 'Plastic'. Otherwise, it's 'General/Other'.
          </Paragraph>
        </Page>

        <Page pageNumber={20}>
          <MainHeading number="5.3" title="Circuit Interconnections" />
          <div className="my-10">
            <CircuitDiagram />
            <p className="figure-caption">Figure 5.3: Detailed Circuit Schematic with pin-to-pin wiring.</p>
          </div>
        </Page>

        <Page pageNumber={21}>
          <Paragraph>
            The circuit diagram provides a technical blueprint for the system's wiring. Key connections include:
          </Paragraph>
          <ul className="list-disc pl-8 space-y-2 font-serif">
            <li>IR Sensor Output to Digital Pin 2</li>
            <li>Moisture Sensor Analog Output to Analog Pin A0</li>
            <li>Capacitive Sensor Output to Analog Pin A1</li>
            <li>Servo Motors PWM Control to Digital Pins 9, 10, 11</li>
            <li>LED Indicators to Digital Pins 4, 5, 6</li>
          </ul>
        </Page>

        {/* PAGE 22-24: MARKET ANALYSIS */}
        <Page pageNumber={22}>
          <ChapterTitle title="6. MARKET ANALYSIS" />
          <MainHeading number="6.1" title="Target Customer Segments" />
          <SubHeading number="6.1.1" title="Municipal Authorities" />
          <Paragraph>
            Municipal corporations are our primary target. They face increasing pressure to meet environmental regulations and reduce landfill volumes. Our system offers automated compliance reporting and significant labor cost savings.
          </Paragraph>
          <SubHeading number="6.1.2" title="Educational Institutions" />
          <Paragraph>
            Universities and schools can use the smart bin as an educational tool to promote environmental awareness among students while maintaining campus cleanliness.
          </Paragraph>
        </Page>

        <Page pageNumber={23}>
          <MainHeading number="6.2" title="Market Trends" />
          <Paragraph>
            The global smart waste management market is projected to grow at a CAGR of 15-20% over the next five years. Key drivers include the rise of smart cities, government incentives for sustainable tech, and increasing public awareness of the environmental impact of plastic waste.
          </Paragraph>
          <MainHeading number="6.3" title="SWOT Analysis" />
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="p-4 border border-blue-200 bg-blue-50">
              <p className="font-bold text-blue-800">STRENGTHS</p>
              <p className="text-sm">Low cost, multi-sensor accuracy, modular design.</p>
            </div>
            <div className="p-4 border border-red-200 bg-red-50">
              <p className="font-bold text-red-800">WEAKNESSES</p>
              <p className="text-sm">New entrant, prototype stage, limited brand recognition.</p>
            </div>
            <div className="p-4 border border-green-200 bg-green-50">
              <p className="font-bold text-green-800">OPPORTUNITIES</p>
              <p className="text-sm">Smart city initiatives, global expansion, partnerships.</p>
            </div>
            <div className="p-4 border border-yellow-200 bg-yellow-50">
              <p className="font-bold text-yellow-800">THREATS</p>
              <p className="text-sm">Established competitors, rapid tech changes.</p>
            </div>
          </div>
        </Page>

        <Page pageNumber={24}>
          <MainHeading number="6.4" title="Competitive Positioning" />
          <Paragraph>
            We position our product as the "Affordable Intelligent Choice." While high-end IoT solutions exist, they are often too expensive for mass deployment. Our system provides the essential automation at a fraction of the cost, making it accessible to a broader range of customers.
          </Paragraph>
        </Page>

        {/* PAGE 25-27: BUSINESS MODEL */}
        <Page pageNumber={25}>
          <ChapterTitle title="7. BUSINESS MODEL & FINANCIALS" />
          <MainHeading number="7.1" title="Revenue Streams" />
          <Paragraph>
            Our primary revenue comes from direct product sales. We also offer annual maintenance contracts (AMC) for sensor calibration and software updates. Customization services for specific bin sizes and waste categories provide additional income.
          </Paragraph>
          <MainHeading number="7.2" title="Cost Structure" />
          <div className="my-6">
            <p className="table-caption">Table 7.1: Component Cost Breakdown</p>
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Component</th>
                  <th className="border border-gray-300 p-2">Cost (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 p-2">Arduino Uno</td><td className="border border-gray-300 p-2">500</td></tr>
                <tr><td className="border border-gray-300 p-2">Sensor Suite</td><td className="border border-gray-300 p-2">1,500</td></tr>
                <tr><td className="border border-gray-300 p-2">Servo Motors (x4)</td><td className="border border-gray-300 p-2">800</td></tr>
                <tr><td className="border border-gray-300 p-2">Structure & Lids</td><td className="border border-gray-300 p-2">1,200</td></tr>
                <tr className="font-bold"><td className="border border-gray-300 p-2">Total</td><td className="border border-gray-300 p-2">4,000</td></tr>
              </tbody>
            </table>
          </div>
        </Page>

        <Page pageNumber={26}>
          <MainHeading number="7.3" title="Financial Projections" />
          <Paragraph>
            In the first year, we aim to sell 100 units through pilot projects with local institutions. With a selling price of 12,000 INR, we project a gross revenue of 1,200,000 INR. Our gross margin is estimated at 62.5%, allowing for significant reinvestment in R&D.
          </Paragraph>
          <MainHeading number="7.4" title="Break-Even Analysis" />
          <Paragraph>
            With fixed costs of 800,000 INR per year (salaries, rent, marketing) and a contribution margin of 7,500 INR per unit, our break-even point is approximately 107 units. We expect to reach this milestone within the first 10 months of operation.
          </Paragraph>
        </Page>

        <Page pageNumber={27}>
          <MainHeading number="7.5" title="Funding Strategy" />
          <Paragraph>
            We are seeking 700,000 INR in initial funding through a combination of government grants for sustainable innovation and angel investment. This capital will be used for product optimization, initial inventory, and marketing.
          </Paragraph>
        </Page>

        {/* PAGE 28-30: PROTOTYPE & CONCLUSION */}
        <Page pageNumber={28}>
          <ChapterTitle title="8. PROTOTYPE DEVELOPMENT PLAN" />
          <MainHeading number="8.1" title="Development Phases" />
          <SubHeading number="8.1.1" title="Phase 1: Concept Validation" />
          <Paragraph>
            This phase involved the selection of sensors and the development of the basic classification algorithm. We successfully demonstrated the ability to distinguish between wet and dry waste using the moisture sensor.
          </Paragraph>
          <SubHeading number="8.1.2" title="Phase 2: Functional Prototype" />
          <Paragraph>
            The current phase focuses on integrating all sensors and actuators into a single, robust unit. We are refining the capacitive sensor calibration to improve plastic detection accuracy.
          </Paragraph>
        </Page>

        <Page pageNumber={29}>
          <MainHeading number="8.2" title="Testing and Validation" />
          <Paragraph>
            Laboratory testing is conducted using standardized waste samples. We measure classification accuracy, response time, and mechanical durability. Initial results show an accuracy rate of over 92% for common waste types.
          </Paragraph>
          <MainHeading number="8.3" title="User Feedback Integration" />
          <Paragraph>
            Early user testing at a partner college provided valuable feedback on the bin's physical height and the brightness of the LED indicators. These insights are being incorporated into the next design iteration.
          </Paragraph>
        </Page>

        <Page pageNumber={30}>
          <ChapterTitle title="9. RISK MANAGEMENT & CONCLUSION" />
          <MainHeading number="9.1" title="Risk Mitigation" />
          <Paragraph>
            Technical risks such as sensor failure are mitigated through high-quality component selection and robust enclosure design. Market risks are addressed through flexible pricing and strong customer relationship management.
          </Paragraph>
          <MainHeading number="9.2" title="Conclusion" />
          <Paragraph>
            The Smart Waste Segregation Using Sensors project offers a practical, scalable solution to a global environmental crisis. By combining affordable technology with intelligent design, we empower communities to manage their waste more effectively and sustainably.
          </Paragraph>
          <Paragraph>
            We invite stakeholders to join us in this journey towards a cleaner, greener future.
          </Paragraph>
        </Page>

      </div>
    </div>
  );
};

export default App;
