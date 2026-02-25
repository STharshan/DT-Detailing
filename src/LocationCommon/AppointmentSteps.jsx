import React from "react";

const StepIcon = ({ type }) => {
  const icons = {
    arrival: (
      <>
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
      </>
    ),
    inspection: (
      <>
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </>
    ),
    fitting: (
      <>
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
      </>
    ),
    safety: (
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10"
    >
      {icons[type]}
    </svg>
  );
};

export default function AppointmentSteps({ data }) {
  if (!data) return null;

  return (
    <section className="py-24 bg-[linear-gradient(to_bottom,#F8FAFC,white,#EAF7F3)]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1525] mb-4 font-serif">
            {data.mainTitle}
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-[linear-gradient(to_right,#43AA8B22,#43AA8B,#43AA8B22)]" />

          <div className="grid md:grid-cols-4 gap-10 relative">
            {data.steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#43AA8B] flex items-center justify-center mb-6 shadow-md hover:bg-[#318F6F] transition-all duration-300">
                  <StepIcon type={step.iconType} />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EAF7F3] text-[#43AA8B] font-bold text-sm mb-2">
                    {step.id}
                  </div>
                  <h3 className="font-semibold text-lg text-[#0D1525]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4B5563]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Box */}
        <div className="mt-16 p-6 md:p-8 max-w-2xl mx-auto rounded-2xl bg-[#43AA8B]/10 border border-[#43AA8B]/30 text-center">
          <p className="text-base md:text-lg text-[#0D1525] leading-relaxed">
            {data.footerText.split("20–40 minutes")[0]}
            <span className="font-semibold text-[#43AA8B]">
              20–40 minutes
            </span>
            {data.footerText.split("20–40 minutes")[1]}
          </p>
        </div>
      </div>
    </section>
  );
}