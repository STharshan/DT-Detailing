import React, { useState, useRef, useEffect } from "react";
import { FiInstagram, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const SocialLinks = ({ links, className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {links.map((item) => (
      <a
        key={item.id}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2c2c2c] p-2 rounded-full"
      >
        {item.icon}
      </a>
    ))}
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopLocationsOpen, setDesktopLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const servicesRef = useRef(null);
  const locationsRef = useRef(null);

  // FIX: Removed dead 'href' from dropdown items and standardized 'isDropdown'
  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "About", href: "/#about" },
    { name: "Services", isDropdown: true, type: 'services' }, 
    { name: "Testimonial", href: "/#testimonial" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
    { name: "Location", isDropdown: true, type: 'location' },
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
      id: "insta",
      icon: <FiInstagram className="text-gray-400 hover:text-pink-500 transition duration-300" />,
      href: "https://www.instagram.com/dt_details_",
    },
    {
      id: "tiktok",
      icon: <FaTiktok className="text-gray-400 hover:text-white transition duration-300" />,
      href: "https://www.tiktok.com/@dt_details_",
    },
  ];

  // FIX: Separate conditions to prevent short-circuiting
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setDesktopServicesOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target)) {
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
      {/* Add this right before the closing </nav> tag */}
<div style={{ display: 'none' }} aria-hidden="true">
  <a href="/maintenance-clean">Maintenance Clean</a>
  <a href="/deep-clean">Deep Clean</a>
  <a href="/paint-enhancement">Paint Enhancement</a>
  <a href="/ceramic-coating">Ceramic Coating</a>
  <a href="/sheffield">Sheffield</a>
  <a href="/doncaster">Doncaster</a>
  <a href="/terms">Terms</a>
  <a href="/privacy">Privacy</a>
</div>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-18 px-6 md:px-12 lg:px-20 py-3">

        <img src="/logo.png" alt="DT Details logo" className="w-35 h-25 object-contain" loading="lazy" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            if (item.isDropdown) {
              const isServices = item.type === 'services';
              const isOpen = isServices ? desktopServicesOpen : desktopLocationsOpen;
              const setOpen = isServices ? setDesktopServicesOpen : setDesktopLocationsOpen;
              const setOtherClose = isServices ? setDesktopLocationsOpen : setDesktopServicesOpen;
              const ref = isServices ? servicesRef : locationsRef;
              const links = isServices ? servicesLinks : locationsLinks;

              return (
                <div key={item.name} ref={ref} className="relative">
                  <button
                    onClick={() => { setOpen(!isOpen); setOtherClose(false); }}
                    className="flex items-center gap-1 font-semibold text-white hover:text-[#656565] transition-colors"
                  >
                    {item.name} <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className={`absolute left-0 mt-2 w-48 z-50 p-2 ${carbonFiberStyle}`}>
                      {links.map((link) => (
                        <Link 
                          key={link.href} 
                          to={link.href} 
                          onClick={() => setOpen(false)} 
                          className="block px-4 py-2 text-gray-200 hover:text-[#656565] rounded-md transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <HashLink key={item.name} smooth to={item.href} className="flex items-center gap-1 font-semibold text-white hover:text-[#656565] transition-colors">
                {item.name}
              </HashLink>
            );
          })}
        </div>

        <SocialLinks links={socialLinks} className="hidden lg:flex" />

        <div className="flex items-center gap-2 lg:hidden">
          <SocialLinks links={socialLinks} />
          <button onClick={() => setMenuOpen(!menuOpen)} className="bg-[#656565] p-2 rounded-full text-xl text-white">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className={`lg:hidden mt-2 p-4 space-y-3 ${carbonFiberStyle}`}>
          {navLinks.map((item) => {
            if (item.isDropdown) {
              const isServices = item.type === 'services';
              const isOpen = isServices ? mobileServicesOpen : mobileLocationsOpen;
              const setOpen = isServices ? setMobileServicesOpen : setMobileLocationsOpen;
              const links = isServices ? servicesLinks : locationsLinks;

              return (
                <div key={item.name} className="space-y-2">
                  <button 
                    onClick={() => setOpen(!isOpen)} 
                    className="w-full flex justify-between items-center py-2 text-gray-200 hover:text-[#656565] font-semibold border-b border-[#656565]/20"
                  >
                    {item.name} <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && links.map((link) => (
                    <Link 
                      key={link.href} 
                      to={link.href} 
                      onClick={() => { setMenuOpen(false); setOpen(false); }} 
                      className="block pl-6 py-2 text-gray-200 hover:text-[#656565]"
                    >
                      {link.name}
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