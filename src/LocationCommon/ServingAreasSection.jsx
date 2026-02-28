import React from "react";
import { MapPin } from "lucide-react";

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
              className="bg-[#c1c1c1] border border-[#656565]/20 rounded-lg p-4 
                         hover:border-[#656565] 
                         hover:shadow-[0_0_15px_#65656533] 
                         transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                
                {/* Lucide Icon */}
                <div className="text-black group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} strokeWidth={2} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm leading-tight text-black">
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