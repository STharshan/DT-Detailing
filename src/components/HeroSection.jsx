import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-screen md:h-[80vh] lg:h-screen">
        <video
          className="object-cover object-center md:object-[center_top] w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for better text visibility (optional but recommended) */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/40 lg:bg-black/30"></div>

      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center h-screen md:h-[80vh] lg:h-screen">
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-20 md:mt-24 text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Professional Car Detailing & Paint Protection Services
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          Premium detailing solutions to keep your vehicle looking flawless. From maintenance cleaning to ceramic coatings, we enhance, protect, and preserve your car’s finish.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-md transition hover:opacity-90"
            style={{ backgroundColor: "#656565" }}
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-2 group-active:-translate-x-2">
              View Our Services
            </span>
            <FiArrowRight className="text-lg mt-1 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 bg-white text-gray-700 hover:bg-[#656565] hover:border-gray-300 hover:text-white font-semibold rounded-md transition"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;