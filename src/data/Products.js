const products = [
  // 👕 TOPS
  {
    id: 1,
    name: "Oversized Crewneck T-Shirt",
    category: "tops",
    subcategory: "t-shirts",
    price: 699,
    description: "Heavy oversized fit with dropped shoulders. 280gsm cotton. Thick rib collar. Minimal branding.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop&q=80",
    alt: "Oversized crewneck t-shirt in earth tone",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Olive Green", "Beige", "Crème White", "Mustard", "Black", "White"],
    featured: true
  },
  {
    id: 2,
    name: "Saggy Golfer Polo",
    category: "tops",
    subcategory: "polos",
    price: 899,
    description: "Loose saggy fit. Extended sleeves. Soft structured collar. Slight drop hem.",
    image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&h=800&fit=crop&q=80",
    alt: "Saggy golfer polo in mustard",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Mustard"],
    featured: true
  },
  {
    id: 3,
    name: "Bottle Green Flannel Shirt",
    category: "tops",
    subcategory: "shirts",
    price: 1299,
    description: "Bottle green base with brown & crème check pattern. Relaxed oversized fit. Double chest pockets. Heavy flannel texture.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&q=80",
    alt: "Bottle green flannel shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Bottle Green"],
    featured: true
  },

  // 👖 TROUSERS
  {
    id: 4,
    name: "Baggy Jeans",
    category: "trousers",
    subcategory: "jeans",
    price: 1499,
    description: "Wide-leg heavy denim. Slight stacking at bottom. Clean architectural silhouette.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop&q=80",
    alt: "Baggy jeans wide leg",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Light Wash", "Dark Wash", "Black"],
    featured: true
  },
  {
    id: 5,
    name: "Baggy Chinos",
    category: "trousers",
    subcategory: "chinos",
    price: 1199,
    description: "Clean tailored loose fit. Premium cotton twill. Earth tone palette.",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&q=80",
    alt: "Baggy chinos in beige",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Beige", "Olive", "Brown"],
    featured: true
  },
  {
    id: 6,
    name: "Baggy Cargo Pants",
    category: "trousers",
    subcategory: "cargo",
    price: 1399,
    description: "Multi-pocket design. Utility straps. Heavy cotton construction. Earth tones.",
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop&q=80",
    alt: "Baggy cargo pants with pockets",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Olive", "Brown", "Black"],
    featured: false
  },
  {
    id: 7,
    name: "High-End Fashion Joggers",
    category: "trousers",
    subcategory: "joggers",
    price: 1599,
    description: "Tapered but relaxed fit. Premium French terry fabric. Minimal seams. Hidden zip pockets.",
    image: "https://images.unsplash.com/photo-1446214814726-e6074845b4ce?w=600&h=800&fit=crop&q=80",
    alt: "Premium fashion joggers",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "Olive"],
    featured: false
  },

  // 🧥 OUTERWEAR
  {
    id: 8,
    name: "Structured Denim Jacket",
    category: "outerwear",
    subcategory: "denim",
    price: 1899,
    description: "Clean cut structured fit. Premium denim. Minimal branding. Architectural silhouette.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=800&fit=crop&q=80",
    alt: "Structured denim jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Indigo", "Black", "Light Wash"],
    featured: true
  },
  {
    id: 9,
    name: "High-End Windbreaker",
    category: "outerwear",
    subcategory: "windbreakers",
    price: 2199,
    description: "Lightweight matte finish. Minimal branding. Technical fabric. Packable design.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80",
    alt: "High-end matte windbreaker",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Navy"],
    featured: false
  },
  {
    id: 10,
    name: "Colour Blocking Hoodie",
    category: "outerwear",
    subcategory: "hoodies",
    price: 1699,
    description: "Premium heavyweight fleece. Earth tone colour blocks. Oversized fit.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&q=80",
    alt: "Colour blocking hoodie",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige + Olive", "Brown + Crème", "Mustard + Navy"],
    featured: true
  },
  {
    id: 11,
    name: "Artistic Raincoat",
    category: "outerwear",
    subcategory: "raincoats",
    price: 2899,
    description: "Conceptual silhouette. Matte transparent fabric. Statement piece. Adjustable hood.",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop&q=80",
    alt: "Artistic statement raincoat",
    sizes: ["S", "M", "L"],
    colors: ["Clear", "Smoke", "Amber"],
    featured: false
  },
  {
    id: 12,
    name: "Flowing Poncho",
    category: "outerwear",
    subcategory: "ponchos",
    price: 2399,
    description: "Flowing architectural shape. Neutral tones. Premium wool blend. Minimal seams.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a20?w=600&h=800&fit=crop&q=80",
    alt: "Flowing minimalist poncho",
    sizes: ["One Size"],
    colors: ["Beige", "Grey", "Brown"],
    featured: false
  },
  {
    id: 13,
    name: "Art-Based Panel Coat",
    category: "outerwear",
    subcategory: "coats",
    price: 3499,
    description: "Abstract paneling. Mixed textures. Fashion-forward architectural piece. Heavy wool blend.",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop&q=80",
    alt: "Art panel abstract coat",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Multi-tone Earth", "Monochrome"],
    featured: true
  },

  // 🎒 BAGS
  {
    id: 14,
    name: "Crossbody Side Bag",
    category: "bags",
    subcategory: "side-bags",
    price: 899,
    description: "Clean minimal design. Adjustable strap. Premium nylon. Hidden zip closure.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop&q=80",
    alt: "Minimal crossbody bag",
    sizes: ["One Size"],
    colors: ["Black", "Olive", "Beige"],
    featured: true
  },
  {
    id: 15,
    name: "Structured Handbag",
    category: "bags",
    subcategory: "handbags",
    price: 1299,
    description: "Architectural shape. Structured design. Premium vegan leather. Magnetic closure.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop&q=80",
    alt: "Structured handbag",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Crème"],
    featured: false
  },
  {
    id: 16,
    name: "Minimal Backpack",
    category: "bags",
    subcategory: "backpacks",
    price: 1499,
    description: "Clean minimal design. Padded laptop sleeve. Premium canvas. Leather trim details.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop&q=80",
    alt: "Clean minimal backpack",
    sizes: ["One Size"],
    colors: ["Black", "Olive", "Beige"],
    featured: false
  },

  // 🧢 ACCESSORIES
  {
    id: 17,
    name: "Structured Cap",
    category: "accessories",
    subcategory: "caps",
    price: 399,
    description: "6-panel structured cap. Embroidered minimal logo. Adjustable strap back.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop&q=80",
    alt: "Structured cap",
    sizes: ["One Size"],
    colors: ["Brown", "Olive", "Black", "Beige"],
    featured: false
  },
  {
    id: 18,
    name: "Bucket Hat",
    category: "accessories",
    subcategory: "bucket-hats",
    price: 449,
    description: "Classic bucket silhouette. Heavy cotton twill. Minimal stitch detail.",
    image: "https://images.unsplash.com/photo-1556306535-0f09a5373a09?w=600&h=800&fit=crop&q=80",
    alt: "Cotton bucket hat",
    sizes: ["S/M", "L/XL"],
    colors: ["Beige", "Brown", "Black", "Olive"],
    featured: false
  },
  {
    id: 19,
    name: "Wool Beret",
    category: "accessories",
    subcategory: "berets",
    price: 349,
    description: "Classic French silhouette. Pure wool. One size with elasticated band.",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=800&fit=crop&q=80",
    alt: "Wool beret",
    sizes: ["One Size"],
    colors: ["Black", "Mustard", "Navy"],
    featured: false
  },
  {
    id: 20,
    name: "Ribbed Beanie",
    category: "accessories",
    subcategory: "beanies",
    price: 299,
    description: "Fine rib knit. Fold-over cuff. Premium acrylic-wool blend. Minimal branding.",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=800&fit=crop&q=80",
    alt: "Ribbed knit beanie",
    sizes: ["One Size"],
    colors: ["Brown", "Beige", "Black", "Olive"],
    featured: false
  }
];

export const categories = [
  { 
    id: "all", 
    name: "View All",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop&q=80",
    description: "The complete Earth Form Collection"
  },
  { 
    id: "tops", 
    name: "Tops",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=600&fit=crop&q=80",
    description: "Oversized silhouettes in premium cotton"
  },
  { 
    id: "trousers", 
    name: "Trousers",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=600&fit=crop&q=80",
    description: "Baggy fits with architectural lines"
  },
  { 
    id: "outerwear", 
    name: "Outerwear",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=600&fit=crop&q=80",
    description: "Statement pieces in earth tones"
  },
  { 
    id: "bags", 
    name: "Bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop&q=80",
    description: "Minimal accessories for everyday"
  },
  { 
    id: "accessories", 
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=600&fit=crop&q=80",
    description: "Complete your look"
  }
];

export const collectionInfo = {
  name: "EARTH FORM COLLECTION",
  description: "A clean, architectural, earth-tone luxury streetwear collection. Minimal branding. Maximum intention.",
  season: "Autumn/Winter 2024"
};

export default products;