export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  keyFeatures: string[];
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
}

export const SERVICES_PHILOSOPHY = {
  header: "SERVICES AT OPAL INTERIOR",
  intro: "We believe every space should reflect the people who experience it. Our approach combines creativity, functionality, and thoughtful detailing to create interiors that feel elegant, comfortable, and truly personal. From the first conversation to the final detail, we work closely with our clients to understand their vision, lifestyle, and aspirations — transforming ideas into spaces that are both beautiful and purposeful.",
  designServicesTitle: "OUR DESIGN SERVICES INCLUDE:",
  designServices: [
    "Concept & Preliminary Design",
    "Space Planning & Schematic Design",
    "Detailed Interior Design",
    "MEP & Structural Coordination",
    "Material & Finish Selection",
    "Custom Furniture & Joinery Design",
    "Construction & Working Drawings",
    "Design Documentation"
  ],
  siteSupervisionTitle: "SITE SUPERVISION & QUALITY CONTROL",
  siteSupervisionIntro: "Our involvement continues beyond the drawing board. We remain closely connected with the site to ensure that every element is executed with precision and in keeping with the approved design.",
  siteServicesTitle: "OUR SITE SERVICES INCLUDE:",
  siteServices: [
    "Regular Site Visits & Design Reviews",
    "Drawing Review",
    "Material & Finish Approvals",
    "Project Specification & Quality Checks",
    "Coordination with Contractors & Consultants",
    "Site Meeting & Progress Reviews",
    "Safety & Compliance Monitoring",
    "Workmanship & Detail Inspection",
    "Quality Control & Final Inspections"
  ],
  conclusion: "We believe the finest interiors are created when design, craftsmanship, and execution come together seamlessly."
};

