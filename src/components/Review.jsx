import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const testimonials = [
  {
    name: "Reiss Turton",
    role: "Client",
    text: "I took my car to Dom, he spent hours on it and the results were absolutely fantastic! I definitely recommend him to anyone wanting to give their car a proper freshen up."
  },
  {
    name: "Conner Pearson",
    role: "Client",
    text: "Had my car cleaned inside and out by Dom and it came out stunning — looks better than when I bought it. The ceramic coating to protect the paintwork was worth it. His attention to detail really puts your mind at ease. Highly recommended!"
  },
  {
    name: "Che Brown",
    role: "Client",
    text: "My car needed a refresh and Dom took care of it perfectly. His service was 10/10 — professional, comfortable, and easy to deal with. His focus on detail is second to none. I highly recommend him and will definitely be using him again."
  },
  {
    name: "Zak Parkinson",
    role: "Client",
    text: "Couldn’t recommend Dom enough. Top quality valet service, especially removing stubborn pet hair. Excellent customer service and I couldn’t be happier with the result. Would definitely use again."
  },
  {
    name: "Danny Sutton",
    role: "Client",
    text: "Very professional and did an incredible job on the car. He made it look better than new. Amazing service and I will 100% be booking again."
  },
  {
    name: "Millie Briggs",
    role: "Client",
    text: "I hadn’t had my car cleaned since I bought it five months ago. After Dom valeted it, it looked like a brand new car — even better than the day I bought it. Couldn’t recommend him enough!"
  },
  {
    name: "Colette Watkinson",
    role: "Client",
    text: "I would highly recommend DT Details. He made my car look new again and the customer service was amazing."
  },
  {
    name: "Trudy Duke",
    role: "Client",
    text: "Dom came to my house to clean my motorhome which hadn’t been cleaned for months. He arrived on time and worked non-stop all day. The results were fantastic and all previous water marks were gone. Would definitely recommend his detailing services."
  },
  {
    name: "Emily Lynock",
    role: "Client",
    text: "Amazing work! Extremely happy with the results and would definitely recommend to friends and family."
  },
  {
    name: "Ian Blackledge",
    role: "Client",
    text: "Excellent service from a very polite and well-mannered young man. Dom spent nearly six hours detailing my car and brought it back to showroom condition. I would highly recommend his services."
  }
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
 

    const timeout = setTimeout(() => {
      const container = scrollRef.current;
      if (container && container.children.length > 0) {
        const firstCard = container.children[0];
        const scrollPosition =
          firstCard.offsetLeft -
          (container.offsetWidth / 2 - firstCard.offsetWidth / 2);

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonial"
      className="py-16 bg-black text-white relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 font-semibold tracking-widest uppercase text-lg">
            Our Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
            What people say about <br /> our company
          </h2>
        </div>

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition z-20 group"
        >
          <FaChevronLeft
            className="transition-transform duration-300 group-hover:-translate-x-1 text-white"
            size={18}
          />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full shadow-lg hover:bg-white/40 transition z-20 group"
        >
          <FaChevronRight
            className="transition-transform duration-300 group-hover:translate-x-1 text-white"
            size={18}
          />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 py-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
             key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="shrink-0 snap-center w-[85vw] sm:w-[45vw] lg:w-[30%] bg-white/30 border border-gray-800 rounded-2xl shadow-xl hover:shadow-gray-700 transition"
            >
              <div className="pt-6 px-6 pb-6">

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-600 p-1 bg-black shrink-0">
                    <img
                      src="r.png"
                      alt="dt logo"
                      className="w-14 -mt-1 h-full mx-auto object-center"
                    />
                  </div>

                  <div className="flex-1 bg-white/20 py-3 px-4 rounded-lg min-w-0">
                    <h3 className="text-lg font-bold text-white truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-black text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {testimonial.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}