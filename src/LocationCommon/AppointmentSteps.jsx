import React from "react";
import { FaCalendarCheck, FaClipboardList, FaCar, FaCheckCircle, FaHome } from "react-icons/fa";

const StepIcon = ({ type }) => {
  // Updated map to match your data: booking, planning, detailing, advice
  const icons = {
    booking: <FaCalendarCheck size={32} color="#656565" />,
    planning: <FaClipboardList size={32} color="#656565" />,
    detailing: <FaCar size={32} color="#656565" />,
    advice: <FaCheckCircle size={32} color="#656565" />,
    // Fallbacks from previous data types
    local: <FaHome size={32} color="#656565" />,
  };

  return <>{icons[type] || <FaHome size={32} color="#656565" />}</>;
};

export default function AppointmentSteps({ data }) {
  if (!data) return null;

  return (
    <section className="py-24 bg-[#000000]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-4 font-serif"> {/* White text for heading */}
            {data.mainTitle}
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-[linear-gradient(to_right,#65656522,#656565,#65656522)]" /> {/* Accent color for connector line */}

          <div className="grid md:grid-cols-4 gap-10 relative">
            {data.steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#656565]/10 flex items-center justify-center mb-6 shadow-md hover:bg-[#656565] transition-all duration-300">
                  <StepIcon type={step.iconType} />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#c1c1c1] text-[#656565] font-bold text-sm mb-2">
                    {step.id}
                  </div>
                  <h3 className="font-semibold text-lg text-[#ffffff]"> {/* White text for titles */}
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#ffffff]">{step.desc}</p> {/* White text for description */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Box */}
        <div className="mt-16 p-6 md:p-8 max-w-2xl mx-auto rounded-2xl bg-[#656565]/10 border border-[#656565]/30 text-center">
          <p className="text-base md:text-lg text-[#ffffff] leading-relaxed"> {/* White text for footer */}
            {data.footerText.includes("20–40 minutes") ? (
              <>
                {data.footerText.split("20–40 minutes")[0]}
                <span className="font-semibold text-[#656565]"> 20–40 minutes </span> {/* Accent color for highlighted text */}
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