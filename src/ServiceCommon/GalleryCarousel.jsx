import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";

const SingleTransformation = ({ data }) => {
  const [isAfter, setIsAfter] = useState(false);

  // Fallback data if 'data' prop is empty or missing
  const activeItem = data?.[0] || {
    before: "/tint-b.jpeg",
    after: "/tint-a.jpeg",
    title: "Tesla Model 3 Ceramic",
    description: "Experience the ultimate heat rejection and privacy. Our ceramic series blocks 99% of harmful UV rays while maintaining crystal clear visibility."
  };

  return (
    <div className="bg-white py-12 px-4 md:py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Header - Centered */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900">
            THE <span className="text-[#F21B23]">TRANSFORMATION</span>
          </h2>
        </div>

        {/* Comparison Card - Max width restricted for single-image focus */}
        <div className="bg-gray-50 max-w-3xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
          <div className="flex flex-col lg:flex-row">

            {/* Image Section */}
            <div className="relative w-full lg:w-3/5 h-[390px] overflow-hidden">
              {/* Before Image */}
              <img
                src={activeItem.before}
                alt="Before Tinting"
                className="w-full h-full object-top"
              />

              {/* After Image Layer */}
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isAfter ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={activeItem.after}
                  alt="After Tinting"
                  className="w-full h-full object-top"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <span className={`px-6 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase shadow-2xl transition-all duration-500 ${
                  isAfter ? "bg-[#F21B23] text-white" : "bg-white text-black"
                }`}>
                  {isAfter ? "After" : "Before"}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
              <div>
                <div className="flex items-center gap-2 text-[#F21B23] mb-4">
                  <ShieldCheck size={20} />
                  <span className="text-xs font-black tracking-widest uppercase">Premium Protection</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {activeItem.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-10">
                  {activeItem.description}
                </p>
              </div>

              {/* Control Buttons */}
              <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-200 rounded-2xl">
                <button
                  onClick={() => setIsAfter(false)}
                  className={`py-4 rounded-xl text-xs font-black transition-all duration-300 ${
                    !isAfter
                      ? "bg-white text-black shadow-lg scale-[1.02]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  BEFORE
                </button>
                <button
                  onClick={() => setIsAfter(true)}
                  className={`py-4 rounded-xl text-xs font-black transition-all duration-300 ${
                    isAfter
                      ? "bg-[#F21B23] text-white shadow-lg scale-[1.02]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  AFTER
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTransformation;