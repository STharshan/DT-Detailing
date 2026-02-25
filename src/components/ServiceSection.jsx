import React, { useState, useEffect, useMemo } from 'react';

const ServiceSection = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const TIMER_DURATION = 5000;
    const VISIBLE_COUNT = 3;

    const cards = [
        {
            number: '01',
            title: 'Ceramic Coating Protection',
            description: 'Protect your vehicle’s paintwork with our professional ceramic coating packages. Designed to deliver long-lasting gloss, hydrophobic protection, and resistance against environmental damage, our ceramic coatings preserve your vehicle’s finish for years.',
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Ceramic Coating • Gloss Protection • Hydrophobic Finish',
        },
        {
            number: '02',
            title: 'Paint Enhancement',
            description: `Restore depth, clarity, and gloss to your vehicle’s paintwork with our professional paint enhancement service. Designed to remove light scratches, swirl marks, and oxidation, this service significantly improves the appearance and finish of your car.`,
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Paint Correction • Swirl Mark Removal • Scratch Removal',
        },
        {
            number: '03',
            title: 'Deep Clean',
            description: 'Restore your vehicle to a pristine condition with our professional deep cleaning service. Designed for heavily soiled or neglected vehicles, this service delivers a comprehensive interior and exterior clean to remove embedded dirt, stains, and contaminants.',
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Interior & Exterior Cleaning • Stain Removal • Detailing',
        },
        {
            number: '04',
            title: 'Maintenance Clean',
            description: 'Keep your vehicle fresh, clean, and protected with our professional maintenance cleaning service. Designed for regularly maintained vehicles, this service keeps your car looking immaculate inside and out with safe, high-quality cleaning methods.',
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Regular Cleaning • Quick Detailing • Surface Protection',
        },
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const visibleCards = useMemo(() => {
        if (isMobile) return [{ ...cards[activeCard], originalIndex: activeCard }];
        const result = [];
        for (let i = 0; i < VISIBLE_COUNT; i++) {
            const index = (activeCard + i) % cards.length;
            result.push({ ...cards[index], originalIndex: index });
        }
        return result;
    }, [activeCard, cards, isMobile]);

    useEffect(() => {
        setProgress(0);
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + (100 / (TIMER_DURATION / 50));
                return newProgress >= 100 ? 100 : newProgress;
            });
        }, 50);

        const cardTimer = setTimeout(() => setActiveCard((prev) => (prev + 1) % cards.length), TIMER_DURATION);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(cardTimer);
        };
    }, [activeCard, cards.length]);

    const handleCardClick = (originalIndex) => {
        if (originalIndex !== activeCard) {
            setActiveCard(originalIndex);
            setProgress(0);
        }
    };

    const handlePrevious = () => { setActiveCard((prev) => (prev - 1 + cards.length) % cards.length); setProgress(0); };
    const handleNext = () => { setActiveCard((prev) => (prev + 1) % cards.length); setProgress(0); };

    return (
        <div id='services' className="w-full min-h-screen scroll-m-15 bg-black flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-['Inter',sans-serif] transition-colors duration-500">

            {/* Header */}
            <div className="mb-8 md:mb-12 text-center">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest transition-colors">
                    Our Services
                </h2>
                <p className="text-gray-300 font-medium text-xs sm:text-sm mt-2">
                    Showing {activeCard + 1} of {cards.length}
                </p>
            </div>

            {/* Cards Container */}
            <div className="w-full max-w-350 mb-6 md:mb-0">
                {isMobile ? (
                    <div className="relative">
                        <button onClick={handlePrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform active:scale-95" aria-label="Previous service">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform active:scale-95" aria-label="Next service">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-xl min-h-125 sm:min-h-150">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 overflow-hidden z-20">
                                <div className="absolute left-0 top-0 h-full bg-gray-600 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
                            </div>

                            <div className="p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 h-full">
                                <div className="flex flex-col items-start">
                                    <div className="text-5xl sm:text-6xl font-black text-gray-300">{cards[activeCard].number}</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">{cards[activeCard].title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{cards[activeCard].description}</p>
                                <div className="w-full h-48 sm:h-64 overflow-hidden rounded-xl shadow-inner border border-gray-100 shrink-0">
                                    <img src={cards[activeCard].image} alt={cards[activeCard].title} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-600 uppercase mt-auto">{cards[activeCard].tags}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-4 lg:gap-6 h-[75vh] min-h-150 items-stretch">
                        {visibleCards.map((card, displayIndex) => {
                            const isFirst = displayIndex === 0;
                            return (
                                <div key={card.originalIndex} onClick={() => handleCardClick(card.originalIndex)} className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] bg-white border border-gray-200 ${isFirst ? 'flex-2' : 'flex-1'} hover:shadow-2xl group`}>
                                    {isFirst && <div className="absolute bottom-0 left-0 w-1.5 h-full bg-gray-100 overflow-hidden z-20"><div className="absolute bottom-0 left-0 w-full bg-gray-600 transition-all duration-100 ease-linear" style={{ height: `${progress}%` }} /></div>}
                                    <div className="p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 h-full relative z-10">
                                        <div className="flex flex-col items-start">
                                            <div className={`text-5xl lg:text-6xl font-black transition-all duration-700 ${isFirst ? 'text-gray-300 scale-110' : 'text-gray-200 scale-90'}`}>{card.number}</div>
                                            <h3 className={`text-lg lg:text-2xl font-bold transition-colors duration-500 mt-2 ${isFirst ? 'text-gray-900' : 'text-gray-400'}`}>{card.title}</h3>
                                        </div>
                                        <div className={`flex-1 flex flex-col justify-between transition-all duration-700 ${isFirst ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                                            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{card.description}</p>
                                            <div className="w-full h-40 lg:h-48 overflow-hidden rounded-2xl shadow-inner border border-gray-100 my-4">
                                                <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                            </div>
                                            <div className="text-[9px] lg:text-[10px] font-bold tracking-widest text-gray-600">{card.tags}</div>
                                        </div>
                                    </div>
                                    {!isFirst && <div className="absolute inset-0 bg-white/60 group-hover:bg-transparent transition-colors duration-500 z-0" />}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-6 md:mt-8">
                {cards.map((_, i) => (
                    <button key={i} onClick={() => { setActiveCard(i); setProgress(0); }} className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-500 ${activeCard === i ? 'w-8 bg-gray-600' : 'w-2 bg-gray-300'}`} aria-label={`Go to service ${i + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;