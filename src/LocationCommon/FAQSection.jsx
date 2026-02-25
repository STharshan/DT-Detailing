import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you arrive?",
      answer: "Most emergency calls are handled within the hour.",
    },
    {
      question: "Do you come to homes and workplaces?",
      answer: "Yes — I come to any safe location, including roadside.",
    },
    {
      question: "Do you charge extra for call-outs?",
      answer: "No hidden fees. Call-out is included in my pricing.",
    },
    {
      question: "What areas do you cover?",
      answer: "Liverpool, Merseyside, Wirral, St Helen’s, Warrington, and more.",
    },
    {
      question: "Can you fix issues on the spot?",
      answer: "Yes — most services are completed during the visit.",
    },
  ];

  return (
    <section className="py-16 bg-[#000000]">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ffffff] font-serif">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="w-full divide-y divide-[#c1c1c1] border border-[#c1c1c1] rounded-2xl shadow-sm bg-[#111]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all ${
                openIndex === index
                  ? "bg-[#e80202]/10"
                  : "hover:bg-[#e80202]/20 hover:shadow-[0_0_10px_#e8020211]"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#ffffff] py-5 px-4 transition-colors duration-200"
              >
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={openIndex === index ? "#e80202" : "#c1c1c1"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#e80202]" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 px-6 pb-5"
                    : "max-h-0 opacity-0 px-6"
                }`}
              >
                <p className="text-[#c1c1c1] text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Gradient Line */}
        <div className="mt-12 h-1 w-32 mx-auto rounded-full bg-linear-to-r from-[#e80202]/40 via-[#c1c1c1] to-[#e80202]/40"></div>
      </div>
    </section>
  );
}