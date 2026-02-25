import React from "react";

export default function ServingAreasSection({ areas, title, subtitle, footer }) {
  return (
    <section className="py-16 md:py-24 bg-[#000000]">

      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffffff] font-serif">
            {title}
          </h2>
          <p className="text-lg text-[#ffffff]">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-[#c1c1c1] border border-[#e80202]/20 rounded-lg p-4 hover:border-[#e80202] hover:shadow-[0_0_15px_#e8020233] transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 text-[#e80202] group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm leading-tight text-[black]">
                    {area}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            {footer}
          </p>
        </div>

      </div>
    </section>
  );
}