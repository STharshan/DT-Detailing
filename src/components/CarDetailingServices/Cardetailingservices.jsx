import { useState, useEffect, useRef } from "react";

import { SparklesIcon, ShieldIcon, PaintbrushIcon, ChevronDown } from "../../icons/index";
import { tier1, tier2Main, tier2Extra, tier3Main, tier3Extra, addOns } from "../../data/index";
import TierCard from "./TierCard";
import AddOnCard from "./AddOnCard";
import CompareTable from "./CompareTable";

const TIERS = [
  {
    tier: "Tier 1",
    icon: SparklesIcon,
    title: "Full Interior Reset",
    desc: "A complete cabin revival — every surface deep cleaned, conditioned, and restored to like-new condition.",
    mainServices: tier1,
    extraServices: undefined,
  },
  {
    tier: "Tier 2",
    icon: ShieldIcon,
    title: "Showroom Full Detail",
    desc: "The ultimate exterior and interior package — your vehicle leaves looking and feeling like it just rolled off the showroom floor.",
    mainServices: tier2Main,
    extraServices: tier2Extra,
  },
  {
    tier: "Tier 3",
    icon: PaintbrushIcon,
    title: "Paint Enhancement & Protection",
    desc: "Serious paint correction meets long-term ceramic protection — for those who demand perfection.",
    mainServices: tier3Main,
    extraServices: tier3Extra,
  },
];

function getCardProps(offset, total, W) {
  const mobile = W < 640;
  const tablet = W < 1024;

  const activeW = mobile
    ? Math.min(W * 0.78, 340)
    : tablet
      ? Math.min(W * 0.50, 400)
      : Math.min(W * 0.42, 420);

  const sideW = mobile
    ? Math.min(W * 0.65, 280)
    : tablet
      ? Math.min(W * 0.38, 320)
      : Math.min(W * 0.32, 330);

  const gap = mobile ? 8 : 14;
  const sideX = activeW / 2 + gap + sideW / 2;

  if (offset === 0) {
    return { width: activeW, x: 0, opacity: 1, scale: 1, zIndex: 30, isActive: true };
  }
  if (offset === 1) {
    return {
      width: sideW,
      x: sideX,
      opacity: mobile ? 0.38 : 0.58,
      scale: 0.95,
      zIndex: 20,
      isActive: false,
    };
  }
  if (offset === total - 1) {
    return {
      width: sideW,
      x: -sideX,
      opacity: mobile ? 0.38 : 0.58,
      scale: 0.95,
      zIndex: 20,
      isActive: false,
    };
  }

  return { width: activeW, x: 0, opacity: 0, scale: 0.9, zIndex: 0, isActive: false };
}

export default function CarDetailingServices() {
  const [compare, setCompare] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [containerW, setContainerW] = useState(1000);
  const [carouselH, setCarouselH] = useState(650);

  const trackRef = useRef(null);
  const activeCardRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => setContainerW(el.getBoundingClientRect().width);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // Auto adjust carousel height
  useEffect(() => {
    if (!activeCardRef.current) return;

    const resize = () => {
      setCarouselH(activeCardRef.current.offsetHeight + 20);
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(activeCardRef.current);

    return () => ro.disconnect();
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* HEADER */}
        <header className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c1c1c1]/30 bg-[#c1c1c1]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#c1c1c1]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c1c1c1]">
              Our Services
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight uppercase text-white md:text-4xl lg:text-5xl">
            Choose Your <span className="text-[#c1c1c1]">Level of Detail</span>
          </h1>
        </header>

        {/* CAROUSEL */}
        <div className="relative w-full transition-all duration-500" style={{ height: carouselH }}>

          <div ref={trackRef} className="absolute inset-0">

            {TIERS.map((t, i) => {
              const total = TIERS.length;
              const offset = (i - activeIndex + total) % total;
              const p = getCardProps(offset, total, containerW);

              return (
                <div
                  key={i}
                  ref={p.isActive ? activeCardRef : null}
                  onClick={() => !p.isActive && setActiveIndex(i)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    marginLeft: -(p.width / 2),
                    width: p.width,
                    transform: `translateX(${p.x}px) scale(${p.scale})`,
                    transformOrigin: "top center",
                    opacity: p.opacity,
                    zIndex: p.zIndex,
                    transition: "transform 650ms cubic-bezier(0.65,0,0.35,1), opacity 650ms ease",
                    cursor: p.isActive ? "default" : "pointer",
                    pointerEvents: p.opacity === 0 ? "none" : "auto",
                    filter: p.isActive ? "none" : "brightness(0.52) saturate(0.65)",
                  }}
                >
                  <TierCard
                    tier={t.tier}
                    icon={t.icon}
                    title={t.title}
                    desc={t.desc}
                    mainServices={t.mainServices}
                    extraServices={t.extraServices}
                  />
                </div>
              );
            })}
          </div>
          {/* Left Arrow */}
          <button
            onClick={() =>
              setActiveIndex((p) => (p - 1 + TIERS.length) % TIERS.length)
            }
            aria-label="Previous"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-50 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-[#0a0a0a]/90 text-white/55 flex items-center justify-center text-xl hover:border-[#c1c1c1]/35 hover:text-white"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setActiveIndex((p) => (p + 1) % TIERS.length)
            }
            aria-label="Next"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-50 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-[#0a0a0a]/90 text-white/55 flex items-center justify-center text-xl hover:border-[#c1c1c1]/35 hover:text-white"
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {TIERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 28 : 8,
                background: i === activeIndex ? "#c1c1c1" : "rgba(193,193,193,0.25)",
              }}
            />
          ))}
        </div>

        {/* COMPARE */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setCompare(!compare)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm text-white/70"
          >
            Compare All Services
            <ChevronDown open={compare} />
          </button>

          {compare && <CompareTable />}
        </div>

        {/* ADDONS */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#c1c1c1]">
              Customize Your Detail
            </p>

            <h2 className="text-2xl font-bold text-white lg:text-3xl">
              Add-Ons
            </h2>
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