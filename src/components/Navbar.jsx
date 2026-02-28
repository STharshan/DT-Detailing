import React, { useState, useRef, useEffect } from "react";
import { FiInstagram, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopLocationsOpen, setDesktopLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const servicesRef = useRef(null);
  const locationsRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/services" },
    { name: "Testimonial", href: "/#testimonial" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
    { name: "Location", href: "#", isDropdown: true },
  ];

  const servicesLinks = [
    { name: "Maintenance Clean", href: "/maintenance-clean" },
    { name: "Deep Clean", href: "/deep-clean" },
    { name: "Paint Enhancement", href: "/paint-enhancement" },
    { name: "Ceramic Coating", href: "/ceramic-coating" },
  ];

  const locationsLinks = [
    { name: "Sheffield", href: "/sheffield" },
    { name: "Doncaster", href: "/doncaster" },
  ];

  const socialLinks = [
    {
      icon: <FiInstagram className="text-gray-400 hover:text-pink-500 transition duration-300" />,
      href: "https://www.instagram.com/dt_details_",
    },
    {
      icon: <FaTiktok className="text-gray-400 hover:text-white transition duration-300" />,
      href: "https://www.tiktok.com/@dt_details_",
    },
  ];

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target) &&
        locationsRef.current &&
        !locationsRef.current.contains(event.target)
      ) {
        setDesktopServicesOpen(false);
        setDesktopLocationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const carbonFiberStyle =
    "bg-[repeating-linear-gradient(45deg,#1a1a1a,#1a1a1a_4px,#111_4px,#111_8px)] border border-white/10 rounded-lg shadow-md";

  return (
    <nav className={`fixed w-full z-50 ${carbonFiberStyle}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-18 px-6 md:px-12 lg:px-20 py-3">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="UK Logo"
          className="w-35 h-25 object-contain"
          loading="lazy"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {

            // LOCATION DROPDOWN
            if (item.isDropdown) {
              return (
                <div key={item.name} ref={locationsRef} className="relative">
                  <button
                    onClick={() => {
                      setDesktopLocationsOpen(!desktopLocationsOpen);
                      setDesktopServicesOpen(false);
                    }}
                    className="flex items-center gap-1 font-semibold text-white hover:text-[#656565] transition-colors"
                  >
                    {item.name} <FiChevronDown />
                  </button>

                  {desktopLocationsOpen && (
                    <div className={`absolute left-0 mt-2 w-48 z-50 p-2 ${carbonFiberStyle}`}>
                      {locationsLinks.map((location) => (
                        <Link
                          key={location.name}
                          to={location.href}
                          onClick={() => setDesktopLocationsOpen(false)}
                          className="block px-4 py-2 text-gray-200 hover:text-[#656565] rounded-md"
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // SERVICES DROPDOWN
            if (item.name === "Services") {
              return (
                <div key={item.name} ref={servicesRef} className="relative">
                  <button
                    onClick={() => {
                      setDesktopServicesOpen(!desktopServicesOpen);
                      setDesktopLocationsOpen(false);
                    }}
                    className="flex items-center gap-1 font-semibold text-white hover:text-[#656565] transition-colors"
                  >
                    {item.name} <FiChevronDown />
                  </button>

                  {desktopServicesOpen && (
                    <div className={`absolute left-0 mt-2 w-48 z-50 p-2 ${carbonFiberStyle}`}>
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setDesktopServicesOpen(false)}
                          className="block px-4 py-2 text-gray-200 hover:text-[#656565] rounded-md"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // NORMAL LINKS
            return (
              <HashLink
                key={item.name}
                smooth
                to={item.href}
                className="flex items-center gap-1 font-semibold text-white hover:text-[#656565] transition-colors"
              >
                {item.name}
              </HashLink>
            );
          })}
        </div>

        {/* Desktop Social */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2c2c2c] p-2 rounded-full"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-2 lg:hidden">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2c2c2c] p-2 rounded-full"
            >
              {item.icon}
            </a>
          ))}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#656565] p-2 rounded-full text-xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`lg:hidden mt-2 p-4 space-y-3 ${carbonFiberStyle}`}>
          {navLinks.map((item) => {

            if (item.isDropdown) {
              return (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                    className="w-full flex justify-between items-center py-2 text-gray-200 hover:text-[#656565] font-semibold border-b border-[#656565]/20"
                  >
                    {item.name} <FiChevronDown />
                  </button>

                  {mobileLocationsOpen &&
                    locationsLinks.map((location) => (
                      <Link
                        key={location.name}
                        to={location.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileLocationsOpen(false);
                        }}
                        className="block pl-6 py-2 text-gray-200 hover:text-[#656565]"
                      >
                        {location.name}
                      </Link>
                    ))}
                </div>
              );
            }

            if (item.name === "Services") {
              return (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex justify-between items-center py-2 text-gray-200 hover:text-[#656565] font-semibold border-b border-[#656565]/20"
                  >
                    {item.name} <FiChevronDown />
                  </button>

                  {mobileServicesOpen &&
                    servicesLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="block pl-6 py-2 text-gray-200 hover:text-[#656565]"
                      >
                        {service.name}
                      </Link>
                    ))}
                </div>
              );
            }

            return (
              <HashLink
                key={item.name}
                smooth
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-200 hover:text-[#656565] border-b border-[#656565]/20"
              >
                {item.name}
              </HashLink>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;