export const SERVICES_DATA: Service[] = [
  {
    id: '1',
    slug: 'concept-and-design',
    title: 'Concept & Interior Design',
    subtitle: 'Preliminary Design, Space Planning & Detailed Detailing',
    shortDesc: 'Conceptual design, spatial planning, detailed architectural layouts, and 3D visualisations crafted to reflect your personal lifestyle and vision.',
    fullDesc: 'From the initial conversation to complete schematic development, Opal Interior translates your aspirations into refined spatial layouts. Our design process encompasses preliminary concept sketches, space planning, detailed interior design, material selection, and comprehensive construction drawings.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Concept & Preliminary Design',
      'Space Planning & Schematic Design',
      'Detailed Interior Design',
      'MEP & Structural Coordination',
      'Material & Finish Selection',
      'Custom Furniture & Joinery Design',
      'Construction & Working Drawings',
      'Design Documentation'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Initial Discovery',
        description: 'Deep dive into your lifestyle, spatial needs, material preferences, and project aspirations.'
      },
      {
        number: '02',
        title: 'Space Planning & Layouts',
        description: 'Architectural space optimization, circulation planning, and preliminary schematic layouts.'
      },
      {
        number: '03',
        title: 'Material & Joinery Selection',
        description: 'Hand-selecting natural stones, bespoke wood veneers, textiles, fixtures, and lighting.'
      },
      {
        number: '04',
        title: 'Working Drawings',
        description: 'Developing complete MEP coordination plans, elevation details, and design documentation.'
      }
    ]
  },
  {
    id: '2',
    slug: 'site-supervision-quality-control',
    title: 'Site Supervision & Quality Control',
    subtitle: 'On-Site Inspection, Contractor Coordination & Quality Checks',
    shortDesc: 'Continuous on-site presence ensuring flawless execution, precision craftsmanship, drawing compliance, and material standards.',
    fullDesc: 'Our commitment extends beyond the drawing board. We stay closely connected to the physical site through regular visits, contractor meetings, drawing verification, and workmanship inspections to guarantee that every detail matches the approved design.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Regular Site Visits & Design Reviews',
      'Drawing Review & Contractor Supervision',
      'Material & Finish Approvals',
      'Project Specification & Quality Checks',
      'Coordination with Contractors & Consultants',
      'Site Meeting & Progress Reviews',
      'Safety & Compliance Monitoring',
      'Workmanship & Detail Inspection',
      'Quality Control & Final Inspections'
    ],
    processSteps: [
      {
        number: '01',
        title: 'On-Site Kickoff & Review',
        description: 'Verifying site measurements, reviewing contractor shop drawings, and establishing quality benchmarks.'
      },
      {
        number: '02',
        title: 'Material & Sample Sign-Off',
        description: 'Inspecting physical mockups, timber stains, stone slabs, and custom joinery samples in person.'
      },
      {
        number: '03',
        title: 'In-Progress Inspection',
        description: 'Conducting weekly site reviews, MEP alignment checks, and detail monitoring during active construction.'
      },
      {
        number: '04',
        title: 'Final Quality Audit',
        description: 'Comprehensive snagging inspection, finish verification, and handover certification.'
      }
    ]
  },
  {
    id: '3',
    slug: 'custom-furniture-joinery',
    title: 'Custom Furniture & Joinery Design',
    subtitle: 'Bespoke Detailing, Wardrobes, Wall Panelling & Fixtures',
    shortDesc: 'Designing tailor-made furniture pieces, fitted cabinetry, accent panelling, and unique interior elements with master craftsmen.',
    fullDesc: 'We believe bespoke furniture and joinery give a home its distinct soul. Opal Interior designs custom dining tables, fitted walk-in closets, upholstered headboards, executive desks, and architectural wall panelling tailored specifically to your room proportions.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Bespoke Wood Joinery & Wall Panelling',
      'Custom Fitted Closets & Wardrobes',
      'Custom Upholstery & Furniture Design',
      'Natural Stone, Brass & Fluted Metal Details',
      'Architectural Ceiling Profiles & Lighting Channels',
      'Bespoke Vanities & Kitchen Cabinetry'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Proportional Sketching',
        description: 'Drafting 1:1 scale details, millwork elevations, and hardware specifications.'
      },
      {
        number: '02',
        title: 'Artisan Workshop Fabrication',
        description: 'Crafting custom joinery and furniture with seasoned woodworking and upholstery masters.'
      },
      {
        number: '03',
        title: 'Finish & Polish Approval',
        description: 'Inspecting hand-stained veneers, matte lacquers, and metal finishes prior to delivery.'
      },
      {
        number: '04',
        title: 'Precision Fitting',
        description: 'Managing seamless installation and flush integration on site.'
      }
    ]
  },
  {
    id: '4',
    slug: 'spatial-architecture-mep',
    title: 'Spatial Architecture & MEP Coordination',
    subtitle: 'Interior Architecture, Structural & MEP Alignment',
    shortDesc: 'Integrating electrical, plumbing, HVAC, and structural engineering into clean, unobtrusive architectural interior details.',
    fullDesc: 'Refined aesthetics require seamless technical foundation. We coordinate HVAC ducting, concealed lighting channels, smart home automation, acoustic insulation, and plumbing fixtures directly with structural consultants and MEP contractors.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'MEP & Structural Coordination',
      'Concealed Architectural Lighting Schemes',
      'Acoustic Insulation & Wall Baffles',
      'HVAC Grille & Ceiling Profile Integration',
      'Smart Home Automation Cabling Schematics',
      'Sanitary & Plumbing Fixture Alignments'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Consultant Coordination',
        description: 'Collaborating with MEP engineers and structural teams at schematic design phase.'
      },
      {
        number: '02',
        title: 'Reflected Ceiling & Lighting Plans',
        description: 'Mapping circuiting, architectural coves, and flush air diffuser details.'
      },
      {
        number: '03',
        title: 'Site Routing Inspection',
        description: 'Supervising conduit routing, HVAC drop locations, and plumbing wall chases.'
      },
      {
        number: '04',
        title: 'System Commissioning',
        description: 'Verifying lighting scenes, thermal comfort, and acoustic performance.'
      }
    ]
  }
];
