import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    // Standard initialization of AOS for scroll animations
    AOS.init({ duration: 1000, once: true });
  }, []);

  const socialLinks = [
    {
      icon: <FaInstagram className="text-lg" />,
      label: "Instagram",
      href: "https://www.instagram.com/dt_details_",
      hover: "group-hover:text-pink-600",
    },
    {
      icon: <FaTiktok className="text-lg" />,
      label: "TikTok",
      href: "https://www.tiktok.com/@dt_details_",
      hover: "group-hover:text-black",
    },
  ];

  return (
    <section className="relative overflow-hidden w-full h-screen">
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
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ── Vertical Social Sidebar ── */}
      <div className="absolute left-6 top-0 h-full z-20 flex flex-col items-center justify-center">
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
              className={`hidden sm:block text-[12px] font-semibold tracking-[0.2em] uppercase  text-white transition-colors duration-300 whitespace-nowrap ${hover}`}
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* ── Main Content ── */}
      <div className="container mx-auto px-4 text-center relative z-20 flex flex-col items-center justify-center h-full">
        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl pt-25 font-bold mb-6 text-white max-w-4xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Professional Car Detailing & Paint Protection
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          Premium detailing solutions to keep your vehicle looking flawless.
          From maintenance cleaning to ceramic coatings, we enhance and preserve your car's finish.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#656565" }}
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <span>View Our Services</span>
            <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-2" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-bold rounded-lg transition-all duration-300 hover:scale-105"
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