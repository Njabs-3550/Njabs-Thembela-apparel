const products = [
  // ==================== TOPS ====================
  {
    id: 1,
    name: "Oversized Crewneck T-Shirt",
    category: "tops",
    subcategory: "t-shirts",
    price: 699,
    description: "Heavy oversized fit with dropped shoulders. 280gsm cotton. Thick rib collar. Minimal branding.",
    coverImage: "/images/products/oversized-tee-cover.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Brown", hex: "#8B7355", image: "/images/products/oversized-tee-brown.jpg" },
      { name: "Olive Green", hex: "#556B2F", image: "/images/products/oversized-tee-olive.jpg" },
      { name: "Beige", hex: "#E8D5C4", image: "/images/products/oversized-tee-beige.jpg" },
      { name: "Crème White", hex: "#FAF7F2", image: "/images/products/oversized-tee-creme.jpg" },
      { name: "Mustard", hex: "#DAA520", image: "/images/products/oversized-tee-mustard.jpg" },
      { name: "Black", hex: "#1A1A1A", image: "/images/products/oversized-tee-black.jpg" },
      { name: "White", hex: "#FFFFFF", image: "/images/products/white-ss-t.shirt.png" }
    ],
    featured: true
  },
  {
    id: 2,
    name: "Saggy Golfer Polo",
    category: "tops",
    subcategory: "polos",
    price: 899,
    description: "Loose saggy fit. Extended sleeves. Soft structured collar. Slight drop hem.",
    coverImage: "/images/products/green&white-golfer.png",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Navy", hex: "#1B2838", image: "/images/products/bgreen-golfer.png" },
      { name: "Mustard", hex: "#DAA520", image: "/images/products/mustard-golfer.png" }
    ],
    featured: true
  },
  {
    id: 3,
    name: "short sleeve shirt",
    category: "tops",
    subcategory: "shirts",
    price: 1299,
    description: "Bottle green base with brown & crème check pattern. Relaxed oversized fit. Double chest pockets.",
    coverImage: "/images/products/white-ss-shirt-cover.png",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Bottle Green", hex: "#1B4D3E", image: "/images/products/navy-ss-shirt.png" }
      { name: "Bottle Green", hex: "#1B4D3E", image: "/images/products/creme-ss-shirt.png" }
      { name: "Bottle Green", hex: "#1B4D3E", image: "/images/products/black-ss-shirt.png" }
      { name: "Bottle Green", hex: "#1B4D3E", image: "/images/products/creme-ss-shirt.png" }
    ],
    featured: true
  },
  {
    id: 4,
    name: "Oversized Long Sleeve Shirt",
    category: "tops",
    subcategory: "shirts",
    price: 1499,
    description: "Relaxed oversized fit. Two chest flap pockets. Full button-up front. Woven nta. tag at bottom right.",
    coverImage: "/images/products/bgreen-ls-shirt-cover.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Bottle Green", hex: "#1B4D3E", image: "/images/products/green-ls-shirt.png" },
      { name: "Black", hex: "#1A1A1A", image: "/images/products/black-ls-shirt.png" },
      { name: "White", hex: "#FFFFFF", image: "/images/products/white-ls-shirt.png" },
      { name: "Rusty Bronze", hex: "#B87333", image: "/images/products/bronze-ls-shirt.png" }
    ],
    featured: true
  },

  // ==================== TROUSERS ====================
  {
    id: 5,
    name: "Baggy Jeans",
    category: "trousers",
    subcategory: "jeans",
    price: 1499,
    description: "Wide-leg heavy denim. Slight stacking at bottom. Clean architectural silhouette.",
    coverImage: "/images/products/baggy-jeans-cover.jpg",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Light Wash", hex: "#A0B4C8", image: "/images/products/light-wash-denim-jeans.png" },
      { name: "Dark Wash", hex: "#2C3E50", image: "/images/products/brown-trackpants.png" }
      { name: "Dark Wash", hex: "#2C3E50", image: "/images/products/black-trackpants.png" }
      { name: "Dark Wash", hex: "#2C3E50", image: "/images/products/ink-denim-super-baggy.png" },
      { name: "Black", hex: "#1A1A1A", image: "/images/products/dark-wash-denim-jeans.png" }
    ],
    featured: true
  },
  {
    id: 6,
    name: "Baggy Chinos",
    category: "trousers",
    subcategory: "chinos",
    price: 1199,
    description: "Clean tailored loose fit. Premium cotton twill. Earth tone palette.",
    coverImage: "/images/products/black-baggy-formal-pants.png",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Beige", hex: "#E8D5C4", image: "/images/products/baggy-chinos-beige.jpg" },
      { name: "Olive", hex: "#556B2F", image: "/images/products/baggy-chinos-olive.jpg" },
      { name: "Brown", hex: "#8B7355", image: "/images/products/baggy-chinos-brown.jpg" }
    ],
    featured: true
  },
  {
    id: 7,
    name: "Baggy Cargo Pants",
    category: "trousers",
    subcategory: "cargo",
    price: 1399,
    description: "Multi-pocket design. Utility straps. Heavy cotton construction. Earth tones.",
    coverImage: "/images/products/cargo-pants-cover.jpg",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Olive", hex: "#556B2F", image: "/images/products/military-cargopants.png" },
      { name: "Brown", hex: "#8B7355", image: "/images/products/cargo-pants-brown.jpg" },
      { name: "Black", hex: "#1A1A1A", image: "/images/products/cargo-pants-black.jpg" }
    ],
    featured: false
  },

  // ==================== OUTERWEAR ====================
  {
    id: 8,
    name: "Structured Denim Jacket",
    category: "outerwear",
    subcategory: "denim",
    price: 1899,
    description: "Clean cut structured fit. Premium denim. Minimal branding. Architectural silhouette.",
    coverImage: "/images/products/denim-jacket-cover.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Indigo", hex: "#3C5A7D", image: "/images/products/military-ss-jacket.png" },
      { name: "Black", hex: "#1A1A1A", image: "/images/products/brown-windbreaker.png" },
      { name: "Black", hex: "#1A1A1A", image: "/images/products/white-windbreaker.png" },
    ],
    featured: true
  },
  {
    id: 9,
    name: "Colour Blocking Hoodie",
    category: "outerwear",
    subcategory: "hoodies",
    price: 1699,
    description: "Premium heavyweight fleece. Earth tone colour blocks. Oversized fit.",
    coverImage: "/images/products/color-block-hoodie-cover.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Beige + Olive", hex: "#E8D5C4", image: "/images/products/brown-coat.png" },
      { name: "Brown + Crème", hex: "#8B7355", image: "/images/products/brown-hoodie.png" },
      { name: "Mustard + Navy", hex: "#DAA520", image: "/images/products/hoodie-mustard-navy.jpg" }
    ],
    featured: true
  },

  // ==================== ACCESSORIES ====================
  {
    id: 10,
    name: "Wool Knit Beanie",
    category: "accessories",
    subcategory: "beanies",
    price: 399,
    description: "Soft rib-knit wool beanie with fold-over cuff. Finished with subtle nta. branding.",
    coverImage: "/images/products/cover-beanie-cover.png",
    sizes: ["One Size"],
    colors: [
      { name: "Cream / Taupe Pattern", hex: "#FAF7F2", image: "/images/products/creme-beanie.png" },
      { name: "Charcoal / Light Grey Pattern", hex: "#36454F", image: "/images/products/black-beanie1.png" },
      { name: "Olive / Beige Pattern", hex: "#556B2F", image: "/images/products/avocado-beanie1.png" },
      { name: "Olive / Beige Pattern", hex: "#556B2F", image: "/images/products/avocado-beanie2.png" },
      { name: "Rusty Bronze", hex: "#B87333", image: "/images/products/bronze-beanie.png" },
      { name: "Black", hex: "#1A1A1A", image: "/images/products/black-beanie.png" }
    ],
    featured: false
  },
  {
    id: 11,
    name: "Bucket Hat",
    category: "accessories",
    subcategory: "bucket-hats",
    price: 449,
    description: "Classic bucket silhouette in cotton twill. Finished with subtle nta. typewriter branding.",
    coverImage: "/images/products/bucket-hat-cover.png",
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1A1A1A", image: "/images/products/black-bucket-hat.png" },
      { name: "Beige", hex: "#E8D5C4", image: "/images/products/white-bucket-hat.png" },
      { name: "Olive Green", hex: "#556B2F", image: "/images/products/bucket-hat-olive.png" },
      { name: "Navy", hex: "#1B2838", image: "/images/products/navy-bucket-hat.png" },
      { name: "Brown", hex: "#8B7355", image: "/images/products/bronze-bucket-hat.png" }
    ],
    featured: false
  },
  {
    id: 12,
    name: "Wool Beret Hat",
    category: "accessories",
    subcategory: "berets",
    price: 349,
    description: "Soft wool beret with classic rounded shape. Inside woven nta. tag. Clean exterior.",
    coverImage: "/images/products/bronze-beret-cover.png",
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1A1A1A", image: "/images/products/black-baret.png" },
      { name: "Bottle Green", hex: "#1B4D3E", image: "/images/products/green-beret.png" },
      { name: "Rusty Bronze", hex: "#B87333", image: "/images/products/bronze-beret.png" }  
    ],
    featured: false
  },
  {
    id: 13,
    name: "Structured Cap",
    category: "accessories",
    subcategory: "caps",
    price: 399,
    description: "6-panel structured cap with embroidered nta. branding. Adjustable strap back. Curved brim.",
    coverImage: "/images/products/cap-cover.png",
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1A1A1A", image: "/images/products/caps1.png" },
      { name: "Beige", hex: "#E8D5C4", image: "/images/products/caps2.png" },
      { name: "Olive Green", hex: "#556B2F", image: "/images/products/caps3.png" },
      { name: "Brown", hex: "#8B7355", image: "/images/products/caps4.png" },
      { name: "Navy", hex: "#1B2838", image: "/images/products/caps5.png" },
      { name: "Crème White", hex: "#FAF7F2", image: "/images/products/caps6.png" },
      { name: "Rusty Bronze", hex: "#B87333", image: "/images/products/caps7.png" },
      { name: "Charcoal", hex: "#36454F", image: "/images/products/caps8.png" },
      { name: "Mustard", hex: "#DAA520", image: "/images/products/caps9.png" },
      { name: "Bottle Green", hex: "#1B4D3E", image: "/images/products/caps10.png" },
      { name: "Sand", hex: "#C2B280", image: "/images/products/caps11.png" },
      { name: "Burgundy", hex: "#722F37", image: "/images/products/caps12.png" }
    ],
    featured: false
  }
];

export const categories = [
  { 
    id: "all", 
    name: "View All",
    image: "/images/categories/all.jpg",
    description: "The complete Earth Form Collection"
  },
  { 
    id: "tops", 
    name: "Tops",
    image: "/images/categories/tops.jpg",
    description: "Oversized silhouettes in premium cotton"
  },
  { 
    id: "trousers", 
    name: "Trousers",
    image: "/images/categories/trousers.jpg",
    description: "Baggy fits with architectural lines"
  },
  { 
    id: "caps", 
    name: "Caps",
    image: "/images/categories/caps.jpg",
    description: "Structured 6-panel caps"
  },
  { 
    id: "outerwear", 
    name: "Outerwear",
    image: "/images/categories/outerwear.jpg",
    description: "Statement pieces in earth tones"
  },
  { 
    id: "accessories", 
    name: "Accessories",
    image: "/images/categories/accessories.jpg",
    description: "Complete your look"
  }
];

export const collectionInfo = {
  name: "EARTH FORM COLLECTION",
  description: "A clean, architectural, earth-tone luxury streetwear collection. Minimal branding. Maximum intention.",
  season: "Autumn/Winter 2026"
};

export default products;
