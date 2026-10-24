/**
 * Centralized Structured Data Source
 * Sole source of truth: Resume_Seamus_R__Howrigan_R_D___Test_Engineer_2026-06.pdf
 * Every entry is 100% verified against the original resume.
 */

export const RESUME_DATA = {
  meta: {
    lastUpdated: "June 2026"
  },

  profile: {
    name: "Seamus R. Howrigan",
    primaryTitle: "R&D Test Engineer",
    currentRole: "R&D Machinery Lab Technician",
    currentCompany: "Flexaseal Engineered Seals and Systems",
    location: "Colchester, VT",
    linkedin: "https://www.linkedin.com/in/seamus-howrigan-6a94901b7/",
    linkedinDisplay: "linkedin.com/in/seamus-howrigan-6a94901b7",
    summary: "Mechanical Engineering graduate of the University of Vermont with hands-on R&D and test engineering experience across aerospace and industrial applications. Skilled in NASTRAN-based FEA structural analysis, data acquisition system development, dynamic and static seal testing, and laboratory instrumentation. Currently contributing as an R&D Machinery Lab Technician at Flexaseal Engineered Seals and Systems."
  },

  education: [
    {
      institution: "University of Vermont",
      degree: "Bachelor of Science in Mechanical Engineering",
      location: "Burlington, VT",
      graduationDate: "May 2026",
      relevantCoursework: [
        "Computational Fluid Dynamics",
        "Compressible Flow",
        "Control Systems",
        "Mechatronics"
      ]
    }
  ],

  experience: [
    {
      id: "flexaseal-tech",
      role: "R&D Lab Technician",
      organization: "Flexaseal Engineered Seals and Systems",
      location: "Williston, VT",
      period: "June 2026 – Present",
      category: "engineering",
      categoryLabel: "Engineering & R&D",
      highlights: [
        "Dynamic seal testing & qualification",
        "Data reduction & R&D decision support",
        "Lab asset maintenance & sensor troubleshooting",
        "Test rig design & build"
      ],
      responsibilities: [
        "Execute dynamic testing for product qualification, performance analysis, and testing-to-limits on mechanical seal assemblies.",
        "Schedule and coordinate tests, assemble test cartridges, and perform data reduction and cataloging to support R&D decisions.",
        "Maintain laboratory equipment and instrumentation assets, including machinery and sensor troubleshooting.",
        "Assist with test rig design and build, and support miscellaneous engineering, measurement, and fabrication tasks."
      ]
    },
    {
      id: "flexaseal-intern",
      role: "R&D Intern",
      organization: "Flexaseal Engineered Seals and Systems",
      location: "Williston, VT",
      period: "June 2024 – August 2025",
      category: "engineering",
      categoryLabel: "Engineering & R&D",
      highlights: [
        "Competitor seal reverse-engineering",
        "NASTRAN FEA structural modeling",
        "DAQFactory dashboard development",
        "High-pressure static integrity testing"
      ],
      responsibilities: [
        "Reverse-engineered competitor mechanical seals and drawings to support customer repair workflows and inform R&D teams.",
        "Built and configured NASTRAN FEA models of manufactured parts for structural analysis in ultra-high pressure applications.",
        "Refined a DAQFactory data-logging dashboard to display reduced data from digital instrumentation and VFDs per test seal parameters.",
        "Conducted high-pressure static integrity tests of job seals with nitrogen and water, recording data to drive R&D decisions."
      ]
    },
    {
      id: "aiaa-dbf",
      role: "DBF Testing Team Lead / President",
      organization: "American Institute of Aeronautics and Astronautics, UVM Chapter",
      location: "Burlington, VT",
      period: "May 2023 – May 2026",
      category: "leadership",
      categoryLabel: "Aerospace & Leadership",
      highlights: [
        "Flight test program lead (~6 flight tests)",
        "FAA, State of VT & UVM regulatory compliance",
        "Engineering mentorship & partnership development"
      ],
      responsibilities: [
        "Led a flight and component test program encompassing approximately half a dozen flight tests and multiple component tests, directly informing competition aircraft design and validation.",
        "Enforced UVM, State of Vermont, and FAA regulations for all flight and powered test operations.",
        "Engaged industry and academic partners to grow club membership and taught engineering principles through aerospace competitions."
      ]
    },
    {
      id: "beta-technologies",
      role: "Intern Team Member",
      organization: "Beta Technologies",
      location: "South Burlington, VT",
      period: "February 2021 – August 2021",
      category: "engineering",
      categoryLabel: "Engineering & R&D",
      highlights: [
        "Composite layup mold design",
        "Scaled drone prototype repair",
        "Flight telemetry data organization"
      ],
      responsibilities: [
        "Supported the Subscale Model Team by designing foam molds for composite layups and repairing scaled drone prototypes.",
        "Sorted and organized telemetry data from test flights to support analysis efforts."
      ]
    },
    {
      id: "uvm-tutor",
      role: "Peer Tutor, Introduction to Python",
      organization: "University of Vermont",
      location: "Burlington, VT",
      period: "August 2023 – December 2023",
      category: "academic",
      categoryLabel: "Academic & Instruction",
      highlights: [
        "Python programming fundamentals",
        "Problem-solving methodology"
      ],
      responsibilities: [
        "Guided students through Python programming fundamentals, developing problem-solving skills through targeted instruction."
      ]
    },
    {
      id: "maple-sugar",
      role: "Assistant Sugar Maker",
      organization: "Howrigan Maple Heaven",
      location: "Fairfield, VT",
      period: "November 2013 – Present",
      category: "operations",
      categoryLabel: "Operations & Infrastructure",
      highlights: [
        "1,000+ trees tapped annually",
        "Pressure filtration operation",
        "Tubing leak detection & repair"
      ],
      responsibilities: [
        "Tap over 1,000 trees annually and maintain physical infrastructure including pressure filtration and tubing system leak repair."
      ]
    },
    {
      id: "lake-champlain-chocolates",
      role: "Retail Associate and Cafe Barista",
      organization: "Lake Champlain Chocolates",
      location: "South Burlington, VT",
      period: "October 2020 – February 2023",
      category: "operations",
      categoryLabel: "Customer Operations",
      highlights: [
        "Customer service & high-volume retail floor management"
      ],
      responsibilities: [
        "Delivered customer service while maintaining and stocking a high-volume retail sales floor."
      ]
    },
    {
      id: "state-of-vermont",
      role: "Legislative Page",
      organization: "State of Vermont",
      location: "Montpelier, VT",
      period: "March 2018 – May 2018",
      category: "operations",
      categoryLabel: "Public Service",
      highlights: [
        "Legislative floor support & bill tracking"
      ],
      responsibilities: [
        "Supported Vermont State Senators and Representatives on the floor during the legislative session, tracking bills from introduction through passage."
      ]
    }
  ],

  skills: {
    sectionTitle: "Software and Tools",
    note: "Explicitly listed under SKILLS in resume",
    tools: [
      { name: "ANSYS Fluent", category: "Analysis & Computation" },
      { name: "NASTRAN", category: "Analysis & Simulation" },
      { name: "MATLAB", category: "Analysis & Computation" },
      { name: "Simulink", category: "Analysis & Computation" },
      { name: "DAQFactory", category: "Data Acquisition & Logging" },
      { name: "Python", category: "Programming & Data" },
      { name: "NumPy", category: "Programming & Data" },
      { name: "pandas", category: "Programming & Data" },
      { name: "Autodesk Inventor", category: "CAD & Modeling" },
      { name: "AutoCAD", category: "CAD & Modeling" },
      { name: "Arduino / C++", category: "Embedded Systems" },
      { name: "Excel", category: "Analysis & Cataloging" }
    ],
    technicalDomains: [
      {
        title: "Computational Fluid Dynamics",
        detail: "Devloping CFD skills through UVM coursework, including fluid flow modeling, computational mesh generation, numerical simulation, and post-processing of simulation results.",
        sourceReference: "Classroom Experience"
      },
      {
        title: "Dynamic & Static Seal Testing",
        detail: "Product qualification, performance analysis, testing-to-limits, cartridge assembly, and high-pressure nitrogen & water integrity tests.",
        sourceReference: "Summary & Flexaseal Experience"
      },
      {
        title: "NASTRAN FEA Structural Analysis",
        detail: "Building and configuring finite element models of manufactured components for structural validation in ultra-high pressure applications.",
        sourceReference: "Summary & Flexaseal Experience"
      },
      {
        title: "Data Acquisition (DAQ) Systems",
        detail: "Developing and refining DAQFactory dashboards to log and reduce telemetry and live sensor data from digital instrumentation and VFDs.",
        sourceReference: "Summary & Flexaseal Experience"
      },
      {
        title: "Laboratory Instrumentation & Rig Design",
        detail: "Troubleshooting sensors and machinery, designing and building custom test rigs, and managing measurement and fabrication assets.",
        sourceReference: "Summary & Flexaseal Experience"
      },
      {
        title: "Flight & Component Testing",
        detail: "Planning and directing flight test programs (approx. half a dozen flight tests) complying with FAA, State of Vermont, and UVM regulations.",
        sourceReference: "AIAA DBF Experience"
      },
      {
        title: "Subscale Prototyping & Telemetry",
        detail: "Designing foam molds for composite layups, repairing scaled drone prototypes, and organizing aircraft flight telemetry data.",
        sourceReference: "Beta Technologies Experience"
      }
    ]
  }
};
