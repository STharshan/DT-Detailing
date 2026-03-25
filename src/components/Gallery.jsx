import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using Lucide for clean icons

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function GalleryCoverflow() {
  // Use state instead of refs to ensure Swiper detects the elements
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const images = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"];

  return (
    <section id="gallery" className="bg-black text-white py-24 overflow-hidden">
      {/* HEADER */}
      <div className="text-center max-w-5xl mx-auto px-6 mb-14">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">
          Workshop <span className="text-[#c1c1c1]">Gallery</span>
        </h2>
        <div className="w-24 h-1 bg-[#656565] mx-auto mt-4" />
      </div>

      {/* GALLERY CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 relative">
        
        <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          // Link navigation to the state variables
          navigation={{
            prevEl,
            nextEl,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="gallerySwiper pb-20!"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="max-w-70 sm:max-w-88 md:max-w-113">
              <div className="rounded-xl overflow-hidden border border-white/10 group bg-[#111]">
                <img
                  src={src}
                  alt={`Workshop ${i}`}
                  className="w-full h-80 md:h-125 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION BUTTONS */}
        <div className=" flex justify-center gap-10 -mt-10 md:absolute md:top-1/2 md:-translate-y-1/2 md:justify-between md:w-full md:px-2 md:mt-0 z-50 pointer-events-none">
          
          <button
            ref={(node) => setPrevEl(node)} // Set the state when the element renders
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#656565] hover:border-white/40 transition-all pointer-events-auto active:scale-90"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            ref={(node) => setNextEl(node)} // Set the state when the element renders
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#656565] hover:border-white/40 transition-all pointer-events-auto active:scale-90"
          >
            <ChevronRight size={32} />
          </button>
          
        </div>
      </div>
    </section>
  );
}