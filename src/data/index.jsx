import {
  DropletsIcon, ArmchairIcon, EraserIcon,
  SprayCanIcon, WrenchIcon, LayersIcon,
} from "../icons";

export const tier1 = [
  "All Door Panels, Dash & Console properly deep cleaned and scrubbed down",
  "Full Steam Cleaning treatment on interior cup holders, A/C vents & crevices",
  "Shampoo & Heated Extraction on all fabric seats (if applicable)",
  "Deep clean leather seats (if applicable)",
  "Interior plastics conditioned & protected",
];

export const tier2Main = [
  "Foam Bath (Pre-Treat if needed)",
  "2 Bucket Wash",
  "Iron Removal Treatment",
  "Tar / Glue Removal",
  "Ceramic Sealant",
];

export const tier2Extra = [
  "Wheels Deep Cleaned & All Wheel Wells Cleaned",
  "Tire Dressing",
  "Air Blower & Towel Dry",
  "Windows Cleaned",
  "Door & Trunk Jambs Deep Cleaned",
];

export const tier3Main = [
  "Paint Decontamination Wash + Clay Bar",
  "Wheels Deep Cleaned & All Wheel Wells Cleaned",
  "Tires Cleaned & Conditioned",
  "Trim Conditioned & Sealed",
  "Paint enhancement process — removes light swirls, creates high gloss",
];

export const tier3Extra = [
  "IPA Wipe Down",
  "1 Year Ceramic Coating",
  "3 Year Ceramic Coating",
  "7 Year Ceramic Coating",
];

export const compareRows = [
  { f: "Door Panels, Dash & Console Deep Clean",       t1: true,  t2: true,  t3: false },
  { f: "Steam Cleaning (Cup Holders, Vents, Crevices)", t1: true,  t2: true,  t3: false },
  { f: "Fabric Seat Shampoo & Extraction",             t1: true,  t2: true,  t3: false },
  { f: "Leather Seat Deep Clean",                      t1: true,  t2: true,  t3: false },
  { f: "Interior Plastics Conditioned",                t1: true,  t2: true,  t3: false },
  { f: "Foam Bath & Pre-Treat",                        t1: false, t2: true,  t3: false },
  { f: "2 Bucket Wash",                                t1: false, t2: true,  t3: false },
  { f: "Iron Removal Treatment",                       t1: false, t2: true,  t3: false },
  { f: "Tar / Glue Removal",                           t1: false, t2: true,  t3: false },
  { f: "Ceramic Sealant",                              t1: false, t2: true,  t3: false },
  { f: "Wheels Deep Cleaned",                          t1: false, t2: true,  t3: true  },
  { f: "Tire Dressing",                                t1: false, t2: true,  t3: false },
  { f: "Air Blower & Towel Dry",                       t1: false, t2: true,  t3: false },
  { f: "Windows Cleaned",                              t1: false, t2: true,  t3: false },
  { f: "Door & Trunk Jambs Deep Cleaned",              t1: false, t2: true,  t3: false },
  { f: "Paint Decontamination + Clay Bar",             t1: false, t2: false, t3: true  },
  { f: "Wheel Wells Cleaned",                          t1: false, t2: false, t3: true  },
  { f: "Tires Cleaned & Conditioned",                  t1: false, t2: false, t3: true  },
  { f: "Trim Conditioned & Sealed",                    t1: false, t2: false, t3: true  },
  { f: "Paint Enhancement (Swirl Removal)",            t1: false, t2: false, t3: true  },
  { f: "IPA Wipe Down",                                t1: false, t2: false, t3: true  },
  { f: "1 Year Ceramic Coating",                       t1: false, t2: false, t3: true  },
  { f: "3 Year Ceramic Coating",                       t1: false, t2: false, t3: true  },
  { f: "7 Year Ceramic Coating",                       t1: false, t2: false, t3: true  },
];

export const addOns = [
  { Icon: DropletsIcon, name: "Glass Coating",             desc: "Crystal-clear hydrophobic protection for all glass surfaces" },
  { Icon: ArmchairIcon, name: "Extraction Per Seat",       desc: "Deep hot water extraction cleaning for individual seats" },
  { Icon: EraserIcon,   name: "Specific Stain Removal",    desc: "Targeted professional treatment for tough and set-in stains" },
  { Icon: SprayCanIcon, name: "Plastic Interior Detailer", desc: "Restore, protect & rejuvenate all interior plastic surfaces" },
  { Icon: WrenchIcon,   name: "Exterior Plastic Restoration", desc: "Bring faded and weathered exterior trim back to life" },
  { Icon: LayersIcon,   name: "Clay Treatment",            desc: "Remove embedded surface contaminants for a silky smooth finish" },
];