export default function About() {
  const images = [
    '/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg',
    '/5.jpeg', '/7.webp', '/8.webp', '/9.webp'
  ]

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const n = images.length || 1
  const secondsPerImage = 10
  const gapPx = 16
  const EASING = 'linear'

  return (
    <section id="about" className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text & Stats */}
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ABOUT{' '}
              <span className="linear-text">
                 DT Details
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At DT Details, we are passionate about keeping your vehicle looking its absolute best. Our team specialises in professional car detailing and paint protection services designed to enhance, protect, and maintain your vehicle’s finish.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We offer a full range of detailing solutions tailored to your car’s condition and your expectations, including maintenance cleaning, deep cleaning, paint enhancement, and long-lasting ceramic coating packages.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With our attention to detail, premium products, and customer-focused approach, you can trust DT Detailing to deliver outstanding results every time.
            </p>

            {/* Stats Grid - Fixed Display */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 mt-8 border-t border-white/10 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold linear-text">100+</div>
                <div className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">Vehicles Detailed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold linear-text">5+</div>
                <div className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold linear-text">100%</div>
                <div className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">Satisfaction</div>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="bg-[#656565] text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-md font-bold uppercase tracking-wider text-sm"
            >
              Contact Us
            </button>
          </div>

          {/* Right: Auto-scroll gallery */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl group border border-white/5"
            style={{ '--gap': `${gapPx}px` }}
          >
            <div
              className="relative h-80 md:h-96 lg:h-125"
              style={{ margin: '0 calc(var(--gap) * -1)' }}
            >
              <div
                className="flex h-full will-change-transform"
                style={{
                  '--n': n,
                  '--dur': `${n * secondsPerImage}s`,
                  animation: `aboutscroll var(--dur) ${EASING} infinite`,
                }}
              >
                {[...images, ...images].map((src, i) => (
                  <div
                    key={i}
                    className="w-full flex-[0_0_100%] h-full"
                    style={{ boxSizing: 'border-box', padding: '0 var(--gap)' }}
                  >
                    <div className="h-full w-full overflow-hidden rounded-xl bg-zinc-900">
                      <img
                        src={src}
                        alt={`Gallery ${i + 1}`}
                        className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Edge Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-linear-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-linear-to-l from-black to-transparent" />

          </div>
        </div>
      </div>

      {/* CSS Fixes for Linear Text & Gradients */}
     
    </section>
  )
}