import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const socialLinks = [
    {
      icon: <FaInstagram className="text-xl" />,
      label: "Instagram",
      href: "https://www.instagram.com/dt_details_",
      hover: "group-hover:text-pink-600",
    },
    {
      icon: <FaTiktok className="text-xl" />,
      label: "TikTok",
      href: "https://www.tiktok.com/@dt_details_",
      hover: "group-hover:text-black",
    },
  ];

  return (
    <section className="relative overflow-hidden w-full h-[120vh] flex items-center justify-center">
      {/* ── Background Video ── */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="object-cover object-center w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ── Dark Overlay ── */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* ── Vertical Social Sidebar — hidden on mobile ── */}
      <div className="hidden sm:flex absolute left-6 top-0 h-full z-20 flex-col items-center justify-center">
        {socialLinks.map(({ icon, label, href, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group flex flex-col items-center mb-8 last:mb-0"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center text-white transition-colors duration-300 ${hover}`}
            >
              {icon}
            </div>
            <span
              className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-colors duration-300 whitespace-nowrap ${hover}`}
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* ── Horizontal Social Bar — mobile only ── */}
      <div className="sm:hidden absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-6">
        {socialLinks.map(({ icon, label, href, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`group flex items-center gap-2 text-white transition-colors duration-300 ${hover}`}
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
              {icon}
            </div>
            <span className="text-[11px] font-semibold tracking-widest uppercase">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* ── Main Content ── */}
      <div className="container mx-auto px-6 text-center relative z-20 flex flex-col items-center justify-center h-full">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-5xl md:pt-30 md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white max-w-4xl leading-tight"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Professional Car Detailing & Paint Protection
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          Premium detailing solutions to keep your vehicle looking flawless.
          From maintenance cleaning to ceramic coatings, we enhance and preserve your car's finish.
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1500"
        >
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-3 px-7 py-3  text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            style={{ backgroundColor: "#656565" }}
          >
            <span>View Our Services</span>
            <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-2" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-7 py-3 border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;