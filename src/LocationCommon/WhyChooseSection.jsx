import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Icon Renderer
const DynamicIcon = ({ type }) => {
  const iconStyle = {
    width: "26",
    height: "26",
    fill: "none",
    stroke: "#D10806",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    specialist: (
      <>
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </>
    ),
    fast: (
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    ),
    fullservice: ( // Fixed to match your data key
      <>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </>
    ),
    local: (
      <>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    expert: ( // Fixed to match your data key
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...iconStyle} viewBox="0 0 24 24">
      {icons[type]}
    </svg>
  );
};

export default function WhyChooseSection({ location, data }) {
  if (!data) return null;

  return (
    <section className="py-16 md:py-24 bg-[#000000] swiper-custom-red">
      {/* Inline style to override Swiper's blue theme */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-custom-red {
          --swiper-theme-color: #e80202;
          --swiper-navigation-size: 24px;
        }
        .swiper-pagination-bullet { background: #ffffff !important; opacity: 0.5; }
        .swiper-pagination-bullet-active { background: #e80202 !important; opacity: 1; }
      `}} />

      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-4 font-serif">
          Why Choose <span className="text-[#e80202]">{data.brandName}</span> for{" "}
          {data.serviceName} in {location}
        </h2>

        <p className="text-lg md:text-xl text-[#ffffff] max-w-3xl mx-auto mb-10">
          {data.description}
        </p>

        {/* Carousel Container */}
        <div className="relative max-w-xl mx-auto">
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 size-15 rounded-full border border-[#e80202]/40 text-[#e80202] hover:bg-[#e80202]/20 hover:text-white transition z-10 hidden md:flex items-center justify-center">
            <FiChevronLeft size={24} />
          </button>

          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 size-15 rounded-full border border-[#e80202]/40 text-[#e80202] hover:bg-[#e80202]/20 hover:text-white transition z-10 hidden md:flex items-center justify-center">
            <FiChevronRight size={24} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={40}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="pb-12"
          >
            {data.benefits.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1a1a1a] border border-[#e80202]/20 rounded-xl p-10 flex flex-col items-center hover:shadow-[0_0_25px_#e8020222] transition min-h-75">
                  <div className="w-16 h-16 mb-6 rounded-full bg-[#e80202]/10 flex items-center justify-center">
                    <DynamicIcon type={item.iconType} />
                  </div>
                  <h4 className="text-xl font-semibold text-[#ffffff] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}