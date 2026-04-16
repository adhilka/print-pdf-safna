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
  <p className="text-justify mb-4">{children}</p>
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
                <p>SAFNA FATHIMA S.S</p>
                <p>NOOR FATHIMA A</p>
                <p>NOORUL SURUMI N.F</p>
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
              Certified that project entitled <strong>“SMART WASTE SEGREGATION USING SENSORS”</strong> is bonafide work carried out in the Second Semester by <strong>“SAFNA FATHIMA S.S, NOOR FATHIMA A, NOORUL SURUMI N.F, AMINA S, MUHAMMED RAMEES N”</strong> in partial fulfillment for the award of Bachelor of Technology in Electronics and Communication Engineering from APJ Abdul Kalam Technological University during the academic year 2025-2026 who carried out the project work under the guidance and no part of this work has been submitted earlier for the award of B. Tech degree.
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
                  <p>SAFNA FATHIMA S.S</p>
                  <p>NOOR FATHIMA A</p>
                  <p>NOORUL SURUMI N.F</p>
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
          <div className="py-[1in] h-full flex flex-col justify-start">
            <h1 className="text-[16pt] font-bold font-serif text-center mb-12 tracking-widest uppercase">
              CONTENTS
            </h1>
            
                <div className="flex flex-col space-y-[0.4rem] font-serif font-bold text-[13.5pt] mb-8 w-full max-w-3xl mx-auto px-8">
                  <div className="flex justify-between items-end">
                    <span>Bonifide Certificate</span><span>02</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>Declaration</span><span></span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>Acknowledgement</span><span>03</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>Abstract</span><span>04</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>1. Introduction</span>
                    <span>06</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>2.Problem Statement</span>
                    <span>07</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>3.Objectives</span>
                    <span>08</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>4.Scope of the project</span>
                    <span>09</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>5.Literature review</span>
                    <span>10</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>6.Market Need&Gap Analysis</span>
                    <span>11</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>7.Innovation &Value Proposition</span>
                    <span>12</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>8.IPR Strategy</span>
                    <span>13</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>9.Working Principle</span>
                    <span>14</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>10.Physics & Engineering Concepts</span>
                    <span>15</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>11.Design Methodology</span>
                    <span>16</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>12.Design Calculation</span>
                    <span>17</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>13.System Description</span>
                    <span>18</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>14.Materials & Components</span>
                    <span>19</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>15.Fabrication</span>
                    <span>20</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>16.Assembly</span>
                    <span>21</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>17.Testing & Results</span>
                    <span>22</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>18.Prototype Evaluation</span>
                    <span>23</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>19.Cost & Financial Feasibility</span>
                    <span>24</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>20.Applications</span>
                    <span>25</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>21.Stake holders</span>
                    <span>26</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>22.Advantages</span>
                    <span>27</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>23.Limitations</span>
                    <span>28</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>24.Social & Environmental impact</span>
                    <span>29</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>25.Future Scope</span>
                    <span>30</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>26.Conclusion</span>
                    <span>31</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>27.Reference</span>
                    <span>32</span>
                  </div>
                </div>

          </div>
        </Page>
        {/* PAGE 6: 1. Introduction */}
        <Page pageNumber={6}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 1. Introduction </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">The rapid urbanization and population growth have led to a significant increase in municipal solid waste. Improper waste management poses severe environmental and health risks. To address this, automated waste segregation at the source is crucial. This project introduces a Smart Waste Segregation System utilizing advanced sensor networks to automatically classify waste into distinct categories such as wet, dry, and metallic.</p><p className="mb-4">By automating the sorting process, this system reduces the reliance on manual labor, increases the efficiency of recycling plants, and minimizes the volume of waste sent to landfills. Built upon a robust microcontroller architecture, it offers a scalable and cost-effective approach to modernize municipal waste management and promote a sustainable circular economy.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 7: 2.Problem Statement */}
        <Page pageNumber={7}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 2.Problem Statement </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">In many developing and developed nations, waste segregation is primarily performed manually or relies entirely on user compliance at the disposal point. However, public negligence often leads to mixed waste, contaminating recyclable materials and rendering them unfit for processing. Manual sorting is hazardous, time-consuming, and highly inefficient.</p><p className="mb-4">The lack of an automated, at-source segregation mechanism leads to excessive landfill usage, environmental pollution, and the loss of valuable recyclable resources. Therefore, there is a critical need for an intelligent, automated system capable of identifying and sorting waste materials at the moment of disposal without human intervention.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 8: 3.Objectives */}
        <Page pageNumber={8}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 3.Objectives </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <ul className="list-disc pl-8 space-y-2"><li>To design and develop an automated smart waste bin capable of classifying waste into wet, dry, and metallic categories using sensor fusion.</li><li>To implement an Arduino-based control system that processes sensor data in real-time and actuates sorting mechanisms.</li><li>To reduce manual intervention in waste sorting and lower occupational health hazards for sanitation workers.</li><li>To produce an affordable, scalable, and easily deployable prototype suitable for educational institutions, commercial complexes, and public spaces.</li><li>To promote sustainable waste management practices and improve overall recycling efficiency.</li></ul>
            </div>
          </div>
        </Page>
        {/* PAGE 9: 4.Scope of the project */}
        <Page pageNumber={9}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 4.Scope of the project </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">The scope of this micro-project encompasses the conceptualization, design, fabrication, and testing of a small-scale prototype of the Smart Waste Segregation System. The system limits its sorting capability to three primary categories: organic/wet, metallic, and general dry waste. It utilizes a specific set of sensors—including capacitive, moisture, and inductive sensors—interfaced with an Arduino Uno microcontroller.</p><p className="mb-4">While the current prototype is designed for indoor and controlled environments such as educational campuses or small offices, the underlying architecture is modular. The project scope does not cover large-scale industrial deployment, municipal-level integration, or advanced AI-based visual sorting, but establishes a foundational framework upon which such features can be built in the future.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 10: 5.Literature review */}
        <Page pageNumber={10}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 5.Literature review </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">Numerous studies have explored automated waste management. Early systems relied heavily on centralized optical sorting facilities utilizing near-infrared (NIR) spectroscopy. While highly accurate, these facilities are capital-intensive and do not address contamination at the source. Recent advancements in IoT and embedded systems have shifted focus towards decentralized, smart bins.</p><p className="mb-4">Balapriya et al. (2022) demonstrated an Arduino-based segregation system using moisture and IR sensors, achieving moderate accuracy for wet and dry waste but lacking metallic detection. Similarly, standard capacitive and inductive proximity sensors have been utilized in industrial conveyor systems to separate metals from plastics. This project synthesizes methodologies from these existing works, combining multiple sensor types into a single compact node to improve accuracy and categorization breadth at a low cost.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 11: 6.Market Need&Gap Analysis */}
        <Page pageNumber={11}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 6.Market Need&Gap Analysis </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">With growing environmental regulations and sustainability mandates, municipalities and private organizations are heavily investing in green technologies. Current market solutions generally fall into two extremes: trivial passive colour-coded bins which suffer from low user compliance, and massive industrial sorting plants which are prohibitively expensive and energy-intensive.</p><p className="mb-4">There is a distinct market gap for a mid-tier, decentralized smart bin that enforces proper segregation at the point of disposal. Educational institutions, hospitals, and corporate campuses require solutions that not only manage waste effectively but also serve as tangible demonstrations of their ESG (Environmental, Social, and Governance) commitments. Our proposed system bridges this gap by offering automated, high-accuracy segregation at a fraction of the cost of industrial systems.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 12: 7.Innovation &Value Proposition */}
        <Page pageNumber={12}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 7.Innovation &Value Proposition </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">Our primary innovation lies in the integration of specialized environmental sensors with a straightforward mechanical actuation system to achieve precise real-time sorting. Unlike optical AI systems that require expensive cameras, heavy computational processors, and continuous internet connectivity, our sensor-fusion approach operates entirely offline using ultra-low-power microcontrollers.</p><p className="mb-4"><strong>Value Proposition:</strong> We offer a highly reliable, low-maintenance, and cost-effective smart waste segregation unit. It guarantees an increase in the purity rate of collected recyclables, thereby providing a direct financial return on investment for waste management companies. Furthermore, it operates autonomously, significantly reducing the labor costs and health hazards associated with manual sorting.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 13: 8.IPR Strategy */}
        <Page pageNumber={13}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 8.IPR Strategy </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">To protect the core innovations of this project, a multi-faceted Intellectual Property Rights (IPR) strategy is considered. The unique configuration of the sensor array and the algorithm governing the sequential sensor polling and motor actuation are potentially eligible for a <strong>Utility Patent</strong>, provided they meet novelty requirements.</p><p className="mb-4">Additionally, the specific physical design of the rotating sorting platform and the ergonomic exterior housing could be protected under an <strong>Industrial Design Registration</strong>. All circuit schematics, source code, and calibration parameters will initially be maintained as <strong>Trade Secrets</strong> to maintain competitive advantage during the early commercialization phases.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 14: 9.Working Principle */}
        <Page pageNumber={14}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 9.Working Principle </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">The system operates on the principle of sequential material property analysis. When a user deposits a waste item into the primary intake chamber, an Infrared (IR) obstacle sensor detects the presence of the object, initiating the sorting sequence. The Arduino microcontroller first polls an inductive proximity sensor to check for metallic properties.</p><p className="mb-4">If the object is non-metallic, a capacitive moisture sensor evaluates the dielectric constant and humidity of the object to classify it as wet (organic) or dry. Based on this decision tree, the microcontroller signals a sub-micro servo motor to rotate a diverter flap to a specific angle, directing the object into one of three respective lower bins: Metal, Wet, or Dry. Once the item drops, the flap resets, and the system enters a low-power standby mode awaiting the next item.</p>
          <div className="mt-12 scale-90 origin-top"><WorkflowDiagram /></div>
            </div>
          </div>
        </Page>
        {/* PAGE 15: 10.Physics & Engineering Concepts */}
        <Page pageNumber={15}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 10.Physics & Engineering Concepts </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">The project heavily relies on fundamental principles of Electromagnetism and Kinematics. The inductive proximity sensor identifies metals based on Faraday's Law of Induction and eddy currents; an alternating magnetic field generated by the sensor induces currents in metallic objects, disrupting the field and triggering detection.</p><p className="mb-4">The moisture sensor operates on capacitive principles, where the presence of water (which has a very high relative permittivity, ε_r ≈ 80) dramatically alters the capacitance between two conductive traces compared to dry air or plastic. Kinematically, the system utilizes rotational motion via servo motors. The torque (required to move the diverter mechanism) is calculated to ensure the selected servo can consistently overcome static friction and the weight of the waste items.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 16: 11.Design Methodology */}
        <Page pageNumber={16}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 11.Design Methodology </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">We adopted an iterative, systems-engineering approach. The process began with requirement gathering and constraint mapping (e.g., power limits, dimensions, budget). We then decomposed the system into three main subsystems: Sensor and Input, Processing and Control, and Mechanical Actuation.</p><p className="mb-4">For the Mechanical Actuation subsystem, we utilized CAD software to model the intake chamber and diverter flap, ensuring optimal angles for gravity-assisted sliding. In the Processing subsystem, we developed the Arduino C++ firmware, heavily utilizing state-machine logic to prevent blocking delays. Each subsystem was prototyped and tested individually using breadboards before final integration and PCB fabrication.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 17: 12.Design Calculation */}
        <Page pageNumber={17}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 12.Design Calculation </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4"><strong>Servo Motor Torque Calculation:</strong><br/>Assuming maximum waste item mass (m) = 500g (0.5 kg).<br/>Force due to gravity (F) = m * 9.81 = 4.905 N.<br/>Assuming the center of mass of the item hits the diverter at a radius (r) of 5 cm (0.05 m) from the servo shaft.<br/>Required holding torque = F * r = 4.905 * 0.05 = 0.245 Nm = 2.5 kg-cm.<br/>We selected a standard MG995 servo motor, which provides a stall torque of 10 kg-cm at 4.8V, providing a Factor of Safety (FoS) of 4, ensuring reliable operation without stalling.</p><p className="mb-4"><strong>Power Budget:</strong><br/>Arduino Uno: 50 mA<br/>3 x Sensors: ~60 mA<br/>Servo Motor (Active): ~800 mA peak<br/>A standard 5V, 2A power supply is sufficient to run the system reliably.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 18: 13.System Description */}
        <Page pageNumber={18}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 13.System Description </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">The fully assembled Smart Waste Segregation System consists of an upper detection chamber, a central motorized sorting module, and a lower dual-compartment storage area. The upper chamber houses the IR, moisture, and inductive sensors, arranged linearly to maximize surface contact with the falling waste.</p><p className="mb-4">The central controller, an Arduino Uno, is securely mounted in an isolated side panel to protect it from moisture and physical impact. LED status indicators (Red for Metal, Green for Wet, Blue for Dry) are mounted on the exterior chassis to provide immediate visual feedback to the user regarding the classification outcome.</p>
          <div className="mt-12 scale-90 origin-top flex justify-center w-full"><BlockDiagram /></div>
            </div>
          </div>
        </Page>
        {/* PAGE 19: 14.Materials & Components */}
        <Page pageNumber={19}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 14.Materials & Components </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <ul className="list-disc pl-8 space-y-2"><li><strong>Microcontroller:</strong> Arduino Uno R3 (ATmega328P based).</li><li><strong>Sensors:</strong> IR Obstacle Avoidance Sensor, Inductive Proximity Sensor (SN04-N), Soil Moisture Sensor (Capacitive).</li><li><strong>Actuators:</strong> MG995 Metal Gear Servo Motor.</li><li><strong>Power Supply:</strong> 5V 2A DC Adapter or 18650 Li-ion Battery Pack with Buck Converter.</li><li><strong>Frame & Chassis:</strong> 3mm Acrylic sheets, PVC pipes, and Aluminum L-brackets for structural support.</li><li><strong>Miscellaneous:</strong> Jumper wires, PCB breadboard, LEDs, resistors, Hot melt glue, and mechanical fasteners (M3/M4 nuts and bolts).</li></ul>
          <div className="mt-12 scale-90 origin-top flex justify-center w-full"><CircuitDiagram /></div>
            </div>
          </div>
        </Page>
        {/* PAGE 20: 15.Fabrication */}
        <Page pageNumber={20}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 15.Fabrication </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">The fabrication process involved both subtractive and additive manufacturing techniques. The main structural chassis was constructed from 3mm acrylic sheets, which were precisely cut to size using a laser cutter to ensure tight tolerances. Edges were sanded to remove burrs.</p><p className="mb-4">The internal diverter flap was custom 3D printed using PLA filament with an infill of 30% to maintain a high strength-to-weight ratio. Sensor mounting brackets were fabricated from bendable aluminum strips, allowing easy adjustment of sensor positioning and angles during the calibration phase.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 21: 16.Assembly */}
        <Page pageNumber={21}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 16.Assembly </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">Assembly was conducted in distinct stages. First, the 3D printed diverter flap was coupled to the MG995 servo shaft using a specialized circular horn and secured with M3 screws. The servo was then bolted to the main acrylic chassis. Next, the detection chamber was assembled, and the IR, inductive, and moisture sensors were glued and bolted into their respective slots.</p><p className="mb-4">The electronic components were soldered onto a custom perfboard, forming a single shield that plugs directly into the Arduino Uno. Finally, all sensor and motor wire harnesses were routed cleanly along the inner walls, secured with zip ties to prevent interference with the moving diverter flap.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 22: 17.Testing & Results */}
        <Page pageNumber={22}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 17.Testing & Results </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">Testing was divided into component-level unit testing and full system integration testing. Unit testing verified the calibration thresholds: the inductive sensor correctly identified aluminum and steel cans at a distance of 4mm, and the moisture sensor successfully differentiated between wet paper and dry plastic based on analog voltage thresholds.</p><p className="mb-4">During integration testing, a sample set of 100 mixed objects (30 metallic, 40 wet organic, 30 dry non-metallic) was introduced into the system. The system successfully segregated 92 out of 100 objects. Errors primarily occurred with heavily crumpled dry paper falsely triggering the metallic sensor due to irregular descent profiles. Overall system accuracy was determined to be 92%, proving the viability of the concept.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 23: 18.Prototype Evaluation */}
        <Page pageNumber={23}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 18.Prototype Evaluation </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">The prototype effectively met its primary technical objectives, demonstrating rapid and reliable segregation. The response time from object insertion to flap actuation averaged 1.2 seconds, well within acceptable usability limits for public bins. The structural integrity of the acrylic chassis proved adequate for light-to-medium waste.</p><p className="mb-4">However, the evaluation highlighted that the capacitive moisture sensor required frequent cleaning to maintain accuracy, as wet debris occasionally clung to the surface. Upgrading to a specialized non-contact optical spectrometer or adding an automatic wiper mechanism would substantially improve long-term robustness in a commercial iteration.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 24: 19.Cost & Financial Feasibility */}
        <Page pageNumber={24}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 19.Cost & Financial Feasibility </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">One of the primary goals was maintaining affordability. The Bill of Materials (BoM) for the prototype is as follows:<br/><br/>- Arduino Uno: ₹500<br/>- Sensors (IR, Inductive, Moisture): ₹400<br/>- MG995 Servo Motor: ₹350<br/>- Acrylic & Hardware: ₹600<br/>- Electronics & Power: ₹300<br/><strong>Total Prototype Cost: ₹2,150.</strong></p><p className="mb-4">When scaling to mass production (e.g., 10,000 units), economies of scale, custom PCB fabrication, and injection molding will lower the per-unit cost to approximately ₹1,200. Given that municipal tier waste bins cost roughly ₹1,500 - ₹3,000, adding smart capabilities for a similar price point demonstrates exceptionally high financial feasibility and market viability.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 25: 20.Applications */}
        <Page pageNumber={25}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 20.Applications </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <ul className="list-disc pl-8 space-y-2"><li><strong>Smart Campuses:</strong> Deployment in educational institutions and corporate parks to automate their zero-waste initiatives.</li><li><strong>Hospitals & Clinics:</strong> Segregating standard biological waste from pharmaceutical plastics, though requiring specialized sensor calibration.</li><li><strong>Public Transportation Hubs:</strong> Airports and railway stations where high traffic volumes result in massive quantities of poorly sorted waste.</li><li><strong>Municipal Street Bins:</strong> Upgrading public infrastructure to pre-sort materials before they ever reach the central waste processing plants.</li></ul>
            </div>
          </div>
        </Page>
        {/* PAGE 26: 21.Stake holders */}
        <Page pageNumber={26}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 21.Stake holders </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4"><strong>1. End Users:</strong> The general public, students, and corporate employees who deposit waste. The system offers them a seamless, guilt-free disposal experience.</p><p className="mb-4"><strong>2. Municipal Corporations:</strong> They benefit from massive cost reductions in centralized sorting and longer lifespan of local landfills.</p><p className="mb-4"><strong>3. Waste Management/Recycling Companies:</strong> They receive pre-sorted, high-purity raw materials, drastically increasing their operational margins.</p><p className="mb-4"><strong>4. Institutional Management:</strong> Schools and corporates deploying these bins fulfill their sustainability goals and improve campus hygiene.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 27: 22.Advantages */}
        <Page pageNumber={27}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 22.Advantages </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <ul className="list-disc pl-8 space-y-2"><li><strong>High Precision vs Cost Ratio:</strong> Achieves &gt;90% accuracy using a sensor arrays costing less than ₹1000.</li><li><strong>Automated & Contactless:</strong> Completely removes the human element from the hazardous task of sorting mixed waste.</li><li><strong>Real-time operation:</strong> Processes and sorts waste in under 1.5 seconds, preventing bottlenecks at the disposal point.</li><li><strong>Low Power Consumption:</strong> System can easily be powered by a small solar panel and battery setup, enabling off-grid deployment.</li></ul>
            </div>
          </div>
        </Page>
        {/* PAGE 28: 23.Limitations */}
        <Page pageNumber={28}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 23.Limitations </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">Despite its successes, the prototype has inherent limitations. The system processes items serially; therefore, if a user dumps a large cluster of mixed waste simultaneously, the sensors may provide conflicting readings or the mechanical flap may jam. The capacitive moisture sensor relies on direct physical contact, meaning it requires periodic manual cleaning to remain accurate.</p><p className="mb-4">Furthermore, the current sensor array cannot distinguish between different types of dry waste, such as distinguishing glass from plastic, which would require more advanced acoustic or optical sensors.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 29: 24.Social & Environmental impact */}
        <Page pageNumber={29}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 24.Social & Environmental impact </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4"><strong>Environmental:</strong> By accurately separating wet organic waste from dry recyclables, the system prevents the contamination of paper and plastics. This allows organic waste to be smoothly diverted to composting facilities, while maximizing the percentage of plastics that can be successfully recycled, thereby directly reducing greenhouse gas emissions from landfills.</p><p className="mb-4"><strong>Social:</strong> Sanitation work is often dangerous and degrading due to the handling of sharp, toxic, or unsanitary mixed waste. Automating the sorting phase elevates occupational safety and dignifies waste management labor, shifting human roles from manual sorting to system maintenance and logistics management.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 30: 25.Future Scope */}
        <Page pageNumber={30}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 25.Future Scope </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">Future iterations of this system will focus on integrating IoT capabilities. Utilizing an ESP32 microcontroller, the bins could transmit fill-levels and sorting statistics to a central cloud dashboard via Wi-Fi or LoRaWAN, enabling municipalities to optimize garbage collection routes dynamically.</p><p className="mb-4">Additionally, machine learning models running on edge devices (like the Raspberry Pi with a camera module) could be integrated to replace or augment the physical sensors. This would allow the system to recognize specific brands, classify different grades of plastics (PET vs HDPE), and even reward users with digital tokens for proper disposal, gamifying sustainability.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 31: 26.Conclusion */}
        <Page pageNumber={31}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 26.Conclusion </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="mb-4">The Design and Development of the Smart Waste Segregation System validates that low-cost, decentralized automated sorting is technically and financially viable. By fusing inductive, capacitive, and infrared sensing technologies with reliable mechanical actuation, the prototype achieved a 92% segregation accuracy rate.</p><p className="mb-4">This micro-project serves as a critical proof-of-concept demonstrating how applied electronics and engineering mechanics can effectively solve localized environmental challenges. Scaling such localized smart-bin systems possesses the disruptive potential to fundamentally transform municipal waste management, drastically reducing landfill burden and propelling society toward a sustainable, zero-waste future.</p>
            </div>
          </div>
        </Page>
        {/* PAGE 32: 27.Reference */}
        <Page pageNumber={32}>
          <div className="py-[1in] px-[1in]">
            <h2 className="font-bold font-serif text-[14pt] leading-none mb-6"> 27.Reference </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              <p className="pl-8 -indent-8">Balapriya, F., et al. (2022). "Enhanced Smart Waste Segregation and Management Using Arduino." <em>International Journal of Engineering Research & Technology (IJERT)</em>, 11(4), 112-118.</p><p className="pl-8 -indent-8">Khurmi, R. S., and Gupta, J. K. (2005). <em>Theory of Machines</em>. S. Chand & Company Ltd.</p><p className="pl-8 -indent-8">Rajkamal (2011). <em>Microcontrollers: Architecture, Programming, Interfacing and System Design</em>. Pearson Education India.</p><p className="pl-8 -indent-8">Central Pollution Control Board (CPCB) (2023). <em>Solid Waste Management Report</em>. Ministry of Environment, Forest and Climate Change, Government of India.</p>
            </div>
          </div>
        </Page>
        <Page pageNumber={33}>
          <div className="py-[2in] flex flex-col items-center justify-center">
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
