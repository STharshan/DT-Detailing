import React from "react";

// Icon mapping helper
const ServiceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff" // updated to accent color
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function ServicesSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-16 md:py-24 bg-[#000000]"> {/* Updated to black background */}
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-4 font-serif"> {/* Updated to white text */}
            {data.mainTitle}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {data.services.map((service, index) => {
            // Logic to center the last item if the list is odd
            const isLastOdd = index === data.services.length - 1 && data.services.length % 2 !== 0;

            return (
              <div
                key={index}
                className={`bg-[#c1c1c1] rounded-2xl p-8 border border-[#656565]/20 shadow-sm hover:shadow-[0_0_20px_#65656522] transition-all duration-300 ${ // updated border and hover shadow
                  isLastOdd ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#656565]/10 shrink-0"> {/* updated icon background */}
                    <ServiceIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-[#ffffff]"> {/* Updated to white text */}
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-3 text-[#ffffff]"> {/* Updated to white text */}
                  <li className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000" // updated to accent color
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-lg leading-relaxed text-[#000000]">{service.description}</span> {/* Updated to white text */}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}