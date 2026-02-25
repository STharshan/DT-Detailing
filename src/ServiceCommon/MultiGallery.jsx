import React from "react";
import { Sparkles } from "lucide-react";

const MultiGallery = ({ data }) => {
  // 1. Safety check: If data is missing or still an array, handle it
  if (!data) return null;

  return (
    <div className="bg-white py-12 px-4 md:py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#F21B23] mb-2">
            <Sparkles size={20} />
            <span className="text-xs font-black tracking-[0.4em] uppercase">Transformation Showcase</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-none">
            THE <span className="text-[#F21B23]">RESULT</span>
          </h2>
        </div>

        {/* Comparison Display */}
        <div className="bg-gray-50 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 p-4 md:p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
            {/* Before Column */}
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl h-[300px] md:h-[450px] border border-gray-200 bg-gray-200">
                <img
                  src={data.beforeImage} // Path: /interior.jpeg
                  alt="Before"
                  className="w-full h-full object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/450x600?text=Image+Not+Found'; }}
                />
              </div>
            </div>

            {/* After Column */}
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl h-[300px] md:h-[450px] border border-gray-200 bg-gray-200">
                <img
                  src={data.afterImage} // Path: /interior1.jpeg
                  alt="After"
                  className="w-full h-full object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/450x600?text=Image+Not+Found'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiGallery;