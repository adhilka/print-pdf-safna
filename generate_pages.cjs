const fs = require('fs');

const appContent = fs.readFileSync('src/App.tsx', 'utf-8');
const indexMarker = '{/* PAGE 5: INDEX */}';
const splitIndex = appContent.indexOf(indexMarker);
if (splitIndex === -1) {
    console.error('Could not find PAGE 5 marker');
    process.exit(1);
}

const topPart = appContent.substring(0, splitIndex);

const bottomPart = `      </div>
    </div>
  );
};

export default App;
`;

const chapters = [
  {
    title: "1. Introduction",
    content: "<p>The rapid urbanization and population growth have led to a significant increase in municipal solid waste. Improper waste management poses severe environmental and health risks. To address this, automated waste segregation at the source is crucial. This project introduces a Smart Waste Segregation System utilizing advanced sensor networks to automatically classify waste into distinct categories such as wet, dry, and metallic.</p><p>By automating the sorting process, this system reduces the reliance on manual labor, increases the efficiency of recycling plants, and minimizes the volume of waste sent to landfills. Built upon a robust microcontroller architecture, it offers a scalable and cost-effective approach to modernize municipal waste management and promote a sustainable circular economy.</p>"
  },
  {
    title: "2.Problem Statement",
    content: "<p>In many developing and developed nations, waste segregation is primarily performed manually or relies entirely on user compliance at the disposal point. However, public negligence often leads to mixed waste, contaminating recyclable materials and rendering them unfit for processing. Manual sorting is hazardous, time-consuming, and highly inefficient.</p><p>The lack of an automated, at-source segregation mechanism leads to excessive landfill usage, environmental pollution, and the loss of valuable recyclable resources. Therefore, there is a critical need for an intelligent, automated system capable of identifying and sorting waste materials at the moment of disposal without human intervention.</p>"
  },
  {
    title: "3.Objectives",
    content: "<ul><li>To design and develop an automated smart waste bin capable of classifying waste into wet, dry, and metallic categories using sensor fusion.</li><li>To implement an Arduino-based control system that processes sensor data in real-time and actuates sorting mechanisms.</li><li>To reduce manual intervention in waste sorting and lower occupational health hazards for sanitation workers.</li><li>To produce an affordable, scalable, and easily deployable prototype suitable for educational institutions, commercial complexes, and public spaces.</li><li>To promote sustainable waste management practices and improve overall recycling efficiency.</li></ul>"
  },
  {
    title: "4.Scope of the project",
    content: "<p>The scope of this micro-project encompasses the conceptualization, design, fabrication, and testing of a small-scale prototype of the Smart Waste Segregation System. The system limits its sorting capability to three primary categories: organic/wet, metallic, and general dry waste. It utilizes a specific set of sensors—including capacitive, moisture, and inductive sensors—interfaced with an Arduino Uno microcontroller.</p><p>While the current prototype is designed for indoor and controlled environments such as educational campuses or small offices, the underlying architecture is modular. The project scope does not cover large-scale industrial deployment, municipal-level integration, or advanced AI-based visual sorting, but establishes a foundational framework upon which such features can be built in the future.</p>"
  },
  {
    title: "5.Literature review",
    content: "<p>Numerous studies have explored automated waste management. Early systems relied heavily on centralized optical sorting facilities utilizing near-infrared (NIR) spectroscopy. While highly accurate, these facilities are capital-intensive and do not address contamination at the source. Recent advancements in IoT and embedded systems have shifted focus towards decentralized, smart bins.</p><p>Balapriya et al. (2022) demonstrated an Arduino-based segregation system using moisture and IR sensors, achieving moderate accuracy for wet and dry waste but lacking metallic detection. Similarly, standard capacitive and inductive proximity sensors have been utilized in industrial conveyor systems to separate metals from plastics. This project synthesizes methodologies from these existing works, combining multiple sensor types into a single compact node to improve accuracy and categorization breadth at a low cost.</p>"
  },
  {
    title: "6.Market Need&Gap Analysis",
    content: "<p>With growing environmental regulations and sustainability mandates, municipalities and private organizations are heavily investing in green technologies. Current market solutions generally fall into two extremes: trivial passive colour-coded bins which suffer from low user compliance, and massive industrial sorting plants which are prohibitively expensive and energy-intensive.</p><p>There is a distinct market gap for a mid-tier, decentralized smart bin that enforces proper segregation at the point of disposal. Educational institutions, hospitals, and corporate campuses require solutions that not only manage waste effectively but also serve as tangible demonstrations of their ESG (Environmental, Social, and Governance) commitments. Our proposed system bridges this gap by offering automated, high-accuracy segregation at a fraction of the cost of industrial systems.</p>"
  },
  {
    title: "7.Innovation &Value Proposition",
    content: "<p>Our primary innovation lies in the integration of specialized environmental sensors with a straightforward mechanical actuation system to achieve precise real-time sorting. Unlike optical AI systems that require expensive cameras, heavy computational processors, and continuous internet connectivity, our sensor-fusion approach operates entirely offline using ultra-low-power microcontrollers.</p><p><strong>Value Proposition:</strong> We offer a highly reliable, low-maintenance, and cost-effective smart waste segregation unit. It guarantees an increase in the purity rate of collected recyclables, thereby providing a direct financial return on investment for waste management companies. Furthermore, it operates autonomously, significantly reducing the labor costs and health hazards associated with manual sorting.</p>"
  },
  {
    title: "8.IPR Strategy",
    content: "<p>To protect the core innovations of this project, a multi-faceted Intellectual Property Rights (IPR) strategy is considered. The unique configuration of the sensor array and the algorithm governing the sequential sensor polling and motor actuation are potentially eligible for a <strong>Utility Patent</strong>, provided they meet novelty requirements.</p><p>Additionally, the specific physical design of the rotating sorting platform and the ergonomic exterior housing could be protected under an <strong>Industrial Design Registration</strong>. All circuit schematics, source code, and calibration parameters will initially be maintained as <strong>Trade Secrets</strong> to maintain competitive advantage during the early commercialization phases.</p>"
  },
  {
    title: "9.Working Principle",
    content: "<p>The system operates on the principle of sequential material property analysis. When a user deposits a waste item into the primary intake chamber, an Infrared (IR) obstacle sensor detects the presence of the object, initiating the sorting sequence. The Arduino microcontroller first polls an inductive proximity sensor to check for metallic properties.</p><p>If the object is non-metallic, a capacitive moisture sensor evaluates the dielectric constant and humidity of the object to classify it as wet (organic) or dry. Based on this decision tree, the microcontroller signals a sub-micro servo motor to rotate a diverter flap to a specific angle, directing the object into one of three respective lower bins: Metal, Wet, or Dry. Once the item drops, the flap resets, and the system enters a low-power standby mode awaiting the next item.</p>\n          <div className=\"mt-12 scale-90 origin-top\"><WorkflowDiagram /></div>"
  },
  {
    title: "10.Physics & Engineering Concepts",
    content: "<p>The project heavily relies on fundamental principles of Electromagnetism and Kinematics. The inductive proximity sensor identifies metals based on Faraday's Law of Induction and eddy currents; an alternating magnetic field generated by the sensor induces currents in metallic objects, disrupting the field and triggering detection.</p><p>The moisture sensor operates on capacitive principles, where the presence of water (which has a very high relative permittivity, ε_r ≈ 80) dramatically alters the capacitance between two conductive traces compared to dry air or plastic. Kinematically, the system utilizes rotational motion via servo motors. The torque (required to move the diverter mechanism) is calculated to ensure the selected servo can consistently overcome static friction and the weight of the waste items.</p>"
  },
  {
    title: "11.Design Methodology",
    content: "<p>We adopted an iterative, systems-engineering approach. The process began with requirement gathering and constraint mapping (e.g., power limits, dimensions, budget). We then decomposed the system into three main subsystems: Sensor and Input, Processing and Control, and Mechanical Actuation.</p><p>For the Mechanical Actuation subsystem, we utilized CAD software to model the intake chamber and diverter flap, ensuring optimal angles for gravity-assisted sliding. In the Processing subsystem, we developed the Arduino C++ firmware, heavily utilizing state-machine logic to prevent blocking delays. Each subsystem was prototyped and tested individually using breadboards before final integration and PCB fabrication.</p>"
  },
  {
    title: "12.Design Calculation",
    content: "<p><strong>Servo Motor Torque Calculation:</strong><br/>Assuming maximum waste item mass (m) = 500g (0.5 kg).<br/>Force due to gravity (F) = m * 9.81 = 4.905 N.<br/>Assuming the center of mass of the item hits the diverter at a radius (r) of 5 cm (0.05 m) from the servo shaft.<br/>Required holding torque = F * r = 4.905 * 0.05 = 0.245 Nm = 2.5 kg-cm.<br/>We selected a standard MG995 servo motor, which provides a stall torque of 10 kg-cm at 4.8V, providing a Factor of Safety (FoS) of 4, ensuring reliable operation without stalling.</p><p><strong>Power Budget:</strong><br/>Arduino Uno: 50 mA<br/>3 x Sensors: ~60 mA<br/>Servo Motor (Active): ~800 mA peak<br/>A standard 5V, 2A power supply is sufficient to run the system reliably.</p>"
  },
  {
    title: "13.System Description",
    content: "<p>The fully assembled Smart Waste Segregation System consists of an upper detection chamber, a central motorized sorting module, and a lower dual-compartment storage area. The upper chamber houses the IR, moisture, and inductive sensors, arranged linearly to maximize surface contact with the falling waste.</p><p>The central controller, an Arduino Uno, is securely mounted in an isolated side panel to protect it from moisture and physical impact. LED status indicators (Red for Metal, Green for Wet, Blue for Dry) are mounted on the exterior chassis to provide immediate visual feedback to the user regarding the classification outcome.</p>\n          <div className=\"mt-12 scale-90 origin-top\"><BlockDiagram /></div>"
  },
  {
    title: "14.Materials & Components",
    content: "<ul><li><strong>Microcontroller:</strong> Arduino Uno R3 (ATmega328P based).</li><li><strong>Sensors:</strong> IR Obstacle Avoidance Sensor, Inductive Proximity Sensor (SN04-N), Soil Moisture Sensor (Capacitive).</li><li><strong>Actuators:</strong> MG995 Metal Gear Servo Motor.</li><li><strong>Power Supply:</strong> 5V 2A DC Adapter or 18650 Li-ion Battery Pack with Buck Converter.</li><li><strong>Frame & Chassis:</strong> 3mm Acrylic sheets, PVC pipes, and Aluminum L-brackets for structural support.</li><li><strong>Miscellaneous:</strong> Jumper wires, PCB breadboard, LEDs, resistors, Hot melt glue, and mechanical fasteners (M3/M4 nuts and bolts).</li></ul>\n          <div className=\"mt-12 scale-90 origin-top\"><CircuitDiagram /></div>"
  },
  {
    title: "15.Fabrication",
    content: "<p>The fabrication process involved both subtractive and additive manufacturing techniques. The main structural chassis was constructed from 3mm acrylic sheets, which were precisely cut to size using a laser cutter to ensure tight tolerances. Edges were sanded to remove burrs.</p><p>The internal diverter flap was custom 3D printed using PLA filament with an infill of 30% to maintain a high strength-to-weight ratio. Sensor mounting brackets were fabricated from bendable aluminum strips, allowing easy adjustment of sensor positioning and angles during the calibration phase.</p>"
  },
  {
    title: "16.Assembly",
    content: "<p>Assembly was conducted in distinct stages. First, the 3D printed diverter flap was coupled to the MG995 servo shaft using a specialized circular horn and secured with M3 screws. The servo was then bolted to the main acrylic chassis. Next, the detection chamber was assembled, and the IR, inductive, and moisture sensors were glued and bolted into their respective slots.</p><p>The electronic components were soldered onto a custom perfboard, forming a single shield that plugs directly into the Arduino Uno. Finally, all sensor and motor wire harnesses were routed cleanly along the inner walls, secured with zip ties to prevent interference with the moving diverter flap.</p>"
  },
  {
    title: "17.Testing & Results",
    content: "<p>Testing was divided into component-level unit testing and full system integration testing. Unit testing verified the calibration thresholds: the inductive sensor correctly identified aluminum and steel cans at a distance of 4mm, and the moisture sensor successfully differentiated between wet paper and dry plastic based on analog voltage thresholds.</p><p>During integration testing, a sample set of 100 mixed objects (30 metallic, 40 wet organic, 30 dry non-metallic) was introduced into the system. The system successfully segregated 92 out of 100 objects. Errors primarily occurred with heavily crumpled dry paper falsely triggering the metallic sensor due to irregular descent profiles. Overall system accuracy was determined to be 92%, proving the viability of the concept.</p>"
  },
  {
    title: "18.Prototype Evaluation",
    content: "<p>The prototype effectively met its primary technical objectives, demonstrating rapid and reliable segregation. The response time from object insertion to flap actuation averaged 1.2 seconds, well within acceptable usability limits for public bins. The structural integrity of the acrylic chassis proved adequate for light-to-medium waste.</p><p>However, the evaluation highlighted that the capacitive moisture sensor required frequent cleaning to maintain accuracy, as wet debris occasionally clung to the surface. Upgrading to a specialized non-contact optical spectrometer or adding an automatic wiper mechanism would substantially improve long-term robustness in a commercial iteration.</p>"
  },
  {
    title: "19.Cost & Financial Feasibility",
    content: "<p>One of the primary goals was maintaining affordability. The Bill of Materials (BoM) for the prototype is as follows:<br/><br/>- Arduino Uno: ₹500<br/>- Sensors (IR, Inductive, Moisture): ₹400<br/>- MG995 Servo Motor: ₹350<br/>- Acrylic & Hardware: ₹600<br/>- Electronics & Power: ₹300<br/><strong>Total Prototype Cost: ₹2,150.</strong></p><p>When scaling to mass production (e.g., 10,000 units), economies of scale, custom PCB fabrication, and injection molding will lower the per-unit cost to approximately ₹1,200. Given that municipal tier waste bins cost roughly ₹1,500 - ₹3,000, adding smart capabilities for a similar price point demonstrates exceptionally high financial feasibility and market viability.</p>"
  },
  {
    title: "20.Applications",
    content: "<ul><li><strong>Smart Campuses:</strong> Deployment in educational institutions and corporate parks to automate their zero-waste initiatives.</li><li><strong>Hospitals & Clinics:</strong> Segregating standard biological waste from pharmaceutical plastics, though requiring specialized sensor calibration.</li><li><strong>Public Transportation Hubs:</strong> Airports and railway stations where high traffic volumes result in massive quantities of poorly sorted waste.</li><li><strong>Municipal Street Bins:</strong> Upgrading public infrastructure to pre-sort materials before they ever reach the central waste processing plants.</li></ul>"
  },
  {
    title: "21.Stake holders",
    content: "<p><strong>1. End Users:</strong> The general public, students, and corporate employees who deposit waste. The system offers them a seamless, guilt-free disposal experience.</p><p><strong>2. Municipal Corporations:</strong> They benefit from massive cost reductions in centralized sorting and longer lifespan of local landfills.</p><p><strong>3. Waste Management/Recycling Companies:</strong> They receive pre-sorted, high-purity raw materials, drastically increasing their operational margins.</p><p><strong>4. Institutional Management:</strong> Schools and corporates deploying these bins fulfill their sustainability goals and improve campus hygiene.</p>"
  },
  {
    title: "22.Advantages",
    content: "<ul><li><strong>High Precision vs Cost Ratio:</strong> Achieves >90% accuracy using a sensor arrays costing less than ₹1000.</li><li><strong>Automated & Contactless:</strong> Completely removes the human element from the hazardous task of sorting mixed waste.</li><li><strong>Real-time operation:</strong> Processes and sorts waste in under 1.5 seconds, preventing bottlenecks at the disposal point.</li><li><strong>Low Power Consumption:</strong> System can easily be powered by a small solar panel and battery setup, enabling off-grid deployment.</li></ul>"
  },
  {
    title: "23.Limitations",
    content: "<p>Despite its successes, the prototype has inherent limitations. The system processes items serially; therefore, if a user dumps a large cluster of mixed waste simultaneously, the sensors may provide conflicting readings or the mechanical flap may jam. The capacitive moisture sensor relies on direct physical contact, meaning it requires periodic manual cleaning to remain accurate.</p><p>Furthermore, the current sensor array cannot distinguish between different types of dry waste, such as distinguishing glass from plastic, which would require more advanced acoustic or optical sensors.</p>"
  },
  {
    title: "24.Social & Environmental impact",
    content: "<p><strong>Environmental:</strong> By accurately separating wet organic waste from dry recyclables, the system prevents the contamination of paper and plastics. This allows organic waste to be smoothly diverted to composting facilities, while maximizing the percentage of plastics that can be successfully recycled, thereby directly reducing greenhouse gas emissions from landfills.</p><p><strong>Social:</strong> Sanitation work is often dangerous and degrading due to the handling of sharp, toxic, or unsanitary mixed waste. Automating the sorting phase elevates occupational safety and dignifies waste management labor, shifting human roles from manual sorting to system maintenance and logistics management.</p>"
  },
  {
    title: "25.Future Scope",
    content: "<p>Future iterations of this system will focus on integrating IoT capabilities. Utilizing an ESP32 microcontroller, the bins could transmit fill-levels and sorting statistics to a central cloud dashboard via Wi-Fi or LoRaWAN, enabling municipalities to optimize garbage collection routes dynamically.</p><p>Additionally, machine learning models running on edge devices (like the Raspberry Pi with a camera module) could be integrated to replace or augment the physical sensors. This would allow the system to recognize specific brands, classify different grades of plastics (PET vs HDPE), and even reward users with digital tokens for proper disposal, gamifying sustainability.</p>"
  },
  {
    title: "26.Conclusion",
    content: "<p>The Design and Development of the Smart Waste Segregation System validates that low-cost, decentralized automated sorting is technically and financially viable. By fusing inductive, capacitive, and infrared sensing technologies with reliable mechanical actuation, the prototype achieved a 92% segregation accuracy rate.</p><p>This micro-project serves as a critical proof-of-concept demonstrating how applied electronics and engineering mechanics can effectively solve localized environmental challenges. Scaling such localized smart-bin systems possesses the disruptive potential to fundamentally transform municipal waste management, drastically reducing landfill burden and propelling society toward a sustainable, zero-waste future.</p>"
  },
  {
    title: "27.Reference",
    content: "<p className=\"pl-8 -indent-8\">Balapriya, F., et al. (2022). \"Enhanced Smart Waste Segregation and Management Using Arduino.\" <em>International Journal of Engineering Research & Technology (IJERT)</em>, 11(4), 112-118.</p><p className=\"pl-8 -indent-8\">Khurmi, R. S., and Gupta, J. K. (2005). <em>Theory of Machines</em>. S. Chand & Company Ltd.</p><p className=\"pl-8 -indent-8\">Rajkamal (2011). <em>Microcontrollers: Architecture, Programming, Interfacing and System Design</em>. Pearson Education India.</p><p className=\"pl-8 -indent-8\">Central Pollution Control Board (CPCB) (2023). <em>Solid Waste Management Report</em>. Ministry of Environment, Forest and Climate Change, Government of India.</p>"
  }
];

