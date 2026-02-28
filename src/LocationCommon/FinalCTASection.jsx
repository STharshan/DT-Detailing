import React from "react";
import { HashLink } from "react-router-hash-link";

export default function FinalCTASection({ data }) {
  if (!data) return null;

  // Smooth scroll for #contact
  const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#000000]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-6 font-serif"> {/* White text for title */}
            {data.title}
          </h2>

          <p className="text-lg md:text-xl text-[#ffffff] mb-4 leading-relaxed"> {/* White text for description */}
            {data.line1}
          </p>
          <p className="text-lg md:text-xl text-[#ffffff] mb-10 leading-relaxed"> {/* White text for description */}
            {data.line2}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Hardcoded Phone Number */}
            <a
              href="tel:+448081371961"
              className="inline-flex items-center justify-center gap-2 rounded-md font-medium bg-[#656565] hover:bg-[#c1c1c1] text-white hover:text-black h-12 px-8 shadow-[0_0_20px_#65656522] hover:shadow-[0_0_25px_#65656555] transition-all w-full sm:w-auto text-base"
            >
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
                className="h-5 w-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {data.phoneLabel}
            </a>

            <HashLink to="/#contact" scroll={scrollWithOffset}>
              <button className="inline-flex items-center justify-center gap-2 rounded-md font-medium border border-[#656565]/30 bg-white text-[#0D1525] hover:bg-[#EAF7F3] hover:border-[#656565]/60 h-12 px-8 transition-all duration-300 w-full sm:w-auto text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#656565"  // Accent color for the icon
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                {data.buttonLabel}
              </button>
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
}