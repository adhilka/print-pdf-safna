const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The new 5 pages
const newPages = `
        {/* PAGE 1: TITLE PAGE */}
        <Page pageNumber={1}>
          <div className="h-full flex flex-col items-center justify-center py-10">
            <h2 className="text-lg font-serif mb-8">PROJECT REPORT ON</h2>
            <h1 className="text-3xl font-bold font-serif mb-12 uppercase tracking-widest text-center">
              Smart Waste Segregation Using Sensors
            </h1>
            
            <p className="text-md font-serif italic mb-8 text-center max-w-2xl">
              Submitted in partial fulfillment of the requirements for the award of the degree of
            </p>
            
            <h2 className="text-xl font-bold font-serif mb-8 text-center">
              BACHELOR OF TECHNOLOGY
            </h2>
            <p className="text-md font-serif italic mb-8">in</p>
            <h2 className="text-xl font-bold font-serif mb-12 text-center">
              ELECTRONICS AND COMMUNICATION ENGINEERING
            </h2>

            <img 
              src="https://i.ibb.co/FL4T3YZR/Screenshot-2026-04-15-15-31-31-859-com-google-android-apps-docs-edit.jpg" 
              alt="College Logo" 
              className="w-48 h-48 object-contain mb-12"
            />

            <div className="text-center mb-12">
              <p className="text-lg font-serif italic mb-4">Submitted By</p>
              <div className="space-y-2 text-md font-serif font-bold uppercase">
                <p>NOOR FATHIMA A</p>
                <p>SAFNA FATHIMA S S</p>
                <p>NOORUL SURUMI NF</p>
                <p>AMINA S</p>
                <p>MUHAMMED RAMEES N</p>
              </div>
            </div>

            <div className="text-center font-serif font-bold text-lg mt-auto">
              <p>MUSLIM ASSOCIATION COLLEGE OF ENGINEERING</p>
              <p>VENJARAMOODU 695607</p>
              <p className="mt-8">MAY 2026</p>
            </div>
          </div>
        </Page>

        {/* PAGE 2: CERTIFICATE */}
        <Page pageNumber={2}>
          <div className="h-full flex flex-col items-center py-10">
            <h2 className="text-xl font-bold font-serif text-center mb-4">
              MUSLIM ASSOCIATION COLLEGE OF ENGINEERING
            </h2>
            <h3 className="text-lg font-bold font-serif text-center mb-8">
              VENJARAMOODU 695607
            </h3>
            <h3 className="text-lg font-serif text-center mb-8 uppercase">
              DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING
            </h3>

            <img 
              src="https://i.ibb.co/FL4T3YZR/Screenshot-2026-04-15-15-31-31-859-com-google-android-apps-docs-edit.jpg" 
              alt="College Logo" 
              className="w-40 h-40 object-contain mb-8"
            />

            <h1 className="text-2xl font-bold font-serif mb-8 tracking-widest">
              CERTIFICATE
            </h1>

            <div className="text-justify font-serif text-[12pt] leading-[2.0] mb-16">
              Certified that project entitled <strong>“SMART WASTE SEGREGATION USING SENSORS”</strong> is bonafide work carried out in the eighth semester by <strong>“NOOR FATHIMA A, SAFNA FATHIMA S S, NOORUL SURUMI NF, AMINA S, MUHAMMED RAMEES N”</strong> in partial fulfillment for the award of Bachelor of Technology in Electronics and Communication Engineering from APJ Abdul Kalam Technological University during the academic year 2025-2026 who carried out the project work under the guidance and no part of this work has been submitted earlier for the award of B. Tech degree.
            </div>

            <div className="w-full flex justify-between px-8 mt-12 font-serif">
              <div className="text-center">
                <p className="font-bold mb-16">PROJECT COORDINATOR</p>
                <p className="font-bold">Mrs. SAJITHA P</p>
                <p>VP & Associate Professor</p>
                <p>Department of ECE</p>
              </div>
              <div className="text-center">
                <p className="font-bold mb-16">PROJECT GUIDE</p>
                <p className="font-bold">Mrs. RASUL MUTHU A</p>
                <p>Assistant Professor</p>
                <p>Department of ECE</p>
              </div>
            </div>

            <div className="text-center mt-auto font-serif">
              <p className="font-bold mb-16">HEAD OF THE DEPARTMENT</p>
              <p className="font-bold">Dr. SHEFIN SHOUKATH</p>
              <p>Department of ECE</p>
            </div>
          </div>
        </Page>

        {/* PAGE 3: ACKNOWLEDGEMENT */}
        <Page pageNumber={3}>
          <div className="py-10">
            <h1 className="text-2xl font-bold font-serif text-center mb-12 tracking-widest">
              ACKNOWLEDGEMENT
            </h1>
            <div className="space-y-6 font-serif text-[12pt] leading-[2.0] text-justify">
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

            <div className="mt-16 flex justify-end font-serif">
              <div className="text-left">
                <p className="mb-4">SUBMITTED BY,</p>
                <div className="space-y-2 uppercase">
                  <p>NOOR FATHIMA A</p>
                  <p>SAFNA FATHIMA S S</p>
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
          <div className="py-10">
            <h1 className="text-2xl font-bold font-serif text-center mb-12 tracking-widest">
              ABSTRACT
            </h1>
            <div className="space-y-6 font-serif text-[12pt] leading-[2.0] text-justify">
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
          <div className="py-10">
            <h1 className="text-2xl font-bold font-serif text-center mb-12 tracking-widest">
              INDEX
            </h1>
            
            <div className="font-serif text-[12pt] leading-[2.0] w-full max-w-3xl mx-auto">
              <div className="flex justify-between font-bold border-b-2 border-black pb-2 mb-4">
                <span className="w-24">Chapter No.</span>
                <span className="flex-grow text-center">Title</span>
                <span className="w-24 text-right">Page No.</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="w-24 text-center">1</span>
                  <span className="flex-grow">Executive Summary</span>
                  <span className="w-24 text-right">06</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">2</span>
                  <span className="flex-grow">Introduction & Venture Overview</span>
                  <span className="w-24 text-right">08</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">3</span>
                  <span className="flex-grow">Literature Review</span>
                  <span className="w-24 text-right">11</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">4</span>
                  <span className="flex-grow">Technology Overview</span>
                  <span className="w-24 text-right">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">5</span>
                  <span className="flex-grow">System Design & Architecture</span>
                  <span className="w-24 text-right">20</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">6</span>
                  <span className="flex-grow">Methodology</span>
                  <span className="w-24 text-right">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">7</span>
                  <span className="flex-grow">Market Analysis</span>
                  <span className="w-24 text-right">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">8</span>
                  <span className="flex-grow">Business Model & Financials</span>
                  <span className="w-24 text-right">29</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">9</span>
                  <span className="flex-grow">Prototype Development Plan</span>
                  <span className="w-24 text-right">32</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">10</span>
                  <span className="flex-grow">Stakeholder Engagement</span>
                  <span className="w-24 text-right">35</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">11</span>
                  <span className="flex-grow">Risk Management & Conclusion</span>
                  <span className="w-24 text-right">38</span>
                </div>
                <div className="flex justify-between">
                  <span className="w-24 text-center">12</span>
                  <span className="flex-grow">References</span>
                  <span className="w-24 text-right">44</span>
                </div>
              </div>
            </div>
          </div>
        </Page>
`;

// Find the start of PAGE 1
const startIdx = content.indexOf('{/* PAGE 1: COVER PAGE */}');
// Find the start of PAGE 6-7: EXECUTIVE SUMMARY
const endIdx = content.indexOf('{/* PAGE 6-7: EXECUTIVE SUMMARY */}');

if (startIdx !== -1 && endIdx !== -1) {
  let newContent = content.substring(0, startIdx) + newPages + '\n        ' + content.substring(endIdx);
  
  // Now we need to re-number all pages from Executive Summary onwards.
  // Executive Summary starts at page 6.
  let pageCounter = 6;
  newContent = newContent.replace(/<Page pageNumber=\{([0-9]+)\}>/g, (match, p1, offset) => {
    // Only replace page numbers after the new pages
    if (offset > startIdx + newPages.length - 100) {
      return '<Page pageNumber={' + (pageCounter++) + '}>';
    }
    return match;
  });

  fs.writeFileSync('src/App.tsx', newContent);
  console.log('Successfully replaced first 5 pages and re-numbered the rest.');
} else {
  console.error('Could not find start or end index for replacement.');
}
