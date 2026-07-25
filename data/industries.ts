export type Industry = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  intro: string;
  needs: string[];
  recommended: { product: string; spec: string }[];
};

export const industries: Industry[] = [
  {
    slug: "pharma",
    name: "Pharmaceutical",
    icon: "pill",
    short: "Clean, compliant outer packaging for the Baddi–Barotiwala–Nalagarh pharma belt.",
    intro:
      "Right on the doorstep of Asia's largest pharma manufacturing hub, we supply corrugated shippers and mono-cartons built for pharma dispatch — clean, consistent and printed with the handling and storage marks your compliance needs.",
    needs: ["Consistent, contamination-free board", "Handling & storage symbols", "Stackable master shippers", "Batch-print compatible"],
    recommended: [
      { product: "Corrugated Boxes", spec: "3-ply & 5-ply master shippers" },
      { product: "Customized Packaging", spec: "Printed mono-cartons & inserts" },
    ],
  },
  {
    slug: "fmcg",
    name: "FMCG & Food",
    icon: "cart",
    short: "High-volume, print-ready cartons for fast-moving consumer goods.",
    intro:
      "FMCG runs on volume and consistency. We deliver print-ready single and double-wall cartons that stack cleanly, run fast on your packing line and carry your brand crisply.",
    needs: ["High-volume consistency", "Clean flexo print surface", "Fast line performance", "Reliable stacking"],
    recommended: [
      { product: "Corrugated Boxes", spec: "3-ply RSC, B/C-flute" },
      { product: "Customized Packaging", spec: "Branded retail cartons" },
    ],
  },
  {
    slug: "electronics",
    name: "Electronics",
    icon: "chip",
    short: "Cushioned, static-safe packaging for sensitive electronic products.",
    intro:
      "Electronics need protection from shock, vibration and crushing. We engineer boxes with the right flute and inserts to hold products securely through the whole journey.",
    needs: ["Shock & vibration protection", "Snug custom inserts", "Edge & corner protection", "Retail-ready print"],
    recommended: [
      { product: "Customized Packaging", spec: "Die-cut boxes with inserts" },
      { product: "Corrugated Sheets", spec: "Partitions & layer pads" },
    ],
  },
  {
    slug: "agriculture",
    name: "Agriculture & Produce",
    icon: "leaf",
    short: "Ventilated, moisture-aware boxes for fruit, vegetables and produce.",
    intro:
      "Produce packaging has to breathe and hold its strength in humid, cold-chain conditions. We build ventilated, moisture-aware corrugated boxes and trays that protect yield from farm to market.",
    needs: ["Ventilation options", "Moisture-aware board", "Stacking strength when cold/damp", "Trays & partitions"],
    recommended: [
      { product: "Corrugated Boxes", spec: "5-ply ventilated shippers" },
      { product: "Corrugated Sheets", spec: "Trays & partitions" },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    icon: "package",
    short: "Right-sized, brandable mailers that survive the last mile.",
    intro:
      "E-commerce boxes take a beating — multiple touchpoints, drops and re-handling. We supply right-sized, self-locking mailers and shippers that protect the product and put your brand on the doorstep.",
    needs: ["Right-sizing to cut freight", "Self-locking mailers", "Drop & handling resistance", "Brand print"],
    recommended: [
      { product: "Customized Packaging", spec: "Die-cut self-lock mailers" },
      { product: "Corrugated Boxes", spec: "3-ply RSC shippers" },
    ],
  },
  {
    slug: "engineering",
    name: "Engineering & Auto",
    icon: "gear",
    short: "Heavy-duty boxes and crates for industrial components and spares.",
    intro:
      "Engineering and automotive parts are heavy, sharp and valuable. We build multi-wall boxes, sleeves and layer pads — with strapping and reinforcement — to move components safely.",
    needs: ["Heavy-load board", "Puncture resistance", "Custom fitments", "Strapping & reinforcement"],
    recommended: [
      { product: "Industrial Packaging", spec: "5-ply & 7-ply boxes" },
      { product: "Export Packaging", spec: "Reinforced export crates" },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
