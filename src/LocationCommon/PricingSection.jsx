import React from "react";

export default function PricingSection({ data }) {
  if (!data) return null;

  return (
    <section className="relative py-24 bg-[linear-gradient(to_bottom,#F8FAFC,white,#EAF7F3)] overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-12 left-12 w-24 h-24 opacity-10 text-[#43AA8B]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50,10 Q70,30 70,50 Q70,70 50,90 Q30,70 30,50 Q30,30 50,10 Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-12 w-32 h-32 opacity-10 text-[#9C79B3]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50,10 Q70,30 70,50 Q70,70 50,90 Q30,70 30,50 Q30,30 50,10 Z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-1/4 w-28 h-28 opacity-10 text-[#43AA8B]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50,10 Q70,30 70,50 Q70,70 50,90 Q30,70 30,50 Q30,30 50,10 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1525] mb-4 font-serif">
            {data.mainTitle}
          </h2>
          <p className="text-xl text-[#4B5563]">
            {data.subTitle}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 items-stretch">
          {data.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[#43AA8B] shadow-[0_0_25px_#43AA8B33] hover:shadow-[0_0_30px_#43AA8B55]"
                  : "border-[#E5E7EB] shadow-[0_0_20px_#9C79B333] hover:shadow-[0_0_25px_#43AA8B22]"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 right-8 bg-[#43AA8B] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-md">
                  POPULAR
                </div>
              )}

              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold text-center mb-8 text-[#0D1525]">
                  {plan.title}
                </h3>

                <ul className="space-y-4 mb-8 text-[#0D1525]">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#43AA8B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 mt-0.5 shrink-0"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Button */}
              <div className="mt-auto">
                <button className="inline-flex items-center justify-center gap-2 rounded-md font-medium w-full h-12 text-lg bg-[#43AA8B] hover:bg-[#c1c1c1] text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 mr-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-[#0D1525] max-w-2xl mx-auto">
            {data.footerText}
          </p>
        </div>
      </div>
    </section>
  );
}