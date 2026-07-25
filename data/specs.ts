/* ============================================================
   Technical specifications — the corrugated knowledge base.
   Powers the Specs page, Box Builder and Strength Advisor.
   ============================================================ */

export type PlyType = {
  ply: string;
  name: string;
  walls: string;
  thickness: string;
  best: string;
  weightGuide: string;
  desc: string;
};

export const plyTypes: PlyType[] = [
  {
    ply: "2",
    name: "2-Ply (Single Face)",
    walls: "1 liner + 1 fluting",
    thickness: "~1.5–5 mm",
    best: "Wrapping & cushioning",
    weightGuide: "Protective layer",
    desc: "One flat liner bonded to one fluted medium. Flexible — used as a protective wrap, roll or interleaving rather than a rigid box.",
  },
  {
    ply: "3",
    name: "3-Ply (Single Wall)",
    walls: "2 liners + 1 fluting",
    thickness: "~2.5–5 mm",
    best: "Light to medium goods",
    weightGuide: "Up to ~10 kg",
    desc: "The most common shipping board. One fluted layer between two liners — economical, printable and strong enough for most e-commerce and FMCG cartons.",
  },
  {
    ply: "5",
    name: "5-Ply (Double Wall)",
    walls: "3 liners + 2 fluting",
    thickness: "~6–8 mm",
    best: "Heavy & export goods",
    weightGuide: "~10–30 kg",
    desc: "Two fluted layers for far greater stacking and burst strength. The standard for heavier products, export shipments and long transit.",
  },
  {
    ply: "7",
    name: "7-Ply (Triple Wall)",
    walls: "4 liners + 3 fluting",
    thickness: "~10–14 mm",
    best: "Very heavy / industrial",
    weightGuide: "30 kg+",
    desc: "Three fluted layers approaching the strength of a timber crate. Used for machinery, industrial components and heavy-duty export.",
  },
];

export type Flute = {
  code: string;
  name: string;
  height: string;
  fpm: string; // flutes per metre (approx)
  props: string;
  use: string;
};

export const flutes: Flute[] = [
  { code: "A", name: "A-Flute", height: "~4.7 mm", fpm: "~110/m", props: "Highest cushioning & stacking strength", use: "Fragile & heavy goods" },
  { code: "B", name: "B-Flute", height: "~2.5 mm", fpm: "~150/m", props: "Good crush resistance, flat print surface", use: "Canned & retail goods" },
  { code: "C", name: "C-Flute", height: "~3.6 mm", fpm: "~130/m", props: "All-round balance of strength & printability", use: "General shipping cartons" },
  { code: "E", name: "E-Flute", height: "~1.2 mm", fpm: "~290/m", props: "Thin, smooth, excellent print", use: "Retail & product boxes" },
  { code: "F", name: "F-Flute", height: "~0.8 mm", fpm: "~350/m", props: "Very fine, premium print", use: "Small retail packaging" },
  { code: "BC", name: "BC (Double)", height: "~6–7 mm", fpm: "combined", props: "B+C combined for double-wall strength", use: "Heavy shippers" },
  { code: "EB", name: "EB (Double)", height: "~4 mm", fpm: "combined", props: "E+B for strength with a print face", use: "Premium heavy retail" },
];

export type BoxStyle = {
  code: string;
  name: string;
  desc: string;
};

export const boxStyles: BoxStyle[] = [
  { code: "RSC", name: "Regular Slotted Carton", desc: "All flaps equal length, outer flaps meet at centre. The most economical, most common box." },
  { code: "HSC", name: "Half-Slotted Carton", desc: "Like an RSC but with one set of flaps removed — an open tray, often used with a lid." },
  { code: "FOL", name: "Full-Overlap Slotted", desc: "Outer flaps fully overlap for extra stacking strength and edge protection." },
  { code: "DC", name: "Die-Cut Box", desc: "Custom-shaped, self-locking mailers and retail-ready structures cut on a die." },
  { code: "TEL", name: "Telescopic Box", desc: "Separate lid and base that telescope together — for heavy or deep products." },
  { code: "TRAY", name: "Tray / Partition", desc: "Open trays, dividers and partitions for bottles, jars and delicate items." },
];

export type QualityParam = {
  name: string;
  short: string;
  unit: string;
  desc: string;
};

export const qualityParams: QualityParam[] = [
  { name: "GSM", short: "Grammage", unit: "g/m²", desc: "Weight of the kraft paper per square metre. Higher GSM liners generally mean stronger, heavier board." },
  { name: "Bursting Strength", short: "Burst Factor", unit: "kg/cm²", desc: "Pressure the board withstands before rupturing. A core indicator of box strength (Mullen test)." },
  { name: "ECT", short: "Edge Crush Test", unit: "kN/m", desc: "Force the board edge withstands on-end — directly predicts stacking strength." },
  { name: "BCT", short: "Box Compression", unit: "kgf", desc: "Total top-load a finished box can bear before crushing. Drives safe stacking height." },
  { name: "Cobb Value", short: "Water Absorption", unit: "g/m²", desc: "Water absorbed by the surface — lower Cobb means better moisture resistance." },
  { name: "Puncture Resistance", short: "Puncture", unit: "J", desc: "Energy absorbed before the board is punctured — important for sharp or heavy contents." },
];

/* ---------- Strength Advisor logic ---------- */
export type Recommendation = {
  ply: string;
  flute: string;
  gsm: string;
  burst: string;
  note: string;
};

export function recommendBoard(weightKg: number, fragile: boolean, isExport: boolean): Recommendation {
  // Simple, defensible heuristic for guidance (not a substitute for a real spec sheet).
  let ply = "3-Ply (Single Wall)";
  let flute = "C-Flute";
  let gsm = "120 GSM liners";
  let burst = "8–12 kg/cm²";
  let note = "Ideal for light e-commerce and FMCG cartons.";

  if (weightKg <= 5 && !fragile && !isExport) {
    ply = "3-Ply (Single Wall)";
    flute = "B or C-Flute";
    gsm = "120 GSM";
    burst = "7–10 kg/cm²";
    note = "Light goods — a single-wall RSC keeps cost and freight low.";
  } else if (weightKg <= 15 || fragile) {
    ply = "3-Ply (Single Wall), heavy";
    flute = "C-Flute";
    gsm = "150–180 GSM";
    burst = "12–16 kg/cm²";
    note = fragile
      ? "Fragile contents — higher-GSM C-flute adds cushioning and burst strength."
      : "Medium-weight goods — a stronger single wall handles the load well.";
  }

  if (weightKg > 15 || isExport) {
    ply = "5-Ply (Double Wall)";
    flute = "BC-Flute (double)";
    gsm = "180–200 GSM";
    burst = "16–20 kg/cm²";
    note = isExport
      ? "Export transit — double-wall board with strapping for long, rough journeys."
      : "Heavy goods — double-wall board for stacking and burst strength.";
  }

  if (weightKg > 30) {
    ply = "7-Ply (Triple Wall)";
    flute = "Triple wall";
    gsm = "200–250 GSM";
    burst = "20+ kg/cm²";
    note = "Very heavy / industrial — triple-wall board approaching crate strength.";
  }

  return { ply, flute, gsm, burst, note };
}
