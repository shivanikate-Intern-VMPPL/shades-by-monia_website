export interface InsightPost {
  slug: string;
  title: string;
  category: "Materiality" | "Philosophy" | "Lighting" | "Art & Curation";
  publishedAt: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  coverImage: string; /* REPLACE */
  featured: boolean;
  content: {
    heading?: string;
    paragraphs: string[];
    quote?: string;
    image?: string;
    caption?: string;
  }[];
}

export const insights: InsightPost[] = [
  {
    slug: "the-art-of-restraint",
    title: "Quiet Luxury: Why Less is More in Contemporary Indian Homes",
    category: "Philosophy",
    publishedAt: "October 14, 2025",
    readTime: "5 min read",
    author: "Monia Kedari",
    authorRole: "Founder & Principal Designer",
    excerpt:
      "Modern luxury is shifting away from heavy ornamentation toward uncluttered spaces, natural materials, and homes that feel calm and easy to live in.",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85", /* REPLACE */
    featured: true,
    content: [
      {
        heading: "Creating Space to Breathe",
        paragraphs: [
          "In our vibrant, fast-paced Indian cities, our homes need to be sanctuaries of calm. When you step through the front door after a long day, you want a space that feels open, clean, and restful.",
          "Quiet luxury doesn't mean boring or cold. It means choosing quality over quantity. Instead of filling every wall and corner with decorative items, we give spaces room to breathe, letting natural light and beautiful materials take center stage."
        ],
        quote: "True luxury isn't about filling every empty corner. It is about creating space where your mind can truly rest."
      },
      {
        heading: "The Warmth of Real Materials",
        paragraphs: [
          "India has one of the world's richest traditions of natural materials—from cool white Makrana marble and Rajasthan sandstones to seasoned Burma teak and handwoven linens.",
          "When you combine these honest, organic textures with clean modern lines, a room instantly feels warm, grounded, and timeless. You don't need shiny artificial surfaces when authentic stone and wood have so much natural character."
        ],
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
        caption: "A sunlit living room designed with natural stone and understated warm tones."
      },
      {
        heading: "Designing for Real Life",
        paragraphs: [
          "The most beautiful home is one that works effortlessly for your daily life. It has comfortable sofas where family can gather, plenty of concealed storage so clutter never piles up, and soft lighting that makes every evening feel special."
        ]
      }
    ]
  },
  {
    slug: "tactility-and-stone-travertine",
    title: "Choosing the Right Stone: Honed Marble & Travertine in Indian Weather",
    category: "Materiality",
    publishedAt: "September 28, 2025",
    readTime: "6 min read",
    author: "Meera Sen",
    authorRole: "Lead Materials & Millwork Designer",
    excerpt:
      "Why matte, honed natural stones feel cooler, age better, and bring unmatched elegance to Indian residences.",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85", /* REPLACE */
    featured: false,
    content: [
      {
        heading: "Moving Beyond High-Gloss Tiles",
        paragraphs: [
          "For years, high-gloss polished marble dominated luxury Indian homes. Today, the world's finest residences prefer honed, matte finishes. A matte stone doesn't produce harsh reflections under bright Indian sunlight; instead, it has a buttery, soft texture that feels naturally cool underfoot."
        ]
      }
    ]
  },
  {
    slug: "illuminating-mood-lighting-masterclass",
    title: "Lighting That Heals: How to Create Warm Moods for Evenings at Home",
    category: "Lighting",
    publishedAt: "August 12, 2025",
    readTime: "4 min read",
    author: "Aarav Kapoor",
    authorRole: "Head of Interior Architecture",
    excerpt:
      "Why harsh ceiling downlights cause eye fatigue, and how layered ambient lighting transforms your evenings.",
    coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85", /* REPLACE */
    featured: false,
    content: [
      {
        heading: "Layering Light Like an Architect",
        paragraphs: [
          "Instead of relying on a grid of bright ceiling spotlights, we recommend three simple layers: soft cove lighting for gentle room glow, focused accent lights for art and plants, and warm table lamps at eye level for cozy family conversations."
        ]
      }
    ]
  },
  {
    slug: "curating-the-inimitable-bespoke-furniture",
    title: "The Magic of Custom Furniture: Tailoring Pieces to Your Floorplan",
    category: "Art & Curation",
    publishedAt: "July 2, 2025",
    readTime: "5 min read",
    author: "Rohan Varma",
    authorRole: "Art & Furnishing Curator",
    excerpt:
      "Why ready-made showroom furniture rarely fits right, and how bespoke proportions elevate daily comfort.",
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85", /* REPLACE */
    featured: false,
    content: [
      {
        heading: "Proportions Designed for You",
        paragraphs: [
          "A custom sofa built specifically to match the depth of your living room wall and upholstered in stain-resistant natural linen looks better and lasts far longer than store-bought mass furniture."
        ]
      }
    ]
  }
];
