import React, { useState } from "react";
import { FiSend, FiPhone, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const businessHours = [{ day: "Mon - Sun", time: "8 AM – 6 PM" }];

  const services = [
    "Maintenance Clean",
    "Deep Clean",
    "Paint Enhancement",
    "Ceramic Coating",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "447474461322";

    const text = `*Website Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.number}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    try {
      window.open(whatsappURL, "_blank");
      setStatusMessage("Opening WhatsApp...");
      setStatusType("success");
      setFormData({
        name: "",
        email: "",
        number: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatusMessage("Failed to open WhatsApp. Please try again.");
      setStatusType("error");
    }

    setTimeout(() => {
      setStatusMessage("");
      setStatusType("");
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white px-6 md:px-12 lg:px-24 py-20 border-t border-[#B9BDC1]/40"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div>
            <p className="uppercase text-white text-sm tracking-widest mb-2">
              // Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
              Get in Touch
            </h2>
            <p className="text-[#555555] max-w-md leading-relaxed">
              No delays, no vague replies — we respond within 24 hours to
              schedule your personalised discovery call.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border border-[#B9BDC1]/40 rounded-2xl p-1 transition-all">
              <div className="h-full bg-[#c1c1c1] border border-[#B9BDC1]/30 rounded-2xl p-5 hover:border-[#D10806] hover:shadow-[0_0_20px_rgba(0,120,214,0.1)] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#D10806]/20 rounded-lg text-[#D10806]">
                    <FiSend size={18} />
                  </div>
                  <h3 className="font-semibold text-white">Chat with us</h3>
                </div>
                <a href="mailto:dominicturton2@gmail.com" className="text-black hover:text-gray-700 text-sm truncate">dominicturton2@gmail.com</a>
              </div>
            </div>

            <div className="border border-[#B9BDC1]/40 rounded-2xl p-1 transition-all">
              <div className="h-full bg-[#c1c1c1] border border-[#B9BDC1]/30 rounded-2xl p-5 hover:border-[#D10806]/20 hover:shadow-[0_0_20px_rgba(0,120,214,0.1)] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#D10806]/20 rounded-lg text-[#D10806]">
                    <FiPhone size={18} />
                  </div>
                  <h3 className="font-semibold text-white">Call Us</h3>
                </div>
                <a href="tel:+447474461322" className="text-black hover:text-gray-700 text-sm">+44 7474 461322</a>
              </div>
            </div>

            <div className="sm:col-span-2 border border-[#B9BDC1]/40 rounded-2xl p-1 transition-all">
              <div className="bg-[#c1c1c1] border border-[#B9BDC1]/30 rounded-2xl p-5 hover:border-[#D10806]/20 hover:shadow-[0_0_20px_rgba(0,120,214,0.1)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#D10806]/20 rounded-lg text-[#D10806]">
                    <FiClock size={18} />
                  </div>
                  <h3 className="font-semibold text-white">Opening Hours</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  {businessHours.map((item, idx) => (
                    <div key={idx} className="flex flex-col border-l border-[#B9BDC1]/30 pl-3">
                      <span className="text-black text-[10px] uppercase tracking-wider font-bold">{item.day}</span>
                      <span className={`font-medium ${item.time === "Closed" ? "text-[#B62025]" : "text-black"}`}>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="border border-[#B9BDC1]/40 rounded-2xl p-2 shadow-[0_0_25px_rgba(0,0,0,0.05)] hover:shadow-[0_0_35px_rgba(37,211,102,0.15)] transition-all">
          <div className="border border-[#B9BDC1]/30 rounded-2xl p-8 transition-all">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <label className="block text-xs text-[#555555] mb-2 font-bold tracking-tight">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] placeholder:text-[#555555] focus:outline-none focus:border-[#c1c1c1] transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs text-[#555555] mb-2 font-bold tracking-tight">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] placeholder:text-[#555555] focus:outline-none focus:border-[#c1c1c1] transition"
                />
              </div>

              {/* NUMBER */}
              <div>
                <label className="block text-xs text-[#555555] mb-2 font-bold tracking-tight">
                  NUMBER
                </label>
                <input
                  type="text"
                  name="number"
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] placeholder:text-[#555555] focus:outline-none focus:border-[#c1c1c1] transition"
                />
              </div>

              {/* SERVICE */}
              <div className="relative">
                <label className="block text-xs text-[#555555] mb-2 font-bold tracking-tight">
                  SERVICE
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 pr-10 text-sm text-[#000000] focus:outline-none focus:border-[#c1c1c1] transition"
                >
                  <option value="" disabled hidden>
                    Select a service
                  </option>

                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                {/* Custom Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs text-[#555555] mb-2 font-bold tracking-tight">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your enquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full bg-transparent border border-[#B9BDC1]/40 rounded-lg px-4 py-3 text-sm text-[#000000] placeholder:text-[#555555] focus:outline-none focus:border-[#c1c1c1] transition"
                ></textarea>
              </div>

              {statusMessage && (
                <p
                  className={`text-sm font-medium ${
                    statusType === "success"
                      ? "text-green-600"
                      : "text-[#B62025]"
                  } text-center`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-lg transition text-sm font-medium shadow-[0_0_15px_rgba(37,211,102,0.25)] flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={18} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}