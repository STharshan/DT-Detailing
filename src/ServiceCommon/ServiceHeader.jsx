import React from "react";

const ServiceHeader = ({ data }) => {
  return (
    <div className=" bg-white text-black">
      {/* Breadcrumbs */}
      <header className="px-6 py-4 max-w-7xl mt-30 mx-auto">
        <nav className="text-xs md:text-sm text-[#404143]">
          Home / <span>Service</span> /{" "}
          <span className="text-black font-medium">
            {data.breadcrumbTitle}
          </span>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title + CTA */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {data.title}
            </h1>

            <p className="text-[#404143] text-lg leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>

          {/* CTA BUTTON – OLD CODE FIX */}
          <div className="flex-shrink-0">
            <a
              href={data.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F21B23] hover:bg-[#404143] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              Get a Quote via WhatsApp
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[300px] md:h-[600px] object-top"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
      </main>
    </div>
  );
};

export default ServiceHeader;
