import React, { useState, useRef, useEffect } from "react";

// ─────────────────────────────────────────────
// Transformation Card (Image + Video Support)
// ─────────────────────────────────────────────
function TransformationCard({ item, index }) {
  const [isAfter, setIsAfter] = useState(false);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);

  // Handle video play/pause
  useEffect(() => {
    if (item?.type === "video") {
      if (isAfter) {
        afterRef.current?.play().catch(() => {});
        beforeRef.current?.pause();
      } else {
        beforeRef.current?.play().catch(() => {});
        afterRef.current?.pause();
      }
    }
  }, [isAfter, item]);

  return (
    <div className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full">

      {/* MEDIA SECTION */}
      <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden bg-black">

        {/* BEFORE */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            !isAfter ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {item?.type === "video" ? (
            <video
              ref={beforeRef}
              src={item.beforeVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={item?.before}
              alt="Before"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* AFTER */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isAfter ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {item?.type === "video" ? (
            <video
              ref={afterRef}
              src={item.afterVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={item?.after}
              alt="After"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* STATUS BADGE */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className={`px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-xl transition-all ${
              isAfter ? "bg-[#F21B23] text-white" : "bg-white text-black"
            }`}
          >
            {isAfter ? "After" : "Before"}
          </span>
        </div>

        {/* CARD NUMBER */}
        <div className="absolute top-4 right-4 z-20">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white text-xs font-black backdrop-blur-sm">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-2 p-1 bg-gray-200 rounded-xl">
          <button
            onClick={() => setIsAfter(false)}
            className={`py-3 rounded-lg text-xs font-black transition-all ${
              !isAfter
                ? "bg-white text-black shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            BEFORE
          </button>

          <button
            onClick={() => setIsAfter(true)}
            className={`py-3 rounded-lg text-xs font-black transition-all ${
              isAfter
                ? "bg-[#F21B23] text-white shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            AFTER
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Gallery Section
// ─────────────────────────────────────────────
export default function DualTransformation({ data = [] }) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-2xl md:text-6xl font-black text-gray-900">
            THE{" "}
            <span className="text-[#F21B23]">
              TRANSFORMATION
            </span>
          </h2>

          <p className="text-gray-500 font-bold text-xs tracking-widest uppercase">
            Real results, Professional finish
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.map((item, index) => (
            <TransformationCard
              key={item.id || index}
              item={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
