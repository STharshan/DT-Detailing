import { useState } from "react";
import { ChevronDown, CheckIcon } from "../../icons/index";
import ServiceItem from "./ServiceItem";

export default function TierCard({ tier, icon: Icon, title, desc, mainServices, extraServices, extraLabel, isFeatured = false }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`relative flex flex-col rounded-2xl border p-6 lg:p-8 ${
      isFeatured
        ? "border-[#c1c1c1]/40 bg-[#c1c1c1]/[0.03] shadow-[0_0_50px_-15px_rgba(193,193,193,0.18)]"
        : "border-white/10 bg-white/[0.03]"
    }`}>

      {isFeatured && (
        <div className="absolute -top-3 left-6 flex items-center gap-1.5 rounded-full bg-[#c1c1c1] px-3 py-1">
          <span className="text-xs font-bold tracking-wider uppercase text-black">★ Most Popular</span>
        </div>
      )}

      <div className={`mb-3 flex items-center gap-3 ${isFeatured ? "mt-4" : ""}`}>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-[#c1c1c1] ${
          isFeatured ? "bg-[#c1c1c1]/15" : "bg-white/5"
        }`}>
          <Icon />
        </div>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c1c1c1]">{tier}</p>
      </div>

      <h3 className="text-xl font-bold text-white lg:text-2xl">{title}</h3>
      <p className="mt-2 mb-5 text-sm leading-relaxed text-white/45">{desc}</p>

      <div className={`mb-4 h-px ${isFeatured ? "bg-[#c1c1c1]/25" : "bg-white/10"}`} />

      <span className="mb-3 inline-flex w-fit items-center rounded-md bg-white/5 px-2 py-0.5 text-xs font-medium text-[#c1c1c1]">
        {mainServices.length + (extraServices?.length ?? 0)} services included
      </span>

      <ul className="flex flex-1 flex-col">
        {mainServices.map((s, i) => <ServiceItem key={i} text={s} />)}
        {showMore && extraServices?.map((s, i) => <ServiceItem key={i} text={s} />)}
      </ul>

      {extraServices?.length > 0 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-2 flex items-center gap-1.5 self-start rounded-lg px-2 py-1.5 text-xs font-medium text-[#c1c1c1] hover:bg-white/5 transition-colors"
        >
          <span>{showMore ? "Show less" : `Show ${extraServices.length} more`}</span>
          <ChevronDown open={showMore} />
        </button>
      )}

      {isFeatured && (
        <div className="mt-5 rounded-xl border border-[#c1c1c1]/20 bg-[#c1c1c1]/[0.05] p-3 flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#c1c1c1]/15 text-[#c1c1c1]">
            <CheckIcon />
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c1c1c1]">+ Includes</p>
            <p className="text-sm font-medium text-white/75">Full Interior Reset Package</p>
          </div>
        </div>
      )}
    </div>
  );
}