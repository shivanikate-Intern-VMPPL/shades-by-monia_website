export interface TeamMember {
  name: string;
  role: string;
  trait: string;
  bio: string;
  image: string; /* REPLACE */
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
  image: string; /* REPLACE */
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  category: string;
}

export const studioStats = [
  { value: 14, suffix: "+", label: "Years in Practice", description: "Shaping India's most distinguished private homes" },
  { value: 18, suffix: "+", label: "Prime Cities", description: "Mumbai, Delhi NCR, Goa, Alibaug, Bengaluru & Dubai" },
  { value: 180, suffix: "+", label: "Homes Delivered", description: "Bespoke villas, sea-facing penthouses & estates" },
  { value: 99, suffix: "%", label: "Client Satisfaction", description: "Long-standing trust with families and founders" }
];

export const studioPhilosophy = {
  quote:
    "WE CREATE HOMES THAT FEEL EFFORTLESSLY CALM — WHERE EVERY MATERIAL, EVERY PROPORTION, AND EVERY DETAIL HAS BEEN CHOSEN WITH QUIET CONVICTION AND ENDURING INTENT.",
  extendedNarrative: [
    "At Shades by Monia, we believe the most luxurious feeling a home can offer is complete peace of mind. That rare sense of arriving somewhere perfectly made for you — where the light always falls right, the materials have warmth and depth, and nothing feels out of place.",
    "Founded by Monia Kedari, our studio brings together spatial intelligence, bespoke craftsmanship, and a deeply personal approach to every commission — from sea-facing penthouses in Mumbai to private villas in Alibaug and Goa."
  ],
  logoConcept: {
    symbolism: "The 'sm' signature monogram represents the initials of Shades by Monia. Flowing and organic, it reflects our hands-on, personalized involvement in every home we design.",
    circularFrame: "The golden circular brush stroke represents completeness, balance, and harmony. The hand-painted texture reflects the artisanal touch of master craftsmen who bring our spaces to life.",
    typography: "The bold serif 'SHADES' represents timeless architectural structure, while the refined 'BY MONIA' reflects our personal, designer-led attention to every client.",
    brandExpression: "Understated luxury, warm contemporary elegance, thoughtful personalization, and timeless beauty."
  }
};

export const teamMembers: TeamMember[] = [
  {
    name: "Monia Kedari",
    role: "Founder & Principal Designer",
    trait: "Considered",
    bio: "With over 14 years shaping landmark penthouses and private estates across Mumbai, Delhi, and Goa, Monia leads every commission with a passion for clean lines, warm light, and bespoke comfort.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85" /* REPLACE */
  },
  {
    name: "Aarav Kapoor",
    role: "Head of Interior Architecture",
    trait: "Rigorous",
    bio: "Specializing in spatial layout optimization, structural alterations, and seamless indoor-outdoor transitions for expansive Indian villas and multi-level penthouses.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85" /* REPLACE */
  },
  {
    name: "Meera Sen",
    role: "Lead Materials & Millwork Designer",
    trait: "Tactile",
    bio: "Directly curating rare Italian and Indian marbles (Makrana, Jaisalmer stone), seasoned teak, and handcrafted brass joinery with master craftsmen across Rajasthan and Karnataka.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=85" /* REPLACE */
  },
  {
    name: "Rohan Varma",
    role: "Art & Furnishing Curator",
    trait: "Fluent",
    bio: "Bridging modern European furniture with collectible contemporary South Asian art, hand-knotted silk rugs, and custom sculptural decor.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85" /* REPLACE */
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    quote:
      "Monia transformed our sea-facing Worli penthouse into an oasis of calm. In a busy city like Mumbai, coming home to such quiet, elegant, and comfortable spaces is the greatest luxury.",
    author: "Rajesh Singhania",
    role: "Managing Director, Global Equity",
    project: "The Worli Sea-Face Duplex",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" /* REPLACE */
  },
  {
    quote:
      "Working with Shades by Monia on our Alibaug holiday villa was a joy. They handled everything turnkey—from custom stone flooring to lighting scenes—delivering right on schedule before the season started.",
    author: "Ananya Mehta",
    role: "Founder & Creative Entrepreneur",
    project: "The Coastal Sanctuary",
    location: "Alibaug",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" /* REPLACE */
  },
  {
    quote:
      "The level of clarity, budgeting honesty, and on-site finish quality was unmatched. Our Delhi residence looks like an international architectural feature, yet feels so warm and welcoming for our family.",
    author: "Vikramjit Oberoi",
    role: "Industrialist",
    project: "The Lutyens Pavilions",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" /* REPLACE */
  },
  {
    quote:
      "Their sensitivity to natural breeze, lush greenery, and subtle mood lighting made our Bengaluru home feel twice as large and incredibly peaceful.",
    author: "Pooja Reddy",
    role: "Tech Executive & Art Collector",
    project: "The Whitefield Courtyard",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" /* REPLACE */
  }
];

export const studioAwards: Award[] = [
  { year: "2025", title: "Luxury Residence of the Year", organization: "Architectural Digest India Design Awards", category: "Residential Excellence" },
  { year: "2024", title: "Best Penthouse Interior Architecture", organization: "Elle Decor International Design Awards (India)", category: "Spatial Innovation" },
  { year: "2023", title: "Craft & Materiality Recognition", organization: "India Design Forum (IDF)", category: "Artisanal Millwork & Stone" },
  { year: "2022", title: "Top 50 Contemporary Design Studios", organization: "GoodHomes India Awards", category: "Luxury Practice" }
];
