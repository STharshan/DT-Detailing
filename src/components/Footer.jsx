import React from 'react';
import { Facebook, Instagram, Clock, ArrowRight } from 'lucide-react';
import { BsInstagram, BsTiktok } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PHONE = "+44 7474 461322";
const PHONE_TEL = "+447474461322";
const EMAIL = "dominicturton2@gmail.com";


const Footer = () => {
  const openingHours = [
    { day: "Mon - Sun", time: "8 AM – 6 PM" },
  ];

  const handleNavClick = (e, path) => {
    // If it's an ID on the same page (like #hero or #about)
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/' + path;
      }
    }
  };

  return (
    <footer className="bg-black pt-24 pb-12 relative overflow-hidden">
      {/* Background Big Text */}
      <div className="absolute bottom-[-10%] left-0 w-full pointer-events-none select-none overflow-hidden">
        <h2 className="text-[15vw] font-black text-white/2 uppercase leading-none tracking-tighter whitespace-nowrap">
          DT Details
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="TK Automotive Logo" className="w-full h-full" />

            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Reliable mobile valeting and detailing covering Sheffield and surrounding areas. At 21, I’m focused on building trust through hard work, professionalism, and consistently high standards on every vehicle
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: BsTiktok,
                  link: "https://www.tiktok.com/@dt_details_",
                  hoverBg: "hover:bg-white",
                  hoverIcon: "group-hover:text-black"
                },
                {
                  icon: BsInstagram,
                  link: "https://www.instagram.com/dt_details_",
                  hoverBg: "hover:bg-pink-500",
                  hoverIcon: "group-hover:text-white"
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border border-white/10 
                    flex items-center justify-center 
                    transition-all duration-300 group 
                    ${item.hoverBg}`}
                  >
                    <Icon
                      size={18}
                      className={`text-white transition-all duration-300 
                      group-hover:scale-110 ${item.hoverIcon}`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation - Mixed Smooth Scroll and Routes */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '#about' },
                { name: 'Testimonial', path: "#testimonial" },
                { name: 'Gallery', path: "#gallery" },
                { name: 'Contact Us', path: '#contact' }

              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="text-gray-400 hover:text-brand transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Info</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex flex-col">
                <span className="text-brand font-black text-[10px] mb-1 uppercase tracking-tighter">
                  Location
                </span>

                <a
                  href="https://maps.app.goo.gl/kfStkAFShe8erTGR6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  nottignham 30 mile radius
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-brand font-black text-[10px] mb-1 uppercase tracking-tighter">Phone</span>
                <a href={PHONE_TEL} className="hover:text-white transition-colors">{PHONE}</a>
              </li>
              <li className="flex flex-col">
                <span className="text-brand font-black text-[10px] mb-1 uppercase tracking-tighter">Email</span>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors text-[13px]">{EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Workshop Hours</h4>
            <div className="space-y-4">
              {openingHours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 text-sm">{item.day}</span>
                  <span className={`text-xs font-bold ${item.time === 'Closed' ? 'text-red-900' : 'text-white'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar - All Service Routes */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
            © 2026 DT Details. All rights reserved.
          </p>
          <span className="hidden md:block text-white/10">|</span>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
            Powered by <a href="https://www.ansely.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-[#656565]/60 text-[#656565] transition-colors">Ansely</a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-bold">
            <Link to="/privacy" className="text-gray-600 hover:text-brand transition-colors hover:text-white">Privacy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-brand transition-colors hover:text-white">TermsConditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;