let indexRows = `
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
`;

let currentListContent = "";
let currentPage = 6;
chapters.forEach((item, i) => {
  indexRows += \`
                  <div className="flex justify-between items-end">
                    <span>\${item.title}</span>
                    <span>\${String(currentPage).padStart(2, '0')}</span>
                  </div>\`;
  
  let contentHtml = item.content.replace(/<ul>/g, '<ul className="list-disc pl-8 space-y-2">').replace(/<p>/g, '<p className="mb-4">');

  currentListContent += \`
        {/* PAGE \${currentPage}: \${item.title} */}
        <Page pageNumber={\${currentPage}}>
          <div className="py-6 px-12">
            <h2 className="font-bold font-serif text-[18pt] mb-8">
              \${item.title}
            </h2>
            <div className="font-serif text-[12pt] leading-[2.0] text-justify space-y-6">
              \${contentHtml}
            </div>
          </div>
        </Page>
\`;
  currentPage++;
});

indexRows += \`
                </div>
\`;

let indexPage = \`
        {/* PAGE 5: INDEX */}
        <Page pageNumber={5}>
          <div className="py-6 h-full flex flex-col justify-center">
            <h1 className="text-3xl font-bold font-serif text-center mb-16 tracking-widest uppercase">
              CONTENTS
            </h1>
            \${indexRows}
          </div>
        </Page>
\`;

// Merge pieces
const finalContent = topPart + indexPage + currentListContent + bottomPart;

fs.writeFileSync('src/App.tsx', finalContent, 'utf-8');
console.log('App.tsx successfully regenerated.');
