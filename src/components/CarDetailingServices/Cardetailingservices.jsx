import { useState } from "react";
import { SparklesIcon, ShieldIcon, PaintbrushIcon, ChevronDown } from "../../icons/index";
import { tier1, tier2Main, tier2Extra, tier3Main, tier3Extra, addOns } from "../../data/index";
import TierCard from "./TierCard";
import AddOnCard from "./AddOnCard";
import CompareTable from "./CompareTable";

export default function CarDetailingServices() {
  const [compare, setCompare] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* ── Header ── */}
        <header className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c1c1c1]/30 bg-[#c1c1c1]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#c1c1c1]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c1c1c1]">Our Services</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Choose Your Level of Detail
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/45 lg:text-lg">
            From a complete interior refresh to full paint correction and ceramic protection,
            we offer tiered packages to match every need.
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border-2 border-[#c1c1c1]/50" />
              <span className="text-xs text-white/35">Interior</span>
            </div>
            <span className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border-2 border-[#c1c1c1] bg-[#c1c1c1]/30" />
              <span className="text-xs text-white/35">Full Detail</span>
            </div>
            <span className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#c1c1c1]" />
              <span className="text-xs text-white/35">Enhancement</span>
            </div>
          </div>
        </header>

        {/* ── Tier Cards ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <TierCard
            tier="Tier 1"
            icon={SparklesIcon}
            title="Full Interior Reset"
            desc="A complete cabin revival — every surface deep cleaned, conditioned, and restored to like-new condition."
            mainServices={tier1}
          />
          <TierCard
            tier="Tier 2"
            icon={ShieldIcon}
            title="Showroom Full Detail"
            desc="The ultimate exterior and interior package — your vehicle leaves looking and feeling like it just rolled off the showroom floor."
            mainServices={tier2Main}
            extraServices={tier2Extra}
            isFeatured
          />
          <TierCard
            tier="Tier 3"
            icon={PaintbrushIcon}
            title="Paint Enhancement & Protection"
            desc="Serious paint correction meets long-term ceramic protection — for those who demand perfection."
            mainServices={tier3Main}
            extraServices={tier3Extra}
          />
        </div>

        {/* ── Compare All Services ── */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setCompare(!compare)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/70 hover:border-[#c1c1c1]/25 transition-colors"
          >
            <span>Compare All Services</span>
            <ChevronDown open={compare} />
          </button>
          {compare && <CompareTable />}
        </div>

        {/* ── Add-Ons ── */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#c1c1c1]">Customize Your Detail</p>
            <h2 className="text-2xl font-bold text-white lg:text-3xl">Add-Ons</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/45">
              Enhance any package with these premium extras for the ultimate finish.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <AddOnCard key={i} Icon={a.Icon} name={a.name} desc={a.desc} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}