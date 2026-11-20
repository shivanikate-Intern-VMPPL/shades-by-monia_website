export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Living" | "Bedroom" | "Kitchen";
  location: string;
  year: string;
  client: string;
  area: string;
  services: string[];
  excerpt: string;
  narrative: string[];
  heroImage: string; /* REPLACE: High resolution interior photo */
  galleryImages: { url: string; caption: string; aspect?: "landscape" | "portrait" }[];
  beforeAfter?: {
    before: string;
    after: string;
    caption: string;
  };
  featured: boolean;
  palette: string[];
}

export const projects: Project[] = [
  {
    slug: "worli-sea-face-duplex",
    title: "The Worli Sea-Face Duplex",
    category: "Residential",
    location: "Worli, Mumbai",
    year: "2025",
    client: "Finance Leader & Family",
    area: "750 m² / 8,100 sq ft",
    services: ["Interior Architecture", "Custom Millwork", "Art Curation", "Turnkey Handover"],
    excerpt:
      "A sweeping Arabian Sea-facing duplex penthouse in Mumbai, finished in warm Italian travertine, smoked Burma teak, and brushed brass details.",
    narrative: [
      "Perched high above the Mumbai coastline, this duplex was designed to provide a quiet, tranquil escape from the bustling metropolis below.",
      "We opened up the layout to welcome generous natural sunlight and panoramic ocean views into every living zone. Custom low-slung seating in soft linen, acoustic smoked-oak wall paneling, and hand-chiseled stone low tables bring warmth and everyday comfort.",
      "The result is a home that balances international modern aesthetics with the ease and warmth of relaxed family living."
    ],
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85", /* REPLACE */
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Main living salon with custom curved sofa in textured wool and brushed brass cocktail table."
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Dining pavilion featuring an 8-seater Roman travertine slab and minimalist warm lighting."
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Master sanctuary framed in rift-cut smoked oak panelling and integrated ambient illumination."
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Primary bath finished in open-pore grey stone and concealed warm-dim lighting."
      }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80", /* REPLACE */
      after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85", /* REPLACE */
      caption: "Living Salon: From segmented dark developer layout to an open-plan light sanctuary."
    },
    featured: true,
    palette: ["#E6E1D8", "#8A7968", "#1E1C1A", "#C29B38"]
  },
  {
    slug: "coastal-sanctuary-alibaug",
    title: "The Coastal Sanctuary",
    category: "Living",
    location: "Alibaug, Maharashtra",
    year: "2024",
    client: "Design Entrepreneur",
    area: "980 m² / 10,500 sq ft",
    services: ["Full Interior Design", "Indoor-Outdoor Flow", "Lighting Masterplan"],
    excerpt:
      "A serene weekend villa nestled among coconut groves, connecting breezy open courtyards with lime plaster walls and raw cotton fabrics.",
    narrative: [
      "Just a short speedboat ride from Mumbai, this Alibaug villa was designed for effortless weekends, social gatherings, and unhurried afternoons.",
      "Large sliding glass doors disappear entirely into wall pockets, blurring the line between indoor living areas and the pool terrace. Every surface is tactile, cool to the touch, and easy to maintain."
    ],
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85", /* REPLACE */
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Double-height living space with natural teak rafters and handcrafted cane details."
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Lounge bar crafted from honed black granite with antique mirror accents."
      }
    ],
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1502005229762-ee1b2da97b0f?auto=format&fit=crop&w=1400&q=80", /* REPLACE */
      after: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85", /* REPLACE */
      caption: "Great Room: Transformation into a breezy, open-air coastal lounge."
    },
    featured: true,
    palette: ["#F5F0E6", "#C4B59D", "#3B3833", "#C99A45"]
  },
  {
    slug: "lutyens-pavilions-delhi",
    title: "The Lutyens Pavilions",
    category: "Residential",
    location: "New Delhi",
    year: "2024",
    client: "Industrialist Family",
    area: "1,400 m² / 15,000 sq ft",
    services: ["Interior Architecture", "Bespoke Millwork", "Private Art Placement"],
    excerpt:
      "A grand private estate in Delhi NCR balancing classic proportion with modern minimalism, lush lawn vistas, and warm sandstone palettes.",
    narrative: [
      "Set amid mature trees in New Delhi, this sprawling estate was designed to host intimate family moments as well as formal cultural evenings.",
      "We paired hand-selected Dholpur beige sandstone and brushed gold trims with contemporary Italian modular seating, giving the classic bungalow scale an airy, modern freshness."
    ],
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85", /* REPLACE */
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Formal family salon framing expansive garden verandas."
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Private library with floor-to-ceiling walnut cabinetry and integrated brass reading lamps."
      }
    ],
    featured: true,
    palette: ["#D8D3C8", "#59544D", "#21201D", "#A38044"]
  },
  {
    slug: "whitefield-courtyard",
    title: "The Whitefield Courtyard",
    category: "Residential",
    location: "Bengaluru, Karnataka",
    year: "2023",
    client: "Tech Founder & Collector",
    area: "650 m² / 7,000 sq ft",
    services: ["Spatial Architecture", "Landscape Integration", "Art Curation"],
    excerpt:
      "A light-filled contemporary home organized around an internal tropical courtyard with water features and exposed concrete walls.",
    narrative: [
      "This Bengaluru home was designed to celebrate Karnataka's pleasant climate through cross-ventilation, shaded verandas, and skylit double-height volumes.",
      "The internal courtyard acts as the beating heart of the home, surrounded by floor-to-ceiling glass that brings the lush greenery right into the daily living and dining zones."
    ],
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85", /* REPLACE */
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Open living pavilion connecting the dining room to the reflecting pool."
      }
    ],
    featured: true,
    palette: ["#EBE6DC", "#6D685E", "#1C1B19", "#B88E3E"]
  },
  {
    slug: "assagao-heritage-villa",
    title: "The Assagao Heritage Villa",
    category: "Bedroom",
    location: "Goa",
    year: "2023",
    client: "Boutique Hospitality Owner",
    area: "420 m² / 4,500 sq ft",
    services: ["Heritage Restoration", "Bespoke Furnishing", "Lighting Design"],
    excerpt:
      "A lovingly restored Portuguese-era villa in North Goa featuring high timber ceilings, distressed lime wash, and custom four-poster beds.",
    narrative: [
      "In the tranquil village of Assagao, this bedroom suite honors traditional Goan architecture while introducing modern acoustic comfort, premium European mattresses, and understated luxury lighting.",
      "Handcrafted terrazzo tiles and vintage colonial timber furniture sit alongside contemporary linens, creating a deeply restorative bedroom sanctuary."
    ],
    heroImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=2000&q=85", /* REPLACE */
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Primary bedroom suite with custom timber joinery and warm ambient light grazing."
      }
    ],
    featured: false,
    palette: ["#232120", "#786550", "#EAE3D5", "#CBA149"]
  },
  {
    slug: "jubilee-hills-penthouse",
    title: "The Jubilee Hills Penthouse",
    category: "Kitchen",
    location: "Hyderabad",
    year: "2023",
    client: "Pharmaceutical Director",
    area: "310 m² / 3,300 sq ft",
    services: ["Culinary Architecture", "Custom Marble Island", "Smart Appliances"],
    excerpt:
      "A sleek show-kitchen and breakfast bar featuring a 4-meter waterfall island of honed Italian Statuario marble with concealed cooking elements.",
    narrative: [
      "Designed as a central social hub for both family breakfasts and formal weekend hosting, this kitchen features flush touch-to-open smoked glass cabinetry, integrated wine storage, and warm under-counter lighting."
    ],
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85", /* REPLACE */
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85", /* REPLACE */
        caption: "Monolithic Statuario marble island with integrated concealed induction hob."
      }
    ],
    featured: false,
    palette: ["#1F1E1B", "#4A453F", "#E3DCCF", "#D4AC4C"]
  }
];
