export type Product = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  intro: string;
  icon: string;
  features: { title: string; desc: string; icon: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  variants?: { name: string; desc: string }[];
};

export const products: Product[] = [
  {
    slug: "corrugated-boxes",
    name: "Corrugated Boxes",
    short: "Strong, lightweight boxes built to protect your products in storage and transit.",
    tagline: "Strong & Reliable Packaging",
    description:
      "Custom corrugated boxes in 3-ply, 5-ply and 7-ply, engineered for the exact weight, stacking and transit conditions of your product.",
    intro:
      "Our corrugated boxes are strong, lightweight and designed to protect your products during storage and transit. From single-wall shippers to triple-wall heavy-duty crates, every box is built to a burst-strength and edge-crush spec that matches how it will actually be handled.",
    icon: "box",
    features: [
      { title: "Strong & Durable", desc: "Board specced to real BCT and stacking loads, not guesswork.", icon: "shield" },
      { title: "Lightweight & Cost-Effective", desc: "Right-weight board keeps freight and material cost down.", icon: "feather" },
      { title: "Eco-Friendly Material", desc: "100% recyclable kraft, made from renewable fibre.", icon: "leaf" },
      { title: "Ideal for Shipping & Storage", desc: "Stackable, printable and easy to palletise.", icon: "truck" },
    ],
    specs: [
      { label: "Ply", value: "3, 5 & 7 ply" },
      { label: "Box styles", value: "RSC, HSC, FOL, Die-cut, Telescopic" },
      { label: "Bursting strength", value: "Up to 20+ kg/cm²" },
      { label: "Printing", value: "Flexo, up to 3 colours" },
      { label: "Sizes", value: "Fully customised (L × W × H)" },
      { label: "MOQ", value: "As per size — ask for a quote" },
    ],
    useCases: ["E-commerce shippers", "FMCG cartons", "Pharma outer packaging", "Electronics", "Auto components"],
    variants: [
      { name: "Regular Slotted Carton (RSC)", desc: "The workhorse box — all flaps the same length, meeting at the centre. Most economical." },
      { name: "Half-Slotted Carton (HSC)", desc: "RSC without one set of flaps — an open tray, often used with a separate lid." },
      { name: "Full-Overlap (FOL)", desc: "Flaps fully overlap for extra stacking strength and edge protection." },
      { name: "Die-Cut Boxes", desc: "Custom shapes, self-locking mailers and retail-ready structures." },
      { name: "Telescopic Boxes", desc: "Separate lid and base for heavy or deep products." },
    ],
  },
  {
    slug: "corrugated-sheets",
    name: "Corrugated Sheets",
    short: "Premium kraft sheets in 3, 5 and 7 ply with excellent strength and cushioning.",
    tagline: "High Strength & Durability",
    description:
      "Flat corrugated sheets manufactured from premium kraft paper — supplied in 3-ply, 5-ply, 7-ply and fully custom dimensions.",
    intro:
      "Our corrugated sheets are manufactured using premium quality kraft paper to deliver excellent strength, durability and performance. Used as protective layering, partitions, pallet interleaving and box blanks across industries.",
    icon: "layers",
    features: [
      { title: "High Strength", desc: "Consistent burst and edge-crush across the full sheet.", icon: "shield" },
      { title: "Excellent Cushioning", desc: "Flute air-columns absorb shock and vibration.", icon: "layers" },
      { title: "Lightweight & Durable", desc: "Maximum protection with minimum weight.", icon: "feather" },
      { title: "Consistent Quality", desc: "Computerised cutting for accurate, repeatable sizes.", icon: "check" },
    ],
    specs: [
      { label: "Types", value: "3-ply, 5-ply, 7-ply" },
      { label: "Dimensions", value: "Customised to your requirement" },
      { label: "Flutes", value: "A, B, C, E + BC/EB combos" },
      { label: "GSM", value: "120–250+ kraft liners" },
      { label: "Finish", value: "Natural kraft / tested liners" },
      { label: "Use", value: "Layering, partitions, blanks" },
    ],
    useCases: ["Pallet interleaving", "Layer pads", "Partitions & dividers", "Furniture protection", "Glass & ceramics"],
    variants: [
      { name: "3-Ply Sheets", desc: "Single-wall — light protection, wrapping and interleaving." },
      { name: "5-Ply Sheets", desc: "Double-wall — heavier products and stronger partitions." },
      { name: "7-Ply Sheets", desc: "Triple-wall — maximum strength for industrial layering." },
      { name: "Customised Dimensions", desc: "Any length and width, cut precisely to your spec." },
    ],
  },
  {
    slug: "customized-packaging",
    name: "Customized Packaging",
    short: "Tailor-made, branded packaging designed around your product and identity.",
    tagline: "Tailor-Made for Your Needs",
    description:
      "Branded boxes with logo printing, custom structures and product-specific inserts — packaging that protects and sells.",
    intro:
      "Every business has unique packaging needs. We offer tailor-made solutions — custom box sizes, high-quality logo printing, product-specific inserts and brand-building structures — engineered to match both your product and your identity.",
    icon: "sparkles",
    features: [
      { title: "Custom Box Sizes", desc: "Boxes in any dimension, engineered to your product.", icon: "ruler" },
      { title: "Logo & Brand Printing", desc: "High-quality flexo printing to promote your brand.", icon: "pen" },
      { title: "Product-Specific Design", desc: "Inserts, partitions and structures for a perfect fit.", icon: "cog-box" },
      { title: "Bulk Manufacturing", desc: "Large-scale production with consistent quality.", icon: "factory" },
    ],
    specs: [
      { label: "Printing", value: "1–3 colour flexo" },
      { label: "Structures", value: "Mailers, inserts, partitions, trays" },
      { label: "Branding", value: "Logo, warnings, handling marks" },
      { label: "Design", value: "Structural + graphic support" },
      { label: "Finish", value: "Natural kraft or printed liner" },
      { label: "Scale", value: "Prototype to bulk" },
    ],
    useCases: ["D2C & e-commerce brands", "Retail-ready packaging", "Gift & subscription boxes", "Product launches"],
  },
  {
    slug: "export-packaging",
    name: "Export Packaging",
    short: "Heavy-duty packaging engineered for safe delivery across the globe.",
    tagline: "Built for Global Shipping",
    description:
      "Export-grade corrugated and hybrid packaging designed for sea, air and land freight, with maximum protection and compliance.",
    intro:
      "Our export packaging solutions are designed to ensure maximum protection and safe delivery across the globe. Strong, durable and cost-effective — built for the stresses of sea freight, air freight, long-haul transport and warehousing.",
    icon: "globe",
    features: [
      { title: "Maximum Protection", desc: "Multi-wall board and strapping for long transit.", icon: "shield" },
      { title: "Suitable for Global Shipping", desc: "Specced for sea, air and land freight loads.", icon: "globe" },
      { title: "Strong & Durable", desc: "Handles rough handling and stacking pressure.", icon: "link" },
      { title: "Cost-Effective", desc: "Optimised board weight to control freight cost.", icon: "rupee" },
    ],
    specs: [
      { label: "Ply", value: "5-ply & 7-ply multi-wall" },
      { label: "Freight", value: "Sea, air, land & warehousing" },
      { label: "Reinforcement", value: "Strapping & edge protection" },
      { label: "Handling marks", value: "ISO handling symbols printed" },
      { label: "Palletisation", value: "Optimised for standard pallets" },
      { label: "Testing", value: "Burst & compression checked" },
    ],
    useCases: ["Overseas shipments", "Machinery & spares", "Bulk consolidated freight", "Long-haul distribution"],
  },
  {
    slug: "industrial-packaging",
    name: "Industrial Packaging",
    short: "Reliable heavy-duty packaging for safe handling, storage and transport.",
    tagline: "Packed Strong. Delivered Safe.",
    description:
      "Heavy-duty corrugated and hybrid packaging for industrial products — engineered for weight, safe handling and warehouse stacking.",
    intro:
      "Reliable packaging solutions for industrial products to ensure safe handling, storage and transportation. Heavy-duty protection engineered around the weight, shape and handling profile of your components.",
    icon: "factory",
    features: [
      { title: "Heavy-Duty Protection", desc: "Multi-wall board built for weight and impact.", icon: "shield" },
      { title: "Strong & Reliable", desc: "Consistent performance load after load.", icon: "link" },
      { title: "Custom Solutions", desc: "Fitments and partitions for delicate parts.", icon: "cog-box" },
      { title: "On-Time Delivery", desc: "Planned production for industrial schedules.", icon: "clock" },
    ],
    specs: [
      { label: "Ply", value: "5-ply & 7-ply" },
      { label: "Reinforcement", value: "Angle boards, partitions, strapping" },
      { label: "Load", value: "Engineered to component weight" },
      { label: "Formats", value: "Boxes, sleeves, layer pads, rolls" },
      { label: "Industries", value: "Auto, engineering, construction" },
      { label: "Delivery", value: "Scheduled bulk supply" },
    ],
    useCases: ["Manufacturing", "Engineering", "Construction", "Warehousing", "Logistics"],
  },
  {
    slug: "packaging-tapes",
    name: "Packaging Tapes",
    short: "Strong-adhesion tapes for secure, tamper-resistant sealing.",
    tagline: "Strong Sealing & Security",
    description:
      "Packaging tapes that ensure strong sealing, security and long-lasting performance across surfaces and conditions.",
    intro:
      "Our packaging tapes ensure strong sealing, security and long-lasting performance. Supplied alongside your boxes so your line has everything it needs to pack, seal and dispatch.",
    icon: "tape",
    features: [
      { title: "Strong Adhesion", desc: "Secure sealing across kraft and film surfaces.", icon: "link" },
      { title: "Durable & Reliable", desc: "Built to withstand handling and transport.", icon: "shield" },
      { title: "Tamper Resistant", desc: "Helps protect your products against tampering.", icon: "shield" },
      { title: "Versatile Use", desc: "Suitable for various packaging needs and surfaces.", icon: "check" },
    ],
    specs: [
      { label: "Type", value: "BOPP / kraft tapes" },
      { label: "Widths", value: "Standard & custom" },
      { label: "Printing", value: "Plain or branded" },
      { label: "Adhesion", value: "High-tack, long-lasting" },
      { label: "Supply", value: "Bulk cartons" },
      { label: "Use", value: "Carton sealing & bundling" },
    ],
    useCases: ["Carton sealing", "Bundling", "Branded tape", "Tamper-evident sealing"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
