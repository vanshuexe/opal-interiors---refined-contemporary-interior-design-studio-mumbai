export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface ImageSpec {
  title: string;
  image: string;
  desc?: string;
}

export interface RoomMoodboard {
  id: string;
  roomTitle: string;
  subtitle: string;
  tags: string[];
  mainImage: string;
  styleDesc: string;
  colorPalette: ColorSwatch[];
  materials: ImageSpec[];
  keyElements: ImageSpec[];
  lightingConcept: ImageSpec[];
  finishingTouches: ImageSpec[];
  completedProjectTag?: string;
  layoutDesc?: string;
}

export const MOODBOARDS_DATA: RoomMoodboard[] = [
  {
    id: 'contemporary-project-navi-mumbai',
    roomTitle: 'CONTEMPORARY PROJECT AT NAVI MUMBAI',
    subtitle: 'Full Residence 3D Render & Interior Execution Board',
    tags: ['SEASONED WITH LOVE', 'RICH LIFE', 'CONTEMPORARY LIVING'],
    mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    styleDesc: 'Rich Life Enjoying to the Fullest. An elegant contemporary residence at Navi Mumbai featuring a tufted tan leather sectional sofa, dark wood accent wall with warm cove lighting, white modular TV unit, 6-seater dining area, and a sleek modern kitchen seasoned with love.',
    colorPalette: [
      { name: 'TAN LEATHER', hex: '#8B4513' },
      { name: 'WARM WHITE', hex: '#FAF8F5' },
      { name: 'DARK CHARCOAL', hex: '#262626' },
      { name: 'WARM OAK', hex: '#A67B5B' },
      { name: 'GREIGE', hex: '#B3AAA4' },
    ],
    materials: [
      {
        title: 'TUFTED LEATHER UPHOLSTERY',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'WHITE GLOSS TV CONSOLE',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'DARK WOOD ACCENT WALL',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MODULAR KITCHEN SHUTTERS',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'QUARTZ KITCHEN COUNTERTOP',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'WOODEN PLANK FLOORING',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80',
      },
    ],
    keyElements: [
      {
        title: 'TUFTED LEATHER SECTIONAL',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: '6-SEATER DINING TABLE',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'GEOMETRIC PENDANT LIGHTS',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MODULAR KITCHEN WITH ISLAND',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'BACKLIT WOOD FEATURE WALL',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
    ],
    lightingConcept: [
      {
        title: 'GEOMETRIC RECTANGLE CHANDELIER',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'WARM COVE LED LIGHTING',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'UNDER CONSOLE STRIP LIGHT',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
    ],
    finishingTouches: [
      {
        title: 'DINING TABLE CENTERPIECE VASE',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'COFFEE TABLE DECOR & LAPTOP',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MODULAR KITCHEN GLASS JARS',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'TV CONSOLE DECORATIVE ACCENTS',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'SAGE GREEN PLANT ACCENTS',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80',
      },
    ],
    completedProjectTag: 'CONTEMPORARY PROJECT AT NAVI MUMBAI',
  },
  {
    id: 'mumbai-duplex-4bhk-furniture-plan',
    roomTitle: 'MUMBAI DUPLEX 4BHK FURNITURE PLAN',
    subtitle: 'Architectural Floorplan & Furniture Layout Specification',
    tags: ['SPACIOUS LIVING', 'FUNCTIONAL LAYOUT', 'PREMIUM FURNITURE'],
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    styleDesc: 'A home designed for modern urban living in Mumbai. Comprehensive 2D architectural floorplan zoning for Lower Floor Plan (Living, Dining, Kitchen, Balcony, Powder Room, Bedroom 1) & Upper Floor Plan (Double Height Below, Family Lounge, Bedrooms 2-3, Master Bedroom, Upper Balcony).',
    colorPalette: [
      { name: 'BEIGE / GREIGE', hex: '#D9CEBF' },
      { name: 'TAUPE', hex: '#A89280' },
      { name: 'CHARCOAL', hex: '#3B3F42' },
      { name: 'WOOD VENEER', hex: '#82542E' },
      { name: 'MARBLE WHITE', hex: '#F9F8F3' },
    ],
    materials: [
      {
        title: 'MODULAR FABRIC SOFA',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'UPHOLSTERED DINING CHAIRS',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'UPHOLSTERED LOUNGE SEATING',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'WOOD VENEER WARDROBES',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MARBLE / STONE TOP TABLES',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MATTE FINISH TV UNITS',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80',
      },
    ],
    keyElements: [
      {
        title: 'MODULAR SOFA',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'DINING TABLE & CHAIRS',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'EXECUTIVE ARMCHAIR',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'LOUNGE CHAIR',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'COFFEE TABLE',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'TV UNIT',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'ACCENT CHAIR',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'CONSOLE / SIDEBOARD',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
    ],
    lightingConcept: [
      {
        title: 'PENDANT LIGHTS',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'RECESSED LIGHTING',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'FLOOR LAMPS',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
    ],
    finishingTouches: [
      {
        title: 'FOYER CONSOLE & MIRROR',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'DINING BUFFET SIDEBOARD',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'BALCONY OUTDOOR SEATING',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'FAMILY LOUNGE BOOKSHELF',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'WALK-IN WARDROBE & VANITY',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
      },
    ],
    completedProjectTag: 'MUMBAI DUPLEX 4BHK ARCHITECTURAL FURNITURE PLAN',
  },
  {
    id: 'mumbai-duplex-living-room',
    roomTitle: 'MUMBAI DUPLEX LIVING ROOM',
    subtitle: 'Interior Moodboard & Duplex Architectural Specification Board',
    tags: ['MODERN LUXURY', 'URBAN SOPHISTICATION', 'WARM & INVITING'],
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    styleDesc: 'Inspired by Mumbai. A space that blends luxury, comfort and the vibrant spirit of the city. Featuring double-height glass facades, Italian marble feature walls, wood veneer panelling, and champagne brass metal details.',
    colorPalette: [
      { name: 'WARM WHITE', hex: '#F9F8F3' },
      { name: 'BEIGE', hex: '#D9CEBF' },
      { name: 'TAUPE', hex: '#A89280' },
      { name: 'GREIGE', hex: '#99948D' },
      { name: 'SAGE GREEN', hex: '#7D8B78' },
      { name: 'TERRACOTTA', hex: '#B85D3B' },
      { name: 'CHARCOAL', hex: '#3B3F42' },
      { name: 'WOOD TONE', hex: '#82542E' },
    ],
    materials: [
      {
        title: 'ITALIAN MARBLE (FEATURE WALL)',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'WOOD VENEER (PANELLING)',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'STONE FINISH (ACCENT WALL)',
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'PREMIUM FABRIC (SEATING)',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'BRASS / CHAMPAGNE METAL',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'GLASS (RAILING / PARTITIONS)',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=80',
      },
    ],
    keyElements: [
      {
        title: 'MODULAR SOFA',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'LOUNGE CHAIR',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'COFFEE TABLE',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'DINING TABLE & CHAIRS',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'TV CONSOLE',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80',
      },
    ],
    lightingConcept: [
      {
        title: 'DOUBLE HEIGHT CHANDELIER',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'ARCHITECTURAL LED COVE',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'AMBIENT FLOOR LAMP',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
    ],
    finishingTouches: [
      {
        title: 'STATEMENT VASE',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'DECOR BOWLS',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'COFFEE TABLE DECOR',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'WALL ART',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'INDOOR PLANTS',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80',
      },
    ],
    completedProjectTag: 'PROPOSAL FOR OUR UPCOMING PROJECT AT NAVI MUMBAI',
  },
  {
    id: 'living-room',
    roomTitle: 'LIVING ROOM',
    subtitle: 'Concept Moodboard & Material Specification Sheet',
    tags: ['MODERN', 'CALM', 'NATURAL', 'TIMELESS'],
    mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    styleDesc: 'A serene and inviting living room that blends soft natural tones with modern lines and subtle textures. The sage green sofa adds a refreshing pop of color, while warm neutrals and clean detailing create a balanced and timeless space.',
    colorPalette: [
      { name: 'SAGE GREEN', hex: '#738A7C' },
      { name: 'WARM BEIGE', hex: '#D1C7BD' },
      { name: 'GREIGE', hex: '#BDB5AA' },
      { name: 'SOFT TAUPE', hex: '#A89885' },
      { name: 'IVORY', hex: '#F5F2EB' },
      { name: 'MATTE BLACK', hex: '#2B2B2B' },
    ],
    materials: [
      {
        title: 'FLUTED WALL PANEL',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'PAINTED WALL FINISH',
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MATTE LAMINATE',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'FABRIC UPHOLSTERY',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'SHEER CURTAINS',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'POLISHED MARBLE',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
      },
    ],
    keyElements: [
      {
        title: 'LINEAR WALL DETAILING',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'SAGE GREEN SOFA',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'SHEER + HEAVY CURTAINS',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'NATURAL GREENERY',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MATTE BLACK ACCENTS',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
    ],
    lightingConcept: [
      {
        title: 'LINEAR LED CEILING LIGHT',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MINIMAL CEILING FAN',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'RECESSED SPOTLIGHTS',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=300&q=80',
      },
    ],
    finishingTouches: [
      {
        title: 'TEXTURED THROW',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'DECORATIVE PILLOWS',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'PLANT PLACEMENT',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'COFFEE TABLE VASES',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'ABSTRACT WALL ART',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=300&q=80',
      },
    ],
    completedProjectTag: 'OUR COMPLETED RESIDENCE AT WORLI MUMBAI',
  },
  {
    id: 'mandir-interior',
    roomTitle: 'MANDIR INTERIOR',
    subtitle: 'Sacred Sanctum & Bespoke Pooja Joinery Board',
    tags: ['TRADITION', 'CALMNESS', 'ELEGANCE'],
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    styleDesc: 'A space for peace, prayers and positivity. Designed with a curved light oak veneer arch, floral laser-cut marble back panel, fluted glass shutter doors, and antique brass details.',
    colorPalette: [
      { name: 'IVORY (#F7F6F2)', hex: '#F7F6F2' },
      { name: 'LIGHT OAK (#D7B894)', hex: '#D7B894' },
      { name: 'WARM WHITE (#EFEFEA)', hex: '#EFEFEA' },
      { name: 'ANTIQUE BRASS (#B08D4F)', hex: '#B08D4F' },
      { name: 'SAGE GREEN (#8A9B7E)', hex: '#8A9B7E' },
    ],
    materials: [
      {
        title: 'WOOD VENEER (LIGHT OAK)',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'WHITE MARBLE (PLATFORM & TOP)',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'FLUTED GLASS (DOOR PANELS)',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'PU PAINT FINISH (DRAWERS & DOORS)',
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=300&q=80',
      },
    ],
    keyElements: [
      {
        title: 'CURVED WOOD CEILING WITH DOWNLIGHT',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'FLORAL BACK PANEL DETAIL',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'BRASS BELLS IN NICHES',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'ROUND BRASS KNOBS ON DRAWERS',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'FLUTED GLASS DOOR DETAIL',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=300&q=80',
      },
    ],
    lightingConcept: [
      {
        title: 'RECESSED DOWNLIGHT SPOTLIGHT',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'INDIRECT BACKLIT COVE LIGHTING',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'CONCEALED DRAWER CHANNEL LED',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
    ],
    finishingTouches: [
      {
        title: 'BRASS POOJA THALI & DIYA',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'BRASS IDOLS (GANESHA / DEVI)',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'PEACOCK FEATHERS IN VASE',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'RELIGIOUS FRAME / BOOKS',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'PLANT FOR NATURAL TOUCH',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80',
      },
    ],
    completedProjectTag: 'OUR COMPLETED PROJECT AT NAVI MUMBAI',
  },
  {
    id: 'modern-kitchen',
    roomTitle: 'MODERN KITCHEN',
    subtitle: 'Modular Layout & Material Harmony Board',
    tags: ['SLEEK', 'WARM', 'FUNCTIONAL', 'TIMELESS'],
    mainImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    styleDesc: 'A modern kitchen that blends warm neutrals with clean lines and smart storage solutions. The combination of matte finishes, subtle textures, and soft lighting creates a space that is stylish, practical, and inviting.',
    colorPalette: [
      { name: 'WARM IVORY', hex: '#F2EFE9' },
      { name: 'BEIGE TAUPE', hex: '#C8BBAA' },
      { name: 'GREIGE', hex: '#A3988A' },
      { name: 'MOCHA BROWN', hex: '#7C5C43' },
      { name: 'CHARCOAL', hex: '#333333' },
      { name: 'SAGE GREEN', hex: '#677864' },
    ],
    materials: [
      {
        title: 'MATTE LAMINATE',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'FLUTED TAMBOUR FINISH',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'GLASS SHUTTER DOOR',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'QUARTZ COUNTERTOP',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MARBLE LOOK FLOORING',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80',
      },
    ],
    keyElements: [
      {
        title: 'UNDER CABINET LED LIGHTING',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'SLEEK INTEGRATED HANDLES',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'BUILT-IN VENTILATION PANELS',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'OPEN DISPLAY SHELF',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'TAMBOUR SHUTTER STORAGE',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=80',
      },
    ],
    lightingConcept: [
      {
        title: 'RECESSED CEILING LIGHTS',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'LINEAR LED LIGHTING',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'UNDER CABINET LED STRIP',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
    ],
    finishingTouches: [
      {
        title: 'NATURAL GREENERY',
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'GLASS JARS',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'FRESH FRUITS',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'BLACK ACCENTS',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
      },
      {
        title: 'MINIMAL DECOR',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
      },
    ],
    completedProjectTag: 'OUR COMPLETED PROJECT AT NAVI MUMBAI',
  },
];
