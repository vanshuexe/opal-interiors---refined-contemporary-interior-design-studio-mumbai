export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Commercial' | 'Bespoke';
  location: string;
  image: string;
  gallery: string[];
  description: string;
  client: string;
  year: string;
  area: string;
  scope: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    slug: 'worli-sky-penthouse',
    title: 'The Worli Sky Penthouse',
    subtitle: 'Refined Contemporary Duplex Residence',
    category: 'Residential',
    location: 'Worli Sea Face, Mumbai',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A 6,500 sq.ft. luxury duplex overlooking the Arabian Sea in Worli, Mumbai. Opal Interior designed a serene palette of Italian travertine, hand-fluted oak panelling, indirect architectural cove lighting, and bespoke marble furniture pieces.',
    client: 'Private Residence',
    year: '2024',
    area: '6,500 sq.ft.',
    scope: [
      'Concept & Preliminary Design',
      'Space Planning & Schematic Layouts',
      'Italian Travertine & Stone Curation',
      'Custom Joinery & Walk-In Wardrobes',
      'On-Site Construction Supervision'
    ]
  },
  {
    id: '2',
    slug: 'bandra-pali-hill-residence',
    title: 'Pali Hill Sanctuary',
    subtitle: 'Contemporary Luxury Apartment',
    category: 'Residential',
    location: 'Bandra West, Mumbai',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Nestled in Pali Hill, Bandra, this 3,800 sq.ft. residence exudes quiet luxury. Designed around natural light, soft linen drapery, brass inlaid wooden flooring, and handcrafted custom seating by Opal Interior.',
    client: 'Private Residence',
    year: '2023',
    area: '3,800 sq.ft.',
    scope: [
      'Detailed Interior Design',
      'Material & Finish Selection',
      'Custom Furniture & Joinery Design',
      'Lighting & Acoustic Plan',
      'On-Site Quality Control'
    ]
  },
  {
    id: '3',
    slug: 'juhu-beachfront-villa',
    title: 'Juhu Coastal Residence',
    subtitle: 'Private Beachside Villa Interior Architecture',
    category: 'Residential',
    location: 'Juhu Scheme, Mumbai',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A 9,000 sq.ft. private villa in Juhu celebrating indoor-outdoor living. Featuring double-height living areas, bookmatched onyx accent walls, bespoke master bedroom suites, and custom landscaping integration.',
    client: 'Private Residence',
    year: '2024',
    area: '9,000 sq.ft.',
    scope: [
      'Interior Architecture & Space Planning',
      'MEP & Structural Coordination',
      'Bespoke Marble Masonry & Stone Work',
      'Furniture & Lighting Procurement',
      'Full Site Supervision'
    ]
  },
  {
    id: '4',
    slug: 'bkc-corporate-headquarters',
    title: 'BKC Financial Suite',
    subtitle: 'Sophisticated Commercial Executive Environment',
    category: 'Commercial',
    location: 'Bandra Kurla Complex (BKC), Mumbai',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An 8,500 sq.ft. corporate headquarters in BKC, Mumbai. Opal Interior delivered executive boardrooms, acoustic acoustic timber wall cladding, custom leather desk furniture, and concealed smart automation.',
    client: 'Investment Management Firm',
    year: '2023',
    area: '8,500 sq.ft.',
    scope: [
      'Commercial Interior Design',
      'Working & Construction Drawings',
      'Acoustic & MEP Alignment',
      'Custom Executive Workstations',
      'Contractor Coordination & Supervision'
    ]
  },
  {
    id: '5',
    slug: 'lower-parel-design-suite',
    title: 'Lower Parel Creative Studio',
    subtitle: 'Boutique Commercial Workplace',
    category: 'Commercial',
    location: 'Lower Parel, Mumbai',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A restored mill compound workplace in Lower Parel combining exposed brick accents with contemporary black steel partitions, warm oak joinery, and ergonomic collaboration zones.',
    client: 'Digital Media Agency',
    year: '2023',
    area: '4,200 sq.ft.',
    scope: [
      'Space Planning & Layout',
      'Material & Lighting Curation',
      'Bespoke Metal & Glass Partitioning',
      'Contractor Quality Supervision'
    ]
  },
  {
    id: '6',
    slug: 'malabar-hill-heritage-home',
    title: 'Malabar Hill Estate',
    subtitle: 'Timeless Heritage Apartment Renovation',
    category: 'Residential',
    location: 'Malabar Hill, Mumbai',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A 5,000 sq.ft. historic residence in Malabar Hill carefully restored and modernized by Opal Interior. Preserving classic arches while introducing contemporary joinery, smart lighting, and curated art displays.',
    client: 'Private Heritage Residence',
    year: '2024',
    area: '5,000 sq.ft.',
    scope: [
      'Restoration & Modern Interior Design',
      'Bespoke Woodwork & Restoration',
      'Lighting & MEP System Upgrades',
      'Supervision & Fine Finishing'
    ]
  }
];
