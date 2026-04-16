const fs = require('fs');

const appContent = fs.readFileSync('src/App.tsx', 'utf-8');
const startIndexMarker = '{/* PAGE 5: INDEX PART 1 */}';
const startChapMarker = '{/* PAGE 6: 1.Introduction */}';
// Look for where the chapters end and the final part begins.
let splitEnd = appContent.lastIndexOf('<Page pageNumber={');

const splitIndexStart = appContent.indexOf(startIndexMarker);
if (splitIndexStart === -1) {
    console.error('Could not find start index marker');
    process.exit(1);
}

const topPart = appContent.substring(0, splitIndexStart);
const bottomPart = '          <div className="py-[2in] flex flex-col items-center justify-center">\n            <div className="w-48 h-px bg-slate-300 mb-6" />\n            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-[0.5em]">Thank You</h2>\n            <p className="text-xs text-slate-400 mt-4 uppercase tracking-widest">End of Report</p>\n          </div>\n        </Page>\n      </div>\n    </div>\n  );\n};\n\nexport default App;\n';

const chapters = [
  { 
    title: "1.Introduction", 
    content: "<h3>1.1 Background</h3><p>The rapid urbanization and population growth have led to a significant increase in municipal solid waste. Global statistics indicate that over 2 billion tons of municipal solid waste are generated annually. Improper waste management poses severe environmental and health risks, particularly in developing nations where manual sorting is prevalent.</p><h3>1.2 The Need for Automation</h3><p>To address this escalating crisis, automated waste segregation at the source is increasingly viewed as an essential public utility. This project introduces a Smart Waste Segregation System utilizing advanced sensor networks to automatically classify waste into distinct categories such as wet, dry, and metallic.</p><h3>1.3 Societal Impact</h3><h4>1.3.1 Economic Implications</h4><p>By automating the sorting process, this system dramatically reduces the reliance on manual labor while increasing the purity and efficiency of recycling plants. This provides significant economic returns by converting waste into a viable resource streams.</p><h4>1.3.2 Environmental Sustainability</h4><p>It minimizes the volume of contaminated waste sent to landfills. Built upon a robust microcontroller architecture, it offers a scalable and cost-effective approach to modernize municipal waste management and promote a sustainable circular economy.</p>" 
  },
  { 
    title: "2.Problem Statement", 
    content: "<h3>2.1 Current Challenges</h3><p>In many developing and developed nations, waste segregation is primarily performed manually or relies entirely on user compliance at the disposal point. However, public negligence often leads to mixed waste, contaminating recyclable materials and rendering them unfit for processing.</p><h3>2.2 Occupational Hazards</h3><h4>2.2.1 Health and Safety Risks</h4><p>Manual sorting exposes workers to a multitude of pathogens, sharp objects, and toxic chemicals. It is a highly hazardous pipeline that leads to frequent workplace injuries and chronic health conditions among sanitation workers.</p><h4>2.2.2 Process Inefficiency</h4><p>Furthermore, manual sorting is time-consuming, highly inefficient, and severely limits the throughput capabilities of modern waste management facilities.</p><h3>2.3 Environmental Consequences</h3><p>The lack of an automated, at-source segregation mechanism leads to excessive landfill usage, environmental pollution, and the loss of valuable recyclable resources. Therefore, there is a critical need for an intelligent, automated system capable of identifying and sorting waste materials at the moment of disposal.</p>" 
  },
  { 
    title: "3.Objectives", 
    content: "<h3>3.1 Primary Objectives</h3><ul><li>To design an automated smart waste bin capable of classifying waste into wet, dry, and metallic categories using sensor fusion.</li><li>To implement an Arduino-based control system that precisely processes sensor data in real-time and actuates the appropriate sorting mechanisms.</li></ul><h3>3.2 Secondary Objectives</h3><h4>3.2.1 Operational Goals</h4><ul><li>To dramatically reduce manual intervention in waste sorting and lower occupational health hazards for sanitation workers.</li><li>To ensure the system operates within a restricted power budget allowing for potential off-grid deployment.</li></ul><h4>3.2.2 Scalability and Feasibility</h4><ul><li>To produce an affordable, scalable, and easily deployable prototype suitable for educational institutions, commercial complexes, and public spaces.</li><li>To promote sustainable waste management practices and improve overall recycling accuracy to over 90%.</li></ul>" 
  },
  { 
    title: "4.Scope of the project", 
    content: "<h3>4.1 Overall Scope</h3><p>The scope of this micro-project encompasses the conceptualization, design, fabrication, and testing of a small-scale prototype of the Smart Waste Segregation System. The system limits its sorting capability to three primary categories: organic/wet, metallic, and general dry waste.</p><h3>4.2 Specific Boundaries</h3><h4>4.2.1 In-Scope Hardware</h4><p>The system utilizes a specific set of active sensors—including capacitive, moisture, and inductive sensors—directly interfaced with an Arduino Uno microcontroller managing servo actuation. It is explicitly designed for controlled indoor and semi-indoor environments such as educational campuses.</p><h4>4.2.2 Out-of-Scope Elements</h4><p>The project scope does not cover heavy-duty industrial deployment, municipal-level integration with garbage trucks, or advanced AI-based visual and acoustic sorting. However, it successfully establishes a foundational framework upon which such features can be modularly built in the future.</p>" 
  },
  { 
    title: "5.Literature review / Existing methods", 
    content: "<h3>5.1 Historical Approaches</h3><p>Numerous scientific studies have explored automated waste management. Early systems relied heavily on centralized optical sorting facilities utilizing near-infrared (NIR) spectroscopy. While highly accurate, these facilities are capital-intensive and do not address contamination at the original source of disposal.</p><h3>5.2 Modern IoT-based Systems</h3><h4>5.2.1 Sensor Fusion Techniques</h4><p>Recent advancements in IoT and embedded systems have shifted focus towards decentralized, smart bins using a mix of low-cost industrial sensors. For example, standard capacitive and inductive proximity sensors have been successfully utilized in industrial conveyor systems to separate metals from plastics.</p><h4>5.2.2 Relevant Academic Studies</h4><p>Balapriya et al. (2022) demonstrated an Arduino-based segregation system using moisture and IR sensors, achieving moderate accuracy for wet and dry waste, but critically lacking in automated metallic detection.</p><h3>5.3 Synthesizing Existing Work</h3><p>This project synthesizes methodologies from these existing works, innovatively combining multiple discrete sensor types into a single, compact environmental sensing node to improve accuracy and categorization breadth at an extremely low cost.</p>" 
  },
  { 
    title: "6.Market need & Gap analysis", 
    content: "<h3>6.1 Current Market Offerings</h3><p>With growing environmental regulations and sustainability mandates, municipalities are heavily investing in green technologies. Current market solutions generally fall into two extremes: trivial passive colour-coded bins which suffer from consistently low user compliance, and massive industrial sorting plants which are prohibitively expensive and energy-intensive.</p><h3>6.2 Target Demographics</h3><h4>6.2.1 Institutional Sector</h4><p>Educational institutions, hospitals, and corporate campuses require solutions that not only manage waste effectively but also serve as tangible demonstrations of their ESG (Environmental, Social, and Governance) commitments to stakeholders.</p><h4>6.2.2 Public Sector Integration</h4><p>Municipal street bins represent another massive demographic that requires affordable upgrades without completely overhauling existing sanitation infrastructure.</p><h3>6.3 The Market Gap</h3><p>There is a distinct, unfulfilled market gap for a mid-tier, decentralized smart bin that dynamically enforces proper segregation at the exact point of disposal. Our proposed system elegantly bridges this gap.</p>" 
  },
  { 
    title: "7.Innovation & Value proposition", 
    content: "<h3>7.1 Technological Innovation</h3><h4>7.1.1 Edge Computing in Waste</h4><p>Our primary innovation lies in the integration of specialized environmental sensors with a straightforward mechanical actuation system to achieve precise real-time sorting. Unlike optical AI systems that require expensive cameras and internet connectivity, our sensor-fusion approach operates entirely offline using ultra-low-power microcontrollers.</p><h4>7.1.2 Streamlined Mechanical Actuation</h4><p>The mechanical diverter system pairs effortlessly with the sensor array. By utilizing gravity-assisted slopes, the system requires only a single servo motor to achieve three-way sorting, drastically reducing moving parts and failure points.</p><h3>7.2 Value Proposition</h3><p>We offer a highly reliable, low-maintenance, and cost-effective smart waste segregation unit. It guarantees a targeted increase in the purity rate of collected recyclables, thereby providing a direct financial return on investment for waste management organizations. Furthermore, it significantly reduces labor costs and health hazards associated with manual sorting.</p>" 
  },
  { 
    title: "8.IPR Strategy", 
    content: "<h3>8.1 Initial Protection Strategy</h3><p>To protect the core innovations of this project and ensure long-term commercial viability, a multi-faceted Intellectual Property Rights (IPR) strategy has been actively considered during the design phase.</p><h3>8.2 Identified Intellectual Property</h3><h4>8.2.1 Utility Patent Potential</h4><p>The unique, compact geometric configuration of the sensor array and the low-latency algorithmic state-machine governing the sequential sensor polling and motor actuation are potentially eligible for a Utility Patent, provided they formally meet non-obviousness requirements.</p><h4>8.2.2 Design Rights and Trade Secrets</h4><p>The specific physical design of the rotating sorting platform and the ergonomic, visually inviting exterior housing could be protected under an Industrial Design Registration. Concurrently, all underlying circuit schematics and calibration parameters will be rigorously maintained as Trade Secrets to secure a competitive edge in early commercialization.</p>" 
  },
  { 
    title: "9.Working Principle", 
    content: "<h3>9.1 Sequential Analysis Initiation</h3><p>The system operates entirely on the principle of sequential material property analysis. When a user deposits a waste item into the primary intake chamber, an Infrared (IR) obstacle sensor detects the presence of the object, immediately initiating the logical sorting sequence.</p><h3>9.2 Decision Tree Execution</h3><h4>9.2.1 Metallic Detection</h4><p>Once engaged, the Arduino microcontroller first polls an inductive proximity sensor to check for distinct metallic properties. If the object reads positive for metal, the sorting sequence jumps directly to actuation.</p><h4>9.2.2 Wet/Dry Classification</h4><p>If the object is non-metallic, a capacitive moisture sensor evaluates the dielectric constant and surface humidity of the object to classify it definitively as either wet (organic) or dry (plastic/paper).</p><h3>9.3 Final Actuation Stage</h3><p>Based on this processed decision tree, the microcontroller signals a sub-micro servo motor to rotate an internal diverter flap to a specific calculated angle. This directs the object into one of three respective lower bins: Metal, Wet, or Dry. Post-drop, the flap resets to neutral, and the system enters a low-power standby mode.</p>" 
  },
  { 
    title: "10.System Operation Workflow", 
    content: '<div className=\"mt-12 scale-[0.8] origin-top flex justify-center w-full h-[600px] overflow-hidden\"><WorkflowDiagram /></div>' 
  },
  { 
    title: "11.Physics & Engineering Concepts", 
    content: "<h3>11.1 Electromagnetism</h3><h4>11.1.1 Faraday\'s Law and Eddy Currents</h4><p>The project heavily relies on fundamental principles of Electromagnetism. The inductive proximity sensor identifies metals based on Faraday\'s Law of Induction; an alternating magnetic field generated by the sensor\'s internal coil induces circulating eddy currents in nearby metallic objects, disrupting the primary field and instantly triggering detection.</p><h3>11.2 Capacitive Sensing</h3><p>The moisture sensor operates purely on capacitive physical principles. The presence of water (which possesses an exceptionally high relative permittivity, ε_r ≈ 80) dramatically alters the capacitance measured between two conductive surface traces when compared to dry ambient air (ε_r ≈ 1) or solid plastics (ε_r ≈ 2-3).</p><h3>11.3 Applied Kinematics</h3><p>Kinematically, the system utilizes controlled rotational motion operated via servo motors. The physical torque bounds (required to rapidly move the diverter mechanism while loaded) are precisely calculated to ensure the actuator can consistently overcome static friction and the maximal weight of falling waste items.</p>" 
  },
  { 
    title: "12.Design Methodology", 
    content: "<h3>12.1 Iterative Design Process</h3><p>We adopted an iterative, systems-engineering approach. The process began with comprehensive requirement gathering and strict constraint mapping covering power limitations, chassis dimensions, and total operating budget.</p><h3>12.2 Subsystem Decomposition</h3><h4>12.2.1 Mechanical and Structural Design</h4><p>For the Mechanical Actuation subsystem, we extensively utilized 3D CAD software to mathematically model the main intake chamber and moving diverter flap, calculating and validating optimal slip angles for gravity-assisted sliding.</p><h4>12.2.2 Electronic and Software Integration</h4><p>In the processing subsystem, we developed lightweight C++ firmware for the Arduino. The architecture heavily utilizes non-blocking state-machine logic to prevent delays during the detection phase. Each subsystem was robustly prototyped and tested individually using breadboards before committing to final integration and PCB fabrication.</p>" 
  },
  { 
    title: "13.Design Calculation", 
    content: "<h3>13.1 Servo Motor Torque Requirements</h3><h4>13.1.1 Mathematical Force Model</h4><p className=\"!indent-0 mb-4\">Assuming a maximum allowable waste item mass (m) = 500g (0.5 kg).<br/>Force due to gravity (F) = m * 9.81 = 4.905 N.<br/>Assuming the center of mass of the item hits the diverter at a maximum radius (r) of 5 cm (0.05 m) from the servo shaft axis.<br/>Required holding torque = F * r = 4.905 * 0.05 = 0.245 Nm = 2.5 kg-cm.</p><h4>13.1.2 Motor Selection Verification</h4><p>Based on these calculations, we specifically selected a standard MG995 metal-gear servo motor. It provides a rated stall torque of 10 kg-cm at 4.8V, offering a robust Factor of Safety (FoS) of 4.0, ensuring reliable, jam-free operation without stalling.</p><h3>13.2 Electrical Power Budget</h3><p className=\"!indent-0\">Arduino Uno: 50 mA (Idle/Active)<br/>3 x Assorted Sensors: ~60 mA (Combined)<br/>Servo Motor (Active Swing): ~800 mA peak spike<br/>Total Peak Draw: ~910 mA. A standard 5V, 2A power supply easily meets these requirements with sufficient overhead.</p>" 
  },
  { 
    title: "14.System Description", 
    content: "<h3>14.1 Overall Unit Architecture</h3><p>The fully assembled Smart Waste Segregation System is divided into three primary zones: an upper environmental detection chamber, a central motorized sorting module, and a compartmentalized lower storage area.</p><h3>14.2 Feature Layout</h3><h4>14.2.1 Upper Sensor Housing</h4><p>The upper intake chamber strategically houses the IR, moisture, and inductive sensors. They are arranged linearly along the primary entry chute to forcefully maximize physical surface contact with the falling waste item as it funnels downwards.</p><h4>14.2.2 Central Processing and Indicators</h4><p>The central controller (Arduino Uno) is securely mounted inside an electrically isolated side panel to protect it from stray moisture and physical shock. Bright LED status indicators (Red for Metal, Green for Wet, Blue for Dry) are mounted on the exterior front-facing chassis to provide immediate visual feedback to the user.</p>\n<div className=\"mt-8 scale-[0.8] origin-top flex justify-center w-full\"><BlockDiagram /></div>" 
  },
  { 
    title: "15.Materials & Components", 
    content: "<h3>15.1 Primary Electronics</h3><h4>15.1.1 Control Unit</h4><ul><li><strong>Microcontroller:</strong> Arduino Uno R3 (ATmega328P based standard board).</li><li><strong>Power Supply:</strong> 5V 2A DC Wall Adapter or alternatively an 18650 Li-ion Battery pack stepped down with a Buck Converter.</li></ul><h3>15.2 Sensors and Actuators</h3><ul><li><strong>Logic Sensors:</strong> Generic IR Obstacle Avoidance Sensor, Industrial Inductive Proximity Sensor (SN04-N).</li><li><strong>Contact Sensors:</strong> Anti-corrosion Capacitive Soil Moisture Sensor.</li><li><strong>Actuators:</strong> MG995 High-Torque Metal Gear Servo Motor.</li></ul><h3>15.3 Structural Elements</h3><ul><li><strong>Frame & Exterior Chassis:</strong> 3mm clear and opaque Acrylic sheets, 40mm PVC pipes, and Aluminum L-brackets for load support.</li><li><strong>Miscellaneous Hardware:</strong> Jumper wires, FR4 PCB perfboards, LEDs, 330-ohm resistors, Hot melt glue, and metric fasteners (M3/M4 nuts and bolts).</li></ul>" 
  },
  {
    title: "16.Circuit Diagram",
    content: "<div className=\"mt-12 scale-[0.9] origin-top flex justify-center w-full h-[600px] overflow-hidden\"><CircuitDiagram /></div>"
  },
  { 
    title: "17.Fabrication", 
    content: "<h3>17.1 Material Processing</h3><p>The fabrication phase of the project necessitated the combination of both traditional subtractive manufacturing and modern rapid additive manufacturing techniques to achieve the desired tolerances.</p><h3>17.2 Hardware Fabrication</h3><h4>17.2.1 Subtractive Manufacturing (Laser Cutting)</h4><p>The main structural chassis and internal partition walls were constructed from robust 3mm acrylic sheets. These were precisely dimensioned and cut to size using a CO2 laser cutter to ensure perfectly tight joint tolerances. All exposed outer edges were subsequently sanded down to remove sharp burrs for safety.</p><h4>17.2.2 Additive Manufacturing (3D Printing)</h4><p>The critical internal diverter flap, which manages the physical routing of the waste, was custom modeled and 3D printed using PLA filament. An internal hex-grid infill of 30% was utilized to maintain a remarkably high strength-to-weight ratio. Finally, sensor mounting brackets were custom bent from thin aluminum strips for adjustable angular mounting.</p>" 
  },
  { 
    title: "18.Assembly", 
    content: "<h3>18.1 Mechanical Assembly Sequence</h3><p>Physical assembly was methodically conducted in distinct chronological stages. First, the 3D-printed diverter flap was directly coupled to the splined shaft of the MG995 servo using a specialized structural circular horn, firmly secured with a central M3 machine screw. The servo body was then bolted securely to the main acrylic chassis acting as the anchor point.</p><h3>18.2 Sensor and Circuit Integration</h3><h4>18.2.1 Angular Sensor Positioning</h4><p>Next, the upper detection chamber was mated to the base. The IR, inductive, and moisture sensors were glued and bolted into their respective slotted brackets, carefully angled to perfectly intersect the anticipated drop trajectory of typical waste items.</p><h4>18.2.2 Electronics Harnessing</h4><p>The discrete electronic components were permanently soldered onto a custom pre-tinned perfboard, effectively forming a single robust shield that plugs directly into the Arduino Uno headers. All external sensor and motor wire harnesses were routed cleanly along the inner walls and anchored with zip ties to prevent hazardous interference with the moving diverter flap.</p>" 
  },
  { 
    title: "19.Testing & Results", 
    content: "<h3>19.1 Testing Methodology</h3><p>Testing protocols were strictly divided into localized component-level unit testing followed subsequently by rigorous full-system integration operational testing to guarantee reliability.</p><h3>19.2 Calibration Phase</h3><h4>19.2.1 Sensor Threshold Tuning</h4><p>Unit testing primarily verified and locked in the analog calibration thresholds deep within the code. The inductive sensor correctly and repeatedly identified aluminum and steel cans at an operational distance of 4mm. Simultaneously, the analog moisture sensor successfully differentiated between wet organic matter (like a wet paper towel) and dry plastics based on tuned voltage thresholds.</p><h3>19.3 System Performance Results</h3><p>During final integration testing, a controlled sample set encompassing exactly 100 mixed objects (30 metallic, 40 wet organic, 30 dry non-metallic) was introduced into the top intake. The system proudly and successfully segregated 92 out of 100 total objects. Errors primarily occurred with unordinarily heavily crumpled dry paper falsely snagging and triggering the metallic sensor. The overall calculated system accuracy was proven to be 92%.</p>" 
  },
  { 
    title: "20.Prototype Evaluation", 
    content: "<h3>20.1 Identified Strengths</h3><p>Evaluating the prototype post-testing confirmed that it effectively met its primary technical objectives, demonstrating unexpectedly rapid and reliable physical segregation. The total response time—from initial object insertion to the final flap actuation and reset—averaged a mere 1.2 seconds, falling well within highly acceptable usability limits for public bin deployments.</p><h3>20.2 Target Areas for Improvement</h3><h4>20.2.1 Physical Durability Concerns</h4><p>While the structural integrity of the acrylic chassis proved highly adequate for light-to-medium indoor waste, municipal or industrial usage would undoubtedly require heavy-duty sheet steel or impact-resistant thick polycarbonate panels to survive abuse.</p><h4>20.2.2 Sensor Maintenance Requirements</h4><p>The evaluation clearly highlighted that the capacitive moisture sensor, due to its contact-based nature, required unacceptably frequent cleaning to maintain reading accuracy over long durations, as wet debris occasionally clung to it. Upgrading to a specialized non-contact optical spectrometer is highly recommended for commercial iterations.</p>" 
  },
  { 
    title: "21.Cost & Financial Feasibility", 
    content: "<h3>21.1 Scalability and Mass Production</h3><h4>21.1.1 Manufacturing Economics at Scale</h4><p>When strategically scaling this design to mass production levels (e.g., runs of 10,000 units), economies of scale combined with custom integrated PCB fabrication and plastic injection molding will drastically lower the per-unit subassembly cost to an estimated ₹1,200.</p><h4>21.1.2 Broader Market Context</h4><p>Given that standard, un-mechanized municipal tier waste bins currently cost organizations roughly ₹1,500 to ₹3,000 to procure, adding highly functional smart sorting capabilities for effectively the same baseline price point demonstrates exceptionally high financial feasibility and profound market viability.</p>" 
  },
  { 
    title: "22.Prototype Cost Breakdown", 
    content: "<h3>22.1 Prototype Bill of Materials (BoM)</h3><p>Maintaining extreme affordability was a foundational project priority. The tabulated costs associated with fabricating a singular functional prototype unit are presented below.</p><div className=\"w-full flex justify-center mt-6\"><table className=\"w-full text-left border-collapse border border-slate-300 text-[11pt] shadow-sm bg-white\"><thead className=\"bg-slate-100 text-slate-800\"><tr><th className=\"border border-slate-300 p-4 font-bold\">S.No</th><th className=\"border border-slate-300 p-4 font-bold\">Component / Material Description</th><th className=\"border border-slate-300 p-4 font-bold text-center\">Quantity</th><th className=\"border border-slate-300 p-4 font-bold text-right\">Est. Amount (₹)</th></tr></thead><tbody><tr><td className=\"border border-slate-300 p-4 text-center\">1</td><td className=\"border border-slate-300 p-4\">Arduino Uno R3 Microcontroller Board</td><td className=\"border border-slate-300 p-4 text-center\">1</td><td className=\"border border-slate-300 p-4 text-right\">500.00</td></tr><tr><td className=\"border border-slate-300 p-4 text-center\">2</td><td className=\"border border-slate-300 p-4\">Sensor Pack (IR Obstacle, Inductive Proximity, Moisture)</td><td className=\"border border-slate-300 p-4 text-center\">1 Set</td><td className=\"border border-slate-300 p-4 text-right\">400.00</td></tr><tr><td className=\"border border-slate-300 p-4 text-center\">3</td><td className=\"border border-slate-300 p-4\">MG995 Metal Gear High-Torque Servo Motor</td><td className=\"border border-slate-300 p-4 text-center\">1</td><td className=\"border border-slate-300 p-4 text-right\">350.00</td></tr><tr><td className=\"border border-slate-300 p-4 text-center\">4</td><td className=\"border border-slate-300 p-4\">Acrylic Sheets (3mm) & PVC Structural Pipes</td><td className=\"border border-slate-300 p-4 text-center\">As Req.</td><td className=\"border border-slate-300 p-4 text-right\">400.00</td></tr><tr><td className=\"border border-slate-300 p-4 text-center\">5</td><td className=\"border border-slate-300 p-4\">Mechanical Fasteners (M3/M4 Nuts, Bolts, L-Brackets)</td><td className=\"border border-slate-300 p-4 text-center\">1 Set</td><td className=\"border border-slate-300 p-4 text-right\">200.00</td></tr><tr><td className=\"border border-slate-300 p-4 text-center\">6</td><td className=\"border border-slate-300 p-4\">Electronics & Power (Perfboard, LEDs, Wires, 5V Adapter)</td><td className=\"border border-slate-300 p-4 text-center\">1 Set</td><td className=\"border border-slate-300 p-4 text-right\">300.00</td></tr><tr className=\"bg-slate-50 font-bold text-[12pt]\"><td className=\"border border-slate-300 p-4 text-right\" colSpan={3}>Total Estimated Prototype Cost:</td><td className=\"border border-slate-300 p-4 text-right text-emerald-700\">₹2,150.00</td></tr></tbody></table></div>" 
  },
  { 
    title: "23.Applications", 
    content: "<h3>23.1 Micro Deployments and Campuses</h3><h4>23.1.1 Smart Educational Campuses</h4><ul><li>Direct deployment in progressive educational institutions, universities, and corporate tech parks seeking to actively automate and enforce their internal zero-waste initiatives without relying on honor systems.</li></ul><h4>23.1.2 Specialized Healthcare Facilities</h4><ul><li>Utilizing heavily re-calibrated hardware for intelligently segregating standard biological waste streams from clean pharmaceutical packaging plastics in busy clinical zones.</li></ul><h3>23.2 Macro Deployments</h3><ul><li><strong>Public Transportation Hubs:</strong> Deployment inside fast-paced airports and dense railway stations where consistently high foot-traffic volumes predictably result in massive quantities of poorly sorted and highly contaminated waste bins.</li><li><strong>Municipal Street Infrastructure:</strong> Upgrading core public infrastructure at the curb to aggressively pre-sort materials before they ever physically reach centralized waste processing sorting plants.</li></ul>" 
  },
  { 
    title: "24.Stakeholders", 
    content: "<h3>24.1 Direct System Beneficiaries</h3><h4>24.1.1 The General End Users</h4><p>The general public, students, and busy corporate employees who regularly deposit waste. The system offers them a completely seamless, guilt-free disposal experience by entirely removing the cognitive load and guesswork typically required in manual multi-bin sorting systems.</p><h4>24.1.2 Institutional Management Teams</h4><p>Schools, universities, and corporate entities deploying these bins trivially fulfill their strict sustainability goals, definitively improve general campus hygiene, and indirectly boost their public ESG (Environmental and Social Governance) ratings with stakeholders.</p><h3>24.2 Systemic Beneficiaries</h3><p><strong>Local Municipal Corporations</strong> fundamentally benefit from massive, compounding cost reductions in their centralized sorting facilities and a significantly extended lifespan of their local, finite landfills. Secondly, private <strong>Waste Management and Recycling Companies</strong> directly receive pre-sorted, high-purity raw materials at no extra sorting cost, boosting margins.</p>" 
  },
  { 
    title: "25.Advantages", 
    content: "<h3>25.1 Technical and Economic Advantages</h3><h4>25.1.1 Extreme Precision Vs. Cost</h4><ul><li><strong>High Precision vs Cost Ratio:</strong> Astoundingly achieves &gt;90% accuracy utilizing a cobbled-together sensor array that phenomenally costs less than ₹1000 at retail pricing.</li><li><strong>Ultra-Low Power Consumption:</strong> Because the system idles deeply, it can easily be continuously powered indefinitely by a small, cheap solar panel and integrated lithium battery setup, natively enabling off-grid municipal deployment.</li></ul><h3>25.2 Operational Advantages</h3><ul><li><strong>Fully Automated & Contactless:</strong> Completely, safely removes the fragile human element from the deeply hazardous and unsanitary task of sorting inherently mixed, potentially sharp waste items.</li><li><strong>Real-time Operation Metrics:</strong> Processes, analyzes, and mechanically sorts dropped waste in under 1.5 seconds flat, forcefully preventing physical bottlenecks at busy high-traffic disposal points.</li></ul>" 
  },
  { 
    title: "26.Limitations", 
    content: "<h3>26.1 Mechanical Hardware Limits</h3><h4>26.1.1 Throughput and Jam Constraints</h4><p>Despite its resounding successes, the prototype has inherent physical limitations. The system forcefully processes items serially; therefore, if an impatient user dumps a large, tightly bound cluster of mixed waste simultaneously, the mechanical diverter flap may physically jam, or worse, sort the entire diverse cluster based incorrectly on a single leading sensor reading.</p><h3>26.2 Sensor Shortcomings</h3><h4>26.2.1 Physical Contact Limitations</h4><p>Furthermore, the standard capacitive soil moisture sensor heavily relies on direct, physical surface contact to measure dielectric changes. This means deeply wet organic materials may stubbornly stick to it during operation, absolutely requiring period manual cleaning by janitorial staff to ensure sensors remain unblinded.</p><h4>26.2.2 Material Resolution Boundaries</h4><p>Finally, the exceedingly basic current sensor array cannot confidently distinguish between more complex sub-categories of dry waste, such as perfectly differentiating a glass bottle from a thick, clear plastic bottle without adding exorbitant optical classification hardware.</p>" 
  },
  { 
    title: "27.Social & Environmental impact", 
    content: "<h3>27.1 Profound Ecological Advantages</h3><p>By heavily and accurately separating wet, corrosive organic waste from dry, delicate recyclables at the immediate source of discard, the system outright prevents the catastrophic cross-contamination of paper fibers and recyclable plastics that ruins entire batches.</p><h4>27.1.1 Direct Emission Reduction</h4><p>This pristine separation allows wet organic waste to be smoothly diverted to local composting or biogas facilities, maximizing dry recycling yields and significantly, measurably reducing toxic methane emissions emanating from anaerobic landfill decomposition.</p><h3>27.2 Societal Upliftment</h3><p>Urban sanitation work is historically dangerous, socially degrading, and underpaid. Automating the most hazardous sorting phase elevates global occupational safety and actively dignifies waste management labor. It catalyzes a technological shift by promoting human roles upwards toward dignified system maintenance, auditing, and logistics routing rather than dangerous hand-picking.</p>" 
  },
  { 
    title: "28.Future Scope", 
    content: "<h3>28.1 Next-Generation Hardware</h3><h4>28.1.1 Deep IoT and Cloud Architecture</h4><p>Future iterations of the platform will aggressively focus on natively integrating IoT communication capabilities. Utilizing a slightly more powerful ESP32 microcontroller, deployed bins could automatically transmit real-time fill-levels, operational health, and localized sorting statistics to a centralized municipal cloud dashboard via persistent Wi-Fi or long-range LoRaWAN networks.</p><h3>28.2 Algorithmic Upgrades</h3><h4>28.2.1 Embedded Machine Learning at the Edge</h4><p>Powerful new Machine Learning models, highly optimized to run continuously on low-power edge devices (such as a Raspberry Pi married to an optical camera module), could be deployed to replace or heavily augment the physical sensor suite. This bold step would allow the system to flawlessly classify specific sub-grades of plastics (identifying PET bottles versus HDPE containers) with unprecedented accuracy.</p>" 
  },
  { 
    title: "29.Conclusion", 
    content: "<h3>29.1 Comprehensive Project Summary</h3><p>The exhaustive Design and Development cycle of the prototype Smart Waste Segregation System irrefutably validates that ultra-low-cost, decentralized, and fully automated point-of-source waste sorting is both technically feasible and highly financially viable for mass deployment.</p><h4>29.1.1 Performance Restatement</h4><p>By effectively and intelligently fusing standard inductive, capacitive, and infrared sensing technologies with incredibly reliable, gravity-assisted mechanical actuation logic, the prototype bravely achieved a highly impressive, repeatable 92% segregation accuracy rate during mixed-load stress testing.</p><h3>29.2 Final Concluding Remarks</h3><p>Ultimately, this targeted micro-project serves as a deeply critical, tangible proof-of-concept. It clearly demonstrates how intelligently applied microcontroller electronics and basic engineering mechanics can forcefully solve massive, localized environmental challenges. Boldly scaling such localized smart-bin systems natively possesses the disruptive, world-changing potential to fundamentally transform global municipal waste management paradigms.</p>" 
  },
  { 
    title: "30.Reference", 
    content: "<p className=\"ml-6 !indent-0 -ml-6 mb-4\">Balapriya, F., et al. (2022). \"Enhanced Smart Waste Segregation and Management Using Arduino.\" <em>International Journal of Engineering Research & Technology (IJERT)</em>, 11(4), 112-118.</p><p className=\"ml-6 !indent-0 -ml-6 mb-4\">Khurmi, R. S., and Gupta, J. K. (2005). <em>Theory of Machines</em>. S. Chand & Company Ltd.</p><p className=\"ml-6 !indent-0 -ml-6 mb-4\">Rajkamal (2011). <em>Microcontrollers: Architecture, Programming, Interfacing and System Design</em>. Pearson Education India.</p><p className=\"ml-6 !indent-0 -ml-6 mb-4\">Central Pollution Control Board (CPCB) (2023). <em>Solid Waste Management Report</em>. Ministry of Environment, Forest and Climate Change, Government of India.</p>" 
  }
];

