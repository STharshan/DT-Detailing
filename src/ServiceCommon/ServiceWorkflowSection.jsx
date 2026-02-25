import React, { useState, useEffect, useRef } from "react";

const ServiceWorkflowSection = ({ data }) => {
    const [isVisible, setIsVisible] = useState({});
    const sectionRefs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
                }
            });
        }, { threshold: 0.1 });

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

                    {/* LEFT SIDE: SCROLLABLE CONTENT */}
                    <div className="space-y-24">

                        {/* 1. About Service Section */}
                        <section 
                            id="about-service" 
                            ref={el => sectionRefs.current['about-service'] = el} 
                            className="space-y-6"
                        >
                            <div className="inline-block bg-[#F21B23]/20 px-4 py-1 rounded-full text-[#F21B23] font-bold text-xs uppercase tracking-widest">
                                {data.badge}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black">{data.aboutService.title}</h2>
                            <div className="text-[#404143] space-y-4 text-lg leading-relaxed">
                                <p>{data.aboutService.intro}</p>

                                <ul className="list-disc list-inside space-y-2">
                                    {data.aboutService.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                <p>{data.aboutService.outro}</p>
                            </div>
                            
                            <h3 className="text-2xl font-bold pt-4">{data.aboutService.includedTitle}</h3>
                            <p className="text-[#404143]">{data.aboutService.includedIntro}</p>
                            <ul className="space-y-4">
                                {data.aboutService.includedItems.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F21B23] text-white flex items-center justify-center text-xs font-bold mt-1">
                                            {i + 1}
                                        </span>
                                        <p className="text-[#404143]">{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[#404143]">{data.aboutService.includedOutro}</p>
                        </section>

                        {/* 2. How We Work Section */}
                        <section 
                            id="how-we-work" 
                            ref={el => sectionRefs.current['how-we-work'] = el} 
                            className="space-y-8"
                        >
                            <div>
                                <div className="inline-block bg-[#F21B23]/20 px-4 py-1 rounded-full text-[#F21B23] font-bold text-xs uppercase tracking-widest mb-4">
                                    {data.howWeWork.badge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-4">{data.howWeWork.title}</h2>
                                <p className="text-[#404143] text-lg">{data.howWeWork.description}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {data.howWeWork.steps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                                    >
                                        {/* NUMBER CIRCLE */}
                                        <div className="w-14 h-14 bg-[#F21B23]/20 rounded-xl flex items-center justify-center mb-6 text-[#F21B23] font-bold text-lg">
                                            {index + 1}
                                        </div>

                                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-[#404143] text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 3. Service Benefits Section */}
                        <section 
                            ref={el => sectionRefs.current['benefits'] = el} 
                            className="space-y-8"
                        >
                            <div>
                                <div className="inline-block bg-[#F21B23]/20 px-4 py-1 rounded-full text-[#F21B23] font-bold text-xs uppercase tracking-widest mb-4">
                                    {data.benefits.badge}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black">{data.benefits.title}</h2>
                            </div>
                            <p className="text-[#404143] text-lg leading-relaxed">
                                {data.benefits.intro}
                            </p>
                            <ul className="space-y-4">
                                {data.benefits.items.map((benefit, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F21B23]/20 text-[#F21B23] flex items-center justify-center text-xs font-bold mt-1">
                                            {i + 1}
                                        </span>
                                        <p className="text-[#404143]">{benefit}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[#404143] text-lg leading-relaxed">{data.benefits.outro}</p>

                            <div className="rounded-3xl overflow-hidden shadow-2xl mt-10">
                                <img
                                    src={data.benefits.image}
                                    alt={data.benefits.imageAlt}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </section>
                    </div>

                    {/* RIGHT SIDE: STICKY CONTACT FORM */}
                    <aside className="lg:sticky lg:top-10">
                        <div className="bg-[#f8fafc] p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl">
                            <h3 className="text-3xl font-black mb-8">{data.contactForm.title}</h3>
                            <form className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold mb-2">
                                        {data.contactForm.fields.fullName.label}
                                    </label>
                                    <input 
                                        type={data.contactForm.fields.fullName.type}
                                        placeholder={data.contactForm.fields.fullName.placeholder}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition-all" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">
                                        {data.contactForm.fields.phone.label}
                                    </label>
                                    <input 
                                        type={data.contactForm.fields.phone.type}
                                        placeholder={data.contactForm.fields.phone.placeholder}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition-all" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">
                                        {data.contactForm.fields.service.label}
                                    </label>
                                    <select className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition-all bg-white">
                                        {data.contactForm.fields.service.options.map((option, i) => (
                                            <option key={i}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">
                                        {data.contactForm.fields.note.label}
                                    </label>
                                    <textarea 
                                        rows={data.contactForm.fields.note.rows}
                                        placeholder={data.contactForm.fields.note.placeholder}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F21B23] outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full bg-[#F21B23] text-white font-bold py-4 rounded-xl hover:bg-[#404143] transition-all transform active:scale-95 shadow-lg shadow-[#F21B23]/30">
                                    {data.contactForm.submitButton}
                                </button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ServiceWorkflowSection;