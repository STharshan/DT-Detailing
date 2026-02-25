import React from "react";

const ServiceHeader = ({ data }) => {
  return (
    <div className="bg-black text-white"> {/* Set bg-black and text-white */}
      {/* Breadcrumbs */}
      <header className="px-6 py-4 max-w-7xl pt-30 mx-auto">
        <nav className="text-xs md:text-sm text-[#BBBBBB]">
          Home / <span>Service</span> /{" "}
          <span className="text-white font-medium">
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

            <p className="text-[#BBBBBB] text-lg leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>

          {/* CTA BUTTON */}
          <div className="shrink-0">
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
        <div className="relative w-full rounded-xl overflow-hidden shadow-xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full md:w-[80%] mx-auto h-75 md:h-100 rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </main>
    </div>
  );
};

export default ServiceHeader;