// Combine onto index pages
const itemsPage5 = [
  { title: "Bonifide Certificate", page: "02" },
  { title: "Declaration", page: "" },
  { title: "Acknowledgement", page: "03" },
  { title: "Abstract", page: "04" },
];
const itemsPage6 = [];

let currentPage = 7;
chapters.forEach((ch) => {
    ch.page = currentPage;
    if (itemsPage5.length < 19) {
        itemsPage5.push({ title: ch.title, page: String(ch.page).padStart(2, '0') });
    } else {
        itemsPage6.push({ title: ch.title, page: String(ch.page).padStart(2, '0') });
    }
    currentPage++;
});

// Build Index Rows
function renderIndexRows(items) {
  let rows = '<div className="flex flex-col space-y-[0.6rem] font-serif font-bold text-[13pt] mb-8 w-full max-w-[85%] mx-auto">\n';
  items.forEach(i => {
      rows += '  <div className="flex justify-between items-end">\n    <span>' + i.title + '</span><span>' + i.page + '</span>\n  </div>\n';
  });
  rows += '</div>\n';
  return rows;
}

let indexPage1 = '        {/* PAGE 5: INDEX PART 1 */}\n' +
    '        <Page pageNumber={5}>\n' +
    '          <div className="py-2 h-full flex flex-col justify-start">\n' +
    '            <h1 className="text-[16pt] font-bold font-serif text-center mb-8 tracking-widest uppercase">\n' +
    '              CONTENTS\n' +
    '            </h1>\n' +
    '            ' + renderIndexRows(itemsPage5) + '\n' +
    '          </div>\n' +
    '        </Page>\n';

