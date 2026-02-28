import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";

const SingleTransformation = ({ data }) => {
  const [isAfter, setIsAfter] = useState(false);

  // Default fallback to prevent errors if data is missing
  const activeItem = data?.items?.[0] || {};

  // Internal component to switch between Video and Image
  const MediaRenderer = ({ isVideo, before, after, showAfter }) => {
    if (isVideo) {
      return (
        <>
          {/* Before Video */}
          <video
            src={before}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* After Video Overlay */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              showAfter ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              src={after}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </>
      );
    }

    return (
      <>
        <img src={before} alt="Before" className="w-full h-full object-cover" />
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            showAfter ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={after} alt="After" className="w-full h-full object-cover" />
        </div>
      </>
    );
  };

  return (
    <div className="bg-white py-12 px-4 md:py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header - Centered */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900">
            THE <span className="text-[#656565]">TRANSFORMATION</span>
          </h2>
        </div>

        {/* Comparison Card */}
        <div className="bg-gray-50 max-w-3xl p-6 mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* Media Section */}
            <div className="relative w-full rounded-xl lg:w-3/5 h-113 overflow-hidden bg-black">
              <MediaRenderer
                isVideo={activeItem.type === "video"}
                before={activeItem.type === "video" ? activeItem.beforeVideo : activeItem.before}
                after={activeItem.type === "video" ? activeItem.afterVideo : activeItem.after}
                showAfter={isAfter}
              />

              {/* Status Badge */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                <span
                  className={`px-6 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase shadow-2xl transition-all duration-500 ${
                    isAfter ? "bg-[#656565] text-white" : "bg-white text-black"
                  }`}
                >
                  {isAfter ? "After" : "Before"}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
              <div>
                <div className="flex items-center gap-2 text-[#656565] mb-4">
                  <ShieldCheck size={20} />
                  <span className="text-xs font-black tracking-widest uppercase">
                    {data?.tag || "Premium Care"}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {activeItem.title || "Maintenance Clean"}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-10">
                  {data?.description}
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
                      ? "bg-[#656565] text-white shadow-lg scale-[1.02]"
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