import React, { useState } from "react";

const categories = ["All", "Maintenance Clean", "Deep Clean", "Paint Enhancement", "Ceramic Coating"];

const galleryItems = [
  {
    title: "Car Park Door Ding Repair",
    category: "Car Park Ding Removal Service",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
  {
    title: "Small Door Dent Removal",
    category: "Small Dent Removal Service",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
  {
    title: "Large Panel Dent Repair",
    category: "Large Dent Removal Service",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
  {
    title: "Complex Quarter Panel Repair",
    category: "Complex Large Dent Repair Service",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
  {
    title: "Sharp Crease Dent Removal",
    category: "Crease Dent Repair Service",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
  {
    title: "Rear Bumper Dent Repair",
    category: "Bumper Dent Removal Service",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
  {
    title: "Hail Damage Restoration",
    category: "Hail Damage Removal Service",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
];

export default function GallerySection() {
  // Set default to "All" so the user sees everything initially
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="w-full py-20 sm:py-32 bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[38px] font-semibold text-white mb-4 transition-colors">
            Before & After Gallery
          </h2>
          <p className="text-[18px] text-gray-300 max-w-2xl mx-auto transition-colors">
            See the quality and precision of our paintless dent removal and enhancement work.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-lg font-semibold text-[16px] transition
                ${
                  active === cat
                    ? "bg-white text-black"
                    : "bg-black text-white border border-gray-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((item, index) => (
            <div key={index} className="space-y-4">
              {/* Title */}
              <div className="text-center mb-2">
                <h3 className="text-[24px] font-medium text-white transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-3">
                {/* Before */}
                <div className="relative h-60 rounded-lg overflow-hidden shadow-md group bg-gray-800 transition-colors">
                  <img
                    src={item.before}
                    alt={item.title + " Before"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition">
                    <p className="text-white font-semibold text-sm">Before</p>
                  </div>
                </div>

                {/* After */}
                <div className="relative h-60 rounded-lg overflow-hidden shadow-md group bg-gray-800 transition-colors">
                  <img
                    src={item.after}
                    alt={item.title + " After"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition">
                    <p className="text-white font-semibold text-sm">After</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}