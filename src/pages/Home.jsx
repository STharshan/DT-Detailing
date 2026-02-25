import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import ReviewsSection from '../components/Review'
import GallerySection from '../components/Gallery'
import ContactSection from '../components/ContactSection'
import ServiceSection from '../components/ServiceSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <ServiceSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
    </div>
  )
}

export default Home