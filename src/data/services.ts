export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  statValue: number;
  statSuffix: string;
  statLabel: string;
  image: string; /* REPLACE */
  scope: string[];
  deliverables: string[];
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "interior-architecture",
    number: "01",
    title: "Interior Architecture",
    subtitle: "Space Planning, Walls & Flow",
    description:
      "We rethink the bones of your home before touching finishes. By optimizing room layouts, opening up natural light paths, and designing smart structural transitions, we make every square foot feel generous, practical, and inviting.",
    statValue: 75,
    statSuffix: "+",
    statLabel: "Layouts Refined",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
    scope: [
      "Optimizing floor plans & room proportions",
      "Detailed 2D drawings & realistic 3D visualizations",
      "Architectural ceiling details & hidden air-conditioning ducts",
      "Custom staircase & foyer spatial design",
      "Layered lighting layouts designed for everyday living"
    ],
    deliverables: [
      "Complete set of contractor-ready floorplans and elevations",
      "Photorealistic 3D renders so you can visualize every room",
      "Electrical, plumbing, and air-conditioning layouts",
      "Coordination with your building engineers and site teams"
    ],
    idealFor: "Bare-shell apartments, penthouses, standalone villas, and large-scale home renovations."
  },
  {
    id: "full-interior-design",
    number: "02",
    title: "Full Interior Design",
    subtitle: "Materials, Woodwork & Finishes",
    description:
      "From selecting Italian marbles and teakwood to custom walk-in wardrobes and luxury bathrooms, we handle the entire material journey. Every finish is chosen for both exceptional beauty and long-lasting durability.",
    statValue: 180,
    statSuffix: "+",
    statLabel: "Homes Completed",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
    scope: [
      "Custom cabinetry, wardrobes & kitchen millwork",
      "Handpicked natural marble, granite & limestone",
      "Luxury bathroom fixtures & sanitaryware curation",
      "Wall textures, lime plasters & premium finishes",
      "Custom drapery, acoustic curtains & smart blinds"
    ],
    deliverables: [
      "Physical sample boards with actual stones, veneers, and fabrics",
      "Detailed joinery and carpenter drawings",
      "Vendor coordination and strict quality checks",
      "On-site supervision to make sure execution matches the design"
    ],
    idealFor: "Homeowners looking for a complete, stress-free transformation with flawless turnkey quality."
  },
  {
    id: "furniture-art-curation",
    number: "03",
    title: "Furniture & Art Styling",
    subtitle: "Sofas, Dining, Rugs & Decor",
    description:
      "We source and style the pieces that make a house truly feel like home. From comfortable custom sofas and statement dining tables to handwoven Indian rugs and curated contemporary artworks, we bring personal character to every room.",
    statValue: 300,
    statSuffix: "+",
    statLabel: "Pieces Styled",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
    scope: [
      "Curating modern designer sofas, lounge chairs & beds",
      "Commissioning custom dining tables & accent pieces",
      "Hand-knotted silk and wool rugs tailored to room sizes",
      "Art sourcing from renowned galleries and indie artists",
      "White-glove delivery, assembly & final room styling"
    ],
    deliverables: [
      "Itemized furniture catalogs with transparent pricing",
      "Full 3D layout showing where each piece fits",
      "Fabric durability recommendations for easy home care",
      "Final styling with lighting, cushions, and decorative accessories"
    ],
    idealFor: "Clients wanting to furnish and style an existing or newly completed home with distinct elegance."
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery & Brief",
    duration: "2 Weeks",
    tagline: "Understanding how you live, your taste, and your budget",
    howWeDoIt: [
      "An open, friendly conversation about your family's routine, style preferences, and must-haves",
      "Thorough site visit and precise laser measurements of your property",
      "Creating initial moodboards to align on colors, textures, and the overall look"
    ],
    whatToExpect: [
      "A crystal-clear project brief with agreed design goals",
      "Transparent budget estimate and realistic project timeline",
      "Total clarity before any technical work begins"
    ]
  },
  {
    number: "02",
    title: "Concept & 3D Design",
    duration: "3 – 4 Weeks",
    tagline: "Bringing your home to life with realistic 3D visuals",
    howWeDoIt: [
      "Exploring practical furniture layouts that make the best use of space",
      "Selecting real materials—from stone and wood to fabrics and metal accents",
      "Creating high-definition 3D renders so you see exactly how every room will look"
    ],
    whatToExpect: [
      "A hands-on presentation box with actual stone, tile, and fabric samples",
      "Room-by-room 3D walkthroughs with multiple lighting scenes",
      "Interactive feedback session to fine-tune every detail until you love it"
    ]
  },
  {
    number: "03",
    title: "Technical Drawings",
    duration: "3 – 4 Weeks",
    tagline: "Preparing millimeter-precise blueprints for contractors",
    howWeDoIt: [
      "Drafting detailed carpentry drawings for wardrobes, kitchens, and vanities",
      "Planning electrical switchboards, automation, and air-conditioning paths",
      "Finalizing tile layouts, plumbing fittings, and paint codes"
    ],
    whatToExpect: [
      "Complete set of technical drawings ready for execution",
      "Clear bill of quantities (BOQ) with transparent vendor quotes",
      "Guaranteed material specifications with no hidden surprises"
    ]
  },
  {
    number: "04",
    title: "On-Site Execution",
    duration: "3 – 6 Months",
    tagline: "Overseeing site work to ensure flawless craftsmanship",
    howWeDoIt: [
      "Regular site visits to supervise carpenters, masons, and electricians",
      "Inspecting material deliveries on site for quality and correct shade matching",
      "Proactively resolving site challenges to keep work moving smoothly"
    ],
    whatToExpect: [
      "Weekly photo and video progress updates sent straight to your phone",
      "High attention to alignment, grout lines, and surface finishes",
      "Smooth project coordination without taking up your personal time"
    ]
  },
  {
    number: "05",
    title: "Styling & Handover",
    duration: "1 – 2 Weeks",
    tagline: "Unveiling a fully ready, beautifully finished home",
    howWeDoIt: [
      "White-glove delivery and precise positioning of all furniture and rugs",
      "Art hanging and decorative styling under Monia's direct supervision",
      "Final deep cleaning and setup so the home is completely ready to move in"
    ],
    whatToExpect: [
      "A joyous private reveal walkthrough with our senior team",
      "A handy Care & Maintenance Guide for your stones, wood, and fabrics",
      "12 months of post-handover support for seasonal check-ins and assistance"
    ]
  }
];
