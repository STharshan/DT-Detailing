import React from "react";
import { FaCalendarCheck, FaClipboardList, FaCar, FaCheckCircle, FaHome } from "react-icons/fa";

const StepIcon = ({ type }) => {
  // Updated map to match your data: booking, planning, detailing, advice
  const icons = {
    booking: <FaCalendarCheck size={32} color="#ffffff" />,
    planning: <FaClipboardList size={32} color="#ffffff" />,
    detailing: <FaCar size={32} color="#ffffff" />,
    advice: <FaCheckCircle size={32} color="#ffffff" />,
    // Fallbacks from previous data types
    local: <FaHome size={32} color="#ffffff" />,
  };

  return <>{icons[type] || <FaHome size={32} color="#ffffff" />}</>;
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
            {/* Added a fallback check in case "20–40 minutes" isn't in your text */}
            {data.footerText.includes("20–40 minutes") ? (
              <>
                {data.footerText.split("20–40 minutes")[0]}
                <span className="font-semibold text-[#43AA8B]"> 20–40 minutes </span>
                {data.footerText.split("20–40 minutes")[1]}
              </>
            ) : (
              data.footerText
            )}
          </p>
        </div>
      </div>
    </section>
  );
}