export const compareRows = [
  { f: "Door Panels, Dash & Console Deep Clean", t1: true, t2: true, t3: false },
  { f: "Steam Cleaning (Cup Holders, Vents, Crevices)", t1: true, t2: true, t3: false },
  { f: "Fabric Seat Shampoo & Extraction", t1: true, t2: true, t3: false },
  { f: "Leather Seat Deep Clean", t1: true, t2: true, t3: false },
  { f: "Interior Plastics Conditioned", t1: true, t2: true, t3: false },
  { f: "Foam Bath & Pre-Treat", t1: false, t2: true, t3: false },
  { f: "2 Bucket Wash", t1: false, t2: true, t3: false },
  { f: "Iron Removal Treatment", t1: false, t2: true, t3: false },
  { f: "Tar / Glue Removal", t1: false, t2: true, t3: false},
  { f: "Ceramic Sealant", t1: false, t2: true, t3: false },
  { f: "Wheels Deep Cleaned", t1: false, t2: true, t3: true },
  { f: "Tire Dressing", t1: false, t2: true, t3: false },
  { f: "Air Blower & Towel Dry", t1: false, t2: true, t3: false },
  { f: "Windows Cleaned", t1: false, t2: true, t3: false },
  { f: "Door & Trunk Jambs Deep Cleaned", t1: false, t2: true, t3: false },
  { f: "Paint Decontamination + Clay Bar", t1: false, t2: false, t3: true },
  { f: "Wheel Wells Cleaned", t1: false, t2: false, t3: true },
  { f: "Tires Cleaned & Conditioned", t1: false, t2: false, t3: true },
  { f: "Trim Conditioned & Sealed", t1: false, t2: false, t3: true },
  { f: "Paint Enhancement (Swirl Removal)", t1: false, t2: false, t3: true },
  { f: "IPA Wipe Down", t1: false, t2: false, t3: true },
  { f: "1 Year Ceramic Coating", t1: false, t2: false, t3: true },
  { f: "3 Year Ceramic Coating", t1: false, t2: false, t3: true },
  { f: "7 Year Ceramic Coating", t1: false, t2: false, t3: true },
];

export const sections = [
  { label: "INTERIOR SERVICES", keys: ["Door Panels, Dash & Console Deep Clean","Steam Cleaning (Cup Holders, Vents, Crevices)","Fabric Seat Shampoo & Extraction","Leather Seat Deep Clean","Interior Plastics Conditioned"] },
  { label: "EXTERIOR SERVICES", keys: ["Foam Bath & Pre-Treat","2 Bucket Wash","Iron Removal Treatment","Tar / Glue Removal","Ceramic Sealant","Wheels Deep Cleaned","Tire Dressing","Air Blower & Towel Dry","Windows Cleaned","Door & Trunk Jambs Deep Cleaned"] },
  { label: "PAINT SERVICES", keys: ["Paint Decontamination + Clay Bar","Wheel Wells Cleaned","Tires Cleaned & Conditioned","Trim Conditioned & Sealed","Paint Enhancement (Swirl Removal)","IPA Wipe Down","1 Year Ceramic Coating","3 Year Ceramic Coating","7 Year Ceramic Coating"] },
];

export const TIERS = [
  { key: "t1", label: "Full Interior Reset", highlight: false },
  { key: "t2", label: "Showroom Full Detail", highlight: true },
  { key: "t3", label: "Paint Enhancement", highlight: false },
];