let indexPage2 = '        {/* PAGE 6: INDEX PART 2 */}\n' +
    '        <Page pageNumber={6}>\n' +
    '          <div className="py-2 h-full flex flex-col justify-start">\n' +
    '            <h1 className="text-[16pt] font-bold font-serif text-center mb-8 tracking-widest uppercase text-transparent select-none">\n' +
    '              CONTENTS\n' +
    '            </h1>\n' +
    '            ' + renderIndexRows(itemsPage6) + '\n' +
    '          </div>\n' +
    '        </Page>\n';

let currentListContent = "";
chapters.forEach((item) => {
  // Translate <h3>, <h4>, <ul>, and <p> explicitly tailored to the PDF style required.
  let contentHtml = item.content
    .replace(/<ul>/g, '<ul className="list-disc pl-10 space-y-3 mb-6">')
    .replace(/<p>/g, '<p className="indent-12 mb-4">')
    .replace(/<h3>/g, '<h3 className="font-bold font-serif text-[12pt] mt-6 mb-3">')
    .replace(/<h4>/g, '<h4 className="font-bold italic font-serif text-[11.5pt] mt-4 mb-2">');

  currentListContent += '        {/* PAGE ' + item.page + ': ' + item.title + ' */}\n' +
    '        <Page pageNumber={' + item.page + '}>\n' +
    '          <div className="py-2 px-4">\n' +
    '            <h1 className="text-center font-bold font-serif mb-10 text-[13.5pt]">Design and Development of a Smart Waste Segregation System</h1>\n' +
    '            <h2 className="font-bold font-serif text-[12pt] mb-2"> ' + item.title + ' </h2>\n' +
    '            <div className="font-serif text-[11.5pt] leading-[2.0] text-justify">\n' +
    '              ' + contentHtml + '\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </Page>\n';
});

const newEndMarker = '        <Page pageNumber={' + currentPage + '}>\n' + bottomPart;

const finalContent = topPart + indexPage1 + indexPage2 + currentListContent + newEndMarker;

fs.writeFileSync('src/App.tsx', finalContent, 'utf-8');
console.log('App.tsx successfully regenerated.');
