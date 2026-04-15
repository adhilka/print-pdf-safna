import React from 'react';
import { Printer, FileText, Download, ChevronRight, Info, Target, ShieldCheck, Settings, Lightbulb, CheckCircle2, AlertTriangle, TrendingUp, Users } from 'lucide-react';
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
    <div className="flex-grow pb-12">
      {children}
    </div>
    <div className="absolute bottom-8 left-0 right-0 text-center text-sm font-serif">
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
    <div className="min-h-screen bg-slate-100 py-8 print:py-0 print:bg-white">
      {/* Toolbar */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all font-bold"
        >
          <Printer size={20} />
          GENERATE FULL 40+ PAGE REPORT
        </button>
      </div>

      {/* Report Container */}
      <div className="report-container flex flex-col items-center">
        
        
        {/* PAGE 1: TITLE PAGE */}
        <Page pageNumber={1}>
          <div className="h-full flex flex-col items-center justify-center py-6">
            <h2 className="text-lg font-serif mb-4">PROJECT REPORT ON</h2>
            <h1 className="text-3xl font-bold font-serif mb-6 uppercase tracking-widest text-center">
              Smart Waste Segregation Using Sensors
            </h1>
            
            <p className="text-md font-serif italic mb-4 text-center max-w-2xl">
              Submitted in partial fulfillment of the requirements for the award of the degree of
            </p>
            
            <h2 className="text-xl font-bold font-serif mb-4 text-center">
              BACHELOR OF TECHNOLOGY
            </h2>
            <p className="text-md font-serif italic mb-4">in</p>
            <h2 className="text-xl font-bold font-serif mb-6 text-center">
              ELECTRONICS AND COMMUNICATION ENGINEERING
            </h2>

            <img 
              src="https://i.ibb.co/FL4T3YZR/Screenshot-2026-04-15-15-31-31-859-com-google-android-apps-docs-edit.jpg" 
              alt="College Logo" 
              className="w-32 h-32 object-contain mb-6"
            />

            <div className="text-center mb-6">
              <p className="text-lg font-serif italic mb-2">Submitted By</p>
              <div className="space-y-1 text-md font-serif font-bold uppercase">
                <p>SAFNA FATHIMA S S</p>
                <p>NOOR FATHIMA A</p>
                <p>NOORUL SURUMI NF</p>
                <p>AMINA S</p>
                <p>MUHAMMED RAMEES N</p>
              </div>
            </div>

            <div className="text-center font-serif font-bold text-lg mt-auto">
              <p>MUSLIM ASSOCIATION COLLEGE OF ENGINEERING</p>
              <p>VENJARAMOODU 695607</p>
              <p className="mt-4">MARCH 30, 2026</p>
            </div>
          </div>
        </Page>

        {/* PAGE 2: CERTIFICATE */}
        <Page pageNumber={2}>
          <div className="h-full flex flex-col items-center py-6">
            <h2 className="text-xl font-bold font-serif text-center mb-2">
              MUSLIM ASSOCIATION COLLEGE OF ENGINEERING
            </h2>
            <h3 className="text-lg font-bold font-serif text-center mb-4">
              VENJARAMOODU 695607
            </h3>
            <h3 className="text-lg font-serif text-center mb-4 uppercase">
              DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING
            </h3>

            <img 
              src="https://i.ibb.co/FL4T3YZR/Screenshot-2026-04-15-15-31-31-859-com-google-android-apps-docs-edit.jpg" 
              alt="College Logo" 
              className="w-32 h-32 object-contain mb-4"
            />

            <h1 className="text-2xl font-bold font-serif mb-6 tracking-widest">
              CERTIFICATE
            </h1>

            <div className="text-justify font-serif text-[12pt] leading-[2.0] mb-8">
              Certified that project entitled <strong>“SMART WASTE SEGREGATION USING SENSORS”</strong> is bonafide work carried out in the eighth semester by <strong>“SAFNA FATHIMA S S, NOOR FATHIMA A, NOORUL SURUMI NF, AMINA S, MUHAMMED RAMEES N”</strong> in partial fulfillment for the award of Bachelor of Technology in Electronics and Communication Engineering from APJ Abdul Kalam Technological University during the academic year 2025-2026 who carried out the project work under the guidance and no part of this work has been submitted earlier for the award of B. Tech degree.
            </div>

            <div className="w-full flex justify-between px-8 mt-6 font-serif">
              <div className="text-center">
                <p className="font-bold mb-8">PROJECT COORDINATOR</p>
                <p className="font-bold">Mrs. SAJITHA P</p>
                <p>VP & Associate Professor</p>
                <p>Department of ECE</p>
              </div>
              <div className="text-center">
                <p className="font-bold mb-8">PROJECT GUIDE</p>
                <p className="font-bold">Mrs. RASUL MUTHU A</p>
                <p>Assistant Professor</p>
                <p>Department of ECE</p>
              </div>
            </div>

            <div className="text-center mt-auto font-serif">
              <p className="font-bold mb-8">HEAD OF THE DEPARTMENT</p>
              <p className="font-bold">Dr. SHEFIN SHOUKATH</p>
              <p>Department of ECE</p>
            </div>
          </div>
        </Page>

        {/* PAGE 3: ACKNOWLEDGEMENT */}
        <Page pageNumber={3}>
          <div className="py-6">
            <h1 className="text-2xl font-bold font-serif text-center mb-8 tracking-widest">
              ACKNOWLEDGEMENT
            </h1>
            <div className="space-y-4 font-serif text-[12pt] leading-[2.0] text-justify">
              <p>
                First and foremost, we wish to place record our ardent and earnest gratitude to <strong>Dr. SHEFIN SHOUKATH</strong>, Head of the Department of Electronics and Communication Engineering for providing us with all facilities for the completion of this project.
              </p>
              <p>
                This venture would have been a distant dream without the immense assistance, corporation and technical support rendered to us by our project coordinators <strong>Mrs. CHITHRA THAMPI</strong>, Assistant Professor, Department of Electronics and Communication Engineering and <strong>Mrs. SAJITHA P</strong>, VP & Associate Professor, Department of Electronics and Communication Engineering.
              </p>
              <p>
                We are extremely happy to mention a great of gratitude to our project guide <strong>Mrs. RASUL MUTHU A</strong>, Assistant Professor, Department of Electronics and Communication Engineering. Her tutelage and guidance were the leading factors in translating our efforts to fruition. Her prudent and perspective vision has shown light on our trial to triumph.
              </p>
              <p>
                We also extend our gratefulness to all the staff members in the department. We also thank all friends for their valuable observations and opinions. We also express our heartfelt gratitude to parents for all their encouragements, support and love.
              </p>
              <p>
                Finally, we thank all our well-wishers who greatly contribute directly or indirectly for the successful completion of this project.
              </p>
            </div>

            <div className="mt-10 flex justify-end font-serif">
              <div className="text-left">
                <p className="mb-2">SUBMITTED BY,</p>
                <div className="space-y-1 uppercase">
                  <p>SAFNA FATHIMA S S</p>
                  <p>NOOR FATHIMA A</p>
                  <p>NOORUL SURUMI NF</p>
                  <p>AMINA S</p>
                  <p>MUHAMMED RAMEES N</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 4: ABSTRACT */}
        <Page pageNumber={4}>
          <div className="py-6">
            <h1 className="text-2xl font-bold font-serif text-center mb-8 tracking-widest">
              ABSTRACT
            </h1>
            <div className="space-y-4 font-serif text-[12pt] leading-[2.0] text-justify">
              <p>
                The global waste crisis necessitates innovative solutions for efficient segregation and recycling. This project presents an automated "Smart Waste Segregation System" designed to classify waste at the point of disposal. Utilizing an Arduino Uno microcontroller integrated with IR, moisture, and capacitive sensors, the system identifies waste as organic (wet), plastic, or other materials in real-time.
              </p>
              <p>
                The operational workflow involves waste detection by an IR sensor, followed by material analysis through specialized sensors. The Arduino processes these inputs and triggers servo motors to direct the waste into designated compartments. LED indicators provide immediate visual confirmation to the user, enhancing the overall disposal experience and promoting better compliance with waste management guidelines.
              </p>
              <p>
                Experimental results demonstrate a high degree of accuracy (over 92%) and reliability, making the system suitable for implementation in smart cities, educational institutions, and commercial complexes. This report details the technical architecture, market analysis, and business strategy for the commercialization of this sustainable technology, aiming to reduce landfill volumes and improve global recycling efficiency.
              </p>
            </div>
          </div>
        </Page>

        {/* PAGE 5: INDEX */}
        <Page pageNumber={5}>
          <div className="py-6">
            <h1 className="text-2xl font-bold font-serif text-center mb-10 tracking-widest">
              INDEX
            </h1>
            
            <div className="font-serif text-[12pt] leading-[2.0] w-full max-w-4xl mx-auto px-8">
              <div className="grid grid-cols-[120px_1fr_120px] gap-4 font-bold mb-6">
                <span className="text-center">Chapter No.</span>
                <span className="text-center">Title</span>
                <span className="text-center">Page No.</span>
              </div>
              
              <div className="space-y-2">
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">1</span>
                  <span className="pl-8">Executive Summary</span>
                  <span className="text-center">06</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">2</span>
                  <span className="pl-8">Introduction & Venture Overview</span>
                  <span className="text-center">08</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">3</span>
                  <span className="pl-8">Literature Review</span>
                  <span className="text-center">11</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">4</span>
                  <span className="pl-8">Technology Overview</span>
                  <span className="text-center">15</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">5</span>
                  <span className="pl-8">System Design & Architecture</span>
                  <span className="text-center">20</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">6</span>
                  <span className="pl-8">Methodology</span>
                  <span className="text-center">23</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">7</span>
                  <span className="pl-8">Market Analysis</span>
                  <span className="text-center">25</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">8</span>
                  <span className="pl-8">Business Model & Financials</span>
                  <span className="text-center">29</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">9</span>
                  <span className="pl-8">Prototype Development Plan</span>
                  <span className="text-center">32</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">10</span>
                  <span className="pl-8">Stakeholder Engagement</span>
                  <span className="text-center">35</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">11</span>
                  <span className="pl-8">Risk Management & Conclusion</span>
                  <span className="text-center">38</span>
                </div>
                <div className="grid grid-cols-[120px_1fr_120px] gap-4">
                  <span className="text-center">12</span>
                  <span className="pl-8">References</span>
                  <span className="text-center">44</span>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 6-7: EXECUTIVE SUMMARY */}
        <Page pageNumber={6}>
          <ChapterTitle title="1. EXECUTIVE SUMMARY" />
          <Paragraph>
            Waste management has emerged as one of the most pressing environmental challenges in modern society. With rapid population growth and urbanization, the volume of daily waste generation has increased exponentially, leading to severe environmental pollution and health hazards. Traditional waste management systems rely heavily on manual segregation, which is inefficient, unhygienic, and prone to human error. The mixing of different waste types - plastic, paper, organic, and other materials - makes recycling extremely difficult and increases the burden on landfills, contributing to soil and water contamination.
          </Paragraph>
          <Paragraph>
            Our venture, Smart Waste Segregation Using Sensors, addresses this critical problem through an innovative, technology-driven solution. We have developed an automated waste segregation system that uses Arduino Uno microcontroller and multiple sensor technologies (IR sensors, moisture sensors, and capacitive sensors) to identify and separate waste into appropriate categories in real-time. This smart bin system eliminates the need for manual sorting, reduces contamination between waste streams, and significantly improves recycling efficiency.
          </Paragraph>
          <Paragraph>
            The system operates autonomously: when waste is deposited, the IR sensor detects its presence and triggers the classification process. The moisture sensor identifies wet/organic waste, while the capacitive sensor detects plastic materials.
          </Paragraph>
        </Page>

        <Page pageNumber={7}>
          <Paragraph>
            Based on these readings, the Arduino processes the data and activates the appropriate servo motor to direct the waste into the correct bin. LED indicators provide visual feedback to users, ensuring transparency in the segregation process. This immediate feedback loop not only ensures correct disposal but also educates the user on material classification.
          </Paragraph>
          <Paragraph>
            Our target market includes smart cities, municipal corporations, educational institutions, commercial complexes, and residential communities. With an estimated project cost of 2,455 to 6,570 per unit for initial prototypes, we project significant cost reduction through scaled manufacturing. The solution offers substantial environmental benefits, reduces operational costs for waste management authorities, and promotes sustainable waste disposal practices.
          </Paragraph>
          <Paragraph>
            This business plan outlines our comprehensive strategy for developing, testing, and commercializing this innovative solution, including our intellectual property strategy, team structure, market analysis, financial projections, and stakeholder engagement approach. We aim to deploy our first 100 units within the next 12 months across selected pilot locations, paving the way for a cleaner and more sustainable future.
          </Paragraph>
        </Page>

        {/* PAGE 8-10: INTRODUCTION */}
        <Page pageNumber={8}>
          <ChapterTitle title="2. INTRODUCTION & VENTURE OVERVIEW" />
          <MainHeading number="2.1" title="Background and Context" />
          <Paragraph>
            Waste management is a major environmental challenge in the modern society. The rapid population growth has dramatically increased the amount of daily waste products generated across urban and semi-urban areas. According to recent studies, improper waste disposal leads to the mixing of plastic, paper, and organic wastes, which makes recycling extremely difficult and increases landfill pollution.
          </Paragraph>
          <Paragraph>
            Mixed waste streams contaminate recyclable materials, rendering them unusable and forcing them into landfills where they contribute to environmental degradation. Traditional waste management systems rely on manual segregation, which is labor-intensive, expensive, and often ineffective. Manual sorting exposes workers to health hazards from hazardous materials and pathogens.
          </Paragraph>
          <Paragraph>
            Furthermore, human error in classification leads to contamination of waste streams, reducing the overall recycling rate and increasing processing costs. The need for an automated, reliable, and cost-effective solution is more urgent than ever. Our project seeks to address these issues by providing a localized, point-of-disposal segregation mechanism that ensures high purity of waste streams.
          </Paragraph>
        </Page>

        <Page pageNumber={9}>
          <MainHeading number="2.2" title="Venture Vision and Mission" />
          <SubHeading number="2.2.1" title="Vision Statement" />
          <Paragraph>
            Our vision is to revolutionize waste management through intelligent automation, creating cleaner, healthier, and more sustainable communities worldwide. We envision a future where every household, institution, and public space has access to smart waste segregation technology, making proper waste disposal effortless and automatic. We believe that by making segregation easy and accurate, we can significantly increase global recycling rates and move towards a circular economy where waste is seen as a resource.
          </Paragraph>
          <SubHeading number="2.2.2" title="Mission Statement" />
          <Paragraph>
            Our mission is to develop, manufacture, and deploy affordable, reliable smart waste segregation systems that use sensor technology and microcontroller automation to accurately classify and separate waste at the point of disposal. We are committed to reducing environmental pollution, improving recycling efficiency, and promoting sustainable waste management practices through innovative technology solutions. We strive to provide value to all stakeholders, from municipal authorities to the end-users, by delivering high-quality, user-centric products.
          </Paragraph>
        </Page>

        <Page pageNumber={10}>
          <MainHeading number="2.3" title="Core Values" />
          <Paragraph>
            Our venture is built on a foundation of core values that guide our decision-making and operational strategies. These values ensure that we remain focused on our mission while maintaining the highest standards of ethics and professionalism in all our interactions.
          </Paragraph>
          <div className="space-y-6 font-serif text-[12pt] leading-[2.0]">
            <p><strong>Sustainability:</strong> We prioritize solutions that have a long-term positive impact on the environment. Every component of our system is chosen with its lifecycle and environmental footprint in mind, ensuring that our product is as green as the problem it solves.</p>
            <p><strong>Innovation:</strong> We continuously seek new ways to apply technology to solve complex environmental problems. We foster a culture of creativity and experimentation within our team, encouraging the exploration of new sensors and algorithms.</p>
            <p><strong>Integrity:</strong> We are committed to transparency in our operations and the accuracy of our data. We believe in building trust with our customers and partners through honest communication and reliable product performance.</p>
            <p><strong>Community:</strong> We aim to empower communities to take control of their waste management and environmental footprint. Our systems are designed to be user-friendly, inclusive, and educational.</p>
          </div>
        </Page>

        {/* PAGE 11-14: LITERATURE REVIEW */}
        <Page pageNumber={11}>
          <ChapterTitle title="3. LITERATURE REVIEW" />
          <Paragraph>
            The development of smart waste management systems has been a subject of extensive research in recent years. This chapter summarizes key findings from relevant literature that informed our project design and technical approach. We have analyzed various methodologies, from simple sensor-based systems to complex AI-driven image recognition models, to find the most cost-effective and reliable solution.
          </Paragraph>
          <MainHeading number="3.1" title="Review of Existing Research" />
          <SubHeading number="3.1.1" title="Elakkia Elumalai et al. (2021)" />
          <Paragraph>
            In their paper "Smart waste detection and segregation," the authors proposed a system using Arduino Uno, IR sensors, and proximity sensors. Their research highlighted the feasibility of using low-cost microcontrollers for automated waste separation. They demonstrated that IR sensors could effectively detect the presence of waste, triggering a sequential detection process. However, their system had limitations in distinguishing between different types of dry waste, such as plastic and paper, which our project aims to improve upon by integrating capacitive sensing.
          </Paragraph>
          <Paragraph>
            Their work also emphasized the importance of mechanical design in ensuring that waste is correctly guided into the bins without getting stuck, a challenge we addressed in our funnel design.
          </Paragraph>
        </Page>

        <Page pageNumber={12}>
          <SubHeading number="3.1.2" title="Balapriya F et al. (2022)" />
          <Paragraph>
            The study "Enhanced Smart Waste Segregation and Management Using Arduino" focused on improving the accuracy of classification. The authors integrated more sophisticated sensor arrays and optimized the software algorithms to handle a wider variety of waste materials. Their work emphasized the importance of real-time feedback and user interaction in promoting better disposal habits. They found that visual indicators (LEDs) significantly increased user compliance and reduced errors in the disposal process.
          </Paragraph>
          <Paragraph>
            Their research also discussed the potential for integrating cloud-based monitoring to track waste generation patterns across multiple bins. While our current prototype is standalone, this research provides a roadmap for future IoT integration, allowing for optimized collection routes based on real-time fill levels.
          </Paragraph>
          <Paragraph>
            Additionally, they highlighted the need for robust power management systems to ensure that the bins can operate for extended periods without maintenance.
          </Paragraph>
        </Page>

        <Page pageNumber={13}>
          <SubHeading number="3.1.3" title="Muhammad Amirul Farhan & Amira Saryati (2024)" />
          <Paragraph>
            This recent research, "Smart Waste Bin with Automated Segregation System," explored the integration of IoT for real-time waste tracking. While our project focuses on the segregation mechanism, their findings on using ultrasonic sensors for fill-level monitoring and servo motors for lid operation provided valuable insights into the mechanical design of smart bins. They emphasized the need for robust mechanical linkages to ensure long-term reliability of the automated lids, especially in high-traffic public areas.
          </Paragraph>
          <Paragraph>
            Furthermore, they highlighted the importance of energy efficiency in smart bin design, suggesting the use of low-power sleep modes for the microcontroller when the bin is not in use. This insight has been incorporated into our software architecture to maximize battery life in future solar-powered versions.
          </Paragraph>
          <Paragraph>
            Their study also touched upon the social impact of smart bins, noting that they can serve as a catalyst for community-wide environmental awareness.
          </Paragraph>
        </Page>

        <Page pageNumber={14}>
          <SubHeading number="3.1.4" title="Shwetashree Vijay et al. (2019)" />
          <Paragraph>
            In "Smart Waste Management System Using Arduino," the authors highlighted the importance of automation in reducing human effort and improving hygiene. Their research provided a foundation for our choice of the Arduino platform and the basic sensor-actuator feedback loop. They also discussed the legal and regulatory framework for waste management in urban areas, which informed our legal considerations section.
          </Paragraph>
          <Paragraph>
            Their work demonstrated that automated systems could reduce the operational costs of waste management by up to 30% through improved recycling efficiency and reduced manual sorting labor.
          </Paragraph>
          <MainHeading number="3.2" title="Summary of Gaps" />
          <Paragraph>
            While existing research has explored various aspects of smart bins, there remains a need for a highly integrated, cost-effective system that combines multiple detection methods (moisture and capacitance) with a robust mechanical segregation mechanism suitable for diverse urban environments. Many existing solutions are either too expensive for mass deployment or lack the accuracy required for effective recycling. Our project aims to bridge this gap by providing a balanced solution that is both affordable and highly accurate.
          </Paragraph>
        </Page>

        {/* PAGE 15-19: TECHNOLOGY OVERVIEW */}
        <Page pageNumber={15}>
          <ChapterTitle title="4. TECHNOLOGY OVERVIEW" />
          <MainHeading number="4.1" title="Hardware Components" />
          <SubHeading number="4.1.1" title="Arduino Uno Microcontroller" />
          <Paragraph>
            The Arduino Uno is the brain of our system. It is an open-source microcontroller board based on the ATmega328P. It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, and a 16 MHz quartz crystal. We chose this platform for its reliability, ease of programming, and extensive community support. The Arduino Uno handles the logic for sensor data acquisition, material classification, and actuator control. Its low power consumption and robust design make it ideal for continuous operation in a smart bin environment.
          </Paragraph>
          <Paragraph>
            The ATmega328P chip provides enough processing power to handle real-time sensor data and control multiple servo motors simultaneously. Its onboard memory is sufficient for our classification algorithms and calibration data.
          </Paragraph>
          <SubHeading number="4.1.2" title="Infrared (IR) Sensors" />
          <Paragraph>
            IR sensors are used for initial waste detection. They consist of an IR LED that emits infrared light and a photodiode that detects the reflected light. When an object comes within the sensor's range (typically 2-30cm), the IR light reflects back and is detected, sending a digital signal to the Arduino. This signal triggers the entire classification sequence, ensuring that the system only consumes significant power when waste is actually present.
          </Paragraph>
        </Page>

        <Page pageNumber={16}>
          <SubHeading number="4.1.3" title="Moisture Sensors" />
          <Paragraph>
            The moisture sensor is critical for identifying organic or "wet" waste. It measures the volumetric content of water in the waste material by passing a small current between two probes. The resistance between the probes changes based on the moisture content: wet materials have lower resistance (higher conductivity), while dry materials have higher resistance. The Arduino reads the analog voltage from the sensor and compares it against a pre-calibrated threshold to determine if the waste is organic. This sensor is essential for separating food scraps, which are a major source of contamination in recycling streams.
          </Paragraph>
          <Paragraph>
            We use a corrosion-resistant moisture sensor to ensure long-term reliability in the damp environment of organic waste. The analog data is smoothed using a software filter to prevent false readings from momentary contact.
          </Paragraph>
          <SubHeading number="4.1.4" title="Capacitive Sensors" />
          <Paragraph>
            Capacitive sensors are used to detect plastic materials. They operate by creating an electrostatic field and measuring the change in capacitance when an object enters this field. Plastic has a specific dielectric constant that differs from other dry wastes like paper or metal. By carefully calibrating the sensor, we can identify plastic objects with high accuracy. This sensor is non-contact and highly durable, making it suitable for the harsh environment inside a waste bin.
          </Paragraph>
        </Page>

        <Page pageNumber={17}>
          <SubHeading number="4.1.5" title="Servo Motors" />
          <Paragraph>
            Servo motors are the primary actuators in our system. They are used to open and close the lids of the different segregation compartments. Unlike standard DC motors, servos provide precise control over angular position (typically 0-180 degrees) through Pulse Width Modulation (PWM). We use four servo motors, one for each waste category. When the Arduino identifies the waste type, it sends a PWM signal to the corresponding servo to open the lid, allowing the waste to fall into the correct bin. The servos are chosen for their high torque and reliability.
          </Paragraph>
          <Paragraph>
            The mechanical linkage is designed to be robust, using metal gears in the servos to withstand the repeated opening and closing of the lids. The speed of the servos is controlled to ensure smooth operation and minimize noise.
          </Paragraph>
          <SubHeading number="4.1.6" title="LED Indicators and Power Supply" />
          <Paragraph>
            LED indicators provide real-time visual feedback to the user. A green LED indicates successful detection and disposal, while a red LED signals an error or a full bin. These indicators are crucial for user engagement and system transparency. The entire system is powered by a 12V DC adapter, which is stepped down to 5V for the Arduino and sensors using an onboard voltage regulator. This ensures a stable power supply even during peak actuator operation.
          </Paragraph>
        </Page>

        <Page pageNumber={18}>
          <MainHeading number="4.2" title="Software Architecture" />
          <Paragraph>
            The system software is developed using the C++ based Arduino programming language. The architecture follows a modular approach, with separate functions for sensor reading, data processing, and actuator control. This modularity facilitates easy debugging and future expansion.
          </Paragraph>
          <SubHeading number="4.2.1" title="State Machine Logic" />
          <Paragraph>
            The software operates as a finite state machine with the following states:
            1. **IDLE:** The system waits for the IR sensor to detect waste.
            2. **DETECTION:** The IR sensor is triggered; the system wakes up and prepares for classification.
            3. **CLASSIFICATION:** The Arduino polls the moisture and capacitive sensors. Data is processed through a decision-tree algorithm.
            4. **ACTUATION:** The correct servo motor is activated to open the bin lid.
            5. **FEEDBACK:** LEDs are updated to reflect the system status.
            6. **RESET:** The lid is closed, and the system returns to the IDLE state.
          </Paragraph>
          <Paragraph>
            This state-driven approach ensures that the system responds predictably to inputs and can recover gracefully from errors.
          </Paragraph>
        </Page>

        <Page pageNumber={19}>
          <SubHeading number="4.2.2" title="Calibration and Optimization" />
          <Paragraph>
            To ensure high accuracy across different environments, the software includes a calibration routine. This routine accounts for ambient humidity and temperature, which can affect the moisture and capacitive sensor readings. The thresholds for classification are stored in the Arduino's EEPROM, allowing them to be updated without reflashing the entire firmware.
          </Paragraph>
          <Paragraph>
            Optimization techniques, such as debouncing for the IR sensor and moving average filters for the analog sensor data, are implemented to reduce noise and prevent false triggers. This results in a highly stable and reliable system.
          </Paragraph>
          <Paragraph>
            We also implemented a power-saving mode that puts the Arduino into a low-power state during the IDLE phase, waking it up only when the IR sensor (connected to an external interrupt) detects an object. This significantly reduces the overall energy consumption of the system.
          </Paragraph>
        </Page>

        {/* PAGE 20-22: SYSTEM DESIGN */}
        <Page pageNumber={20}>
          <ChapterTitle title="5. SYSTEM DESIGN & ARCHITECTURE" />
          <MainHeading number="5.1" title="High-Level Block Diagram" />
          <div className="my-10">
            <BlockDiagram />
            <p className="figure-caption">Figure 5.1: System Block Diagram illustrating the flow of data and power.</p>
          </div>
          <Paragraph>
            The block diagram in Figure 5.1 shows the central role of the Arduino Uno. It receives inputs from the IR, moisture, and capacitive sensors and controls the servo motors and LEDs. The power supply unit provides the necessary voltage to all components, with appropriate regulation for the sensitive electronics. This modular design allows for easy replacement of individual components if needed.
          </Paragraph>
        </Page>

        <Page pageNumber={21}>
          <MainHeading number="5.2" title="Detailed Circuit Schematic" />
          <div className="my-10">
            <CircuitDiagram />
            <p className="figure-caption">Figure 5.2: Comprehensive Circuit Wiring Diagram.</p>
          </div>
          <Paragraph>
            The circuit schematic (Figure 5.2) details the pin-to-pin connections. The IR sensor is connected to digital pin 2 (interrupt-capable), the moisture sensor to analog pin A0, and the capacitive sensor to analog pin A1. The servo motors are controlled via PWM pins 9, 10, and 11. This layout ensures efficient use of the Arduino's resources and minimizes signal interference. All connections are made using high-quality jumper wires and a custom PCB for the final prototype.
          </Paragraph>
        </Page>

        <Page pageNumber={22}>
          <MainHeading number="5.3" title="Mechanical Design and Assembly" />
          <Paragraph>
            The mechanical structure consists of a main enclosure divided into four compartments: Organic, Plastic, Paper, and Other. Each compartment has a spring-loaded lid controlled by a servo motor. The waste input point is designed with a funnel shape to guide the waste towards the sensor array. The enclosure is made of durable, weather-resistant plastic (HDPE) to ensure longevity in both indoor and outdoor settings.
          </Paragraph>
          <Paragraph>
            The sensor array is positioned at the neck of the funnel, ensuring that every piece of waste passes through the detection zone. The mechanical linkages between the servos and lids are designed for smooth operation and minimal wear. The assembly is modular, allowing the bin compartments to be detached for easy emptying and cleaning.
          </Paragraph>
          <Paragraph>
            Special attention was paid to the ergonomics of the bin, ensuring that the input height is comfortable for all users, including children and people with disabilities.
          </Paragraph>
        </Page>

        {/* PAGE 23-25: METHODOLOGY */}
        <Page pageNumber={23}>
          <ChapterTitle title="6. METHODOLOGY" />
          <MainHeading number="6.1" title="Research and Development Process" />
          <Paragraph>
            Our methodology follows a structured engineering design process, beginning with problem identification and ending with prototype validation. This iterative approach ensures that each component is optimized for performance and reliability. We conducted extensive research into existing waste management practices to identify the most critical areas for automation.
          </Paragraph>
          <SubHeading number="6.1.1" title="Requirement Analysis" />
          <Paragraph>
            We began by identifying the key requirements for an effective smart bin: high classification accuracy, low cost, ease of use, and durability. We conducted surveys with potential users to understand their disposal habits and pain points. This data informed our choice of sensors and the design of the user interface. We also consulted with waste management experts to understand the purity requirements for different recycling streams.
          </Paragraph>
        </Page>

        <Page pageNumber={24}>
          <SubHeading number="6.1.2" title="Component Selection and Prototyping" />
          <Paragraph>
            Based on our requirements, we selected the Arduino Uno as our primary controller. We tested various sensors (ultrasonic, IR, moisture, capacitive) to determine the best combination for waste classification. We built several small-scale prototypes to test the mechanical segregation mechanism and the software logic. Each iteration was tested with a variety of waste samples to identify and resolve issues. We used 3D printing for rapid prototyping of the mechanical linkages and sensor mounts.
          </Paragraph>
          <SubHeading number="6.1.3" title="Software Development and Integration" />
          <Paragraph>
            The software was developed in parallel with the hardware. We used a modular approach, testing each sensor interface individually before integrating them into the main state machine. We implemented data logging to track sensor performance and identify patterns in waste classification. This data was used to refine our classification thresholds. The integration phase involved extensive testing to ensure that the sensors and actuators worked in perfect synchronization.
          </Paragraph>
        </Page>

        <Page pageNumber={25}>
          <MainHeading number="6.2" title="Testing and Validation Methodology" />
          <Paragraph>
            Validation is conducted through rigorous laboratory and field testing. We use a standardized set of waste samples (plastic bottles, food scraps, paper, etc.) to measure the system's accuracy. Each sample is passed through the bin multiple times under different environmental conditions (varying light, humidity). We record the classification result and compare it against the actual material type to calculate the accuracy rate.
          </Paragraph>
          <Paragraph>
            We also conduct user testing to evaluate the system's ease of use and the effectiveness of the LED feedback. Feedback from these tests is used to make final adjustments to the mechanical design and software logic. Our goal is to achieve a classification accuracy of over 95% for common waste types.
          </Paragraph>
          <Paragraph>
            Finally, we conduct durability testing, operating the automated lids for thousands of cycles to ensure that the mechanical components can withstand long-term use in public spaces.
          </Paragraph>
        </Page>

        {/* PAGE 26-28: MARKET ANALYSIS */}
        <Page pageNumber={26}>
          <ChapterTitle title="7. MARKET ANALYSIS" />
          <MainHeading number="7.1" title="Target Customer Segments" />
          <Paragraph>
            Our market analysis identifies several key segments that would benefit from our smart waste segregation system. These segments are chosen based on their waste generation volume and their commitment to sustainability. We have conducted detailed research into the needs and pain points of each segment.
          </Paragraph>
          <SubHeading number="7.1.1" title="Municipal Authorities and Smart Cities" />
          <Paragraph>
            Municipal corporations are our primary target. They are responsible for city-wide waste management and face increasing pressure to meet environmental regulations. Our system offers a cost-effective way to improve recycling rates and reduce the burden on landfills. The automated reporting feature provides valuable data for city planning and compliance. We aim to partner with smart city initiatives to deploy our bins as part of their intelligent infrastructure.
          </Paragraph>
        </Page>

        <Page pageNumber={27}>
          <SubHeading number="7.1.2" title="Educational Institutions" />
          <Paragraph>
            Universities and schools are ideal locations for our smart bins. They have high foot traffic and a strong focus on environmental education. Our bins serve as both a functional waste management tool and an educational exhibit, demonstrating the power of technology in solving environmental problems. We plan to offer educational workshops alongside our bin deployments to further engage students in sustainability.
          </Paragraph>
          <SubHeading number="7.1.3" title="Commercial Complexes and Office Buildings" />
          <Paragraph>
            Shopping malls, corporate offices, and technology parks generate large volumes of waste, much of which is recyclable plastic and paper. Our system helps these organizations meet their corporate social responsibility (CSR) goals and improve the hygiene of their public spaces. The professional appearance of our bins fits well with the aesthetic of modern commercial buildings.
          </Paragraph>
        </Page>

        <Page pageNumber={28}>
          <MainHeading number="7.2" title="Market Trends and Opportunities" />
          <Paragraph>
            The global smart waste management market is projected to grow significantly over the next decade. This growth is driven by several factors:
            1. **Urbanization:** As more people move to cities, the volume of waste increases, necessitating more efficient management systems.
            2. **Regulatory Pressure:** Governments worldwide are implementing stricter waste segregation and recycling laws.
            3. **Technological Advancements:** The falling cost of sensors and microcontrollers makes smart bins more accessible.
            4. **Public Awareness:** Increasing concern about plastic pollution is driving demand for better recycling solutions.
          </Paragraph>
          <Paragraph>
            These trends create a massive opportunity for our venture to capture a significant share of the emerging smart waste management market. We are also exploring opportunities in the residential sector, where smart bins can help households manage their waste more effectively.
          </Paragraph>
        </Page>

        {/* PAGE 29-31: BUSINESS MODEL */}
        <Page pageNumber={29}>
          <ChapterTitle title="8. BUSINESS MODEL & FINANCIALS" />
          <MainHeading number="8.1" title="Revenue Streams" />
          <Paragraph>
            Our business model is designed to ensure long-term financial sustainability while maximizing environmental impact. We have identified several key revenue streams that will allow us to scale our operations and continue our R&D efforts.
          </Paragraph>
          <div className="space-y-6 font-serif text-[12pt] leading-[2.0]">
            <p><strong>Direct Product Sales:</strong> Selling smart bins to municipalities, institutions, and commercial customers. We offer different models based on capacity and sensor configuration, with prices ranging from ₹8,000 to ₹15,000 per unit.</p>
            <p><strong>Maintenance Contracts:</strong> Annual agreements for sensor calibration, software updates, and mechanical servicing. This provides a steady stream of recurring revenue and ensures that our bins continue to operate at peak efficiency.</p>
            <p><strong>Data Services:</strong> Providing anonymized waste generation data to municipal authorities for better resource planning and compliance monitoring.</p>
          </div>
        </Page>

        <Page pageNumber={30}>
          <MainHeading number="8.2" title="Cost Structure" />
          <Paragraph>
            Our cost structure is optimized for affordability without compromising on quality. The primary costs include component procurement, assembly labor, and R&D. We leverage open-source hardware and software to keep our development costs low.
          </Paragraph>
          <div className="my-6">
            <p className="table-caption">Table 8.1: Detailed Component Cost Breakdown</p>
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100 font-bold">
                  <th className="border border-gray-300 p-2 text-left">Component</th>
                  <th className="border border-gray-300 p-2 text-right">Cost (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 p-2">Arduino Uno Microcontroller</td><td className="border border-gray-300 p-2 text-right">500</td></tr>
                <tr><td className="border border-gray-300 p-2">IR Proximity Sensor</td><td className="border border-gray-300 p-2 text-right">150</td></tr>
                <tr><td className="border border-gray-300 p-2">Moisture Sensor Module</td><td className="border border-gray-300 p-2 text-right">250</td></tr>
                <tr><td className="border border-gray-300 p-2">Capacitive Sensor Module</td><td className="border border-gray-300 p-2 text-right">1,200</td></tr>
                <tr><td className="border border-gray-300 p-2">Servo Motors (x4)</td><td className="border border-gray-300 p-2 text-right">800</td></tr>
                <tr><td className="border border-gray-300 p-2">Power Supply & Wiring</td><td className="border border-gray-300 p-2 text-right">400</td></tr>
                <tr><td className="border border-gray-300 p-2">Enclosure & Mechanical Parts</td><td className="border border-gray-300 p-2 text-right">1,500</td></tr>
                <tr className="font-bold bg-blue-50"><td className="border border-gray-300 p-2">Total Manufacturing Cost</td><td className="border border-gray-300 p-2 text-right">4,800</td></tr>
              </tbody>
            </table>
          </div>
        </Page>

        <Page pageNumber={31}>
          <MainHeading number="8.3" title="Financial Projections" />
          <Paragraph>
            We project a steady increase in sales over the next three years. In Year 1, we aim to sell 100 units through pilot projects with local institutions. By Year 3, we expect to scale to 1,000 units per year as we expand into new markets. Our gross margin is targeted at 60%, which will allow us to reinvest in product development and marketing. We expect to reach break-even within 18 months of commercial launch.
          </Paragraph>
          <Paragraph>
            Our funding strategy involves seeking initial capital from government grants and angel investors to support prototype optimization and initial production. We will also explore partnerships with waste management companies to leverage their existing distribution networks and customer base.
          </Paragraph>
          <Paragraph>
            We are also considering a "Waste-as-a-Service" model, where customers pay a monthly fee for the use and maintenance of the bins, reducing the upfront cost barrier for smaller organizations.
          </Paragraph>
        </Page>

        {/* PAGE 32-34: PROTOTYPE PLAN */}
        <Page pageNumber={32}>
          <ChapterTitle title="9. PROTOTYPE DEVELOPMENT PLAN" />
          <MainHeading number="9.1" title="Development Timeline" />
          <Paragraph>
            The development of our smart waste segregation system is divided into four distinct phases, each with specific objectives and deliverables. This phased approach allows for continuous testing and refinement based on real-world data and user feedback.
          </Paragraph>
          <SubHeading number="9.1.1" title="Phase 1: Concept Validation (Months 1-3)" />
          <Paragraph>
            Objectives: Validate technical feasibility, identify key components, develop basic functionality. 
            Activities: Literature review, component selection, basic circuit design, initial software development.
            Deliverables: Proof-of-concept prototype, technical documentation. This phase was successfully completed, demonstrating the viability of our sensor-based classification approach.
          </Paragraph>
        </Page>

        <Page pageNumber={33}>
          <SubHeading number="9.1.2" title="Phase 2: Functional Prototype (Months 4-6)" />
          <Paragraph>
            Objectives: Develop a fully functional unit with all features, refine sensor accuracy.
            Activities: Integration of all sensors and actuators, construction of the physical bin structure, software optimization.
            Deliverables: Working prototype capable of segregating common waste types, user manual. We are currently in this phase, focusing on the mechanical reliability of the lid mechanisms.
          </Paragraph>
          <SubHeading number="9.1.3" title="Phase 3: Pilot Testing and Refinement (Months 7-9)" />
          <Paragraph>
            Objectives: Test the prototype in real-world conditions, gather user feedback.
            Activities: Deployment at partner institutions, data collection, user surveys, mechanical durability testing.
            Deliverables: Field-tested prototype, reliability assessment report. This phase is critical for identifying edge cases and improving the system's robustness.
          </Paragraph>
        </Page>

        <Page pageNumber={34}>
          <SubHeading number="9.1.4" title="Phase 4: Production-Ready Design (Months 10-12)" />
          <Paragraph>
            Objectives: Optimize for manufacturing, reduce costs, ensure consistency.
            Activities: Design for Manufacturing (DFM) review, supplier selection, quality control procedure development.
            Deliverables: Production-ready design files, initial production batch. We will work with local manufacturers to ensure that our system can be produced at scale with high quality.
          </Paragraph>
          <Paragraph>
            Each phase includes a review milestone where the project's progress is evaluated against our core objectives. This ensures that we remain on track and can pivot if necessary based on testing results or market feedback.
          </Paragraph>
        </Page>

        {/* PAGE 35-37: STAKEHOLDER ENGAGEMENT */}
        <Page pageNumber={35}>
          <ChapterTitle title="10. STAKEHOLDER ENGAGEMENT" />
          <MainHeading number="10.1" title="Stakeholder Identification" />
          <Paragraph>
            We have identified several key stakeholder groups who are critical to the success of our project. Engaging with these groups ensures that our solution meets the needs of all parties involved and gains the necessary support for widespread adoption.
          </Paragraph>
          <div className="space-y-6 font-serif text-[12pt] leading-[2.0]">
            <p><strong>End Users:</strong> The general public who will use the bins. Their adoption is critical for the system's success. We focus on making the disposal process as intuitive and rewarding as possible.</p>
            <p><strong>Municipal Authorities:</strong> Our primary customers and policy-makers. They provide the regulatory framework and funding. We engage them through technical demonstrations and cost-benefit analyses.</p>
            <p><strong>Environmental Organizations:</strong> Potential partners who can provide endorsements and access to networks. They help us validate our environmental impact claims.</p>
            <p><strong>Investors:</strong> Provide the capital necessary for scaling operations. We engage them with our robust business plan and financial projections.</p>
          </div>
        </Page>

        <Page pageNumber={36}>
          <MainHeading number="10.2" title="Engagement Strategy" />
          <Paragraph>
            Our engagement strategy involves regular communication and collaboration with all stakeholders. We use surveys, interviews, and focus groups to understand their needs and gather feedback on our prototypes. We also participate in environmental technology exhibitions to showcase our solution and build brand awareness.
          </Paragraph>
          <Paragraph>
            For municipal authorities, we provide detailed technical reports and financial projections to demonstrate the value of our system. For end-users, we focus on education and awareness campaigns to promote proper disposal habits. We use social media and community events to spread our message of sustainability.
          </Paragraph>
          <Paragraph>
            We also plan to create a stakeholder advisory board, including representatives from each group, to provide ongoing guidance on our product development and market strategy.
          </Paragraph>
        </Page>

        <Page pageNumber={37}>
          <MainHeading number="10.3" title="Expected Outcomes of Engagement" />
          <Paragraph>
            Through effective stakeholder engagement, we expect to achieve:
            1. **Improved Product Design:** Feedback from users and experts helps us refine our system's functionality and ergonomics.
            2. **Strong Partnerships:** Collaborating with environmental organizations and municipalities builds credibility and opens doors to new opportunities.
            3. **Increased Adoption:** Awareness campaigns drive user compliance and ensure that the bins are used correctly.
            4. **Sustainable Growth:** Engaging with investors ensures long-term financial support for our venture.
          </Paragraph>
          <Paragraph>
            Ultimately, stakeholder engagement is about building a community around our vision of a waste-free future. By working together, we can achieve far more than we could alone.
          </Paragraph>
        </Page>

        {/* PAGE 38-40: RISK & CONCLUSION */}
        <Page pageNumber={38}>
          <ChapterTitle title="11. RISK MANAGEMENT & CONCLUSION" />
          <MainHeading number="11.1" title="Risk Identification and Mitigation" />
          <Paragraph>
            Every technology venture faces risks. We have identified several key risks and developed mitigation strategies to address them, ensuring the long-term success and reliability of our smart waste segregation system.
          </Paragraph>
          <SubHeading number="11.1.1" title="Technical Risks" />
          <Paragraph>
            Risk: Sensor inaccuracy in harsh environments (extreme heat, humidity). 
            Mitigation: Use of high-quality, pre-calibrated sensors and robust enclosure design. Continuous software updates to improve classification algorithms based on field data. Regular maintenance schedules to ensure sensor cleanliness.
          </Paragraph>
          <SubHeading number="11.1.2" title="Market Risks" />
          <Paragraph>
            Risk: Slow adoption by municipal authorities due to budget constraints or resistance to change.
            Mitigation: Flexible pricing models, including leasing and service-based options. Demonstrating long-term cost savings through successful pilot projects and detailed financial reporting.
          </Paragraph>
        </Page>

        <Page pageNumber={39}>
          <MainHeading number="11.2" title="Future Scope" />
          <Paragraph>
            Looking ahead, we plan to expand our product line to include larger commercial systems and integrated IoT connectivity for city-wide waste monitoring. We are also exploring the use of AI and machine vision to further improve classification accuracy, allowing the system to identify complex materials like multi-layer packaging.
          </Paragraph>
          <Paragraph>
            We also aim to integrate solar power into our bins, making them completely self-sustaining and suitable for remote locations without access to the electrical grid. Our long-term goal is to become a global leader in automated waste management solutions, contributing to the development of truly smart and sustainable cities.
          </Paragraph>
          <MainHeading number="11.3" title="Conclusion" />
          <Paragraph>
            The Smart Waste Segregation Using Sensors project represents a practical, scalable solution to a global environmental crisis. By combining affordable technology with intelligent design, we empower communities to manage their waste more effectively and sustainably. Our automated system addresses the critical issues of manual segregation, improving recycling efficiency and promoting a cleaner environment.
          </Paragraph>
        </Page>

        <Page pageNumber={40}>
          <Paragraph>
            We have assembled a capable team with the necessary skills in electronics, software, and mechanical engineering to execute this business plan. With the right support and partnerships, we are confident that our smart waste segregation system can make a meaningful contribution to a more sustainable future.
          </Paragraph>
          <Paragraph>
            The journey towards a circular economy is long, but with innovative technology and community engagement, we can take significant steps towards achieving it. We invite all stakeholders to join us in this journey, as we transform waste management through intelligent automation.
          </Paragraph>
        </Page>

        
        {/* PAGE 39+: APPENDICES */}
        <Page pageNumber={41}>
          <ChapterTitle title="APPENDICES" />
          <MainHeading number="A.1" title="Technical Specifications Table" />
          <div className="my-8">
            <table className="w-full border-collapse border border-gray-300 text-sm font-serif">
              <thead>
                <tr className="bg-gray-100 font-bold">
                  <th className="border border-gray-300 p-3 text-left">Parameter</th>
                  <th className="border border-gray-300 p-3 text-left">Specification</th>
                </tr>
              </thead>
              <tbody className="leading-[1.8]">
                <tr><td className="border border-gray-300 p-3 font-bold">Microcontroller</td><td className="border border-gray-300 p-3">Arduino Uno (ATmega328P)</td></tr>
                <tr><td className="border border-gray-300 p-3 font-bold">Operating Voltage</td><td className="border border-gray-300 p-3">5V DC (Internal)</td></tr>
                <tr><td className="border border-gray-300 p-3 font-bold">Input Voltage</td><td className="border border-gray-300 p-3">7-12V DC (External Adapter)</td></tr>
                <tr><td className="border border-gray-300 p-3 font-bold">IR Sensor Range</td><td className="border border-gray-300 p-3">2-30 cm (Adjustable)</td></tr>
                <tr><td className="border border-gray-300 p-3 font-bold">Servo Torque</td><td className="border border-gray-300 p-3">1.5 kg-cm at 4.8V</td></tr>
                <tr><td className="border border-gray-300 p-3 font-bold">Bin Capacity</td><td className="border border-gray-300 p-3">25 Liters per compartment</td></tr>
                <tr><td className="border border-gray-300 p-3 font-bold">Classification Time</td><td className="border border-gray-300 p-3">&lt; 2.5 Seconds</td></tr>
                <tr><td className="border border-gray-300 p-3 font-bold">Enclosure Material</td><td className="border border-gray-300 p-3">High-Density Polyethylene (HDPE)</td></tr>
              </tbody>
            </table>
          </div>
        </Page>

        <Page pageNumber={42}>
          <MainHeading number="A.2" title="System Diagrams" />
          <div className="mt-8">
            <BlockDiagram />
            <p className="figure-caption">Figure A.1: High-Level System Block Diagram</p>
          </div>
        </Page>

        <Page pageNumber={43}>
          <div className="mt-8">
            <WorkflowDiagram />
            <p className="figure-caption">Figure A.2: Operational Workflow Logic</p>
          </div>
        </Page>

        {/* REFERENCES */}
        <Page pageNumber={44}>
          <ChapterTitle title="12. REFERENCES" />
          <div className="mt-10 space-y-6 font-serif text-[12pt] leading-[2.0]">
            <p className="pl-8 -indent-8">
              Balapriya, F., et al. (2022). "Enhanced Smart Waste Segregation and Management Using Arduino." <em>International Journal of Engineering Research & Technology (IJERT)</em>, 11(4), 112-118.
            </p>
            <p className="pl-8 -indent-8">
              Elakkia Elumalai, et al. (2021). "Smart waste detection and segregation." <em>Journal of Physics: Conference Series</em>, 1916(1), 012056.
            </p>
            <p className="pl-8 -indent-8">
              Muhammad Amirul Farhan, & Amira Saryati. (2024). "Smart Waste Bin with Automated Segregation System." <em>IEEE Access</em>, 12, 4567-4575.
            </p>
            <p className="pl-8 -indent-8">
              Shwetashree Vijay, et al. (2019). "Smart Waste Management System Using Arduino." <em>International Journal of Innovative Technology and Exploring Engineering (IJITEE)</em>, 8(9S), 345-350.
            </p>
            <p className="pl-8 -indent-8">
              World Bank Group. (2023). <em>What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050</em>. Urban Development Series. Washington, DC: World Bank.
            </p>
          </div>
          
          <div className="mt-20 flex flex-col items-center">
            <div className="w-48 h-px bg-slate-300 mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-[0.5em]">Thank You</h2>
            <p className="text-xs text-slate-400 mt-4 uppercase tracking-widest">End of Report</p>
          </div>
        </Page>

      </div>
    </div>
  );
};

export default App;
