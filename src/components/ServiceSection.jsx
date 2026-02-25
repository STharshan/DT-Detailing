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
            title: 'Car Park Ding Removal Service',
            description: 'Smooth out annoying car park dings quickly using precise PDR techniques, restoring your panels to factory finish without paint.',
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Paintless Dent Repair • Quick Fix • Factory Finish',
        },
        {
            number: '02',
            title: 'Small Dent Removal Service',
            description: `Remove small dents from doors, panels, or bumpers efficiently with Paintless Dent Removal, keeping your car's original paint intact.`,
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Paintless Dent Repair • Precision Repairs • Scratch-Free',
        },
        {
            number: '03',
            title: 'Large Dent Removal Service',
            description: 'Restore large dents seamlessly using advanced PDR tools, ensuring your vehicle looks flawless without repainting.',
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Paintless Dent Repair • Body Panel Specialists • Factory Finish',
        },
        {
            number: '04',
            title: 'Complex Large Dent Repair Service',
            description: 'Handle intricate and deep dents across multiple panels with expert PDR techniques for a smooth, paint-free finish.',
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Paintless Dent Repair • Expert Panel Work • Complex Dent Specialists',
        },
        {
            number: '05',
            title: 'Crease Dent Repair Service',
            description: `Remove sharp creases and lines from your vehicle's bodywork using advanced PDR, restoring curves to their original shape.`,
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Paintless Dent Repair • Crease Specialist • Factory Finish',
        },
        {
            number: '06',
            title: 'Bumper Dent Removal Service',
            description: 'Fix dents and dings on plastic or metal bumpers without repainting, keeping your car looking like new.',
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Paintless Dent Repair • Bumper Specialist • Quick & Clean',
        },
        {
            number: '07',
            title: 'Hail Damage Removal Service',
            description: 'Quickly remove multiple hail dents across the roof, bonnet, and panels using advanced PDR techniques – restoring your vehicle without repainting.',
            image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
            tags: 'Paintless Restoration • Roof & Bonnet Specialists • Factory Finish Guaranteed',
        },
    ];

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const visibleCards = useMemo(() => {
        // On mobile, show only the active card
        if (isMobile) {
            return [{ ...cards[activeCard], originalIndex: activeCard }];
        }
        
        // On desktop, show 3 cards
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

        const cardTimer = setTimeout(() => {
            setActiveCard((prev) => (prev + 1) % cards.length);
        }, TIMER_DURATION);

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

    const handlePrevious = () => {
        setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
        setProgress(0);
    };

    const handleNext = () => {
        setActiveCard((prev) => (prev + 1) % cards.length);
        setProgress(0);
    };

    return (
        <div id='services' className="w-full min-h-screen scroll-m-15 bg-gray-50 dark:bg-black flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-['Inter',sans-serif] transition-colors duration-500">
            
            {/* Header */}
            <div className="mb-8 md:mb-12 text-center">
                <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest transition-colors">
                    Our Services
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-sm mt-2">
                    Showing {activeCard + 1} of {cards.length}
                </p>
            </div>

            {/* Cards Container */}
            <div className="w-full max-w-350 mb-6 md:mb-0">
                {/* Mobile View - Single Card with Navigation */}
                {isMobile ? (
                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrevious}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform active:scale-95"
                            aria-label="Previous service"
                        >
                            <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform active:scale-95"
                            aria-label="Next service"
                        >
                            <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Single Card */}
                        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl min-h-125 sm:min-h-150">
                            {/* Progress Bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800 overflow-hidden z-20">
                                <div
                                    className="absolute left-0 top-0 h-full bg-gray-600 dark:bg-gray-500 transition-all duration-100 ease-linear"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 h-full">
                                {/* Header */}
                                <div className="flex flex-col items-start">
                                    <div className="text-5xl sm:text-6xl font-black text-gray-300 dark:text-gray-800">
                                        {cards[activeCard].number}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-2">
                                        {cards[activeCard].title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                                    {cards[activeCard].description}
                                </p>

                                {/* Image */}
                                <div className="w-full h-48 sm:h-64 overflow-hidden rounded-xl shadow-inner border border-gray-100 dark:border-gray-700 shrink-0">
                                    <img
                                        src={cards[activeCard].image}
                                        alt={cards[activeCard].title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Tags */}
                                <div className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-600 dark:text-gray-500 uppercase mt-auto">
                                    {cards[activeCard].tags}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Desktop View - Multiple Cards */
                    <div className="flex gap-4 lg:gap-6 h-[75vh] min-h-150 items-stretch">
                        {visibleCards.map((card, displayIndex) => {
                            const isFirst = displayIndex === 0;
                            
                            return (
                                <div
                                    key={card.originalIndex}
                                    onClick={() => handleCardClick(card.originalIndex)}
                                    className={`
                                        relative overflow-hidden rounded-3xl cursor-pointer
                                        transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]
                                        bg-white dark:bg-gray-900 
                                        border border-gray-200 dark:border-gray-800
                                        ${isFirst ? 'flex-2' : 'flex-1'}
                                        hover:shadow-2xl dark:hover:shadow-gray-600/10 group
                                    `}
                                >
                                    {/* Progress Bar (Focused Card Only) */}
                                    {isFirst && (
                                        <div className="absolute bottom-0 left-0 w-1.5 h-full bg-gray-100 dark:bg-gray-800 overflow-hidden z-20">
                                            <div
                                                className="absolute bottom-0 left-0 w-full bg-gray-600 transition-all duration-100 ease-linear"
                                                style={{ height: `${progress}%` }}
                                            />
                                        </div>
                                    )}

                                    {/* Card Content */}
                                    <div className="p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 h-full relative z-10">
                                        <div className="flex flex-col items-start">
                                            <div className={`text-5xl lg:text-6xl font-black transition-all duration-700 
                                                ${isFirst 
                                                    ? 'text-gray-300 dark:text-gray-800 scale-110' 
                                                    : 'text-gray-200 dark:text-gray-800 scale-90'}`}>
                                                {card.number}
                                            </div>
                                            <h3 className={`text-lg lg:text-2xl font-bold transition-colors duration-500 mt-2
                                                ${isFirst 
                                                    ? 'text-gray-900 dark:text-white' 
                                                    : 'text-gray-400 dark:text-gray-600'}`}>
                                                {card.title}
                                            </h3>
                                        </div>

                                        <div className={`flex-1 flex flex-col justify-between transition-all duration-700 
                                            ${isFirst ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                                            
                                            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed">
                                                {card.description}
                                            </p>

                                            <div className="w-full h-40 lg:h-48 overflow-hidden rounded-2xl shadow-inner border border-gray-100 dark:border-gray-700 my-4">
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                                />
                                            </div>

                                            <div className="text-[9px] lg:text-[10px] font-bold tracking-widest text-gray-600 uppercase">
                                                {card.tags}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mask for inactive cards */}
                                    {!isFirst && (
                                        <div className="absolute inset-0 bg-white/60 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-0" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-6 md:mt-8">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setActiveCard(i);
                            setProgress(0);
                        }}
                        className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer hover:bg-gray-500
                            ${activeCard === i 
                                ? 'w-8 bg-gray-600 dark:bg-gray-500' 
                                : 'w-2 bg-gray-300 dark:bg-gray-800'}`}
                        aria-label={`Go to service ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;