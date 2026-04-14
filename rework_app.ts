import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Remove Declaration Page
content = content.replace(/\s*\{\/\* PAGE 2: DECLARATION \*\/\}.*?(?=\{\/\* PAGE 3: ACKNOWLEDGEMENT \*\/\})/s, '\n\n        ');

// Remove Table of Contents Page
content = content.replace(/\s*\{\/\* PAGE 5: TABLE OF CONTENTS \*\/\}.*?(?=\{\/\* PAGE 6-7: EXECUTIVE SUMMARY \*\/\})/s, '\n\n        ');

// Remove Circuit Diagram from Appendices
// The block starts with <Page pageNumber={43}> and ends with </Page>
// We want to remove the Circuit Diagram part but keep the End of Report part.
content = content.replace(/<MainHeading number="A\.3" title="Detailed Circuit Wiring" \/>\s*<div className="mt-8">\s*<CircuitDiagram \/>\s*<p className="figure-caption">Figure A\.3: Comprehensive Circuit Schematic<\/p>\s*<\/div>/s, '');

// Add References Page before Appendices
const referencesPage = `
        {/* REFERENCES */}
        <Page pageNumber={999}>
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
        </Page>
`;

content = content.replace(/(\{\/\* PAGE 41\+: APPENDICES \*\/\})/, referencesPage + '\n        $1');

// Now re-number pages
let pageCounter = 1;
content = content.replace(/<Page pageNumber=\{[0-9]+\}>/g, () => {
  return `<Page pageNumber={${pageCounter++}}>`;
});

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx updated successfully.');
