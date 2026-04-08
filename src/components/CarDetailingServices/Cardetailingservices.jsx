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
  },
  {
    tier: "Tier 2",
    icon: ShieldIcon,
    title: "Showroom Full Detail",
    desc: "The ultimate exterior and interior package — your vehicle leaves looking like it just rolled off the showroom floor.",
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

/**
 * RESPONSIVE LOGIC: Calculates sizing based on container width (W)
 */
function getCardProps(offset, total, W) {
  const isMobile = W < 640;
  const isTablet = W < 1024;

  const activeW = isMobile 
    ? W * 0.92 
    : isTablet 
      ? Math.min(W * 0.55, 420) 
      : Math.min(W * 0.40, 440);

  const sideW = isMobile 
    ? W * 0.75 
    : isTablet 
      ? Math.min(W * 0.40, 320) 
      : Math.min(W * 0.30, 340);

  const gap = isMobile ? 12 : 24;
  const sideX = activeW / 2 + gap + sideW / 2;

  if (offset === 0) {
    return { width: activeW, x: 0, opacity: 1, scale: 1, zIndex: 30, isActive: true };
  }

  const isNext = offset === 1;
  const isPrev = offset === total - 1;

  if (isNext || isPrev) {
    return {
      width: sideW,
      x: isNext ? sideX : -sideX,
      opacity: isMobile ? 0 : 0.45, 
      scale: 0.9,
      zIndex: 20,
      isActive: false,
    };
  }

  return { width: sideW, x: 0, opacity: 0, scale: 0.8, zIndex: 0, isActive: false };
}

export default function CarDetailingServices() {
  const [compare, setCompare] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [containerW, setContainerW] = useState(0);
  const [carouselH, setCarouselH] = useState(600);
  const [touchStart, setTouchStart] = useState(null);

  const trackRef = useRef(null);
  const activeCardRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const measure = () => setContainerW(trackRef.current.offsetWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setCarouselH(entry.contentRect.height + 40);
      }
    });

    if (activeCardRef.current) {
      observer.observe(activeCardRef.current);
    }

    return () => observer.disconnect();
  }, [activeIndex]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) setActiveIndex((p) => (p + 1) % TIERS.length);
    if (diff < -50) setActiveIndex((p) => (p - 1 + TIERS.length) % TIERS.length);
    setTouchStart(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-[#c1c1c1] selection:text-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        
        {/* HEADER */}
        <header className="mb-12 text-center sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c1c1c1]/20 bg-[#c1c1c1]/5 px-3 py-1 sm:px-4 sm:py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c1c1c1] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c1c1c1] sm:text-xs">
              Our Services
            </span>
          </div>
          <h1 className="text-2xl font-black tracking-tight uppercase text-white sm:text-4xl lg:text-5xl">
            Choose Your <span className="text-[#c1c1c1]">Level of Detail</span>
          </h1>
        </header>

        {/* CAROUSEL SECTION */}
        <div 
          className="relative w-full transition-[height] duration-500 ease-out"
          style={{ height: carouselH }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div ref={trackRef} className="absolute inset-0 flex justify-center">
            {TIERS.map((t, i) => {
              const total = TIERS.length;
              const offset = (i - activeIndex + total) % total;
              const p = getCardProps(offset, total, containerW);

              return (
                <div
                  key={i}
                  ref={p.isActive ? activeCardRef : null}
                  
                  /* --- ACCESSIBILITY FIX START --- */
                  role="button"              // 1. Mark as button for screen readers
                  tabIndex={p.isActive ? -1 : 0} // 2. Allow keyboard 'Tab' focus on side cards
                  aria-label={`View ${t.title} details`} // 3. Describe the action
                  aria-current={p.isActive ? "true" : "false"} // 4. Indicate current selection
                  
                  onClick={() => !p.isActive && setActiveIndex(i)}
                  
                  // 5. Allow keyboard 'Enter' or 'Space' to trigger the click
                  onKeyDown={(e) => {
                    if (!p.isActive && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      setActiveIndex(i);
                    }
                  }}
                  /* --- ACCESSIBILITY FIX END --- */

                  style={{
                    position: "absolute",
                    top: 0,
                    width: p.width,
                    transform: `translateX(${p.x}px) scale(${p.scale})`,
                    opacity: p.opacity,
                    zIndex: p.zIndex,
                    transition: "all 700ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                    cursor: p.isActive ? "default" : "pointer",
                    pointerEvents: p.opacity === 0 ? "none" : "auto",
                    filter: p.isActive ? "none" : "brightness(0.4) grayscale(0.5)",
                  }}
                  // Added focus-visible ring for keyboard users navigation
                  className="will-change-transform outline-none focus-visible:ring-2 focus-visible:ring-[#c1c1c1] rounded-3xl"
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

          {/* ARROW NAVIGATION FIX: Added aria-labels and hidden text for screen readers */}
          <button
            onClick={() => setActiveIndex((p) => (p - 1 + TIERS.length) % TIERS.length)}
            aria-label="Previous service"
            className="absolute left-0 top-1/2 z-50 -translate-y-1/2 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md transition-all hover:bg-white/10 sm:flex"
          >
            <span className="text-2xl" aria-hidden="true">‹</span>
          </button>

          <button
            onClick={() => setActiveIndex((p) => (p + 1) % TIERS.length)}
            aria-label="Next service"
            className="absolute right-0 top-1/2 z-50 -translate-y-1/2 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md transition-all hover:bg-white/10 sm:flex"
          >
            <span className="text-2xl" aria-hidden="true">›</span>
          </button>
        </div>

        {/* PAGINATION DOTS FIX: Added proper tablist roles and labels */}
        <div className="mt-8 flex justify-center gap-3" role="tablist">
          {TIERS.map((t, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to ${t.title}`}
              onClick={() => setActiveIndex(i)}
              className="h-1 rounded-full transition-all duration-500 outline-none focus-visible:ring-1 focus-visible:ring-[#c1c1c1]"
              style={{
                width: i === activeIndex ? 32 : 8,
                background: i === activeIndex ? "#c1c1c1" : "rgba(193,193,193,0.15)",
              }}
            />
          ))}
        </div>

        {/* COMPARISON TOGGLE FIX: Added aria-expanded state */}
        <div className="mt-16 flex flex-col items-center">
          <button
            onClick={() => setCompare(!compare)}
            aria-expanded={compare}
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/60 transition-all hover:border-[#c1c1c1]/40 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-[#c1c1c1]"
          >
            Compare All Services
            <div className={`transition-transform duration-300 ${compare ? "rotate-180" : ""}`}>
                <ChevronDown />
            </div>
          </button>

          <div className={`w-full transition-all duration-700 ${compare ? "mt-12 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>
            {compare && <CompareTable />}
          </div>
        </div>

        {/* ADD-ONS SECTION */}
        <section className="mt-24 sm:mt-32">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-bold tracking-[0.3em] uppercase text-[#c1c1c1]">
              Refine your experience
            </p>
            <h2 className="text-3xl font-black text-white sm:text-4xl">Optional Add-Ons</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <AddOnCard key={i} Icon={a.Icon} name={a.name} desc={a.desc} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}