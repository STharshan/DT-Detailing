import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

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
      description: 'Protect your vehicle’s paintwork with our professional ceramic coating packages. Designed to deliver long-lasting gloss, hydrophobic protection, and resistance against environmental damage.',
      image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
      tags: 'Ceramic Coating • Gloss Protection',
      href: '/ceramic-coating',
    },
    {
      number: '02',
      title: 'Paint Enhancement',
      description: 'Restore depth, clarity, and gloss to your vehicle’s paintwork with our professional paint enhancement service. Designed to remove light scratches and swirl marks.',
      image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
      tags: 'Paint Correction • Swirl Removal',
      href: '/paint-enhancement',
    },
    {
      number: '03',
      title: 'Deep Clean',
      description: 'Restore your vehicle to a pristine condition with our professional deep cleaning service. Comprehensive interior and exterior clean to remove embedded dirt.',
      image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
      tags: 'Interior & Exterior • Detailing',
      href: '/deep-clean',
    },
    {
      number: '04',
      title: 'Maintenance Clean',
      description: 'Keep your vehicle fresh, clean, and protected with our professional maintenance cleaning service. Designed for regularly maintained vehicles.',
      image: 'https://framerusercontent.com/images/2d6UchpU1MbzUJ2Yeq8GV9oVUE.jpeg?width=3840&height=2160',
      tags: 'Regular Cleaning • Surface Protection',
      href: '/maintenance-clean',
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setProgress(0);
    const stepTime = 50;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (TIMER_DURATION / stepTime);
        return next >= 100 ? 100 : next;
      });
    }, stepTime);

    const cardTimer = setTimeout(
      () => setActiveCard((prev) => (prev + 1) % cards.length),
      TIMER_DURATION
    );

    return () => {
      clearInterval(progressInterval);
      clearTimeout(cardTimer);
    };
  }, [activeCard]);

  const visibleCards = useMemo(() => {
    if (isMobile) return [{ ...cards[activeCard], originalIndex: activeCard }];
    const result = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      const index = (activeCard + i) % cards.length;
      result.push({ ...cards[index], originalIndex: index });
    }
    return result;
  }, [activeCard, isMobile]);

  return (
    <div id="services" className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-[0.2em]">Our <span className='text-[#c1c1c1]'>Services</span></h2>
      </div>

      <div className="w-full max-w-7xl">
        {isMobile ? (
          /* Mobile View */
          <div className="rounded-3xl overflow-hidden relative shadow-2xl" style={{ backgroundColor: '#7E7E7E' }}>
            {/* Progress Top Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-black/20 z-20">
              <div className="h-full bg-white transition-all duration-100 linear" style={{ width: `${progress}%` }} />
            </div>
            <div className="p-8">
              <span className="text-5xl font-black text-white/20">{cards[activeCard].number}</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">{cards[activeCard].title}</h3>
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img src={cards[activeCard].image} className="w-full h-full object-cover" alt="" />
              </div>
              <Link to={cards[activeCard].href} className="relative z-50 block w-full text-center bg-black text-white py-4 rounded-xl font-bold uppercase hover:bg-zinc-900 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        ) : (
          /* Desktop Layout */
          <div className="flex gap-6 h-150 items-stretch">
            {visibleCards.map((card, displayIndex) => {
              const isFirst = displayIndex === 0;
              return (
                <div
                  key={card.originalIndex}
                  onClick={() => !isFirst && setActiveCard(card.originalIndex)}
                  className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-in-out border border-white/10 ${
                    isFirst ? 'flex-[2.5] cursor-default' : 'flex-1 cursor-pointer hover:brightness-110'
                  }`}
                  style={{ backgroundColor: '#7E7E7E' }}
                >
                  {/* SIDE PROGRESS BAR */}
                  {isFirst && (
                    <div className="absolute left-0 top-0 w-1.5 h-full bg-black/20 z-20">
                      <div className="w-full bg-white transition-all duration-100 linear" style={{ height: `${progress}%` }} />
                    </div>
                  )}

                  <div className="p-10 flex flex-col h-full relative z-10">
                    <div>
                      <div className={`font-black transition-all duration-500 ${isFirst ? 'text-6xl text-white/20' : 'text-4xl text-white/10'}`}>
                        {card.number}
                      </div>
                      <h3 className={`font-bold mt-2 transition-all duration-500 ${isFirst ? 'text-3xl text-white' : 'text-xl text-white/60'}`}>
                        {card.title}
                      </h3>
                    </div>

                    {/* Active Card Content */}
                    <div className={`flex flex-col flex-1 justify-between mt-6 transition-all duration-500 ${isFirst ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <p className="text-white/80 leading-relaxed max-w-md">{card.description}</p>
                      
                      <div className="h-48 w-full rounded-2xl overflow-hidden my-6 shadow-xl">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{card.tags}</div>
                        
                        <div className="relative z-999">
                          <Link
                            to={card.href}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex bg-black text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all active:scale-95 shadow-lg"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>

                    {!isFirst && (
                      <div className="absolute bottom-10 left-10 text-white/40 font-bold text-xs uppercase tracking-widest">
                        View
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay for inactive cards to make them slightly darker */}
                  {!isFirst && <div className="absolute inset-0 bg-black/10 pointer-events-none" />}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* BOTTOM PAGINATION DOTS */}
      <div className="flex gap-3 mt-12">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActiveCard(i); setProgress(0); }}
            className={`h-2 rounded-full transition-all duration-500 ${
              activeCard === i ? 'w-12 bg-white' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;